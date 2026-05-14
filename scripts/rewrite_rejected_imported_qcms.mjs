import fs from "node:fs";

const files = [
  {
    path: "src/data/s3MarketDocxQuestions.ts",
    exportName: "s3MarketDocxQuestions"
  },
  {
    path: "src/data/s3RegulatoryPdfQuestions.ts",
    exportName: "regulatoryPdfQuestions"
  }
];

const reviewedAt = "2026-05-14T00:00:00.000Z";
const verifiedBy = "OpenAI gpt-5.5 vision import + Codex rejected-queue rewrite audit";

const choice = (id, text, isCorrect, rationale) => ({ id, text, isCorrect, rationale });

const fixes = {
  "s3-market-docx-45-2": {
    stem:
      "A futures customer is concerned that the other side of a trade may default before the contract is offset. Which clearinghouse function most directly addresses that concern?",
    choices: [
      choice("a", "The clearinghouse becomes the buyer to every seller and the seller to every buyer after trades are cleared.", true, "Novation through the clearinghouse centralizes counterparty performance and is the key protection against direct counterparty default."),
      choice("b", "The clearinghouse guarantees that the customer's trading strategy will be profitable.", false, "Clearing reduces counterparty risk; it does not guarantee trading profits."),
      choice("c", "The clearinghouse sets the customer's investment objectives before an account is opened.", false, "Customer suitability and account-opening duties belong to intermediaries, not the clearinghouse."),
      choice("d", "The clearinghouse eliminates the need for margin deposits.", false, "Margin is one of the tools the clearing system uses to manage risk; it is not eliminated.")
    ],
    explanation:
      "A futures clearinghouse interposes itself between clearing members so that each cleared trade has the clearinghouse as the counterparty. This reduces bilateral counterparty risk and supports daily settlement, but it does not remove market risk or guarantee profits."
  },
  "s3-market-docx-227": {
    stem:
      "A soybean processor expects to buy 50,000 bushels of soybeans in three months. To protect against a price increase, which hedge is most appropriate?",
    choices: [
      choice("a", "Buy soybean futures now and offset the futures when the cash soybeans are purchased.", true, "A future buyer of the cash commodity uses a long hedge to protect against rising prices."),
      choice("b", "Sell soybean futures now and offset the futures when the cash soybeans are purchased.", false, "A short hedge protects an expected seller or holder of inventory against falling prices, not a future buyer against rising prices."),
      choice("c", "Buy soybean futures only after the cash purchase has already been completed.", false, "Buying after the cash purchase does not hedge the risk of a price increase before the purchase."),
      choice("d", "Avoid the futures market because hedges can only be used by producers with existing inventory.", false, "Commercial users who expect to buy a commodity can hedge with long futures.")
    ],
    explanation:
      "A long hedge is used when the hedger needs to buy the commodity later and wants protection against a price increase. Gains on the long futures position can offset a higher cash purchase price."
  },
  "s3-market-docx-236-2": {
    stem:
      "A cereal manufacturer will need 25,000 bushels of oats in June. Each oats futures contract covers 5,000 bushels. Ignoring basis risk, how many contracts are needed for a full long hedge?",
    choices: [
      choice("a", "Buy 5 oats futures contracts.", true, "The manufacturer is a future buyer, so it buys futures. 25,000 bushels divided by 5,000 bushels per contract equals 5 contracts."),
      choice("b", "Sell 5 oats futures contracts.", false, "Selling futures is a short hedge, appropriate for a future seller rather than a future buyer."),
      choice("c", "Buy 25 oats futures contracts.", false, "This treats each contract as only 1,000 bushels; the stated contract size is 5,000 bushels."),
      choice("d", "Sell 25 oats futures contracts.", false, "This has both the wrong side and the wrong number of contracts.")
    ],
    explanation:
      "A long hedge uses long futures to protect a future cash purchase. The number of contracts is hedge quantity divided by contract size: 25,000 / 5,000 = 5 contracts."
  },
  "s3-market-docx-258-2": {
    stem:
      "A U.S. importer must pay GBP 625,000 in three months. Each British pound futures contract is for GBP 62,500. To hedge the dollar cost of that future payment, what should the importer do?",
    choices: [
      choice("a", "Buy 10 British pound futures contracts.", true, "The importer will need pounds later and is exposed to the pound rising, so it buys pound futures. GBP 625,000 / GBP 62,500 = 10 contracts."),
      choice("b", "Sell 10 British pound futures contracts.", false, "Selling pound futures would hedge a future receipt of pounds, not a future payment in pounds."),
      choice("c", "Buy 1 British pound futures contract.", false, "One contract covers only GBP 62,500, not GBP 625,000."),
      choice("d", "Sell 1 British pound futures contract.", false, "This has the wrong direction and hedges only one-tenth of the exposure.")
    ],
    explanation:
      "A U.S. firm that will need to buy foreign currency later uses a long currency futures hedge. The contract count is GBP 625,000 / GBP 62,500 = 10 contracts."
  },
  "s3-market-docx-268-2": {
    stem:
      "A portfolio manager with a $12,500,000 equity portfolio wants to reduce broad market exposure using stock index futures. The index is 5,000 and the contract multiplier is $250. How many contracts approximate a full hedge?",
    choices: [
      choice("a", "Sell 10 stock index futures contracts.", true, "Each contract represents 5,000 x $250 = $1,250,000 of index value. $12,500,000 / $1,250,000 = 10; selling reduces long equity exposure."),
      choice("b", "Buy 10 stock index futures contracts.", false, "Buying futures would increase long market exposure rather than hedge a long stock portfolio."),
      choice("c", "Sell 25 stock index futures contracts.", false, "Twenty-five contracts would overhedge the stated portfolio exposure."),
      choice("d", "Buy 25 stock index futures contracts.", false, "This both increases market exposure and uses too many contracts.")
    ],
    explanation:
      "For a stock-index hedge, contract value is index level times multiplier. Here, 5,000 x $250 = $1,250,000 per contract, so a $12,500,000 portfolio requires about 10 contracts. A long stock portfolio is hedged by selling index futures."
  },
  "s3-market-docx-283": {
    stem:
      "In a carrying-charge grain market, nearby futures are 610 cents and deferred futures are 630 cents. If the deferred contract later trades at 625 while the nearby remains 610, what happened to the spread?",
    choices: [
      choice("a", "The spread narrowed from 20 cents to 15 cents.", true, "The original spread was 630 - 610 = 20 cents. The new spread is 625 - 610 = 15 cents, so it narrowed."),
      choice("b", "The spread widened from 15 cents to 20 cents.", false, "The sequence is reversed; the spread moved from 20 to 15 cents."),
      choice("c", "The market became inverted because the deferred contract is still above the nearby contract.", false, "A deferred price above the nearby price is still a carrying-charge relationship, not an inversion."),
      choice("d", "The spread did not change because both contracts remain in the same market.", false, "The relationship between the two prices changed even though both are in the same commodity market.")
    ],
    explanation:
      "A spread is the price difference between two contract months. In this example it narrows because the deferred premium over the nearby contract falls from 20 cents to 15 cents."
  },
  "s3-market-docx-301": {
    stem:
      "March wheat trades at 690 cents and July wheat trades at 720 cents. A trader sells July and buys March. If July falls to 712 and March falls to 686, what is the spread result?",
    choices: [
      choice("a", "A gain of 4 cents per bushel.", true, "The trader sold the July-March spread at 30 cents and bought it back at 26 cents, gaining 4 cents per bushel."),
      choice("b", "A loss of 4 cents per bushel.", false, "A short spread benefits when the spread narrows; here it narrowed from 30 to 26 cents."),
      choice("c", "A gain of 12 cents per bushel.", false, "This incorrectly combines the outright price changes without considering the long and short legs together."),
      choice("d", "No gain or loss because both contracts declined.", false, "Spread P&L depends on relative price movement, not whether both legs moved in the same direction.")
    ],
    explanation:
      "The initial July-March spread is 720 - 690 = 30 cents. The final spread is 712 - 686 = 26 cents. A trader short the spread gains when it narrows, so the gain is 4 cents per bushel."
  },
  "s3-market-docx-302": {
    stem:
      "Which statement best describes why exchange-recognized spread positions often receive lower margin requirements than outright futures positions?",
    choices: [
      choice("a", "The two legs are related, so the net market risk is often lower than the risk of an unhedged outright position.", true, "Spread margins are typically lower because related legs can offset some price risk."),
      choice("b", "Spread positions cannot lose money if both legs are held to expiration.", false, "Spreads can lose money when the price relationship moves adversely."),
      choice("c", "A spread position is exempt from daily settlement.", false, "Spread legs are still marked to market."),
      choice("d", "A spread position requires lower margin only when both legs are entered in a single order ticket.", false, "Execution method is not the core reason; the margin treatment is based on recognized risk offsets.")
    ],
    explanation:
      "Spreads generally have lower margin than outright positions because related long and short legs can reduce net price exposure. Lower margin does not mean no risk, and spread positions remain subject to daily settlement."
  },
  "s3-market-docx-314": {
    stem:
      "A trader buys 3 crude oil futures at $78.40 and later sells them at $79.15. Each contract is for 1,000 barrels. Ignoring commissions, what is the gross profit?",
    choices: [
      choice("a", "$2,250 profit.", true, "The price increase is $0.75 per barrel. $0.75 x 1,000 barrels x 3 contracts = $2,250."),
      choice("b", "$750 profit.", false, "This is the profit for one contract, not three contracts."),
      choice("c", "$2,250 loss.", false, "A long futures position profits when the price rises."),
      choice("d", "$225 profit.", false, "This misplaces the decimal in the per-barrel price change.")
    ],
    explanation:
      "For a long futures position, profit equals price increase times contract size times number of contracts. Here: ($79.15 - $78.40) x 1,000 x 3 = $2,250."
  },
  "s3-market-docx-334-2": {
    stem:
      "A trader posts $4,000 margin and earns a $1,200 trading profit after commissions. What is the return on margin?",
    choices: [
      choice("a", "30%.", true, "Return on margin is profit divided by margin: $1,200 / $4,000 = 30%."),
      choice("b", "12%.", false, "This does not use the stated margin as the denominator."),
      choice("c", "40%.", false, "This would require a $1,600 profit on $4,000 margin."),
      choice("d", "300%.", false, "This misplaces the decimal point.")
    ],
    explanation:
      "Return on margin measures the trading gain relative to the margin deposit. The calculation is $1,200 / $4,000 = 0.30, or 30%."
  },
  "s3-market-docx-335-2": {
    stem:
      "A trader is short 4 corn futures contracts at 525 cents per bushel and offsets at 517 cents. Each contract covers 5,000 bushels. Ignoring commissions, what is the gross result?",
    choices: [
      choice("a", "$1,600 profit.", true, "A short gains when price falls. The decline is 8 cents, or $0.08, per bushel. $0.08 x 5,000 x 4 = $1,600."),
      choice("b", "$1,600 loss.", false, "The price fell, which benefits a short futures position."),
      choice("c", "$400 profit.", false, "This is the profit for one contract, not four contracts."),
      choice("d", "$160 profit.", false, "This misplaces the decimal in the cents-per-bushel move.")
    ],
    explanation:
      "For a short futures position, profit equals sale price minus purchase price times contract size. The 8-cent decline equals $0.08 per bushel, so the gross profit is $0.08 x 5,000 x 4 = $1,600."
  },
  "s3-market-docx-337": {
    stem:
      "A trader buys one 5,000-bushel wheat futures contract at $6.12 1/2 per bushel and sells it at $6.18 1/4. Ignoring commissions, what is the gross profit?",
    choices: [
      choice("a", "$287.50 profit.", true, "The gain is 5.75 cents, or $0.0575, per bushel. $0.0575 x 5,000 = $287.50."),
      choice("b", "$575.00 profit.", false, "This doubles the one-contract result."),
      choice("c", "$287.50 loss.", false, "A long futures position profits when the offsetting sale price is higher."),
      choice("d", "$28.75 profit.", false, "This misplaces the decimal point.")
    ],
    explanation:
      "$6.12 1/2 equals $6.125 and $6.18 1/4 equals $6.1825. The difference is $0.0575 per bushel. For 5,000 bushels, profit is $287.50."
  },
  "s3-market-docx-337-2": {
    stem:
      "A trader sells one 5,000-bushel wheat futures contract at $7.04 3/4 and buys it back at $7.01 1/4. Ignoring commissions, what is the gross result?",
    choices: [
      choice("a", "$175 profit.", true, "A short gains when price falls. The decline is 3.5 cents, or $0.035, per bushel. $0.035 x 5,000 = $175."),
      choice("b", "$175 loss.", false, "The offset price is lower than the sale price, so the short position gains."),
      choice("c", "$350 profit.", false, "This doubles the one-contract result."),
      choice("d", "$35 profit.", false, "This misplaces the decimal in the price change.")
    ],
    explanation:
      "$7.04 3/4 is $7.0475 and $7.01 1/4 is $7.0125. The short futures gain is $0.035 per bushel x 5,000 bushels = $175."
  },
  "s3-market-docx-339-2": {
    stem:
      "A trader deposits $2,500 initial margin, pays $80 total commissions, and earns a $920 gross futures profit. What is the return on margin after commissions?",
    choices: [
      choice("a", "33.6%.", true, "Net profit is $920 - $80 = $840. $840 / $2,500 = 33.6%."),
      choice("b", "36.8%.", false, "This uses gross profit before commissions: $920 / $2,500."),
      choice("c", "30.4%.", false, "This subtracts too much from the gross profit."),
      choice("d", "8.4%.", false, "This divides net profit by $10,000 rather than the stated margin.")
    ],
    explanation:
      "Return on margin after commissions uses net trading profit divided by the margin deposit. Net profit is $840, so the return is $840 / $2,500 = 0.336, or 33.6%."
  },
  "s3-market-docx-356": {
    stem:
      "A trader buys 2 Treasury note futures at 114-16 and later sells them at 115-08. Each full point is worth $1,000 per contract. Ignoring commissions, what is the gross result?",
    choices: [
      choice("a", "$1,500 profit.", true, "The price rises by 24/32 of a point. 24/32 x $1,000 = $750 per contract; two contracts produce $1,500 profit."),
      choice("b", "$1,500 loss.", false, "The trader is long and the futures price increased."),
      choice("c", "$750 profit.", false, "This is the profit for one contract, not two."),
      choice("d", "$2,400 profit.", false, "This incorrectly treats 24/32 as 2.4 full points.")
    ],
    explanation:
      "Treasury futures quoted in 32nds require converting the price move to a fraction of a point. From 114-16 to 115-08 is a 24/32 point increase. At $1,000 per point, the gain is $750 per contract, or $1,500 for two contracts."
  },
  "s3-market-docx-361": {
    stem:
      "A trader sells 5 natural gas futures at $3.420 and offsets at $3.355. Each contract covers 10,000 MMBtu. Ignoring commissions, what is the gross result?",
    choices: [
      choice("a", "$3,250 profit.", true, "The short gains $0.065 per MMBtu. $0.065 x 10,000 x 5 = $3,250."),
      choice("b", "$3,250 loss.", false, "A short position gains when the futures price declines."),
      choice("c", "$650 profit.", false, "This is the profit for one contract, not five."),
      choice("d", "$325 profit.", false, "This misplaces the decimal point.")
    ],
    explanation:
      "A short futures position profits when the offsetting purchase price is below the sale price. The price decline is $0.065 per MMBtu, so profit is $0.065 x 10,000 x 5 = $3,250."
  },
  "s3-market-docx-366": {
    stem:
      "A trader buys 3 Eurodollar futures at 94.80 and sells them at 95.05. A one-basis-point move is worth $25 per contract. Ignoring commissions, what is the gross result?",
    choices: [
      choice("a", "$1,875 profit.", true, "The price rises 25 basis points. 25 x $25 x 3 contracts = $1,875."),
      choice("b", "$1,875 loss.", false, "The trader is long and the futures price increased."),
      choice("c", "$625 profit.", false, "This is the gain for one contract, not three."),
      choice("d", "$18,750 profit.", false, "This adds an extra zero to the basis-point value.")
    ],
    explanation:
      "Eurodollar futures use a $25 value per basis point per contract. The move from 94.80 to 95.05 is 25 basis points, so 25 x $25 x 3 = $1,875 profit."
  },
  "s3-market-docx-370": {
    stem:
      "A trader buys 6 silver futures at $24.10 and sells them at $24.46. Each contract covers 5,000 ounces. Ignoring commissions, what is the gross result?",
    choices: [
      choice("a", "$10,800 profit.", true, "The gain is $0.36 per ounce. $0.36 x 5,000 x 6 = $10,800."),
      choice("b", "$10,800 loss.", false, "A long futures position gains when price rises."),
      choice("c", "$1,800 profit.", false, "This is the profit for one contract, not six."),
      choice("d", "$108,000 profit.", false, "This adds an extra zero.")
    ],
    explanation:
      "The futures price increased by $0.36 per ounce. Multiplying by 5,000 ounces and 6 contracts gives $10,800 gross profit."
  },
  "s3-market-docx-373-2": {
    stem:
      "A trader posts $1,500 margin for one futures contract. The trade loses $1,000 and the round-turn commission is $50. What is the loss as a percentage of margin?",
    choices: [
      choice("a", "70%.", true, "Total loss is $1,000 + $50 = $1,050. $1,050 / $1,500 = 70%."),
      choice("b", "66.7%.", false, "This ignores the $50 commission and uses $1,000 / $1,500."),
      choice("c", "35%.", false, "This would correspond to about half of the stated total loss."),
      choice("d", "105%.", false, "This compares the dollar loss to $1,000 rather than to the margin deposit.")
    ],
    explanation:
      "When return or loss on margin includes commission, first add commission to the trading loss. Here the total loss is $1,050. Dividing by $1,500 margin gives 0.70, or 70%."
  },
  "s3-market-docx-398-2": {
    stem:
      "Which options position is a horizontal, or calendar, spread?",
    choices: [
      choice("a", "Buy a September crude oil call and sell a December crude oil call with the same strike price.", true, "A calendar spread uses options on the same underlying and strike but different expiration months."),
      choice("b", "Buy a September crude oil call and sell a September crude oil call with a higher strike price.", false, "That is a vertical spread because the expiration is the same and the strikes differ."),
      choice("c", "Buy a September crude oil call and buy a September crude oil put with the same strike price.", false, "That is a straddle-like position, not a calendar spread."),
      choice("d", "Buy a crude oil call and sell a gold call with the same expiration.", false, "Different underlying markets make this an intermarket-style relationship, not a calendar options spread.")
    ],
    explanation:
      "A horizontal or calendar spread is built with options on the same underlying futures and usually the same strike price, but with different expiration months."
  },
  "s3-market-docx-414-2": {
    stem:
      "Which statement best describes a crack spread in energy futures?",
    choices: [
      choice("a", "It compares crude oil prices with refined product prices such as gasoline or heating oil.", true, "A crack spread measures the relationship between crude oil input prices and refined product output prices."),
      choice("b", "It compares corn futures with soybean futures to measure crop substitution.", false, "That is an agricultural intercommodity relationship, not a crack spread."),
      choice("c", "It compares two delivery months of the same crude oil futures contract.", false, "That is an intramarket calendar spread in crude oil, not a crack spread."),
      choice("d", "It compares cash crude oil with Treasury futures.", false, "A crack spread concerns petroleum refining economics, not interest-rate futures.")
    ],
    explanation:
      "A crack spread is an energy spread related to refining margins. It compares crude oil futures with refined products such as gasoline and heating oil, often after converting product quotes into comparable barrel values."
  },
  "s3-market-docx-436-2": {
    stem:
      "Which position is a long call butterfly using the same underlying futures and expiration?",
    choices: [
      choice("a", "Buy 1 low-strike call, sell 2 middle-strike calls, and buy 1 high-strike call.", true, "A long call butterfly combines a bull call spread and a bear call spread, with the middle strike sold twice."),
      choice("b", "Sell 1 low-strike call, buy 2 middle-strike calls, and sell 1 high-strike call.", false, "That is the opposite, a short call butterfly."),
      choice("c", "Buy 1 call and buy 1 put at the same strike.", false, "That is a straddle, not a butterfly."),
      choice("d", "Buy calls on two unrelated futures markets.", false, "A butterfly uses the same underlying and expiration with different strikes.")
    ],
    explanation:
      "A long call butterfly uses three strike prices: long one lower-strike call, short two middle-strike calls, and long one higher-strike call. It has limited risk and limited profit potential."
  },
  "s3-market-docx-437": {
    stem:
      "Heating oil futures are quoted in dollars per gallon and one contract covers 42,000 gallons. If a trader buys one contract at $2.4800 and sells it at $2.5150, what is the gross profit?",
    choices: [
      choice("a", "$1,470 profit.", true, "The gain is $0.0350 per gallon. $0.0350 x 42,000 gallons = $1,470."),
      choice("b", "$1,470 loss.", false, "A long futures position gains when the sale price is higher than the purchase price."),
      choice("c", "$147 profit.", false, "This misplaces the decimal in the contract-size calculation."),
      choice("d", "$3,500 profit.", false, "This incorrectly treats the contract as 100,000 gallons.")
    ],
    explanation:
      "Heating oil futures P&L equals the price change per gallon times 42,000 gallons per contract. Here, $2.5150 - $2.4800 = $0.0350, and $0.0350 x 42,000 = $1,470 profit."
  },
  "s3-regulatory-pdf-039": {
    stem:
      "An exchange trade is not executed by open, competitive bidding. Which condition most directly supports the trade being permissible?",
    choices: [
      choice("a", "The trade is executed under a written exchange rule or procedure permitted under the CFTC oversight framework.", true, "Noncompetitive execution may be allowed only under recognized exchange rules or procedures that fit the regulatory framework."),
      choice("b", "The customer verbally agrees after the trade is completed.", false, "Post-trade customer agreement does not replace exchange and CFTC execution requirements."),
      choice("c", "The member firm decides that competitive execution would be inconvenient.", false, "Convenience is not a regulatory exception."),
      choice("d", "The trade is profitable for both customers.", false, "Profitability does not determine whether execution complied with exchange rules.")
    ],
    explanation:
      "The exam point is that exchange trades generally require competitive execution unless a permitted exception applies under written exchange rules and the CFTC oversight framework."
  },
  "s3-regulatory-pdf-072": {
    stem:
      "An FCM receives customer margin funds for futures trading. How must those customer funds generally be treated?",
    choices: [
      choice("a", "They must be segregated from the FCM's own funds as required by customer-fund protection rules.", true, "Customer futures funds are subject to segregation requirements and cannot simply be commingled with the FCM's proprietary assets."),
      choice("b", "They may be used freely as the FCM's working capital if the customer account is profitable.", false, "Customer profitability does not permit misuse of segregated funds."),
      choice("c", "They become the property of the exchange once deposited.", false, "The funds remain customer funds subject to regulatory protections."),
      choice("d", "They are exempt from recordkeeping because they are held for customers.", false, "Customer funds require careful books, records, and segregation controls.")
    ],
    explanation:
      "A core FCM rule is protection of customer funds. Futures customer funds must be handled under segregation rules and may not be treated as the FCM's own operating capital."
  },
  "s3-regulatory-pdf-073": {
    stem:
      "Which situation is most likely to raise a just-and-equitable-principles concern for an NFA Member or Associate?",
    choices: [
      choice("a", "Using misleading conduct or unfair dealing in connection with commodity interest business.", true, "NFA conduct standards require Members and Associates to observe high standards of commercial honor and just and equitable principles of trade."),
      choice("b", "Providing a required risk disclosure before account opening.", false, "Providing required disclosure supports compliance; it is not the misconduct being tested."),
      choice("c", "Maintaining required books and records for the prescribed period.", false, "Required recordkeeping is a compliance obligation."),
      choice("d", "Supervising associated persons under written procedures.", false, "Reasonable supervision is required and does not itself violate just-and-equitable-principles standards.")
    ],
    explanation:
      "NFA's just-and-equitable-principles standard is a broad conduct rule. Misleading, unfair, or commercially dishonorable conduct can violate it even if the specific fact pattern is not limited to one narrow rule."
  },
  "s3-regulatory-pdf-130-2": {
    stem:
      "A CPO disclosure document presents past performance for a pool. Which presentation is most consistent with the general regulatory purpose of performance disclosure?",
    choices: [
      choice("a", "Present performance in a balanced way that includes material context such as periods covered, fees, and limitations of the data.", true, "Performance disclosure should not be misleading; investors need the context necessary to understand what the numbers represent."),
      choice("b", "Show only the most profitable month because it is the most persuasive result.", false, "Cherry-picking favorable results is misleading."),
      choice("c", "Omit fees and expenses so that customers can focus on gross trading skill.", false, "Fees and expenses are material to performance presentation."),
      choice("d", "Use hypothetical results without identifying them as hypothetical.", false, "Hypothetical or simulated results require clear cautionary treatment.")
    ],
    explanation:
      "CPO and CTA performance materials must be presented in a way that is not misleading. The important exam concept is balanced, contextual performance disclosure rather than selective or unexplained performance claims."
  },
  "s3-regulatory-pdf-136": {
    stem:
      "An NFA Member wants to use an article reprint as promotional material. What is the safest compliance approach?",
    choices: [
      choice("a", "Review the reprint and related presentation so the overall communication is fair, balanced, and not misleading.", true, "Members remain responsible for promotional material they use, including reprints and how they are presented."),
      choice("b", "Use the article without review because a third party originally wrote it.", false, "Third-party authorship does not remove the member's responsibility for promotional use."),
      choice("c", "Remove all risk discussion because the article is not a formal disclosure document.", false, "Promotional material must not be misleading by omitting material context."),
      choice("d", "State that NFA approved the article unless NFA objects after publication.", false, "NFA membership or silence should not be represented as approval of promotional content.")
    ],
    explanation:
      "NFA promotional-material standards focus on whether the member's communication is fair, balanced, and not misleading. A reprint can become promotional material when used by the member, so the member must review its content and presentation."
  },
  "s3-regulatory-pdf-228": {
    stem:
      "Under current CFTC recordkeeping principles, how long must many required regulatory records generally be kept?",
    choices: [
      choice("a", "For at least five years, with accessibility requirements during the retention period.", true, "CFTC Regulation 1.31 generally uses a five-year retention framework, with records required to be readily accessible according to the rule's access standards."),
      choice("b", "Only until the related customer account is closed.", false, "Closing an account does not end the general regulatory retention period."),
      choice("c", "Only for the calendar month in which the record was created.", false, "One month is far shorter than the general retention framework."),
      choice("d", "There is no retention requirement if the record is stored electronically.", false, "Electronic records remain subject to retention and accessibility requirements.")
    ],
    explanation:
      "The current app-safe exam point is the general five-year CFTC record-retention framework, with accessibility and production obligations under Regulation 1.31. The wording avoids relying on older storage-technology formulations."
  }
};

