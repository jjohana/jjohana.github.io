import { syllabus } from "./syllabus";
import type { CourseChapter, CourseConcept, CourseExample, CourseFormula, CourseSubchapter, CourseTrap, SectionId, Subtopic } from "../types";

type LessonSeed = {
  overview?: string;
  keyPoints?: string[];
  definitions?: CourseConcept[];
  formulas?: CourseFormula[];
  examples?: CourseExample[];
  traps?: CourseTrap[];
  examTakeaways?: string[];
};

const marketDefaults: LessonSeed = {
  definitions: [
    { term: "Futures contract", definition: "A standardized exchange-traded agreement to buy or sell a commodity or financial instrument at a future date." },
    { term: "Long", definition: "A position that benefits when the futures price rises." },
    { term: "Short", definition: "A position that benefits when the futures price falls." },
    { term: "Offset", definition: "Closing a futures position by taking the opposite side in the same contract." }
  ],
  keyPoints: [
    "Start every question by identifying the position: long or short, futures or option, hedger or speculator.",
    "Keep cash-market results separate from futures-market results until the final effective price or net profit is requested.",
    "For calculation QCMs, write the formula before looking at the answer choices."
  ],
  examTakeaways: [
    "Direction matters: long gains when price rises, short gains when price falls.",
    "Contract size, tick value, and number of contracts must be applied before selecting a dollar answer.",
    "A hedging answer usually depends on both price direction and basis behavior."
  ]
};

const regulatoryDefaults: LessonSeed = {
  definitions: [
    { term: "CFTC", definition: "The federal regulator with statutory authority over U.S. commodity futures and swaps markets." },
    { term: "NFA", definition: "The self-regulatory organization for U.S. derivatives industry participants that enforces membership and conduct rules." },
    { term: "Registration", definition: "The status required for many firms and individuals before soliciting, accepting orders, handling funds, or giving commodity trading advice." },
    { term: "Supervision", definition: "The obligation of a member firm to oversee associated persons, branches, communications, accounts, and records." }
  ],
  keyPoints: [
    "Identify the actor first: AP, FCM, IB, CTA, CPO, customer, principal, exchange, NFA, or CFTC.",
    "Then identify the duty: registration, disclosure, supervision, recordkeeping, segregation, reporting, or dispute handling.",
    "Regulatory QCMs often test who is responsible, what must be disclosed, and when approval or written authorization is required."
  ],
  examTakeaways: [
    "Do not transfer a firm's supervisory duty to the customer or to another registrant unless the rule specifically does so.",
    "Written authorization, risk disclosure, and proper records are recurring Series 3 regulatory themes.",
    "When in doubt, choose the answer that protects customers, preserves records, and avoids misleading communications."
  ]
};

