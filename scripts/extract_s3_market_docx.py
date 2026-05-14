from __future__ import annotations

import argparse
import concurrent.futures
import json
import re
import zipfile
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path
from statistics import mean
from typing import Any

import cv2
import numpy as np
from PIL import Image


DOCX_PATH = Path(r"C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Market.docx")
WORK_DIR = Path("tmp_market_docx")
IMAGE_DIR = WORK_DIR / "images"
OCR_DIR = WORK_DIR / "ocr_pages"
REPORT_OUT = WORK_DIR / "s3-market-docx-import-report.json"
REVIEW_OUT = WORK_DIR / "s3-market-docx-manual-review.csv"
PUBLIC_TS_OUT = Path("src/data/s3MarketDocxQuestions.ts")
EXPECTED_SOURCE_COUNT = 447

CREATED_AT = "2026-05-13T00:00:00.000Z"

# The DOCX contains at least one confirmation dialog screenshot instead of an
# answer/explanation panel. This answer is inferred from the visible selected
# choice and the market concept, and remains flagged for review in the output.
INFERRED_CORRECT_ANSWERS = {
    35: "A",
}

TOPIC_TITLES = {
    "futures-theory": "Futures Trading Theory and Basic Functions Terminology",
    "margins-settlement-delivery": "Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment",
    "orders-accounts-analysis": "Types of Orders, Customer Accounts, Price Analysis",
    "hedging-basis": "Basic Hedging, Basis Calculations, Hedging Futures",
    "spreading": "Spreading",
    "futures-speculation": "Speculating in Futures",
    "options-futures": "Option Hedging, Speculating, Spreading",
}

DEFAULT_SUBTOPIC = {
    "futures-theory": "general-futures-terminology",
    "margins-settlement-delivery": "variation-margin",
    "orders-accounts-analysis": "fundamental-analysis",
    "hedging-basis": "basis-calculation",
    "spreading": "spread-execution",
    "futures-speculation": "gross-profit-loss",
    "options-futures": "option-profit",
}

