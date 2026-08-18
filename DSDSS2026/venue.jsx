// The Venue and Travel Information page. One <Card> per section.
// render.mjs builds this to dist/venue.html.
//
// Add or edit sections in the JSX below — each <Card> is a titled block.

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";
import { HotelCard } from "./hotel-card.jsx";

export const meta = {
  page: "venue",
  title: "DSDSS2026 Venue and Travel Information",
};

// Hotels offering group rates. Each renders as an identically-formatted
// <HotelCard>. Guests must book by the cutoff date to receive the discount.
const HOTELS = [
  {
    name: "Inn at Longwood Medical",
    image: "inn-at-longwood-medical.jpg",
    rate: "$275",
    bookingUrl:
      "https://be.synxis.com/?Hotel=58219&Chain=65&arrive=2026-10-21&depart=2026-10-24&adult=1&child=0&group=HDAH1026",
    bookingLabel: "Book your group rate at the Inn at Longwood Medical",
  },
  {
    name: "Hilton Garden Inn",
    image: "hilton-garden-inn-brookline.webp",
    rate: "$259",
    bookingUrl: "https://www.hilton.com/en/attend-my-event/2026hsphdahshusymposium/",
    bookingLabel: "Book your group rate at the Hilton Garden Inn",
    notes: ["Individual reservations may be canceled without penalty up to 2 days prior to arrival."],
  },
  {
    name: "Courtyard by Marriott Boston Brookline",
    image: "courtyard-marriott-brookline.jpg",
    rate: "$329",
    bookingUrl: "https://app.marriott.com/resview2?id=1785936689035&key=GRP&app=resvlink",
    bookingLabel: "Book your group rate for Harvard Chan School",
    notes: [
      <>
        For assistance, contact{" "}
        <a href="mailto:tejas.bhatia@brooklinecourtyard.com">tejas.bhatia@brooklinecourtyard.com</a>.
      </>,
    ],
  },
];

export function Venue() {
  const assets = "_assets/";
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Venue and Travel Information</h1>

        <Card>
          <h3>Conference Venue</h3>
          <p>Joseph B. Martin Conference Center, Longwood Amphitheatre</p>
          <img
            className="content-image"
            src={assets + "joseph-b-martin-longwood-amphitheatre.jpg"}
            alt="Joseph B. Martin Conference Center Longwood Amphitheatre"
          />
        </Card>

        <Card>
          <h3>Booking Hotels</h3>
          <p>
            We offer discounted rates at the following hotels. Guests <strong>must</strong> make their
            reservations by <strong>September 21, 2026</strong> to receive these discounts.
          </p>
          <div className="hotel-grid">
            {HOTELS.map((hotel) => (
              <HotelCard key={hotel.name} {...hotel} />
            ))}
          </div>
        </Card>
      </article>
    </Page>
  );
}
