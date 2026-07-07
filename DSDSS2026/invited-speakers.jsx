// The Invited Speakers page. One <Card> per speaker.
// render.mjs builds this to dist/invited-speakers.html.
//
// Edit the SPEAKERS array below. Each speaker: id (anchor), name, affiliation,
// session, schedule, photo (filename under _assets/scientific-session-speakers/,
// or null for a blank placeholder), and bio (one or more paragraphs).

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "invited-speakers",
  title: "DSDSS2026 Invited Speakers",
};

const SPEAKERS = [
  {
    id: "session-1-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 1",
    schedule: "Thursday, October 22, 2026, 9:50 AM - 11:30 AM",
    photo: null,
    bio: [
      "This showcase bridges the gap between academic research and pharmaceutical industry application by bringing together leading experts to highlight the real-world impact of artificial intelligence.",
      "Moving past theoretical hype, the session features a curated selection of high-impact, concrete case studies demonstrating how AI is actively transforming medicine.",
      "Featured presentations will explore verified success stories across accelerated drug discovery, clinical trial optimization, and translational research.",
      "By focusing on evidence-based examples, this event provides a practical blueprint for cross-disciplinary collaboration and offers a clear view of how data-driven innovation is driving the next generation of biomedical solutions.",
    ],
  },
  {
    id: "session-2-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 2",
    schedule: "Thursday, October 22, 2026, 1:00 PM - 2:40 PM",
    photo: null,
    bio: ["Abstract to be provided."],
  },
  {
    id: "session-3-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 3",
    schedule: "Thursday, October 22, 2026, 2:50 PM - 4:30 PM",
    photo: null,
    bio: [
      "This session examines how advanced technologies are reshaping clinical trials as artificial intelligence (AI), machine learning (ML), and digital health tools become embedded across the drug development life cycle - from trial design and patient selection to endpoint assessment and regulatory decision-making.",
      "The session will share case examples leveraging predictive models, wearable-derived endpoints, and real-world data.",
      "The session will provide a concise roadmap for deploying AI and digital tools responsibly, recognizing common pitfalls, and navigating the evolving regulatory landscape that is redefining the future of quantitative science in drug development.",
    ],
  },
  {
    id: "session-4-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 4",
    schedule: "Thursday, October 22, 2026, 4:40 PM - 5:40 PM",
    photo: null,
    bio: [
      "As the volume of Real-World Data (RWD) expands, the pharmaceutical industry faces a critical bottleneck: transforming unstructured data into rigorous, actionable clinical evidence.",
      "This session explores the end-to-end architecture required to achieve this, bridging cutting-edge causal inference methodology with modern data infrastructure and pharmaceutical execution.",
      "Attendees will gain a comprehensive understanding of how advanced statistical frameworks - specifically Targeted Learning and Target Trial Emulation - are moving beyond academic theory to directly impact clinical differentiation and improve the Probability of Success (PoS) in drug development.",
    ],
  },
  {
    id: "junrui-di",
    name: "Dr. Junrui Di",
    affiliation: "Director, Data Science & Digital Health, Neuroscience, Johnson & Johnson",
    session: "Session 5",
    schedule: "Friday, October 23, 2026, 8:30 AM - 9:30 AM",
    photo: "junrui-di.jpg",
    bio: ["Bio to be provided."],
  },
  {
    id: "jacek-urbanek",
    name: "Dr. Jacek K. Urbanek",
    affiliation: "Director, Biostatistics, Regeneron",
    session: "Session 5",
    schedule: "Friday, October 23, 2026, 8:30 AM - 9:30 AM",
    photo: "jacek-urbanek.jpg",
    bio: [
      "Emerging digital technologies—such as wearable sensors and at-home self-assessments—capture physiological, functional, and behavioral data remotely in patients' everyday environments. By enabling frequent, unbiased measurement across the full functional spectrum, these tools reveal clinical insights that traditional point-in-time visits often miss.",
      "Realizing their potential requires new strategies for study design, quantitative methods, and data and computing infrastructure so that digital biomarkers and outcome measures meet high standards of clinical research and development.",
    ],
  },
  {
    id: "marta-karas",
    name: "Dr. Marta Karas",
    affiliation: "Senior Manager, Statistics, Takeda",
    session: "Session 5",
    schedule: "Friday, October 23, 2026, 8:30 AM - 9:30 AM",
    photo: "marta-karas.jpg",
    bio: ["Bio to be provided."],
  },
  {
    id: "session-6-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 6",
    schedule: "Friday, October 23, 2026, 9:50 AM - 11:30 AM",
    photo: null,
    bio: [
      "This session will highlight emerging methods at the intersection of rigorous statistical inference and modern machine learning for analyzing high-dimensional genomic data.",
    ],
  },
  {
    id: "fahimeh-mamashli",
    name: "Dr. Fahimeh Mamashli",
    affiliation: "Associate Director, Data Science, Data and Statistical Science AI/ML, Daiichi Sankyo",
    session: "Session 7",
    schedule: "Friday, October 23, 2026, 1:00 PM - 2:40 PM",
    photo: "fahimeh-mamashli.jpg",
    bio: ["Bio to be provided."],
  },
  {
    id: "alex-sverdlov",
    name: "Dr. Alex Sverdlov",
    affiliation: "Senior Director, Statistical Scientist, Novartis",
    session: "Session 7",
    schedule: "Friday, October 23, 2026, 1:00 PM - 2:40 PM",
    photo: "alex-sverdlov.jpg",
    bio: ["Bio to be provided."],
  },
  {
    id: "claude-viman",
    name: "Claude Viman",
    affiliation: "Senior Partner, EnQubes",
    session: "Session 7",
    schedule: "Friday, October 23, 2026, 1:00 PM - 2:40 PM",
    photo: "claude-viman.jpg",
    bio: ["Bio to be provided."],
  },
  {
    id: "session-8-tba",
    name: "To Be Announced",
    affiliation: "",
    session: "Session 8",
    schedule: "Friday, October 23, 2026, 3:00 PM - 4:40 PM",
    photo: null,
    bio: [
      "This is going to be a Bayesian session.",
      'This session mainly focuses on recent advancement or reactions in responding to a recent FDA landmark draft guidance, "Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products," jointly released by the Center for Drug Evaluation and Research (CDER) and the Center for Biologics Evaluation and Research (CBER).',
    ],
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