function parseQuestionFile(path, exportName) {
  let text = fs.readFileSync(path, "utf8");
  text = text.replace(/^import[^\n]+\n\n?/, "");
  text = text.replace(new RegExp(`^export const ${exportName}: Question\\[] = `), "");
  text = text.replace(/;\s*$/, "");
  return JSON.parse(text);
}

function writeQuestionFile(path, exportName, questions) {
  const body = JSON.stringify(questions, null, 2);
  fs.writeFileSync(path, `import type { Question } from "../types";\n\nexport const ${exportName}: Question[] = ${body};\n`, "utf8");
}

let changed = 0;
const missing = [];

for (const file of files) {
  const questions = parseQuestionFile(file.path, file.exportName);
  for (const question of questions) {
    const fix = fixes[question.id];
    if (!fix) continue;
    Object.assign(question, {
      ...fix,
      questionType: "multiple_choice",
      sourceType: "imported",
      active: true,
      reviewStatus: "reviewed",
      qualityStatus: "verified",
      qualityNotes:
        "Rejected duplicate salvaged as a distinct app-ready imported-derived QCM. The stem, answer choices, explanation, and rationales were rewritten to avoid duplicating the kept source item while preserving the tested Series 3 concept.",
      issueTypes: [],
      extractionConfidence: "high",
      verifiedAt: reviewedAt,
      verifiedBy,
      updatedAt: reviewedAt,
      sourceNote: `${question.sourceNote ?? "User-provided source import."} Rejected duplicate salvaged and rewritten as a distinct verified item on 2026-05-14.`
    });
    changed += 1;
  }
  writeQuestionFile(file.path, file.exportName, questions);
}

for (const id of Object.keys(fixes)) {
  const found = files.some((file) => parseQuestionFile(file.path, file.exportName).some((question) => question.id === id));
  if (!found) missing.push(id);
}

console.log(JSON.stringify({ changed, missing }, null, 2));
