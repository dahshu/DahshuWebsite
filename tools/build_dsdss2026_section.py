#!/usr/bin/env python3

from pathlib import Path

from update_dsdss2026_scientific_sessions import rebuild_scientific_sessions


SITE_ROOT = Path(__file__).resolve().parent.parent
UCONN_LOGO = "../_assets/dahshu.wildapricot.org/resources/Pictures/uconn2.png"
HARVARD_LOGO = "../_assets/Harvard_University_coat_of_arms.svg"
DAHSHU_LOGO = "../_assets/Dahshu.png"

PAGE_MAP = {
    "DSDS2025": "DSDSS2026",
    "page-18130": "DSDSS2026-agenda",
    "page-18131": "DSDSS2026-registration",
    "page-18132": "DSDSS2026-abstract-submission",
    "page-18133": "DSDSS2026-speakers",
    "page-18134": "DSDSS2026-committee",
    "page-18135": "DSDSS2026-venue",
    "page-18137": "DSDSS2026-short-course",
    "page-18139": "DSDSS2026-banquet-speakers",
    "page-18140": "DSDSS2026-invited-speakers",
    "page-18141": "DSDSS2026-keynote-speakers",
    "page-18146": "DSDSS2026-scientific-session-1",
    "page-18147": "DSDSS2026-scientific-session-2",
    "page-18148": "DSDSS2026-scientific-session-3",
    "page-18149": "DSDSS2026-scientific-session-4",
    "page-18150": "DSDSS2026-scientific-session-5",
    "page-18154": "DSDSS2026-keynote-session-2",
    "page-18155": "DSDSS2026-keynote-sessions",
    "page-18156": "DSDSS2026-scientific-sessions",
    "page-18157": "DSDSS2026-keynote-session-1",
    "page-18158": "DSDSS2026-poster-submission",
    "page-18159": "DSDSS2026-keynote-session-3",
    "page-18160": "DSDSS2026-banquet",
    "page-18161": "DSDSS2026-opening-remarks",
    "page-18162": "DSDSS2026-panelists",
}

CLONE_SOURCES = {
    "page-18131": "DSDSS2026-registration",
    "page-18132": "DSDSS2026-abstract-submission",
    "page-18133": "DSDSS2026-speakers",
    "page-18134": "DSDSS2026-committee",
    "page-18135": "DSDSS2026-venue",
    "page-18137": "DSDSS2026-short-course",
    "page-18139": "DSDSS2026-banquet-speakers",
    "page-18140": "DSDSS2026-invited-speakers",
    "page-18141": "DSDSS2026-keynote-speakers",
    "page-18146": "DSDSS2026-scientific-session-1",
    "page-18147": "DSDSS2026-scientific-session-2",
    "page-18148": "DSDSS2026-scientific-session-3",
    "page-18149": "DSDSS2026-scientific-session-4",
    "page-18150": "DSDSS2026-scientific-session-5",
    "page-18154": "DSDSS2026-keynote-session-2",
    "page-18155": "DSDSS2026-keynote-sessions",
    "page-18156": "DSDSS2026-scientific-sessions",
    "page-18157": "DSDSS2026-keynote-session-1",
    "page-18158": "DSDSS2026-poster-submission",
    "page-18159": "DSDSS2026-keynote-session-3",
    "page-18160": "DSDSS2026-banquet",
    "page-18161": "DSDSS2026-opening-remarks",
    "page-18162": "DSDSS2026-panelists",
}

SECTION_STYLESHEET = "../_assets/dsdss2026.css"


def add_stylesheet(text: str) -> str:
    link = f'<link rel="stylesheet" href="{SECTION_STYLESHEET}" />'
    if SECTION_STYLESHEET in text:
        return text
    return text.replace("</head>", f"{link}</head>", 1)


