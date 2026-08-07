// The Venue and Travel Information page. One <Card> per section.
// render.mjs builds this to dist/venue.html.
//
// Add or edit sections in the JSX below — each <Card> is a titled block.

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "venue",
  title: "DSDSS2026 Venue and Travel Information",
};

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
          <h3>Short Course Venue</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Mixer Venue</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Hotels</h3>
          <p>
            The following hotels are offering group rates for DahShu Symposium attendees.
            Please book by the cutoff date to receive the group rate.
          </p>

          <h4>Inn at Longwood Medical</h4>
          <p>
            <a
              href="https://be.synxis.com/?Hotel=58219&Chain=65&arrive=2026-10-21&depart=2026-10-24&adult=1&child=0&group=HDAH1026"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your group rate at the Inn at Longwood Medical
            </a>
          </p>

          <h4>Hilton Garden Inn</h4>
          <img
            className="content-image"
            src={assets + "hilton-garden-inn-brookline.webp"}
            alt="Hilton Garden Inn Brookline"
          />
          <p>
            <a
              href="https://www.hilton.com/en/attend-my-event/2026hsphdahshusymposium/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your group rate at the Hilton Garden Inn
            </a>
          </p>
          <ul>
            <li>Guests will have until Monday, 9/21/26 to make their reservations within the room block.</li>
            <li>Individual reservations may be canceled without penalty up to 2 days prior to arrival.</li>
          </ul>

          <h4>Courtyard by Marriott Boston Brookline</h4>
          <p>Group rate: $329.00 USD per night.</p>
          <ul>
            <li>Individual reservations must be made prior to the cutoff date of 9/21/2026.</li>
            <li>
              For assistance, contact{" "}
              <a href="mailto:tejas.bhatia@brooklinecourtyard.com">tejas.bhatia@brooklinecourtyard.com</a>.
            </li>
          </ul>
        </Card>

        <Card>
          <h3>Registration Guide</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Wi-Fi and Alert System</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Parking and Directions</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Helpful Tips When Visiting Campus</h3>
          <p>TBD</p>
        </Card>

        <Card>
          <h3>Things To Do While Visiting</h3>
          <p>TBD</p>
        </Card>
      </article>
    </Page>
  );
}