SUBTOPIC_RULES: dict[str, list[tuple[str, list[str]]]] = {
    "futures-theory": [
        ("futures-vs-forwards", ["forward contract", "forwards", "standardized", "customized", "privately negotiated"]),
        ("clearinghouse", ["clearinghouse", "clearing member", "novation", "performance guarantee"]),
        ("offsetting-positions", ["offset", "liquidat", "close out", "opposite transaction"]),
        ("delivery-provisions", ["delivery", "deliver", "notice day", "make delivery", "take delivery"]),
        ("basis-grade-premiums-discounts", ["basis grade", "premium", "discount", "deliverable grade", "par grade"]),
        ("normal-vs-inverted-markets", ["normal market", "inverted", "backwardation", "nearby", "deferred"]),
        ("carrying-charges", ["carrying charge", "storage", "insurance", "financing", "full carry"]),
        ("hedging-theory", ["hedg", "price risk", "risk transfer"]),
        ("speculative-theory", ["speculat", "risk capital", "profit from price", "liquidity"]),
        ("general-options-terminology", ["option", "call", "put", "premium", "strike", "exercise"]),
        ("general-futures-terminology", ["volume", "open interest", "futures", "contract", "exchange", "price"]),
    ],
    "margins-settlement-delivery": [
        ("initial-margin", ["initial margin", "original margin", "deposit to open"]),
        ("maintenance-margin", ["maintenance margin", "minimum equity"]),
        ("variation-margin", ["variation margin", "mark to market", "settlement price", "daily settlement"]),
        ("margin-calls", ["margin call", "restore", "additional funds"]),
        ("performance-bond", ["performance bond", "good faith deposit"]),
        ("futures-vs-securities-margin", ["securities margin", "down payment", "borrowing"]),
        ("option-premiums", ["option premium", "premium paid", "premium received"]),
        ("intrinsic-value", ["intrinsic value", "in-the-money", "out-of-the-money", "at-the-money"]),
        ("time-value", ["time value", "extrinsic"]),
        ("delta", ["delta", "hedge ratio"]),
        ("price-limits", ["price limit", "daily limit", "limit move"]),
        ("expanded-limits", ["expanded limit", "expand"]),
        ("lock-limits", ["lock limit", "locked limit"]),
        ("circuit-breakers", ["circuit breaker", "trading halt"]),
        ("first-notice-day", ["first notice day", "first notice"]),
        ("delivery-notices", ["delivery notice", "notice of intention"]),
        ("physical-delivery", ["physical delivery", "actual delivery"]),
        ("warehouse-receipts", ["warehouse receipt", "shipping certificate"]),
        ("efps", ["exchange for physical", "efp"]),
        ("exercise-assignment", ["exercise", "assignment", "assigned"]),
    ],
    "orders-accounts-analysis": [
        ("market-orders", ["market order", "best available"]),
        ("stop-limit-orders", ["stop-limit", "stop limit"]),
        ("stop-orders", ["stop order", "buy stop", "sell stop", "stop-loss"]),
        ("market-if-touched", ["market-if-touched", "mit order", "touched"]),
        ("gtc-orders", ["good till canceled", "gtc"]),
        ("fok-orders", ["fill or kill", "fok"]),
        ("moc-orders", ["market on close", "moc"]),
        ("oco-orders", ["one cancels", "oco"]),
        ("technical-analysis", ["technical analysis", "chart", "trendline", "moving average"]),
        ("support-resistance", ["support", "resistance"]),
        ("gaps", ["gap", "breakaway", "exhaustion"]),
        ("volume", ["volume"]),
        ("open-interest", ["open interest"]),
        ("fundamental-analysis", ["fundamental", "crop", "weather", "supply", "demand"]),
        ("supply-demand", ["supply", "demand", "surplus", "shortage"]),
        ("interest-rate-analysis", ["interest rate", "treasury", "t-bill", "bond"]),
        ("yield-curves", ["yield curve", "inverted yield", "normal yield"]),
    ],
    "hedging-basis": [
        ("short-hedges", ["short hedge", "sell futures", "producer", "inventory", "will sell"]),
        ("long-hedges", ["long hedge", "buy futures", "will buy", "processor", "user of"]),
        ("anticipatory-hedges", ["anticipatory", "anticipated"]),
        ("long-the-basis", ["long the basis"]),
        ("short-the-basis", ["short the basis"]),
        ("basis-calculation", ["basis", "cash minus futures", "cash price", "futures price"]),
        ("strengthening-basis", ["strengthen", "stronger basis", "narrows from under", "widens over"]),
        ("weakening-basis", ["weaken", "weaker basis", "widens from under", "narrows over"]),
        ("transportation-costs", ["transportation", "freight", "shipping cost"]),
        ("deliverable-grade-differences", ["grade", "quality", "premium", "discount"]),
        ("financial-futures-basis", ["financial futures basis", "cash bond", "treasury futures"]),
        ("net-price-received-paid", ["net price", "effective price", "received", "paid"]),
        ("commodity-hedges", ["corn", "wheat", "soybean", "cattle", "hog", "cocoa", "coffee", "cotton"]),
        ("interest-rate-hedges", ["interest rate", "treasury", "bond", "note"]),
        ("currency-hedges", ["currency", "foreign exchange", "euro", "yen", "pound", "franc"]),
        ("stock-index-hedges", ["stock index", "s&p", "portfolio", "equity index"]),
    ],
    "spreading": [
        ("intramarket-spreads", ["intramarket", "same commodity"]),
        ("interdelivery-spreads", ["interdelivery", "different delivery months", "nearby", "deferred"]),
        ("intermarket-spreads", ["intermarket", "different commodity", "crack spread", "crush spread"]),
        ("bull-spreads", ["bull spread", "bullish spread"]),
        ("bear-spreads", ["bear spread", "bearish spread"]),
        ("narrowing-spread", ["narrow", "decrease in spread"]),
        ("widening-spread", ["widen", "increase in spread"]),
        ("normal-market-strategies", ["normal market"]),
        ("inverted-market-strategies", ["inverted market"]),
        ("carrying-charge-spreads", ["carrying charge", "full carry"]),
        ("spread-execution", ["spread", "leg", "differential"]),
    ],
    "futures-speculation": [
        ("gross-profit-loss", ["profit", "loss", "gain", "gross"]),
        ("tick-value", ["tick", "minimum fluctuation"]),
        ("contract-size", ["contract size", "bushels", "barrels", "multiplier", "pounds"]),
        ("commissions", ["commission", "round turn", "fees"]),
        ("single-contract-positions", ["one contract", "single contract"]),
        ("multiple-contract-positions", ["contracts", "multiple"]),
        ("return-on-margin-equity", ["return on margin", "return on equity", "roe"]),
        ("selecting-speculative-trades", ["select", "risk/reward", "trading plan"]),
        ("protective-orders", ["protective", "stop", "stop-loss"]),
    ],
    "options-futures": [
        ("long-calls", ["long call", "buy a call", "call buyer"]),
        ("long-puts", ["long put", "buy a put", "put buyer"]),
        ("short-calls", ["short call", "sell a call", "call writer"]),
        ("short-puts", ["short put", "sell a put", "put writer"]),
        ("premium-risk", ["premium risk", "maximum loss is the premium", "limited to the premium"]),
        ("short-option-risk", ["short option", "unlimited risk", "option writer"]),
        ("long-put-hedge", ["long put hedge", "buy put", "alternative to short futures"]),
        ("long-call-hedge", ["long call hedge", "buy call", "alternative to long futures"]),
        ("option-breakevens", ["breakeven", "break-even"]),
        ("option-profit", ["option profit", "profit", "loss"]),
        ("option-return-equity", ["return on equity", "return on premium"]),
        ("protective-calls", ["protective call"]),
        ("protective-puts", ["protective put"]),
        ("covered-calls", ["covered call"]),
        ("bull-call-spreads", ["bull call spread"]),
        ("bear-call-spreads", ["bear call spread"]),
        ("bull-put-spreads", ["bull put spread"]),
        ("bear-put-spreads", ["bear put spread"]),
        ("calendar-spreads", ["calendar spread", "time spread"]),
        ("arbitrage-spreads", ["arbitrage"]),
        ("max-profit-loss", ["maximum profit", "maximum loss", "max profit", "max loss"]),
    ],
}

