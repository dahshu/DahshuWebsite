// The Mixer page. Renders the shared <Page> shell with the mixer content
// inside. render.mjs builds this to dist/mixer.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "mixer",
  title: "DSDSS2026 Mixer",
};

export function Mixer() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Mixer</h1>
        <p>
          <strong>Schedule:</strong> Thursday, October 22, 2026, 6:40 pm - 9:00 pm
        </p>
      </article>
    </Page>
  );
}
