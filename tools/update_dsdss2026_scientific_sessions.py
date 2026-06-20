#!/usr/bin/env python3

from pathlib import Path
import re
SITE_ROOT = Path(__file__).resolve().parent.parent
SESSION_TEMPLATE = SITE_ROOT / "DSDSS2026-scientific-session-1" / "index.html"
LANDING_TEMPLATE = SITE_ROOT / "DSDSS2026-scientific-sessions" / "index.html"

SESSIONS = [
    {
        "number": 1,
        "title": "Session 1",
        "organizer_name": "Haoda Fu",
        "organizer_org": "Amgen",
        "photo": "../_assets/scientific-session-speakers/haoda-fu.webp",
        "day": "Thursday, October 22, 2026",
        "time": "9:50 AM - 11:30 AM",
        "summary": [
            "This showcase bridges the gap between academic research and pharmaceutical industry application by bringing together leading experts to highlight the real-world impact of artificial intelligence.",
            "Moving past theoretical hype, the session features a curated selection of high-impact, concrete case studies demonstrating how AI is actively transforming medicine.",
            "Featured presentations will explore verified success stories across accelerated drug discovery, clinical trial optimization, and translational research.",
            "By focusing on evidence-based examples, this event provides a practical blueprint for cross-disciplinary collaboration and offers a clear view of how data-driven innovation is driving the next generation of biomedical solutions.",
        ],
    },
    {
        "number": 2,
        "title": "Session 2",
        "organizer_name": "Runze Li",
        "organizer_org": "PSU",
        "photo": "../_assets/scientific-session-speakers/runze-li.jpg",
        "day": "Thursday, October 22, 2026",
        "time": "1:00 PM - 2:40 PM",
        "summary": [
            "Abstract to be provided.",
        ],
    },
    {
        "number": 3,
        "title": "Session 3",
        "organizer_name": "Sara Hamon",
        "organizer_org": "Regeneron",
        "photo": None,
        "day": "Thursday, October 22, 2026",
        "time": "2:50 PM - 4:30 PM",
        "summary": [
            "This session examines how advanced technologies are reshaping clinical trials as artificial intelligence (AI), machine learning (ML), and digital health tools become embedded across the drug development life cycle - from trial design and patient selection to endpoint assessment and regulatory decision-making.",
            "The session will share case examples leveraging predictive models, wearable-derived endpoints, and real-world data.",
            "The session will provide a concise roadmap for deploying AI and digital tools responsibly, recognizing common pitfalls, and navigating the evolving regulatory landscape that is redefining the future of quantitative science in drug development.",
        ],
    },
    {
        "number": 4,
        "title": "Session 4",
        "organizer_name": "Jane Zhang",
        "organizer_org": "AbbVie",
        "photo": None,
        "day": "Thursday, October 22, 2026",
        "time": "4:40 PM - 5:40 PM",
        "summary": [
            "As the volume of Real-World Data (RWD) expands, the pharmaceutical industry faces a critical bottleneck: transforming unstructured data into rigorous, actionable clinical evidence.",
            "This session explores the end-to-end architecture required to achieve this, bridging cutting-edge causal inference methodology with modern data infrastructure and pharmaceutical execution.",
            "Attendees will gain a comprehensive understanding of how advanced statistical frameworks - specifically Targeted Learning and Target Trial Emulation - are moving beyond academic theory to directly impact clinical differentiation and improve the Probability of Success (PoS) in drug development.",
        ],
    },
    {
        "number": 5,
        "title": "Session 5",
        "organizer_name": "Jacek Urbanek",
        "organizer_org": "Regeneron",
        "photo": "../_assets/scientific-session-speakers/jacek-urbanek.jpg",
        "day": "Friday, October 23, 2026",
        "time": "8:30 AM - 9:30 AM",
        "summary": [
            "This session traces the end-to-end arc of immunology-driven drug development - from population-scale genetics that nominate causal targets, through translational biomarker discovery and patient stratification, to late-phase clinical trials that convert hypotheses into actionable evidence.",
            "The program highlights how statistical genetics, computational biology, and clinical biostatistics intersect to advance therapies for immune-mediated diseases.",
            "The audience will leave with a cohesive, practical view of the genome-to-patient pipeline and concrete insights for cross-functional collaboration.",
        ],
    },
    {
        "number": 6,
        "title": "Session 6",
        "organizer_name": "Nancy Zhang",
        "organizer_org": "Upenn",
        "photo": "../_assets/scientific-session-speakers/nancy-zhang.jpg",
        "summary": [
            "This session will highlight emerging methods at the intersection of rigorous statistical inference and modern machine learning for analyzing high-dimensional genomic data.",
        ],
    },
    {
        "number": 7,
        "title": "Session 7",
        "organizer_name": "Mercedeh Ghadessi",
        "organizer_org": "Bayer",
        "photo": "../_assets/scientific-session-speakers/mercedeh-ghadessi.jpg",
        "summary": [
            "Explainable Artificial Intelligence (XAI) refers to a set of methods and techniques in artificial intelligence (AI) that aim to make the decision-making processes of AI systems understandable to human users.",
            "The primary goal of XAI is to provide transparency, accountability, and interpretability in AI models, particularly those that are complex and often considered \"black boxes,\" such as deep learning models.",
        ],
    },
    {
        "number": 8,
        "title": "Session 8",
        "organizer_name": "Ming-Hui Chen",
        "organizer_org": "UConn",
        "photo": "../_assets/scientific-session-speakers/ming-hui-chen.jpg",
        "summary": [
            "This is going to be a Bayesian session.",
            "This session mainly focuses on recent advancement or reactions in responding to a recent FDA landmark draft guidance, \"Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products,\" jointly released by the Center for Drug Evaluation and Research (CDER) and the Center for Biologics Evaluation and Research (CBER).",
        ],
    },
]

