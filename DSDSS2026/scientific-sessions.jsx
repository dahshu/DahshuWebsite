// The Scientific Sessions page. One <Card> per session.
// render.mjs builds this to dist/scientific-sessions.html.
//
// Edit the SESSIONS array below. Each session: number, schedule (or null),
// speakers (one or more {name, affiliation, photo, role?}), and abstract
// (one or more paragraphs). photo is a filename under
// _assets/scientific-session-speakers/ or null for a blank placeholder.
// role is optional (e.g., "Speaker", "Session Organizer", "Moderator") and
// shown as a small label above the speaker's name. affiliation may be empty
// (e.g., for a "To Be Announced" placeholder), in which case the line is
// omitted.

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
    title: "The Architecture of Causal Evidence: Translating Targeted Learning into Real-World Data Reality",
    schedule: null,
    speakers: [
      {
        name: "Susan Gruber",
        affiliation: "TL Revolution LLC",
        photo: "susan-gruber.jpg",
        role: "Speaker",
        talk: "Targeted Maximum Likelihood Estimation (TMLE)",
      },
      {
        name: "Miguel Hernán",
        affiliation: "Harvard University",
        photo: "miguel-hernan.png",
        role: "Speaker",
        talk: "Target Trial Emulation",
      },
      {
        name: "Xiang Zhang",
        affiliation: "CSL Behring",
        photo: "xiang-zhang.jpg",
        role: "Speaker",
        talk: "Real World Application",
      },
      {
        name: "Dr. Jane Zhang",
        affiliation: "Head of Immunology Statistics, AbbVie",
        photo: "jane-zhang.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "As the volume of Real-World Data (RWD) expands, the pharmaceutical industry faces a critical bottleneck: transforming unstructured data into rigorous, actionable clinical evidence.",
      "This session explores the end-to-end architecture required to achieve this, bridging cutting-edge causal inference methodology with modern data infrastructure and pharmaceutical execution.",
      "Attendees will gain a comprehensive understanding of how advanced statistical frameworks - specifically Targeted Learning and Target Trial Emulation - are moving beyond academic theory to directly impact clinical differentiation and improve the Probability of Success (PoS) in drug development.",
    ],
  },
  {
    number: 2,
    schedule: null,
    speakers: [
      {
        name: "Ye Tian",
        affiliation: "Pennsylvania State University",
        photo: "ye-tian.jpg",
        role: "Speaker",
      },
      {
        name: "Mengyan Li",
        affiliation: "Bentley University",
        photo: "mengyan-li.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Runze Li",
        affiliation: "Eberly Family Chair in Statistics, Pennsylvania State University",
        photo: "runze-li.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This session presents new theory and methodology for high-dimensional statistical learning in modern biomedical applications, from cross-population genetic prediction to representation learning from electronic health records.",
      "Ye Tian studies cross-population polygenic risk score (PRS) prediction, which leverages large datasets to improve prediction in smaller populations. Using a high-dimensional sparse linear regression framework with population-specific and genetically correlated shared signals, the work characterizes how optimal estimation depends on genetic correlation, sample sizes, and signal and noise variances, and shows that Bayesian estimators can achieve near-optimal performance where some global-penalization transfer learning methods do not.",
      "Mengyan Li introduces SCORE, a semi-supervised representation learning framework for clustering and embedding high-dimensional count data such as EHR and RNA sequencing. Built on a Poisson-adapted latent factor mixture model with a hybrid EM and Gaussian variational algorithm, SCORE uses a small labeled subset to refine estimation on large unlabeled data, with convergence guarantees and error rates. It is demonstrated on predicting disability status in multiple sclerosis from EHR data.",
    ],
  },
  {
    number: 3,
    schedule: null,
    speakers: [
      {
        name: "To Be Announced",
        affiliation: "",
        photo: null,
        role: "Speaker",
      },
      {
        name: "Dr. Sara Hamon",
        affiliation: "Senior Director, Precision Medicine-Quantitative Translational Sciences, Regeneron",
        photo: "sara-hamon.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This session examines how advanced technologies are reshaping clinical trials as artificial intelligence (AI), machine learning (ML), and digital health tools become embedded across the drug development life cycle - from trial design and patient selection to endpoint assessment and regulatory decision-making.",
      "The session will share case examples leveraging predictive models, wearable-derived endpoints, and real-world data.",
      "The session will provide a concise roadmap for deploying AI and digital tools responsibly, recognizing common pitfalls, and navigating the evolving regulatory landscape that is redefining the future of quantitative science in drug development.",
    ],
  },
  {
    number: 4,
    schedule: null,
    speakers: [
      {
        name: "To Be Announced",
        affiliation: "",
        photo: null,
        role: "Speaker",
      },
      {
        name: "Dr. Haoda Fu",
        affiliation: "Head of Exploratory Biostatistics, Amgen",
        photo: "haoda-fu.webp",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This showcase bridges the gap between academic research and pharmaceutical industry application by bringing together leading experts to highlight the real-world impact of artificial intelligence.",
      "Moving past theoretical hype, the session features a curated selection of high-impact, concrete case studies demonstrating how AI is actively transforming medicine.",
      "Featured presentations will explore verified success stories across accelerated drug discovery, clinical trial optimization, and translational research.",
      "By focusing on evidence-based examples, this event provides a practical blueprint for cross-disciplinary collaboration and offers a clear view of how data-driven innovation is driving the next generation of biomedical solutions.",
    ],
  },
  {
    number: 5,
    schedule: null,
    speakers: [
      {
        name: "Dr. Junrui Di",
        affiliation: "Director, Data Science & Digital Health, Neuroscience, Johnson & Johnson",
        photo: "junrui-di.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Jacek K. Urbanek",
        affiliation: "Director, Biostatistics, Regeneron",
        photo: "jacek-urbanek.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Marta Karas",
        affiliation: "Senior Manager, Statistics, Takeda",
        photo: "marta-karas.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Jaroslaw Harezlak",
        affiliation:
          "Chair, Department of Epidemiology and Biostatistics, Indiana University School of Public Health-Bloomington",
        photo: "jaroslaw-harezlak.jpg",
        role: "Moderator",
      },
    ],
    abstract: [
      "Emerging digital technologies—such as wearable sensors and at-home self-assessments—capture physiological, functional, and behavioral data remotely in patients' everyday environments. By enabling frequent, unbiased measurement across the full functional spectrum, these tools reveal clinical insights that traditional point-in-time visits often miss.",
      "Realizing their potential requires new strategies for study design, quantitative methods, and data and computing infrastructure so that digital biomarkers and outcome measures meet high standards of clinical research and development.",
      "In this session, three digital health industry veterans will share practical guidance for statistically rigorous methods supporting strategy, experimental design, instrument operationalization, and synthesis of results. They will illustrate approaches to monitoring disease progression and to developing and validating measures, with examples from narcolepsy and Parkinson's disease.",
      "Opening remarks will be delivered by Dr. Jaroslaw Harezlak—an academic pioneer in wearable devices and Chair of the Department of Epidemiology and Biostatistics at Indiana University School of Public Health-Bloomington. He will also moderate the panel discussion and Q&A session.",
    ],
  },
  {
    number: 6,
    schedule: null,
    speakers: [
      {
        name: "To Be Announced",
        affiliation: "",
        photo: null,
        role: "Speaker",
      },
      {
        name: "Dr. Nancy Zhang",
        affiliation: "Ge Li and Ning Zhao Professor of Statistics, The Wharton School, University of Pennsylvania",
        photo: "nancy-zhang.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This session will highlight emerging methods at the intersection of rigorous statistical inference and modern machine learning for analyzing high-dimensional genomic data.",
    ],
  },
  {
    number: 7,
    schedule: null,
    speakers: [
      {
        name: "Dr. Fahimeh Mamashli",
        affiliation: "Associate Director, Data Science, Data and Statistical Science AI/ML, Daiichi Sankyo",
        photo: "fahimeh-mamashli.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Alex Sverdlov",
        affiliation: "Senior Director, Statistical Scientist, Novartis",
        photo: "alex-sverdlov.jpg",
        role: "Speaker",
      },
      {
        name: "Claude Viman",
        affiliation: "Senior Partner, EnQubes",
        photo: "claude-viman.jpg",
        role: "Speaker",
      },
      {
        name: "Mercedeh Ghadessi",
        affiliation: "Director, Principal Statistician, Bayer",
        photo: "mercedeh-ghadessi.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "Explainable Artificial Intelligence (XAI) refers to a set of methods and techniques in artificial intelligence (AI) that aim to make the decision-making processes of AI systems understandable to human users.",
      'The primary goal of XAI is to provide transparency, accountability, and interpretability in AI models, particularly those that are complex and often considered "black boxes," such as deep learning models.',
    ],
  },
  {
    number: 8,
    title: "Recent Advancement on Bayesian Methodology in Clinical Trials for Drugs and Biologics",
    schedule: null,
    speakers: [
      {
        name: "Yuhua Zhang",
        affiliation: "University of Florida",
        photo: "yuhua-zhang.jpg",
        role: "Speaker",
        talk: "Flexible Evaluation of Trial-Level Surrogates Using a Combination of Randomized and Observational Subgroups",
      },
      {
        name: "Chenguang Wang",
        affiliation: "Regeneron",
        photo: null,
        role: "Speaker",
        talk: "Bridging Bayesian Trial Design from FDA Guidance to Practice",
      },
      {
        name: "Dr. Ming-Hui Chen",
        affiliation: "Board of Trustees Distinguished Professor of Statistics, University of Connecticut",
        photo: "ming-hui-chen.jpg",
        role: "Speaker",
        talk: "Statistical Methods for Borrowing Information in Pediatric Clinical Trials: A Comparative Review",
      },
      {
        name: "Lei Nie",
        affiliation: "Division of Biometrics IV, Office of Biostatistics, OTS, CDER, FDA",
        photo: null,
        role: "Discussant",
      },
      {
        name: "Wanxue Zou",
        affiliation: "Regeneron",
        photo: "wanxue-zou.png",
        role: "Session Chair",
      },
    ],
    abstract: [
      "Session Organizers: Ming-Hui Chen and Chenguang Wang.",
      "This is going to be a Bayesian session.",
      'This session mainly focuses on recent advancement or reactions in responding to a recent FDA landmark draft guidance, "Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products," jointly released by the Center for Drug Evaluation and Research (CDER) and the Center for Biologics Evaluation and Research (CBER).',
    ],
  },
];

export function ScientificSessions() {
  const photoDir = "_assets/scientific-session-speakers/";
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Scientific Sessions</h1>

        {SESSIONS.map((s) => (
          <Card key={s.number} id={`session${s.number}`} className="session">
            <div className="session-body">
              <h3>{s.title ? `Session ${s.number}: ${s.title}` : `Session ${s.number}`}</h3>
              <p>
                <strong>Schedule:</strong> {s.schedule || "TBD"}
              </p>
              {s.abstract.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="session-speakers">
              {s.speakers.map((sp, i) => (
                <div key={i} className="session-speaker-row">
                  {sp.photo ? (
                    <img className="session-speaker-photo" src={photoDir + sp.photo} alt={sp.name} />
                  ) : (
                    <div className="session-speaker-photo speaker-photo-blank" aria-hidden="true" />
                  )}
                  <div className="session-speaker-info">
                    {sp.role && <p className="session-speaker-role">{sp.role}</p>}
                    <p className="session-speaker-name">{sp.name}</p>
                    {sp.affiliation && <p className="session-speaker-affiliation">{sp.affiliation}</p>}
                    {sp.talk && <p className="session-speaker-talk">{sp.talk}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </article>
    </Page>
  );
}
