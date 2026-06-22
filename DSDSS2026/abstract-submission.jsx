// The Abstract Submission page. Renders the shared <Page> shell with the
// submission call and upload button. render.mjs builds this to
// dist/abstract-submission.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "abstract-submission",
  title: "DSDSS2026 Abstract Submission",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSce91gO8S83U69-gw9MQ0PZGWHQAyCG9uNT3oN1gIEzJ-LkgA/viewform?usp=header";

export function AbstractSubmission() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Abstract Submission</h1>
        <p>
          This form is for invited speakers ONLY. Please click the button below
          to submit your abstract.
        </p>
        <a className="btn-upload" href={FORM_URL} target="_blank" rel="noopener noreferrer">
          Upload Abstract
        </a>
      </article>
    </Page>
  );
}
