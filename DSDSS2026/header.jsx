// The site header: the crimson bar with the Harvard + DahShu logos and the
// navigation. Self-contained — any page that renders <Header/> gets the full
// responsive menu, including the hamburger button on narrow screens.
//
// Edit the MENU in nav.jsx. Edit the logos / structure here.
//
// The responsive menu is pure CSS: the .nav-toggle checkbox holds the
// open/closed state and the .nav-button label is the hamburger. A media query
// in dsdss2026.css shows the button and collapses the menu below a breakpoint;
// no JavaScript involved.

import React from "react";
import { Nav } from "./nav.jsx";

export function Header({ page }) {
  return (
    <header className="site-header">
      <a className="site-brand" href="index.html">
        <img
          className="site-logo site-logo-harvard"
          src="_assets/Harvard_University_coat_of_arms.svg"
          alt="Harvard crest"
        />
        <img
          className="site-logo site-logo-dahshu"
          src="_assets/Dahshu.png"
          alt="DahShu logo"
        />
      </a>

      <nav className="site-nav" aria-label="Main">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-button" aria-label="Toggle menu">
          <span className="nav-button-bars" aria-hidden="true" />
        </label>
        <Nav page={page} />
      </nav>
    </header>
  );
}
