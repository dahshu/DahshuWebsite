// The Banquet Speakers page. Renders the shared <Page> shell with the content
// inside. render.mjs builds this to dist/banquet-speakers.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "banquet-speakers",
  title: "DSDSS2026 Banquet Speakers",
};

export function BanquetSpeakers() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Banquet Speakers</h1>
        <p>To be announced.</p>
      </article>
    </Page>
  );
}
