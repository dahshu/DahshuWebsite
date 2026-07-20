// The Sponsors page. Renders the shared <Page> shell with the sponsor content
// inside. render.mjs builds this to dist/sponsor.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "sponsor",
  title: "DSDSS2026 Sponsors",
};

export function Sponsor() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Sponsors</h1>
        <p>To be announced.</p>
      </article>

      <article className="content-card">
        <h1>Donate Now</h1>
        <a className="btn-upload" href="https://dahshu.wildapricot.org/Donate" target="_blank" rel="noopener noreferrer">
          Donate Now
        </a>
      </article>
    </Page>
  );
}