_OCR_ENGINE: Any | None = None


@dataclass
class OcrLine:
    text: str
    score: float
    x1: float
    y1: float
    x2: float
    y2: float

    @property
    def cx(self) -> float:
        return (self.x1 + self.x2) / 2


def clean_text(text: str) -> str:
    text = text.replace("\u2018", "'").replace("\u2019", "'")
    text = text.replace("\u201c", '"').replace("\u201d", '"')
    text = text.replace("\u2013", "-").replace("\u2014", "-")
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    return text.strip()


def extract_images() -> list[Path]:
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    ns = {
        "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
        "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    }
    rel_ns = "http://schemas.openxmlformats.org/package/2006/relationships"

    with zipfile.ZipFile(DOCX_PATH) as docx:
        rels_root = ET.fromstring(docx.read("word/_rels/document.xml.rels"))
        rels = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels_root.findall(f"{{{rel_ns}}}Relationship")}
        document = ET.fromstring(docx.read("word/document.xml"))
        rids = [
            blip.attrib.get(f"{{{ns['r']}}}embed")
            for blip in document.findall(".//a:blip", ns)
            if blip.attrib.get(f"{{{ns['r']}}}embed")
        ]

        image_paths: list[Path] = []
        for index, rid in enumerate(rids, start=1):
            target = rels[rid]
            package_path = target if target.startswith("word/") else f"word/{target}"
            output = IMAGE_DIR / f"{index:04d}-{Path(package_path).name}"
            if not output.exists():
                output.write_bytes(docx.read(package_path))
            image_paths.append(output)
    return image_paths


def text_line_boxes(image: Image.Image, region: tuple[int, int, int, int], min_pixels: int = 4) -> list[tuple[int, int, int, int]]:
    x0, y0, x1, y1 = region
    crop = np.array(image.crop(region).convert("RGB"))
    gray = cv2.cvtColor(crop, cv2.COLOR_RGB2GRAY)
    mask = (gray < 145).astype("uint8")

    # Remove long vertical UI bars or borders if a region touches a panel edge.
    dense_cols = np.where(mask.sum(axis=0) > mask.shape[0] * 0.55)[0]
    mask[:, dense_cols] = 0

    rows = mask.sum(axis=1)
    active = rows > min_pixels
    runs: list[tuple[int, int]] = []
    start: int | None = None
    for index, is_active in enumerate(active):
        if is_active and start is None:
            start = index
        if (not is_active or index == len(active) - 1) and start is not None:
            end = index if not is_active else index + 1
            if end - start >= 3:
                runs.append((max(0, start - 2), min(mask.shape[0], end + 2)))
            start = None

    boxes: list[tuple[int, int, int, int]] = []
    for y_start, y_end in runs:
        submask = mask[y_start:y_end, :]
        columns = np.where(submask.sum(axis=0) > 0)[0]
        if len(columns) == 0:
            continue
        left = max(0, int(columns[0]) - 3)
        right = min(mask.shape[1], int(columns[-1]) + 4)
        if right - left >= 8:
            boxes.append((x0 + left, y0 + y_start, x0 + right, y0 + y_end))
    return boxes


def text_component_boxes(image: Image.Image, region: tuple[int, int, int, int]) -> list[tuple[int, int, int, int]]:
    x0, y0, x1, y1 = region
    crop = np.array(image.crop(region).convert("RGB"))
    gray = cv2.cvtColor(crop, cv2.COLOR_RGB2GRAY)
    mask = (gray < 145).astype("uint8")
    mask[mask.sum(axis=1) > mask.shape[1] * 0.5, :] = 0
    mask[:, mask.sum(axis=0) > mask.shape[0] * 0.5] = 0
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (8, 1))
    mask = cv2.dilate(mask, kernel, iterations=1)
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    boxes: list[tuple[int, int, int, int]] = []
    for contour in contours:
        x, y, width, height = cv2.boundingRect(contour)
        if width > 15 and height > 4:
            boxes.append((x0 + x, y0 + y, x0 + x + width, y0 + y + height))
    return sorted(boxes, key=lambda box: (box[1], box[0]))


