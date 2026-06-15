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
        "photo": "../_assets/scientific-session-speakers/sara-hamon.svg",
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
            "Welcome comments from other committee members.",
        ],
    },
]


def session_path(number: int) -> Path:
    return SITE_ROOT / f"DSDSS2026-scientific-session-{number}" / "index.html"


def submenu_item(number: int, current_page: str) -> str:
    title = f"Session {number}"
    href = "index.html" if current_page == f"DSDSS2026-scientific-session-{number}" else f"../DSDSS2026-scientific-session-{number}/index.html"
    li_class = "sel " if current_page == f"DSDSS2026-scientific-session-{number}" else " "
    return (
        f'<li class="{li_class}">\n'
        '\t<div class="item">\n'
        f'\t\t<a href="{href}" title="{title}"><span>{title}</span></a>\n'
        "</div>\n"
        "</li>\n\t\n"
    )


def build_submenu(current_page: str) -> str:
    return "".join(submenu_item(session["number"], current_page) for session in SESSIONS)


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
      background: #f4f4f4;
    }
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


def landing_card(session: dict) -> str:
    summary_html = "\n".join(
        f"      <p>{paragraph}</p>" for paragraph in session["summary"]
    )
    schedule_html = ""
    if session.get("day") and session.get("time"):
        schedule_html = f'      <p><strong>{session["day"]}</strong><br>{session["time"]}</p>\n'
    return f"""  <div class="plenary-talk" id="session-{session["number"]}">
    <h3><strong>{session["title"]}</strong></h3>
    <div class="plenary-details">
      {speaker_photo_html(session)}
      <h3><strong>Organizer: <a href="../DSDSS2026-speakers/index.html">{session["organizer_name"]}</a></strong></h3>
      <p><strong>{session["organizer_org"]}</strong></p>
{schedule_html}      <div class="abstract-content">
{summary_html}
      </div>
      <button class="read-more-btn" onclick="toggleBio(this)">Read more</button>
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
    schedule_list_item = ""
    schedule_html = ""
    if session.get("day") and session.get("time"):
        schedule_list_item = f"""    <li>
      <strong>Schedule:</strong> {session["day"]}, {session["time"]}
    </li>
"""
        schedule_html = f"""      <p><strong>Schedule:</strong> {session["day"]}<br>{session["time"]}</p>
"""
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
    <div class="plenary-details">
      {speaker_photo_html(session)}
      <h3><strong>{session["title"]}</strong></h3>
      <h3><strong>Organizer: <a href="../DSDSS2026-speakers/index.html">{session["organizer_name"]}</a></strong></h3>
      <p><strong>{session["organizer_org"]}</strong></p>
{schedule_html}      <div class="abstract-content">
{summary_html}
      </div>
      <button class="read-more-btn" onclick="toggleBio(this)">Read more</button>
    </div>
  </div>

</body>
</html>"""


def update_landing_page() -> None:
    landing_path = SITE_ROOT / "DSDSS2026-scientific-sessions" / "index.html"
    text = landing_path.read_text(encoding="utf-8", errors="ignore")
    text = replace_scientific_submenu(text, "DSDSS2026-scientific-sessions")
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
        text = replace_scientific_submenu(text, current_page)
        text = set_title(text, session["title"])
        text = set_breadcrumb_last(text, session["title"])
        text = replace_inner_html(text, session_inner_html(session))
        path.write_text(text, encoding="utf-8")


def update_all_2026_navs() -> None:
    for path in SITE_ROOT.glob("DSDSS2026*/index.html"):
        page_name = path.parent.name
        if page_name == "DSDSS2026-scientific-sessions" or page_name.startswith("DSDSS2026-scientific-session-"):
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        updated = replace_scientific_submenu(text, page_name)
        path.write_text(updated, encoding="utf-8")


def rebuild_scientific_sessions() -> None:
    update_all_2026_navs()
    update_landing_page()
    update_session_pages()


if __name__ == "__main__":
    rebuild_scientific_sessions()
