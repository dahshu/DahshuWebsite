#!/usr/bin/env python3

from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent


def strip_leading_doctype(html: str) -> str:
    if html.startswith("<!DOCTYPE html>\n"):
        return html.split("\n", 1)[1]
    return html


def replace_inner_content(path: Path, end_marker: str, replacement: str) -> None:
    text = path.read_text(encoding="utf-8", errors="ignore")
    end = text.find(end_marker)
    if end == -1:
        raise ValueError(f"End marker not found in {path}")

    first_doctype = text.find("<!DOCTYPE html>")
    second_doctype = text.find("<!DOCTYPE html>", first_doctype + 1) if first_doctype != -1 else -1

    if second_doctype != -1 and second_doctype < end:
        start = second_doctype
        body = replacement
    else:
        start = text.rfind("<html lang=\"en\">", 0, end)
        if start == -1:
            raise ValueError(f"Inner content start not found in {path}")
        body = strip_leading_doctype(replacement)

    path.write_text(text[:start] + body + "</div>\n</div>" + text[end:], encoding="utf-8")


def replace_text(path: Path, old: str, new: str) -> None:
    text = path.read_text(encoding="utf-8", errors="ignore")
    if old not in text:
        raise ValueError(f"Expected text not found in {path}")
    path.write_text(text.replace(old, new, 1), encoding="utf-8")


