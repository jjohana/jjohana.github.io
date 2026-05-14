from __future__ import annotations

import argparse
import json
import math
import re
import shutil
import subprocess
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Any

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
DOCX_PATH = Path(r"C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Market.docx")
PDF_PATH = Path(r"C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Regulatory.pdf")
PDFTOPPM = Path(r"C:\Users\Jean-JacquesOhana\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdftoppm.exe")

CACHE_DIR = ROOT / "private" / "llm-reimport"
SOURCE_DIR = CACHE_DIR / "sources"
MARKET_DIR = SOURCE_DIR / "market-docx"
REG_RAW_DIR = SOURCE_DIR / "regulatory-pdf-raw"
REG_CROP_DIR = SOURCE_DIR / "regulatory-pdf"
MANIFEST_PATH = CACHE_DIR / "source-manifest.json"


def patch_tokens(width: int, height: int, budget: int) -> int:
    patch_count = math.ceil(width / 32) * math.ceil(height / 32)
    if patch_count <= budget:
        return patch_count
    shrink = math.sqrt((32**2 * budget) / (width * height))
    adjusted = shrink * min(
        math.floor(width * shrink / 32) / (width * shrink / 32),
        math.floor(height * shrink / 32) / (height * shrink / 32),
    )
    resized_width = max(1, math.floor(width * adjusted))
    resized_height = max(1, math.floor(height * adjusted))
    return min(budget, math.ceil(resized_width / 32) * math.ceil(resized_height / 32))


def estimate_image_tokens(width: int, height: int, detail: str) -> int:
    if detail == "low":
        # The docs describe low as a 512px low-resolution view. Use a conservative
        # 256-patch estimate for budget gating.
        return 256
    if detail == "original":
        return patch_tokens(width, height, 10_000)
    return patch_tokens(width, height, 2_500)


def extract_market_images(force: bool) -> list[dict[str, Any]]:
    MARKET_DIR.mkdir(parents=True, exist_ok=True)
    if force:
        shutil.rmtree(MARKET_DIR, ignore_errors=True)
        MARKET_DIR.mkdir(parents=True, exist_ok=True)

    ns = {
        "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
        "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    }
    rel_ns = "http://schemas.openxmlformats.org/package/2006/relationships"
    items: list[dict[str, Any]] = []

    with zipfile.ZipFile(DOCX_PATH) as docx:
        rels_root = ET.fromstring(docx.read("word/_rels/document.xml.rels"))
        rels = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels_root.findall(f"{{{rel_ns}}}Relationship")}
        document = ET.fromstring(docx.read("word/document.xml"))
        rids = [
            blip.attrib.get(f"{{{ns['r']}}}embed")
            for blip in document.findall(".//a:blip", ns)
            if blip.attrib.get(f"{{{ns['r']}}}embed")
        ]
        for index, rid in enumerate(rids, start=1):
            target = rels[rid]
            package_path = target if target.startswith("word/") else f"word/{target}"
            suffix = Path(package_path).suffix.lower() or ".png"
            image_id = f"market-docx-{index:04d}"
            output = MARKET_DIR / f"{image_id}{suffix}"
            if not output.exists():
                output.write_bytes(docx.read(package_path))
            with Image.open(output) as image:
                width, height = image.size
            items.append(
                {
                    "id": image_id,
                    "source": "s3-market-docx",
                    "sourceDocument": "S3-Market.docx",
                    "sequence": index,
                    "imagePath": str(output.relative_to(ROOT)).replace("\\", "/"),
                    "width": width,
                    "height": height,
                    "estimatedImageTokensHigh": estimate_image_tokens(width, height, "high"),
                }
            )
    return items


def ensure_pdf_rendered(force: bool) -> None:
    REG_RAW_DIR.mkdir(parents=True, exist_ok=True)
    if force:
        shutil.rmtree(REG_RAW_DIR, ignore_errors=True)
        REG_RAW_DIR.mkdir(parents=True, exist_ok=True)
    if list(REG_RAW_DIR.glob("page-*.png")):
        return
    if not PDFTOPPM.exists():
        raise SystemExit(f"pdftoppm not found at {PDFTOPPM}")
    subprocess.run(
        [str(PDFTOPPM), "-png", "-r", "170", str(PDF_PATH), str(REG_RAW_DIR / "page")],
        check=True,
    )


def page_number(path: Path) -> int:
    match = re.search(r"(\d+)", path.stem)
    if not match:
        raise ValueError(f"Cannot parse page number from {path}")
    return int(match.group(1))


def crop_regulatory_pages(force: bool) -> list[dict[str, Any]]:
    REG_CROP_DIR.mkdir(parents=True, exist_ok=True)
    if force:
        shutil.rmtree(REG_CROP_DIR, ignore_errors=True)
        REG_CROP_DIR.mkdir(parents=True, exist_ok=True)

    items: list[dict[str, Any]] = []
    for raw_path in sorted(REG_RAW_DIR.glob("page-*.png"), key=page_number):
        page = page_number(raw_path)
        output = REG_CROP_DIR / f"regulatory-pdf-{page:03d}.png"
        if not output.exists():
            with Image.open(raw_path) as image:
                width, height = image.size
                # The PDF pages are browser screenshots. This crop removes browser
                # chrome and the unused lower area while preserving the QCM body.
                box = (int(width * 0.11), int(height * 0.105), int(width * 0.89), int(height * 0.64))
                image.crop(box).save(output)
        with Image.open(output) as image:
            width, height = image.size
        items.append(
            {
                "id": f"regulatory-pdf-{page:03d}",
                "source": "s3-regulatory-pdf",
                "sourceDocument": "S3-Regulatory.pdf",
                "sequence": page,
                "imagePath": str(output.relative_to(ROOT)).replace("\\", "/"),
                "width": width,
                "height": height,
                "estimatedImageTokensHigh": estimate_image_tokens(width, height, "high"),
            }
        )
    return items


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true", help="Recreate prepared source images.")
    args = parser.parse_args()

    if not DOCX_PATH.exists():
        raise SystemExit(f"Missing DOCX source: {DOCX_PATH}")
    if not PDF_PATH.exists():
        raise SystemExit(f"Missing PDF source: {PDF_PATH}")

    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    market = extract_market_images(force=args.force)
    ensure_pdf_rendered(force=args.force)
    regulatory = crop_regulatory_pages(force=args.force)
    items = [*market, *regulatory]
    manifest = {
        "generatedAt": "2026-05-14T00:00:00.000Z",
        "sourceDocuments": {
            "s3-market-docx": str(DOCX_PATH),
            "s3-regulatory-pdf": str(PDF_PATH),
        },
        "items": items,
        "counts": {
            "s3-market-docx": len(market),
            "s3-regulatory-pdf": len(regulatory),
            "total": len(items),
        },
        "estimatedImageTokensHigh": sum(item["estimatedImageTokensHigh"] for item in items),
    }
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(json.dumps(manifest["counts"], indent=2))
    print(f"manifest={MANIFEST_PATH}")


if __name__ == "__main__":
    main()
