// The Mixer Speakers page. Renders the shared <Page> shell with the content
// inside. render.mjs builds this to dist/mixer-speakers.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "mixer-speakers",
  title: "DSDSS2026 Mixer Speakers",
};

export function MixerSpeakers() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Mixer Speakers</h1>
        <p>To be announced.</p>
      </article>
    </Page>
  );
}
