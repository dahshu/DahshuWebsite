// The shared site header, authored in JSX and baked into every page as static
// HTML by render.mjs (run `npm run build:header`).
//
// Edit the MENU in nav.jsx. Edit the logos / header structure here.
//
// Keep the class names, ids, and the #A51C30 background: _assets/dsdss2026.css
// targets them (e.g. .WaGadgetMenuHorizontal.menuStyle002, the crimson bar).
// The responsive menu is a pure-CSS hamburger: the .nav-toggle checkbox and
// .menu-button label below are driven entirely by media-query rules in
// dsdss2026.css — no JavaScript.

import React from "react";
import { Nav } from "./nav.jsx";

// Stable id for the menu container (used as a styling hook in dsdss2026.css).
export const MENU_ID = "id_d5WBRcn";

export function Header({ page, prefix }) {
  return (
    <div
      id="id_3HZnuUn"
      data-componentid="yBuHGEW"
      className="WaLayoutContainer"
      style={{ backgroundColor: "#A51C30" }}
    >
      <table cellSpacing="0" cellPadding="0" className="WaLayoutTable">
        <tbody>
          <tr data-componentid="3HZnuUn_row" className="WaLayoutRow">
            <td
              id="id_EbthRru"
              data-componentid="ppUrZBP"
              className="WaLayoutItem wa-header-logo-cell"
              style={{ width: "17%" }}
            >
              <div
                id="id_knZm8rP"
                className="WaLayoutPlaceHolder placeHolderContainer"
                data-componentid="CbQdC8V"
              >
                <div>
                  <div
                    id="id_NIEfxLe"
                    className="WaGadgetOnly WaGadgetContent gadgetStyleNone"
                    style={{ backgroundColor: "#A51C30" }}
                    data-componentid="NIEfxLe"
                  >
                    <div
                      className="gadgetStyleBody gadgetContentEditableArea"
                      data-editablearea="0"
                      data-areaheight="auto"
                    >
                      <div className="header-co-branding">
                        <img
                          className="header-logo header-logo-harvard"
                          src={prefix + "_assets/Harvard_University_coat_of_arms.svg"}
                          alt="Harvard crest"
                          title="Harvard crest"
                          border="0"
                        />
                        <a
                          className="header-logo-link"
                          href="https://dahshu.wildapricot.org"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="header-logo header-logo-dahshu"
                            src={prefix + "_assets/Dahshu.png"}
                            alt="DahShu logo"
                            title="DahShu logo"
                            border="0"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td className="WaLayoutSeparator" data-componentid="ppUrZBP_separator">
              <div style={{ width: "inherit" }} />
            </td>

            <td
              id="id_39t6uw6"
              data-componentid="bLGm9Jo"
              className="WaLayoutItem"
              style={{ width: "83%" }}
            >
              <div
                id="id_tPHbiLK"
                className="WaLayoutPlaceHolder placeHolderContainer"
                data-componentid="XFXso2h"
              >
                <div>
                  <div
                    id={MENU_ID}
                    className="WaGadgetOnly WaGadgetMenuHorizontal  menuStyle002"
                    style={{ marginTop: "15px" }}
                    data-componentid="MMsqyjY"
                  >
                    <div className="menuInner">
                      {/* Pure-CSS hamburger: the checkbox holds open/closed
                          state; the label is the button. The menu opens via
                          `#nav-toggle:checked ~ .firstLevel` in dsdss2026.css.
                          No JavaScript involved. */}
                      <input
                        type="checkbox"
                        id="nav-toggle"
                        className="nav-toggle"
                        aria-hidden="true"
                      />
                      <label
                        htmlFor="nav-toggle"
                        className="menu-button"
                        aria-label="Toggle navigation menu"
                      >
                        {/* Icon is drawn in CSS (3 bars) to keep the markup
                            ASCII-only — some pages aren't reliably UTF-8. */}
                        <span className="menu-button-bars" aria-hidden="true" />
                      </label>
                      <Nav page={page} prefix={prefix} />
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
