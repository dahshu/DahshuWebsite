// The Venue and Travel Information page. One <Card> per section.
// render.mjs builds this to dist/venue.html.
//
// Add or edit sections in the JSX below — each <Card> is a titled block.

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "venue",
  title: "DSDSS2026 Venue and Travel Information",
};

export function Venue() {
  const assets = "_assets/";
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Venue and Travel Information</h1>

        <Card>
          <h3>Conference Venue</h3>
          <p>Joseph B. Martin Conference Center, Longwood Amphitheatre</p>
          <img
            className="content-image"
            src={assets + "joseph-b-martin-longwood-amphitheatre.jpg"}
            alt="Joseph B. Martin Conference Center Longwood Amphitheatre"
          />
        </Card>

        <Card>
          <h3>Short Course Venue</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Banquet Venue</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Hotels</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Registration Guide</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Wi-Fi and Alert System</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Parking and Directions</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Helpful Tips When Visiting Campus</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Things To Do While Visiting</h3>
          <p>TBD</p>
        </Card>
      </article>
    </Page>
  );
}
