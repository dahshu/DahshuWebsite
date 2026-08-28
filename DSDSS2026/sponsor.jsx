// The Sponsors page. Renders the shared <Page> shell with the sponsor content
// inside. render.mjs builds this to dist/sponsor.html.

import React from "react";
import { Page } from "./page.jsx";
import { SponsorCard } from "./sponsor-card.jsx";

export const meta = {
  page: "sponsor",
  title: "DSDSS2026 Sponsors",
};

const PLATINUM_SPONSORS = [
  {
    image: "caredxlogo.png",
    name: "CareDx",
    bio: "CareDx creates life-changing solutions that enable patients to thrive. Its integrated approach to precision medicine combines advanced diagnostics, streamlined workflows, and patient support to inform clinical decisions and improve patient outcomes.",
  },
  // Logos not received yet — these render with the blank placeholder frame.
  { name: "BSSC" },
  { name: "BeOne Medicines" },
  { name: "DIP" },
];

const GOLD_SPONSORS = [
  {
    image: "amgen.com.png",
    name: "Amgen",
    bio: "Amgen harnesses the best of biology and technology to fight the world's toughest diseases and make people's lives easier, fuller and longer. A pioneer of the biotechnology industry, Amgen remains on the cutting edge of innovation, using technology and human genetic data to push beyond what's known today.",
  },
];

const SILVER_SPONSORS = [
  {
    image: "astellas-cropped.jpg",
    name: "Astellas",
    bio: "Astellas is a global life sciences company committed to turning innovative science into VALUE for patients.",
  },
  {
    image: "pfizer-cropped.png",
    name: "Pfizer",
    bio: "Pfizer's purpose is breakthroughs that change patients' lives. We pursue that goal relentlessly and innovate every day to make the world a healthier place.",
  },
  { image: "regeneron-logo-png_seeklogo-507092.png", name: "Regeneron" },
  {
    image: "sentieon-cropped.png",
    name: "Sentieon",
    bio: "Sentieon develops highly-optimized algorithms for bioinformatics, applying deep expertise in modeling, machine learning, and high-performance computing to enable precision data for precision medicine.",
  },
  {
    image: "KeijiAI-cropped.png",
    name: "Keiji AI",
    bio: "Keiji AI develops purpose-built AI for clinical research and development. Its TrialMind platform helps teams work faster and more consistently across literature review, trial design, and real-world evidence workflows.",
  },
];

// Sort a tier's sponsors alphabetically by name (case-insensitive) so each
// tier always renders A→Z regardless of array order.
const byName = (list) => [...list].sort((a, b) => a.name.localeCompare(b.name));

export function Sponsor() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Sponsors</h1>

        <h2 className="sponsor-tier-banner">Platinum Level</h2>
        <div className="speaker-grid-4">
          {byName(PLATINUM_SPONSORS).map((s, i) => (
            <SponsorCard key={i} {...s} />
          ))}
        </div>

        <h2 className="sponsor-tier-banner">Gold Level</h2>
        <div className="speaker-grid-4">
          {byName(GOLD_SPONSORS).map((s, i) => (
            <SponsorCard key={i} {...s} />
          ))}
        </div>

        <h2 className="sponsor-tier-banner">Silver Level</h2>
        <div className="speaker-grid-4">
          {byName(SILVER_SPONSORS).map((s, i) => (
            <SponsorCard key={i} {...s} />
          ))}
        </div>
      </article>

      <article className="content-card">
        <h1>Donate Now</h1>
        <a className="btn-upload" href="https://dahshu.wildapricot.org/Donate" target="_blank" rel="noopener noreferrer">
          Donate Now
        </a>
      </article>
    </Page>
  );
}
