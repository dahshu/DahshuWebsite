// The Keynote Speakers page. One <Card> per speaker.
// render.mjs builds this to dist/keynote-speakers.html.
//
// Edit the SPEAKERS array below. Each speaker: id (React key), name,
// affiliation, photo (filename under _assets/, or null for a blank
// placeholder), and bio (one or more paragraphs).

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "keynote-speakers",
  title: "DSDSS2026 Keynote Speakers",
};

const SPEAKERS = [
  {
    id: "goncalo",
    name: "Goncalo Rocha Abecasis",
    affiliation: "Regeneron",
    photo: "goncalo-rocha-abecasis-user-current.jpg",
    bio: ["Abstract to be provided."],
  },
  {
    id: "susan",
    name: "Susan Murphy",
    affiliation: "Harvard University",
    photo: "7d07c87a0885fc27a8bb61d04b5c10bb.JPG",
    bio: ["Abstract to be provided."],
  },
];

export function KeynoteSpeakers() {
  const assets = "_assets/";
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Keynote Speakers</h1>

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
              {s.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Card>
        ))}
      </article>
    </Page>
  );
}