HOME_CURRENT_PAGE = "__home__"
SHARED_HEADER_SCRIPT = "_assets/shared-header-react.js"
SHARED_HEADER_STYLESHEET = "_assets/dsdss2026.css"
REACT_UMD_TAGS = (
    '<script defer src="https://unpkg.com/react@17/umd/react.production.min.js" '
    'crossorigin="anonymous"></script>'
    '<script defer src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" '
    'crossorigin="anonymous"></script>'
)


def shared_header_mount_html(current_page: str, prefix: str, variant: str) -> str:
    return (
        f'<div data-shared-header-root="1" data-current-page="{current_page}" '
        f'data-nav-prefix="{prefix}" data-header-variant="{variant}"></div>'
    )


def ensure_shared_header_assets(text: str, prefix: str) -> str:
    stylesheet_tag = f'<link rel="stylesheet" href="{prefix}{SHARED_HEADER_STYLESHEET}" />'
    if SHARED_HEADER_STYLESHEET not in text:
        text = text.replace("</head>", f"{stylesheet_tag}</head>", 1)
    if SHARED_HEADER_SCRIPT not in text:
        tags = (
            f'{REACT_UMD_TAGS}<script defer src="{prefix}{SHARED_HEADER_SCRIPT}"></script>'
        )
        text = text.replace("</head>", f"{tags}</head>", 1)
    return text


def relative_prefix(path: Path) -> str:
    depth = len(path.relative_to(SITE_ROOT).parts) - 1
    return "../" * depth


def page_name_for_path(path: Path) -> str:
    if path == SITE_ROOT / "index.html":
        return HOME_CURRENT_PAGE
    if path == SITE_ROOT / "page-18143" / "index.html":
        return "DSDSS2026-sponsor"
    return path.parent.name


def session_path(number: int) -> Path:
    return SITE_ROOT / f"DSDSS2026-scientific-session-{number}" / "index.html"


