#!/usr/bin/env python3

from __future__ import annotations

import hashlib
import html as html_lib
import mimetypes
import os
import posixpath
import re
import shutil
import subprocess
from collections import deque
from pathlib import Path
from typing import Optional
from urllib.parse import parse_qsl, quote, unquote, urljoin, urlparse
import sys


ROOT_URL = "https://dahshu.wildapricot.org/"
ROOT_HOST = urlparse(ROOT_URL).netloc
OUTPUT_DIR = Path(__file__).resolve().parent.parent / "site"
MAX_PAGES = 80
FONT_STYLESHEET = (
    "https://fonts.googleapis.com/css2?"
    "family=Lato:wght@300;400;700&"
    "family=Open+Sans:wght@300;400;600;700&"
    "family=Roboto+Condensed:wght@300;400;700&"
    "family=Roboto+Slab:wght@300;400;700&"
    "family=Roboto:wght@300;400;500;700&"
    "display=swap"
)
LOCAL_FONT_FIXES_STYLESHEET = "_assets/local-font-fixes.css"

HTML_ATTR_RE = re.compile(r'(?P<attr>href|src)\s*=\s*(?P<quote>["\'])(?P<url>.*?)(?P=quote)', re.IGNORECASE)
SRCSET_RE = re.compile(r'(?P<attr>srcset)\s*=\s*(?P<quote>["\'])(?P<url>.*?)(?P=quote)', re.IGNORECASE)
CSS_URL_RE = re.compile(r'url\((?P<quote>["\']?)(?P<url>.*?)(?P=quote)\)', re.IGNORECASE)

PAGE_EXTENSIONS = {
    "",
    ".html",
    ".htm",
    ".aspx",
    ".ashx",
}

ASSET_EXTENSIONS = {
    ".avif",
    ".bmp",
    ".css",
    ".eot",
    ".gif",
    ".ico",
    ".jpeg",
    ".jpg",
    ".js",
    ".json",
    ".mp3",
    ".mp4",
    ".otf",
    ".pdf",
    ".png",
    ".rss",
    ".svg",
    ".ttf",
    ".txt",
    ".webm",
    ".webp",
    ".woff",
    ".woff2",
    ".xml",
    ".zip",
}

SKIP_PREFIXES = (
    "mailto:",
    "tel:",
    "javascript:",
    "data:",
    "chrome-extension:",
)


def log(message: str) -> None:
    print(message, flush=True)


def fetch_bytes(url: str) -> bytes:
    proc = subprocess.run(
        [
            "curl",
            "-k",
            "-L",
            "--compressed",
            "--connect-timeout",
            "15",
            "--max-time",
            "45",
            "-A",
            "Mozilla/5.0",
            "-sS",
            url,
        ],
        capture_output=True,
        check=False,
    )
    if proc.returncode != 0:
        raise RuntimeError(f"curl failed for {url}: {proc.stderr.decode('utf-8', 'ignore').strip()}")
    return proc.stdout


def fetch_text(url: str) -> str:
    return fetch_bytes(url).decode("utf-8", "ignore")


def is_page_url(url: str) -> bool:
    parsed = urlparse(url)
    if parsed.scheme not in {"http", "https"}:
        return False
    path = unquote(parsed.path)
    ext = posixpath.splitext(path)[1].lower()
    return ext in PAGE_EXTENSIONS


def should_crawl(url: str) -> bool:
    parsed = urlparse(url)
    if parsed.netloc != ROOT_HOST:
        return False
    if not is_page_url(url):
        return False
    if parsed.fragment:
        return should_crawl(url.split("#", 1)[0])
    if parsed.query:
        return False
    return True


def looks_like_asset_url(url: str) -> bool:
    parsed = urlparse(url)
    path = unquote(parsed.path)
    ext = posixpath.splitext(path)[1].lower()
    return ext in ASSET_EXTENSIONS


def normalize_url(raw_url: str, base_url: str) -> Optional[str]:
    raw_url = html_lib.unescape(raw_url).strip().strip("'").strip('"')
    if not raw_url or raw_url.startswith(SKIP_PREFIXES):
        return None
    if raw_url in {"&", "/&", "none"}:
        return None
    if "chrome-extension:" in raw_url:
        return None
    if any(token in raw_url for token in (" alt=", " title=", " class=", " style=")):
        return None
    if raw_url.startswith("//"):
        raw_url = "https:" + raw_url
    absolute = urljoin(base_url, raw_url)
    parsed = urlparse(absolute)
    if parsed.scheme not in {"http", "https"}:
        return None
    safe_path = quote(unquote(parsed.path), safe="/%:@+~!$,;=-._()")
    safe_query = quote(unquote(parsed.query), safe="=&?/%:@+~!$,;:-._()")
    clean = parsed._replace(path=safe_path, query=safe_query, fragment="")
    return clean.geturl()


