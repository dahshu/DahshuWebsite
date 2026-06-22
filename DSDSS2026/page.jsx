// The shared page shell: a complete page built from the Header, the page body,
// and the Footer. Every page is authored as a JSX file that renders <Page> and
// drops its content inside. render.mjs turns a <Page> into a full static HTML
// document.
//
// The layout is generic — the same shell applies to every page, so its styling
// hooks (.page-shell, .page-main, .content-card) are page-agnostic and live in
// _assets/dsdss2026.css.
//
//   page    the page's `data-current-page` key (drives nav highlighting).
//   title   <title> text for the document head.
//   head    optional extra nodes for <head> (e.g. an extra stylesheet).
//   scripts optional extra nodes at the end of <body> (e.g. a carousel init).
//   bare    skip the centered .page-main wrapper so the page can lay out its
//           own full-width sections (used by the home page hero).

import React from "react";
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";

export function Page({ page, title, head, scripts, bare = false, children }) {
  return (
    <html lang="en" className="no-js">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        {/* Explicit empty icon so the browser doesn't fall back to requesting
            /favicon.ico (which can surface a stale icon from a prior site). */}
        <link rel="icon" href="data:," />
        <link rel="stylesheet" href="_assets/dsdss2026.css" />
        {head}
      </head>
      <body className="dsdss2026Section">
        {/* Flex column so the footer is pinned to the bottom of the viewport
            (or below the content if it's taller) rather than floating mid-page. */}
        <div className="page-shell">
          <Header page={page} />
          {bare ? children : <main className="page-main">{children}</main>}
          <Footer />
        </div>
        {scripts}
      </body>
    </html>
  );
}
