// The Agenda & Program page. One schedule table per conference day.
// render.mjs builds this to dist/agenda.html.
//
// Edit the DAYS array below. Each day: heading and rows of [time, program]
// or [time, program, href] — a row with an href renders the program as a
// link to that page.

import React from "react";
import { Page } from "./page.jsx";

export const meta = {
  page: "agenda",
  title: "DSDSS2026 Agenda & Program",
};

const DAYS = [
  {
    heading: "Day 1 — Thursday, October 22, 2026",
    rows: [
      ["7:30 am - 5:00 pm", "Registration"],
      ["7:30 am - 8:10 am", "Refreshments"],
      ["8:10 am - 8:30 am", "Opening Remarks", "opening-remarks.html"],
      ["8:30 am - 9:30 am", "Keynote 1", "keynote-sessions.html"],
      ["9:30 am - 9:50 am", "Break"],
      ["9:50 am - 11:30 am", "Session 1", "scientific-sessions.html#session1"],
      ["11:30 am - 1:00 pm", "Lunch and Poster Session"],
      ["1:00 pm - 2:40 pm", "Session 2", "scientific-sessions.html#session2"],
      ["2:40 pm - 2:50 pm", "Break"],
      ["2:50 pm - 4:30 pm", "Session 3", "scientific-sessions.html#session3"],
      ["4:30 pm - 4:40 pm", "Break"],
      ["4:40 pm - 5:40 pm", "Session 4", "scientific-sessions.html#session4"],
      ["6:40 pm - 9:00 pm", "Banquet", "banquet.html"],
    ],
  },
  {
    heading: "Day 2 — Friday, October 23, 2026",
    rows: [
      ["7:30 am - 12:00 pm", "Registration"],
      ["7:30 am - 8:00 am", "Refreshments"],
      ["8:00 am - 9:00 am", "Keynote 2", "keynote-sessions.html"],
      ["9:00 am - 10:30 am", "Session 5", "scientific-sessions.html#session5"],
      ["10:30 am - 10:45 am", "Break"],
      ["10:45 am - 12:15 pm", "Session 6", "scientific-sessions.html#session6"],
      ["12:15 pm - 1:15 pm", "Lunch"],
      ["1:15 pm - 2:45 pm", "Session 7", "scientific-sessions.html#session7"],
      ["2:45 pm - 3:00 pm", "Break"],
      ["3:00 pm - 4:30 pm", "Session 8", "scientific-sessions.html#session8"],
      ["4:30 pm - 5:00 pm", "Closing Remarks"],
    ],
  },
];

export function Agenda() {
  return (
    <Page page={meta.page} title={meta.title}>
      <article className="content-prose">
        <h1>Agenda &amp; Program</h1>

        {DAYS.map((day) => (
          <React.Fragment key={day.heading}>
            <h2>{day.heading}</h2>
            <table className="content-table agenda-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Program</th>
                </tr>
              </thead>
              <tbody>
                {day.rows.map(([time, program, href]) => (
                  <tr key={time + program}>
                    <td>{time}</td>
                    <td>{href ? <a href={href}>{program}</a> : program}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        ))}
      </article>
    </Page>
  );
}