def safe_segment(segment: str) -> str:
    segment = unquote(segment).strip()
    if not segment:
        return "_"
    return quote(segment, safe="._-() ")


def page_output_path(url: str) -> Path:
    parsed = urlparse(url)
    parts = [safe_segment(part) for part in parsed.path.split("/") if part]
    if not parts:
        return OUTPUT_DIR / "index.html"
    ext = posixpath.splitext(parts[-1])[1].lower()
    if ext in {".html", ".htm"}:
        return OUTPUT_DIR.joinpath(*parts)
    return OUTPUT_DIR.joinpath(*parts, "index.html")


def asset_output_path(url: str, content_type: Optional[str] = None) -> Path:
    parsed = urlparse(url)
    host = safe_segment(parsed.netloc)
    parts = [safe_segment(part) for part in parsed.path.split("/") if part]
    if not parts:
        parts = ["index"]
    filename = parts[-1]
    stem, ext = os.path.splitext(filename)
    if not ext:
        guessed = ""
        if content_type:
            guessed = mimetypes.guess_extension(content_type.split(";", 1)[0].strip()) or ""
        filename = f"{filename}{guessed or '.bin'}"
        parts[-1] = filename
    if parsed.query:
        digest = hashlib.sha1(parsed.query.encode("utf-8")).hexdigest()[:10]
        stem, ext = os.path.splitext(parts[-1])
        parts[-1] = f"{stem}__{digest}{ext}"
    return OUTPUT_DIR / "_assets" / host / Path(*parts)


def relative_to(from_path: Path, to_path: Path) -> str:
    return os.path.relpath(to_path, start=from_path.parent).replace(os.sep, "/")


def rewrite_css_urls(text: str, base_url: str, current_file: Path, downloaded_assets: dict[str, Path]) -> str:
    def repl(match: re.Match[str]) -> str:
        raw = match.group("url").strip()
        if raw.startswith(SKIP_PREFIXES) or raw.startswith("#"):
            return match.group(0)
        absolute = normalize_url(raw, base_url)
        if not absolute:
            return match.group(0)
        asset_path = downloaded_assets.get(absolute)
        if not asset_path:
            return match.group(0)
        quote_char = match.group("quote") or ""
        return f"url({quote_char}{relative_to(current_file, asset_path)}{quote_char})"

    return CSS_URL_RE.sub(repl, text)


def rewrite_srcset(value: str, current_file: Path, downloaded_assets: dict[str, Path], base_url: str) -> str:
    entries = []
    for item in value.split(","):
        item = item.strip()
        if not item:
            continue
        pieces = item.split()
        raw_url = pieces[0]
        absolute = normalize_url(raw_url, base_url)
        if absolute and absolute in downloaded_assets:
            pieces[0] = relative_to(current_file, downloaded_assets[absolute])
        entries.append(" ".join(pieces))
    return ", ".join(entries)


def extract_html_links(html: str, base_url: str) -> tuple[set[str], set[str]]:
    page_links: set[str] = set()
    asset_links: set[str] = set()

    for match in HTML_ATTR_RE.finditer(html):
        attr = match.group("attr").lower()
        absolute = normalize_url(match.group("url"), base_url)
        if not absolute:
            continue
        if attr == "src":
            asset_links.add(absolute)
        elif should_crawl(absolute):
            page_links.add(absolute)
        elif looks_like_asset_url(absolute):
            asset_links.add(absolute)

    for match in CSS_URL_RE.finditer(html):
        absolute = normalize_url(match.group("url"), base_url)
        if absolute:
            asset_links.add(absolute)

    for match in SRCSET_RE.finditer(html):
        for entry in match.group("url").split(","):
            candidate = entry.strip().split()[0]
            absolute = normalize_url(candidate, base_url)
            if absolute:
                asset_links.add(absolute)

    return page_links, asset_links


