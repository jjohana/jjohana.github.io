import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "course", "day-count-rules-cheat-sheet.png");
const WIDTH = 1024;
const HEIGHT = 1536;

const sections = [
  {
    no: "1",
    title: "BEFORE / AT-OR-BEFORE RULES",
    kind: "before",
    rows: [
      ["1", "", "Discretionary authority must exist BEFORE the trade. One business day after is NOT sufficient.", "s3-regulatory-pdf-010"],
      ["2", "", "Before opening a non-exempt futures account: risk disclosure + signed/dated acknowledgment.", "s3-regulatory-pdf-019"],
      ["3", "", "Before placing a customer trade: specific order authorization OR written discretionary authority.", "s3-regulatory-pdf-033"],
      ["4", "", "Before exercising discretion: customer written authorization / power of attorney.", "s3-regulatory-pdf-119 / 169"],
      ["5", "", "NFA Rule 2-30: customer information + risk disclosure at or before account opening.", "s3-regulatory-pdf-160 / 184"],
      ["6", "", "Required futures risk disclosure before customer can trade futures/options.", "reg-rewrite-account-001"],
      ["7", "", "CTA Disclosure Document before advisory agreement; at or before solicitation or agreement.", "s3-regulatory-pdf-148 / 214 / 247"],
      ["8", "", "CTA/CPO Disclosure Documents: NFA acceptance before use.", "s3-regulatory-pdf-249"],
    ],
  },
  {
    no: "2",
    title: "DAYS TO MEMORIZE",
    kind: "days",
    rows: [
      ["1", "21\nDAYS", "21 calendar days: correct and distribute materially inaccurate/incomplete CTA/CPO Disclosure Document.", "s3-regulatory-pdf-213"],
      ["2", "30\nDAYS", "30 days: NFA president summary bar after notice for failure to comply with arbitration award/settlement.", "s3-regulatory-pdf-081"],
      ["3", "30\nDAYS", "30 days: AP sponsor must hire/employ applicant within 30 days of registration notification.", "s3-regulatory-pdf-240"],
      ["4", "60\nDAYS", "60 days after calendar year end: CTA/CPO exemption notice annual reaffirmation; failure = withdrawal.", "s3-regulatory-pdf-230"],
      ["5", "60\nDAYS", "60 days prior: CPO account-statement attachment exception if performance info is current within 60 days.", "s3-regulatory-pdf-107"],
      ["6", "60\nDAYS", "Preceding 60 days: temporary AP license may be available after AP registration termination.", "s3-regulatory-pdf-176"],
      ["7", "90\nTRAP", "90 day trap: false that only gaps over 90 days count; ANY gaps in prior 5 years must be explained.", "s3-regulatory-pdf-075"],
    ],
  },
  {
    no: "3",
    title: "TWO-YEAR RULES",
    kind: "years",
    rows: [
      ["1", "2\nYEARS", "Address changes: notify NFA while registered and for 2 years after termination.", "s3-regulatory-pdf-040"],
      ["2", "2\nYEARS", "CFTC reparations claim: within 2 years after cause of action occurs/accrues.", "s3-regulatory-pdf-079"],
      ["3", "2\nYEARS", "NFA arbitration claim/notice: within 2 years from when party knew or should have known.", "s3-regulatory-pdf-097"],
      ["4", "2\nYEARS", "Discretionary accounts: AP generally needs 2 years continuous registration/work unless waived.", "s3-regulatory-pdf-106 / 188"],
    ],
  },
  {
    no: "4",
    title: "MONTH RULES",
    kind: "months",
    rows: [
      ["1", "3\nMONTHS", "3 months actual results: no hypothetical/extracted/pro forma/simulated results after that point.", "s3-regulatory-pdf-082"],
      ["2", "3\nMONTHS", "3 months currentness: CPO/CTA performance info current within 3 months before document date.", "s3-regulatory-pdf-209 / 218"],
      ["3", "12\nMONTHS", "12 months: CTA Disclosure Document cannot be dated more than 12 months before use.", "s3-regulatory-pdf-229"],
      ["4", "12\nMONTHS", "12 months: CPO Disclosure Document cannot be older than 12 months.", "s3-regulatory-pdf-241"],
      ["5", "12\nMONTHS", "Preceding 12 months: CTA exemption if advice to no more than 15 persons and no public holding out.", "s3-regulatory-pdf-172 / 177"],
    ],
  },
  {
    no: "5",
    title: "FIVE-YEAR RULES",
    kind: "five",
    rows: [
      ["1", "5\nYEARS", "Promotional material + review/approval record: keep 5 years from last use; first 2 years readily accessible.", "s3-regulatory-pdf-085"],
      ["2", "5\nYEARS", "English translations for foreign-language promotional/disclosure/web material: keep 5 years from last use.", "s3-regulatory-pdf-166"],
      ["3", "5\nYEARS", "FCM/IB order records: filled, unfilled, canceled orders retained at least 5 years.", "s3-regulatory-pdf-183"],
      ["4", "5\nYEARS", "CFTC books and records: retain at least 5 years; first 2 years readily accessible when stated.", "s3-regulatory-pdf-193 / 225 / 228"],
      ["5", "5\nYEARS", "CTA business background: 5 years preceding Disclosure Document date.", "s3-regulatory-pdf-096"],
      ["6", "5\nYEARS", "CTA/CPO background: previous 5 years with dates, employers, duties, and ANY gaps.", "s3-regulatory-pdf-075 / 232"],
      ["7", "5\nYEARS", "Past performance: 5 years plus year-to-date, or life if shorter; CTA includes monthly rates for offered program.", "s3-regulatory-pdf-155 / 210 / 231"],
    ],
  },
  {
    no: "6",
    title: "FREQUENCY / REPORTING",
    kind: "freq",
    rows: [
      ["1", "Immediately", "Customer order record: prepare and time-stamp immediately upon receipt.", "s3-regulatory-pdf-032"],
      ["2", "Promptly", "IB customer checks: payable to carrying FCM; promptly deposit/transmit to FCM.", "s3-regulatory-pdf-156"],
      ["3", "Daily", "FCM segregated funds computation/record as of close of each business day.", "s3-regulatory-pdf-111"],
      ["4", "Daily", "Reportable futures/options position reports.", "s3-regulatory-pdf-217"],
      ["5", "Next business day", "FCM written trade confirmations.", "s3-regulatory-pdf-144"],
      ["6", "Monthly", "FCM financial reports; year-end certified by independent public accountant.", "s3-regulatory-pdf-187"],
      ["7", "Semiannual", "Independent IB financial reports.", "s3-regulatory-pdf-220"],
      ["8", "Monthly / quarterly", "CPO account statements; over $500,000 monthly, otherwise quarterly.", "s3-regulatory-pdf-205"],
      ["9", "Quarterly review", "CTA bunched/block order allocation method review.", "s3-regulatory-pdf-197"],
      ["10", "Daily + monthly", "Account statements may be electronic with customer written consent and required disclosure.", "s3-regulatory-pdf-170"],
    ],
  },
];

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function badge(text, kind) {
  if (!text) return "";
  const parts = text.split("\n").map(escapeHtml);
  return `<span class="badge ${kind}"><b>${parts[0]}</b>${parts[1] ? `<small>${parts[1]}</small>` : ""}</span>`;
}