def tight_text_box(image: Image.Image, region: tuple[int, int, int, int]) -> tuple[int, int, int, int]:
    x0, y0, x1, y1 = region
    crop = np.array(image.crop(region).convert("RGB"))
    gray = cv2.cvtColor(crop, cv2.COLOR_RGB2GRAY)
    mask = (gray < 145).astype("uint8")
    ys, xs = np.where(mask > 0)
    if len(xs) == 0:
        return region
    return (
        x0 + max(0, int(xs.min()) - 2),
        y0 + max(0, int(ys.min()) - 2),
        x0 + min(mask.shape[1], int(xs.max()) + 3),
        y0 + min(mask.shape[0], int(ys.max()) + 3),
    )


def rapid_ocr(path: Path) -> dict[str, Any]:
    global _OCR_ENGINE
    if _OCR_ENGINE is None:
        from rapidocr_onnxruntime import RapidOCR

        _OCR_ENGINE = RapidOCR()
    image = Image.open(path).convert("RGB")
    width, height = image.size
    box_groups: list[list[tuple[int, int, int, int]]] = []

    # These PassMaster screenshots have a stable layout. Direct line recognition
    # is much faster than full-page OCR detection and preserves enough geometry
    # for the parser below.
    box_groups.append(text_component_boxes(image, (int(0.07 * width), 88, int(0.93 * width), 124)))
    box_groups.append([tight_text_box(image, (int(0.68 * width), int(0.79 * height), int(0.92 * width), int(0.87 * height)))])
    box_groups.append(text_line_boxes(image, (18, int(0.31 * height), int(0.51 * width), int(0.79 * height))))
    box_groups.append(text_line_boxes(image, (int(0.50 * width), int(0.31 * height), width - 18, int(0.88 * height))))

    boxes: list[tuple[int, int, int, int]] = []
    rec_results: list[tuple[str, float]] = []
    for group in box_groups:
        if not group:
            continue
        crops = [np.array(image.crop(box).convert("RGB")) for box in group]
        group_results, _ = _OCR_ENGINE.text_rec(crops)
        boxes.extend(group)
        rec_results.extend(group_results)
    lines = []
    for box, (text, score) in zip(boxes, rec_results):
        if not clean_text(text):
            continue
        lines.append(
            {
                "text": text,
                "score": float(score),
                "x1": float(box[0]),
                "y1": float(box[1]),
                "x2": float(box[2]),
                "y2": float(box[3]),
            }
        )
    return {"image": str(path), "width": width, "height": height, "lines": lines}


def ocr_worker(path_text: str) -> tuple[str, dict[str, Any]]:
    path = Path(path_text)
    return path.name, rapid_ocr(path)


def ocr_images(image_paths: list[Path], workers: int, limit: int | None) -> None:
    OCR_DIR.mkdir(parents=True, exist_ok=True)
    selected = image_paths[:limit] if limit else image_paths
    todo = [path for path in selected if not (OCR_DIR / f"{path.stem}.json").exists()]
    if not todo:
        return
    with concurrent.futures.ProcessPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(ocr_worker, str(path)): path for path in todo}
        for done, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            path = futures[future]
            name, record = future.result()
            (OCR_DIR / f"{Path(name).stem}.json").write_text(json.dumps(record, ensure_ascii=False), encoding="utf-8")
            print(f"OCR {done}/{len(todo)} {path.name}", flush=True)


def load_records(limit: int | None) -> list[dict[str, Any]]:
    paths = sorted(OCR_DIR.glob("*.json"), key=lambda p: int(p.stem.split("-")[0]))
    if limit:
        paths = paths[:limit]
    return [json.loads(path.read_text(encoding="utf-8-sig")) for path in paths]


def line_objects(record: dict[str, Any]) -> list[OcrLine]:
    return [OcrLine(**line) for line in record["lines"]]


def detect_question_number(lines: list[OcrLine]) -> int | None:
    text = " ".join(line.text for line in lines)
    match = re.search(r"Question\s*(\d+)\s*of\s*(\d+)", text, re.I)
    if match:
        return int(match.group(1))
    compact = re.sub(r"\s+", "", text)
    match = re.search(r"(?:Question|Queston|Qvestion|stion)(\d{1,3})(?:of|0f)?447", compact, re.I)
    return int(match.group(1)) if match else None


