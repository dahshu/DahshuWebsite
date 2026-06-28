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
    name: "Gonçalo Abecasis",
    affiliation: "Regeneron",
    photo: "goncalo-rocha-abecasis-user-current.jpg",
    bio: ["Gonçalo Abecasis is a renowned biomedical researcher at the University of Michigan, serves as Vice President & Chief Genomics and Data Science Officer at the Regeneron Genetics Center, and was chair of the Department of Biostatistics in the School of Public Health. He leads a group at the Center for Statistical Genetics in the Department of Biostatistics, where he is also the Felix E. Moore Collegiate Professor of Biostatistics and director of the Michigan Genomic Initiative. His group develops statistical tools to analyze the genetics of human disease."],
  },
  {
    id: "susan",
    name: "Susan Murphy",
    affiliation: "Harvard University",
    photo: "7d07c87a0885fc27a8bb61d04b5c10bb.JPG",
    bio: ["Susan Murphy is a prominent statistician and computer scientist known for her work applying statistical methods to clinical trials of treatments for chronic and relapsing medical conditions. She is the Mallinckrodt Professor of Statistics and of Computer Science at Harvard University, a MacArthur Fellow, and a member of the National Academy of Sciences."],
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