function renderRows(section) {
  return section.rows
    .map(([index, marker, fact, ids]) => {
      const markerHtml = section.kind === "before"
        ? ""
        : section.kind === "freq"
          ? `<div class="freq-label">${escapeHtml(marker)}</div>`
          : badge(marker, section.kind);
      return `
        <div class="row ${section.kind}">
          <div class="idx">${escapeHtml(index)}</div>
          <div class="marker">${markerHtml}</div>
          <div class="fact">${escapeHtml(fact)}</div>
          <div class="ids">${escapeHtml(ids)}</div>
        </div>`;
    })
    .join("");
}

const html = `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      width: ${WIDTH}px;
      height: ${HEIGHT}px;
      background: #ffffff;
      font-family: "Arial Narrow", "Aptos Narrow", "Roboto Condensed", Arial, Helvetica, sans-serif;
      color: #07113f;
    }
    .sheet {
      width: ${WIDTH}px;
      height: ${HEIGHT}px;
      padding: 8px 22px 10px;
      background: #fff;
      overflow: hidden;
    }
    h1 {
      margin: 0;
      text-align: center;
      color: #071b52;
      font-size: 34px;
      line-height: 1;
      font-weight: 900;
      letter-spacing: 0;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .subtitle {
      margin: 2px 0 6px;
      text-align: center;
      color: #070707;
      font-size: 21px;
      line-height: 1;
      font-weight: 800;
    }
    .section {
      border: 1.5px solid #071b52;
      border-radius: 7px;
      overflow: hidden;
      margin-top: 4px;
      background: #fff;
    }
    .bar {
      height: 22px;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 0 16px;
      color: #fff;
      background: linear-gradient(180deg, #071b52 0%, #020f3b 100%);
      font-weight: 900;
      font-size: 20px;
      line-height: 1;
      letter-spacing: .5px;
    }
    .bar-no {
      min-width: 22px;
      text-align: center;
    }
    .row {
      display: grid;
      grid-template-columns: 45px 74px 1fr 278px;
      min-height: 29px;
      border-top: 1px solid #d5d9e2;
      align-items: center;
    }
    .row.before {
      grid-template-columns: 45px 12px 1fr 278px;
    }
    .row.freq {
      grid-template-columns: 45px 130px 1fr 278px;
      min-height: 23px;
    }
    .idx {
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 27px;
      height: 22px;
      border-radius: 4px;
      background: #071b52;
      color: #fff;
      font-weight: 900;
      font-size: 16px;
      line-height: 1;
    }
    .row.freq .idx {
      width: 20px;
      height: 20px;
      font-size: 13px;
      border: 1px solid #071b52;
      background: #f8fbff;
      color: #071b52;
      border-radius: 3px;
    }
    .marker {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 24px;
    }
    .badge {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 53px;
      height: 27px;
      border-radius: 4px;
      background: #fff;
      border: 1.5px solid #7687a8;
      color: #071b52;
      line-height: .9;
      font-weight: 900;
    }
    .badge b {
      font-size: 14px;
    }
    .badge small {
      margin-top: 2px;
      font-size: 8px;
      font-weight: 900;
      line-height: 1;
    }
    .badge.days b,
    .badge.days small {
      color: #05822d;
    }
    .badge.days {
      border-color: #16a34a;
      background: #f2fff7;
    }
    .row.days:nth-child(2) .badge,
    .row.days:nth-child(3) .badge {
      border-color: #f26d21;
      background: #fff7ee;
    }
    .row.days:nth-child(8) .badge {
      border-color: #ef2d2d;
      background: #fff4f4;
    }
    .row.days:nth-child(2) .badge b,
    .row.days:nth-child(2) .badge small,
    .row.days:nth-child(3) .badge b,
    .row.days:nth-child(3) .badge small {
      color: #f26d21;
    }
    .row.days:nth-child(8) .badge b,
    .row.days:nth-child(8) .badge small {
      color: #ef2d2d;
    }
    .badge.months {
      border-color: #8a4bd1;
      color: #6f3fb4;
      background: #fbf7ff;
    }
    .badge.months b,
    .badge.months small {
      color: #6f3fb4;
    }
    .badge.five,
    .badge.years {
      background: #f8fbff;
    }
    .fact {
      padding: 2px 10px 2px 4px;
      font-size: 13.4px;
      line-height: 1;
      font-weight: 800;
      color: #07113f;
    }
    .row.before .fact {
      font-size: 14.6px;
      line-height: 1;
    }
    .row.freq .fact {
      font-size: 12.1px;
      line-height: 1;
      font-weight: 800;
      padding-left: 4px;
    }
    .freq-label {
      width: 126px;
      padding-left: 2px;
      color: #071b52;
      font-size: 12.1px;
      line-height: 1;
      font-weight: 900;
    }
    .ids {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #cfd4dd;
      padding: 0 8px;
      color: #087a32;
      font-size: 14px;
      line-height: 1;
      font-weight: 900;
      text-align: center;
      white-space: normal;
    }
    .row.freq .ids {
      font-size: 12px;
    }
    .foot {
      height: 28px;
      margin-top: 4px;
      border: 1.5px solid #071b52;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      color: #071b52;
      font-size: 16px;
      line-height: 1;
      font-weight: 900;
    }
    .bang {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #071b52;
      color: #fff;
      font-size: 21px;
      line-height: 1;
    }
  </style>
</head>
<body>
  <main class="sheet">
    <h1>SERIES 3 TIME, DAYS &amp; MONTHS CONSTRAINTS</h1>
    <div class="subtitle">Actual verified QCM facts for drill-back</div>
    ${sections.map((section) => `
      <section class="section">
        <div class="bar"><span class="bar-no">${section.no}</span><span>${escapeHtml(section.title)}</span></div>
        ${renderRows(section)}
      </section>`).join("")}
    <div class="foot"><span class="bang">!</span><span>No verified active QCM found for 17 business days. Use actual QCM IDs for drill-back.</span></div>
  </main>
</body>
</html>`;

async function main() {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: "load" });
    await fs.mkdir(path.dirname(OUT), { recursive: true });
    await page.screenshot({ path: OUT, clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
