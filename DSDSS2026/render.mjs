// DSDSS2026/render.mjs — static site build.
//
//   npm run build:header      (== node DSDSS2026/render.mjs)
//
// Runs in Node, on your machine, once. It does NOT ship to the browser and is
// not a React app — it renders the JSX header/footer to a static HTML string
// and bakes that into a fully deployable copy of the site under dist/.
//
// Pipeline:
//   1. esbuild compiles header.jsx / footer.jsx (the JSX transform only).
//   2. renderToStaticMarkup() turns <Header>/<Footer> into HTML strings.
//   3. The whole site (minus source/tooling) is copied into a clean dist/.
//   4. Each page in dist/ gets the header injected into its mount div and the
//      footer placed (legacy footers removed).
//
// This script only compiles and injects the shared header/footer. Content
// decisions live in source: the menu/hamburger are in the JSX + dsdss2026.css,
// and the source pages are already free of the old Wild Apricot/React scripts.
//
// dist/ is generated and gitignored.

import { readFileSync, writeFileSync, cpSync, rmSync, mkdirSync, readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "node:fs/promises";
import esbuild from "esbuild";

const SRC = path.dirname(fileURLToPath(import.meta.url)); // DSDSS2026/
const ROOT = path.resolve(SRC, ".."); // repo root
const DIST = path.join(ROOT, "dist");

// Top-level names that must NOT be copied into dist/ (source, tooling, vcs).
const EXCLUDE_TOP = new Set([
  "dist",
  "node_modules",
  "DSDSS2026", // JSX source + this script
  ".git",
  ".gitignore",
  "package.json",
  "package-lock.json",
]);

// --- 1. Compile the JSX components and load them as a module ----------------
async function loadComponents() {
  const out = await esbuild.build({
    stdin: {
      contents:
        'import React from "react";\n' +
        'import { renderToStaticMarkup } from "react-dom/server";\n' +
        'import { Header } from "./header.jsx";\n' +
        'import { Footer } from "./footer.jsx";\n' +
        'export const renderHeader = (page, prefix) =>\n' +
        '  renderToStaticMarkup(React.createElement(Header, { page, prefix }));\n' +
        'export const renderFooter = () =>\n' +
        '  renderToStaticMarkup(React.createElement(Footer));\n',
      resolveDir: SRC,
      sourcefile: "components.jsx",
      loader: "jsx",
    },
    bundle: true,
    format: "esm",
    platform: "node",
    jsx: "automatic",
    write: false,
    // Keep React external so the compiled bundle resolves the real packages
    // from node_modules at import time (bundling react-dom/server's Node
    // built-ins into an inline module breaks).
    external: ["react", "react-dom", "react-dom/server"],
  });

  // Write next to the source so bare "react" imports resolve via node_modules,
  // import it, then clean up.
  const tmp = path.join(SRC, ".components.build.mjs");
  writeFileSync(tmp, out.outputFiles[0].text);
  try {
    return await import(pathToFileURL(tmp).href + "?t=" + Date.now());
  } finally {
    rmSync(tmp, { force: true });
  }
}

// --- 2. Copy the site into a clean dist/ ------------------------------------
function freshDist() {
  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });
  // Copy each top-level entry individually (copying ROOT wholesale is rejected
  // because DIST is inside ROOT).
  for (const name of readdirSync(ROOT)) {
    if (EXCLUDE_TOP.has(name)) continue;
    cpSync(path.join(ROOT, name), path.join(DIST, name), {
      recursive: true,
      filter: (srcPath) => path.basename(srcPath) !== ".DS_Store",
    });
  }
}

// --- 3. HTML transforms (re-runnable via markers) ---------------------------
const HDR_OPEN = "<!--shared-header:start-->";
const HDR_CLOSE = "<!--shared-header:end-->";
const FTR_OPEN = "<!--shared-footer:start-->";
const FTR_CLOSE = "<!--shared-footer:end-->";

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const stripBetween = (html, open, close) =>
  html.replace(new RegExp(escapeRe(open) + "[\\s\\S]*?" + escapeRe(close), "g"), "");

// Fill the empty mount div: <div data-shared-header-root="1" ...></div>
function fillHeader(html, renderHeader) {
  const re = /(<div\b[^>]*\bdata-shared-header-root="1"[^>]*>)([\s\S]*?)(<\/div>)/;
  const m = html.match(re);
  if (!m) return { html, ok: false };

  const open = m[1];
  const page = (open.match(/data-current-page="([^"]*)"/) || [, "__home__"])[1];
  const prefix = (open.match(/data-nav-prefix="([^"]*)"/) || [, ""])[1];
  const inner = `${HDR_OPEN}${renderHeader(page, prefix)}${HDR_CLOSE}`;
  return { html: html.replace(re, `${open}${inner}${m[3]}`), ok: true };
}

// Remove legacy Wild Apricot footers, then insert ours once.
function placeFooter(html, footerHtml) {
  html = stripBetween(html, FTR_OPEN, FTR_CLOSE);
  html = html
    .replace(/<footer\b[^>]*\bclass="[^"]*footer-panel[^"]*"[^>]*>[\s\S]*?<\/footer>/g, "")
    .replace(/<div\b[^>]*\bclass="[^"]*zoneFooter1?Outer[^"]*"[^>]*>[\s\S]*?<\/div>\s*/g, "");

  const block = `${FTR_OPEN}${footerHtml}${FTR_CLOSE}`;
  const branding = html.match(/<div\b[^>]*\bclass="[^"]*zoneBrandingOuter[^"]*"/);
  if (branding) return html.replace(branding[0], `${block}\n${branding[0]}`);
  return html.replace(/<\/body>/i, `${block}\n</body>`);
}

// --- main -------------------------------------------------------------------
async function main() {
  const { renderHeader, renderFooter } = await loadComponents();
  const footerHtml = renderFooter();

  freshDist();

  let baked = 0;
  const skipped = [];
  for await (const file of glob(path.join(DIST, "**/index.html"))) {
    let html = readFileSync(file, "utf8");
    if (!/data-shared-header-root="1"/.test(html)) continue;

    const h = fillHeader(html, renderHeader);
    if (!h.ok) {
      skipped.push(path.relative(DIST, file));
      continue;
    }
    html = placeFooter(h.html, footerHtml);
    writeFileSync(file, html);
    baked += 1;
  }

  console.log(`Baked header/footer into ${baked} page(s) under dist/.`);
  if (skipped.length) {
    console.log(`Skipped (mount div not matched): ${skipped.join(", ")}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
