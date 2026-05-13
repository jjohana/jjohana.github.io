import type { Difficulty, Question } from "../types";

const createdAt = "2026-05-13T00:00:00.000Z";

type ChoiceInput = {
  text: string;
  correct?: boolean;
  rationale: string;
};

function q(params: {
  id: string;
  topicId: string;
  subtopicId: string;
  difficulty: Difficulty;
  stem: string;
  choices: ChoiceInput[];
  explanation: string;
}): Question {
  return {
    id: params.id,
    sectionId: "market_knowledge",
    topicId: params.topicId,
    subtopicId: params.subtopicId,
    difficulty: params.difficulty,
    questionType: "multiple_choice",
    stem: params.stem,
    choices: params.choices.map((choice, index) => ({
      id: String.fromCharCode(97 + index),
      text: choice.text,
      isCorrect: Boolean(choice.correct),
      rationale: choice.rationale
    })),
    explanation: params.explanation,
    sourceType: "user-authored",
    active: true,
    qualityStatus: "verified",
    issueTypes: [],
    qualityNotes: "Original authored Market Knowledge question reviewed by automated quality gates.",
    verifiedAt: createdAt,
    verifiedBy: "Codex authored-question audit",
    createdAt
  };
}

export const marketKnowledgeQuestions: Question[] = [
  q({
    id: "mk-theory-core-001",
    topicId: "futures-theory",
    subtopicId: "futures-vs-forwards",
    difficulty: "easy",
    stem: "Which feature most clearly distinguishes an exchange-traded futures contract from a privately negotiated forward contract?",
    choices: [
      { text: "Standardized terms and clearing through an exchange clearing system", correct: true, rationale: "Futures contracts are standardized and normally cleared through a clearinghouse." },
      { text: "A futures contract cannot be offset before delivery", rationale: "Most futures positions are offset before delivery." },
      { text: "A forward contract is marked to market daily by an exchange", rationale: "Daily exchange variation settlement is a futures feature." },
      { text: "A futures contract is always customized for one buyer and one seller", rationale: "Customization is more typical of forwards." }
    ],
    explanation: "Futures are standardized, exchange-traded, and cleared. Forwards are private contracts whose terms are negotiated between counterparties."
  }),
  q({
    id: "mk-theory-core-002",
    topicId: "futures-theory",
    subtopicId: "clearinghouse",
    difficulty: "medium",
    stem: "After a futures trade is matched and cleared, what is the clearinghouse's central market function?",
    choices: [
      { text: "It becomes the buyer to every seller and the seller to every buyer", correct: true, rationale: "Novation places the clearinghouse between the two sides of the cleared trade." },
      { text: "It guarantees that every customer will make a profit", rationale: "Clearing reduces counterparty risk; it does not guarantee profitable trading." },
      { text: "It removes all margin requirements", rationale: "Margins are a key tool used to support clearing integrity." },
      { text: "It decides the fundamental value of the commodity", rationale: "The clearinghouse manages performance and settlement, not fundamental valuation." }
    ],
    explanation: "The clearinghouse reduces counterparty risk by standing between cleared buyers and sellers and enforcing settlement and margin obligations."
  }),
  q({
    id: "mk-theory-core-003",
    topicId: "futures-theory",
    subtopicId: "offsetting-positions",
    difficulty: "easy",
    stem: "A customer is long one June futures contract and sells one June contract in the same market. What is the usual effect?",
    choices: [
      { text: "The sale offsets the existing long position", correct: true, rationale: "An equal and opposite trade in the same contract month normally offsets the open position." },
      { text: "The customer now has two long positions", rationale: "Selling the same contract month is the opposite side of the original long." },
      { text: "The customer must make physical delivery immediately", rationale: "Offsetting is designed to close the futures position before delivery." },
      { text: "The trade converts the contract into an option", rationale: "Offsetting a futures contract does not create an option." }
    ],
    explanation: "Futures positions are commonly closed by entering an equal and opposite transaction in the same contract."
  }),
  q({
    id: "mk-theory-core-004",
    topicId: "futures-theory",
    subtopicId: "delivery-provisions",
    difficulty: "medium",
    stem: "Why must a trader who does not intend to deliver or receive the commodity watch delivery-related dates?",
    choices: [
      { text: "Because failing to offset in time can expose the trader to delivery obligations", correct: true, rationale: "Physical-delivery futures can create delivery risk if positions remain open into the delivery period." },
      { text: "Because delivery dates determine whether the trade was profitable", rationale: "Profit or loss is determined by price movement and contract value, not delivery dates alone." },
      { text: "Because delivery dates eliminate all basis risk", rationale: "Delivery mechanics do not eliminate basis risk for hedgers." },
      { text: "Because no futures contract can be offset before first notice day", rationale: "Positions can generally be offset before delivery-related deadlines." }
    ],
    explanation: "Physical-delivery contracts have notice and delivery procedures. A trader who wants only price exposure normally offsets before those obligations arise."
  }),
  q({
    id: "mk-theory-core-005",
    topicId: "futures-theory",
    subtopicId: "basis-grade-premiums-discounts",
    difficulty: "medium",
    stem: "A deliverable grade is lower than the par grade specified by the contract. How is that difference commonly handled?",
    choices: [
      { text: "Through a grade discount or allowance", correct: true, rationale: "Contracts may specify premiums or discounts for deliverable grades that differ from par." },
      { text: "By cancelling the futures contract automatically", rationale: "Grade differences do not automatically cancel the contract." },
      { text: "By converting the futures into a cash forward", rationale: "The contract remains a futures contract; delivery terms address grade differences." },
      { text: "By ignoring the quality difference", rationale: "Contract delivery terms normally address quality variations." }
    ],
    explanation: "Delivery specifications may include premiums and discounts so acceptable grades can be delivered at adjusted values."
  }),
  q({
    id: "mk-theory-core-006",
    topicId: "futures-theory",
    subtopicId: "normal-vs-inverted-markets",
    difficulty: "easy",
    stem: "A normal carrying-charge market is most commonly described by which price relationship?",
    choices: [
      { text: "Deferred futures are priced above nearby futures", correct: true, rationale: "Carrying charges often make later delivery months higher than nearby months." },
      { text: "Nearby futures are always above every deferred month", rationale: "That describes an inverted market, not a normal carrying-charge market." },
      { text: "All delivery months must trade at exactly the same price", rationale: "Different delivery months usually reflect storage, financing, supply, and demand conditions." },
      { text: "Cash prices are never related to futures prices", rationale: "Cash and futures are linked through basis and delivery economics." }
    ],
    explanation: "In a normal market, deferred months often include storage, insurance, and financing costs, so deferred prices may exceed nearby prices."
  }),
  q({
    id: "mk-theory-core-007",
    topicId: "futures-theory",
    subtopicId: "carrying-charges",
    difficulty: "medium",
    stem: "Which cost is most directly part of carrying charges for a storable commodity?",
    choices: [
      { text: "Storage and financing costs", correct: true, rationale: "Carrying charges include costs of holding the commodity over time." },
      { text: "The customer's personal tax rate only", rationale: "Taxes may affect an investor, but carrying charges refer to commodity holding costs." },
      { text: "The exchange's disciplinary fine schedule", rationale: "Disciplinary fines are regulatory, not carrying costs." },
      { text: "The option writer's unlimited risk", rationale: "That is an options risk concept, not a carrying charge." }
    ],
    explanation: "Carrying charges reflect economic costs of holding a physical commodity, such as storage, insurance, and financing."
  }),
  q({
    id: "mk-theory-core-008",
    topicId: "futures-theory",
    subtopicId: "general-options-terminology",
    difficulty: "easy",
    stem: "In futures options terminology, what right does a call option give its buyer?",
    choices: [
      { text: "The right to buy the underlying futures contract at the strike price", correct: true, rationale: "A call gives the buyer the right to buy the underlying futures contract." },
      { text: "The obligation to sell futures at the strike price", rationale: "That is not the buyer's right in a call option." },
      { text: "The right to receive all exchange fees back", rationale: "A call is an option on market exposure, not a fee refund." },
      { text: "The obligation to make delivery immediately", rationale: "Buying a call does not create immediate delivery obligations." }
    ],
    explanation: "A futures call option gives the buyer the right, not the obligation, to buy the underlying futures contract at the strike price."
  }),
  q({
    id: "mk-margin-core-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "initial-margin",
    difficulty: "easy",
    stem: "What is initial margin in a futures account?",
    choices: [
      { text: "The performance bond deposit required to open a futures position", correct: true, rationale: "Initial margin is the upfront performance bond needed to establish the position." },
      { text: "The final profit paid after a trade closes", rationale: "Profit or loss is separate from the margin deposit." },
      { text: "A partial payment for owning the physical commodity", rationale: "Futures margin is not a down payment on ownership." },
      { text: "The exchange membership fee", rationale: "Membership fees are not customer margin deposits." }
    ],
    explanation: "Futures margin is a performance bond. Initial margin is deposited when the position is opened."
  }),
  q({
    id: "mk-margin-core-002",
    topicId: "margins-settlement-delivery",
    subtopicId: "maintenance-margin",
    difficulty: "easy",
    stem: "Maintenance margin is best described as:",
    choices: [
      { text: "The minimum equity level that must be maintained before a margin call is triggered", correct: true, rationale: "Falling below maintenance margin generally leads to a margin call." },
      { text: "The maximum profit allowed on a futures trade", rationale: "Maintenance margin is not a profit cap." },
      { text: "The premium paid for an option", rationale: "Option premium is separate from futures maintenance margin." },
      { text: "The delivery grade discount", rationale: "Grade discounts are delivery terms, not maintenance margin." }
    ],
    explanation: "If account equity falls below maintenance margin, funds are typically required to restore the account to the initial margin level."
  }),
  q({
    id: "mk-margin-core-003",
    topicId: "margins-settlement-delivery",
    subtopicId: "variation-margin",
    difficulty: "medium",
    stem: "A long futures account gains $900 from today's settlement price move. What is the daily settlement effect?",
    choices: [
      { text: "$900 is credited through variation settlement", correct: true, rationale: "Daily gains and losses are settled through variation margin." },
      { text: "$900 is ignored until final delivery", rationale: "Futures accounts are marked to market daily." },
      { text: "$900 becomes option time value", rationale: "This is a futures variation settlement, not option valuation." },
      { text: "$900 is automatically converted into a warehouse receipt", rationale: "Daily settlement does not create warehouse receipts." }
    ],
    explanation: "Futures positions are marked to market. Daily gains are credited and daily losses are debited through variation settlement."
  }),
  q({
    id: "mk-margin-core-005",
    topicId: "margins-settlement-delivery",
    subtopicId: "price-limits",
    difficulty: "medium",
    stem: "What is the main purpose of a daily price limit in a futures contract?",
    choices: [
      { text: "To limit the amount a contract may move during a trading session", correct: true, rationale: "Daily limits restrict price movement for that session under exchange rules." },
      { text: "To guarantee that all orders are filled", rationale: "Price limits can prevent trading beyond the limit; they do not guarantee fills." },
      { text: "To eliminate margin requirements", rationale: "Margins remain required even when limits exist." },
      { text: "To make every contract cash settled", rationale: "Price limits do not determine settlement method." }
    ],
    explanation: "Daily price limits are exchange rules that restrict how far a contract can move in a trading session."
  }),
  q({
    id: "mk-margin-core-006",
    topicId: "margins-settlement-delivery",
    subtopicId: "expanded-limits",
    difficulty: "hard",
    stem: "A contract closes limit-up. The next session allows a wider permitted price move under exchange rules. What concept is being applied?",
    choices: [
      { text: "Expanded limits", correct: true, rationale: "Expanded limits can increase the allowed price move after prior limit conditions." },
      { text: "Intrinsic value", rationale: "Intrinsic value is an options valuation concept." },
      { text: "Basis weakening", rationale: "Basis weakening compares cash and futures prices." },
      { text: "Fill-or-kill execution", rationale: "FOK is an order instruction, not a price-limit expansion." }
    ],
    explanation: "Some contracts allow expanded daily limits after limit moves, giving the market a wider range in a subsequent session."
  }),
  q({
    id: "mk-margin-core-007",
    topicId: "margins-settlement-delivery",
    subtopicId: "delivery-notices",
    difficulty: "medium",
    stem: "What does a delivery notice generally communicate in a physical-delivery futures contract?",
    choices: [
      { text: "Intent or assignment related to making delivery under contract terms", correct: true, rationale: "Delivery notices are part of the contract's delivery process." },
      { text: "A customer's request to cancel all margin rules", rationale: "Delivery notices do not cancel margin rules." },
      { text: "An analyst's opinion on price direction", rationale: "Analyst opinions are unrelated to delivery notices." },
      { text: "A guaranteed option exercise profit", rationale: "Delivery notices are not profit guarantees." }
    ],
    explanation: "Physical-delivery contracts specify delivery procedures, including notices that start or assign delivery responsibilities."
  }),
  q({
    id: "mk-margin-core-008",
    topicId: "margins-settlement-delivery",
    subtopicId: "exercise-assignment",
    difficulty: "medium",
    stem: "A customer exercises a futures call option. What position does the customer generally receive?",
    choices: [
      { text: "A long position in the underlying futures contract", correct: true, rationale: "Exercising a call gives the buyer a long futures position at the strike." },
      { text: "A short position in the underlying futures contract", rationale: "A put exercise would generally create a short futures position for the put buyer." },
      { text: "A warehouse receipt with no futures position", rationale: "Option exercise creates futures exposure, not immediate warehouse receipt ownership." },
      { text: "A cancelled account", rationale: "Exercise does not cancel the trading account." }
    ],
    explanation: "For futures options, exercising a call normally results in a long futures position for the option holder."
  }),
  q({
    id: "mk-orders-core-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "market-orders",
    difficulty: "easy",
    stem: "Which order prioritizes immediate execution rather than a specified price?",
    choices: [
      { text: "Market order", correct: true, rationale: "A market order seeks prompt execution at the best available price." },
      { text: "Stop-limit order", rationale: "A stop-limit includes trigger and limit-price conditions." },
      { text: "Good-till-canceled order", rationale: "GTC describes duration, not immediate execution priority." },
      { text: "One-cancels-the-other instruction", rationale: "OCO links orders; it does not itself define immediate execution." }
    ],
    explanation: "A market order is used when execution speed is more important than specifying an exact execution price."
  }),
  q({
    id: "mk-orders-core-002",
    topicId: "orders-accounts-analysis",
    subtopicId: "market-if-touched",
    difficulty: "medium",
    stem: "A buy order is placed below the current market and becomes a market order if the price trades down to the trigger. Which order type fits?",
    choices: [
      { text: "Buy market-if-touched", correct: true, rationale: "A buy MIT is commonly placed below the market and triggers after the market touches the specified price." },
      { text: "Buy stop", rationale: "A buy stop is generally placed above the current market." },
      { text: "Sell stop", rationale: "A sell stop is a sell trigger, not a buy trigger below the market." },
      { text: "Fill-or-kill", rationale: "FOK concerns immediate complete execution or cancellation." }
    ],
    explanation: "Market-if-touched orders are triggered when the market touches a specified price, often used to enter on a favorable price move."
  }),
  q({
    id: "mk-orders-core-003",
    topicId: "orders-accounts-analysis",
    subtopicId: "gtc-orders",
    difficulty: "easy",
    stem: "What does good-till-canceled describe?",
    choices: [
      { text: "An order duration instruction", correct: true, rationale: "GTC states that the order remains working until cancelled, subject to firm and exchange rules." },
      { text: "A guarantee that the order will be filled", rationale: "GTC does not guarantee execution." },
      { text: "A price analysis method", rationale: "GTC is an order instruction, not analysis." },
      { text: "A delivery grade premium", rationale: "Delivery grade premiums are contract terms, not order duration." }
    ],
    explanation: "GTC is a time-in-force instruction. It does not guarantee execution or price."
  }),
  q({
    id: "mk-orders-core-004",
    topicId: "orders-accounts-analysis",
    subtopicId: "fok-orders",
    difficulty: "medium",
    stem: "A customer wants an order executed immediately in full or cancelled entirely. Which instruction is most appropriate?",
    choices: [
      { text: "Fill-or-kill", correct: true, rationale: "FOK requires immediate complete execution or cancellation." },
      { text: "Good-till-canceled", rationale: "GTC keeps an order working rather than requiring immediate full execution." },
      { text: "Market-on-close", rationale: "MOC targets the close, not immediate full execution." },
      { text: "Open interest", rationale: "Open interest is a market statistic, not an order instruction." }
    ],
    explanation: "Fill-or-kill is strict: the order must be filled immediately and completely or not at all."
  }),
  q({
    id: "mk-orders-core-005",
    topicId: "orders-accounts-analysis",
    subtopicId: "technical-analysis",
    difficulty: "easy",
    stem: "Technical analysis primarily studies which type of information?",
    choices: [
      { text: "Price, volume, chart patterns, and market action", correct: true, rationale: "Technical analysis focuses on market-generated data." },
      { text: "Only official crop reports and weather forecasts", rationale: "Those are more fundamental inputs." },
      { text: "Only customer tax brackets", rationale: "Tax brackets are not the basis of technical analysis." },
      { text: "Only exchange disciplinary records", rationale: "Disciplinary records are regulatory information." }
    ],
    explanation: "Technical analysis evaluates market action, including prices, volume, open interest, and patterns."
  }),
  q({
    id: "mk-orders-core-006",
    topicId: "orders-accounts-analysis",
    subtopicId: "support-resistance",
    difficulty: "medium",
    stem: "A price level where buying has repeatedly emerged and declines have stalled is commonly called:",
    choices: [
      { text: "Support", correct: true, rationale: "Support is a level where buying interest may slow or stop a decline." },
      { text: "Resistance", rationale: "Resistance is a level where selling may slow or stop an advance." },
      { text: "Carrying charge", rationale: "Carrying charges are costs of holding a commodity." },
      { text: "Variation margin", rationale: "Variation margin is daily settlement, not a chart level." }
    ],
    explanation: "Support and resistance are technical concepts based on repeated buying or selling interest near price levels."
  }),
  q({
    id: "mk-orders-core-007",
    topicId: "orders-accounts-analysis",
    subtopicId: "open-interest",
    difficulty: "medium",
    stem: "What does open interest measure in a futures contract?",
    choices: [
      { text: "The number of outstanding contracts that have not been offset or closed", correct: true, rationale: "Open interest counts open contracts." },
      { text: "The number of contracts traded during the day only", rationale: "That is volume, not open interest." },
      { text: "The maximum daily price limit", rationale: "Price limits are exchange rules, not open interest." },
      { text: "The number of customers approved for options", rationale: "Customer approval is unrelated to open interest." }
    ],
    explanation: "Volume measures trading activity over a period. Open interest measures contracts still open."
  }),
  q({
    id: "mk-orders-core-008",
    topicId: "orders-accounts-analysis",
    subtopicId: "fundamental-analysis",
    difficulty: "easy",
    stem: "A grain analyst studies expected acreage, weather, inventories, and export demand. What type of analysis is this?",
    choices: [
      { text: "Fundamental analysis", correct: true, rationale: "Supply and demand factors are central to fundamental analysis." },
      { text: "Technical analysis only", rationale: "Technical analysis focuses on price and market action rather than supply-demand fundamentals." },
      { text: "Order duration analysis", rationale: "Order duration describes how long an order works." },
      { text: "Arbitration analysis", rationale: "Arbitration is a dispute-resolution process, not commodity supply-demand analysis." }
    ],
    explanation: "Fundamental analysis evaluates economic supply and demand forces that may influence prices."
  }),
  q({
    id: "mk-hedging-core-001",
    topicId: "hedging-basis",
    subtopicId: "short-hedges",
    difficulty: "easy",
    stem: "A soybean farmer owns crop inventory and fears prices may fall before sale. Which hedge is most direct?",
    choices: [
      { text: "Sell soybean futures", correct: true, rationale: "A producer or inventory holder commonly uses a short hedge to protect against falling prices." },
      { text: "Buy soybean futures", rationale: "Buying futures protects a future buyer against rising prices." },
      { text: "Buy unrelated interest rate futures", rationale: "That does not directly hedge soybean price risk." },
      { text: "Write no hedge and rely only on cash prices", rationale: "That leaves the farmer exposed to cash price declines." }
    ],
    explanation: "A short hedge is used by someone who owns or will sell the commodity and wants protection from falling prices."
  }),
  q({
    id: "mk-hedging-core-002",
    topicId: "hedging-basis",
    subtopicId: "anticipatory-hedges",
    difficulty: "medium",
    stem: "A food processor expects to buy wheat in three months but has not bought the cash wheat yet. A futures position used now is best described as:",
    choices: [
      { text: "An anticipatory long hedge", correct: true, rationale: "The processor anticipates a future cash purchase and buys futures to protect against rising prices." },
      { text: "A short hedge against inventory already owned", rationale: "The processor does not own the wheat and is worried about higher purchase prices." },
      { text: "A bear spread", rationale: "The situation describes a hedge, not a spread between futures months." },
      { text: "An offset of a delivery notice", rationale: "No delivery notice is involved in the hedge description." }
    ],
    explanation: "Anticipatory hedges are placed before the cash transaction occurs. A future buyer uses a long hedge."
  }),
  q({
    id: "mk-hedging-core-003",
    topicId: "hedging-basis",
    subtopicId: "basis-calculation",
    difficulty: "easy",
    stem: "Cash corn is 4.18 and corn futures are 4.32. What is the basis?",
    choices: [
      { text: "-0.14", correct: true, rationale: "Basis = cash - futures = 4.18 - 4.32 = -0.14." },
      { text: "+0.14", rationale: "This reverses the subtraction." },
      { text: "8.50", rationale: "Adding cash and futures prices does not calculate basis." },
      { text: "-8.50", rationale: "The sum is not the basis." }
    ],
    explanation: "Basis equals cash price minus futures price. Here the cash price is 14 cents below futures."
  }),
  q({
    id: "mk-hedging-core-004",
    topicId: "hedging-basis",
    subtopicId: "weakening-basis",
    difficulty: "medium",
    stem: "Basis moves from -0.10 to -0.25. How is that basis move described?",
    choices: [
      { text: "Weakening basis", correct: true, rationale: "The cash price became weaker relative to futures." },
      { text: "Strengthening basis", rationale: "Strengthening would move basis toward a more positive value." },
      { text: "No basis change", rationale: "The basis changed by 15 cents." },
      { text: "A price limit expansion", rationale: "This is a basis relationship, not a daily price-limit rule." }
    ],
    explanation: "A basis becomes weaker when cash declines relative to futures or becomes more negative."
  }),
  q({
    id: "mk-hedging-core-005",
    topicId: "hedging-basis",
    subtopicId: "long-the-basis",
    difficulty: "hard",
    stem: "A merchandiser buys cash grain and sells futures. What is the merchandiser's basis position?",
    choices: [
      { text: "Long the basis", correct: true, rationale: "Long cash and short futures is a long-basis position." },
      { text: "Short the basis", rationale: "Short the basis generally means short cash and long futures." },
      { text: "Flat the basis", rationale: "The cash and futures positions create basis exposure." },
      { text: "Short option gamma", rationale: "Gamma is an options concept, not this cash-futures basis position." }
    ],
    explanation: "Long the basis means the trader benefits if cash strengthens relative to futures."
  }),
  q({
    id: "mk-hedging-core-006",
    topicId: "hedging-basis",
    subtopicId: "net-price-received-paid",
    difficulty: "hard",
    stem: "A short hedger sells cash wheat at 6.20 after gaining 0.18 on the futures hedge. Ignoring commissions, what net price is effectively received?",
    choices: [
      { text: "6.38", correct: true, rationale: "For a short hedger, a futures gain adds to the cash sale price: 6.20 + 0.18 = 6.38." },
      { text: "6.02", rationale: "This subtracts a futures gain instead of adding it." },
      { text: "0.18", rationale: "That is only the futures gain, not the net effective price." },
      { text: "6.20", rationale: "This ignores the hedge result." }
    ],
    explanation: "Net price for a hedger combines the cash transaction and the gain or loss on the futures hedge."
  }),
  q({
    id: "mk-hedging-core-007",
    topicId: "hedging-basis",
    subtopicId: "interest-rate-hedges",
    difficulty: "medium",
    stem: "A bank expects interest rates to rise, which would reduce the value of its bond portfolio. Which futures hedge direction is generally used?",
    choices: [
      { text: "Sell interest rate futures", correct: true, rationale: "Bond prices generally fall when rates rise, so selling interest rate futures can hedge the price decline." },
      { text: "Buy interest rate futures", rationale: "Buying futures generally benefits from rising futures prices, not falling bond futures prices." },
      { text: "Buy grain futures", rationale: "Grain futures do not directly hedge bond price exposure." },
      { text: "Sell call options on currencies only", rationale: "That is not the direct hedge for a bond portfolio rate risk." }
    ],
    explanation: "Interest rate futures prices tend to move inversely with rates. A holder of fixed-income assets often sells futures to hedge rising-rate risk."
  }),
  q({
    id: "mk-hedging-core-008",
    topicId: "hedging-basis",
    subtopicId: "stock-index-hedges",
    difficulty: "medium",
    stem: "A portfolio manager owns a diversified stock portfolio and fears a broad market decline. Which futures hedge is most direct?",
    choices: [
      { text: "Sell stock index futures", correct: true, rationale: "Selling index futures can hedge broad equity market exposure." },
      { text: "Buy stock index futures", rationale: "Buying index futures increases exposure to a rising market." },
      { text: "Sell wheat futures", rationale: "Wheat futures do not directly hedge broad equity exposure." },
      { text: "Buy warehouse receipts", rationale: "Warehouse receipts are delivery instruments, not stock portfolio hedges." }
    ],
    explanation: "A short stock index futures hedge is used to reduce exposure to broad equity market declines."
  }),
  q({
    id: "mk-spreading-core-001",
    topicId: "spreading",
    subtopicId: "spread-execution",
    difficulty: "easy",
    stem: "What is a futures spread?",
    choices: [
      { text: "A position with two related futures legs, one long and one short", correct: true, rationale: "A spread involves related long and short positions." },
      { text: "A single outright long position only", rationale: "An outright has one side, not two spread legs." },
      { text: "A customer complaint form", rationale: "That is a regulatory record, not a spread." },
      { text: "A warehouse delivery grade", rationale: "Delivery grades are contract specifications, not spreads." }
    ],
    explanation: "Spreads trade relative price movement between related contracts rather than outright price direction alone."
  }),
  q({
    id: "mk-spreading-core-002",
    topicId: "spreading",
    subtopicId: "narrowing-spread",
    difficulty: "medium",
    stem: "A spread changes from 18 cents to 10 cents. What happened to the spread?",
    choices: [
      { text: "It narrowed", correct: true, rationale: "The difference between the two legs decreased from 18 to 10 cents." },
      { text: "It widened", rationale: "Widening would mean the difference increased." },
      { text: "It became a market order", rationale: "A price relationship is not an order type." },
      { text: "It became a delivery notice", rationale: "Spread movement is unrelated to delivery notices." }
    ],
    explanation: "Narrowing means the price difference between the spread legs decreases."
  }),
  q({
    id: "mk-spreading-core-003",
    topicId: "spreading",
    subtopicId: "widening-spread",
    difficulty: "medium",
    stem: "A trader buys the higher-priced leg and sells the lower-priced leg expecting the difference to increase. What is the trader expecting?",
    choices: [
      { text: "A widening spread", correct: true, rationale: "Long the high-priced leg and short the low-priced leg benefits if the difference widens." },
      { text: "A narrowing spread", rationale: "A narrowing spread would reduce the difference." },
      { text: "A fixed margin call", rationale: "This describes a spread view, not an account margin calculation." },
      { text: "A guaranteed arbitrage", rationale: "Spread trades still carry risk." }
    ],
    explanation: "Spread profit depends on the relative movement of the legs. This setup benefits from widening."
  }),
  q({
    id: "mk-spreading-core-004",
    topicId: "spreading",
    subtopicId: "normal-market-strategies",
    difficulty: "hard",
    stem: "In a normal market, a trader buys the nearby contract and sells the deferred contract. What is the common market view?",
    choices: [
      { text: "The trader expects the carry to narrow", correct: true, rationale: "Long nearby and short deferred in a normal market generally benefits if the nearby gains relative to deferred." },
      { text: "The trader expects the carry to widen sharply", rationale: "That would generally favor selling nearby and buying deferred." },
      { text: "The trader has no exposure to relative prices", rationale: "A spread is specifically a relative-price position." },
      { text: "The trader is exercising an option", rationale: "The position described is a futures spread, not an option exercise." }
    ],
    explanation: "Normal-market bull spreads often look for narrowing carrying charges between nearby and deferred months."
  }),
  q({
    id: "mk-spreading-core-005",
    topicId: "spreading",
    subtopicId: "inverted-market-strategies",
    difficulty: "hard",
    stem: "An inverted market has nearby futures above deferred futures. What does that often suggest?",
    choices: [
      { text: "Strong nearby demand or tight nearby supply", correct: true, rationale: "Inversions often reflect pressure for immediate supply." },
      { text: "Storage costs fully explain higher deferred prices", rationale: "That describes a normal carrying-charge market, not an inversion." },
      { text: "No spread strategies are possible", rationale: "Spreads can be traded in inverted markets." },
      { text: "Daily price limits no longer apply", rationale: "Price-limit rules are separate from market structure." }
    ],
    explanation: "Inversions can indicate immediate supply-demand pressure where nearby delivery is valued above later delivery."
  }),
  q({
    id: "mk-spreading-core-006",
    topicId: "spreading",
    subtopicId: "intramarket-spreads",
    difficulty: "easy",
    stem: "Buying May corn futures and selling December corn futures is what type of spread?",
    choices: [
      { text: "Intramarket spread", correct: true, rationale: "Both legs are the same commodity in different months." },
      { text: "Intermarket spread", rationale: "Intermarket spreads use related but different commodities or markets." },
      { text: "Currency hedge", rationale: "Both legs are corn futures, not currency exposure." },
      { text: "Option straddle", rationale: "The position uses futures contracts, not options." }
    ],
    explanation: "Intramarket spreads use the same commodity or futures market across different delivery months."
  }),
  q({
    id: "mk-spreading-core-007",
    topicId: "spreading",
    subtopicId: "bear-spreads",
    difficulty: "medium",
    stem: "In many grain examples, a bear spread is commonly structured as:",
    choices: [
      { text: "Sell the nearby month and buy the deferred month", correct: true, rationale: "A bear spread often benefits if the nearby weakens relative to deferred." },
      { text: "Buy the nearby month and sell the deferred month", rationale: "That is commonly a bull spread structure." },
      { text: "Buy only one outright contract", rationale: "A spread has two related legs." },
      { text: "Exercise a put and a call at once", rationale: "That is not the standard futures bear spread structure." }
    ],
    explanation: "A bear spread generally positions for the nearby contract to weaken relative to the deferred contract."
  }),
  q({
    id: "mk-spreading-core-008",
    topicId: "spreading",
    subtopicId: "intermarket-spreads",
    difficulty: "medium",
    stem: "A trader buys wheat futures and sells corn futures because the trader expects wheat to strengthen relative to corn. What type of spread is this?",
    choices: [
      { text: "Intermarket spread", correct: true, rationale: "The legs are in related but different markets." },
      { text: "Interdelivery spread", rationale: "Interdelivery spreads use different months of the same market." },
      { text: "Cash-only basis trade", rationale: "The position uses two futures markets." },
      { text: "Stop-limit order", rationale: "This is a spread position, not an order type." }
    ],
    explanation: "Intermarket spreads involve related but different commodities or markets, such as wheat versus corn."
  }),
  q({
    id: "mk-spec-core-001",
    topicId: "futures-speculation",
    subtopicId: "tick-value",
    difficulty: "medium",
    stem: "A contract's minimum tick is 0.25 and each full point is worth $50. What is one tick worth?",
    choices: [
      { text: "$12.50", correct: true, rationale: "0.25 x $50 = $12.50." },
      { text: "$0.25", rationale: "The tick size is 0.25, but the dollar tick value uses the point value." },
      { text: "$50.00", rationale: "$50 is the value of a full point, not a quarter-point tick." },
      { text: "$200.00", rationale: "This incorrectly divides by the tick size." }
    ],
    explanation: "Tick value equals minimum price fluctuation multiplied by the contract's dollar value per point."
  }),
  q({
    id: "mk-spec-core-002",
    topicId: "futures-speculation",
    subtopicId: "contract-size",
    difficulty: "easy",
    stem: "Why does contract size matter in futures P&L calculations?",
    choices: [
      { text: "It converts price movement into dollar gain or loss", correct: true, rationale: "Dollar P&L depends on price movement and contract size or point value." },
      { text: "It eliminates the need for margin", rationale: "Margin is still required." },
      { text: "It determines whether the order is GTC", rationale: "Order duration is unrelated to contract size." },
      { text: "It guarantees physical delivery quality", rationale: "Quality is governed by delivery specifications, not contract size alone." }
    ],
    explanation: "The same price move can have different dollar effects depending on contract size or point value."
  }),
  q({
    id: "mk-spec-core-003",
    topicId: "futures-speculation",
    subtopicId: "gross-profit-loss",
    difficulty: "medium",
    stem: "A trader buys one futures contract at 74.20 and sells it at 75.05. Each point is worth $1,000. What is the gross result?",
    choices: [
      { text: "$850 profit", correct: true, rationale: "75.05 - 74.20 = 0.85; 0.85 x $1,000 = $850." },
      { text: "$850 loss", rationale: "The trader was long and sold at a higher price." },
      { text: "$1,250 profit", rationale: "This does not match the 0.85-point move." },
      { text: "$149,250 profit", rationale: "The price levels are not added together for P&L." }
    ],
    explanation: "For a long futures position, gross P&L equals exit price minus entry price times the point value."
  }),
  q({
    id: "mk-spec-core-004",
    topicId: "futures-speculation",
    subtopicId: "commissions",
    difficulty: "medium",
    stem: "A futures trade has a $600 gross profit and $70 total round-turn commissions and fees. What is the net profit?",
    choices: [
      { text: "$530", correct: true, rationale: "$600 - $70 = $530." },
      { text: "$670", rationale: "Commissions reduce profit; they are not added." },
      { text: "$70", rationale: "That is only the cost." },
      { text: "$600", rationale: "This ignores commissions and fees." }
    ],
    explanation: "Net trading result equals gross result minus commissions and fees."
  }),
  q({
    id: "mk-spec-core-005",
    topicId: "futures-speculation",
    subtopicId: "multiple-contract-positions",
    difficulty: "medium",
    stem: "A trader sells three contracts at 102.40 and buys them back at 101.90. Each point is worth $500. What is the gross result?",
    choices: [
      { text: "$750 profit", correct: true, rationale: "Short profit per contract is 0.50 x $500 = $250; times 3 = $750." },
      { text: "$750 loss", rationale: "The short position profits because the buy-back price is lower." },
      { text: "$250 profit", rationale: "That is the result for one contract, not three." },
      { text: "$1,500 profit", rationale: "This doubles the calculated result." }
    ],
    explanation: "For shorts, profit equals sale price minus buy-back price, multiplied by point value and number of contracts."
  }),
  q({
    id: "mk-spec-core-006",
    topicId: "futures-speculation",
    subtopicId: "return-on-margin-equity",
    difficulty: "hard",
    stem: "A trader earns $900 on a position requiring $6,000 of margin. What is the return on margin equity?",
    choices: [
      { text: "15%", correct: true, rationale: "$900 / $6,000 = 0.15, or 15%." },
      { text: "6.7%", rationale: "This reverses the ratio." },
      { text: "90%", rationale: "This uses the profit but not the margin base correctly." },
      { text: "600%", rationale: "This incorrectly compares margin to profit." }
    ],
    explanation: "Return on margin equity compares the trade result with the margin required to hold the position."
  }),
  q({
    id: "mk-spec-core-007",
    topicId: "futures-speculation",
    subtopicId: "protective-orders",
    difficulty: "easy",
    stem: "A long futures trader enters a sell stop below the market. What is the main purpose?",
    choices: [
      { text: "To help limit loss if the market falls", correct: true, rationale: "A sell stop below the market can trigger an exit on a decline." },
      { text: "To guarantee a profit", rationale: "Stops do not guarantee execution price or profit." },
      { text: "To create a delivery obligation", rationale: "A protective stop is an order, not a delivery instruction." },
      { text: "To increase basis risk intentionally", rationale: "The purpose is risk control, not increasing basis risk." }
    ],
    explanation: "Protective stop orders are used to help manage downside risk, although execution price can vary in fast markets."
  }),
  q({
    id: "mk-spec-core-008",
    topicId: "futures-speculation",
    subtopicId: "selecting-speculative-trades",
    difficulty: "medium",
    stem: "Which practice best reflects disciplined speculative trade selection?",
    choices: [
      { text: "Define entry, exit, risk, and position size before placing the trade", correct: true, rationale: "A disciplined plan identifies risk and execution conditions in advance." },
      { text: "Increase size after every loss without a risk limit", rationale: "That can compound losses and is not disciplined risk management." },
      { text: "Ignore liquidity because all futures contracts trade the same", rationale: "Liquidity varies by contract and month." },
      { text: "Trade only because a contract has a large notional value", rationale: "Notional value alone is not a trade plan." }
    ],
    explanation: "Speculation requires risk planning. Entry logic, exit logic, and position sizing are central to disciplined trade selection."
  }),
  q({
    id: "mk-options-core-001",
    topicId: "options-futures",
    subtopicId: "long-calls",
    difficulty: "easy",
    stem: "A trader buys a call option on futures. What market move generally helps the position?",
    choices: [
      { text: "A rise in the underlying futures price", correct: true, rationale: "Long calls benefit from upward movement in the underlying." },
      { text: "A fall in the underlying futures price", rationale: "That generally helps puts, not long calls." },
      { text: "A mandatory delivery notice", rationale: "The option position is not helped simply by delivery procedures." },
      { text: "A widening bid-ask spread", rationale: "Wider spreads can increase trading costs." }
    ],
    explanation: "A long call gives upside exposure with risk limited to the premium paid, excluding transaction costs."
  }),
  q({
    id: "mk-options-core-002",
    topicId: "options-futures",
    subtopicId: "long-puts",
    difficulty: "easy",
    stem: "A trader buys a put option on futures. What market move generally helps the position?",
    choices: [
      { text: "A decline in the underlying futures price", correct: true, rationale: "Long puts benefit when the underlying futures price falls below the strike by enough to cover premium." },
      { text: "A rise in the underlying futures price", rationale: "That generally hurts a long put." },
      { text: "A cancellation of all time value", rationale: "Time decay generally hurts long option holders." },
      { text: "A mandatory margin call on another account", rationale: "That is unrelated to the put's payoff." }
    ],
    explanation: "A long put gives downside exposure with risk limited to the premium paid, excluding transaction costs."
  }),
  q({
    id: "mk-options-core-003",
    topicId: "options-futures",
    subtopicId: "premium-risk",
    difficulty: "easy",
    stem: "What is the maximum loss for a buyer of a futures option, excluding commissions and fees?",
    choices: [
      { text: "The premium paid", correct: true, rationale: "A long option buyer's risk is limited to the premium paid." },
      { text: "Unlimited loss", rationale: "Unlimited or substantial risk is associated with certain short option positions." },
      { text: "The full notional value of the futures contract", rationale: "The buyer can let the option expire rather than taking unlimited futures loss." },
      { text: "The exchange's daily price limit", rationale: "The premium paid defines the buyer's maximum option loss." }
    ],
    explanation: "Option buyers pay premium for a right. If the option expires worthless, the premium is lost."
  }),
  q({
    id: "mk-options-core-004",
    topicId: "options-futures",
    subtopicId: "short-puts",
    difficulty: "medium",
    stem: "A trader writes a put option on futures. What is the trader's main risk?",
    choices: [
      { text: "The underlying futures price falls sharply", correct: true, rationale: "A short put can lose substantially if the underlying falls." },
      { text: "The underlying futures price rises sharply", rationale: "That generally helps a short put because the option may expire worthless." },
      { text: "The buyer refuses to pay the premium after execution", rationale: "Premium settlement is handled through market procedures." },
      { text: "The option automatically becomes a forward contract", rationale: "A short put remains an option position unless exercised or closed." }
    ],
    explanation: "Short put writers receive premium but face downside risk if the futures price falls below the strike."
  }),
  q({
    id: "mk-options-core-006",
    topicId: "options-futures",
    subtopicId: "option-profit",
    difficulty: "hard",
    stem: "A trader buys an 80 call for 2.50. At expiration the futures price is 85.20. What is the option profit before commissions?",
    choices: [
      { text: "2.70", correct: true, rationale: "Intrinsic value is 85.20 - 80.00 = 5.20; profit = 5.20 - 2.50 = 2.70." },
      { text: "5.20", rationale: "That is intrinsic value before subtracting premium." },
      { text: "2.50", rationale: "That is the premium paid, not the profit." },
      { text: "0.00", rationale: "The call is in the money at expiration." }
    ],
    explanation: "For a long call at expiration, profit equals max(futures price - strike, 0) minus premium paid."
  }),
  q({
    id: "mk-options-core-007",
    topicId: "options-futures",
    subtopicId: "bull-call-spreads",
    difficulty: "medium",
    stem: "A trader buys a lower-strike call and sells a higher-strike call in the same expiration month. What strategy is this?",
    choices: [
      { text: "Bull call spread", correct: true, rationale: "Long lower-strike call and short higher-strike call is a bull call spread." },
      { text: "Bear put spread", rationale: "A bear put spread uses puts." },
      { text: "Short futures hedge", rationale: "This is an options spread, not a futures hedge." },
      { text: "Intermarket futures spread", rationale: "The legs are options on the same underlying, not two futures markets." }
    ],
    explanation: "A bull call spread limits both upside and cost by combining a long lower-strike call with a short higher-strike call."
  }),
  q({
    id: "mk-options-core-008",
    topicId: "options-futures",
    subtopicId: "max-profit-loss",
    difficulty: "hard",
    stem: "A trader buys a 70 call for 4 and sells an 80 call for 1. What is the maximum profit at expiration before commissions?",
    choices: [
      { text: "7", correct: true, rationale: "Spread width is 10; net premium paid is 3; max profit = 10 - 3 = 7." },
      { text: "3", rationale: "That is the net premium paid, which is the maximum loss." },
      { text: "10", rationale: "The spread width must be reduced by the net premium paid." },
      { text: "Unlimited", rationale: "A bull call spread has capped upside because of the short higher-strike call." }
    ],
    explanation: "For a debit bull call spread, maximum profit equals strike width minus net premium paid."
  }),
  q({
    id: "mk-theory-core-009",
    topicId: "futures-theory",
    subtopicId: "hedging-theory",
    difficulty: "medium",
    stem: "What is the central objective of a futures hedge?",
    choices: [
      { text: "To reduce adverse price risk in an existing or anticipated cash position", correct: true, rationale: "Hedging uses futures to offset cash-market price exposure." },
      { text: "To guarantee a better price than every competitor receives", rationale: "A hedge reduces risk; it does not guarantee the best possible market price." },
      { text: "To remove the need for customer margin", rationale: "Hedged futures positions still require margin." },
      { text: "To convert a futures contract into common stock", rationale: "Hedging does not change the contract into a security." }
    ],
    explanation: "Hedging is risk management. It seeks to offset price risk from a cash exposure, not to guarantee a profit."
  }),
  q({
    id: "mk-theory-core-010",
    topicId: "futures-theory",
    subtopicId: "speculative-theory",
    difficulty: "easy",
    stem: "A trader with no cash-market exposure buys crude oil futures because the trader expects prices to rise. What role is the trader taking?",
    choices: [
      { text: "Speculator", correct: true, rationale: "The trader is accepting price risk for potential profit without an offsetting cash exposure." },
      { text: "Short hedger", rationale: "A short hedger typically owns or will sell the commodity and sells futures." },
      { text: "Cash grain elevator", rationale: "The facts describe a futures trade, not a cash business role." },
      { text: "Delivery warehouse", rationale: "A warehouse is involved in delivery logistics, not this speculative view." }
    ],
    explanation: "Speculators seek profit from price movement and provide liquidity, but they are not offsetting a commercial cash-market exposure."
  }),
  q({
    id: "mk-theory-core-011",
    topicId: "futures-theory",
    subtopicId: "general-futures-terminology",
    difficulty: "easy",
    stem: "What does it mean to be long a futures contract?",
    choices: [
      { text: "The trader has bought the futures contract", correct: true, rationale: "A long futures position is established by buying futures." },
      { text: "The trader has sold the futures contract", rationale: "Selling futures establishes a short position." },
      { text: "The trader has bought a warehouse receipt only", rationale: "A warehouse receipt is a delivery instrument, not the definition of a long futures position." },
      { text: "The trader has no market exposure", rationale: "A long futures position has market exposure to price changes." }
    ],
    explanation: "Long means bought. A long futures position generally profits when the futures price rises and loses when it falls."
  }),
  q({
    id: "mk-margin-core-009",
    topicId: "margins-settlement-delivery",
    subtopicId: "option-premiums",
    difficulty: "easy",
    stem: "What is the premium in a futures option transaction?",
    choices: [
      { text: "The price paid by the option buyer and received by the option seller", correct: true, rationale: "Premium is the option's price." },
      { text: "The daily futures variation margin", rationale: "Variation margin is daily settlement on futures positions." },
      { text: "The warehouse storage fee only", rationale: "Storage fees are carrying costs, not option premium." },
      { text: "The maximum futures price limit", rationale: "Price limits are exchange rules, not option prices." }
    ],
    explanation: "The option premium is the amount paid for the option rights. It is separate from futures margin and delivery costs."
  }),
  q({
    id: "mk-margin-core-010",
    topicId: "margins-settlement-delivery",
    subtopicId: "time-value",
    difficulty: "medium",
    stem: "A call option has a premium of 6.40 and intrinsic value of 4.10. What is its time value?",
    choices: [
      { text: "2.30", correct: true, rationale: "Time value = premium - intrinsic value = 6.40 - 4.10." },
      { text: "4.10", rationale: "That is the intrinsic value, not time value." },
      { text: "6.40", rationale: "That is the total premium." },
      { text: "10.50", rationale: "Adding premium and intrinsic value does not calculate time value." }
    ],
    explanation: "Option premium consists of intrinsic value plus time value. Time value is the excess over intrinsic value."
  }),
  q({
    id: "mk-margin-core-011",
    topicId: "margins-settlement-delivery",
    subtopicId: "delta",
    difficulty: "medium",
    stem: "An option has a delta of 0.40. Which statement best describes this delta?",
    choices: [
      { text: "The option price is expected to change about 0.40 for a 1.00 move in the underlying futures, all else equal", correct: true, rationale: "Delta estimates option price sensitivity to the underlying futures price." },
      { text: "The option has no relationship to the futures price", rationale: "Delta specifically measures that relationship." },
      { text: "The option is guaranteed to finish in the money", rationale: "Delta is not a guarantee of expiration outcome." },
      { text: "The option premium must equal 0.40", rationale: "Delta is a sensitivity measure, not necessarily the premium." }
    ],
    explanation: "Delta measures how much the option premium is expected to change for a change in the underlying futures price, assuming other factors are unchanged."
  }),
  q({
    id: "mk-margin-core-012",
    topicId: "margins-settlement-delivery",
    subtopicId: "lock-limits",
    difficulty: "medium",
    stem: "A market is bid at the daily upper limit with no sellers willing to trade. How is this condition commonly described?",
    choices: [
      { text: "Locked limit-up", correct: true, rationale: "A locked limit market has reached the limit with trading constrained by lack of offsetting orders." },
      { text: "Open interest falling to zero", rationale: "Open interest may or may not change; the condition described is a limit market." },
      { text: "Basis strengthening", rationale: "Basis compares cash and futures prices." },
      { text: "A market-if-touched order", rationale: "MIT is an order type, not a limit condition." }
    ],
    explanation: "A lock-limit condition can occur when prices reach the permitted daily limit and orders cannot be matched beyond that price."
  }),
  q({
    id: "mk-margin-core-013",
    topicId: "margins-settlement-delivery",
    subtopicId: "warehouse-receipts",
    difficulty: "medium",
    stem: "In physical delivery, what does a warehouse receipt generally represent?",
    choices: [
      { text: "Evidence of ownership or control of deliverable commodity in an approved warehouse", correct: true, rationale: "Warehouse receipts are used in delivery for stored commodities." },
      { text: "A customer's market order ticket", rationale: "Order tickets record orders, not warehouse ownership." },
      { text: "The option writer's premium", rationale: "Premium is the price of an option." },
      { text: "A daily settlement price limit", rationale: "Price limits are exchange rules." }
    ],
    explanation: "Warehouse receipts are part of the delivery process for storable commodities and evidence deliverable stocks."
  }),
  q({
    id: "mk-margin-core-014",
    topicId: "margins-settlement-delivery",
    subtopicId: "efps",
    difficulty: "hard",
    stem: "An exchange of futures for physicals is best described as:",
    choices: [
      { text: "A transaction linking a futures position with a related cash commodity transaction", correct: true, rationale: "An EFP combines futures and physical/cash market components under exchange rules." },
      { text: "A customer complaint arbitration filing", rationale: "That is a regulatory dispute process." },
      { text: "An option spread using two strike prices", rationale: "An EFP is not an options spread." },
      { text: "A daily margin call notice only", rationale: "Margin calls are account funding requirements, not EFPs." }
    ],
    explanation: "EFPs are privately negotiated transactions submitted under exchange rules that exchange a futures position for a related cash or physical position."
  }),
  q({
    id: "mk-orders-core-009",
    topicId: "orders-accounts-analysis",
    subtopicId: "moc-orders",
    difficulty: "easy",
    stem: "What does a market-on-close order seek?",
    choices: [
      { text: "Execution at or near the closing price", correct: true, rationale: "MOC orders target execution during the closing period." },
      { text: "Execution only if the entire order fills immediately", rationale: "That describes fill-or-kill." },
      { text: "A trigger below the market for a buy order", rationale: "That describes a buy MIT order." },
      { text: "Automatic physical delivery", rationale: "MOC is an order type, not a delivery instruction." }
    ],
    explanation: "A market-on-close order is used when the customer wants execution at or near the market close."
  }),
  q({
    id: "mk-orders-core-010",
    topicId: "orders-accounts-analysis",
    subtopicId: "gaps",
    difficulty: "medium",
    stem: "On a daily chart, prices open well above the prior day's high and no trading occurs between the two ranges. What chart feature is this?",
    choices: [
      { text: "Gap", correct: true, rationale: "A gap occurs when there is a price area between trading ranges with no trades." },
      { text: "Open interest", rationale: "Open interest measures outstanding contracts." },
      { text: "Carrying charge", rationale: "Carrying charges are holding costs." },
      { text: "Variation margin", rationale: "Variation margin is daily settlement." }
    ],
    explanation: "Gaps are technical chart features where the market moves from one range to another leaving an untraded price area."
  }),
  q({
    id: "mk-orders-core-011",
    topicId: "orders-accounts-analysis",
    subtopicId: "volume",
    difficulty: "easy",
    stem: "What does trading volume measure?",
    choices: [
      { text: "The number of contracts traded during a specified period", correct: true, rationale: "Volume counts contracts traded over the period." },
      { text: "The number of contracts still open after offsets", rationale: "That is open interest." },
      { text: "The maximum permitted daily price move", rationale: "That is a price limit." },
      { text: "The amount of option time value", rationale: "Time value is part of an option premium." }
    ],
    explanation: "Volume is a flow measure of trading activity; open interest is a stock measure of outstanding contracts."
  }),
  q({
    id: "mk-orders-core-012",
    topicId: "orders-accounts-analysis",
    subtopicId: "supply-demand",
    difficulty: "medium",
    stem: "All else equal, a sharp increase in expected production of a commodity is generally considered:",
    choices: [
      { text: "Bearish for price because expected supply rises", correct: true, rationale: "Higher expected supply tends to pressure prices if demand is unchanged." },
      { text: "Bullish for price because supply rises", rationale: "More supply is generally bearish, not bullish, all else equal." },
      { text: "Irrelevant to fundamental analysis", rationale: "Supply expectations are central to fundamental analysis." },
      { text: "A technical support signal only", rationale: "Production expectations are fundamental information." }
    ],
    explanation: "Fundamental analysis weighs supply and demand. Higher expected supply tends to lower price pressure if demand does not increase."
  }),
  q({
    id: "mk-orders-core-013",
    topicId: "orders-accounts-analysis",
    subtopicId: "yield-curves",
    difficulty: "medium",
    stem: "A yield curve plots yields against what dimension?",
    choices: [
      { text: "Time to maturity", correct: true, rationale: "A yield curve shows yields for different maturities." },
      { text: "Warehouse receipt number", rationale: "Warehouse receipt numbers are not the maturity dimension of a yield curve." },
      { text: "Option strike only", rationale: "Option strikes are not bond maturities." },
      { text: "Daily trading volume only", rationale: "Volume is not the maturity axis of a yield curve." }
    ],
    explanation: "Yield curves are important in interest rate analysis because they compare rates across maturities."
  }),
  q({
    id: "mk-hedging-core-009",
    topicId: "hedging-basis",
    subtopicId: "short-the-basis",
    difficulty: "hard",
    stem: "A merchandiser sells cash grain forward and buys futures to protect the commitment. What basis position is this closest to?",
    choices: [
      { text: "Short the basis", correct: true, rationale: "Short cash exposure combined with long futures is a short-basis position." },
      { text: "Long the basis", rationale: "Long the basis is typically long cash and short futures." },
      { text: "Flat price only", rationale: "The cash and futures relationship creates basis exposure." },
      { text: "Short call spread", rationale: "This is a cash-futures basis position, not an option spread." }
    ],
    explanation: "Short the basis generally benefits when the cash price weakens relative to futures."
  }),
  q({
    id: "mk-hedging-core-010",
    topicId: "hedging-basis",
    subtopicId: "transportation-costs",
    difficulty: "medium",
    stem: "Why can transportation costs affect local basis?",
    choices: [
      { text: "They influence the relationship between the local cash price and the futures delivery market", correct: true, rationale: "Moving commodities from one location to another affects cash-futures price relationships." },
      { text: "They set the option strike price", rationale: "Strike prices are option contract terms." },
      { text: "They eliminate all hedging risk", rationale: "Transportation costs can affect basis risk; they do not eliminate it." },
      { text: "They determine whether an order is FOK", rationale: "FOK is an order instruction." }
    ],
    explanation: "Local cash prices reflect location and transportation economics, so transportation costs are a key basis factor."
  }),
  q({
    id: "mk-hedging-core-011",
    topicId: "hedging-basis",
    subtopicId: "deliverable-grade-differences",
    difficulty: "medium",
    stem: "A local cash commodity differs from the futures contract's par deliverable grade. What risk does this create for a hedge?",
    choices: [
      { text: "Basis risk from grade differences", correct: true, rationale: "Quality differences can make local cash prices move differently from the futures contract." },
      { text: "No risk because all grades have identical value", rationale: "Different grades can trade at premiums or discounts." },
      { text: "Automatic cancellation of the hedge", rationale: "Grade differences do not automatically cancel a hedge." },
      { text: "A guaranteed option exercise", rationale: "This is a cash-futures grade issue, not option exercise." }
    ],
    explanation: "Hedgers must consider whether their cash commodity matches futures delivery specifications. Grade differences affect basis."
  }),
  q({
    id: "mk-hedging-core-012",
    topicId: "hedging-basis",
    subtopicId: "financial-futures-basis",
    difficulty: "hard",
    stem: "For a Treasury futures hedge, basis most directly compares the futures price with:",
    choices: [
      { text: "The relevant cash Treasury instrument or deliverable bond value", correct: true, rationale: "Financial futures basis compares cash-market and futures-market values." },
      { text: "A soybean warehouse receipt", rationale: "That is unrelated to Treasury futures." },
      { text: "Only the customer's commission rate", rationale: "Commissions affect net results, not basis definition." },
      { text: "The number of arbitration claims", rationale: "Arbitration claims are regulatory, not basis inputs." }
    ],
    explanation: "Financial futures basis is still a cash-versus-futures relationship, adapted to the relevant financial instrument."
  }),
  q({
    id: "mk-hedging-core-013",
    topicId: "hedging-basis",
    subtopicId: "currency-hedges",
    difficulty: "medium",
    stem: "A U.S. importer must pay euros in three months and fears the euro will rise. Which hedge is most direct?",
    choices: [
      { text: "Buy euro futures", correct: true, rationale: "A future euro buyer can hedge rising euro costs by buying euro futures." },
      { text: "Sell euro futures", rationale: "Selling euro futures would generally hedge euro receivables or falling euro exposure." },
      { text: "Buy corn futures", rationale: "Corn futures do not directly hedge euro payment risk." },
      { text: "Sell stock index futures", rationale: "Stock index futures do not directly hedge euro currency risk." }
    ],
    explanation: "A future buyer of a currency uses a long currency futures hedge to protect against that currency rising."
  }),
  q({
    id: "mk-spreading-core-009",
    topicId: "spreading",
    subtopicId: "carrying-charge-spreads",
    difficulty: "medium",
    stem: "What is a carrying-charge spread designed to reflect?",
    choices: [
      { text: "The price relationship between delivery months influenced by storage and financing costs", correct: true, rationale: "Carrying charges affect spreads between nearby and deferred months." },
      { text: "Only the customer's tax rate", rationale: "Tax rates are not the definition of a carrying-charge spread." },
      { text: "A disciplinary penalty schedule", rationale: "Penalties are regulatory, not spread economics." },
      { text: "The intrinsic value of a put option", rationale: "Intrinsic value is an options concept." }
    ],
    explanation: "Carrying-charge spreads focus on how storage, insurance, financing, and related costs are reflected across delivery months."
  }),
  q({
    id: "mk-spec-core-009",
    topicId: "futures-speculation",
    subtopicId: "single-contract-positions",
    difficulty: "medium",
    stem: "A trader buys one contract at 118.25 and sells it at 117.60. Each point is worth $250. What is the gross result?",
    choices: [
      { text: "$162.50 loss", correct: true, rationale: "117.60 - 118.25 = -0.65; -0.65 x $250 = -$162.50." },
      { text: "$162.50 profit", rationale: "The long position sold lower than it bought." },
      { text: "$650 loss", rationale: "This misses the $250 point value." },
      { text: "$29,625 profit", rationale: "The price levels are not added for P&L." }
    ],
    explanation: "For a long futures position, the price decline creates a loss equal to the price move times point value."
  }),
  q({
    id: "mk-options-core-009",
    topicId: "options-futures",
    subtopicId: "short-calls",
    difficulty: "medium",
    stem: "A trader writes an uncovered call option on futures. What is the primary adverse market move?",
    choices: [
      { text: "A sharp rise in the underlying futures price", correct: true, rationale: "A short call loses as the futures price rises above the strike." },
      { text: "A sharp fall in the underlying futures price", rationale: "A falling futures price generally helps a short call." },
      { text: "The option expires out of the money", rationale: "That is generally favorable to the option writer." },
      { text: "The buyer chooses not to exercise a worthless option", rationale: "That is not adverse to the writer." }
    ],
    explanation: "Short calls receive premium but carry substantial upside risk if the underlying futures price rises sharply."
  }),
  q({
    id: "mk-options-core-010",
    topicId: "options-futures",
    subtopicId: "long-put-hedge",
    difficulty: "medium",
    stem: "A grain producer owns inventory and wants downside protection while keeping upside potential. Which strategy fits best?",
    choices: [
      { text: "Buy a put option", correct: true, rationale: "A long put can protect against falling prices while allowing benefit from higher cash prices." },
      { text: "Sell a call option uncovered", rationale: "A short call does not provide the same direct floor price protection." },
      { text: "Buy a futures contract", rationale: "Buying futures increases long price exposure." },
      { text: "Enter no risk-management position", rationale: "That leaves downside price risk unhedged." }
    ],
    explanation: "A long put can function like price insurance for a producer, with the premium as the known cost."
  }),
  q({
    id: "mk-options-core-011",
    topicId: "options-futures",
    subtopicId: "long-call-hedge",
    difficulty: "medium",
    stem: "A manufacturer expects to buy a commodity and wants protection against rising prices while keeping benefit if prices fall. Which strategy fits?",
    choices: [
      { text: "Buy a call option", correct: true, rationale: "A long call protects against rising prices while preserving downside benefit in the cash market." },
      { text: "Sell a put option uncovered", rationale: "A short put does not cap the purchase price." },
      { text: "Sell futures", rationale: "Selling futures benefits from falling prices and does not protect a future buyer from rising prices." },
      { text: "Ignore the exposure", rationale: "No hedge leaves the manufacturer exposed to price increases." }
    ],
    explanation: "A long call can be used by a future buyer as price insurance against rising futures prices."
  }),
  q({
    id: "mk-options-core-012",
    topicId: "options-futures",
    subtopicId: "covered-calls",
    difficulty: "medium",
    stem: "A trader owns the underlying futures position and writes a call against it. What is this commonly called?",
    choices: [
      { text: "Covered call", correct: true, rationale: "The long underlying position covers the short call exposure to some degree." },
      { text: "Naked short call", rationale: "A naked call is not covered by ownership of the underlying." },
      { text: "Bear put spread", rationale: "That strategy uses puts, not a long underlying plus short call." },
      { text: "Interdelivery spread", rationale: "Interdelivery spreads use futures in different delivery months." }
    ],
    explanation: "A covered call combines ownership of the underlying futures exposure with a short call, trading upside for premium income."
  }),
  q({
    id: "mk-options-core-013",
    topicId: "options-futures",
    subtopicId: "bear-put-spreads",
    difficulty: "medium",
    stem: "A trader buys a higher-strike put and sells a lower-strike put in the same expiration. What strategy is this?",
    choices: [
      { text: "Bear put spread", correct: true, rationale: "Long higher-strike put and short lower-strike put creates a bearish debit spread." },
      { text: "Bull call spread", rationale: "A bull call spread uses calls." },
      { text: "Covered call", rationale: "Covered calls combine a long underlying position and a short call." },
      { text: "Calendar futures spread", rationale: "This is an options strike spread, not a delivery-month futures spread." }
    ],
    explanation: "A bear put spread profits from a decline down to the lower strike while limiting both cost and maximum profit."
  }),
  q({
    id: "mk-options-core-014",
    topicId: "options-futures",
    subtopicId: "calendar-spreads",
    difficulty: "hard",
    stem: "An options trader buys a deferred-month call and sells a nearby-month call with the same strike. What type of options spread is this?",
    choices: [
      { text: "Calendar spread", correct: true, rationale: "Calendar spreads use options with different expirations." },
      { text: "Bull put spread", rationale: "A bull put spread uses puts with different strikes in the same expiration." },
      { text: "Intermarket futures spread", rationale: "This is an options expiration spread, not two different futures markets." },
      { text: "Market-if-touched order", rationale: "MIT is an order type." }
    ],
    explanation: "Calendar spreads, also called time spreads, involve options with different expiration months."
  }),
  q({
    id: "mk-options-core-015",
    topicId: "options-futures",
    subtopicId: "option-return-equity",
    difficulty: "hard",
    stem: "A trader pays 1.20 for an option and later sells it for 1.80. What is the return on premium paid before commissions?",
    choices: [
      { text: "50%", correct: true, rationale: "Profit is 0.60; 0.60 / 1.20 = 50%." },
      { text: "33.3%", rationale: "This divides profit by sale price, not premium paid." },
      { text: "150%", rationale: "That compares sale price to cost but does not isolate profit return." },
      { text: "0.60%", rationale: "The price point gain is not the percentage return." }
    ],
    explanation: "Return on premium paid compares option profit with the original premium outlay."
  })
];