const topicSeeds: Record<string, LessonSeed> = {
  "futures-theory": {
    overview:
      "This chapter gives the language of the futures market. It explains why futures exist, how exchange trading differs from private forwards, and how clearing, delivery, open interest, carrying charges, and basis fit together.",
    definitions: [
      { term: "Forward contract", definition: "A privately negotiated agreement whose terms are customized and whose credit risk stays between the parties." },
      { term: "Clearinghouse", definition: "The entity that becomes the buyer to every seller and seller to every buyer after a trade is cleared." },
      { term: "Open interest", definition: "The number of outstanding futures contracts that have not been offset or fulfilled by delivery." },
      { term: "Basis", definition: "Cash price minus futures price." }
    ],
    examples: [
      {
        title: "Futures versus forwards",
        scenario: "A QCM asks why a futures contract is easier to offset than a forward contract.",
        steps: [
          "Check whether the contract is standardized and exchange traded.",
          "If it is a futures contract, the clearinghouse stands between counterparties.",
          "The trader can offset by entering the opposite futures trade instead of negotiating with the original counterparty."
        ],
        answer: "Exchange standardization and clearinghouse substitution make futures positions more liquid than forwards."
      }
    ],
    traps: [
      {
        title: "Confusing volume with open interest",
        explanation: "Volume counts contracts traded during a period. Open interest counts contracts still open after offsets and new positions are netted."
      }
    ]
  },
  "margins-settlement-delivery": {
    overview:
      "This chapter covers the mechanics that keep futures and options contracts financially sound: margin deposits, daily settlement, price limits, delivery rules, option premiums, exercise, and assignment.",
    definitions: [
      { term: "Initial margin", definition: "The performance bond deposited when a futures position is opened." },
      { term: "Maintenance margin", definition: "The minimum equity level below which a margin call is issued." },
      { term: "Variation margin", definition: "The daily mark-to-market debit or credit needed to restore account equity after price changes." },
      { term: "First notice day", definition: "The first day on which a delivery notice may be issued for a deliverable futures contract." }
    ],
    examples: [
      {
        title: "Margin call logic",
        scenario: "A trader deposits initial margin, the market moves against the position, and equity falls below maintenance.",
        steps: [
          "Compute futures loss from price change times contract size times number of contracts.",
          "Subtract the loss from account equity.",
          "If equity is below maintenance, the call usually restores the account to initial margin."
        ],
        answer: "The margin call is not the price loss alone; it is the amount needed to restore required equity."
      }
    ],
    traps: [
      {
        title: "Treating futures margin like a stock down payment",
        explanation: "Futures margin is a performance bond. It is not a partial purchase price and it does not create a loan balance like securities margin."
      }
    ]
  },
  "orders-accounts-analysis": {
    overview:
      "This chapter focuses on trade instructions, customer account handling, and market analysis. You need to know what each order type is designed to do and how technical and fundamental signals are interpreted.",
    definitions: [
      { term: "Market order", definition: "An order to trade immediately at the best available price." },
      { term: "Limit order", definition: "An order to buy at or below a stated price or sell at or above a stated price." },
      { term: "Stop order", definition: "An order that becomes a market order once the stop price is reached." },
      { term: "Open interest", definition: "Outstanding contracts that remain open after trading activity is netted." }
    ],
    examples: [
      {
        title: "Choosing an order type",
        scenario: "A customer wants protection if the market trades through a trigger price but accepts execution uncertainty afterward.",
        steps: [
          "A pure limit order controls price but may never execute.",
          "A stop order activates at the trigger and then seeks execution as a market order.",
          "A stop-limit order controls price after activation but adds non-execution risk."
        ],
        answer: "The correct order depends on whether price certainty or execution certainty matters more."
      }
    ],
    traps: [
      {
        title: "Stop orders do not guarantee the stop price",
        explanation: "Once triggered, a stop order becomes a market order and can be filled above or below the stop level in a fast market."
      }
    ]
  },
  "hedging-basis": {
    overview:
      "This chapter is the core of Market Knowledge. It explains how producers, users, investors, borrowers, lenders, importers, and exporters use futures to reduce price risk, and how basis changes affect the final result.",
    definitions: [
      { term: "Short hedge", definition: "Selling futures to protect an owned inventory or expected sale price." },
      { term: "Long hedge", definition: "Buying futures to protect an expected purchase price." },
      { term: "Strengthening basis", definition: "The cash price improves relative to the futures price. Numerically, basis rises." },
      { term: "Weakening basis", definition: "The cash price deteriorates relative to the futures price. Numerically, basis falls." }
    ],
    examples: [
      {
        title: "Effective price for a short hedge",
        scenario: "A producer sells futures, then later sells the cash commodity and buys back futures.",
        steps: [
          "Compute the cash sale price.",
          "Compute the futures gain or loss from the short futures position.",
          "Add futures gain to the cash sale price or subtract futures loss."
        ],
        answer: "Effective selling price = cash sale price + futures gain or - futures loss."
      }
    ],
    traps: [
      {
        title: "Wrong side of the hedge",
        explanation: "A future seller is usually a short hedger. A future buyer is usually a long hedger. Start from the commercial risk, not from the hoped-for market direction."
      }
    ]
  },
  spreading: {
    overview:
      "Spreads trade the price difference between related contracts rather than a single outright price. The exam tests whether you know which leg is bought or sold and whether the trader wants the spread to widen or narrow.",
    definitions: [
      { term: "Intramarket spread", definition: "A spread using different delivery months of the same commodity." },
      { term: "Intermarket spread", definition: "A spread using related but different commodities or instruments." },
      { term: "Bull spread", definition: "A spread that generally benefits from a strengthening nearby contract relative to the deferred contract." },
      { term: "Bear spread", definition: "A spread that generally benefits from a weakening nearby contract relative to the deferred contract." }
    ],
    examples: [
      {
        title: "Spread profit",
        scenario: "A trader buys the nearby contract and sells the deferred contract.",
        steps: [
          "Compute the opening spread between the two legs.",
          "Compute the closing spread using the same order of subtraction.",
          "A long spread profits if the spread moves in the trader's favor after contract size is applied."
        ],
        answer: "Always keep the sign convention consistent from open to close."
      }
    ],
    traps: [
      {
        title: "Looking at only one leg",
        explanation: "A spread question is about the net change between legs. One leg can lose money while the overall spread wins."
      }
    ]
  },
  "futures-speculation": {
    overview:
      "This chapter covers outright futures trading for profit. It emphasizes directional P&L, tick values, contract size, commissions, return on margin, and the use of protective orders.",
    definitions: [
      { term: "Tick", definition: "The minimum price fluctuation of a futures contract." },
      { term: "Tick value", definition: "The dollar value of one minimum tick movement." },
      { term: "Return on margin", definition: "Net profit divided by the margin deposit or equity committed." },
      { term: "Protective order", definition: "An order placed to limit loss or protect gains if the market moves unfavorably." }
    ],
    examples: [
      {
        title: "Futures P&L",
        scenario: "A trader buys contracts, the price rises, and the question asks for gross profit.",
        steps: [
          "Find the price change in contract units or ticks.",
          "Multiply by contract size or tick value.",
          "Multiply by the number of contracts, then adjust for commissions only if requested."
        ],
        answer: "Long futures profit from price increases; short futures profit from price decreases."
      }
    ],
    traps: [
      {
        title: "Forgetting the number of contracts",
        explanation: "Many wrong choices are the correct one-contract answer before multiplying by the number of contracts."
      }
    ]
  },
  "options-futures": {
    overview:
      "This chapter covers options on futures: calls, puts, premium, intrinsic value, time value, breakeven, maximum gain or loss, and option spreads used for hedging or speculation.",
    definitions: [
      { term: "Call", definition: "An option giving the holder the right to buy the underlying futures contract at the strike price." },
      { term: "Put", definition: "An option giving the holder the right to sell the underlying futures contract at the strike price." },
      { term: "Intrinsic value", definition: "The amount by which an option is in the money." },
      { term: "Time value", definition: "The portion of premium above intrinsic value." }
    ],
    examples: [
      {
        title: "Option breakeven",
        scenario: "A buyer pays premium for a futures call or put and asks where profit begins.",
        steps: [
          "For a call, add the premium to the strike price.",
          "For a put, subtract the premium from the strike price.",
          "Use the premium in contract-value terms if the answer choices are dollars."
        ],
        answer: "Long call breakeven = strike + premium. Long put breakeven = strike - premium."
      }
    ],
    traps: [
      {
        title: "Maximum loss for a long option",
        explanation: "The buyer's maximum loss is the premium paid, even if the option expires worthless."
      }
    ]
  },
  "general-regulatory": {
    overview:
      "This chapter sets the regulatory framework: who regulates, who must register, when NFA membership matters, and which account-opening, disclosure, and customer-protection duties apply.",
    examples: [
      {
        title: "Identify the registrant",
        scenario: "A question describes a person soliciting futures orders or managing customer accounts.",
        steps: [
          "Classify the role before reading the choices.",
          "Determine whether the person or firm handles funds, gives advice, operates a pool, or solicits orders.",
          "Match the activity to AP, FCM, IB, CTA, or CPO registration concepts."
        ],
        answer: "The correct answer usually follows the activity, not the job title used casually in the stem."
      }
    ],
    traps: [
      {
        title: "Bylaw 1101 style trap",
        explanation: "Members must be alert to doing futures business with required registrants who are not properly registered or NFA members."
      }
    ]
  },
  "fcm-ib": {
    overview:
      "This chapter covers firm-level duties for FCMs and IBs: accepting orders, handling customer funds, margin collection, account records, communications, complaints, AML, time-stamping, and supervision.",
    definitions: [
      { term: "FCM", definition: "A Futures Commission Merchant solicits or accepts futures orders and accepts money or property to margin or secure those trades." },
      { term: "IB", definition: "An Introducing Broker solicits or accepts orders but does not accept customer funds to margin or secure futures trades." },
      { term: "Guaranteed IB", definition: "An IB whose obligations are guaranteed by an FCM under a guarantee agreement." },
      { term: "Independent IB", definition: "An IB that is not guaranteed and must meet its own applicable financial requirements." }
    ],
    traps: [
      {
        title: "IB funds trap",
        explanation: "A core distinction is whether the firm accepts customer money or property. That points toward FCM treatment rather than IB-only treatment."
      }
    ]
  },
  "cpo-cta": {
    overview:
      "This chapter covers advisers and pool operators. The exam tests disclosure documents, performance presentation, fees, conflicts, trading-program descriptions, recordkeeping, and bunched orders.",
    definitions: [
      { term: "CTA", definition: "A Commodity Trading Advisor generally advises others about commodity interest trading for compensation." },
      { term: "CPO", definition: "A Commodity Pool Operator generally operates or solicits for a pooled vehicle trading commodity interests." },
      { term: "Disclosure document", definition: "A document that presents required risk, fee, principal, performance, conflict, and trading-program information." },
      { term: "Bunched order", definition: "An order placed for multiple accounts that must be allocated fairly and according to disclosed procedures." }
    ],
    traps: [
      {
        title: "Performance presentation trap",
        explanation: "Promotional or disclosure material must not cherry-pick results or omit material information needed to make the presentation fair."
      }
    ]
  },
  "arbitration-discipline": {
    overview:
      "This chapter explains dispute resolution and enforcement. It covers arbitration, reparations, NFA disciplinary steps, hearings, settlements, appeals, member responsibility actions, penalties, subpoenas, and Commodity Exchange Act enforcement.",
    definitions: [
      { term: "Arbitration", definition: "A private dispute-resolution forum used for many customer-member disputes." },
      { term: "Reparations", definition: "A CFTC customer-claim procedure for damages under the Commodity Exchange Act." },
      { term: "Disciplinary proceeding", definition: "An enforcement action that can lead to sanctions after complaint, hearing, settlement, or appeal steps." },
      { term: "Member responsibility action", definition: "An emergency or protective NFA action used when continued activity presents risk to customers or markets." }
    ],
    traps: [
      {
        title: "Complaint versus disciplinary action",
        explanation: "A customer complaint record is not the same thing as a formal disciplinary complaint, but both can trigger duties and records."
      }
    ]
  }
};