def detect_source_code(lines: list[OcrLine]) -> str | None:
    for line in sorted(lines, key=lambda item: item.y1, reverse=True):
        normalized = clean_text(line.text).upper().replace(" ", "").replace(".", "_").replace("-", "_")
        normalized = normalized.replace("E2", "EZ").replace("1M", "IM").replace("DLI", "DI")
        match = re.search(r"\b\d{2}_?[A-Z]{2,3}_?\d+\b", normalized)
        if match:
            value = match.group(0)
            second = re.match(r"(\d{2})_?([A-Z]{2,3})_?(\d+)", value)
            if second:
                return f"{second.group(1)}_{second.group(2)}_{second.group(3)}"
    return None


def detect_topic(lines: list[OcrLine]) -> str:
    header_candidates = [
        clean_text(line.text)
        for line in lines
        if 70 <= line.y1 <= 135 and "question" not in line.text.lower() and "stion" not in line.text.lower() and "tutorial" not in line.text.lower()
    ]
    header = " ".join(header_candidates).lower()
    normalized = (
        header.replace("ootions", "options")
        .replace("optons", "options")
        .replace("spresading", "spreading")
        .replace("spresdin", "spreading")
        .replace("bssic", "basic")
        .replace("baslc", "basic")
    )
    if "margin" in normalized or "premium" in normalized or "settlement" in normalized or "delivery" in normalized:
        return "margins-settlement-delivery"
    if "orders" in normalized or "accounts" in normalized or "analysis" in normalized:
        return "orders-accounts-analysis"
    if "hedging" in normalized and "basis" in normalized:
        return "hedging-basis"
    if "speculating in futures" in normalized:
        return "futures-speculation"
    if "option" in normalized or "ootion" in normalized:
        return "options-futures"
    if normalized.strip() == "spreading" or " spreading" in normalized:
        return "spreading"
    return "futures-theory"


def choose_subtopic(topic_id: str, searchable_text: str) -> str:
    text = searchable_text.lower()
    scored: list[tuple[int, int, str]] = []
    for index, (subtopic, keywords) in enumerate(SUBTOPIC_RULES[topic_id]):
        score = sum(1 for keyword in keywords if keyword in text)
        if score:
            scored.append((score, -index, subtopic))
    if scored:
        return max(scored)[2]
    return DEFAULT_SUBTOPIC[topic_id]


def answer_split_x(lines: list[OcrLine], width: int) -> float:
    answer_lines = [line for line in lines if "answer and explanation" in line.text.lower()]
    if answer_lines:
        return max(260.0, min(line.x1 for line in answer_lines) - 25)
    return width * 0.55


def content_bottom(lines: list[OcrLine], height: int) -> float:
    clicks = [line.y1 for line in lines if "click" in line.text.lower() and "continue" in line.text.lower()]
    if clicks:
        return min(clicks) - 8
    return height * 0.84


def parse_left_column(lines: list[OcrLine], width: int, height: int) -> tuple[str, dict[str, str]]:
    split_x = answer_split_x(lines, width)
    bottom = content_bottom(lines, height)
    useful = [
        line
        for line in lines
        if line.cx < split_x
        and 220 <= line.y1 <= bottom
        and not any(token in line.text.lower() for token in ["select confirm", "click here", "answer and explanation"])
    ]
    useful = sorted(useful, key=lambda item: (item.y1, item.x1))

    def parse_labeled() -> tuple[list[str], dict[str, list[str]]]:
        stem_parts: list[str] = []
        choices: dict[str, list[str]] = {}
        current_letter: str | None = None
        choice_pattern = re.compile(r"^([A-F])[\.\)]\s*(.+)$")
        for line in useful:
            text = clean_text(line.text)
            match = choice_pattern.match(text)
            if match:
                current_letter = match.group(1)
                choices[current_letter] = [match.group(2)]
            elif current_letter:
                choices[current_letter].append(text)
            else:
                stem_parts.append(text)
        return stem_parts, choices

    stem_parts, choices = parse_labeled()
    if len(choices) < 2:
        fallback = parse_unlabeled_choices(useful)
        if len(fallback[1]) >= 2:
            stem_parts, choices = fallback

    return clean_text(" ".join(stem_parts)), {letter: clean_text(" ".join(parts)) for letter, parts in choices.items()}


