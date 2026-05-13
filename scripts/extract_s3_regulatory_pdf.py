from __future__ import annotations

import argparse
import csv
import json
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from statistics import mean
from typing import Any

from PIL import Image


PDF_PATH = Path(r"C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Regulatory.pdf")
WORK_DIR = Path("tmp_reg_ocr")
RAW_DIR = WORK_DIR / "raw"
CROP_DIR = WORK_DIR / "crops"
OCR_DIR = WORK_DIR / "ocr_pages"
PRIVATE_DIR = Path("private")
JSONL_OUT = PRIVATE_DIR / "s3-regulatory-extracted.jsonl"
REPORT_OUT = PRIVATE_DIR / "s3-regulatory-extraction-report.json"
REVIEW_OUT = PRIVATE_DIR / "s3-regulatory-manual-review.csv"
OCR_JSONL_OUT = WORK_DIR / "ocr_lines_all.jsonl"
HIGH_DIR = WORK_DIR / "high"
PRIVATE_TS_OUT = Path("src/data/private/s3RegulatoryExtracted.ts")
PUBLIC_TS_OUT = Path("src/data/s3RegulatoryPdfQuestions.ts")

PDFTOPPM = Path(r"C:\Users\Jean-JacquesOhana\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdftoppm.exe")
EXPECTED_QUESTION_COUNT = 249


TOPIC_RULES: list[tuple[str, str, str, list[str], list[str]]] = [
    (
        "general-regulatory",
        "associated-person",
        "associated person registration",
        ["associated person", "associated persons", "ap registration", " aps ", " ap "],
        ["registration_roles"],
    ),
    (
        "general-regulatory",
        "cftc-registration",
        "CFTC registration",
        ["commodity futures trading commission", " cftc ", "registered with the cftc", "federal regulatory agency"],
        ["registration_roles"],
    ),
    (
        "general-regulatory",
        "nfa-membership",
        "NFA membership",
        ["national futures association", " nfa ", "nfa member", "self-regulatory"],
        ["registration_roles"],
    ),
    (
        "arbitration-discipline",
        "arbitration-procedures",
        "arbitration",
        ["arbitration", "arbitrator", "award"],
        ["arbitration", "enforcement"],
    ),
    (
        "arbitration-discipline",
        "reparations-procedures",
        "CFTC reparations",
        ["reparation", "reparations"],
        ["arbitration", "enforcement"],
    ),
    (
        "arbitration-discipline",
        "member-responsibility-actions",
        "Member responsibility actions",
        ["member responsibility action", "mra"],
        ["arbitration", "enforcement"],
    ),
    (
        "arbitration-discipline",
        "disciplinary-procedures",
        "disciplinary procedures",
        ["disciplinary", "hearing panel", "business conduct committee", "complaint"],
        ["arbitration", "enforcement"],
    ),
    (
        "arbitration-discipline",
        "penalties",
        "penalties and sanctions",
        ["penalty", "penalties", "fine", "suspension", "expulsion", "cease and desist"],
        ["arbitration", "enforcement"],
    ),
    (
        "cpo-cta",
        "disclosure-documents",
        "CPO/CTA disclosure documents",
        ["disclosure document", "disclosure documents", "prospective pool participant", "pool participant"],
        ["cpo_cta", "disclosure"],
    ),
    (
        "cpo-cta",
        "performance-records",
        "performance records",
        ["performance record", "past performance", "hypothetical performance"],
        ["cpo_cta", "promotional_material"],
    ),
    (
        "cpo-cta",
        "bunched-orders",
        "bunched orders",
        ["bunched order", "bunched orders", "allocation"],
        ["cpo_cta", "orders_records"],
    ),
    (
        "cpo-cta",
        "cta-regulations",
        "CTA regulation",
        ["commodity trading advisor", "cta", "trading advisor"],
        ["cpo_cta", "registration_roles"],
    ),
    (
        "cpo-cta",
        "cpo-regulations",
        "CPO regulation",
        ["commodity pool operator", "cpo", "commodity pool"],
        ["cpo_cta", "registration_roles"],
    ),
    (
        "fcm-ib",
        "guaranteed-ibs",
        "guaranteed IBs",
        ["guaranteed introducing broker", "guaranteed ib"],
        ["fcm_ib", "registration_roles"],
    ),
    (
        "fcm-ib",
        "independent-ibs",
        "independent IBs",
        ["independent introducing broker", "independent ib"],
        ["fcm_ib", "registration_roles"],
    ),
    (
        "fcm-ib",
        "introducing-broker",
        "introducing broker",
        ["introducing broker", " ib ", "ibs"],
        ["fcm_ib", "registration_roles"],
    ),
    (
        "fcm-ib",
        "futures-commission-merchant",
        "futures commission merchant",
        ["futures commission merchant", " fcm ", "fcms"],
        ["fcm_ib", "registration_roles"],
    ),
    (
        "fcm-ib",
        "accepting-customer-funds",
        "customer funds",
        ["customer funds", "segregated", "segregation", "accept funds", "funds from customers"],
        ["fcm_ib", "funds_margin"],
    ),
    (
        "fcm-ib",
        "margin-deposit-collection",
        "margin collection",
        ["margin", "performance bond"],
        ["fcm_ib", "funds_margin"],
    ),
    (
        "fcm-ib",
        "anti-money-laundering",
        "anti-money laundering",
        ["anti-money laundering", "money laundering", "sar", "suspicious activity"],
        ["aml_reporting"],
    ),
    (
        "fcm-ib",
        "customer-complaints",
        "customer complaints",
        ["customer complaint", "complaint file", "complaints"],
        ["supervision"],
    ),
    (
        "fcm-ib",
        "time-stamping",
        "time-stamping",
        ["time-stamp", "timestamp", "time stamp", "order ticket"],
        ["orders_records"],
    ),
    (
        "fcm-ib",
        "promotional-material",
        "promotional material",
        ["promotional", "advertising", "sales literature", "radio", "television"],
        ["promotional_material"],
    ),
    (
        "general-regulatory",
        "floor-broker",
        "floor broker",
        ["floor broker"],
        ["registration_roles"],
    ),
    (
        "general-regulatory",
        "floor-trader",
        "floor trader",
        ["floor trader"],
        ["registration_roles"],
    ),
    (
        "general-regulatory",
        "account-opening",
        "account opening",
        ["new account", "account opening", "open an account", "open a customer account"],
        ["customer_accounts"],
    ),
    (
        "general-regulatory",
        "customer-information",
        "customer information",
        ["customer information", "financial condition", "investment experience", "net worth"],
        ["customer_accounts"],
    ),
    (
        "general-regulatory",
        "risk-disclosure",
        "risk disclosure",
        ["risk disclosure", "disclosure statement", "disclosure document"],
        ["customer_accounts", "disclosure"],
    ),
    (
        "general-regulatory",
        "discretionary-accounts",
        "discretionary accounts",
        ["discretionary", "trading authority", "written authorization", "power of attorney"],
        ["customer_accounts", "supervision"],
    ),
    (
        "general-regulatory",
        "position-reporting",
        "position reporting",
        ["position report", "large trader", "reportable position"],
        ["orders_records"],
    ),
    (
        "general-regulatory",
        "speculative-position-limits",
        "speculative position limits",
        ["position limit", "speculative limit", "speculative position"],
        ["orders_records"],
    ),
    (
        "general-regulatory",
        "just-equitable-principles",
        "NFA Compliance Rule 2-4",
        ["just and equitable", "commercial honor", "rule 2-4", "fraud", "deceptive"],
        ["supervision"],
    ),
]

