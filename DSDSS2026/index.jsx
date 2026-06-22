// The conference home page. Uses the shared <Page> shell (same header/footer as
// every other page) with the home-specific hero, about, and keynote sections.
// render.mjs builds this to dist/index.html.
//
// The hero image carousel uses Swiper (loaded from a CDN); see SWIPER_* below.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "index",
  title: "DahShu Data Science Symposium 2026",
};

const SWIPER_CSS = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
const SWIPER_JS = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

const CAMPUS = [
  ["harvard-campus/widener-library.jpg", "Widener Library at Harvard University"],
  ["harvard-campus/harvard-hall.jpg", "Harvard Hall"],
  ["harvard-campus/memorial-hall.jpg", "Memorial Hall at Harvard University"],
  ["harvard-campus/harvard-yard-aerial.jpg", "Aerial view of Harvard Yard"],
];

const KEYNOTES = [
  ["goncalo-rocha-abecasis-user-current.jpg", "Goncalo Rocha Abecasis", "Regeneron"],
  ["7d07c87a0885fc27a8bb61d04b5c10bb.JPG", "Susan Murphy", "Harvard University"],
];

export function Index() {
  const assets = "_assets/";
  return (
    <Page
      page={meta.page}
      title={meta.title}
      bare
      head={
        <>
          <link rel="stylesheet" href={assets + "kit-pro.fontawesome.com/releases/latest/css/pro.min.css"} />
          <link rel="stylesheet" href={assets + "dsdss2026-harvard-home.css"} />
          <link rel="stylesheet" href={SWIPER_CSS} />
        </>
      }
      scripts={
        <>
          <script src={SWIPER_JS}></script>
          <script
            dangerouslySetInnerHTML={{
              __html:
                "new Swiper('.hero-carousel', {" +
                "loop: true, autoplay: { delay: 4200 }," +
                "pagination: { el: '.swiper-pagination', clickable: true }" +
                "});",
            }}
          />
        </>
      }
    >
      <div className="home-main">
      <section className="hero">
        <div className="hero-copy">
          <h1>
            DahShu{" "}
            <br className="hero-br" />
            Data Science{" "}
            <br className="hero-br" />
            Symposium
          </h1>
          <p className="hero-date">October 22 - October 23, 2026</p>
          <p className="hero-school">Harvard Medical School</p>
          <p className="hero-location">
            <em>
              Joseph B. Martin Conference Center,
              <br />
              Longwood Amphitheatre
            </em>
          </p>
          <p className="hero-location">Boston | Massachusetts</p>
          <a className="registration-pill" href="registration.html">
            <span className="registration-icon">
              <i className="fa-light fa-circle-check"></i>
            </span>
            Register Now
          </a>
        </div>

        <div className="hero-media">
          <div className="swiper hero-carousel">
            <div className="swiper-wrapper">
              {CAMPUS.map(([src, alt]) => (
                <div className="swiper-slide" key={src}>
                  <img src={assets + src} alt={alt} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="section-heading">
        <h2>ABOUT</h2>
      </section>

      <section className="about-copy">
        <p>
          We cordially invite you to join the DahShu Data Science Symposium 2026.
          This year&rsquo;s theme is{" "}
          <strong>
            &ldquo;Thrive with statistical thinking in the age of AI inference,
            uncertainty, and interpretability guiding high impact decisions.&rdquo;
          </strong>{" "}
          As a non-profit organization, DahShu is dedicated to advancing research
          and education in data science. Our global membership surpasses 6,000
          individuals, and our monthly virtual journal club consistently attracts
          over 100 attendees. We are committed to expanding our services to better
          serve our community.
        </p>
        <p>
          This year&rsquo;s symposium will focus on how statistical thinking, AI
          inference, uncertainty quantification, and interpretability are
          transforming biomedical research, drug development, and healthcare
          decision-making. Our scientific sessions will highlight topics such as
          AI-driven drug discovery and translational research, advanced
          technologies in clinical trials, and real-world data with causal
          inference. The conference will feature keynote speakers, invited
          speakers, scientific sessions, and poster presentations, fostering
          vibrant discussion and collaboration across academia, industry, and the
          broader quantitative science community.
        </p>
      </section>

      <section className="section-heading keynote-heading">
        <h2>KEYNOTE SPEAKERS</h2>
      </section>

      <section className="speaker-grid">
        {KEYNOTES.map(([photo, name, org]) => (
          <article className="speaker-card" key={name}>
            <img src={assets + photo} alt={name} />
            <div className="speaker-info">
              <h3>{name}</h3>
              <p>{org}</p>
            </div>
          </article>
        ))}
      </section>

      <p className="keynote-link">
        <a href="keynote-speakers.html">
          Click here to learn more about this year's keynote speakers
        </a>
      </p>

      </div>
    </Page>
  );
}