const formulas: Record<string, CourseFormula[]> = {
  basis: [
    { label: "Basis", expression: "Basis = cash price - futures price", explanation: "A negative basis means futures are above cash. A positive basis means cash is above futures." }
  ],
  hedge: [
    { label: "Short hedge effective price", expression: "Effective sale price = cash sale price + futures gain - futures loss", explanation: "A short futures hedge offsets falling cash prices with futures gains." },
    { label: "Long hedge effective price", expression: "Effective purchase price = cash purchase price - futures gain + futures loss", explanation: "A long futures hedge offsets rising cash prices with futures gains." }
  ],
  margin: [
    { label: "Margin call", expression: "Call amount = initial margin requirement - current account equity", explanation: "After equity falls below maintenance, the account is commonly restored to initial margin." }
  ],
  pnl: [
    { label: "Futures P&L", expression: "P&L = price change x contract size x contracts", explanation: "Use a positive sign for favorable moves and a negative sign for adverse moves." },
    { label: "Tick method", expression: "P&L = ticks moved x tick value x contracts", explanation: "Convert the quote movement into ticks before multiplying by tick value." }
  ],
  options: [
    { label: "Call intrinsic value", expression: "max(0, futures price - strike price)", explanation: "A call is in the money when the futures price is above the strike." },
    { label: "Put intrinsic value", expression: "max(0, strike price - futures price)", explanation: "A put is in the money when the futures price is below the strike." },
    { label: "Long call breakeven", expression: "strike price + premium", explanation: "Above this level, the long call begins to show net profit before transaction costs." },
    { label: "Long put breakeven", expression: "strike price - premium", explanation: "Below this level, the long put begins to show net profit before transaction costs." }
  ],
  spread: [
    { label: "Spread change", expression: "Profit depends on closing spread - opening spread", explanation: "Use the same leg order at open and close, then apply contract size and the number of spreads." }
  ],
  return: [
    { label: "Return on margin", expression: "Return = net profit / margin deposit", explanation: "The denominator is the equity committed, not the full contract notional value." }
  ]
};

