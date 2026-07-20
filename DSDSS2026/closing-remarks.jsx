// The Closing Remarks page. Renders the shared <Page> shell with the content
// inside. render.mjs builds this to dist/closing-remarks.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "closing-remarks",
  title: "DSDSS2026 Closing Remarks",
};

export function ClosingRemarks() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Closing Remarks</h1>
        <p>To be announced.</p>
      </article>
    </Page>
  );
}
