// The shared site footer, authored in JSX and baked into every page as static
// HTML by _build/render.mjs (run `npm run build:header`).
//
// Edit contact text / social links / structure here. The class names
// (footer-panel, footer-column, social-glyph-linkedin, …) are styled in
// _assets/dsdss2026.css — keep them if you want the existing look.

import React from "react";

// Organization details shown in the footer on every page. DahShu's registered
// details must appear on the official site, so they live in the shared footer
// rather than on a single page. These values must match the ones submitted
// during registration.
const ORG = {
  name: "DahShu",
  email: "dahshuinfo@gmail.com",
  charityId: "47-4526572",
  street: "21151 Canyon Oak Way",
  city: "Cupertino",
  state: "CA",
  zip: "95014",
  country: "USA",
};

export function Footer() {
  return (
    <div className="shared-footer-shell">
      <footer className="footer-panel">
        <div className="footer-column">
          <h3>DahShu 2026 Contact</h3>
          <p>
            For all general questions about the symposium, including program
            details, registration, and logistics:
          </p>
          <div className="email-row">
            <span>Email</span>
            <a href={"mailto:" + ORG.email}>{ORG.email.toUpperCase()}</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>About DahShu</h3>
          <p className="footer-mission">
            DahShu is a 501(c)(3) non-profit organization founded to promote
            research and education in data science. We serve a global community
            of over 6,000 members through scientific symposia, a monthly virtual
            journal club, and educational programs that advance knowledge
            exchange across academia, industry, and healthcare.
          </p>
          <address className="footer-address">
            <strong>{ORG.name}</strong>
            <br />
            {ORG.street}
            <br />
            {ORG.city}, {ORG.state} {ORG.zip}
            <br />
            {ORG.country}
          </address>
          <p className="footer-charity-id">
            Charity ID (EIN): <strong>{ORG.charityId}</strong>
          </p>
        </div>

        <div className="footer-column">
          <h3>Our Social Networks</h3>
          <div className="social-row">
            <a
              className="social-link linkedin-link"
              href="https://www.linkedin.com/company/dahshu/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="DahShu on LinkedIn"
            >
              <span className="social-glyph social-glyph-linkedin" aria-hidden="true">
                in
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
