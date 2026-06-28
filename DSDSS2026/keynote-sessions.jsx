// The Keynote Sessions page. One <Card> per speaker.
// render.mjs builds this to dist/keynote-sessions.html.
//
// Edit the SPEAKERS array below. Each speaker: id (React key), name,
// affiliation, sessionDetails, photo (filename under _assets/, or null for a blank
// placeholder), and detail (the speaker's own session page folder).

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "keynote-sessions",
  title: "DSDSS2026 Keynote Sessions",
};

const SPEAKERS = [
  {
    id: "key1",
    name: "Gonçalo Abecasis",
    affiliation: "Regeneron",
    sessionDetails: "To be provided.",
    photo: "goncalo-rocha-abecasis-user-current.jpg",
  },
  {
    id: "key2",
    name: "Susan Murphy",
    affiliation: "Harvard University",
    sessionDetails: "To be provided.",
    photo: "7d07c87a0885fc27a8bb61d04b5c10bb.JPG",
  },
];

export function KeynoteSessions() {
  const assets = "_assets/";
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Keynote Sessions</h1>

        {SPEAKERS.map((s) => (
          <Card key={s.id} className="speaker">
            <div className="speaker-figure">
              {s.photo ? (
                <img className="speaker-photo" src={assets + s.photo} alt={s.name} />
              ) : (
                <div className="speaker-photo speaker-photo-blank" aria-hidden="true" />
              )}
            </div>
            <div className="speaker-body">
              <h3>{s.name}</h3>
              <p>
                <strong>Affiliation:</strong> {s.affiliation}
              </p>
              <p>
                <strong>Session Details:</strong> {s.sessionDetails}
              </p>
            </div>
          </Card>
        ))}
      </article>
    </Page>
  );
}
