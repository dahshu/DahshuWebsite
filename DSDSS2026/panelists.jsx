// The Panelists page. Renders the shared <Page> shell with the content inside.
// render.mjs builds this to dist/panelists.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "panelists",
  title: "DSDSS2026 Panelists",
};

export function Panelists() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Panelists</h1>
        <p>To be announced.</p>
      </article>
    </Page>
  );
}
