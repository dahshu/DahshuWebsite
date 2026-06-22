// The Committee page. Renders the shared <Page> shell with the committee
// rosters. render.mjs builds this to dist/committee.html.
//
// Edit the rosters below; each entry is [name, affiliation].

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "committee",
  title: "DSDSS2026 Committee",
};

const STEERING = [
  ["Tianxi Chi", "Harvard University"],
  ["Jing Huang", "CareDx"],
  ["Yali Li", "Biomerieux"],
  ["Jeen Liu", "Regeneron"],
  ["Rui (Sammi) Tang", "Astellas Pharmaceuticals"],
  ["Peng Yang", "Clindata Insight"],
  ["Heping Zhang", "Yale University"],
];

const PROGRAM = [
  ["Jeen Liu (Co-chair)", "Regeneron Pharmaceuticals"],
  ["Heping Zhang (Co-chair)", "Yale University"],
  ["Tianxi Cai", "Harvard University"],
  ["Ming-Hui Chen", "University of Connecticut"],
  ["Haoda Fu", "Amgen"],
  ["Mercedeh Ghadessi", "Bayer"],
  ["Runze Li", "Penn State University"],
  ["Harsh Parikh", "Yale University"],
  ["Li Wang", "AbbVie"],
  ["Jane Zhang", "AbbVie Immunology"],
  ["Nancy Zhang", "University of Pennsylvania"],
  ["Heng Zhou", "Merck"],
];

const LOCAL = [
  ["Tianxi Chi (Co-chair)", "Harvard University"],
  ["Yali Li (Co-chair)", "Biomerieux"],
  ["Ran Duan", "Vertex Pharmaceuticals"],
  ["Anwen Huang", "University of California, Los Angeles"],
  ["Rui (Sammi) Tang", "Astellas Pharmaceuticals"],
  ["Zhaoyang Teng", "Astellas Pharmaceuticals"],
  ["Jiawen Wang", "Massachusetts General Hospital"],
  ["Peng Yang", "Clindata Insight"],
  ["Jiarui Zhang", "Johnson & Johnson"],
];

function Roster({ members }) {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Affiliation</th>
        </tr>
      </thead>
      <tbody>
        {members.map(([name, affiliation]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{affiliation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Committee() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Committee List</h1>

        <h2>Steering Committee</h2>
        <Roster members={STEERING} />

        <h2>Organizing/Program Committee</h2>
        <Roster members={PROGRAM} />

        <h2>Local Committee</h2>
        <Roster members={LOCAL} />
      </article>
    </Page>
  );
}