VALID_SUBTOPICS = {
    "general-regulatory": {
        "cftc-registration",
        "nfa-membership",
        "floor-broker",
        "floor-trader",
        "associated-person",
        "commodity-pool-operator",
        "commodity-trading-advisor",
        "introducing-broker",
        "futures-commission-merchant",
        "registration-exemptions",
        "just-equitable-principles",
        "account-opening",
        "customer-information",
        "risk-disclosure",
        "customer-agreements",
        "discretionary-accounts",
        "written-authorization",
        "account-supervision-review",
        "position-reporting",
        "speculative-position-limits",
    },
    "fcm-ib": {
        "guaranteed-ibs",
        "independent-ibs",
        "guarantor-fcm-responsibilities",
        "accepting-customer-funds",
        "net-capital-requirements",
        "financial-reports",
        "margin-deposit-collection",
        "anti-money-laundering",
        "customer-complaints",
        "account-adjustments",
        "time-stamping",
        "promotional-material",
        "transaction-cost-disclosure",
    },
    "cpo-cta": {
        "cpo-regulations",
        "cta-regulations",
        "disclosure-documents",
        "upfront-fees",
        "performance-records",
        "required-disclosure-statements",
        "trading-program-descriptions",
        "principal-backgrounds",
        "conflicts-of-interest",
        "recordkeeping",
        "bunched-orders",
        "public-communications",
        "cpo-cta-promotional-material",
    },
    "arbitration-discipline": {
        "arbitration-procedures",
        "reparations-procedures",
        "disciplinary-procedures",
        "formal-complaints",
        "warning-letters",
        "hearings",
        "offers-to-settle",
        "appeals",
        "member-responsibility-actions",
        "penalties",
        "commodity-exchange-act-enforcement",
    },
}


@dataclass
class OcrLine:
    text: str
    score: float
    x: float
    y: float
    minx: float
    maxx: float
    miny: float
    maxy: float


def clean_text(value: str) -> str:
    value = value.replace("\u201c", '"').replace("\u201d", '"').replace("\u2019", "'")
    value = value.replace("\u2013", "-").replace("\u2014", "-")
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def normalize_for_match(value: str) -> str:
    return f" {clean_text(value).lower()} "


def page_number(path: Path) -> int:
    return int(re.search(r"(\d+)", path.stem).group(1))


def ensure_rendered() -> None:
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    if len(list(RAW_DIR.glob("page-*.png"))) >= EXPECTED_QUESTION_COUNT:
        return
    if not PDFTOPPM.exists():
        raise SystemExit(f"pdftoppm not found at {PDFTOPPM}")
    subprocess.run(
        [str(PDFTOPPM), "-png", "-r", "170", str(PDF_PATH), str(RAW_DIR / "page")],
        check=True,
    )


