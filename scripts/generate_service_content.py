#!/usr/bin/env python3
"""Convert DOCX landing page content into static HTML strings and metadata."""
from __future__ import annotations

import json
import re
import subprocess
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List

BASE_DIR = Path(__file__).resolve().parent.parent
SOURCE_DIRECTORIES: Dict[str, str] = {
    "Digital Marketing Landing Page Content": "digital-marketing",
    "IT Manager Services Landing Page Content": "it-manager-services",
    "Programming Landing Page Content": "programming",
}
CONTENT_DIR = BASE_DIR / "client" / "src" / "content"


def slugify(name: str) -> str:
    trimmed = name
    trimmed = re.sub(r"Landing Page Content", "", trimmed, flags=re.IGNORECASE)
    trimmed = re.sub(r"Landing Page", "", trimmed, flags=re.IGNORECASE)
    trimmed = re.sub(r"[\(\)\[\]]", "", trimmed)
    trimmed = trimmed.replace("&", " and ")
    trimmed = trimmed.replace("/", " ")
    trimmed = trimmed.replace("+", " plus ")
    trimmed = trimmed.replace("#", " sharp ")
    trimmed = trimmed.strip()
    trimmed = re.sub(r"[^A-Za-z0-9]+", "-", trimmed)
    trimmed = re.sub(r"-+", "-", trimmed)
    return trimmed.strip("-").lower()


def run_textutil(path: Path) -> str:
    result = subprocess.run(
        [
            "textutil",
            "-convert",
            "html",
            "-stdout",
            str(path),
        ],
        capture_output=True,
        check=True,
    )
    html = result.stdout.decode("utf-8")
    replacements = {
        "\u2019": "'",
        "\u2018": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2013": "-",
        "\u2014": "-",
        "\u2026": "...",
        "\u2022": "-",
    }
    for source, target in replacements.items():
        html = html.replace(source, target)
    normalized = unicodedata.normalize("NFKD", html)
    ascii_html = normalized.encode("ascii", "ignore").decode("ascii")
    return ascii_html.replace("\r", "")


def clean_html(html: str) -> str:
    without_doctype = re.sub(r"<!DOCTYPE[^>]+>", "", html, flags=re.IGNORECASE)
    without_head = re.sub(r"<head>.*?</head>", "", without_doctype, flags=re.IGNORECASE | re.DOTALL)
    body_match = re.search(r"<body>(.*)</body>", without_head, flags=re.IGNORECASE | re.DOTALL)
    if not body_match:
        raise ValueError("Could not locate <body> tag in HTML content")
    body_html = body_match.group(1)
    body_html = re.sub(r"<span[^>]*Apple-converted-space[^>]*>\s*</span>", " ", body_html, flags=re.IGNORECASE)
    body_html = re.sub(r" class=\"[^\"]*\"", "", body_html)
    body_html = re.sub(r" id=\"[^\"]*\"", "", body_html)
    body_html = re.sub(r" style=\"[^\"]*\"", "", body_html)
    body_html = re.sub(r"\n{3,}", "\n\n", body_html)
    body_html = re.sub(r"\s+<", "<", body_html)
    body_html = re.sub(r">\s+", ">", body_html)
    return body_html.strip()


def extract_paragraphs(body_html: str) -> List[str]:
    raw_paragraphs = re.findall(r"<p>(.*?)</p>", body_html, flags=re.IGNORECASE | re.DOTALL)
    cleaned: List[str] = []
    for paragraph in raw_paragraphs:
        text = re.sub(r"<br ?/?>", " ", paragraph, flags=re.IGNORECASE)
        text = re.sub(r"<[^>]+>", "", text)
        text = re.sub(r"\s+", " ", text).strip()
        if text:
            cleaned.append(text)
    return cleaned


def strip_leading_paragraphs(body_html: str, count: int) -> str:
    remaining = body_html.lstrip()
    pattern = re.compile(r"^<p>.*?</p>", flags=re.IGNORECASE | re.DOTALL)
    removed = 0
    while removed < count:
        match = pattern.match(remaining)
        if not match:
            break
        remaining = remaining[match.end():].lstrip()
        removed += 1
    # Clean up leading empty paragraphs like <p><br></p>
    while True:
        match = pattern.match(remaining)
        if not match:
            break
        inner = remaining[:match.end()]
        if re.sub(r"<[^>]+>", "", inner).strip():
            break
        remaining = remaining[match.end():].lstrip()
    return remaining


