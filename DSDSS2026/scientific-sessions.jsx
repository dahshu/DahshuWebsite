// The Scientific Sessions page. One <Card> per session.
// render.mjs builds this to dist/scientific-sessions.html.
//
// Edit the SESSIONS array below. Each session: number, organizer, affiliation,
// schedule (or null), photo (filename under _assets/scientific-session-speakers/,
// or null for a blank placeholder), and abstract (one or more paragraphs).

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "scientific-sessions",
  title: "DSDSS2026 Scientific Sessions",
};

const SESSIONS = [
  {
    number: 1,
    organizer: "Haoda Fu",
    affiliation: "Amgen",
    schedule: "Thursday, October 22, 2026, 9:50 AM - 11:30 AM",
    photo: "haoda-fu.webp",
    abstract: [
      "This showcase bridges the gap between academic research and pharmaceutical industry application by bringing together leading experts to highlight the real-world impact of artificial intelligence.",
      "Moving past theoretical hype, the session features a curated selection of high-impact, concrete case studies demonstrating how AI is actively transforming medicine.",
      "Featured presentations will explore verified success stories across accelerated drug discovery, clinical trial optimization, and translational research.",
      "By focusing on evidence-based examples, this event provides a practical blueprint for cross-disciplinary collaboration and offers a clear view of how data-driven innovation is driving the next generation of biomedical solutions.",
    ],
  },
  {
    number: 2,
    organizer: "Runze Li",
    affiliation: "PSU",
    schedule: "Thursday, October 22, 2026, 1:00 PM - 2:40 PM",
    photo: "runze-li.jpg",
    abstract: ["Abstract to be provided."],
  },
  {
    number: 3,
    organizer: "Sara Hamon",
    affiliation: "Regeneron",
    schedule: "Thursday, October 22, 2026, 2:50 PM - 4:30 PM",
    photo: null,
    abstract: [
      "This session examines how advanced technologies are reshaping clinical trials as artificial intelligence (AI), machine learning (ML), and digital health tools become embedded across the drug development life cycle - from trial design and patient selection to endpoint assessment and regulatory decision-making.",
      "The session will share case examples leveraging predictive models, wearable-derived endpoints, and real-world data.",
      "The session will provide a concise roadmap for deploying AI and digital tools responsibly, recognizing common pitfalls, and navigating the evolving regulatory landscape that is redefining the future of quantitative science in drug development.",
    ],
  },
  {
    number: 4,
    organizer: "Jane Zhang",
    affiliation: "AbbVie",
    schedule: "Thursday, October 22, 2026, 4:40 PM - 5:40 PM",
    photo: null,
    abstract: [
      "As the volume of Real-World Data (RWD) expands, the pharmaceutical industry faces a critical bottleneck: transforming unstructured data into rigorous, actionable clinical evidence.",
      "This session explores the end-to-end architecture required to achieve this, bridging cutting-edge causal inference methodology with modern data infrastructure and pharmaceutical execution.",
      "Attendees will gain a comprehensive understanding of how advanced statistical frameworks - specifically Targeted Learning and Target Trial Emulation - are moving beyond academic theory to directly impact clinical differentiation and improve the Probability of Success (PoS) in drug development.",
    ],
  },
  {
    number: 5,
    organizer: "Jacek Urbanek",
    affiliation: "Regeneron",
    schedule: "Friday, October 23, 2026, 8:30 AM - 9:30 AM",
    photo: "jacek-urbanek.jpg",
    abstract: [
      "This session traces the end-to-end arc of immunology-driven drug development - from population-scale genetics that nominate causal targets, through translational biomarker discovery and patient stratification, to late-phase clinical trials that convert hypotheses into actionable evidence.",
      "The program highlights how statistical genetics, computational biology, and clinical biostatistics intersect to advance therapies for immune-mediated diseases.",
      "The audience will leave with a cohesive, practical view of the genome-to-patient pipeline and concrete insights for cross-functional collaboration.",
    ],
  },
  {
    number: 6,
    organizer: "Nancy Zhang",
    affiliation: "Upenn",
    schedule: null,
    photo: "nancy-zhang.jpg",
    abstract: [
      "This session will highlight emerging methods at the intersection of rigorous statistical inference and modern machine learning for analyzing high-dimensional genomic data.",
    ],
  },
  {
    number: 7,
    organizer: "Mercedeh Ghadessi",
    affiliation: "Bayer",
    schedule: null,
    photo: "mercedeh-ghadessi.jpg",
    abstract: [
      "Explainable Artificial Intelligence (XAI) refers to a set of methods and techniques in artificial intelligence (AI) that aim to make the decision-making processes of AI systems understandable to human users.",
      'The primary goal of XAI is to provide transparency, accountability, and interpretability in AI models, particularly those that are complex and often considered "black boxes," such as deep learning models.',
    ],
  },
  {
    number: 8,
    organizer: "Ming-Hui Chen",
    affiliation: "UConn",
    schedule: null,
    photo: "ming-hui-chen.jpg",
    abstract: [
      "This is going to be a Bayesian session.",
      'This session mainly focuses on recent advancement or reactions in responding to a recent FDA landmark draft guidance, "Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products," jointly released by the Center for Drug Evaluation and Research (CDER) and the Center for Biologics Evaluation and Research (CBER).',
    ],
  },
];

export function ScientificSessions() {
  const photoDir = "_assets/scientific-session-speakers/";
  const speakers = "speakers.html";
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Scientific Sessions</h1>

        {SESSIONS.map((s) => (
          <Card key={s.number} className="speaker">
            <div className="speaker-figure">
              {s.photo ? (
                <img className="speaker-photo" src={photoDir + s.photo} alt={s.organizer} />
              ) : (
                <div className="speaker-photo speaker-photo-blank" aria-hidden="true" />
              )}
            </div>
            <div className="speaker-body">
              <h3>Session {s.number}</h3>
              <p>
                <strong>Organizer:</strong> {s.organizer}
              </p>
              <p>
                <strong>{s.affiliation}</strong>
              </p>
              {s.schedule && (
                <p>
                  <strong>Schedule:</strong> {s.schedule}
                </p>
              )}
              {s.abstract.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Card>
        ))}
      </article>
    </Page>
  );
}