const subtopicOverrides: Record<string, LessonSeed> = {
  "futures-theory/futures-vs-forwards": {
    overview:
      "Futures and forwards both lock in future price exposure, but futures are standardized, exchange traded, cleared, marked to market, and usually easy to offset. Forwards are private contracts with customized terms and counterparty credit exposure.",
    keyPoints: [
      "Futures contracts use exchange rules and clearinghouse performance guarantees.",
      "Forwards are negotiated privately and are usually harder to offset.",
      "A QCM may test liquidity, standardization, counterparty risk, or daily settlement."
    ],
    examTakeaways: ["Futures = standardized and cleared. Forwards = customized and bilateral."]
  },
  "futures-theory/clearinghouse": {
    overview:
      "The clearinghouse reduces counterparty risk by becoming the legal counterparty after a trade is matched and cleared. It also manages daily settlement and margin flows.",
    keyPoints: [
      "The clearinghouse is buyer to every seller and seller to every buyer.",
      "Members post margin and settle gains and losses through the clearing system.",
      "Clearing does not remove market risk; it manages performance risk."
    ]
  },
  "futures-theory/general-futures-terminology": {
    overview:
      "This subchapter collects recurring futures vocabulary: contract month, settlement price, offset, open interest, volume, delivery, cash market, and futures market.",
    keyPoints: [
      "Volume is trading activity during a period.",
      "Open interest is the number of contracts still outstanding.",
      "An offset closes futures exposure without making or taking delivery."
    ]
  },
  "futures-theory/normal-vs-inverted-markets": {
    overview:
      "A normal market generally has deferred prices above nearby prices because carrying charges are reflected. An inverted market has nearby prices above deferred prices, often due to tight current supply.",
    keyPoints: [
      "Normal market: deferred higher than nearby.",
      "Inverted market: nearby higher than deferred.",
      "Spreading and basis QCMs often depend on recognizing the market structure first."
    ]
  },
  "futures-theory/carrying-charges": {
    overview:
      "Carrying charges are costs of holding a commodity over time, such as storage, insurance, financing, and handling. They help explain why deferred futures may trade above nearby futures.",
    keyPoints: [
      "Carrying charges support normal market price relationships.",
      "Full carry means the futures spread reflects the cost of holding the commodity.",
      "A tight supply situation can overwhelm carrying-charge relationships."
    ]
  },
  "margins-settlement-delivery/initial-margin": { formulas: formulas.margin },
  "margins-settlement-delivery/maintenance-margin": { formulas: formulas.margin },
  "margins-settlement-delivery/variation-margin": {
    overview:
      "Variation margin is the daily mark-to-market flow. Futures accounts are credited or debited as settlement prices change, so gains and losses are recognized daily.",
    formulas: formulas.pnl
  },
  "margins-settlement-delivery/margin-calls": { formulas: formulas.margin },
  "margins-settlement-delivery/price-limits": {
    overview:
      "Price limits restrict how far some futures contracts can move in one trading session. A lock limit market may prevent execution at prices beyond the permitted range.",
    keyPoints: [
      "Limit rules are contract and exchange specific.",
      "A lock limit can trap orders because trading cannot occur outside the limit range.",
      "Expanded limits may apply after certain limit moves."
    ]
  },
  "margins-settlement-delivery/first-notice-day": {
    overview:
      "First notice day is the first date on which a short may issue notice of intent to deliver. Long traders who do not want delivery usually exit before delivery risk becomes active.",
    keyPoints: [
      "Delivery risk is managed by knowing first notice day and last trading day.",
      "Speculators typically offset before delivery obligations arise.",
      "Delivery questions often ask which side can initiate delivery notice."
    ]
  },
  "orders-accounts-analysis/market-orders": {
    overview: "A market order seeks immediate execution at the best available price. It prioritizes execution speed over price certainty."
  },
  "orders-accounts-analysis/stop-orders": {
    overview: "A stop order becomes a market order after the stop price is touched or passed. It can be used to enter on momentum or protect an existing position.",
    traps: [{ title: "Stop price is not a guaranteed fill", explanation: "After activation, the fill is at the available market price, which can be worse than the stop." }]
  },
  "orders-accounts-analysis/stop-limit-orders": {
    overview: "A stop-limit order becomes a limit order after the stop price is reached. It controls the execution price but may not execute."
  },
  "orders-accounts-analysis/market-if-touched": {
    overview: "A market-if-touched order becomes a market order when the market trades at a favorable trigger price. It is often confused with a stop order, which is triggered by an adverse or breakout level."
  },
  "orders-accounts-analysis/technical-analysis": {
    overview: "Technical analysis studies price behavior, volume, open interest, trends, support, resistance, and chart patterns rather than supply-demand fundamentals."
  },
  "orders-accounts-analysis/fundamental-analysis": {
    overview: "Fundamental analysis studies economic supply and demand: production, inventories, weather, interest rates, currency values, consumption, and macro conditions."
  },
  "orders-accounts-analysis/volume": {
    overview: "Volume measures how many contracts trade during a session or period. It does not measure how many contracts remain open."
  },
  "orders-accounts-analysis/open-interest": {
    overview: "Open interest rises when new longs and new shorts create contracts, and falls when both sides close existing positions."
  },
  "hedging-basis/short-hedges": { formulas: formulas.hedge },
  "hedging-basis/long-hedges": { formulas: formulas.hedge },
  "hedging-basis/basis-calculation": { formulas: formulas.basis },
  "hedging-basis/strengthening-basis": {
    overview:
      "A strengthening basis means the cash price improves relative to the futures price. Short hedgers generally benefit, while long hedgers are generally hurt.",
    formulas: [...formulas.basis, ...formulas.hedge]
  },
  "hedging-basis/weakening-basis": {
    overview:
      "A weakening basis means the cash price deteriorates relative to the futures price. Long hedgers generally benefit, while short hedgers are generally hurt.",
    formulas: [...formulas.basis, ...formulas.hedge]
  },
  "hedging-basis/interest-rate-hedges": {
    overview:
      "Interest-rate futures hedges translate a borrowing, lending, or portfolio risk into a futures position. Rising rates generally mean falling debt futures prices; falling rates generally mean rising debt futures prices.",
    keyPoints: [
      "A borrower worried about rising rates may use futures to protect against falling bond or note futures prices.",
      "A lender or investor worried about falling yields may need the opposite exposure.",
      "Always separate interest-rate direction from futures-price direction."
    ]
  },
  "hedging-basis/currency-hedges": {
    overview:
      "Currency futures hedges protect future foreign-currency receipts or payments. Importers and exporters choose long or short futures based on whether they must buy or will receive the foreign currency."
  },
  "hedging-basis/stock-index-hedges": {
    overview:
      "Stock-index futures can hedge diversified equity portfolio exposure. A long stock portfolio generally uses short index futures to protect against market declines."
  },
  "spreading/narrowing-spread": { formulas: formulas.spread },
  "spreading/widening-spread": { formulas: formulas.spread },
  "spreading/intramarket-spreads": { formulas: formulas.spread },
  "spreading/interdelivery-spreads": { formulas: formulas.spread },
  "spreading/intermarket-spreads": { formulas: formulas.spread },
  "spreading/bull-spreads": { formulas: formulas.spread },
  "spreading/bear-spreads": { formulas: formulas.spread },
  "futures-speculation/gross-profit-loss": { formulas: formulas.pnl },
  "futures-speculation/tick-value": { formulas: formulas.pnl },
  "futures-speculation/contract-size": { formulas: formulas.pnl },
  "futures-speculation/multiple-contract-positions": { formulas: formulas.pnl },
  "futures-speculation/return-on-margin-equity": { formulas: [...formulas.pnl, ...formulas.return] },
  "options-futures/long-calls": { formulas: formulas.options },
  "options-futures/long-puts": { formulas: formulas.options },
  "options-futures/short-calls": { formulas: formulas.options },
  "options-futures/short-puts": { formulas: formulas.options },
  "options-futures/intrinsic-value": { formulas: formulas.options },
  "options-futures/time-value": {
    formulas: [{ label: "Time value", expression: "Time value = premium - intrinsic value", explanation: "Any premium above the in-the-money amount is time value." }]
  },
  "options-futures/option-breakevens": { formulas: formulas.options },
  "options-futures/option-profit": { formulas: formulas.options },
  "options-futures/max-profit-loss": { formulas: formulas.options },
  "options-futures/bull-call-spreads": { formulas: formulas.options },
  "options-futures/bear-call-spreads": { formulas: formulas.options },
  "options-futures/bull-put-spreads": { formulas: formulas.options },
  "options-futures/bear-put-spreads": { formulas: formulas.options },
  "general-regulatory/cftc-registration": {
    overview: "CFTC registration concepts connect regulated futures activities with the persons and firms that must be registered before acting for customers."
  },
  "general-regulatory/nfa-membership": {
    overview: "NFA membership connects registered derivatives professionals to NFA conduct, supervision, disclosure, and enforcement rules."
  },
  "general-regulatory/associated-person": {
    overview: "An AP is an individual who solicits orders, customers, or funds, or supervises persons engaged in those activities, for a registrant."
  },
  "general-regulatory/risk-disclosure": {
    overview: "Risk disclosure ensures customers understand that futures and options involve leverage, rapid losses, and market-risk exposure before trading."
  },
  "general-regulatory/discretionary-accounts": {
    overview: "Discretionary authority lets a firm or person decide trades for a customer. It requires proper written authorization and supervisory review."
  },
  "fcm-ib/customer-complaints": {
    overview: "Customer complaints must be handled and retained under firm procedures. They may reveal supervision, communication, or account-handling problems."
  },
  "fcm-ib/time-stamping": {
    overview: "Time-stamping preserves the chronology of order receipt, transmission, execution, and allocation so that trade handling can be reconstructed."
  },
  "fcm-ib/promotional-material": {
    overview: "Promotional material must be fair, balanced, and not misleading. Claims, performance references, and risk statements must not omit material facts."
  },
  "fcm-ib/accepting-customer-funds": {
    overview: "Accepting customer funds is a major dividing line between FCM and IB activities. Customer money must be handled under strict customer-protection rules."
  },
  "cpo-cta/disclosure-documents": {
    overview: "Disclosure documents present the trading program, risks, fees, conflicts, principals, performance, and other information needed before a pool or advisory program is offered."
  },
  "cpo-cta/bunched-orders": {
    overview: "Bunched orders combine multiple customer orders for efficient execution. Allocations must be fair, timely, and consistent with disclosed procedures."
  },
  "arbitration-discipline/arbitration-procedures": {
    overview: "Arbitration procedures provide a forum for resolving many futures disputes. Questions often test which forum or process applies and how claims move forward."
  },
  "arbitration-discipline/disciplinary-procedures": {
    overview: "Disciplinary procedures address rule violations through investigation, complaint, hearing, settlement, appeal, and sanctions where appropriate."
  },
  "arbitration-discipline/commodity-exchange-act-enforcement": {
    overview: "Commodity Exchange Act enforcement covers the statutory basis for anti-fraud, manipulation, registration, reporting, and market-integrity actions."
  }
};

