# Imported QCM Repair Report

Generated: 2026-05-14T09:12:11.831Z

| Metric | Count |
| --- | --- |
| Starting non-verified imported QCMs | 60 |
| Starting needs_review | 31 |
| Starting rejected | 29 |
| Ending verified imported QCMs | 659 |
| Ending needs_review imported QCMs | 31 |
| Ending rejected imported QCMs | 29 |
| Promoted to verified by repair pass | 0 |
| Reviewed locally without LLM | 0 |
| LLM repair/review API calls | 342 |
| API cost used | $9.6009 |

## Ending Source / Status

| Source / Status | Count |
| --- | --- |
| S3-Market DOCX / rejected | 23 |
| S3-Market DOCX / verified | 446 |
| S3-Regulatory PDF / needs_review | 31 |
| S3-Regulatory PDF / rejected | 6 |
| S3-Regulatory PDF / verified | 213 |

## Remaining Issue Types

| Issue type | Count |
| --- | --- |
| outdated_rule | 32 |
| duplicate | 29 |
| OCR/transcription | 7 |
| weak_explanation | 5 |
| bad_distractors | 3 |
| calculation_error | 1 |
| ambiguous | 1 |
| wrong_taxonomy | 1 |

## Repair Decisions

| ID | Mode | Repaired to verified | Final status | Notes |
| --- | --- | --- | --- | --- |
| s3-regulatory-pdf-109 | cached | no | needs_review | The source text and intended answer are clear, and the banned 'all of the above' format has been repaired. However, the allowed taxonomy does not contain a precise Dodd-Frank/derivatives-definitions subtopic under U.S. Regulations. The closest existing placement is general-regulatory, but 'risk-disclosure' is not substantively correct. In addition, because this is a regulatory/legal-definition item tied to Dodd-Frank terminology and may require confirmation against current CFTC/NFA phrasing, it should not be promoted to verified without legal/source validation. Repair: Rewrote the stem and answer choices into standalone semantic choices and removed the source's 'All of the above' format while preserving the tested concept. |
| s3-regulatory-pdf-117 | cached | no | needs_review | The banned 'All of the above' format has been removed and the item now has one semantic correct answer. However, the dollar thresholds for NFA arbitration written-submission procedures are specific regulatory thresholds and may be outdated relative to current NFA rules, so the question should not be verified without current-rule confirmation. Repair: Rewrote the item to eliminate the 'All of the above' answer choice and make one standalone condition the correct answer while preserving the tested concept from the source. |
| s3-regulatory-pdf-121 | cached | no | needs_review | The source and answer are clear, and the banned 'All of the above' distractor has been replaced. However, the foreign stock-index futures no-action framework may be affected by current CFTC staff guidance, foreign board of trade rules, and Part 30/foreign contract offering requirements, so it should not be promoted to verified without regulatory confirmation. Repair: Rewrote the stem for clarity, expanded regulator names, removed the banned 'All of the above' answer choice, and supplied standalone choices with one source-based correct answer. |
| s3-regulatory-pdf-185 | cached | no | needs_review | The source and tested concept are clear, and the banned 'any of the above' format has been repaired. The item should not be verified because the fixed-dollar and formula amounts in the source may be outdated under current CFTC/NFA financial requirements. Repair: Rewrote the question to eliminate the banned 'highest of any of the above' answer choice and made each choice standalone with exactly one correct answer. Preserved the educational concept that the highest applicable FCM adjusted net capital computation controls. |
| s3-regulatory-pdf-219 | cached | no | needs_review | OCR/source transcription is clear and the source answer is D. The remaining issue is legal currency/context: the statement may depend on whether the pool is also an SEC-registered investment company or otherwise subject to SEC disclosure requirements, and CFTC/SEC harmonization has changed how disclosure obligations are satisfied. Repair: Preserved the source-tested answer but rewrote the stem to signal that it is source-based and improved rationales. Did not promote to verified because the regulatory rule may be outdated or context-dependent. |
| s3-regulatory-pdf-221 | cached | no | needs_review | The screenshot and transcript clearly show the source answer as True, but the $400,000 / 15-person threshold appears potentially outdated or incomplete under current CFTC/NFA CPO exemption rules. Per repair rules, regulatory items with current-rule uncertainty should not be promoted to verified. Repair: Kept the source-tested true/false proposition but did not verify it because the regulatory threshold appears potentially outdated or oversimplified. Improved rationales and explanation to flag the current-rule concern. |
| s3-regulatory-pdf-226 | cached | no | needs_review | The source and intended answer are clear, and the banned combination-choice format has been repaired into standalone semantic choices. However, this regulatory item should not be promoted to verified because the statement depends on potentially changed foreign board of trade access, CFTC no-action/Part 30 practices, and SEC exempted-security treatment. It is app-readable only if retained as a source-historical item or reviewed against current exam-tested rules. Repair: Rewrote the legacy A/B/C combination item into a four-choice standalone multiple-choice question with exactly one correct answer and clarified that the debt category refers to foreign government debt obligations as described in the source. |
| s3-regulatory-pdf-238 | cached | no | needs_review | The source and intended answer are clear, and the item has been rewritten into standalone choices with exactly one correct answer. However, the source relies on a specific $400,000 small-pool threshold/exemption framework that may be outdated or incomplete under current CFTC/NFA rules, so it should not be promoted to verified without current regulatory confirmation. Repair: Rewrote the item to remove banned combination-answer format and to provide standalone semantic choices with one correct source-supported factor. |
| s3-regulatory-pdf-243 | cached | no | needs_review | The source clearly tests QEP-based CPO/CTA regulatory relief and marks True. However, the original wording is overly broad because QEP-related exemptions/reduced requirements depend on specific CFTC/NFA provisions and conditions. Regulatory details may change, so this should not be promoted to verified without current-rule confirmation. Repair: Reworded the stem and explanation to avoid implying an unconditional blanket exemption, while preserving the source-tested concept that QEP-only CPOs/CTAs may qualify for reduced regulatory requirements. |
