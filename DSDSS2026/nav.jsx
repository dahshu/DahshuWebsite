// The site navigation menu, written as JSX markup.
//
// THIS IS THE FILE TO EDIT to change menu links, labels, order, or nesting.
// After editing, run:  npm run build:header
//
// <Item> renders one menu entry. Props:
//   target   page folder name -> links to <target>/index.html.
//            Use the ROOT_TARGET constant for the site root (index.html).
//   label    text shown in the menu.
//   on       optional list of `data-current-page` values that highlight this item.
//   children nested <Item>s become a submenu automatically.
//
// `page` and `prefix` are threaded down from the build (current page + path depth).
// You normally don't touch them here — just write the menu structure below.

import React from "react";

export const HOME_PAGE = "__home__";
export const ROOT_TARGET = "__root__";

function hrefFor(target, page, prefix) {
  if (target === ROOT_TARGET) {
    return page === HOME_PAGE ? "index.html" : prefix + "index.html";
  }
  if (page === target) return "index.html";
  return prefix + target + "/index.html";
}

function liClass(selected, isDir) {
  if (selected && isDir) return "sel dir";
  if (selected) return "sel ";
  if (isDir) return " dir";
  return " ";
}

export function Item({ target, label, on = [], page, prefix, children }) {
  const kids = React.Children.toArray(children);
  const isDir = kids.length > 0;
  const selected = on.includes(page);

  return (
    <li className={liClass(selected, isDir)}>
      <div className="item">
        <a href={hrefFor(target, page, prefix)} title={label}>
          <span>{label}</span>
        </a>
        {isDir && (
          <ul className="secondLevel">
            {kids.map((child) => React.cloneElement(child, { page, prefix }))}
          </ul>
        )}
      </div>
    </li>
  );
}

// Threads `page`/`prefix` into the top-level items so the menu markup below
// can stay clean (no need to pass them on every <Item>).
export function Nav({ page, prefix }) {
  const thread = (node) => React.cloneElement(node, { page, prefix });

  return (
    <ul className="firstLevel">
      {[
        <Item target={ROOT_TARGET} label="DSDSS2026" on={[HOME_PAGE, "page-18129"]}>
          <Item target="DSDSS2026-abstract-submission" label="Abstract Submission" />
          <Item target="DSDSS2026-poster-submission" label="Poster Submission" />
          <Item target="DSDSS2026-registration" label="Registration" />
          <Item target="DSDSS2026-committee" label="Committee" />
        </Item>,

        <Item target="DSDSS2026-agenda" label="Agenda & Program" on={["DSDSS2026-agenda"]}>
          <Item target="DSDSS2026-opening-remarks" label="Opening Remarks" />
          <Item target="DSDSS2026-keynote-sessions" label="Keynotes" on={["DSDSS2026-keynote-sessions"]}>
            <Item target="DSDSS2026-keynote-session-1" label="Goncalo Rocha Abecasis" />
            <Item target="DSDSS2026-keynote-session-2" label="Susan Murphy" />
          </Item>
          <Item target="DSDSS2026-scientific-sessions" label="Scientific Sessions" on={["DSDSS2026-scientific-sessions"]}>
            <Item target="DSDSS2026-scientific-session-1" label="Session 1" />
            <Item target="DSDSS2026-scientific-session-2" label="Session 2" />
            <Item target="DSDSS2026-scientific-session-3" label="Session 3" />
            <Item target="DSDSS2026-scientific-session-4" label="Session 4" />
            <Item target="DSDSS2026-scientific-session-5" label="Session 5" />
            <Item target="DSDSS2026-scientific-session-6" label="Session 6" />
            <Item target="DSDSS2026-scientific-session-7" label="Session 7" />
            <Item target="DSDSS2026-scientific-session-8" label="Session 8" />
          </Item>
          <Item target="DSDSS2026-banquet" label="Banquet" />
        </Item>,

        <Item target="DSDSS2026-sponsor" label="Sponsor" on={["DSDSS2026-sponsor", "page-18143"]} />,

        <Item target="DSDSS2026-short-course" label="Short Course" on={["DSDSS2026-short-course"]} />,

        <Item target="DSDSS2026-speakers" label="Speakers" on={["DSDSS2026-speakers"]}>
          <Item target="DSDSS2026-banquet-speakers" label="Banquet Speakers" />
          <Item target="DSDSS2026-invited-speakers" label="Invited Speakers" />
          <Item target="DSDSS2026-keynote-speakers" label="Keynote Speakers" />
          <Item target="DSDSS2026-panelists" label="Panelists" />
        </Item>,

        <Item target="DSDSS2026-venue" label="Venue" on={["DSDSS2026-venue"]} />,
      ].map((node, i) => React.cloneElement(thread(node), { key: i }))}
    </ul>
  );
}