def submenu_item(number: int, current_page: str, prefix: str) -> str:
    title = f"Session {number}"
    page_name = f"DSDSS2026-scientific-session-{number}"
    href = nav_href(page_name, current_page, prefix)
    li_class = menu_li_class(current_page == page_name, False)
    return (
        f'<li class="{li_class}">\n'
        '\t<div class="item">\n'
        f'\t\t<a href="{href}" title="{title}"><span>{title}</span></a>\n'
        "</div>\n"
        "</li>\n\t\n"
    )


def build_submenu(current_page: str, prefix: str) -> str:
    return "".join(submenu_item(session["number"], current_page, prefix) for session in SESSIONS)


def menu_li_class(selected: bool, is_dir: bool) -> str:
    if selected and is_dir:
        return "sel dir"
    if selected:
        return "sel "
    if is_dir:
        return " dir"
    return " "


def nav_href(target: str, current_page: str, prefix: str) -> str:
    if current_page == target:
        return "index.html"
    return f"{prefix}{target}/index.html"


def root_href(current_page: str, prefix: str) -> str:
    if current_page == HOME_CURRENT_PAGE:
        return "index.html"
    return f"{prefix}index.html"


def menu_block_html(current_page: str, prefix: str) -> str:
    scientific_items = build_submenu(current_page, prefix)
    dsdss_class = menu_li_class(current_page == HOME_CURRENT_PAGE, True)
    agenda_class = menu_li_class(current_page == "DSDSS2026-agenda", True)
    keynote_class = menu_li_class(current_page == "DSDSS2026-keynote-sessions", True)
    scientific_class = menu_li_class(current_page == "DSDSS2026-scientific-sessions", True)
    sponsor_class = menu_li_class(current_page == "DSDSS2026-sponsor", False)
    short_course_class = menu_li_class(current_page == "DSDSS2026-short-course", False)
    speakers_class = menu_li_class(current_page == "DSDSS2026-speakers", True)
    venue_class = menu_li_class(current_page == "DSDSS2026-venue", False)
    opening_remarks_class = menu_li_class(current_page == "DSDSS2026-opening-remarks", False)
    banquet_class = menu_li_class(current_page == "DSDSS2026-banquet", False)
    keynote_1_class = menu_li_class(current_page == "DSDSS2026-keynote-session-1", False)
    keynote_2_class = menu_li_class(current_page == "DSDSS2026-keynote-session-2", False)
    abstract_class = menu_li_class(current_page == "DSDSS2026-abstract-submission", False)
    poster_class = menu_li_class(current_page == "DSDSS2026-poster-submission", False)
    registration_class = menu_li_class(current_page == "DSDSS2026-registration", False)
    committee_class = menu_li_class(current_page == "DSDSS2026-committee", False)
    banquet_speakers_class = menu_li_class(current_page == "DSDSS2026-banquet-speakers", False)
    invited_speakers_class = menu_li_class(current_page == "DSDSS2026-invited-speakers", False)
    keynote_speakers_class = menu_li_class(current_page == "DSDSS2026-keynote-speakers", False)
    panelists_class = menu_li_class(current_page == "DSDSS2026-panelists", False)

    return f"""<div id="id_d5WBRcn" class="WaGadgetOnly WaGadgetMenuHorizontal  menuStyle002" style="margin-top:15px;" data-componentId="MMsqyjY" ><div class="menuInner">
\t<ul class="firstLevel">
<li class="{dsdss_class}">
\t<div class="item">
\t\t<a href="{root_href(current_page, prefix)}" title="DSDSS2026"><span>DSDSS2026</span></a>
<ul class="secondLevel">
<li class="{abstract_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-abstract-submission", current_page, prefix)}" title="Abstract Submission"><span>Abstract Submission</span></a>
</div>
</li>
\t
<li class="{poster_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-poster-submission", current_page, prefix)}" title="Poster Submission"><span>Poster Submission</span></a>
</div>
</li>
\t
<li class="{registration_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-registration", current_page, prefix)}" title="Registration"><span>Registration</span></a>
</div>
</li>
\t
<li class="{committee_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-committee", current_page, prefix)}" title="Committee"><span>Committee</span></a>
</div>
</li>
\t
</ul>
\t</div>
</li>
\t
<li class="{agenda_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-agenda", current_page, prefix)}" title="Agenda &amp; Program"><span>Agenda &amp; Program</span></a>
<ul class="secondLevel">
<li class="{opening_remarks_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-opening-remarks", current_page, prefix)}" title="Opening Remarks"><span>Opening Remarks</span></a>
</div>
</li>
\t
<li class="{keynote_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-keynote-sessions", current_page, prefix)}" title="Keynotes"><span>Keynotes</span></a>
<ul class="secondLevel">
<li class="{keynote_1_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-keynote-session-1", current_page, prefix)}" title="Goncalo Rocha Abecasis"><span>Goncalo Rocha Abecasis</span></a>
</div>
</li>
\t
<li class="{keynote_2_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-keynote-session-2", current_page, prefix)}" title="Susan Murphy"><span>Susan Murphy</span></a>
</div>
</li>
\t
</ul>
\t</div>
</li>
\t
<li class="{scientific_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-scientific-sessions", current_page, prefix)}" title="Scientific Sessions"><span>Scientific Sessions</span></a>
<ul class="secondLevel">
{scientific_items}</ul>
\t</div>
</li>
\t
<li class="{banquet_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-banquet", current_page, prefix)}" title="Banquet"><span>Banquet</span></a>
</div>
</li>
\t
</ul>
\t</div>
</li>
\t
<li class="{sponsor_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-sponsor", current_page, prefix)}" title="Sponsor"><span>Sponsor</span></a>
</div>
</li>
\t
<li class="{short_course_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-short-course", current_page, prefix)}" title="Short Course"><span>Short Course</span></a>
</div>
</li>
\t
<li class="{speakers_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-speakers", current_page, prefix)}" title="Speakers"><span>Speakers</span></a>
<ul class="secondLevel">
<li class="{banquet_speakers_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-banquet-speakers", current_page, prefix)}" title="Banquet Speakers"><span>Banquet Speakers</span></a>
</div>
</li>
\t
<li class="{invited_speakers_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-invited-speakers", current_page, prefix)}" title="Invited Speakers"><span>Invited Speakers</span></a>
</div>
</li>
\t
<li class="{keynote_speakers_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-keynote-speakers", current_page, prefix)}" title="Keynote Speakers"><span>Keynote Speakers</span></a>
</div>
</li>
\t
<li class="{panelists_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-panelists", current_page, prefix)}" title="Panelists"><span>Panelists</span></a>
</div>
</li>
\t
</ul>
\t</div>
</li>
\t
<li class="{venue_class}">
\t<div class="item">
\t\t<a href="{nav_href("DSDSS2026-venue", current_page, prefix)}" title="Venue"><span>Venue</span></a>
\t</div>
</li>
</ul>
</div>

<script type="text/javascript">
  if (window.WaMenuHorizontal) {{ new WaMenuHorizontal({{ id: "id_d5WBRcn" }}); }}
</script>"""


