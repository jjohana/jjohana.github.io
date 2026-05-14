# Minimum Subtopic Coverage Report

Generated: 2026-05-14

## Objective

Identify every taxonomy subtopic with fewer than 3 active verified QCMs and close the gap so each subtopic has at least 3 usable QCMs.

## Starting gap inventory

- Total taxonomy subtopics: 162
- Subtopics with 0 verified QCMs: 8
- Subtopics with 1 verified QCM: 22
- Subtopics with 2 verified QCMs: 28
- Total under-covered subtopics: 58
- Additional QCMs required to reach 3 per subtopic: 96

## Correction

Added `src/data/minimumCoverageQuestions.ts` with 96 original user-authored questions. These questions are tagged as verified, active, and mapped to the exact under-covered subtopics.

## Final status

- Total active verified QCMs: 1053
- Market Knowledge active verified QCMs: 715
- U.S. Regulations active verified QCMs: 338
- Subtopics below 3 active verified QCMs: 0
- Subtopics with 0 active verified QCMs: 0

The totals were updated after the imported-QCM second recovery pass. Some imported items remain needs_review or rejected, but the authored minimum-coverage set still keeps every taxonomy subtopic at or above the 3-verified-QCM floor.

## Under-covered subtopics fixed

| Section | Topic | Subtopic | Before | Added | Final minimum |
|---|---|---|---:|---:|---:|
| Market Knowledge | Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | Futures margin vs securities margin | 1 | 2 | 3 |
| Market Knowledge | Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | Delta | 2 | 1 | 3 |
| Market Knowledge | Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | Circuit breakers | 1 | 2 | 3 |
| Market Knowledge | Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | First notice day | 2 | 1 | 3 |
| Market Knowledge | Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | Physical delivery | 1 | 2 | 3 |
| Market Knowledge | Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | Warehouse receipts | 2 | 1 | 3 |
| Market Knowledge | Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment | EFPs | 2 | 1 | 3 |
| Market Knowledge | Types of Orders, Customer Accounts, Price Analysis | FOK orders | 2 | 1 | 3 |
| Market Knowledge | Types of Orders, Customer Accounts, Price Analysis | MOC orders | 2 | 1 | 3 |
| Market Knowledge | Types of Orders, Customer Accounts, Price Analysis | OCO orders | 2 | 1 | 3 |
| Market Knowledge | Types of Orders, Customer Accounts, Price Analysis | Gaps | 2 | 1 | 3 |
| Market Knowledge | Types of Orders, Customer Accounts, Price Analysis | Supply and demand | 2 | 1 | 3 |
| Market Knowledge | Types of Orders, Customer Accounts, Price Analysis | Yield curves | 2 | 1 | 3 |
| Market Knowledge | Basic Hedging, Basis Calculations, Hedging Futures | Long hedges | 2 | 1 | 3 |
| Market Knowledge | Basic Hedging, Basis Calculations, Hedging Futures | Long the basis | 2 | 1 | 3 |
| Market Knowledge | Basic Hedging, Basis Calculations, Hedging Futures | Short the basis | 2 | 1 | 3 |
| Market Knowledge | Basic Hedging, Basis Calculations, Hedging Futures | Strengthening basis | 2 | 1 | 3 |
| Market Knowledge | Basic Hedging, Basis Calculations, Hedging Futures | Weakening basis | 2 | 1 | 3 |
| Market Knowledge | Basic Hedging, Basis Calculations, Hedging Futures | Transportation costs | 2 | 1 | 3 |
| Market Knowledge | Basic Hedging, Basis Calculations, Hedging Futures | Financial futures basis | 2 | 1 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Short puts | 2 | 1 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Long call as alternative to long futures hedge | 2 | 1 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Return-on-equity calculations | 2 | 1 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Protective calls | 1 | 2 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Protective puts | 1 | 2 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Bear call spreads | 1 | 2 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Bull put spreads | 1 | 2 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Bear put spreads | 2 | 1 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Arbitrage spreads | 1 | 2 | 3 |
| Market Knowledge | Option Hedging, Speculating, Spreading | Maximum profit/loss calculations | 2 | 1 | 3 |
| U.S. Regulations | General Regulatory Topics | Floor Broker | 2 | 1 | 3 |
| U.S. Regulations | General Regulatory Topics | Floor Trader | 0 | 3 | 3 |
| U.S. Regulations | General Regulatory Topics | Commodity Pool Operator | 1 | 2 | 3 |
| U.S. Regulations | General Regulatory Topics | Commodity Trading Advisor | 2 | 1 | 3 |
| U.S. Regulations | General Regulatory Topics | Introducing Broker | 1 | 2 | 3 |
| U.S. Regulations | General Regulatory Topics | Registration exemptions | 1 | 2 | 3 |
| U.S. Regulations | General Regulatory Topics | Account opening | 1 | 2 | 3 |
| U.S. Regulations | General Regulatory Topics | Customer agreements | 0 | 3 | 3 |
| U.S. Regulations | General Regulatory Topics | Speculative position limits | 2 | 1 | 3 |
| U.S. Regulations | FCM / IB Regulations | Independent Introducing Brokers | 1 | 2 | 3 |
| U.S. Regulations | FCM / IB Regulations | Guarantor FCM responsibilities | 0 | 3 | 3 |
| U.S. Regulations | FCM / IB Regulations | Margin deposit collection | 2 | 1 | 3 |
| U.S. Regulations | FCM / IB Regulations | Account adjustments | 2 | 1 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Required disclosure statements | 0 | 3 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Trading program descriptions | 1 | 2 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Principal backgrounds | 1 | 2 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Conflicts of interest | 1 | 2 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Recordkeeping | 1 | 2 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Bunched orders | 2 | 1 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Public communications | 1 | 2 | 3 |
| U.S. Regulations | CPO / CTA Regulations | Promotional material | 0 | 3 | 3 |
| U.S. Regulations | Arbitration, Discipline and Enforcement | Formal complaints | 1 | 2 | 3 |
| U.S. Regulations | Arbitration, Discipline and Enforcement | Warning letters | 0 | 3 | 3 |
| U.S. Regulations | Arbitration, Discipline and Enforcement | Hearings | 1 | 2 | 3 |
| U.S. Regulations | Arbitration, Discipline and Enforcement | Offers to settle | 1 | 2 | 3 |
| U.S. Regulations | Arbitration, Discipline and Enforcement | Appeals | 0 | 3 | 3 |
| U.S. Regulations | Arbitration, Discipline and Enforcement | Member Responsibility Actions | 1 | 2 | 3 |
| U.S. Regulations | Arbitration, Discipline and Enforcement | Commodity Exchange Act enforcement | 0 | 3 | 3 |

## Automated guardrail

`src/lib/minimumCoverage.test.ts` now fails if any taxonomy subtopic has fewer than 3 active verified QCMs.