def rewrite_html(
    html: str,
    page_url: str,
    current_file: Path,
    page_paths: dict[str, Path],
    downloaded_assets: dict[str, Path],
) -> str:
    def attr_repl(match: re.Match[str]) -> str:
        attr = match.group("attr")
        quote_char = match.group("quote")
        raw = match.group("url")
        absolute = normalize_url(raw, page_url)
        if not absolute:
            return match.group(0)

        target = None
        if absolute in page_paths:
            target = relative_to(current_file, page_paths[absolute])
        elif absolute in downloaded_assets:
            target = relative_to(current_file, downloaded_assets[absolute])

        if not target:
            return match.group(0)
        return f'{attr}={quote_char}{target}{quote_char}'

    def srcset_repl(match: re.Match[str]) -> str:
        quote_char = match.group("quote")
        rewritten = rewrite_srcset(match.group("url"), current_file, downloaded_assets, page_url)
        return f'srcset={quote_char}{rewritten}{quote_char}'

    html = HTML_ATTR_RE.sub(attr_repl, html)
    html = SRCSET_RE.sub(srcset_repl, html)
    html = rewrite_css_urls(html, page_url, current_file, downloaded_assets)
    font_link = f'<link rel="stylesheet" href="{FONT_STYLESHEET}" />'
    local_font_fix_link = f'<link rel="stylesheet" href="{relative_to(current_file, OUTPUT_DIR / LOCAL_FONT_FIXES_STYLESHEET)}" />'
    if FONT_STYLESHEET not in html and "<head" in html:
        html = html.replace("</head>", f"{font_link}{local_font_fix_link}</head>", 1)
    elif LOCAL_FONT_FIXES_STYLESHEET not in html and "<head" in html:
        html = html.replace("</head>", f"{local_font_fix_link}</head>", 1)
    live_sf_root = relative_to(current_file, OUTPUT_DIR / "_assets" / "live-sf.wildapricot.org" / "WebUI") + "/"
    html = html.replace("https://live-sf.wildapricot.org/WebUI/", live_sf_root)
    return html


def rewrite_css_asset(asset_url: str, asset_path: Path, downloaded_assets: dict[str, Path]) -> None:
    if asset_path.suffix.lower() != ".css":
        return
    try:
        text = asset_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return
    rewritten = rewrite_css_urls(text, asset_url, asset_path, downloaded_assets)
    asset_path.write_text(rewritten, encoding="utf-8")


def download_asset(url: str, downloaded_assets: dict[str, Path]) -> None:
    if url in downloaded_assets:
        return
    data = fetch_bytes(url)
    target = asset_output_path(url)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
    downloaded_assets[url] = target


def clone_site() -> None:
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    queue: deque[str] = deque([ROOT_URL])
    seen_pages: set[str] = set()
    page_html: dict[str, str] = {}
    page_paths: dict[str, Path] = {}
    all_asset_links: set[str] = set()

    while queue and len(seen_pages) < MAX_PAGES:
        url = queue.popleft()
        if url in seen_pages:
            continue
        seen_pages.add(url)
        log(f"Fetching page {len(seen_pages)}/{MAX_PAGES}: {url}")
        html = fetch_text(url)
        page_html[url] = html
        page_paths[url] = page_output_path(url)
        page_links, asset_links = extract_html_links(html, url)
        all_asset_links.update(asset_links)
        for link in sorted(page_links):
            if link not in seen_pages:
                queue.append(link)

    downloaded_assets: dict[str, Path] = {}
    for asset_url in sorted(all_asset_links):
        try:
            log(f"Downloading asset: {asset_url}")
            download_asset(asset_url, downloaded_assets)
        except Exception as exc:
            log(f"Skipping asset {asset_url}: {exc}")

    for asset_url, asset_path in downloaded_assets.items():
        rewrite_css_asset(asset_url, asset_path, downloaded_assets)

    for page_url, html in page_html.items():
        target = page_paths[page_url]
        target.parent.mkdir(parents=True, exist_ok=True)
        rewritten = rewrite_html(html, page_url, target, page_paths, downloaded_assets)
        target.write_text(rewritten, encoding="utf-8")

    log(f"Mirror complete: {len(page_html)} pages, {len(downloaded_assets)} assets")
    log(f"Output: {OUTPUT_DIR}")


if __name__ == "__main__":
    try:
        clone_site()
    except KeyboardInterrupt:
        sys.exit(130)
