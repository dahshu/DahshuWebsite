// The Banquet page. Renders the shared <Page> shell with the banquet content
// inside. render.mjs builds this to dist/banquet.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "banquet",
  title: "DSDSS2026 Banquet",
};

export function Banquet() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Banquet</h1>
        <p>To be announced.</p>
      </article>
    </Page>
  );
}
