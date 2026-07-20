// DSDSS2026/render.mjs — static site build.
//
//   npm run build      (== node DSDSS2026/render.mjs)
//
// Runs in Node, on your machine, once. It does NOT ship to the browser and is
// not a React app — it renders each page's JSX to a static HTML document under
// dist/.
//
// Pipeline:
//   1. esbuild compiles the page JSX (the JSX transform only).
//   2. renderToStaticMarkup() turns each <Page> into an HTML string.
//   3. The whole site (minus source/tooling) is copied into a clean dist/.
//   4. Each page in PAGES is written to dist/<name>.html (flat, at the root).
//
// Every page lives at the site root: sponsor.jsx -> dist/sponsor.html, served
// at [host]/sponsor.html. index.jsx -> dist/index.html (the home page).
//
// dist/ is generated and gitignored.

import { readFileSync, writeFileSync, cpSync, rmSync, mkdirSync, readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";
import path from "node:path";
import esbuild from "esbuild";

const SRC = path.dirname(fileURLToPath(import.meta.url)); // DSDSS2026/
const ROOT = path.resolve(SRC, ".."); // repo root
const DIST = path.join(ROOT, "dist");

// "agenda.jsx" -> "Agenda", "banquet-speakers.jsx" -> "BanquetSpeakers".
// The exported component name for a page file is its name in PascalCase.
const componentName = (file) =>
  path
    .basename(file, ".jsx")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

// "sponsor.jsx" -> "sponsor.html". The output filename is the source name.
const outName = (file) => path.basename(file, ".jsx") + ".html";

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

// The page JSX files. Each exports `meta` (page key + title) and a component.
// Add new pages here; the output file is the source name with a .html suffix.
const PAGES = [
  "index.jsx",
  "abstract-submission.jsx",
  "agenda.jsx",
  "banquet.jsx",
  "banquet-speakers.jsx",
  "committee.jsx",
  "invited-speakers.jsx",
  "keynote-sessions.jsx",
  "keynote-speakers.jsx",
  "opening-remarks.jsx",
  "closing-remarks.jsx",
  "panelists.jsx",
  "poster-submission.jsx",
  "registration.jsx",
  "scientific-sessions.jsx",
  "sponsor.jsx",
  "venue.jsx",
];

// --- 1. Compile the page JSX and load it as a module ------------------------
async function loadPages() {
  const imports = PAGES.map(
    (file, i) => `import { meta as meta${i}, ${componentName(file)} as Comp${i} } from "./${file}";`
  ).join("\n");
  const entries = PAGES.map(
    (file, i) =>
      `{ out: ${JSON.stringify(outName(file))}, render: () => renderToStaticMarkup(React.createElement(Comp${i})) }`
  ).join(", ");

  const out = await esbuild.build({
    stdin: {
      contents:
        'import React from "react";\n' +
        'import { renderToStaticMarkup } from "react-dom/server";\n' +
        imports +
        "\n" +
        `export const pages = [${entries}];\n`,
      resolveDir: SRC,
      sourcefile: "pages.jsx",
      loader: "jsx",
    },
    bundle: true,
    format: "esm",
    platform: "node",
    jsx: "automatic",
    write: false,
    // Keep React external so the compiled bundle resolves the real packages
    // from node_modules at import time.
    external: ["react", "react-dom", "react-dom/server"],
  });

  // Write next to the source so bare "react" imports resolve via node_modules,
  // import it, then clean up.
  const tmp = path.join(SRC, ".pages.build.mjs");
  writeFileSync(tmp, out.outputFiles[0].text);
  try {
    return await import(pathToFileURL(tmp).href + "?t=" + Date.now());
  } finally {
    rmSync(tmp, { force: true });
  }
}

// --- 2. Copy the site assets into a clean dist/ -----------------------------
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

// --- 3. Render each page to dist/<name>.html --------------------------------
function writePages(pages) {
  for (const { out, render } of pages) {
    writeFileSync(path.join(DIST, out), "<!DOCTYPE html>\n" + render());
  }
  return pages.length;
}

// --- main -------------------------------------------------------------------
async function main() {
  const { pages } = await loadPages();
  freshDist();
  const rendered = writePages(pages);
  console.log(`Rendered ${rendered} page(s) under dist/.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
