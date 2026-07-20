// Draft agenda highlights: a two-column card (Day 1 / Day 2) for the home page,
// below the keynote speakers. Adapted from the printed flyer, restyled to the
// site's crimson palette. Styling lives in .agenda-* rules in
// dsdss2026-harvard-home.css.
//
// Edit the DAYS array to change the schedule. Each day has a title and a list
// of blocks; each block has a heading (time span) and a list of items.

import React from "react";

const DAYS = [
  {
    label: "Day 1",
    date: "Thursday, October 22",
    blocks: [
      {
        heading: "Morning (7:30 AM – 11:30 AM)",
        items: [
          "Registration & Refreshments",
          "Opening Remarks",
          "Keynote 1",
          "Session 1: Causal Evidence & Real-World Data",
        ],
      },
      {
        heading: "11:30 Lunch & Poster Session",
        items: [],
      },
      {
        heading: "Afternoon (1:00 PM – 5:40 PM)",
        items: [
          "Session 2: High-Dimensional Learning for Biomedical Data",
          "Session 3: Advanced Technologies in Clinical Trials",
          "Session 4: AI in Drug Discovery & Translational Research",
        ],
      },
      {
        heading: "Evening (6:40 PM – 9:00 PM)",
        items: ["Banquet & Networking"],
      },
    ],
  },
  {
    label: "Day 2",
    date: "Friday, October 23",
    blocks: [
      {
        heading: "Morning (7:30 AM – 12:15 PM)",
        items: [
          "Registration & Refreshments",
          "Keynote 2",
          "Session 5: Digital Health & Wearable Sensors",
          "Session 6: High-Dimensional Genomics",
        ],
      },
      {
        heading: "12:15 Lunch",
        items: [],
      },
      {
        heading: "Afternoon (1:15 PM – 5:00 PM)",
        items: [
          "Session 7: Explainable AI",
          "Session 8: Bayesian Methodology in Clinical Trials",
          "Closing Remarks",
        ],
      },
    ],
  },
];

// Agenda items link to the relevant page and are color-coded by category so the
// different kinds of program events are visually distinguishable. Each rule maps
// a text pattern to a destination and a category class (agenda-link-*). Items
// that match nothing render as plain text.
const AGENDA_LINKS = [
  { test: /^Session (\d+)/, href: (m) => `scientific-sessions.html#session${m[1]}`, category: "session" },
  { test: /^Keynote/, href: () => "keynote-sessions.html", category: "keynote" },
  { test: /^Opening Remarks/, href: () => "opening-remarks.html", category: "remarks" },
  { test: /^Closing Remarks/, href: () => "closing-remarks.html", category: "remarks" },
  { test: /^Banquet/, href: () => "banquet.html", category: "banquet" },
];

function AgendaItem({ text }) {
  for (const { test, href, category } of AGENDA_LINKS) {
    const match = text.match(test);
    if (match) {
      return (
        <a className={`agenda-link agenda-link-${category}`} href={href(match)}>
          {text}
        </a>
      );
    }
  }
  return text;
}

export function AgendaHighlights() {
  return (
    <>
      <section className="section-heading agenda-heading">
        <h2>AGENDA HIGHLIGHTS</h2>
      </section>

      <section className="agenda-grid">
        {DAYS.map((day) => (
          <article className="agenda-day" key={day.label}>
            <header className="agenda-day-header">
              <span className="agenda-day-label">{day.label}</span>
              <span className="agenda-day-date">{day.date}</span>
            </header>
            <div className="agenda-day-body">
              {day.blocks.map((block) => (
                <div className="agenda-block" key={block.heading}>
                  <h3>{block.heading}</h3>
                  {block.items.length > 0 && (
                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>
                          <AgendaItem text={item} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <p className="agenda-note">Draft agenda — subject to change.</p>

      <p className="agenda-cta">
        <a className="agenda-cta-button" href="agenda.html">
          Click here for full agenda
        </a>
      </p>
    </>
  );
}
