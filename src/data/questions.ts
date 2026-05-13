import type { Question } from "../types";

const createdAt = "2026-05-13T00:00:00.000Z";

export const sampleQuestions: Question[] = [
  {
    id: "mk-hedging-basis-0001",
    sectionId: "market_knowledge",
    topicId: "hedging-basis",
    subtopicId: "basis-calculation",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "Local cash wheat is quoted at 5.10 and nearby wheat futures are quoted at 5.35. What is the basis?",
    choices: [
      { id: "a", text: "+0.25", isCorrect: false, rationale: "This reverses the subtraction. Basis is cash price minus futures price." },
      { id: "b", text: "-0.25", isCorrect: true, rationale: "Basis = 5.10 - 5.35 = -0.25." },
      { id: "c", text: "10.45", isCorrect: false, rationale: "Adding cash and futures prices does not calculate basis." },
      { id: "d", text: "-10.45", isCorrect: false, rationale: "This uses the sum, not the difference between cash and futures." }
    ],
    explanation: "Basis is always cash price minus futures price. Here the futures price is above the cash price, so the basis is negative.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-hedging-basis-0002",
    sectionId: "market_knowledge",
    topicId: "hedging-basis",
    subtopicId: "strengthening-basis",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "A grain producer has sold futures to hedge inventory. Which basis move generally helps that short hedger?",
    choices: [
      { id: "a", text: "The basis strengthens", isCorrect: true, rationale: "A short hedger generally benefits when the cash price improves relative to futures." },
      { id: "b", text: "The basis weakens", isCorrect: false, rationale: "A weakening basis normally hurts a short hedger because the cash sale price deteriorates relative to futures." },
      { id: "c", text: "The futures price becomes zero", isCorrect: false, rationale: "That is not the standard way to evaluate basis risk." },
      { id: "d", text: "The cash price is ignored", isCorrect: false, rationale: "Basis analysis always compares the cash and futures markets." }
    ],
    explanation: "Short hedgers, such as producers or inventory holders, typically benefit from a strengthening basis because their eventual cash sale improves relative to the futures offset.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-hedging-basis-0003",
    sectionId: "market_knowledge",
    topicId: "hedging-basis",
    subtopicId: "long-hedges",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "A cereal manufacturer expects to buy corn in two months and fears prices may rise. Which hedge is most direct?",
    choices: [
      { id: "a", text: "Buy corn futures", isCorrect: true, rationale: "A future buyer uses a long hedge by buying futures to protect against rising prices." },
      { id: "b", text: "Sell corn futures", isCorrect: false, rationale: "Selling futures is a short hedge, normally used by an expected seller." },
      { id: "c", text: "Sell unrelated currency futures", isCorrect: false, rationale: "An unrelated currency position does not directly hedge corn purchase risk." },
      { id: "d", text: "Avoid all futures positions and accept the cash risk", isCorrect: false, rationale: "That is an unhedged position rather than a futures hedge." }
    ],
    explanation: "A long hedge is used by someone who plans to buy the commodity later and wants protection from price increases.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-speculation-0001",
    sectionId: "market_knowledge",
    topicId: "futures-speculation",
    subtopicId: "gross-profit-loss",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "A trader buys two futures contracts at 82.10 and sells them at 83.25. Each point is worth $1,000 per contract. What is the gross result?",
    choices: [
      { id: "a", text: "$1,150 profit", isCorrect: false, rationale: "That is the move for one contract before multiplying by two contracts." },
      { id: "b", text: "$2,300 profit", isCorrect: true, rationale: "83.25 - 82.10 = 1.15; 1.15 x $1,000 x 2 = $2,300." },
      { id: "c", text: "$2,300 loss", isCorrect: false, rationale: "A long futures position profits when the exit price is higher than the entry price." },
      { id: "d", text: "$165,350 profit", isCorrect: false, rationale: "The quoted price levels are not multiplied directly by the contract count this way." }
    ],
    explanation: "For a long futures trade, gross profit is (sell price - buy price) x contract value x number of contracts.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-speculation-0002",
    sectionId: "market_knowledge",
    topicId: "futures-speculation",
    subtopicId: "single-contract-positions",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "A trader sells one futures contract at 105.50 and buys it back at 103.75. Each point is worth $1,000. What is the gross result?",
    choices: [
      { id: "a", text: "$1,750 profit", isCorrect: true, rationale: "A short profits when the buy-back price is lower: 105.50 - 103.75 = 1.75; 1.75 x $1,000 = $1,750." },
      { id: "b", text: "$1,750 loss", isCorrect: false, rationale: "The price fell after the short sale, which benefits the short position." },
      { id: "c", text: "$209,250 profit", isCorrect: false, rationale: "The price quotes are not added to calculate futures P&L." },
      { id: "d", text: "$175 profit", isCorrect: false, rationale: "This misses the stated $1,000 value per point." }
    ],
    explanation: "For a short futures trade, gross profit is (sale price - buy-back price) x contract value.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-margin-0001",
    sectionId: "market_knowledge",
    topicId: "margins-settlement-delivery",
    subtopicId: "margin-calls",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "Initial margin is $6,000 and maintenance margin is $4,500. Equity falls to $4,200. How much must generally be deposited to restore the account to initial margin?",
    choices: [
      { id: "a", text: "$300", isCorrect: false, rationale: "That only restores equity to maintenance margin, not initial margin." },
      { id: "b", text: "$1,500", isCorrect: false, rationale: "This uses maintenance margin as the restoration target." },
      { id: "c", text: "$1,800", isCorrect: true, rationale: "$6,000 - $4,200 = $1,800." },
      { id: "d", text: "$6,000", isCorrect: false, rationale: "The customer generally deposits the shortfall to initial margin, not the full initial margin again." }
    ],
    explanation: "When equity falls below maintenance, the margin call usually restores the account to the initial margin level.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-margin-0002",
    sectionId: "market_knowledge",
    topicId: "margins-settlement-delivery",
    subtopicId: "performance-bond",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "Which phrase best describes futures margin in the Series 3 context?",
    choices: [
      { id: "a", text: "A down payment on ownership of the commodity", isCorrect: false, rationale: "Futures margin is not a securities-style down payment." },
      { id: "b", text: "A performance bond", isCorrect: true, rationale: "Futures margin secures performance on the contract." },
      { id: "c", text: "Interest charged on a futures loan", isCorrect: false, rationale: "Futures margin is not primarily interest on borrowed funds." },
      { id: "d", text: "A fixed exchange commission", isCorrect: false, rationale: "Commissions are separate from margin deposits." }
    ],
    explanation: "Futures margin is commonly described as a performance bond rather than a partial payment for ownership.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-options-0001",
    sectionId: "market_knowledge",
    topicId: "options-futures",
    subtopicId: "option-breakevens",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "A 75 call option costs 2.40. At expiration, what is the long call breakeven futures price?",
    choices: [
      { id: "a", text: "72.60", isCorrect: false, rationale: "That subtracts the premium; long call breakeven adds premium to strike." },
      { id: "b", text: "75.00", isCorrect: false, rationale: "The strike alone ignores the premium paid." },
      { id: "c", text: "77.40", isCorrect: true, rationale: "Long call breakeven = strike + premium = 75 + 2.40." },
      { id: "d", text: "80.20", isCorrect: false, rationale: "This does not follow the long call breakeven formula." }
    ],
    explanation: "A long call must recover the strike plus the premium paid to break even at expiration.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-options-0002",
    sectionId: "market_knowledge",
    topicId: "margins-settlement-delivery",
    subtopicId: "intrinsic-value",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "A 70 put is evaluated when the underlying futures price is 66.50. What is the intrinsic value?",
    choices: [
      { id: "a", text: "0.00", isCorrect: false, rationale: "The put is in the money because the strike is above the futures price." },
      { id: "b", text: "3.50", isCorrect: true, rationale: "Put intrinsic value = strike - futures price = 70.00 - 66.50." },
      { id: "c", text: "66.50", isCorrect: false, rationale: "The futures price itself is not the option intrinsic value." },
      { id: "d", text: "136.50", isCorrect: false, rationale: "Adding the strike and futures price is not an intrinsic value formula." }
    ],
    explanation: "For a put, intrinsic value is max(strike - futures price, 0).",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-options-0003",
    sectionId: "market_knowledge",
    topicId: "options-futures",
    subtopicId: "short-option-risk",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "What is the main risk profile of a naked short call option on futures?",
    choices: [
      { id: "a", text: "Limited risk and unlimited gain", isCorrect: false, rationale: "That reverses the short call profile." },
      { id: "b", text: "Premium income with unlimited or substantial risk", isCorrect: true, rationale: "A short call receives premium but can face very large losses if the underlying rises." },
      { id: "c", text: "No risk because exercise is impossible", isCorrect: false, rationale: "Exercise and assignment are central option risks." },
      { id: "d", text: "A guaranteed hedge for falling prices", isCorrect: false, rationale: "A naked short call is not a guaranteed hedge." }
    ],
    explanation: "Short option writers receive premium but may face losses far exceeding that premium. Naked short calls are especially risky if prices rise sharply.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-theory-0001",
    sectionId: "market_knowledge",
    topicId: "futures-theory",
    subtopicId: "clearinghouse",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "Which market institution is central to guaranteeing contract performance after futures trades are cleared?",
    choices: [
      { id: "a", text: "The clearinghouse", isCorrect: true, rationale: "The clearinghouse becomes central to performance and settlement of cleared futures contracts." },
      { id: "b", text: "Only the original buyer", isCorrect: false, rationale: "Clearing replaces direct reliance on the original counterparty." },
      { id: "c", text: "Only the original seller", isCorrect: false, rationale: "The clearinghouse function is broader than either side alone." },
      { id: "d", text: "The issuer of common stock", isCorrect: false, rationale: "Common stock issuers are not the futures clearing mechanism." }
    ],
    explanation: "The clearinghouse stands between cleared buyers and sellers and is central to the integrity of the futures market.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-delivery-0001",
    sectionId: "market_knowledge",
    topicId: "margins-settlement-delivery",
    subtopicId: "first-notice-day",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "First notice day is most directly relevant to which risk for a futures customer?",
    choices: [
      { id: "a", text: "Potential delivery obligations", isCorrect: true, rationale: "First notice day is associated with the start of delivery notice risk in many physical contracts." },
      { id: "b", text: "Promotional material approval", isCorrect: false, rationale: "Promotional material is a regulatory communications topic, not first notice day." },
      { id: "c", text: "The end of all trading in securities markets", isCorrect: false, rationale: "First notice day is futures-contract specific." },
      { id: "d", text: "A fixed commission discount date", isCorrect: false, rationale: "It is not a commission discount concept." }
    ],
    explanation: "A customer who does not intend to make or take delivery must be attentive to notice and delivery dates.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-orders-0001",
    sectionId: "market_knowledge",
    topicId: "orders-accounts-analysis",
    subtopicId: "stop-orders",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "A customer wants to buy if the market rises to a specified trigger price above the current market. Which order type fits best?",
    choices: [
      { id: "a", text: "Buy stop", isCorrect: true, rationale: "A buy stop is commonly placed above the current market and triggers when the stop price is reached." },
      { id: "b", text: "Sell stop", isCorrect: false, rationale: "A sell stop is normally placed below the current market." },
      { id: "c", text: "Buy market-if-touched below the market", isCorrect: false, rationale: "That is a different trigger logic below the market." },
      { id: "d", text: "Sell market-on-close", isCorrect: false, rationale: "A market-on-close order targets execution near the close, not a buy trigger above market." }
    ],
    explanation: "Stop orders are often used to enter or exit once the market reaches a trigger price. A buy stop is the standard buy trigger above the market.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-orders-0002",
    sectionId: "market_knowledge",
    topicId: "orders-accounts-analysis",
    subtopicId: "stop-limit-orders",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "A customer wants an order to become active at a stop price but execute only at a specified limit price or better. Which order is this?",
    choices: [
      { id: "a", text: "Market order", isCorrect: false, rationale: "A market order does not include a stop trigger or limit price." },
      { id: "b", text: "Stop-limit order", isCorrect: true, rationale: "A stop-limit order combines a stop trigger with limit-price execution constraints." },
      { id: "c", text: "Market-on-close order", isCorrect: false, rationale: "A market-on-close order is tied to the close rather than a stop and limit combination." },
      { id: "d", text: "Fill-or-kill order only", isCorrect: false, rationale: "FOK describes immediate complete execution or cancellation, not stop-limit logic." }
    ],
    explanation: "A stop-limit order is triggered at the stop price, then attempts execution at the limit price or better.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-orders-0003",
    sectionId: "market_knowledge",
    topicId: "orders-accounts-analysis",
    subtopicId: "oco-orders",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "An order instruction links two orders so that execution of one cancels the other. What is the usual abbreviation?",
    choices: [
      { id: "a", text: "FOK", isCorrect: false, rationale: "FOK means fill-or-kill." },
      { id: "b", text: "GTC", isCorrect: false, rationale: "GTC means good-till-canceled." },
      { id: "c", text: "OCO", isCorrect: true, rationale: "OCO means one-cancels-the-other." },
      { id: "d", text: "MIT", isCorrect: false, rationale: "MIT means market-if-touched." }
    ],
    explanation: "One-cancels-the-other instructions are used when two linked orders should not both remain active after one is filled.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-spreading-0001",
    sectionId: "market_knowledge",
    topicId: "spreading",
    subtopicId: "interdelivery-spreads",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "A trader buys March wheat futures and sells July wheat futures. The two legs are in the same commodity but different delivery months. What kind of spread is this?",
    choices: [
      { id: "a", text: "Interdelivery spread", isCorrect: true, rationale: "An interdelivery spread uses different delivery months of the same commodity." },
      { id: "b", text: "Intermarket spread", isCorrect: false, rationale: "Intermarket spreads involve related but different markets." },
      { id: "c", text: "Cash-and-carry stock trade", isCorrect: false, rationale: "This description is a futures calendar-style spread, not a stock trade." },
      { id: "d", text: "Unrelated outright position", isCorrect: false, rationale: "The two legs are related and form a spread." }
    ],
    explanation: "Spreads can be classified by the relationship between the legs. Same commodity, different delivery months is an interdelivery spread.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-spreading-0002",
    sectionId: "market_knowledge",
    topicId: "spreading",
    subtopicId: "bull-spreads",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "In a normal carrying-charge market, a bull spread commonly involves buying the nearby futures month and selling the deferred month. What spread movement does the trader generally want?",
    choices: [
      { id: "a", text: "The spread to narrow", isCorrect: true, rationale: "Buying nearby and selling deferred tends to benefit if the nearby gains relative to deferred, narrowing the carry." },
      { id: "b", text: "The spread to widen without limit", isCorrect: false, rationale: "That would generally favor the opposite side in this normal-market example." },
      { id: "c", text: "Both legs to become identical to cash immediately", isCorrect: false, rationale: "The strategy is evaluated by relative futures price movement, not this condition." },
      { id: "d", text: "Open interest to be ignored", isCorrect: false, rationale: "This answer does not describe the desired spread price movement." }
    ],
    explanation: "In a normal market, the nearby is usually below deferred. A bull spread that is long nearby and short deferred generally benefits when that difference narrows.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "mk-truefalse-0001",
    sectionId: "market_knowledge",
    topicId: "futures-speculation",
    subtopicId: "selecting-speculative-trades",
    difficulty: "easy",
    questionType: "true_false",
    stem: "True or false: A long futures position generally benefits when the futures price rises after entry.",
    choices: [
      { id: "true", text: "True", isCorrect: true, rationale: "A long futures position buys first and benefits from selling or offsetting at a higher price." },
      { id: "false", text: "False", isCorrect: false, rationale: "That would describe the wrong direction for a long futures position." }
    ],
    explanation: "Long futures positions profit from price increases; short futures positions profit from price decreases.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-general-0001",
    sectionId: "us_regulations",
    topicId: "general-regulatory",
    subtopicId: "associated-person",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "In the Series 3 regulatory outline, AP most commonly refers to which role?",
    choices: [
      { id: "a", text: "Approved Portfolio", isCorrect: false, rationale: "This is not the standard Series 3 registration-role meaning." },
      { id: "b", text: "Associated Person", isCorrect: true, rationale: "AP stands for Associated Person." },
      { id: "c", text: "Arbitration Panel", isCorrect: false, rationale: "Arbitration is a topic, but AP is not this role." },
      { id: "d", text: "Agricultural Principal", isCorrect: false, rationale: "This is not the standard abbreviation in the outline." }
    ],
    explanation: "Associated Person is a core registration role in the futures regulatory framework.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-general-0002",
    sectionId: "us_regulations",
    topicId: "general-regulatory",
    subtopicId: "futures-commission-merchant",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "Which abbreviation refers to a Futures Commission Merchant?",
    choices: [
      { id: "a", text: "FCM", isCorrect: true, rationale: "FCM stands for Futures Commission Merchant." },
      { id: "b", text: "CTA", isCorrect: false, rationale: "CTA stands for Commodity Trading Advisor." },
      { id: "c", text: "CPO", isCorrect: false, rationale: "CPO stands for Commodity Pool Operator." },
      { id: "d", text: "IB", isCorrect: false, rationale: "IB stands for Introducing Broker." }
    ],
    explanation: "Series 3 regulations require precise recognition of role abbreviations such as FCM, IB, CPO, CTA, and AP.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-general-0003",
    sectionId: "us_regulations",
    topicId: "general-regulatory",
    subtopicId: "commodity-trading-advisor",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "Which role is generally associated with advising others about commodity futures trading for compensation?",
    choices: [
      { id: "a", text: "Commodity Pool Operator", isCorrect: false, rationale: "A CPO operates or solicits for a commodity pool, which is different from advisory compensation." },
      { id: "b", text: "Commodity Trading Advisor", isCorrect: true, rationale: "A CTA is associated with trading advice for compensation." },
      { id: "c", text: "Floor Trader", isCorrect: false, rationale: "A floor trader trades on an exchange floor for their own account or related accounts." },
      { id: "d", text: "Guaranteed Introducing Broker", isCorrect: false, rationale: "An IB solicits or accepts orders but is not defined primarily by compensated advice." }
    ],
    explanation: "CTA status centers on giving commodity trading advice for compensation, subject to the applicable rules and exemptions.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-general-0004",
    sectionId: "us_regulations",
    topicId: "general-regulatory",
    subtopicId: "discretionary-accounts",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "Before an AP exercises discretionary trading authority in a customer's futures account, what is generally required?",
    choices: [
      { id: "a", text: "Only oral permission from the customer", isCorrect: false, rationale: "Discretionary authority generally requires more formal documentation and supervision." },
      { id: "b", text: "Written authorization and proper approval or supervision", isCorrect: true, rationale: "Written authorization and supervisory controls are central requirements." },
      { id: "c", text: "No documentation if the first trade is profitable", isCorrect: false, rationale: "Profitability does not remove authorization requirements." },
      { id: "d", text: "Authorization from another customer", isCorrect: false, rationale: "Authority must come from the relevant customer and proper firm process." }
    ],
    explanation: "Discretionary accounts are a high-control area. Written customer authorization and proper supervisory approval or review are expected.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-fcmib-0001",
    sectionId: "us_regulations",
    topicId: "fcm-ib",
    subtopicId: "accepting-customer-funds",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "Which statement best distinguishes an Introducing Broker from an FCM in handling customer funds?",
    choices: [
      { id: "a", text: "An IB generally accepts customer funds in the same way as an FCM", isCorrect: false, rationale: "Accepting customer funds is a key FCM function; IB treatment is more restricted." },
      { id: "b", text: "An FCM may accept customer funds, while an IB generally introduces accounts and orders", isCorrect: true, rationale: "This captures the practical distinction tested in the outline." },
      { id: "c", text: "Neither an FCM nor an IB has any role with customer orders", isCorrect: false, rationale: "Both can be involved with orders, but funds handling differs." },
      { id: "d", text: "Only a CPO can hold customer margin deposits", isCorrect: false, rationale: "Customer futures funds are associated with FCM handling, not only CPOs." }
    ],
    explanation: "FCMs are central to accepting customer funds and carrying accounts. IBs introduce or solicit business but do not perform the same funds-carrying role.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-fcmib-0002",
    sectionId: "us_regulations",
    topicId: "fcm-ib",
    subtopicId: "promotional-material",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "Under NFA-style promotional material principles, communications should generally be:",
    choices: [
      { id: "a", text: "Balanced and not misleading", isCorrect: true, rationale: "Promotional material should be fair, balanced, and not misleading." },
      { id: "b", text: "Optimistic whenever the firm has recent profits", isCorrect: false, rationale: "Recent profits do not justify misleading or one-sided materials." },
      { id: "c", text: "Anonymous and unreviewed", isCorrect: false, rationale: "Review and accountability are important controls." },
      { id: "d", text: "Used only after every customer signs a waiver", isCorrect: false, rationale: "A waiver does not cure misleading communications." }
    ],
    explanation: "Promotional material rules focus on preventing misleading, exaggerated, or unbalanced communications.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-cpocta-0001",
    sectionId: "us_regulations",
    topicId: "cpo-cta",
    subtopicId: "cpo-regulations",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "Which description best fits a Commodity Pool Operator in the Series 3 outline?",
    choices: [
      { id: "a", text: "A person who operates or solicits funds for a commodity pool", isCorrect: true, rationale: "A CPO is associated with operating or soliciting participation in a commodity pool." },
      { id: "b", text: "A person who only sets daily exchange price limits", isCorrect: false, rationale: "Price limits are exchange or market rules, not a CPO role." },
      { id: "c", text: "A person who clears every retail stock trade", isCorrect: false, rationale: "This does not describe commodity pool operation." },
      { id: "d", text: "A person who provides no disclosures to participants", isCorrect: false, rationale: "CPO regulation includes disclosure and recordkeeping obligations." }
    ],
    explanation: "CPO and CTA questions often test whether the role is pool operation or trading advice, and whether disclosure duties apply.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-cpocta-0002",
    sectionId: "us_regulations",
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "A CPO or CTA disclosure document is most likely intended to give prospective clients or participants information about:",
    choices: [
      { id: "a", text: "Trading program risks, fees, backgrounds, conflicts, and performance information when required", isCorrect: true, rationale: "These are common disclosure-document subjects in the outline." },
      { id: "b", text: "Only the next day's futures settlement prices", isCorrect: false, rationale: "Disclosure documents are not daily price sheets." },
      { id: "c", text: "Only exchange floor seating charts", isCorrect: false, rationale: "This is unrelated to CPO/CTA disclosure requirements." },
      { id: "d", text: "A guarantee that losses cannot occur", isCorrect: false, rationale: "Guaranteeing no losses would be inconsistent with futures risk disclosure." }
    ],
    explanation: "Disclosure documents are designed to make material risks, fees, backgrounds, conflicts, and performance presentation understandable before participation.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-arb-0001",
    sectionId: "us_regulations",
    topicId: "arbitration-discipline",
    subtopicId: "disciplinary-procedures",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "Which topic belongs most directly in the arbitration, discipline, and enforcement area of the Series 3 outline?",
    choices: [
      { id: "a", text: "Offers to settle and hearings", isCorrect: true, rationale: "Offers to settle and hearings are disciplinary or enforcement procedure concepts." },
      { id: "b", text: "Option delta only", isCorrect: false, rationale: "Delta is a market knowledge options concept." },
      { id: "c", text: "Basis grade discounts only", isCorrect: false, rationale: "Basis grade is a market terminology concept." },
      { id: "d", text: "Futures versus forward pricing only", isCorrect: false, rationale: "That belongs to futures theory and terminology." }
    ],
    explanation: "The enforcement portion covers procedural and disciplinary concepts such as complaints, hearings, settlement offers, appeals, and penalties.",
    sourceType: "sample",
    active: true,
    createdAt
  },
  {
    id: "reg-pass-0001",
    sectionId: "us_regulations",
    topicId: "general-regulatory",
    subtopicId: "risk-disclosure",
    difficulty: "easy",
    questionType: "multiple_choice",
    stem: "For Series 3 scoring practice in this app, what passing logic should a mock exam apply?",
    choices: [
      { id: "a", text: "A passing total score can offset a failed section", isCorrect: false, rationale: "The app should model the requirement that both scored sections must pass." },
      { id: "b", text: "Market Knowledge and U.S. Regulations must each meet the passing threshold", isCorrect: true, rationale: "Separate section scoring prevents one section from masking weakness in the other." },
      { id: "c", text: "Only the Regulations score matters", isCorrect: false, rationale: "Both sections matter." },
      { id: "d", text: "Only the Market Knowledge score matters", isCorrect: false, rationale: "Both sections matter." }
    ],
    explanation: "The app scores Market Knowledge and U.S. Regulations separately and marks the mock exam passed only when both sections meet the threshold.",
    sourceType: "sample",
    active: true,
    createdAt
  }
];
