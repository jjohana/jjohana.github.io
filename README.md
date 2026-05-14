# Series 3 QCM Practice App

Interactive static web app for Series 3 / NFA exam practice. It is organized around a structured QCM bank:

`Section -> Topic -> Subtopic`

The app is designed for GitHub Pages at `https://jjohana.github.io/series3/` and does not require a server runtime. Browser data is stored locally and can be imported or exported.

## Compliance

This is an independent Series 3 study tool. It uses original practice questions and syllabus-based topic mapping. It is not affiliated with, endorsed by, or provided by FINRA, NFA, CFTC, or Prometric. It does not contain real exam questions.

Use only:

- original study questions
- user-authored questions
- licensed question banks you have the right to import
- public syllabus topic labels
- original explanations and rationales

## Features

- Dashboard with progress, section accuracy, weak subtopics, and recent sessions
- Integrated English Course module organized by the same Section -> Topic -> Subtopic taxonomy as the QCM bank
- Course subchapters with definitions, formulas, worked examples, common QCM traps, recaps, coverage gaps, and one-click filtered practice
- Glossary section with Series 3 acronyms and key definitions, searchable by term and category
- Minimum coverage guardrail: every taxonomy subtopic has at least 3 active verified QCMs
- QCM Bank browser by section, topic, and subtopic
- Source-bank filters for all questions, both S3 imported sets, S3-Market DOCX only, S3-Regulatory PDF only, or authored/rewritten/sample content
- Coverage matrix with sample/imported counts and coverage gaps
- 742 active Market Knowledge QCMs, including the authored coverage bank, minimum-coverage questions, and the user-authorized LLM vision reimport of `S3-Market.docx`
- Imported Market Knowledge coverage by major topic: 66 theory, 79 margins/settlement/delivery/options premiums, 51 orders/accounts/analysis, 90 hedging/basis, 35 spreading, 71 futures speculation, and 77 options QCMs
- JSONL and CSV import/export
- Question validation against content and taxonomy rules
- Topic drills with difficulty and weak-subtopic prioritization
- 120-question mock exam with 150-minute timer
- Topic drills and mock exams prioritize the S3 imported banks when matching imported questions are available
- Mock exam source-bank selector so a full mock can be generated from S3 imported sets, authored content, or all banks
- Exam Rules page with official Series 3 format, timing, admission, provided materials, break, result, and retake reminders
- Separate Market Knowledge and U.S. Regulations scoring
- Mistake review queue
- Per-question explanations and per-choice rationales
- Deterministic seeded shuffling with balanced correct-answer positions
- Fixed-order support for licensed/user-provided source questions whose choices depend on A/B/C/D labels
- Static build compatible with GitHub Pages
- Rewritten U.S. Regulations bank based on concepts observed in `S3-Regulatory.pdf`
- User-authorized OpenAI gpt-5.5 vision reimport of the `S3-Regulatory.pdf` regulatory bank: 250 source pages, 183 verified imported QCMs, 37 needs-review QCMs, and 30 rejected audit-only QCMs
- User-authorized OpenAI gpt-5.5 vision reimport of the `S3-Market.docx` market bank: 469 source images, 306 verified imported QCMs, 96 needs-review QCMs, and 67 rejected audit-only QCMs
- Dedicated regulatory focus filters for registration, account rules, FCM/IB, CPO/CTA, supervision, communications, arbitration, enforcement, AML, and high-yield review

## Course Module

The Course page is generated from the app's taxonomy and active verified QCM metadata. It excludes rejected/quarantined questions and shows how many verified QCMs support each subchapter.

Course reports:

- [docs/course-content-report.md](docs/course-content-report.md)
- [docs/course-coverage-report.md](docs/course-coverage-report.md)
- [docs/course-linked-qcms-report.md](docs/course-linked-qcms-report.md)
- [docs/minimum-subtopic-coverage-report.md](docs/minimum-subtopic-coverage-report.md)

## Setup

```bash
npm install
npm run dev
```

Local dev server:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The static output is written to `dist/`.

## Tests

```bash
npm test
npm run test:e2e
```

If Playwright browsers are not installed locally, install them with:

```bash
npx playwright install
```

## GitHub Pages Deployment

This app uses Vite with `base: "/series3/"`, which matches the project path:

```text
https://jjohana.github.io/series3/
```

