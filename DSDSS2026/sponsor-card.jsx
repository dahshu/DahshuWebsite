// A sponsor card: a vertical card with the sponsor's image on top and the
// sponsor name beneath, with an optional short bio. Reuses the invited-speaker
// vertical-card look (speaker / speaker-vertical). The sponsorship level is
// shown as a banner above a group of cards, not on the card itself. Styling
// lives in the .speaker-* rules plus .sponsor-logo in _assets/dsdss2026.css.
//
//   <SponsorCard image="acme.png" name="Acme" bio="Short description." />
//
// image is a filename under _assets/sponsors/, or null/omitted for a blank
// placeholder frame. bio is optional.

import React from "react";
import { Card } from "./card.jsx";

export function SponsorCard({ image, name, bio }) {
  const imageDir = "_assets/sponsors/";
  return (
    <Card className="speaker speaker-vertical">
      <div className="speaker-figure">
        {image ? (
          <img className="speaker-photo sponsor-logo" src={imageDir + image} alt={name} />
        ) : (
          <div className="speaker-photo speaker-photo-blank" aria-hidden="true" />
        )}
      </div>
      <div className="speaker-body">
        <h3>{name}</h3>
        {bio && <p className="sponsor-bio">{bio}</p>}
      </div>
    </Card>
  );
}