def add_body_class(text: str) -> str:
    marker = 'class="'
    body_start = text.find("<body ")
    if body_start == -1:
        return text
    class_start = text.find(marker, body_start)
    if class_start == -1:
        return text
    class_start += len(marker)
    class_end = text.find('"', class_start)
    if class_end == -1:
        return text
    classes = text[class_start:class_end].split()
    if "dsdss2026Section" not in classes:
        classes.append("dsdss2026Section")
    return text[:class_start] + " ".join(classes) + text[class_end:]


def rewrite_links(text: str) -> str:
    text = text.replace("../page-18129/index.html", "../DSDSS2026/index.html")
    text = text.replace("../DSDS2025/index.html", "../DSDSS2026/index.html")
    for src, dest in PAGE_MAP.items():
        if src in {"DSDS2025", "page-18130"}:
            continue
        text = text.replace(f"../{src}/index.html", f"../{dest}/index.html")
    text = text.replace("../page-18130/index.html", "../DSDSS2026-agenda/index.html")
    return text


def strip_sponsor_nav(text: str) -> str:
    marker = (
        '<li class=" ">\n'
        '\t<div class="item">\n'
        '\t\t<a href="../DSDSS2026-sponsor/index.html" title="Sponsor"><span>Sponsor</span></a>\n'
        '</div>\n'
        '</li>\n\t\n'
    )
    text = text.replace(marker, "")
    root_marker = (
        '<li class=" ">\n'
        '                      <div class="item">\n'
        '                        <a href="DSDSS2026-sponsor/index.html" title="Sponsor"><span>Sponsor</span></a>\n'
        '                      </div>\n'
        '                    </li>\n'
    )
    text = text.replace(root_marker, "")
    return text


def rewrite_content(text: str) -> str:
    replacements = {
        "DSDSS2025": "DSDSS2026",
        "Symposium 2025": "Symposium 2026",
        "DahShu 2025 Contact": "DahShu 2026 Contact",
        UCONN_LOGO: HARVARD_LOGO,
        "#438CCA": "#A51C30",
        "#438cca": "#A51C30",
        "#4cb5c4": "#A51C30",
        "#002f4b": "#6F1726",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = text.replace(
        f'<p><img src="{HARVARD_LOGO}" alt="" title="" border="0"><br></p>',
        f'<div class="header-co-branding"><img class="header-logo" src="{HARVARD_LOGO}" alt="Harvard crest" title="Harvard crest" border="0"><a class="header-logo-link" href="https://dahshu.wildapricot.org" target="_blank" rel="noopener noreferrer"><img class="header-logo" src="{DAHSHU_LOGO}" alt="DahShu logo" title="DahShu logo" border="0"></a></div>',
    )
    return text


def normalize_breadcrumbs(text: str) -> str:
    duplicate = (
        '<li><a href="../DSDSS2026/index.html">DSDSS2026</a></li>\n'
        '<li><a href="../DSDSS2026/index.html">DSDSS2026</a></li>'
    )
    text = text.replace(
        duplicate,
        '<li><a href="../DSDSS2026/index.html">DSDSS2026</a></li>',
    )
    return text


def transform(text: str) -> str:
    text = rewrite_links(text)
    text = rewrite_content(text)
    text = strip_sponsor_nav(text)
    text = normalize_breadcrumbs(text)
    text = add_stylesheet(text)
    text = add_body_class(text)
    return text


def clone_pages() -> None:
    for src_dir, dest_dir in CLONE_SOURCES.items():
        source = SITE_ROOT / src_dir / "index.html"
        dest = SITE_ROOT / dest_dir / "index.html"
        dest.parent.mkdir(parents=True, exist_ok=True)
        text = source.read_text(encoding="utf-8", errors="ignore")
        dest.write_text(transform(text), encoding="utf-8")


def patch_existing() -> None:
    for existing in [
        SITE_ROOT / "DSDSS2026" / "index.html",
        SITE_ROOT / "DSDSS2026-agenda" / "index.html",
    ]:
        text = existing.read_text(encoding="utf-8", errors="ignore")
        existing.write_text(transform(text), encoding="utf-8")


if __name__ == "__main__":
    clone_pages()
    patch_existing()
    rebuild_scientific_sessions()
