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
- QCM Bank browser by section, topic, and subtopic
- Coverage matrix with sample/imported counts and coverage gaps
- JSONL and CSV import/export
- Question validation against content and taxonomy rules
- Topic drills with difficulty and weak-subtopic prioritization
- 120-question mock exam with 150-minute timer
- Separate Market Knowledge and U.S. Regulations scoring
- Mistake review queue
- Per-question explanations and per-choice rationales
- Deterministic seeded shuffling with balanced correct-answer positions
- Static build compatible with GitHub Pages

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
- Imported content must be original or properly licensed.