def ensure_crops() -> None:
    CROP_DIR.mkdir(parents=True, exist_ok=True)
    for raw_path in sorted(RAW_DIR.glob("page-*.png"), key=page_number):
        crop_path = CROP_DIR / raw_path.name
        if crop_path.exists():
            continue
        image = Image.open(raw_path)
        width, height = image.size
        # Screenshot content is centered; this removes browser chrome and the lower unused area.
        box = (int(width * 0.11), int(height * 0.105), int(width * 0.89), int(height * 0.64))
        image.crop(box).save(crop_path)


_RAPID_OCR_ENGINE: Any | None = None


def rapid_ocr_image(path: Path) -> list[dict[str, Any]]:
    global _RAPID_OCR_ENGINE
    if _RAPID_OCR_ENGINE is None:
        from rapidocr_onnxruntime import RapidOCR

        _RAPID_OCR_ENGINE = RapidOCR()
    engine = _RAPID_OCR_ENGINE
    result, _ = engine(str(path))
    lines: list[dict[str, Any]] = []
    for box, text, score in result or []:
        xs = [float(point[0]) for point in box]
        ys = [float(point[1]) for point in box]
        lines.append(
            {
                "text": clean_text(str(text)),
                "score": float(score),
                "x": (min(xs) + max(xs)) / 2,
                "y": (min(ys) + max(ys)) / 2,
                "minx": min(xs),
                "maxx": max(xs),
                "miny": min(ys),
                "maxy": max(ys),
            }
        )
    return sorted(lines, key=lambda line: (line["y"], line["x"]))


def scale_lines(lines: list[dict[str, Any]], source_size: tuple[int, int], target_size: tuple[int, int]) -> list[dict[str, Any]]:
    scale_x = target_size[0] / source_size[0]
    scale_y = target_size[1] / source_size[1]
    scaled: list[dict[str, Any]] = []
    for line in lines:
        item = dict(line)
        for key in ["x", "minx", "maxx"]:
            item[key] = float(item[key]) * scale_x
        for key in ["y", "miny", "maxy"]:
            item[key] = float(item[key]) * scale_y
        scaled.append(item)
    return scaled


def high_res_ocr_page(page: int) -> dict[str, Any]:
    if not PDFTOPPM.exists():
        raise SystemExit(f"pdftoppm not found at {PDFTOPPM}")
    HIGH_DIR.mkdir(parents=True, exist_ok=True)
    raw_prefix = HIGH_DIR / "page"
    raw_path = HIGH_DIR / f"page-{page}.png"
    crop_path = HIGH_DIR / f"crop-{page}.png"
    if not raw_path.exists():
        subprocess.run(
            [
                str(PDFTOPPM),
                "-png",
                "-r",
                "300",
                "-f",
                str(page),
                "-l",
                str(page),
                str(PDF_PATH),
                str(raw_prefix),
            ],
            check=True,
        )
    image = Image.open(raw_path)
    width, height = image.size
    box = (int(width * 0.11), int(height * 0.105), int(width * 0.89), int(height * 0.64))
    crop = image.crop(box)
    crop.save(crop_path)
    high_lines = rapid_ocr_image(crop_path)
    target_size = Image.open(CROP_DIR / f"page-{page:03d}.png").size
    lines = scale_lines(high_lines, crop.size, target_size)
    record = {
        "page": page,
        "questionNumber": detected_question_number(lines),
        "lines": lines,
    }
    (OCR_DIR / f"page-{page:03d}.json").write_text(json.dumps(record, ensure_ascii=False), encoding="utf-8")
    return record


def detected_question_number(lines: list[dict[str, Any]]) -> int | None:
    joined = " ".join(line["text"] for line in lines[:8])
    match = re.search(r"Question\s*(\d{1,3})\s*of\s*249", joined, re.IGNORECASE)
    if match:
        return int(match.group(1))
    return None


def ocr_pages(limit: int | None = None) -> None:
    OCR_DIR.mkdir(parents=True, exist_ok=True)
    old_pages = set(load_old_ocr_records())
    crop_paths = sorted(CROP_DIR.glob("page-*.png"), key=page_number)
    if limit:
        crop_paths = crop_paths[:limit]
    for index, crop_path in enumerate(crop_paths, start=1):
        output_path = OCR_DIR / f"{crop_path.stem}.json"
        if output_path.exists() or page_number(crop_path) in old_pages:
            continue
        lines = rapid_ocr_image(crop_path)
        record = {
            "page": page_number(crop_path),
            "questionNumber": detected_question_number(lines),
            "lines": lines,
        }
        output_path.write_text(json.dumps(record, ensure_ascii=False), encoding="utf-8")
        print(f"OCR {index}/{len(crop_paths)} page={record['page']} q={record['questionNumber']}", flush=True)


