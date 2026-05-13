import type { Section, SectionId, Topic } from "../types";

export const syllabus: Section[] = [
  {
    id: "market_knowledge",
    title: "Market Knowledge",
    shortTitle: "Market",
    topics: [
      {
        id: "futures-theory",
        sectionId: "market_knowledge",
        title: "Futures Trading Theory and Basic Functions Terminology",
        approxMockQuestions: 15,
        subtopics: [
          { id: "futures-vs-forwards", title: "Futures vs forwards" },
          { id: "clearinghouse", title: "Clearinghouse" },
          { id: "offsetting-positions", title: "Offsetting positions" },
          { id: "delivery-provisions", title: "Delivery provisions" },
          { id: "basis-grade-premiums-discounts", title: "Basis grade, premiums, discounts" },
          { id: "normal-vs-inverted-markets", title: "Normal vs inverted markets" },
          { id: "carrying-charges", title: "Carrying charges" },
          { id: "hedging-theory", title: "Hedging theory" },
          { id: "speculative-theory", title: "Speculative theory" },
          { id: "general-futures-terminology", title: "General futures terminology" },
          { id: "general-options-terminology", title: "General options terminology" }
        ]
      },
      {
        id: "margins-settlement-delivery",
        sectionId: "market_knowledge",
        title: "Futures Margins, Options Premiums, Price Limits, Settlement, Delivery, Exercise, Assignment",
        approxMockQuestions: 15,
        subtopics: [
          { id: "initial-margin", title: "Initial margin" },
          { id: "maintenance-margin", title: "Maintenance margin" },
          { id: "variation-margin", title: "Variation margin" },
          { id: "margin-calls", title: "Margin calls" },
          { id: "performance-bond", title: "Performance bond concept" },
          { id: "futures-vs-securities-margin", title: "Futures margin vs securities margin" },
          { id: "option-premiums", title: "Option premiums" },
          { id: "intrinsic-value", title: "Intrinsic value" },
          { id: "time-value", title: "Time value" },
          { id: "delta", title: "Delta" },
          { id: "price-limits", title: "Price limits" },
          { id: "expanded-limits", title: "Expanded limits" },
          { id: "lock-limits", title: "Lock limits" },
          { id: "circuit-breakers", title: "Circuit breakers" },
          { id: "first-notice-day", title: "First notice day" },
          { id: "delivery-notices", title: "Delivery notices" },
          { id: "physical-delivery", title: "Physical delivery" },
          { id: "warehouse-receipts", title: "Warehouse receipts" },
          { id: "efps", title: "EFPs" },
          { id: "exercise-assignment", title: "Exercise and assignment" }
        ]
      },
      {
        id: "orders-accounts-analysis",
        sectionId: "market_knowledge",
        title: "Types of Orders, Customer Accounts, Price Analysis",
        approxMockQuestions: 10,
        subtopics: [
          { id: "market-orders", title: "Market orders" },
          { id: "stop-orders", title: "Stop orders" },
          { id: "stop-limit-orders", title: "Stop-limit orders" },
          { id: "market-if-touched", title: "Market-if-touched orders" },
          { id: "gtc-orders", title: "GTC orders" },
          { id: "fok-orders", title: "FOK orders" },
          { id: "moc-orders", title: "MOC orders" },
          { id: "oco-orders", title: "OCO orders" },
          { id: "technical-analysis", title: "Technical analysis" },
          { id: "support-resistance", title: "Support and resistance" },
          { id: "gaps", title: "Gaps" },
          { id: "volume", title: "Volume" },
          { id: "open-interest", title: "Open interest" },
          { id: "fundamental-analysis", title: "Fundamental analysis" },
          { id: "supply-demand", title: "Supply and demand" },
          { id: "interest-rate-analysis", title: "Interest rate analysis" },
          { id: "yield-curves", title: "Yield curves" }
        ]
      },
      {
        id: "hedging-basis",
        sectionId: "market_knowledge",
        title: "Basic Hedging, Basis Calculations, Hedging Futures",
        approxMockQuestions: 20,
        subtopics: [
          { id: "short-hedges", title: "Short hedges" },
          { id: "long-hedges", title: "Long hedges" },
          { id: "anticipatory-hedges", title: "Anticipatory hedges" },
          { id: "long-the-basis", title: "Long the basis" },
          { id: "short-the-basis", title: "Short the basis" },
          { id: "basis-calculation", title: "Basis calculation" },
          { id: "strengthening-basis", title: "Strengthening basis" },
          { id: "weakening-basis", title: "Weakening basis" },
          { id: "transportation-costs", title: "Transportation costs" },
          { id: "deliverable-grade-differences", title: "Deliverable grade differences" },
          { id: "financial-futures-basis", title: "Financial futures basis" },
          { id: "net-price-received-paid", title: "Net price received or paid" },
          { id: "commodity-hedges", title: "Commodity hedge examples" },
          { id: "interest-rate-hedges", title: "Interest rate futures hedge examples" },
          { id: "currency-hedges", title: "Currency futures hedge examples" },
          { id: "stock-index-hedges", title: "Stock index futures hedge examples" }
        ]
      },
      {
        id: "spreading",
        sectionId: "market_knowledge",
        title: "Spreading",
        approxMockQuestions: 10,
        subtopics: [
          { id: "spread-execution", title: "Spread execution" },
          { id: "narrowing-spread", title: "Narrowing spread" },
          { id: "widening-spread", title: "Widening spread" },
          { id: "normal-market-strategies", title: "Normal-market strategies" },
          { id: "inverted-market-strategies", title: "Inverted-market strategies" },
          { id: "carrying-charge-spreads", title: "Carrying-charge spreads" },
          { id: "intramarket-spreads", title: "Intramarket spreads" },
          { id: "interdelivery-spreads", title: "Interdelivery spreads" },
          { id: "bull-spreads", title: "Bull spreads" },
          { id: "bear-spreads", title: "Bear spreads" },
          { id: "intermarket-spreads", title: "Intermarket spreads" }
        ]
      },
      {
        id: "futures-speculation",
        sectionId: "market_knowledge",
        title: "Speculating in Futures",
        approxMockQuestions: 10,
        subtopics: [
          { id: "gross-profit-loss", title: "Gross profit and loss" },
          { id: "tick-value", title: "Tick value" },
          { id: "contract-size", title: "Contract size" },
          { id: "commissions", title: "Commissions" },
          { id: "single-contract-positions", title: "Single-contract positions" },
          { id: "multiple-contract-positions", title: "Multiple-contract positions" },
          { id: "return-on-margin-equity", title: "Return on margin equity" },
          { id: "selecting-speculative-trades", title: "Selecting speculative trades" },
          { id: "protective-orders", title: "Protective orders" }
        ]
      },
      {
        id: "options-futures",
        sectionId: "market_knowledge",
        title: "Option Hedging, Speculating, Spreading",
        approxMockQuestions: 20,
        subtopics: [
          { id: "long-calls", title: "Long calls" },
          { id: "long-puts", title: "Long puts" },
          { id: "short-calls", title: "Short calls" },
          { id: "short-puts", title: "Short puts" },
          { id: "premium-risk", title: "Premium risk" },
          { id: "short-option-risk", title: "Short-option risk" },
          { id: "long-put-hedge", title: "Long put as alternative to short futures hedge" },
          { id: "long-call-hedge", title: "Long call as alternative to long futures hedge" },
          { id: "option-breakevens", title: "Breakeven calculations" },
          { id: "option-profit", title: "Profit calculations" },
          { id: "option-return-equity", title: "Return-on-equity calculations" },
          { id: "protective-calls", title: "Protective calls" },
          { id: "protective-puts", title: "Protective puts" },
          { id: "covered-calls", title: "Covered calls" },
          { id: "bull-call-spreads", title: "Bull call spreads" },
          { id: "bear-call-spreads", title: "Bear call spreads" },
          { id: "bull-put-spreads", title: "Bull put spreads" },
          { id: "bear-put-spreads", title: "Bear put spreads" },
          { id: "calendar-spreads", title: "Calendar spreads" },
          { id: "arbitrage-spreads", title: "Arbitrage spreads" },
          { id: "max-profit-loss", title: "Maximum profit/loss calculations" }
        ]
      }
    ]
  },
  {
    id: "us_regulations",
    title: "U.S. Regulations",
    shortTitle: "Regulations",
    topics: [
      {
        id: "general-regulatory",
        sectionId: "us_regulations",
        title: "General Regulatory Topics",
        approxMockQuestions: 10,
        subtopics: [
          { id: "cftc-registration", title: "CFTC registration" },
          { id: "nfa-membership", title: "NFA membership" },
          { id: "floor-broker", title: "Floor Broker" },
          { id: "floor-trader", title: "Floor Trader" },
          { id: "associated-person", title: "Associated Person" },
          { id: "commodity-pool-operator", title: "Commodity Pool Operator" },
          { id: "commodity-trading-advisor", title: "Commodity Trading Advisor" },
          { id: "introducing-broker", title: "Introducing Broker" },
          { id: "futures-commission-merchant", title: "Futures Commission Merchant" },
          { id: "registration-exemptions", title: "Registration exemptions" },
          { id: "just-equitable-principles", title: "Just and equitable principles of trade" },
          { id: "account-opening", title: "Account opening" },
          { id: "customer-information", title: "Customer information" },
          { id: "risk-disclosure", title: "Risk disclosure" },
          { id: "customer-agreements", title: "Customer agreements" },
          { id: "discretionary-accounts", title: "Discretionary accounts" },
          { id: "written-authorization", title: "Written authorization" },
          { id: "account-supervision-review", title: "Account supervision and review" },
          { id: "position-reporting", title: "Position reporting" },
          { id: "speculative-position-limits", title: "Speculative position limits" }
        ]
      },
      {
        id: "fcm-ib",
        sectionId: "us_regulations",
        title: "FCM / IB Regulations",
        approxMockQuestions: 5,
        subtopics: [
          { id: "guaranteed-ibs", title: "Guaranteed Introducing Brokers" },
          { id: "independent-ibs", title: "Independent Introducing Brokers" },
          { id: "guarantor-fcm-responsibilities", title: "Guarantor FCM responsibilities" },
          { id: "accepting-customer-funds", title: "Accepting customer funds" },
          { id: "net-capital-requirements", title: "Net capital requirements" },
          { id: "financial-reports", title: "Financial reports" },
          { id: "margin-deposit-collection", title: "Margin deposit collection" },
          { id: "anti-money-laundering", title: "Anti-money laundering and SAR confidentiality" },
          { id: "customer-complaints", title: "Customer complaints" },
          { id: "account-adjustments", title: "Account adjustments" },
          { id: "time-stamping", title: "Time-stamping" },
          { id: "promotional-material", title: "Promotional material" },
          { id: "transaction-cost-disclosure", title: "Transaction cost disclosure" }
        ]
      },
      {
        id: "cpo-cta",
        sectionId: "us_regulations",
        title: "CPO / CTA Regulations",
        approxMockQuestions: 3,
        subtopics: [
          { id: "cpo-regulations", title: "CPO regulations" },
          { id: "cta-regulations", title: "CTA regulations" },
          { id: "disclosure-documents", title: "Disclosure documents" },
          { id: "upfront-fees", title: "Upfront fees" },
          { id: "performance-records", title: "Performance records" },
          { id: "required-disclosure-statements", title: "Required disclosure statements" },
          { id: "trading-program-descriptions", title: "Trading program descriptions" },
          { id: "principal-backgrounds", title: "Principal backgrounds" },
          { id: "conflicts-of-interest", title: "Conflicts of interest" },
          { id: "recordkeeping", title: "Recordkeeping" },
          { id: "bunched-orders", title: "Bunched orders" },
          { id: "public-communications", title: "Public communications" },
          { id: "cpo-cta-promotional-material", title: "Promotional material" }
        ]
      },
      {
        id: "arbitration-discipline",
        sectionId: "us_regulations",
        title: "Arbitration, Discipline and Enforcement",
        approxMockQuestions: 2,
        subtopics: [
          { id: "arbitration-procedures", title: "Arbitration procedures" },
          { id: "reparations-procedures", title: "CFTC reparations procedures" },
          { id: "disciplinary-procedures", title: "Disciplinary procedures" },
          { id: "formal-complaints", title: "Formal complaints" },
          { id: "warning-letters", title: "Warning letters" },
          { id: "hearings", title: "Hearings" },
          { id: "offers-to-settle", title: "Offers to settle" },
          { id: "appeals", title: "Appeals" },
          { id: "member-responsibility-actions", title: "Member Responsibility Actions" },
          { id: "penalties", title: "Penalties" },
          { id: "commodity-exchange-act-enforcement", title: "Commodity Exchange Act enforcement" }
        ]
      }
    ]
  }
];

export const allTopics = syllabus.flatMap((section) => section.topics);
export const allSubtopics = allTopics.flatMap((topic) =>
  topic.subtopics.map((subtopic) => ({ ...subtopic, topicId: topic.id, sectionId: topic.sectionId }))
);

export function getSection(sectionId: SectionId): Section {
  const section = syllabus.find((item) => item.id === sectionId);
  if (!section) throw new Error(`Unknown section: ${sectionId}`);
  return section;
}

export function getTopic(topicId: string): Topic | undefined {
  return allTopics.find((topic) => topic.id === topicId);
}

export function getSubtopic(topicId: string, subtopicId: string) {
  return getTopic(topicId)?.subtopics.find((subtopic) => subtopic.id === subtopicId);
}

export function sectionLabel(sectionId: SectionId): string {
  return getSection(sectionId).title;
}

export function topicLabel(topicId: string): string {
  return getTopic(topicId)?.title ?? topicId;
}

export function subtopicLabel(topicId: string, subtopicId: string): string {
  return getSubtopic(topicId, subtopicId)?.title ?? subtopicId;
}
