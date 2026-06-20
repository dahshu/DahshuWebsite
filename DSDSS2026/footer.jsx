// The shared site footer, authored in JSX and baked into every page as static
// HTML by _build/render.mjs (run `npm run build:header`).
//
// Edit contact text / social links / structure here. The class names
// (footer-panel, footer-column, social-glyph-linkedin, …) are styled in
// _assets/dsdss2026.css — keep them if you want the existing look.

import React from "react";

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
            <a href="mailto:dahshuinfo@gmail.com">DAHSHUINFO@GMAIL.COM</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Our Social Networks</h3>
          <div className="social-row">
            <a
              className="social-link linkedin-link"
              href="https://www.linkedin.com/company/dahshu/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
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
