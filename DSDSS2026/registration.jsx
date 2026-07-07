// The Registration page. Renders the shared <Page> shell with the registration
// details. render.mjs builds this to dist/registration.html.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "registration",
  title: "DSDSS2026 Registration",
};

const REGISTER_URL = "https://dahshu.wildapricot.org/event-6727823/Registration";

export function Registration() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Registration</h1>

        <div className="content-cta">
          <a className="btn-upload" href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </div>

        <p>
          Join us for an exciting event where industry leaders, academics, and
          students converge to explore the latest trends and innovations in
          Statistics, Data Science, and AI.
        </p>

        <h2>Registration Fees</h2>
        <p>
          The registration fee is the same for both virtual and in-person
          attendance.{" "}
          <strong>
            Invited speakers can register for free and sponsors will receive a 25% off discount. Please reach out to an organizer or contact dahshuinfo@gmail.com to receive these discount codes.
          </strong>
        </p>
        <table className="content-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Early Bird</th>
              <th>Regular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Industry Professionals</td>
              <td>$500</td>
              <td>$575</td>
            </tr>
            <tr>
              <td>Academia</td>
              <td>$300</td>
              <td>$380</td>
            </tr>
            <tr>
              <td>Trainees (Students or Postdocs)</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>

        <h2>What Your Registration Includes</h2>
        <ul>
          <li>
            Full access to all conference sessions, including keynote talks and
            scientific discussions.
          </li>
          <li>
            Networking opportunities with leading experts, researchers, and
            peers from both industry and academia.
          </li>
          <li>Zoom links for attendees joining the conference virtually.</li>
        </ul>

        <h2>Refund &amp; Transfer Policy</h2>
        <p>
          All registrations are non-refundable. Unattended fees will support
          DahShu's charitable initiatives.
        </p>
        <p>
          If you are unable to attend, your registration may be transferred to
          another individual. To initiate a transfer, please email{" "}
          <strong>dahshuinfo@gmail.com</strong>.
        </p>

        <h2>How to Register</h2>
        <p>
          Secure your place by completing the{" "}
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
            registration form
          </a>
          .
        </p>

        <h2>Important Dates</h2>
        <ul>
          <li>Early Bird Registration Deadline: August 19, 2026</li>
          <li>Registration End: October 19, 2026</li>
        </ul>

        <h2>Contact</h2>
        <p>
          For all registration questions: <strong>dahshuinfo@gmail.com</strong>
        </p>
      </article>
    </Page>
  );
}