def load_old_ocr_records() -> dict[int, dict[str, Any]]:
    records: dict[int, dict[str, Any]] = {}
    old_path = WORK_DIR / "ocr_lines.jsonl"
    if not old_path.exists():
        return records
    for line in old_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        record = json.loads(line)
        page = int(record["page"])
        record["questionNumber"] = record.get("questionNumber") or detected_question_number(record["lines"])
        records[page] = record
    return records


def load_ocr_records() -> list[dict[str, Any]]:
    records = load_old_ocr_records()
    for path in OCR_DIR.glob("page-*.json"):
        record = json.loads(path.read_text(encoding="utf-8"))
        page = int(record["page"])
        record["questionNumber"] = record.get("questionNumber") or detected_question_number(record["lines"])
        records[page] = record
    return [records[key] for key in sorted(records)]


def repair_inactive_records(records: list[dict[str, Any]]) -> list[dict[str, Any]]:
    repaired: list[dict[str, Any]] = []
    for record in records:
        question, _ = parse_record(record)
        if question["active"]:
            repaired.append(record)
            continue
        repaired_record = high_res_ocr_page(int(record["page"]))
        repaired_question, _ = parse_record(repaired_record)
        repaired.append(repaired_record if repaired_question["active"] else record)
    return repaired


def is_noise(text: str) -> bool:
    lowered = text.lower().replace(" ", "")
    if not text:
        return True
    if text.startswith("http://"):
        return True
    if lowered in {"tutorial-regulatory", "tutorial-regulatory", "regulatory", "exit", "help", "100%"}:
        return True
    if "answerandexplanation" in lowered:
        return True
    if "clickheretocontinue" in lowered:
        return True
    if re.fullmatch(r"\d+_[A-Z]+_\d+", text):
        return True
    if re.search(r"Question\s*\d+\s*of\s*249", text, re.IGNORECASE):
        return True
    return False


def extract_source_code(lines: list[dict[str, Any]]) -> str | None:
    for line in lines:
        match = re.search(r"\b\d+_[A-Z]+_\d+\b", line["text"])
        if match:
            return match.group(0)
    return None


def extract_correct_letter(lines: list[dict[str, Any]]) -> str | None:
    for line in lines:
        match = re.search(r"correct answer is\s*([A-E])", line["text"], re.IGNORECASE)
        if match:
            return match.group(1).lower()
    return None


def split_question_text(lines: list[dict[str, Any]]) -> tuple[str, list[dict[str, str]], list[str]]:
    left_lines = [
        line
        for line in lines
        if line["minx"] < 620 and 215 <= line["y"] <= 610 and not is_noise(line["text"])
    ]
    left_lines.sort(key=lambda line: (round(line["y"] / 8) * 8, line["x"]))

    stem_parts: list[str] = []
    choices: list[dict[str, str]] = []
    current: dict[str, str] | None = None
    issues: list[str] = []
    choice_re = re.compile(r"^\s*([A-E])\s*[\.)]\s*(.*)$")

    for line in left_lines:
        text = clean_text(line["text"])
        match = choice_re.match(text)
        if match:
            current = {"id": match.group(1).lower(), "text": clean_text(match.group(2))}
            choices.append(current)
        elif current is None:
            stem_parts.append(text)
        else:
            current["text"] = clean_text(f"{current['text']} {text}")

    if not stem_parts:
        issues.append("missing_stem")
    if len(choices) < 2:
        issues.append("missing_or_incomplete_choices")

    return clean_text(" ".join(stem_parts)), choices, issues


def split_explanation(lines: list[dict[str, Any]]) -> str:
    right_lines = [
        line
        for line in lines
        if line["x"] >= 635
        and 215 <= line["y"] <= 610
        and not is_noise(line["text"])
        and not re.search(r"correct answer is\s*[A-E]", line["text"], re.IGNORECASE)
    ]
    right_lines.sort(key=lambda line: (round(line["y"] / 8) * 8, line["x"]))
    return clean_text(" ".join(line["text"] for line in right_lines))


def has_letter_dependent_choice(text: str) -> bool:
    normalized = normalize_for_match(text)
    if " all of the above " in normalized or " none of the above " in normalized:
        return True
    patterns = [
        r"\b[abcde]\s*(and|or|&)\s*[abcde]\b",
        r"\b[abcde],\s*[abcde]\s*(and|or|&)\s*[abcde]\b",
        r"\b(both|either|neither)\s+[abcde]\b",
        r"\banswers?\s+[abcde]\b",
    ]
    return any(re.search(pattern, normalized, re.IGNORECASE) for pattern in patterns)


