// The site navigation menu.
//
// THIS IS THE FILE TO EDIT to change menu links, labels, order, or nesting.
// After editing, run:  npm run build
//
// <Item> renders one menu entry. Props:
//   target   page slug (e.g. "sponsor") -> links to "sponsor.html".
//   label    text shown in the menu.
//   on       optional list of page slugs that mark this item as current.
//   link     for an item with a submenu, keep it clickable (links to its page)
//            instead of being a non-navigating submenu toggle.
//   children nested <Item>s become a submenu automatically.
//
// `page` (the current page slug) is threaded down from the build. You normally
// don't touch it — just write the menu.

import React from "react";

export function Item({ target, label, on = [], link = false, page, children }) {
  const kids = React.Children.toArray(children);
  const hasSubmenu = kids.length > 0;
  // An item is current when it links to the current page, or when `on` lists
  // the current page (used to highlight a parent for its child pages).
  const isCurrent = target === page || on.includes(page);
  const classes = [hasSubmenu && "has-submenu", isCurrent && "is-current"]
    .filter(Boolean)
    .join(" ");

  // Parent items don't navigate by default — clicking the label just reveals
  // the submenu (which opens on hover). Pass `link` to keep a parent clickable
  // (e.g. the top-level item that should still go to its own page). Leaf items
  // always link to their page.
  const navigates = !hasSubmenu || link;

  return (
    <li className={classes || undefined}>
      {navigates ? (
        <a href={`${target}.html`}>{label}</a>
      ) : (
        <span className="nav-parent">{label}</span>
      )}
      {hasSubmenu && (
        <ul className="nav-submenu">
          {kids.map((child, i) => React.cloneElement(child, { page, key: i }))}
        </ul>
      )}
    </li>
  );
}

// The menu structure. `page` is threaded into each item so the markup below
// stays clean.
export function Nav({ page }) {
  const thread = (node, i) => React.cloneElement(node, { page, key: i });

  return (
    <ul className="nav-menu">
      {[
        <Item target="index" label="DSDSS2026" link>
          <Item target="abstract-submission" label="Abstract Submission" />
          <Item target="poster-submission" label="Poster Submission" />
          <Item target="registration" label="Registration" />
          <Item target="committee" label="Committee" />
        </Item>,

        <Item target="agenda" label="Agenda & Program">
          <Item target="opening-remarks" label="Opening Remarks" />
          <Item target="keynote-sessions" label="Keynotes" />
          <Item target="scientific-sessions" label="Scientific Sessions" />
          <Item target="banquet" label="Banquet" />
        </Item>,

        <Item target="sponsor" label="Sponsor" />,

        <Item target="speakers" label="Speakers">
          <Item target="banquet-speakers" label="Banquet Speakers" />
          <Item target="invited-speakers" label="Invited Speakers" />
          <Item target="keynote-speakers" label="Keynote Speakers" />
          <Item target="panelists" label="Panelists" />
        </Item>,

        <Item target="venue" label="Venue" />,
      ].map(thread)}
    </ul>
  );
}
