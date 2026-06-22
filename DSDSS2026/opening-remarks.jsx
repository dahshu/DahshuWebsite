// The Opening Remarks page. Renders the shared <Page> shell with the content
// inside. render.mjs builds this to dist/opening-remarks.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "opening-remarks",
  title: "DSDSS2026 Opening Remarks",
};

export function OpeningRemarks() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Opening Remarks</h1>
        <p>To be announced.</p>
      </article>
    </Page>
  );
}