def replace_inner_header(text: str, current_page: str, prefix: str = "../") -> str:
    pattern = re.compile(
        r'<div id="id_3HZnuUn".*?<script type="text/javascript">\s*if \(window\.WaMenuHorizontal\) \{ new WaMenuHorizontal\(\{ id: "id_d5WBRcn" \}\); \}\s*</script>',
        re.DOTALL,
    )
    updated = pattern.sub(
        shared_header_mount_html(current_page, prefix, "inner"),
        text,
        count=1,
    )
    return ensure_shared_header_assets(updated, prefix)


def home_header_html() -> str:
    return shared_header_mount_html(HOME_CURRENT_PAGE, "", "home")


def replace_scientific_submenu(text: str, current_page: str) -> str:
    parent_href = "index.html" if current_page == "DSDSS2026-scientific-sessions" else "../DSDSS2026-scientific-sessions/index.html"
    new_block = (
        f'<a href="{parent_href}" title="Scientific Sessions"><span>Scientific Sessions</span></a>\n'
        '<ul class="secondLevel">\n'
        f"{build_submenu(current_page)}"
        "</ul>"
    )
    pattern = re.compile(
        r'<a href="(?:\.\./DSDSS2026-scientific-sessions/index\.html|index\.html)" title="Scientific Sessions"><span>Scientific Sessions</span></a>\s*<ul class="secondLevel">\s*.*?\s*</ul>',
        re.DOTALL,
    )
    return pattern.sub(new_block, text, count=1)


