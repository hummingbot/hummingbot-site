#!/usr/bin/env python3
"""Fix MkDocs internal link validation warnings."""

from __future__ import annotations

import os
import re
from pathlib import Path

from markdown import Markdown

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"

LINK_RE = re.compile(r"(!?\[[^\]]*\])\(([^)]+)\)")

# Manual anchor rewrites: (file suffix or None for any file) -> {old: new}
ANCHOR_REWRITES: dict[str | None, dict[str, str]] = {
    None: {
        "#router-connector": "#router-endpoints",
        "#amm-connector": "#amm-endpoints",
        "#clmm-connector": "#clmm-endpoints",
        "#2-amm-connector": "#amm-endpoints",
        "#3-range-amm-connector": "#clmm-endpoints",
        "#3-clmm-connector": "#clmm-endpoints",
        "#central-limit-order-book-clob": "#central-limit-order-book-clob-exchanges",
        "#automated-exchange": "#automated-market-makers-amm",
        "#using-dydx-with-dashboard": "#using-dydx-with-hummingbot-dashboard",
        "#source-installation": "#install-from-source",
        "#example-workflows": "#example-conversations",
        "#adding-custom-connectors": "#building-custom-connectors",
        "#orderlevelamount": "#order_level_amount",
        "#orderlevelspread": "#order_level_spread",
        "#inventorytargetbasepct": "#inventory_target_base_pct",
        "#inventoryrangemultiplier": "#inventory_range_multiplier",
        "#hangingorderscancelpct": "#hanging_orders_cancel_pct",
        "#priceceiling": "#price_ceiling",
        "#pricefloor": "#price_floor",
        "#takeifcrossed": "#take_if_crossed",
        "#v2-controller-loader": "#v2-orchestration",
        "#market-data": "#api-endpoints",
    },
    "mcp/installation.md": {
        "./index.md#security-considerations": "../hummingbot-api/tailscale.md",
        "index.md#security-considerations": "../hummingbot-api/tailscale.md",
    },
}


def flatten_toc_tokens(tokens: list[dict]) -> set[str]:
    anchors: set[str] = set()
    for token in tokens:
        if token.get("id"):
            anchors.add(token["id"])
        anchors.update(flatten_toc_tokens(token.get("children", [])))
    return anchors


def page_anchors(text: str) -> set[str]:
    md = Markdown(extensions=["toc", "tables", "fenced_code", "attr_list"])
    md.convert(text)
    return flatten_toc_tokens(md.toc_tokens)


def build_url_index() -> dict[str, Path]:
    index: dict[str, Path] = {}
    for md in DOCS.rglob("*.md"):
        rel = md.relative_to(DOCS)
        if rel.name == "index.md":
            url = "/" + ("" if rel.parent == Path(".") else str(rel.parent).replace("\\", "/") + "/")
        else:
            url = "/" + str(rel.with_suffix("")).replace("\\", "/")
        index[url.rstrip("/") or "/"] = md
        if not url.endswith("/"):
            index[url.rstrip("/") + "/"] = md
    return index


URL_INDEX = build_url_index()


def resolve_target(path_part: str, current: Path) -> Path | None:
    path_part = path_part.strip()
    if not path_part:
        return current

    if path_part.startswith("/"):
        key = path_part.rstrip("/") or "/"
        return URL_INDEX.get(key) or URL_INDEX.get(key + "/")

    candidate = (current.parent / path_part).resolve()
    if candidate.is_dir():
        candidate = candidate / "index.md"
    elif candidate.suffix != ".md":
        as_file = Path(str(candidate) + ".md")
        as_index = candidate / "index.md"
        if as_file.exists():
            candidate = as_file
        elif as_index.exists():
            candidate = as_index
        elif not candidate.exists():
            return None
    return candidate if candidate.exists() else None


def to_md_link(target: Path, current: Path, anchor: str = "") -> str:
    rel = os.path.relpath(target, current.parent).replace("\\", "/")
    return rel + anchor


def rewrite_link(url: str, current: Path, current_anchors: set[str]) -> str:
    if url.startswith(("http://", "https://", "mailto:", "ftp://")):
        return url

    if url.startswith("#"):
        anchor = url
        rewrites = ANCHOR_REWRITES.get(None, {})
        rel = str(current.relative_to(DOCS)).replace("\\", "/")
        if rel in ANCHOR_REWRITES and anchor in ANCHOR_REWRITES[rel]:
            anchor = ANCHOR_REWRITES[rel][anchor]
        elif anchor in rewrites:
            anchor = rewrites[anchor]
        if anchor.lstrip("#") in current_anchors:
            return anchor
        # Strip broken same-page anchor links but keep text via caller
        return ""

    anchor = ""
    path_part = url
    if "#" in url:
        path_part, frag = url.split("#", 1)
        anchor = "#" + frag

    rel = str(current.relative_to(DOCS)).replace("\\", "/")
    full = path_part + anchor
    file_rewrites = ANCHOR_REWRITES.get(rel, {})
    if full in file_rewrites:
        return file_rewrites[full]

    rewrites = ANCHOR_REWRITES.get(None, {})
    if anchor in rewrites:
        anchor = rewrites[anchor]

    if not path_part:
        if anchor.lstrip("#") in current_anchors:
            return anchor
        return ""

    target = resolve_target(path_part, current)
    if not target:
        return url

    if anchor:
        target_anchors = page_anchors(target.read_text(encoding="utf-8"))
        if anchor.lstrip("#") not in target_anchors and anchor in rewrites:
            anchor = rewrites[anchor]
        if anchor.lstrip("#") not in target_anchors:
            return to_md_link(target, current)

    return to_md_link(target, current, anchor)


def process_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    anchors = page_anchors(text)
    changed = False

    def repl(match: re.Match[str]) -> str:
        nonlocal changed
        prefix, url = match.group(1), match.group(2)
        if url.startswith(("http://", "https://", "mailto:", "ftp://")):
            return match.group(0)

        new_url = rewrite_link(url, path, anchors)
        if not new_url:
            # Drop link wrapper, keep label text
            label = prefix.lstrip("!")
            if label.startswith("[") and label.endswith("]"):
                changed = True
                if prefix.startswith("!"):
                    return prefix + "(" + url + ")"
                return label[1:-1]
            return match.group(0)

        if new_url != url:
            changed = True
            return f"{prefix}({new_url})"
        return match.group(0)

    new_text = LINK_RE.sub(repl, text)
    if changed:
        path.write_text(new_text, encoding="utf-8")
    return changed


def main() -> None:
    updated = 0
    for md in sorted(DOCS.rglob("*.md")):
        if process_file(md):
            updated += 1
            print(md.relative_to(ROOT))
    print(f"\nUpdated {updated} files")


if __name__ == "__main__":
    main()