function titleAsPhrase(title: string) {
  return title.charAt(0).toLowerCase() + title.slice(1);
}

function genericOverview(sectionId: SectionId, topicTitle: string, subtopicTitle: string) {
  if (sectionId === "market_knowledge") {
    return `${subtopicTitle} is a testable part of ${topicTitle}. Study it by tying the vocabulary to a position, a price movement, and the requested result. For calculations, identify the units first and only then compare the answer choices.`;
  }
  return `${subtopicTitle} is a testable regulatory concept within ${topicTitle}. Study it by identifying the regulated actor, the customer-protection purpose, the required disclosure or record, and the consequence of failing to follow the rule.`;
}

function genericExample(sectionId: SectionId, topicTitle: string, subtopicTitle: string): CourseExample {
  if (sectionId === "market_knowledge") {
    return {
      title: `${subtopicTitle} in a QCM`,
      scenario: `A practice question gives a futures, options, hedge, spread, or market-analysis situation involving ${titleAsPhrase(subtopicTitle)}.`,
      steps: [
        "Identify the instrument and the position before doing arithmetic.",
        "Translate the market move into gain, loss, basis movement, premium value, or order behavior.",
        "Apply contract size, tick value, premium, or number of contracts if the answer is in dollars."
      ],
      answer: `The best answer is the one that applies ${titleAsPhrase(subtopicTitle)} within ${topicTitle}, not the one that merely sounds familiar.`
    };
  }
  return {
    title: `${subtopicTitle} in a regulatory QCM`,
    scenario: `A practice question describes a customer, registrant, supervisor, communication, disclosure, or enforcement fact pattern involving ${titleAsPhrase(subtopicTitle)}.`,
    steps: [
      "Classify the actor: AP, FCM, IB, CTA, CPO, customer, NFA, CFTC, or exchange.",
      "Identify the duty: registration, disclosure, supervision, recordkeeping, funds handling, or dispute process.",
      "Reject choices that are misleading, undocumented, unsupervised, or inconsistent with customer protection."
    ],
    answer: `The correct answer connects ${titleAsPhrase(subtopicTitle)} to the responsible party and the required regulatory safeguard.`
  };
}

