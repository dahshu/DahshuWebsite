// A hotel booking card: photo, name, discounted rate, a booking link, and an
// optional list of notes. Used on the venue page so every hotel is formatted
// identically. Reuses the generic <Card> shell; styling lives in the
// .hotel-card rules in _assets/dsdss2026.css.
//
//   <HotelCard
//     name="Inn at Longwood Medical"
//     image="inn-at-longwood-medical.jpg"
//     rate="$275"
//     bookingUrl="https://…"
//     bookingLabel="Book your group rate"
//     notes={["Note one.", <>Note with a <a href="…">link</a>.</>]}
//   />
//
// image is a filename under _assets/ (or null/omitted for no photo).

import React from "react";
import { Card } from "./card.jsx";

export function HotelCard({ name, image, rate, bookingUrl, bookingLabel, notes = [] }) {
  const assets = "_assets/";
  return (
    <Card className="hotel-card">
      {image ? (
        <img className="hotel-card-photo" src={assets + image} alt={name} />
      ) : (
        <div className="hotel-card-photo hotel-card-photo-blank" aria-hidden="true" />
      )}
      <div className="hotel-card-body">
        <h4 className="hotel-card-name">{name}</h4>
        {rate && (
          <p className="hotel-card-rate">
            Discounted rate: <strong>{rate}</strong> per night
          </p>
        )}
        {bookingUrl && (
          <p className="hotel-card-book">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              {bookingLabel || "Book your group rate"}
            </a>
          </p>
        )}
        {notes.length > 0 && (
          <ul className="hotel-card-notes">
            {notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