def classify(text: str) -> tuple[str, str, str, list[str], str]:
    normalized = normalize_for_match(text)

    def has(*terms: str) -> bool:
        return any(term in normalized for term in terms)

    def mapped(topic_id: str, subtopic_id: str, concept: str, focus: list[str]) -> tuple[str, str, str, list[str], str]:
        return topic_id, subtopic_id, concept, focus, "keyword"

    # Dispute resolution, disciplinary procedures, and enforcement.
    if has(" nfa arbitration ", " arbitration claim "):
        return mapped("arbitration-discipline", "arbitration-procedures", "arbitration procedures", ["arbitration"])
    if has(" reparations ", " reparation "):
        return mapped("arbitration-discipline", "reparations-procedures", "CFTC reparations", ["arbitration", "enforcement"])
    if has(" arbitration ", " arbitrator ", " mediator ", " mediate ", " pre-dispute resolution ", " dispute "):
        return mapped("arbitration-discipline", "arbitration-procedures", "arbitration and dispute resolution", ["arbitration"])
    if has(" hearing panel ", " appeals committee ", " appeal ", " business conduct committee ", " formal complaint ", " nfa complaint ", " complaints issued by the nfa ", " complaints alleging violation ", " nfa complaints alleging violation "):
        return mapped("arbitration-discipline", "disciplinary-procedures", "disciplinary procedures", ["enforcement"])
    if has(" penalty ", " penalties ", " subpoena ", " summary action ", " summarily bar ", " member responsibility action ", " violated the commodity exchange act ", " sanctions "):
        return mapped("arbitration-discipline", "penalties", "penalties and sanctions", ["enforcement"])

    # CPO / CTA disclosure and pool/advisor rules.
    if has(" bunched ", " block order ", " block orders "):
        return mapped("cpo-cta", "bunched-orders", "bunched orders", ["cpo_cta", "orders_records"])
    if has(" up-front fee ", " up front fee ", " up-front fees ", " up front fees "):
        return mapped("cpo-cta", "upfront-fees", "upfront fees", ["cpo_cta", "disclosure"])
    if has(" incentive fee ", " incentive fees ", " fee charged by a money manager ", " break-even ", " break even "):
        return mapped("cpo-cta", "upfront-fees", "CPO/CTA fees and break-even disclosure", ["cpo_cta", "disclosure"])
    if has(" major investee pool ", " principal-protected pool ", " principal protected pool "):
        return mapped("cpo-cta", "cpo-regulations", "CPO pool regulation", ["cpo_cta"])
    if has(" losses experienced by a pool ", " drawdown ", " draw-down "):
        return mapped("cpo-cta", "performance-records", "CPO/CTA drawdown and performance records", ["cpo_cta", "disclosure"])
    if has(" performance information ", " performance record ", " past performance ", " extracted trading results ", " pro forma ", " simulated results "):
        if has(" disclosure document ", " cta ", " cpo ", " commodity pool ", " pool "):
            return mapped("cpo-cta", "performance-records", "CPO/CTA performance records", ["cpo_cta", "disclosure"])
    if has(" hypothetical trading results ", " hypothetical performance results ") and has(" nfa member ", " promotional ", " rule 2-29 "):
        return mapped("fcm-ib", "promotional-material", "hypothetical performance in promotional material", ["promotional_material", "communications"])
    if has(" disclosure document ", " disclosure documents ", " disclosure document must ", " disclosure documents must "):
        if has(" cpo ", " cpos ", " commodity pool ", " pool participant ", " pool participants ", " pool ", " cta ", " ctas ", " cta's ", " commodity trading advisor ", " trading advisor "):
            return mapped("cpo-cta", "disclosure-documents", "CPO/CTA disclosure documents", ["cpo_cta", "disclosure"])
    if has(" qualified eligible person ", " qualified eligible persons ", " qep ", " cpo exemption ", " cta exemption ", " exempted from registration as a cpo ", " exemption from registration as a cta "):
        return mapped("cpo-cta", "cpo-regulations", "CPO/CTA exemptions", ["cpo_cta", "registration_roles"])
    if has(" commodity pool operator ", " cpo ", " cpos ", " commodity pool ", " pool operator ", " pool's funds ", " pool funds ", " pool assets ", " pool participant "):
        return mapped("cpo-cta", "cpo-regulations", "CPO regulation", ["cpo_cta", "registration_roles"])
    if has(" commodity trading advisor ", " cta ", " ctas ", " cta's ", " trading advisor ", " directs the trading ", " directing customer accounts ", " trading program "):
        return mapped("cpo-cta", "cta-regulations", "CTA regulation", ["cpo_cta", "registration_roles"])

    # Promotional material and communications.
    if has(" promotional ", " advertisement ", " advertisements ", " advertising ", " communications with the public ", " rule 2-29 ", " website ", " blog ", " chat room ", " podcast ", " videos ", " testimonial ", " seminar ", " sales literature ", " radio ", " television ", " internet "):
        return mapped("fcm-ib", "promotional-material", "promotional material", ["promotional_material", "communications"])

    # FCM / IB operational rules.
    if has(" suspicious activity ", " suspicious transaction ", " suspicious activity report ", " sar ", " anti-money laundering ", " money laundering "):
        return mapped("fcm-ib", "anti-money-laundering", "anti-money laundering", ["aml_reporting"])
    if has(" time-stamp ", " time-stamped ", " timestamp ", " time stamp ", " order ticket ", " customer order ", " orders must be written ", " written record of a customer's ", " orders must be retained ", " retained by the fcm or ib "):
        return mapped("fcm-ib", "time-stamping", "time-stamping and order records", ["orders_records"])
    if has(" written complaints ", " customer complaints ", " options trading complaints ", " complaint records "):
        return mapped("fcm-ib", "customer-complaints", "customer complaints", ["supervision"])
    if has(" financial report ", " financial reports ", " quarterly financial ", " annual certified financial "):
        return mapped("fcm-ib", "financial-reports", "financial reports", ["fcm_ib"])
    if has(" net capital ", " adjusted net capital ", " minimum financial requirements "):
        return mapped("fcm-ib", "net-capital-requirements", "net capital requirements", ["fcm_ib"])
    if has(" guarantee agreement ", " guaranteeing an ib ", " guaranteed introducing broker ", " guaranteed ib ", " carrying fcm "):
        return mapped("fcm-ib", "guaranteed-ibs", "guaranteed introducing brokers", ["fcm_ib", "registration_roles"])
    if has(" independent ib ", " independent introducing broker "):
        return mapped("fcm-ib", "independent-ibs", "independent introducing brokers", ["fcm_ib", "registration_roles"])
    if has(" margin call ", " margin deposit ", " margin deposits ", " margin requirement "):
        return mapped("fcm-ib", "margin-deposit-collection", "margin deposit collection", ["fcm_ib", "funds_margin"])
    if has(" customer funds ", " segregated funds ", " segregation ", " segregated from ", " accept customer checks ", " customer checks ", " accept funds ", " may be held by ", " commingle ", " commingling "):
        return mapped("fcm-ib", "accepting-customer-funds", "accepting and segregating customer funds", ["fcm_ib", "funds_margin"])
    if has(" fees and charges ", " transaction cost ", " round-turn ", " per-trade "):
        return mapped("fcm-ib", "transaction-cost-disclosure", "transaction cost disclosure", ["fcm_ib", "disclosure"])

    # Customer account, disclosure, supervision, and AP rules.
    if has(" rule 2-30 ", " customer information ", " know-your-customer ", " new customer account information ", " obtain at least which ", " financial information ", " investment experience ", " net worth "):
        return mapped("general-regulatory", "customer-information", "customer information and know-your-customer", ["customer_accounts", "disclosure"])
    if has(" risk disclosure ", " risk-disclosure ", " disclosure statement ", " additional risk disclosure "):
        return mapped("general-regulatory", "risk-disclosure", "risk disclosure", ["customer_accounts", "disclosure"])
    if has(" oldest open positions ", " fifo ", " special offset "):
        return mapped("fcm-ib", "account-adjustments", "account offset and adjustment rules", ["orders_records"])
    if has(" discretionary account ", " discretionary accounts ", " discretionary trading ", " account controller ", " third-party account controller "):
        return mapped("general-regulatory", "discretionary-accounts", "discretionary accounts", ["customer_accounts", "supervision"])
    if has(" written authorization ", " authorize ", " specifically to authorize ", " power of attorney "):
        return mapped("general-regulatory", "written-authorization", "written customer authorization", ["customer_accounts"])
    if has(" supervision ", " supervisory ", " supervise ", " written supervisory procedures "):
        return mapped("general-regulatory", "account-supervision-review", "supervision and account review", ["supervision"])
    if has(" position-reporting ", " reportable position ", " reporting trader ", " statement of reporting trader ", " common control ", " common ownership "):
        return mapped("general-regulatory", "position-reporting", "position reporting", ["orders_records"])
    if has(" position limit ", " position limits ", " speculative position ", " speculative market position "):
        return mapped("general-regulatory", "speculative-position-limits", "speculative position limits", ["orders_records"])
    if has(" just and equitable ", " high standards of commercial honor ", " rule 2-4 ", " sharing in profits ", " churning ", " excessive trading "):
        return mapped("general-regulatory", "just-equitable-principles", "NFA Compliance Rule 2-4", ["supervision"])
    if has(" associated person ", " associated persons ", " ap ", " aps ", " temporary ap license ", " sponsoring registrant ", " dual or multiple association ", " branch office "):
        return mapped("general-regulatory", "associated-person", "associated person registration", ["registration_roles"])

    # General role and regulator concepts.
    if has(" futures commission merchant ", " fcm "):
        return mapped("general-regulatory", "futures-commission-merchant", "futures commission merchant", ["registration_roles", "fcm_ib"])
    if has(" introducing broker ", " ib "):
        return mapped("general-regulatory", "introducing-broker", "introducing broker", ["registration_roles", "fcm_ib"])
    if has(" floor broker "):
        return mapped("general-regulatory", "floor-broker", "floor broker", ["registration_roles"])
    if has(" floor trader "):
        return mapped("general-regulatory", "floor-trader", "floor trader", ["registration_roles"])
    if has(" nfa membership ", " nfa member ", " national futures association ", " nfa's goals ", " basic ", " associate membership "):
        return mapped("general-regulatory", "nfa-membership", "NFA membership", ["registration_roles"])
    if has(" cftc ", " commodity futures trading commission ", " commodity exchange act ", " contract market ", " dodd-frank ", " derivative ", " market emergency ", " exchange rules ", " competitively executed ", " foreign stock-index ", " books and records "):
        return mapped("general-regulatory", "cftc-registration", "CFTC jurisdiction and registration", ["registration_roles"])

    return "general-regulatory", "cftc-registration", "general regulatory concept", ["registration_roles"], "fallback"


