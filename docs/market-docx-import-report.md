# S3 Market DOCX Import Report

Source:

```text
C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Market.docx
```

## Extraction Summary

Updated after the OpenAI gpt-5.5 vision reimport. The earlier local OCR import produced 444 unique identifiable QCMs; the current app preserves all 469 source images as audited records and lets the final app quality gate decide whether each record is verified, needs review, or rejected.

- Source format: image-based DOCX screenshots.
- Images processed in document order: 469.
- Source counter shown in the tutorial: 447 questions.
- Unique identifiable source question numbers extracted: 444.
- Active QCM records generated for the app: 469.
- Verified imported QCMs after app safety gate: 306.
- Needs-review imported QCMs after app safety gate: 96.
- Rejected audit-only imported QCMs after app safety gate: 67.
- Inactive generated QCMs: 0.
- Raw LLM manual-review rows before final app safety gate: 68.

The document contains duplicate/continued screenshots for some long explanations. The LLM reimport records source image IDs and duplicate decisions rather than silently dropping source images.

## Market Knowledge Topic Counts

| Topic | Imported QCMs |
| --- | ---: |
| Futures Trading Theory and Basic Functions Terminology | 66 |
| Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | 79 |
| Types of Orders, Customer Accounts, Price Analysis | 51 |
| Basic Hedging, Basis Calculations, Hedging Futures | 90 |
| Spreading | 35 |
| Speculating in Futures | 71 |
| Option Hedging, Speculating, Spreading | 77 |

## Handling Rules

- The imported questions are marked `sourceType: "imported"`.
- The source answer order is preserved with `shuffleDisabled: true`.
- Questions with OCR repairs are marked `reviewStatus: "needs_review"`.
- OCR placeholders were used only where a source answer choice was visibly referenced by the answer key but the choice text was not parsed cleanly.
- One confirmation-screen item was inferred and flagged for review because the screenshot did not include the full answer/explanation panel.

## Generated Outputs

- Public app module: `src/data/s3MarketDocxQuestions.ts`
- Local import script: `scripts/extract_s3_market_docx.py`
- Ignored local OCR workspace: `tmp_market_docx/`