function genericTrap(sectionId: SectionId, subtopicTitle: string): CourseTrap {
  if (sectionId === "market_knowledge") {
    return {
      title: `Trap: reading ${titleAsPhrase(subtopicTitle)} as vocabulary only`,
      explanation: "Market Knowledge QCMs usually turn vocabulary into a position, calculation, or price relationship. If there is a number, check units and direction before choosing."
    };
  }
  return {
    title: `Trap: ignoring who has the duty`,
    explanation: "Regulatory QCMs often include several plausible actors. The correct answer normally belongs to the registrant or member with the rule-based obligation."
  };
}

function formulasFor(topicId: string, subtopicId: string) {
  const key = `${topicId}/${subtopicId}`;
  if (subtopicOverrides[key]?.formulas) return subtopicOverrides[key].formulas ?? [];
  if (topicId === "hedging-basis") return formulas.hedge;
  if (topicId === "futures-speculation") return formulas.pnl;
  if (topicId === "options-futures") return formulas.options;
  if (topicId === "spreading") return formulas.spread;
  return [];
}

function mergeSeed(base: LessonSeed, override: LessonSeed): Required<LessonSeed> {
  return {
    overview: override.overview ?? base.overview ?? "",
    keyPoints: override.keyPoints ?? base.keyPoints ?? [],
    definitions: override.definitions ?? base.definitions ?? [],
    formulas: override.formulas ?? base.formulas ?? [],
    examples: override.examples ?? base.examples ?? [],
    traps: override.traps ?? base.traps ?? [],
    examTakeaways: override.examTakeaways ?? base.examTakeaways ?? []
  };
}