def parse_unlabeled_choices(lines: list[OcrLine]) -> tuple[list[str], dict[str, list[str]]]:
    text = clean_text(" ".join(line.text for line in lines))
    truth_match = re.search(r"\b(T(?:rue|me)|False)\s+(T(?:rue|me)|False)\s*$", text, re.I)
    if truth_match:
        stem = clean_text(text[: truth_match.start()])
        return [stem], {"A": ["True"], "B": ["False"]}

    if len(lines) < 4:
        return [clean_text(line.text) for line in lines], {}

    best_index: int | None = None
    for index in range(1, len(lines)):
        gap = lines[index].y1 - lines[index - 1].y1
        if gap < 26 or lines[index].y1 < 300:
            continue
        groups = group_choice_lines(lines[index:])
        if 2 <= len(groups) <= 6:
            best_index = index
            break

    if best_index is None:
        return [clean_text(line.text) for line in lines], {}

    groups = group_choice_lines(lines[best_index:])
    choices = {
        chr(ord("A") + index): [clean_choice_prefix(clean_text(" ".join(line.text for line in group)))]
        for index, group in enumerate(groups)
    }
    stem = [clean_text(line.text) for line in lines[:best_index]]
    return stem, choices


def group_choice_lines(lines: list[OcrLine]) -> list[list[OcrLine]]:
    groups: list[list[OcrLine]] = []
    current: list[OcrLine] = []
    for line in lines:
        if current and line.y1 - current[-1].y1 > 27:
            groups.append(current)
            current = []
        current.append(line)
    if current:
        groups.append(current)
    return groups


def clean_choice_prefix(text: str) -> str:
    return re.sub(r"^[A-F]?\s*[\.\)]\s*", "", text).strip()


def normalize_choice_text(text: str) -> str:
    text = clean_choice_prefix(clean_text(text))
    if re.fullmatch(r"T(?:rue|me)", text, re.I):
        return "True"
    if re.fullmatch(r"False", text, re.I):
        return "False"
    return text


def is_true_false_choice_set(choice_text_by_letter: dict[str, str]) -> bool:
    normalized = {normalize_choice_text(text).lower() for text in choice_text_by_letter.values()}
    return normalized == {"true", "false"}


def placeholder_choice_text(letter: str, is_correct: bool) -> str:
    if is_correct:
        return "Choice text was not parsed from OCR; this is the source-indicated correct option."
    return f"Choice {letter} text was not parsed from OCR; review the source image for this distractor."


def add_placeholder_choices(
    choice_text_by_letter: dict[str, str],
    correct_letter: str | None,
    target_count: int,
) -> None:
    for letter in "ABCDEF":
        if len(choice_text_by_letter) >= target_count:
            return
        if letter in choice_text_by_letter:
            continue
        choice_text_by_letter[letter] = placeholder_choice_text(letter, letter == correct_letter)


def parse_right_column(lines: list[OcrLine], width: int, height: int) -> tuple[str | None, str]:
    split_x = answer_split_x(lines, width)
    bottom = content_bottom(lines, height)
    useful = [
        line
        for line in lines
        if line.cx >= split_x
        and 230 <= line.y1 <= bottom
        and "answer and explanation" not in line.text.lower()
        and "click" not in line.text.lower()
    ]
    useful = sorted(useful, key=lambda item: (item.y1, item.x1))
    correct_letter: str | None = None
    explanation_parts: list[str] = []
    for line in useful:
        text = clean_text(line.text)
        match = re.search(r"correct answer is\s+([A-F])", text, re.I)
        if match:
            correct_letter = match.group(1).upper()
            text = re.sub(r"^(Yes|No)\.\s*", "", text, flags=re.I)
            text = re.sub(r"The correct answer is\s+[A-F]\.?", "", text, flags=re.I).strip()
        if text and not re.fullmatch(r"(Yes|No)\.?", text, flags=re.I):
            explanation_parts.append(text)
    return correct_letter, clean_text(" ".join(explanation_parts))


def difficulty_from_code(source_code: str | None) -> str:
    if not source_code:
        return "medium"
    code = source_code.upper()
    if "_EZ_" in code:
        return "easy"
    if "_HD_" in code or "_DF_" in code:
        return "hard"
    return "medium"


def topic_from_source_code(source_code: str | None) -> str | None:
    if not source_code:
        return None
    prefix = source_code.split("_", 1)[0]
    return {
        "01": "futures-theory",
        "02": "margins-settlement-delivery",
        "03": "orders-accounts-analysis",
        "04": "hedging-basis",
        "05": "hedging-basis",
        "06": "spreading",
        "07": "futures-speculation",
        "08": "futures-speculation",
        "09": "options-futures",
    }.get(prefix)


def topic_from_question_number(qnum: int | None) -> str | None:
    if qnum is None:
        return None
    if 1 <= qnum <= 73:
        return "futures-theory"
    if 74 <= qnum <= 145:
        return "margins-settlement-delivery"
    if 146 <= qnum <= 193:
        return "orders-accounts-analysis"
    if 194 <= qnum <= 271:
        return "hedging-basis"
    if 272 <= qnum <= 306:
        return "spreading"
    if 307 <= qnum <= 373:
        return "futures-speculation"
    if 374 <= qnum <= 447:
        return "options-futures"
    return None


