// A sponsor card: a vertical card with the sponsor's image on top and the
// sponsor name beneath, with an optional short bio. Reuses the invited-speaker
// vertical-card look (speaker / speaker-vertical). The sponsorship level is
// shown as a banner above a group of cards, not on the card itself. Styling
// lives in the .speaker-* rules plus .sponsor-logo in _assets/dsdss2026.css.
//
//   <SponsorCard image="acme.png" name="Acme" bio="Short description." />
//
// image is a filename under _assets/sponsors/, or null/omitted for a blank
// placeholder frame. bio is optional. url is optional — when given, the logo
// and name link out to the organization's site.

import React from "react";
import { Card } from "./card.jsx";

export function SponsorCard({ image, name, bio, url }) {
  const imageDir = "_assets/sponsors/";
  const figure = image ? (
    <img className="speaker-photo sponsor-logo" src={imageDir + image} alt={name} />
  ) : (
    <div className="speaker-photo speaker-photo-blank" aria-hidden="true" />
  );
  // Wrap the logo + name in a link only when a url is supplied, so untouched
  // sponsor entries render exactly as before.
  const link = (children) =>
    url ? (
      <a className="partner-link" href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      children
    );

  return (
    <Card className="speaker speaker-vertical">
      <div className="speaker-figure">{link(figure)}</div>
      <div className="speaker-body">
        <h3>{link(name)}</h3>
        {bio && <p className="sponsor-bio">{bio}</p>}
      </div>
    </Card>
  );
}