def replace_keynote_submenu(text: str, current_page: str) -> str:
    parent_href = "index.html" if current_page == "DSDSS2026-keynote-sessions" else "../DSDSS2026-keynote-sessions/index.html"
    keynote_1_href = "index.html" if current_page == "DSDSS2026-keynote-session-1" else "../DSDSS2026-keynote-session-1/index.html"
    keynote_2_href = "index.html" if current_page == "DSDSS2026-keynote-session-2" else "../DSDSS2026-keynote-session-2/index.html"
    keynote_1_class = "sel " if current_page == "DSDSS2026-keynote-session-1" else " "
    keynote_2_class = "sel " if current_page == "DSDSS2026-keynote-session-2" else " "
    new_block = (
        '<li class=" dir">\n'
        '\t<div class="item">\n'
        f'<a href="{parent_href}" title="Keynotes"><span>Keynotes</span></a>\n'
        '<ul class="secondLevel">\n'
        f'<li class="{keynote_1_class}">\n'
        '\t<div class="item">\n'
        f'\t\t<a href="{keynote_1_href}" title="Goncalo Rocha Abecasis"><span>Goncalo Rocha Abecasis</span></a>\n'
        "</div>\n"
        "</li>\n\t\n"
        f'<li class="{keynote_2_class}">\n'
        '\t<div class="item">\n'
        f'\t\t<a href="{keynote_2_href}" title="Susan Murphy"><span>Susan Murphy</span></a>\n'
        "</div>\n"
        "</li>\n\t\n"
        "</ul>\n"
        "\t</div>\n"
        "</li>"
    )
    pattern = re.compile(
        r'<li class=" dir">\s*<div class="item">\s*<a href="(?:\.\./DSDSS2026-keynote-sessions/index\.html|index\.html)" title="Keynotes"><span>Keynotes</span></a>\s*<ul class="secondLevel">\s*.*?\s*</ul>\s*</div>\s*</li>(?=\s*<li class=" dir">\s*<div class="item">\s*<a href="(?:\.\./DSDSS2026-scientific-sessions/index\.html|index\.html)" title="Scientific Sessions")',
        re.DOTALL,
    )
    return pattern.sub(new_block, text, count=1)


def replace_inner_html(text: str, new_inner_html: str) -> str:
    inner_start = text.find("<!DOCTYPE html>", 1)
    if inner_start == -1:
        inner_start = text.find("<html lang=\"en\">", 1)
    if inner_start == -1:
        raise ValueError("Inner custom HTML start not found")
    inner_end = text.find("</html>", inner_start)
    if inner_end == -1:
        raise ValueError("Inner custom HTML end not found")
    inner_end += len("</html>")
    return text[:inner_start] + new_inner_html + text[inner_end:]


def set_title(text: str, title: str) -> str:
    return re.sub(r"<title>.*?</title>", f"<title>{title}</title>", text, count=1, flags=re.DOTALL)