def safe_identifier(name: str) -> str:
    identifier = name.replace("-", "_")
    identifier = re.sub(r"[^A-Za-z0-9_]", "_", identifier)
    if not identifier:
        identifier = "content"
    if identifier[0].isdigit():
        identifier = f"content_{identifier}"
    return identifier


@dataclass
class ServiceRecord:
    category: str
    slug: str
    title: str
    subtitle: str
    summary: str
    import_path: str
    identifier: str


def main() -> None:
    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    records: List[ServiceRecord] = []

    for source_dir, category_slug in SOURCE_DIRECTORIES.items():
        directory_path = BASE_DIR / source_dir
        if not directory_path.exists():
            raise FileNotFoundError(f"Missing source directory: {directory_path}")

        target_dir = CONTENT_DIR / category_slug
        target_dir.mkdir(parents=True, exist_ok=True)

        for existing_html in target_dir.glob("*.html"):
            existing_html.unlink()

        for docx_path in sorted(directory_path.glob("*.docx")):
            slug = slugify(docx_path.stem)
            raw_html = run_textutil(docx_path)
            body_html = clean_html(raw_html)
            paragraphs = extract_paragraphs(body_html)

            title = paragraphs[0] if paragraphs else slug.replace("-", " ").title()
            subtitle = paragraphs[1] if len(paragraphs) > 1 else ""
            summary_source_index = 2 if len(paragraphs) > 2 else 1
            summary = paragraphs[summary_source_index] if len(paragraphs) > summary_source_index else subtitle or title

            stripped_body_html = strip_leading_paragraphs(body_html, 2 if len(paragraphs) > 1 else 1)

            html_path = target_dir / f"{slug}.html"
            html_path.write_text(stripped_body_html, encoding="ascii")

            identifier = safe_identifier(f"{category_slug}_{slug}")
            import_path = f"./{category_slug}/{slug}.html"
            records.append(
                ServiceRecord(
                    category=category_slug,
                    slug=slug,
                    title=title,
                    subtitle=subtitle,
                    summary=summary,
                    import_path=import_path,
                    identifier=identifier,
                )
            )

    records.sort(key=lambda item: (item.category, item.title.lower()))

    service_pages_path = CONTENT_DIR / "service-pages.ts"
    with service_pages_path.open("w", encoding="ascii") as ts_file:
        ts_file.write("// Auto-generated by scripts/generate_service_content.py\n")
        ts_file.write("// Do not edit manually.\n\n")
        ts_file.write("export type ServiceCategory = 'digital-marketing' | 'it-manager-services' | 'programming';\n")
        ts_file.write("export interface ServicePageContent {\n")
        ts_file.write("  category: ServiceCategory;\n")
        ts_file.write("  slug: string;\n")
        ts_file.write("  title: string;\n")
        ts_file.write("  subtitle: string;\n")
        ts_file.write("  summary: string;\n")
        ts_file.write("  content: string;\n")
        ts_file.write("}\n\n")

        for record in records:
            ts_file.write(f"import {record.identifier} from '{record.import_path}?raw';\n")
        ts_file.write("\n")

        ts_file.write("export const servicePages: ServicePageContent[] = [\n")
        for record in records:
            ts_file.write("  {\n")
            ts_file.write(f"    category: {json.dumps(record.category)},\n")
            ts_file.write(f"    slug: {json.dumps(record.slug)},\n")
            ts_file.write(f"    title: {json.dumps(record.title)},\n")
            ts_file.write(f"    subtitle: {json.dumps(record.subtitle)},\n")
            ts_file.write(f"    summary: {json.dumps(record.summary)},\n")
            ts_file.write(f"    content: {record.identifier},\n")
            ts_file.write("  },\n")
        ts_file.write("]\n")


if __name__ == "__main__":
    main()