def infer_difficulty(choice_count: int, explanation: str, stem: str) -> str:
    text = normalize_for_match(f"{stem} {explanation}")
    if choice_count >= 5 or any(word in text for word in ["except", "not", "least", "maximum", "minimum"]):
        return "hard"
    if len(text) > 350:
        return "medium"
    return "easy"


def parse_record(record: dict[str, Any]) -> tuple[dict[str, Any], list[str]]:
    lines = record["lines"]
    question_number = record.get("questionNumber") or detected_question_number(lines) or record["page"]
    correct_letter = extract_correct_letter(lines)
    stem, raw_choices, parse_issues = split_question_text(lines)
    explanation = split_explanation(lines)
    source_code = extract_source_code(lines)
    all_text = " ".join([stem, explanation, explanation, *(choice["text"] for choice in raw_choices)])
    topic_id, subtopic_id, concept, regulatory_focus, classification_source = classify(all_text)
    choice_ids = [choice["id"] for choice in raw_choices]
    choice_count = len(raw_choices)
    difficulty = infer_difficulty(choice_count, explanation, stem)
    line_scores = [float(line.get("score", 0)) for line in lines if line.get("score") is not None]
    avg_confidence = mean(line_scores) if line_scores else 0
    confidence_label = "high" if avg_confidence >= 0.965 else "medium" if avg_confidence >= 0.93 else "low"
    letter_dependent = any(has_letter_dependent_choice(choice["text"]) for choice in raw_choices)
    shuffle_disabled = True
    issues = list(parse_issues)

    if correct_letter is None:
        issues.append("missing_correct_answer")
    elif correct_letter not in choice_ids:
        issues.append("correct_answer_not_in_choices")
    if not explanation:
        issues.append("missing_explanation")
    if confidence_label == "low":
        issues.append("low_ocr_confidence")
    if classification_source == "fallback":
        issues.append("fallback_taxonomy_mapping")

    choices = []
    for choice in raw_choices:
        is_correct = choice["id"] == correct_letter
        rationale = (
            f"Correct according to the source explanation. {explanation}"
            if is_correct
            else f"This is not the source-indicated answer. Review the explanation: {explanation}"
        )
        choices.append(
            {
                "id": choice["id"],
                "text": choice["text"],
                "isCorrect": is_correct,
                "rationale": rationale[:1200],
            }
        )

    question = {
        "id": f"s3-regulatory-pdf-{int(question_number):03d}",
        "sectionId": "us_regulations",
        "topicId": topic_id,
        "subtopicId": subtopic_id,
        "difficulty": difficulty,
        "questionType": "true_false" if choice_count == 2 else "multiple_choice",
        "stem": stem,
        "choices": choices,
        "explanation": explanation or "Explanation not parsed from OCR. Review the source page.",
        "sourceType": "imported",
        "active": not any(issue in issues for issue in ["missing_stem", "missing_or_incomplete_choices", "missing_correct_answer", "correct_answer_not_in_choices"]),
        "regulatoryFocus": regulatory_focus,
        "concept": concept,
        "sourceNote": f"User-provided S3-Regulatory.pdf OCR extraction; source page {record['page']}; source code {source_code or 'not parsed'}.",
        "reviewStatus": "needs_review" if issues or letter_dependent else "reviewed",
        "extractionConfidence": confidence_label,
        "sourcePageRange": str(record["page"]),
        "sourceQuestionNumber": int(question_number),
        "sourceCode": source_code,
        "shuffleDisabled": shuffle_disabled,
        "createdAt": "2026-05-13T00:00:00.000Z",
        "updatedAt": "2026-05-13T00:00:00.000Z",
    }
    if source_code is None:
        del question["sourceCode"]
    if letter_dependent:
        issues.append("answer_letter_dependent_choice_fixed_order_required")
    return question, issues