Build the app and publish the `dist/` folder under a `series3/` folder in the GitHub Pages artifact. The included workflow does this automatically and also writes a root redirect from `/` to `/series3/`.

Example GitHub Actions outline:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

## JSONL Format

Each line must be one question object:

```json
{"id":"user-basis-0001","sectionId":"market_knowledge","topicId":"hedging-basis","subtopicId":"basis-calculation","difficulty":"medium","questionType":"multiple_choice","stem":"Cash oats are 3.42 and nearby futures are 3.50. What is the basis?","choices":[{"id":"a","text":"+0.08","isCorrect":false,"rationale":"This reverses cash minus futures."},{"id":"b","text":"-0.08","isCorrect":true,"rationale":"Basis = 3.42 - 3.50 = -0.08."},{"id":"c","text":"6.92","isCorrect":false,"rationale":"Adding prices is not a basis calculation."},{"id":"d","text":"-6.92","isCorrect":false,"rationale":"This uses the sum, not the difference."}],"explanation":"Basis equals cash price minus futures price.","active":true}
```

## CSV Format

Supported columns:

```text
id,sectionId,topicId,subtopicId,difficulty,questionType,stem,explanation,choice1,choice1Correct,choice1Rationale,choice2,choice2Correct,choice2Rationale,choice3,choice3Correct,choice3Rationale,choice4,choice4Correct,choice4Rationale
```

Use `true`, `1`, `yes`, or `y` for the correct-choice column.

## Validation Rules

- Each QCM must have exactly one correct answer.
- True/false questions must be stored as two normal answer choices.
- Every choice must include a rationale.
- Every question must include a detailed explanation.
- Every question must be tagged with section, topic, subtopic, and difficulty.
- Avoid "all of the above", "none of the above", and choices that refer to displayed letters.
- If a licensed/user-provided source question cannot be shuffled safely because its choices refer to A/B/C/D, set `shuffleDisabled: true`; the app will preserve the original choice order and show a fixed-order tag.
- Imported content must be original or properly licensed.

## Regulatory PDF Remodel

The regulatory section was remodeled using the local source document:

```text
C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Regulatory.pdf
```

That PDF is image-based and appears to be a PassMaster-style regulatory QCM tutorial. The app includes the original rewritten regulatory study questions plus the user-authorized OpenAI gpt-5.5 vision reimport of the regulatory bank. The app's safety gate rejects duplicates, unsafe answer-choice formats, invalid taxonomy, and malformed answer sets before practice/mock selection.

See [docs/regulatory-remodel-report.md](docs/regulatory-remodel-report.md) for the extraction summary, taxonomy changes, and manual review notes.
See [docs/llm-transcript-report.md](docs/llm-transcript-report.md), [docs/llm-reimport-cost-report.md](docs/llm-reimport-cost-report.md), and [docs/import-reset-report.md](docs/import-reset-report.md) for the LLM reimport audit.

## Market DOCX Import

The Market Knowledge section was expanded using the local source document:

```text
C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Market.docx
```

That DOCX is image-based. The OpenAI gpt-5.5 vision workflow extracted the screenshots, transcribed and parsed the QCMs, audited answers and calculations, and mapped each question to the seven Market Knowledge topic groups. The app's quality gate defaults practice and mock exams to verified questions and excludes rejected items.

See [docs/market-docx-import-report.md](docs/market-docx-import-report.md) for counts, topic mapping, and manual-review notes.
See [docs/llm-transcript-report.md](docs/llm-transcript-report.md), [docs/llm-reimport-cost-report.md](docs/llm-reimport-cost-report.md), and [docs/import-reset-report.md](docs/import-reset-report.md) for the LLM reimport audit.

## Private PDF Extraction

For local/private use, the OCR extraction workflow is in:

```bash
python scripts/extract_s3_regulatory_pdf.py --skip-ocr
```

It writes ignored private outputs:

```text
private/s3-regulatory-extracted.jsonl
private/s3-regulatory-extraction-report.json
private/s3-regulatory-manual-review.csv
src/data/private/s3RegulatoryExtracted.ts
```

Files under `private/` and `src/data/private/` are ignored by Git. When `src/data/private/s3RegulatoryExtracted.ts` exists locally, the app auto-loads those questions. The public module generated from the authorized extraction is:

```text
src/data/s3RegulatoryPdfQuestions.ts
```
