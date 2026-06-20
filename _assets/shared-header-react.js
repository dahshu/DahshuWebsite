(function () {
  if (!window.React || !window.ReactDOM) {
    return;
  }

  var React = window.React;
  var ReactDOM = window.ReactDOM;
  var e = React.createElement;

  var HOME_PAGE = "__home__";
  var ROOT_TARGET = "__root__";

  function menuLiClass(selected, isDir) {
    if (selected && isDir) return "sel dir";
    if (selected) return "sel ";
    if (isDir) return " dir";
    return " ";
  }

  function navHref(target, currentPage, prefix) {
    if (target === ROOT_TARGET) {
      return currentPage === HOME_PAGE ? "index.html" : prefix + "index.html";
    }
    if (currentPage === target) {
      return "index.html";
    }
    return prefix + target + "/index.html";
  }

  function menuConfig() {
    return [
      {
        label: "DSDSS2026",
        target: ROOT_TARGET,
        selectedPages: [HOME_PAGE, "page-18129"],
        children: [
          { label: "Abstract Submission", target: "DSDSS2026-abstract-submission" },
          { label: "Poster Submission", target: "DSDSS2026-poster-submission" },
          { label: "Registration", target: "DSDSS2026-registration" },
          { label: "Committee", target: "DSDSS2026-committee" },
        ],
      },
      {
        label: "Agenda & Program",
        target: "DSDSS2026-agenda",
        selectedPages: ["DSDSS2026-agenda"],
        children: [
          { label: "Opening Remarks", target: "DSDSS2026-opening-remarks" },
          {
            label: "Keynotes",
            target: "DSDSS2026-keynote-sessions",
            selectedPages: ["DSDSS2026-keynote-sessions"],
            children: [
              { label: "Goncalo Rocha Abecasis", target: "DSDSS2026-keynote-session-1" },
              { label: "Susan Murphy", target: "DSDSS2026-keynote-session-2" },
            ],
          },
          {
            label: "Scientific Sessions",
            target: "DSDSS2026-scientific-sessions",
            selectedPages: ["DSDSS2026-scientific-sessions"],
            children: [
              { label: "Session 1", target: "DSDSS2026-scientific-session-1" },
              { label: "Session 2", target: "DSDSS2026-scientific-session-2" },
              { label: "Session 3", target: "DSDSS2026-scientific-session-3" },
              { label: "Session 4", target: "DSDSS2026-scientific-session-4" },
              { label: "Session 5", target: "DSDSS2026-scientific-session-5" },
              { label: "Session 6", target: "DSDSS2026-scientific-session-6" },
              { label: "Session 7", target: "DSDSS2026-scientific-session-7" },
              { label: "Session 8", target: "DSDSS2026-scientific-session-8" },
            ],
          },
          { label: "Banquet", target: "DSDSS2026-banquet" },
        ],
      },
      {
        label: "Sponsor",
        target: "DSDSS2026-sponsor",
        selectedPages: ["DSDSS2026-sponsor", "page-18143"],
      },
      {
        label: "Short Course",
        target: "DSDSS2026-short-course",
        selectedPages: ["DSDSS2026-short-course"],
      },
      {
        label: "Speakers",
        target: "DSDSS2026-speakers",
        selectedPages: ["DSDSS2026-speakers"],
        children: [
          { label: "Banquet Speakers", target: "DSDSS2026-banquet-speakers" },
          { label: "Invited Speakers", target: "DSDSS2026-invited-speakers" },
          { label: "Keynote Speakers", target: "DSDSS2026-keynote-speakers" },
          { label: "Panelists", target: "DSDSS2026-panelists" },
        ],
      },
      {
        label: "Venue",
        target: "DSDSS2026-venue",
        selectedPages: ["DSDSS2026-venue"],
      },
    ];
  }

  function itemIsSelected(item, currentPage) {
    var pages = item.selectedPages || [];
    return pages.indexOf(currentPage) !== -1;
  }

  function renderMenuItem(item, ctx, key) {
    var children = item.children || [];
    var isDir = children.length > 0;
    var href = navHref(item.target, ctx.currentPage, ctx.prefix);
    var linkProps = {
      href: href,
      title: item.label,
    };

    return e(
      "li",
      { className: menuLiClass(itemIsSelected(item, ctx.currentPage), isDir), key: key },
      e(
        "div",
        { className: "item" },
        e(
          "a",
          linkProps,
          e("span", null, item.label)
        ),
        isDir
          ? e(
              "ul",
              { className: "secondLevel" },
              children.map(function (child, index) {
                return renderMenuItem(child, ctx, key + "-" + index);
              })
            )
          : null
      )
    );
  }

  function HeaderComponent(props) {
    var ctx = props.ctx;

    React.useEffect(function () {
      if (window.WaMenuHorizontal) {
        try {
          new window.WaMenuHorizontal({ id: "id_d5WBRcn" });
        } catch (err) {}
      }

      var menuInner = document.querySelector("#id_d5WBRcn .menuInner");
      var firstLevel = document.querySelector("#id_d5WBRcn ul.firstLevel");
      if (!menuInner || !firstLevel) {
        return;
      }

      var menuButton = menuInner.querySelector(".menuButton");
      if (!menuButton) {
        menuButton = document.createElement("button");
        menuButton.type = "button";
        menuButton.className = "menuButton";
        menuButton.setAttribute("aria-label", "Toggle menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<span class="menuButtonBars" aria-hidden="true"></span>';
        menuInner.insertBefore(menuButton, firstLevel);
      }

      function closeMenu() {
        menuInner.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      }

      function updateMobileState() {
        var mobile = window.innerWidth <= 616;
        if (mobile) {
          menuInner.classList.add("mobileView");
          closeMenu();
        } else {
          menuInner.classList.remove("mobileView");
          menuInner.classList.remove("is-open");
          menuButton.setAttribute("aria-expanded", "false");
        }
      }

      function onButtonClick() {
        if (!menuInner.classList.contains("mobileView")) {
          return;
        }
        var nextOpen = !menuInner.classList.contains("is-open");
        menuInner.classList.toggle("is-open", nextOpen);
        menuButton.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      }

      menuButton.addEventListener("click", onButtonClick);
      window.addEventListener("resize", updateMobileState);
      updateMobileState();

      return function () {
        menuButton.removeEventListener("click", onButtonClick);
        window.removeEventListener("resize", updateMobileState);
      };
    }, []);

    var menu = e(
      "div",
      {
        id: "id_d5WBRcn",
        className: "WaGadgetOnly WaGadgetMenuHorizontal  menuStyle002",
        style: { marginTop: "15px" },
        "data-componentId": "MMsqyjY",
      },
      e(
        "div",
        { className: "menuInner" },
        e(
          "ul",
          { className: "firstLevel" },
          menuConfig().map(function (item, index) {
            return renderMenuItem(item, ctx, "menu-" + index);
          })
        )
      )
    );

    var headerBody = e(
      "div",
      {
        id: "id_3HZnuUn",
        "data-componentId": "yBuHGEW",
        className: "WaLayoutContainer",
        style: { backgroundColor: "#A51C30" },
      },
      e(
        "table",
        { cellSpacing: "0", cellPadding: "0", className: "WaLayoutTable" },
        e(
          "tbody",
          null,
          e(
            "tr",
            { "data-componentId": "3HZnuUn_row", className: "WaLayoutRow" },
            e(
              "td",
              {
                id: "id_EbthRru",
                "data-componentId": "ppUrZBP",
                className: "WaLayoutItem wa-header-logo-cell",
                style: { width: "17%" },
              },
              e(
                "div",
                {
                  id: "id_knZm8rP",
                  className: "WaLayoutPlaceHolder placeHolderContainer",
                  "data-componentId": "CbQdC8V",
                },
                e(
                  "div",
                  null,
                  e(
                    "div",
                    {
                      id: "id_NIEfxLe",
                      className: "WaGadgetOnly WaGadgetContent gadgetStyleNone",
                      style: { backgroundColor: "#A51C30" },
                      "data-componentId": "NIEfxLe",
                    },
                    e(
                      "div",
                      {
                        className: "gadgetStyleBody gadgetContentEditableArea",
                        "data-editableArea": "0",
                        "data-areaHeight": "auto",
                      },
                      e(
                        "div",
                        { className: "header-co-branding" },
                        e("img", {
                          className: "header-logo header-logo-harvard",
                          src: ctx.prefix + "_assets/Harvard_University_coat_of_arms.svg",
                          alt: "Harvard crest",
                          title: "Harvard crest",
                          border: "0",
                        }),
                        e(
                          "a",
                          {
                            className: "header-logo-link",
                            href: "https://dahshu.wildapricot.org",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          e("img", {
                            className: "header-logo header-logo-dahshu",
                            src: ctx.prefix + "_assets/Dahshu.png",
                            alt: "DahShu logo",
                            title: "DahShu logo",
                            border: "0",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            e(
              "td",
              {
                className: "WaLayoutSeparator",
                "data-componentId": "ppUrZBP_separator",
              },
              e("div", { style: { width: "inherit" } })
            ),
            e(
              "td",
              {
                id: "id_39t6uw6",
                "data-componentId": "bLGm9Jo",
                className: "WaLayoutItem",
                style: { width: "83%" },
              },
              e(
                "div",
                {
                  id: "id_tPHbiLK",
                  className: "WaLayoutPlaceHolder placeHolderContainer",
                  "data-componentId": "XFXso2h",
                },
                e("div", null, menu)
              )
            )
          )
        )
      )
    );

    return headerBody;
  }

  function FooterComponent() {
    return e(
      "div",
      { className: "shared-footer-shell" },
      e(
        "footer",
        { className: "footer-panel" },
        e(
          "div",
          { className: "footer-column" },
          e("h3", null, "DahShu 2026 Contact"),
          e(
            "p",
            null,
            "For all general questions about the symposium, including program details, registration, and logistics:"
          ),
          e(
            "div",
            { className: "email-row" },
            e("span", null, "Email"),
            e(
              "a",
              { href: "mailto:dahshuinfo@gmail.com" },
              "DAHSHUINFO@GMAIL.COM"
            )
          )
        ),
        e(
          "div",
          { className: "footer-column" },
          e("h3", null, "Our Social Networks"),
          e(
            "div",
            { className: "social-row" },
            e(
              "a",
              {
                className: "social-link linkedin-link",
                href: "https://www.linkedin.com/company/dahshu/",
                target: "_blank",
                rel: "noreferrer noopener",
                "aria-label": "LinkedIn",
              },
              e(
                "span",
                {
                  className: "social-glyph social-glyph-linkedin",
                  "aria-hidden": "true",
                },
                "in"
              )
            )
          )
        )
      )
    );
  }

  function mountSharedHeader(node) {
    var ctx = {
      currentPage: node.getAttribute("data-current-page") || HOME_PAGE,
      prefix: node.getAttribute("data-nav-prefix") || "",
      variant: node.getAttribute("data-header-variant") || "inner",
    };

    ReactDOM.render(e(HeaderComponent, { ctx: ctx }), node);
  }

  function replaceNode(target, replacement) {
    if (target && target.parentNode) {
      target.parentNode.replaceChild(replacement, target);
      return true;
    }
    return false;
  }

  function createFooterRoot() {
    var root = document.createElement("div");
    root.setAttribute("data-shared-footer-root", "1");
    root.className = "shared-footer-host";
    return root;
  }

  function footerTextMatch(node) {
    var text = (node && node.textContent) || "";
    return text.indexOf("Our Social Networks") !== -1 && /DahShu/i.test(text);
  }

  function pruneLegacyFooters(exceptNode) {
    Array.prototype.forEach.call(
      document.querySelectorAll("footer.footer-panel"),
      function (node) {
        if ((!exceptNode || !exceptNode.contains(node)) && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
    );

    Array.prototype.forEach.call(
      document.querySelectorAll(".zoneFooterOuter, .zoneFooter1Outer"),
      function (node) {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
    );

    Array.prototype.forEach.call(
      document.querySelectorAll(".WaLayoutContainerLast"),
      function (node) {
        if (
          (!exceptNode || !exceptNode.contains(node)) &&
          footerTextMatch(node) &&
          node.parentNode
        ) {
          node.parentNode.removeChild(node);
        }
      }
    );
  }

  function ensureSharedFooterRoot() {
    var existing = document.querySelector("[data-shared-footer-root]");
    if (existing) {
      pruneLegacyFooters(existing);
      return existing;
    }

    var replacementTarget = document.querySelector("footer.footer-panel");
    var root = createFooterRoot();
    if (replacementTarget && replaceNode(replacementTarget, root)) {
      pruneLegacyFooters(root);
      return root;
    }

    var layoutContainers = document.querySelectorAll(".WaLayoutContainerLast");
    for (var i = 0; i < layoutContainers.length; i += 1) {
      if (footerTextMatch(layoutContainers[i]) && replaceNode(layoutContainers[i], root)) {
        pruneLegacyFooters(root);
        return root;
      }
    }

    var zoneFooterOuter = document.querySelector(".zoneFooterOuter");
    if (zoneFooterOuter && zoneFooterOuter.parentNode) {
      zoneFooterOuter.parentNode.insertBefore(root, zoneFooterOuter);
      pruneLegacyFooters(root);
      return root;
    }

    var brandingZone = document.querySelector(".zoneBrandingOuter");
    if (brandingZone && brandingZone.parentNode) {
      brandingZone.parentNode.insertBefore(root, brandingZone);
      pruneLegacyFooters(root);
      return root;
    }

    document.body.appendChild(root);
    pruneLegacyFooters(root);
    return root;
  }

  function mountSharedFooter(node) {
    ReactDOM.render(e(FooterComponent), node);
  }

  Array.prototype.forEach.call(
    document.querySelectorAll("[data-shared-header-root]"),
    mountSharedHeader
  );

  mountSharedFooter(ensureSharedFooterRoot());
})();