def write_outputs(records: list[dict[str, Any]]) -> None:
    PRIVATE_DIR.mkdir(parents=True, exist_ok=True)
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    question_rows: list[tuple[dict[str, Any], list[str]]] = []
    review_rows: list[dict[str, Any]] = []
    skipped_duplicates: list[dict[str, Any]] = []

    seen_ids: set[str] = set()
    seen_question_payloads: dict[str, dict[str, Any]] = {}
    detected_question_numbers = sorted(
        {
            int(record.get("questionNumber") or detected_question_number(record["lines"]) or record["page"])
            for record in records
        }
    )
    for record in records:
        question, issues = parse_record(record)
        payload_key = re.sub(
            r"[^a-z0-9]+",
            " ",
            f"{question['stem']} {' '.join(choice['text'] for choice in question['choices'])}".lower(),
        ).strip()
        if payload_key in seen_question_payloads:
            kept = seen_question_payloads[payload_key]
            skipped_duplicates.append(
                {
                    "sourceQuestionNumber": question["sourceQuestionNumber"],
                    "sourcePage": question["sourcePageRange"],
                    "keptQuestionNumber": kept["sourceQuestionNumber"],
                    "keptSourcePage": kept["sourcePageRange"],
                    "stem": question["stem"],
                }
            )
            continue
        seen_question_payloads[payload_key] = question
        base_id = question["id"]
        duplicate_index = 2
        while question["id"] in seen_ids:
            question["id"] = f"{base_id}-{duplicate_index}"
            duplicate_index += 1
        seen_ids.add(question["id"])
        question_rows.append((question, issues))

    question_rows.sort(key=lambda row: (int(row[0]["sourceQuestionNumber"]), str(row[0]["id"])))

    questions: list[dict[str, Any]] = []
    for question, issues in question_rows:
        questions.append(question)
        if issues:
            review_rows.append(
                {
                    "id": question["id"],
                    "sourceQuestionNumber": question.get("sourceQuestionNumber"),
                    "sourcePage": question.get("sourcePageRange"),
                    "topicId": question["topicId"],
                    "subtopicId": question["subtopicId"],
                    "active": question["active"],
                    "reviewStatus": question["reviewStatus"],
                    "extractionConfidence": question["extractionConfidence"],
                    "issues": "; ".join(sorted(set(issues))),
                    "stem": question["stem"],
                }
            )

    JSONL_OUT.write_text("\n".join(json.dumps(question, ensure_ascii=False) for question in questions), encoding="utf-8")
    OCR_JSONL_OUT.write_text("\n".join(json.dumps(record, ensure_ascii=False) for record in records), encoding="utf-8")
    PRIVATE_TS_OUT.parent.mkdir(parents=True, exist_ok=True)
    PRIVATE_TS_OUT.write_text(
        "import type { Question } from \"../../types\";\n\n"
        "export const privateRegulatoryQuestions: Question[] = "
        + json.dumps(questions, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    PUBLIC_TS_OUT.write_text(
        "import type { Question } from \"../types\";\n\n"
        "export const regulatoryPdfQuestions: Question[] = "
        + json.dumps(questions, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    counts_by_topic: dict[str, int] = {}
    counts_by_subtopic: dict[str, int] = {}
    counts_by_confidence: dict[str, int] = {}
    active_count = 0
    fixed_order_count = 0
    qnums: list[int] = []
    for question in questions:
        counts_by_topic[question["topicId"]] = counts_by_topic.get(question["topicId"], 0) + 1
        key = f"{question['topicId']}/{question['subtopicId']}"
        counts_by_subtopic[key] = counts_by_subtopic.get(key, 0) + 1
        counts_by_confidence[question["extractionConfidence"]] = counts_by_confidence.get(question["extractionConfidence"], 0) + 1
        active_count += 1 if question["active"] else 0
        fixed_order_count += 1 if question.get("shuffleDisabled") else 0
        qnums.append(int(question["sourceQuestionNumber"]))

    missing = [num for num in range(1, EXPECTED_QUESTION_COUNT + 1) if num not in set(detected_question_numbers)]
    duplicates = sorted(num for num in set(qnums) if qnums.count(num) > 1)
    report = {
        "pdf": str(PDF_PATH),
        "pagesWithOcr": len(records),
        "questionsOutput": len(questions),
        "expectedQuestionCount": EXPECTED_QUESTION_COUNT,
        "sourceQuestionNumbersDetected": len(detected_question_numbers),
        "activeQuestions": active_count,
        "inactiveQuestions": len(questions) - active_count,
        "fixedOrderQuestions": fixed_order_count,
        "manualReviewRows": len(review_rows),
        "missingQuestionNumbers": missing,
        "duplicateQuestionNumbers": duplicates,
        "skippedDuplicateQuestions": skipped_duplicates,
        "countsByTopic": dict(sorted(counts_by_topic.items())),
        "countsBySubtopic": dict(sorted(counts_by_subtopic.items())),
        "countsByConfidence": dict(sorted(counts_by_confidence.items())),
        "outputs": {
            "jsonl": str(JSONL_OUT),
            "report": str(REPORT_OUT),
            "manualReviewCsv": str(REVIEW_OUT),
            "ocrJsonl": str(OCR_JSONL_OUT),
            "privateTsModule": str(PRIVATE_TS_OUT),
            "publicTsModule": str(PUBLIC_TS_OUT),
        },
    }
    REPORT_OUT.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")

    with REVIEW_OUT.open("w", newline="", encoding="utf-8") as handle:
        fieldnames = [
            "id",
            "sourceQuestionNumber",
            "sourcePage",
            "topicId",
            "subtopicId",
            "active",
            "reviewStatus",
            "extractionConfidence",
            "issues",
            "stem",
        ]
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(review_rows)

    print(json.dumps(report, indent=2, ensure_ascii=False))


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Extract user-provided S3 regulatory QCMs by OCR.")
    parser.add_argument("--skip-ocr", action="store_true", help="Use existing OCR JSONL/page JSON files.")
    parser.add_argument("--limit", type=int, default=None, help="OCR at most N crop pages, for smoke tests.")
    args = parser.parse_args(argv)

    ensure_rendered()
    ensure_crops()
    if not args.skip_ocr:
        ocr_pages(limit=args.limit)
    records = load_ocr_records()
    if args.limit:
        records = records[: args.limit]
    else:
        records = repair_inactive_records(records)
    write_outputs(records)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