def set_breadcrumb_last(text: str, label: str) -> str:
    pattern = re.compile(
        r'(<li><a href="\.\./DSDSS2026-scientific-sessions/index\.html">Scientific Sessions</a></li>\s*<li class="last">)(.*?)(</li>)',
        re.DOTALL,
    )
    return pattern.sub(rf"\1{label}\3", text, count=1)


def styles_block() -> str:
    return """  <style>
    body {
      font-family: "Times New Roman", Times, serif;
      color: #333;
      margin: 0;
      padding: 1rem;
    }
    .abstract-content {
      max-height: 9em;
      overflow: hidden;
      transition: max-height 0.5s ease;
    }
    .abstract-content.expanded {
      max-height: 1000px;
    }
    .plenary-list {
      list-style: disc inside;
      margin: 0 0 2rem;
      font-size: 1rem;
    }
    .plenary-list li {
      margin-bottom: 0.85rem;
      line-height: 1.6;
    }
    .plenary-list li a {
      color: #7f1d2d;
      text-decoration: none;
      font-weight: bold;
    }
    .plenary-list li a:hover {
      text-decoration: underline;
    }
    .plenary-talk {
      display: flex;
      flex-direction: column;
      background: #fff;
      padding: 1.2rem;
      margin-bottom: 2rem;
      border-radius: 6px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      gap: 1.5rem;
    }
    .plenary-details {
      text-align: left;
    }
    .plenary-details::after {
      content: "";
      display: block;
      clear: both;
    }
    .compact-session-layout {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
    }
    .compact-session-layout::after {
      content: none;
    }
    .compact-session-layout .blank-photo {
      float: none;
      flex: 0 0 200px;
      margin: 0;
    }
    .compact-session-copy {
      flex: 1 1 auto;
      min-width: 0;
    }
    .plenary-details h3 {
      margin: 0 0 0.5rem;
      font-size: 1.3rem;
      color: #000;
    }
    .plenary-details p {
      margin: 0 0 0.7rem;
      line-height: 1.6;
      color: #555;
    }
    .blank-photo {
      float: left;
      width: 200px;
      height: 200px;
      border-radius: 6px;
      border: 1px solid #ddd;
      margin: 0 1.5rem 1rem 0;
      background: linear-gradient(135deg, #f6ecee 0%, #ffffff 100%);
    }
    .speaker-photo {
      display: block;
      object-fit: cover;
      object-position: 50% 32%;
      background: #f4f4f4;
    }
    .speaker-photo[alt="Haoda Fu"] { object-position: 50% 30%; }
    .speaker-photo[alt="Runze Li"] { object-position: 50% 22%; }
    .speaker-photo[alt="Jacek Urbanek"] { object-position: 50% 38%; }
    .speaker-photo[alt="Nancy Zhang"] { object-position: 46% 18%; }
    .speaker-photo[alt="Mercedeh Ghadessi"] { object-position: 48% 34%; }
    .speaker-photo[alt="Ming-Hui Chen"] { object-position: 50% 28%; }
    .read-more-btn {
      display: block;
      margin: 1rem 0 0 calc(200px + 1rem);
      padding: 0.5rem 1rem;
      background: #a51c30;
      color: #fff;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.95rem;
    }
    .read-more-btn:hover {
      background: #861627;
    }
    @media (max-width: 600px) {
      .compact-session-layout {
        display: block;
      }
      .compact-session-layout .blank-photo {
        float: left;
        margin: 0 1.5rem 1rem 0;
      }
      .blank-photo {
        width: 100%;
        height: 200px;
        margin-right: 0;
      }
      .plenary-details h3 {
        font-size: 1.2rem;
      }
      .read-more-btn {
        margin-left: 0;
      }
    }
  </style>"""


def scripts_block() -> str:
    return """<script>
  function toggleBio(btn) {
    const container = btn.previousElementSibling;
    const expanded = container.classList.toggle('expanded');
    btn.textContent = expanded ? 'Fold' : 'Read more';
  }
</script>"""


