// The Invited Speakers page. One <Card> per speaker.
// render.mjs builds this to dist/invited-speakers.html.
//
// Edit the SPEAKERS array below. Each speaker: id (anchor), name, affiliation,
// session, and photo (filename under _assets/scientific-session-speakers/, or
// null for a blank placeholder). Invited speakers get no bio — the card shows
// the affiliation and a link to the session.

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "invited-speakers",
  title: "DSDSS2026 Invited Speakers",
};

const SPEAKERS = [
  {
    id: "susan-gruber",
    name: "Dr. Susan Gruber",
    affiliation: "TL Revolution LLC",
    session: "Session 1",
    photo: "susan-gruber.jpg",
  },
  {
    id: "miguel-hernan",
    name: "Dr. Miguel Hernán",
    affiliation: "Harvard University",
    session: "Session 1",
    photo: "miguel-hernan.png",
  },
  {
    id: "xiang-zhang",
    name: "Dr. Xiang Zhang",
    affiliation: "CSL Behring",
    session: "Session 1",
    photo: "xiang-zhang.jpg",
  },
  {
    id: "ye-tian",
    name: "Dr. Ye Tian",
    affiliation: "Pennsylvania State University",
    session: "Session 2",
    photo: "ye-tian.jpg",
  },
  {
    id: "mengyan-li",
    name: "Dr. Mengyan Li",
    affiliation: "Bentley University",
    session: "Session 2",
    photo: "mengyan-li.jpg",
  },
  {
    id: "session-3-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 3",
    photo: null,
  },
  {
    id: "rolando-acosta",
    name: "Dr. Rolando J. Acosta",
    affiliation: "Manager, Biostatistics, Regeneron",
    session: "Session 4",
    photo: "rolando-acosta.jpg",
  },
  {
    id: "jimeng-sun",
    name: "Dr. Jimeng Sun",
    affiliation:
      "Health Innovation Professor, Siebel School of Computing and Data Science and Carle Illinois College of Medicine, University of Illinois Urbana-Champaign; Cofounder, Keiji AI",
    session: "Session 4",
    photo: "jimeng-sun.png",
  },
  {
    id: "yi-lin-chiu",
    name: "Dr. Yi-Lin Chiu",
    affiliation: "Director and Department Head, Discovery and Exploratory Statistics (DIVES), Biometrics, AbbVie",
    session: "Session 4",
    photo: "yi-lin-chiu.jpg",
  },
  {
    id: "junrui-di",
    name: "Dr. Junrui Di",
    affiliation: "Director, Data Science & Digital Health, Neuroscience, Johnson & Johnson",
    session: "Session 5",
    photo: "junrui-di.jpg",
  },
  {
    id: "jacek-urbanek",
    name: "Dr. Jacek K. Urbanek",
    affiliation: "Director, Biostatistics, Regeneron",
    session: "Session 5",
    photo: "jacek-urbanek.jpg",
  },
  {
    id: "marta-karas",
    name: "Dr. Marta Karas",
    affiliation: "Senior Manager, Statistics, Takeda",
    session: "Session 5",
    photo: "marta-karas.jpg",
  },
  {
    id: "jacob-bien",
    name: "Dr. Jacob Bien",
    affiliation: "Professor of Data Sciences and Operations, USC Marshall School of Business",
    session: "Session 6",
    photo: "jacob-bien.jpg",
  },
  {
    id: "session-6-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 6",
    photo: null,
  },
  {
    id: "fahimeh-mamashli",
    name: "Dr. Fahimeh Mamashli",
    affiliation: "Associate Director, Data Science, Data and Statistical Science AI/ML, Daiichi Sankyo",
    session: "Session 7",
    photo: "fahimeh-mamashli.jpg",
  },
  {
    id: "alex-sverdlov",
    name: "Dr. Alex Sverdlov",
    affiliation: "Senior Director, Statistical Scientist, Novartis",
    session: "Session 7",
    photo: "alex-sverdlov.jpg",
  },
  {
    id: "gurpreet-nanda",
    name: "Dr. Gurpreet Nanda",
    affiliation: "Senior Director, Head of Applied Machine Learning, Bayer",
    session: "Session 7",
    photo: "gurpreet-nanda.jpg",
  },
  {
    id: "yuhua-zhang",
    name: "Yuhua Zhang",
    affiliation: "University of Florida",
    session: "Session 8",
    photo: "yuhua-zhang.jpg",
  },
  {
    id: "chenguang-wang",
    name: "Dr. Chenguang Wang",
    affiliation: "Regeneron",
    session: "Session 8",
    photo: "chenguang-wang.jpg",
  },
  {
    id: "ming-hui-chen",
    name: "Dr. Ming-Hui Chen",
    affiliation: "Board of Trustees Distinguished Professor of Statistics, University of Connecticut",
    session: "Session 8",
    photo: "ming-hui-chen.jpg",
  },
  {
    id: "wanxue-zou",
    name: "Dr. Wanxue Zou",
    affiliation: "Regeneron",
    session: "Session 8",
    photo: "wanxue-zou.png",
  },

];

export function InvitedSpeakers() {
  const photoDir = "_assets/scientific-session-speakers/";
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Invited Speakers</h1>

        <div className="speaker-grid-4">
          {SPEAKERS.map((s) => (
            <Card key={s.id} className="speaker speaker-vertical">
              <div className="speaker-figure">
                {s.photo ? (
                  <img className="speaker-photo" src={photoDir + s.photo} alt={s.name} />
                ) : (
                  <div className="speaker-photo speaker-photo-blank" aria-hidden="true" />
                )}
              </div>
              <div className="speaker-body">
                <h3>{s.name}</h3>
                {s.affiliation && (
                  <p>
                    <strong>{s.affiliation}</strong>
                  </p>
                )}
                <p>
                  <strong></strong>{" "}
                  <a href={`scientific-sessions.html#session${s.session.replace(/\D/g, "")}`}>
                    {s.session}
                  </a>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </article>
    </Page>
  );
}