def speaker_placeholder_page(title: str, label: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{title}</title>
  <style>
    body {{
      font-family: "Times New Roman", Times, serif;
      color: #333;
      margin: 0;
      padding: 1rem;
    }}
    ul.plenary-list {{
      list-style: disc inside;
      margin: 0 0 2rem;
      font-size: 1rem;
    }}
    ul.plenary-list li a {{
      color: #a51c30;
      text-decoration: none;
      font-weight: bold;
    }}
    ul.plenary-list li a:hover {{
      text-decoration: underline;
    }}
    .plenary-talk {{
      display: flex;
      flex-direction: column;
      background: #fff;
      padding: 1.2rem;
      margin-bottom: 2rem;
      border-radius: 6px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      gap: 1.5rem;
    }}
    .plenary-details {{
      text-align: left;
    }}
    .plenary-details h3 {{
      margin: 0 0 0.5rem;
      font-size: 1.3rem;
      color: #6f1726;
    }}
    .plenary-details p {{
      margin: 0;
      line-height: 1.6;
      color: #555;
    }}
    .blank-photo {{
      float: left;
      width: 200px;
      height: 200px;
      border-radius: 6px;
      border: 1px solid #ddd;
      margin: 0 1.5rem 1rem 0;
      background: linear-gradient(135deg, #f6ecee 0%, #ffffff 100%);
    }}
    .bio-content {{
      max-height: 200px;
      overflow: hidden;
      position: relative;
      transition: max-height 0.5s ease;
    }}
    .bio-content.expanded {{
      max-height: 1000px;
    }}
    .read-more-btn {{
      display: inline-block;
      margin: 1rem 0 0 calc(200px + 1rem);
      padding: 0.45rem 0.95rem;
      background: #a51c30;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      font-family: "Times New Roman", Times, serif;
      color: #ffffff;
      cursor: pointer;
      text-align: left;
      font-size: 1rem;
    }}
    @media (max-width: 600px) {{
      .blank-photo {{
        width: 100%;
        height: 200px;
        margin-right: 0;
      }}
      .plenary-details h3 {{
        font-size: 1.2rem;
        text-align: center;
      }}
      .plenary-details {{
        text-align: center;
      }}
      .read-more-btn {{
        margin-left: 0;
        text-align: center;
      }}
    }}
  </style>
</head>
<body>
<script>
function toggleBio(button) {{
  const bio = button.previousElementSibling;
  const isExpanded = bio.classList.toggle('expanded');
  button.textContent = isExpanded ? 'Read less' : 'Read more';
}}
</script>

  <ul class="plenary-list">
    <li>
      <strong>{label}:</strong>
      <a href="index.html">To do</a>
    </li>
  </ul>

  <div class="plenary-talk" id="placeholder">
    <div class="plenary-details">
      <h3><strong>To do</strong></h3>
      <div class="blank-photo"></div>
      <p><strong>To do</strong></p>
      <div class="bio-content">
        <p>To do</p>
      </div>
      <button class="read-more-btn" onclick="toggleBio(this)">Read more</button>
    </div>
  </div>

</body>
</html>"""


def short_course_placeholder_page() -> str:
    return """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Short Courses</title>
  <style>
    body {
      font-family: "Times New Roman", Times, serif;
      color: #333;
      margin: 0;
      padding: 1rem;
    }
    ul.plenary-list {
      list-style: disc inside;
      margin: 0 0 2rem;
      font-size: 1rem;
    }
    ul.plenary-list li a {
      color: #a51c30;
      text-decoration: none;
      font-weight: bold;
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
      color: #6f1726;
    }
    .plenary-details p,
    .plenary-details li {
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
    .outline-list {
      list-style: disc inside;
      margin: 0.75rem 0 0;
      padding: 0;
    }
  </style>
</head>
<body>

  <ul class="plenary-list">
    <li><strong>Short Course:</strong> <a href="index.html">To do</a></li>
  </ul>

  <div class="plenary-talk" id="short-course-placeholder">
    <div class="plenary-details">
      <h3><strong>Short Course</strong></h3>
      <div class="blank-photo"></div>
      <p><strong>Instructor:</strong> To do</p>
      <p><strong>Description:</strong> To do</p>
      <h3><strong>Course Outline</strong></h3>
      <ul class="outline-list">
        <li>To do</li>
        <li>To do</li>
        <li>To do</li>
      </ul>
    </div>
  </div>

</body>
</html>"""


def committee_placeholder_page() -> str:
    return """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Committee List</title>
  <style>
    .committee-list {
      font-family: "Times New Roman", Times, serif;
      margin: 40px auto;
      color: #222;
    }
    .committee-list h1,
    .committee-list h2 {
      font-family: "Times New Roman", Times, serif;
      color: #6f1726;
      font-weight: bold;
      text-align: center;
    }
    .committee-list h1 {
      font-size: 2em;
      margin-bottom: 1em;
    }
    .committee-list h2 {
      font-size: 1.5em;
      margin: 2em 0 0.5em;
    }
    .committee-list table.steering,
    .committee-list table.program {
      width: 80%;
      margin: 0 auto 1.5em;
      border-collapse: collapse;
    }
    .committee-list table.steering td,
    .committee-list table.program td {
      padding: 8px;
      border-bottom: 1px solid #ead2d7;
    }
    .committee-list table.steering td:nth-child(1),
    .committee-list table.program td:nth-child(1) {
      text-align: left;
      font-weight: bold;
    }
    .committee-list table.steering td:nth-child(2),
    .committee-list table.program td:nth-child(2),
    .committee-list table.program td:nth-child(3) {
      text-align: right;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="committee-list">
    <h1>Committee List</h1>

    <h2>Steering Committee</h2>
    <table class="steering">
      <tr><td>To do</td><td>To do</td></tr>
      <tr><td>To do</td><td>To do</td></tr>
      <tr><td>To do</td><td>To do</td></tr>
    </table>

    <h2>Program Committee</h2>
    <table class="program">
      <tr><td>To do</td><td>To do</td><td>To do</td></tr>
      <tr><td>To do</td><td>To do</td><td>To do</td></tr>
      <tr><td>To do</td><td>To do</td><td>To do</td></tr>
    </table>
  </div>
</body>
</html>"""


def venue_placeholder_page() -> str:
    def item(title: str, content: str) -> str:
        return f"""
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">
        {title}
        <span class="arrow"></span>
      </div>
      <div class="accordion-content">
        {content}
      </div>
    </div>
  </div>"""

    placeholder_photo = '<div style="width:100%;max-width:420px;height:220px;margin-top:1rem;border:1px solid #ddd;border-radius:4px;background:linear-gradient(135deg,#f6ecee 0%,#ffffff 100%);"></div>'
    sections = [
        item("Conference Venue", f"<p>To do</p>{placeholder_photo}"),
        item("Short Course Venue", f"<p>To do</p>{placeholder_photo}"),
        item("Banquet Venue", f"<p>To do</p>{placeholder_photo}"),
        item("Hotels", "<p>To do</p>"),
        item("Registration Guide", "<p>To do</p>"),
        item("Wi-Fi and Alert System", "<p>To do</p>"),
        item("Parking and Directions", "<p>To do</p>"),
        item("Helpful Tips When Visiting Campus", "<p>To do</p>"),
        item("Things To Do While Visiting", "<p>To do</p>"),
    ]
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Venue and Travel Information</title>
  <style>
    body {{
      font-family: "Times New Roman", Times, serif;
      background: #f0f4f8;
      margin: 0;
      padding: 2rem;
    }}
    .page-title {{
      text-align: center;
      color: #6f1726;
      margin: 0 0 2rem;
    }}
    .accordion {{
      width: calc(100% - 4rem);
      max-width: 1200px;
      margin: 0 auto 1rem;
      background: #fff;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }}
    .accordion-item + .accordion-item {{
      border-top: 1px solid #c1dcdc;
    }}
    .accordion-header {{
      position: relative;
      padding: 1rem 1.5rem;
      cursor: pointer;
      line-height: 1.4;
      font-size: 1.1rem;
      color: #6F1726;
    }}
    .accordion-header::after {{
      content: "";
      position: absolute;
      bottom: 0;
      left: 1.5rem;
      right: 1.5rem;
      height: 2px;
      background: #A51C30;
    }}
    .accordion-header .arrow {{
      position: absolute;
      right: 1.5rem;
      top: 50%;
      width: 12px;
      height: 12px;
      transform: translateY(-50%) rotate(0deg);
      transition: transform 0.3s ease;
      border-right: 2px solid #6F1726;
      border-bottom: 2px solid #6F1726;
    }}
    .accordion-item.active .accordion-header .arrow {{
      transform: translateY(-50%) rotate(45deg);
    }}
    .accordion-content {{
      max-height: 400px;
      overflow-y: auto;
      transition: none;
      padding: 0 1.5rem;
    }}
    .accordion-item:not(.active) .accordion-content {{
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
    }}
    .accordion-item.active .accordion-content {{
      max-height: 800px;
      padding-bottom: 1rem;
    }}
    .accordion-content p {{
      margin: 1rem 0;
      color: #333;
      line-height: 1.6;
    }}
  </style>
</head>
<body>
  <h1 class="page-title">Venue and Travel Information</h1>
  {''.join(sections)}
  <script>
    document.querySelectorAll('.accordion-header').forEach(header => {{
      header.addEventListener('click', () => {{
        const item = header.parentElement;
        item.classList.toggle('active');
      }});
    }});
  </script>
</body>
</html>"""


def update_homepages() -> None:
    second_paragraph = (
        '<p>This year\'s symposium, themed "Empowering Medical Insights with Data and AI", will feature ten scientific '
        "sessions and four short courses from over 40 outstanding speakers. Our scientific sessions will explore a "
        "broad spectrum of data science topics in biomedical and clinical research, with short courses focusing on "
        "emerging topics such as generative AI and large language models, novel clinical trial design, as well as "
        "single-cell and spatial informatics. We expect the symposium to attract hundreds of researchers from both "
        "industry and academia, fostering vibrant discussions on the emerging opportunities and challenges in "
        "data-driven healthcare, drug discovery, and biomedical research. We look forward to welcoming you in person "
        "in Boston.</p>"
    )
    for page in [ROOT / "index.html", ROOT / "DSDSS2026" / "index.html"]:
        text = page.read_text(encoding="utf-8", errors="ignore")
        if second_paragraph in text:
            page.write_text(text.replace(second_paragraph, "<p>To do</p>", 1), encoding="utf-8")


def update_footer_emails() -> None:
    for page in ROOT.glob("DSDSS2026*/index.html"):
      text = page.read_text(encoding="utf-8", errors="ignore")
      text = text.replace("dahshu2025@gmail.com", "dahshuinfo@gmail.com")
      text = text.replace("DAHSHU2025@GMAIL.COM", "DAHSHUINFO@GMAIL.COM")
      page.write_text(text, encoding="utf-8")


def main() -> None:
    update_homepages()

    pages = {
        ROOT / "DSDSS2026-banquet" / "index.html": speaker_placeholder_page("Banquet", "Banquet Speaker"),
        ROOT / "DSDSS2026-banquet-speakers" / "index.html": speaker_placeholder_page("Banquet Speaker", "Banquet Speaker"),
        ROOT / "DSDSS2026-invited-speakers" / "index.html": speaker_placeholder_page("Invited Speakers", "Invited Speaker"),
        ROOT / "DSDSS2026-keynote-speakers" / "index.html": speaker_placeholder_page("Keynote Speakers", "Keynote Speaker"),
        ROOT / "DSDSS2026-panelists" / "index.html": speaker_placeholder_page("Panelists", "Panelist"),
        ROOT / "DSDSS2026-speakers" / "index.html": speaker_placeholder_page("Speakers", "Speaker"),
        ROOT / "DSDSS2026-short-course" / "index.html": short_course_placeholder_page(),
        ROOT / "DSDSS2026-committee" / "index.html": committee_placeholder_page(),
        ROOT / "DSDSS2026-venue" / "index.html": venue_placeholder_page(),
    }

    end_marker = '<div id="id_WpXCHAw"'
    for path, replacement in pages.items():
        replace_inner_content(path, end_marker, replacement)

    update_footer_emails()


if __name__ == "__main__":
    main()