def speaker_photo_html(session: dict) -> str:
    if not session.get("photo"):
        return '<div class="blank-photo" aria-hidden="true"></div>'
    return (
        f'<img class="blank-photo speaker-photo" src="{session["photo"]}" '
        f'alt="{session["organizer_name"]}">'
    )


def needs_read_more(session: dict) -> bool:
    summary = session.get("summary", [])
    total_chars = sum(len(paragraph.strip()) for paragraph in summary)
    return len(summary) > 1 or total_chars > 220


def landing_card(session: dict) -> str:
    summary_html = "\n".join(
        f"      <p>{paragraph}</p>" for paragraph in session["summary"]
    )
    is_compact = not needs_read_more(session)
    if not is_compact:
        abstract_block = (
            '      <div class="abstract-content">\n'
            f"{summary_html}\n"
            "      </div>\n"
            '      <button class="read-more-btn" onclick="toggleBio(this)">Read more</button>'
        )
    else:
        abstract_block = summary_html
    schedule_html = ""
    if session.get("day") and session.get("time"):
        schedule_html = f'      <p><strong>{session["day"]}</strong><br>{session["time"]}</p>\n'
    details_open = '<div class="plenary-details compact-session-layout">' if is_compact else '<div class="plenary-details">'
    content_open = '<div class="compact-session-copy">' if is_compact else ''
    content_close = '</div>' if is_compact else ''
    return f"""  <div class="plenary-talk" id="session-{session["number"]}">
    <h3><strong>{session["title"]}</strong></h3>
    {details_open}
      {speaker_photo_html(session)}
      {content_open}
      <h3><strong>Organizer: <a href="../DSDSS2026-speakers/index.html">{session["organizer_name"]}</a></strong></h3>
      <p><strong>{session["organizer_org"]}</strong></p>
{schedule_html}{abstract_block}
      {content_close}
    </div>
  </div>"""


def landing_inner_html() -> str:
    list_items = "\n".join(
        f"""    <li>
      <a href="../DSDSS2026-scientific-session-{session["number"]}/index.html">{session["title"]}</a>
      <br>
      Organizer: {session["organizer_name"]}, {session["organizer_org"]}
    </li>
    <br>"""
        for session in SESSIONS
    )
    cards = "\n\n".join(landing_card(session) for session in SESSIONS)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Scientific Sessions</title>
{styles_block()}
</head>
<body>
{scripts_block()}

  <h3><strong>Scientific Sessions</strong></h3>

  <ul class="plenary-list">
{list_items}
  </ul>

{cards}

</body>
</html>"""


def session_inner_html(session: dict) -> str:
    summary_html = "\n".join(
        f"      <p>{paragraph}</p>" for paragraph in session["summary"]
    )
    is_compact = not needs_read_more(session)
    if not is_compact:
        abstract_block = (
            '      <div class="abstract-content">\n'
            f"{summary_html}\n"
            "      </div>\n"
            '      <button class="read-more-btn" onclick="toggleBio(this)">Read more</button>'
        )
    else:
        abstract_block = summary_html
    schedule_list_item = ""
    schedule_html = ""
    if session.get("day") and session.get("time"):
        schedule_list_item = f"""    <li>
      <strong>Schedule:</strong> {session["day"]}, {session["time"]}
    </li>
"""
        schedule_html = f"""      <p><strong>Schedule:</strong> {session["day"]}<br>{session["time"]}</p>