def parse_record(record: dict[str, Any]) -> tuple[dict[str, Any], list[str]]:
    lines = line_objects(record)
    qnum = detect_question_number(lines)
    source_code = detect_source_code(lines)
    width = int(record["width"])
    height = int(record["height"])
    stem, choice_text_by_letter = parse_left_column(lines, width, height)
    correct_letter, explanation = parse_right_column(lines, width, height)
    topic_id = topic_from_source_code(source_code) or topic_from_question_number(qnum) or detect_topic(lines)
    search_blob = " ".join([stem, *choice_text_by_letter.values(), explanation])
    subtopic_id = choose_subtopic(topic_id, search_blob)
    scores = [line.score for line in lines]
    avg_score = mean(scores) if scores else 0

    choice_text_by_letter = {
        letter: normalize_choice_text(text)
        for letter, text in choice_text_by_letter.items()
        if normalize_choice_text(text)
    }

    repair_issues: list[str] = []
    if not correct_letter and qnum in INFERRED_CORRECT_ANSWERS:
        correct_letter = INFERRED_CORRECT_ANSWERS[qnum]
        repair_issues.append("correct_answer_inferred_from_confirmation_screen")

    original_choice_count = len(choice_text_by_letter)
    original_had_correct_choice = bool(correct_letter and correct_letter in choice_text_by_letter)
    if correct_letter and correct_letter not in choice_text_by_letter:
        choice_text_by_letter[correct_letter] = placeholder_choice_text(correct_letter, True)
        repair_issues.append("correct_choice_text_not_parsed_from_ocr")

    question_type = "true_false" if is_true_false_choice_set(choice_text_by_letter) else "multiple_choice"
    target_choice_count = 2 if question_type == "true_false" else 3
    if correct_letter and len(choice_text_by_letter) < target_choice_count:
        add_placeholder_choices(choice_text_by_letter, correct_letter, target_choice_count)
        repair_issues.append("distractor_choice_text_not_parsed_from_ocr")

    if not explanation and correct_letter:
        explanation = "The source screenshot did not include a parseable explanation. Review the source image for the original explanation."
        repair_issues.append("explanation_not_parsed_from_ocr")

    issues: list[str] = []
    if not qnum:
        issues.append("missing_question_number")
    if not stem:
        issues.append("missing_stem")
    if original_choice_count < 2:
        issues.append("missing_or_incomplete_choices")
    if not correct_letter:
        issues.append("missing_correct_answer")
    if correct_letter and not original_had_correct_choice:
        issues.append("correct_answer_not_in_choices")
    if not explanation:
        issues.append("missing_explanation")
    if avg_score < 0.92:
        issues.append("low_ocr_confidence")
    issues.extend(repair_issues)

    choices = [
        {
            "id": letter.lower(),
            "text": text,
            "isCorrect": letter == correct_letter,
            "rationale": (
                f"Correct according to the source answer. {explanation or 'Review the source image for the original explanation.'}"
                if letter == correct_letter
                else f"This is not the source-indicated answer. {explanation or 'Review the source image for the original explanation.'}"
            ),
        }
        for letter, text in sorted(choice_text_by_letter.items())
    ]
    active = bool(
        stem
        and correct_letter
        and sum(1 for choice in choices if choice["isCorrect"]) == 1
        and ((question_type == "true_false" and len(choices) == 2) or (question_type == "multiple_choice" and len(choices) >= 3))
    )

    question = {
        "id": f"s3-market-docx-{qnum or Path(record['image']).stem}",
        "sectionId": "market_knowledge",
        "topicId": topic_id,
        "subtopicId": subtopic_id,
        "difficulty": difficulty_from_code(source_code),
        "questionType": question_type,
        "stem": stem or "Question stem was not parsed from OCR. Review the source image.",
        "choices": choices,
        "explanation": explanation or "Explanation was not parsed from OCR. Review the source image.",
        "sourceType": "imported",
        "active": active,
        "concept": TOPIC_TITLES[topic_id],
        "sourceNote": f"User-provided S3-Market.docx OCR extraction; source image {Path(record['image']).name}; source code {source_code or 'not parsed'}.",
        "reviewStatus": "needs_review",
        "qualityStatus": "needs_review",
        "qualityNotes": "Fresh OCR/DOCX import only. This QCM is not certified until LLM content review verifies the stem, choices, correct answer, explanation, taxonomy, and calculations if applicable.",
        "issueTypes": sorted({"OCR/transcription", *issues}),
        "extractionConfidence": "high" if avg_score >= 0.96 else "medium" if avg_score >= 0.92 else "low",
        "sourcePageRange": Path(record["image"]).stem.split("-")[0],
        "sourceQuestionNumber": qnum,
        "shuffleDisabled": True,
        "createdAt": CREATED_AT,
    }
    if source_code:
        question["sourceCode"] = source_code
    return question, issues