function buildSubchapter(sectionId: SectionId, topicId: string, topicTitle: string, subtopic: Subtopic): CourseSubchapter {
  const topicSeed = topicSeeds[topicId] ?? (sectionId === "market_knowledge" ? marketDefaults : regulatoryDefaults);
  const baseSeed = mergeSeed(sectionId === "market_knowledge" ? marketDefaults : regulatoryDefaults, topicSeed);
  const override = subtopicOverrides[`${topicId}/${subtopic.id}`] ?? {};
  const merged = mergeSeed(baseSeed, override);
  const overview = merged.overview || genericOverview(sectionId, topicTitle, subtopic.title);
  const formulasToUse = formulasFor(topicId, subtopic.id);

  return {
    id: `${topicId}__${subtopic.id}`,
    sectionId,
    topicId,
    subtopicId: subtopic.id,
    title: subtopic.title,
    overview,
    keyPoints:
      merged.keyPoints.length > 0
        ? merged.keyPoints
        : [
            `${subtopic.title} belongs to ${topicTitle}; learn the rule or calculation in that context.`,
            "Translate the fact pattern into the tested concept before reading the choices.",
            "Use the explanation after each QCM to reinforce the rule and eliminate tempting distractors."
          ],
    definitions: merged.definitions,
    formulas: formulasToUse,
    examples: merged.examples.length > 0 ? merged.examples : [genericExample(sectionId, topicTitle, subtopic.title)],
    traps: merged.traps.length > 0 ? merged.traps : [genericTrap(sectionId, subtopic.title)],
    examTakeaways: merged.examTakeaways,
    linkedQuestions: []
  };
}

export const baseCourseChapters: CourseChapter[] = syllabus.flatMap((section) =>
  section.topics.map((topic) => ({
    id: topic.id,
    sectionId: section.id,
    topicId: topic.id,
    title: topic.title,
    overview:
      topicSeeds[topic.id]?.overview ??
      `${topic.title} is a Series 3 chapter in ${section.title}. Work through the subchapters, then launch filtered QCM practice from each topic to reinforce recall.`,
    subchapters: topic.subtopics.map((subtopic) => buildSubchapter(section.id, topic.id, topic.title, subtopic))
  }))
);
