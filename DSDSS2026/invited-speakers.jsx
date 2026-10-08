// The Invited Speakers page. One <Card> per speaker.
// render.mjs builds this to dist/invited-speakers.html.
//
// Edit the SPEAKERS array below. Each speaker: id (anchor), name, affiliation,
// session, and photo (filename under _assets/scientific-session-speakers/, or
// null for a blank placeholder), plus an optional role (e.g., "Session 5
// Organizer") shown under the session link. Invited speakers get no bio — the card shows
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
    id: "ying-li",
    name: "Dr. Ying Li",
    affiliation: "Director, Real World Evidence, Regeneron",
    session: "Session 1",
    photo: "ying-li.jpg",
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
    id: "yuan-huang",
    name: "Dr. Yuan Huang",
    affiliation: "Assistant Professor of Biostatistics, Yale School of Public Health",
    session: "Session 2",
    photo: "yuan-huang.jpg",
  },
  {
    id: "yong-chen",
    name: "Dr. Yong Chen",
    affiliation: "Professor of Biostatistics and Informatics, University of Pennsylvania",
    session: "Session 2",
    photo: "yong-chen.jpg",
  },
  {
    id: "yihua-gu",
    name: "Yihua Gu",
    affiliation: "Vice President of Biostatistics, AbbVie",
    session: "Session 3",
    photo: "yihua-gu.jpg",
  },
  {
    id: "michael-kessler",
    name: "Michael Kessler",
    affiliation: "Director of Statistical Genetics, Regeneron",
    session: "Session 3",
    photo: "michael-kessler.jpg",
  },
  {
    id: "rolando-acosta",
    name: "Dr. Rolando J. Acosta",
    affiliation: "Manager, Biostatistics, Regeneron",
    session: "Session 4",
    photo: "rolando-acosta.jpg",
  },
  {
    id: "erick-scott",
    name: "Dr. Erick Scott",
    affiliation: "VP, Clinical Data Science, Keiji AI",
    session: "Session 4",
    photo: "erick-scott.jpg",
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
    role: "Session 5 Organizer",
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
    id: "jaroslaw-harezlak",
    name: "Dr. Jaroslaw Harezlak",
    affiliation:
      "Chair, Department of Epidemiology and Biostatistics, Indiana University School of Public Health-Bloomington",
    session: "Session 5",
    role: "Session 5 Moderator",
    photo: "jaroslaw-harezlak.jpg",
  },
  {
    id: "jacob-bien",
    name: "Dr. Jacob Bien",
    affiliation: "Professor of Data Sciences and Operations, USC Marshall School of Business",
    session: "Session 6",
    photo: "jacob-bien.jpg",
  },
  {
    id: "rong-ma",
    name: "Dr. Rong Ma",
    affiliation: "Assistant Professor of Biostatistics, Harvard T.H. Chan School of Public Health",
    session: "Session 6",
    photo: "rong-ma.jpg",
  },
  {
    id: "ying-jin",
    name: "Dr. Ying Jin",
    affiliation: "Assistant Professor, Statistics and Data Science, The Wharton School, University of Pennsylvania",
    session: "Session 6",
    photo: "ying-jin.jpg",
  },
  {
    id: "haiyan-huang",
    name: "Dr. Haiyan Huang",
    affiliation: "Professor of Statistics, University of California, Berkeley",
    session: "Session 6",
    photo: "haiyan-huang.jpg",
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
    affiliation: "Executive Director, Biostatistics, Alnylam Pharmaceuticals",
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
    id: "lei-nie",
    name: "Dr. Lei Nie",
    affiliation: "Division of Biometrics IV, Office of Biostatistics, OTS, CDER, FDA",
    session: "Session 8",
    role: "Session 8 Discussant",
    photo: "lei-nie.jpg",
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
                {s.role && <p>{s.role}</p>}
              </div>
            </Card>
          ))}
        </div>
      </article>
    </Page>
  );
}