"""
    details_open = '<div class="plenary-details compact-session-layout">' if is_compact else '<div class="plenary-details">'
    content_open = '<div class="compact-session-copy">' if is_compact else ''
    content_close = '</div>' if is_compact else ''
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{session["title"]}</title>
{styles_block()}
</head>
<body>
{scripts_block()}

  <h3><strong>{session["title"]}</strong></h3>

  <ul class="plenary-list">
    <li>
      <strong>Organizer:</strong> {session["organizer_name"]}, {session["organizer_org"]}
    </li>
{schedule_list_item}    <li>
      <a href="../DSDSS2026-agenda/index.html">Back to Agenda &amp; Program</a>
    </li>
    <li>
      <a href="../DSDSS2026-scientific-sessions/index.html">Back to Scientific Sessions</a>
    </li>
  </ul>

  <div class="plenary-talk" id="session-{session["number"]}">
    {details_open}
      {speaker_photo_html(session)}
      {content_open}
      <h3><strong>{session["title"]}</strong></h3>
      <h3><strong>Organizer: <a href="../DSDSS2026-speakers/index.html">{session["organizer_name"]}</a></strong></h3>
      <p><strong>{session["organizer_org"]}</strong></p>
{schedule_html}{abstract_block}
      {content_close}
    </div>
  </div>

</body>
</html>"""


def update_landing_page() -> None:
    landing_path = SITE_ROOT / "DSDSS2026-scientific-sessions" / "index.html"
    text = landing_path.read_text(encoding="utf-8", errors="ignore")
    text = replace_inner_header(
        text,
        "DSDSS2026-scientific-sessions",
        relative_prefix(landing_path),
    )
    text = set_title(text, "Scientific Sessions")
    text = replace_inner_html(text, landing_inner_html())
    landing_path.write_text(text, encoding="utf-8")


def update_session_pages() -> None:
    template = SESSION_TEMPLATE.read_text(encoding="utf-8", errors="ignore")
    for session in SESSIONS:
        path = session_path(session["number"])
        if path.exists():
            text = path.read_text(encoding="utf-8", errors="ignore")
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            text = template
        current_page = f"DSDSS2026-scientific-session-{session['number']}"
        text = replace_inner_header(text, current_page, relative_prefix(path))
        text = set_title(text, session["title"])
        text = set_breadcrumb_last(text, session["title"])
        text = replace_inner_html(text, session_inner_html(session))
        path.write_text(text, encoding="utf-8")


def update_all_2026_navs() -> None:
    extra_paths = [SITE_ROOT / "Old" / "DSDSS2026-agenda" / "index.html"]
    for path in list(SITE_ROOT.glob("DSDSS2026*/index.html")) + extra_paths:
        if not path.exists():
            continue
        page_name = path.parent.name
        if page_name == "DSDSS2026-scientific-sessions" or page_name.startswith("DSDSS2026-scientific-session-"):
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        updated = replace_inner_header(text, page_name, relative_prefix(path))
        path.write_text(updated, encoding="utf-8")


def update_homepage_nav() -> None:
    homepage_path = SITE_ROOT / "index.html"
    text = homepage_path.read_text(encoding="utf-8", errors="ignore")
    updated = re.sub(
        r'<header class="top-band wa-home-header">.*?</header>',
        home_header_html(),
        text,
        count=1,
        flags=re.DOTALL,
    )
    updated = ensure_shared_header_assets(updated, "")
    homepage_path.write_text(updated, encoding="utf-8")


def update_sitewide_headers() -> None:
    for path in SITE_ROOT.rglob("index.html"):
        if path == SITE_ROOT / "index.html":
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        prefix = relative_prefix(path)
        current_page = page_name_for_path(path)

        if 'data-shared-header-root="1"' in text:
            updated = ensure_shared_header_assets(text, prefix)
            if updated != text:
                path.write_text(updated, encoding="utf-8")
            continue

        if 'id_3HZnuUn' in text and 'WaMenuHorizontal' in text:
            updated = replace_inner_header(text, current_page, prefix)
            path.write_text(updated, encoding="utf-8")
            continue

        updated = ensure_shared_header_assets(text, prefix)
        if updated != text:
            path.write_text(updated, encoding="utf-8")


def rebuild_scientific_sessions() -> None:
    update_homepage_nav()
    update_all_2026_navs()
    update_landing_page()
    update_session_pages()
    update_sitewide_headers()


if __name__ == "__main__":
    rebuild_scientific_sessions()
