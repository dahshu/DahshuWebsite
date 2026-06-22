// The Poster Submission page. Renders the shared <Page> shell with the call for
// poster presentations and upload button. render.mjs builds this to
// dist/poster-submission.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "poster-submission",
  title: "DSDSS2026 Poster Submission",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf70qxOQpb_KqlRwEiqVCZ98SCCoU69Mf2dbC_9-tPRIisgvQ/viewform?usp=header";

export function PosterSubmission() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Call for Poster Presentations</h1>
        <p>
          We invite submissions from students, trainees, and professionals to
          showcase their work related to AI, data science, and statistics.
        </p>
        <p>
          Prizes will be awarded for outstanding poster presentations that are
          most relevant to the theme of the symposium. Due to space constraints,
          a limited number of submissions will be accepted. To apply, please
          submit a title and abstract by October 3, 2026. The size of the poster
          can be at most 36 inches tall and 48 inches wide.
        </p>
        <p>
          <strong>
            The presenting author must register the conference and present
            in-person.
          </strong>
        </p>
        <a className="btn-upload" href={FORM_URL} target="_blank" rel="noopener noreferrer">
          Upload Poster Abstract
        </a>
      </article>
    </Page>
  );
}
