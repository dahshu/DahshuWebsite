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
  { image: "caredxlogo.png", name: "CareDx" },
];

const GOLD_SPONSORS = [
  { image: "amgen.com.png", name: "Amgen" },
];

const SILVER_SPONSORS = [
  { image: "astellas-cropped.jpg", name: "Astellas" },
  { image: "pfizer-cropped.png", name: "Pfizer" },
  { image: "regeneron-logo-png_seeklogo-507092.png", name: "Regeneron" },
  { image: "sentieon-cropped.png", name: "Sentieon" },
];

export function Sponsor() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Sponsors</h1>

        <h2 className="sponsor-tier-banner">Platinum Level</h2>
        <div className="speaker-grid-4">
          {PLATINUM_SPONSORS.map((s, i) => (
            <SponsorCard key={i} {...s} />
          ))}
        </div>

        <h2 className="sponsor-tier-banner">Gold Level</h2>
        <div className="speaker-grid-4">
          {GOLD_SPONSORS.map((s, i) => (
            <SponsorCard key={i} {...s} />
          ))}
        </div>

        <h2 className="sponsor-tier-banner">Silver Level</h2>
        <div className="speaker-grid-4">
          {SILVER_SPONSORS.map((s, i) => (
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
