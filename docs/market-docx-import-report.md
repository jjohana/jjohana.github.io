# S3 Market DOCX Import Report

Source:

```text
C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Market.docx
```

## Extraction Summary

- Source format: image-based DOCX screenshots.
- Images processed in document order: 469.
- Source counter shown in the tutorial: 447 questions.
- Unique identifiable source question numbers extracted: 444.
- Active QCMs generated for the app: 444.
- Inactive generated QCMs: 0.
- Manual-review rows: 24.
- Missing source numbers in the extracted image sequence: 71, 245, 306.

The missing numbers above were not found as unique question screenshots in the DOCX image sequence. The document contains duplicate/continued screenshots for some long explanations, so the importer deduplicates by source question number and keeps the most complete parsed version.

## Market Knowledge Topic Counts

| Topic | Imported QCMs |
| --- | ---: |
| Futures Trading Theory and Basic Functions Terminology | 72 |
| Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | 72 |
| Types of Orders, Customer Accounts, Price Analysis | 48 |
| Basic Hedging, Basis Calculations, Hedging Futures | 77 |
| Spreading | 34 |
| Speculating in Futures | 67 |
| Option Hedging, Speculating, Spreading | 74 |

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