def dedupe_questions(parsed: list[tuple[dict[str, Any], list[str]]]) -> list[tuple[dict[str, Any], list[str]]]:
    def quality(item: tuple[dict[str, Any], list[str]]) -> tuple[int, int, int, int]:
        question, issues = item
        return (
            1 if question.get("active") else 0,
            len(question.get("choices", [])),
            len(question.get("explanation", "")),
            -len(issues),
        )

    chosen_by_number: dict[int, tuple[dict[str, Any], list[str]]] = {}
    number_order: list[int] = []
    unnumbered: list[tuple[dict[str, Any], list[str]]] = []
    seen_unnumbered_stems: set[str] = set()

    for question, issues in parsed:
        number = question.get("sourceQuestionNumber")
        if number:
            candidate = (question, issues)
            if number not in chosen_by_number:
                number_order.append(number)
                chosen_by_number[number] = candidate
            elif quality(candidate) > quality(chosen_by_number[number]):
                chosen_by_number[number] = candidate
            continue

        stem_key = re.sub(r"\W+", "", question.get("stem", "").lower())
        if stem_key and stem_key in seen_unnumbered_stems:
            continue
        if stem_key:
            seen_unnumbered_stems.add(stem_key)
        unnumbered.append((question, issues))

    return [chosen_by_number[number] for number in number_order] + unnumbered


def write_ts(questions: list[dict[str, Any]]) -> None:
    PUBLIC_TS_OUT.write_text(
        "import type { Question } from \"../types\";\n\n"
        f"export const s3MarketDocxQuestions: Question[] = {json.dumps(questions, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )


def write_report(parsed: list[tuple[dict[str, Any], list[str]]], total_records: int) -> None:
    questions = [question for question, _ in parsed]
    issue_rows = [(question, issues) for question, issues in parsed if issues or not question["active"]]
    detected_numbers = sorted(q["sourceQuestionNumber"] for q in questions if q.get("sourceQuestionNumber"))
    topic_counts: dict[str, int] = {}
    for question in questions:
        if question["active"]:
            topic_counts[question["topicId"]] = topic_counts.get(question["topicId"], 0) + 1

    report = {
        "sourceDocx": str(DOCX_PATH),
        "imagesInDocumentOrder": total_records,
        "expectedSourceQuestionCount": EXPECTED_SOURCE_COUNT,
        "questionsDetected": len(detected_numbers),
        "questionsOutput": len(questions),
        "activeQuestions": sum(1 for question in questions if question["active"]),
        "inactiveQuestions": sum(1 for question in questions if not question["active"]),
        "manualReviewRows": len(issue_rows),
        "missingSourceQuestionNumbers": [n for n in range(1, EXPECTED_SOURCE_COUNT + 1) if n not in set(detected_numbers)],
        "topicCounts": topic_counts,
        "outputs": {
            "publicTsModule": str(PUBLIC_TS_OUT),
            "report": str(REPORT_OUT),
            "manualReviewCsv": str(REVIEW_OUT),
        },
    }
    REPORT_OUT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    REVIEW_OUT.write_text(
        "sourceQuestionNumber,active,reviewStatus,issues,sourceCode,topicId,subtopicId,stem\n"
        + "\n".join(
            ",".join(
                json.dumps(value, ensure_ascii=False)
                for value in [
                    question.get("sourceQuestionNumber"),
                    question.get("active"),
                    question.get("reviewStatus"),
                    ";".join(issues),
                    question.get("sourceCode"),
                    question.get("topicId"),
                    question.get("subtopicId"),
                    question.get("stem"),
                ]
            )
            for question, issues in issue_rows
        ),
        encoding="utf-8",
    )
    print(json.dumps(report, ensure_ascii=False, indent=2))


def main() -> int:
    parser = argparse.ArgumentParser(description="Extract user-provided S3-Market.docx QCM screenshots with OCR.")
    parser.add_argument("--skip-ocr", action="store_true")
    parser.add_argument("--limit", type=int)
    parser.add_argument("--workers", type=int, default=4)
    args = parser.parse_args()

    image_paths = extract_images()
    if not args.skip_ocr:
        ocr_images(image_paths, workers=args.workers, limit=args.limit)
    records = load_records(limit=args.limit)
    parsed = dedupe_questions([parse_record(record) for record in records])
    questions = [question for question, _ in parsed]
    if not args.limit:
        write_ts(questions)
    write_report(parsed, len(records))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
