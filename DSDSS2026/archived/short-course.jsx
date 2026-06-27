// The Short Course page. Renders the shared <Page> shell with the content
// inside. render.mjs builds this to dist/short-course.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "short-course",
  title: "DSDSS2026 Short Course",
};

export function ShortCourse() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-card">
        <h1>Short Course</h1>
        <p>To be announced.</p>
      </article>
    </Page>
  );
}
