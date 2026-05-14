import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const verifiedAt = "2026-05-14T00:00:00.000Z";

function extractArray(source) {
  const start = source.indexOf("= [");
  const end = source.lastIndexOf("];");
  if (start === -1 || end === -1) {
    throw new Error("Could not locate exported question array");
  }
  return JSON.parse(source.slice(start + 2, end + 1));
}

function tsContent(exportName, questions) {
  return `import type { Question } from "../types";\n\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
}

function replaceQuestion(questions, id, updater) {
  const index = questions.findIndex((question) => question.id === id);
  if (index === -1) throw new Error(`Missing question ${id}`);
  questions[index] = updater(questions[index]);
}

function appendSourceNote(question, note) {
  const current = question.sourceNote ?? "";
  const cleaned = current
    .split(note)
    .join("")
    .replace(/\s+\./g, ".")
    .replace(/\s+/g, " ")
    .trim();
  const separator = cleaned.endsWith(".") ? " " : ". ";
  return `${cleaned}${separator}${note}`;
}

function markVerified(question, notes, verifiedBy = "OpenAI gpt-5.5 vision import + Codex second recovery manual audit") {
  return {
    ...question,
    reviewStatus: "reviewed",
    qualityStatus: "verified",
    qualityNotes: notes,
    issueTypes: [],
    extractionConfidence: "high",
    verifiedAt,
    verifiedBy,
    updatedAt: verifiedAt
  };
}

async function main() {
  const marketPath = path.join(root, "src", "data", "s3MarketDocxQuestions.ts");
  const regulatoryPath = path.join(root, "src", "data", "s3RegulatoryPdfQuestions.ts");

  const market = extractArray(await fs.readFile(marketPath, "utf8"));
  const regulatory = extractArray(await fs.readFile(regulatoryPath, "utf8"));

  replaceQuestion(market, "s3-market-docx-23", (question) =>
    markVerified(
      {
        ...question,
        questionType: "multiple_choice",
        stem:
          "A customer who does not have direct exchange trading privileges wants to trade a futures contract. Which route is generally used to enter the order?",
        choices: [
          {
            id: "a",
            text: "The customer routes the order through an FCM, broker, or other authorized exchange member access arrangement.",
            isCorrect: true,
            rationale:
              "Customers without direct exchange trading privileges generally access futures markets through an FCM, broker, or authorized member/clearing relationship."
          },
          {
            id: "b",
            text: "The customer sends the order directly to the exchange without any member, clearing, or authorized access relationship.",
            isCorrect: false,
            rationale:
              "Direct exchange access requires appropriate exchange permissions and clearing/access arrangements; ordinary customers do not simply send orders directly without them."
          },
          {
            id: "c",
            text: "The customer files the order with the CFTC, which then routes it to the exchange.",
            isCorrect: false,
            rationale:
              "The CFTC is a regulator; it does not route customer futures orders for execution."
          },
          {
            id: "d",
            text: "The customer files the order with the NFA, which matches the trade with another customer.",
            isCorrect: false,
            rationale:
              "NFA is a self-regulatory organization; it does not act as an exchange matching engine for customer trades."
          }
        ],
        explanation:
          "The source item used older 'seat owner or lessee' language. The current app-ready version tests the same market-access concept in modern terms: a customer without direct exchange trading privileges generally accesses the futures market through an FCM, broker, or authorized member/clearing access arrangement rather than by sending orders directly to the exchange as an unaffiliated public customer.",
        sourceNote: appendSourceNote(
          question,
          "Second recovery: rewritten from the source concept to avoid outdated exchange-seat terminology while preserving the tested market-access idea."
        )
      },
      "Second recovery: verified after replacing outdated exchange-seat wording with current, general futures-market access terminology."
    )
  );

  replaceQuestion(market, "s3-market-docx-332", (question) =>
    markVerified(
      {
        ...question,
        stem:
          "A trader is long 7 ICE sugar futures contracts at $0.1800 per pound and offsets the position after the price drops 100 points. Each sugar futures contract covers 112,000 pounds. Assume the only commission included is $10 per contract on the offset transaction. What is the trader's net loss?",
        choices: [
          {
            id: "a",
            text: "$7,840",
            isCorrect: false,
            rationale:
              "This is the gross futures loss before commission: 7 contracts x 112,000 pounds x $0.01."
          },
          {
            id: "b",
            text: "$7,770",
            isCorrect: false,
            rationale:
              "This subtracts commission from a losing trade. Commission is a transaction cost and increases the net loss."
          },
          {
            id: "c",
            text: "$7,910",
            isCorrect: true,
            rationale:
              "A 100-point sugar move equals $0.01 per pound. Gross loss is 7 x 112,000 x $0.01 = $7,840. Add $70 commission for 7 contracts, giving a $7,910 net loss."
          },
          {
            id: "d",
            text: "$7,980",
            isCorrect: false,
            rationale:
              "This would apply a $10 commission per contract on both entry and exit. The revised stem includes only the offset-transaction commission."
          }
        ],
        explanation:
          "Sugar futures are quoted in cents per pound. A 100-point move in sugar equals 1 cent per pound, or $0.01 per pound. Gross loss per contract = 112,000 pounds x $0.01 = $1,120. For 7 contracts, gross loss = $1,120 x 7 = $7,840. Commission is a cost, so add $10 x 7 = $70. Net loss = $7,840 + $70 = $7,910.",
        sourceNote: appendSourceNote(
          question,
          "Second recovery: corrected the source calculation because commission must be treated as a cost, not subtracted from a trading loss."
        )
      },
      "Second recovery: calculation recomputed. The old imported answer subtracted commission from a loss; the verified version adds commission as a transaction cost and makes the commission assumption explicit.",
      "OpenAI gpt-5.5 vision import + Codex second recovery calculation audit"
    )
  );

  replaceQuestion(regulatory, "s3-regulatory-pdf-085", (question) =>
    markVerified(
      {
        ...question,
        choices: [
          {
            id: "a",
            text: "Five years from the date of publication or first use.",
            isCorrect: false,
            rationale:
              "The current NFA rule measures the retention period from the date of last use, not publication or first use."
          },
          {
            id: "b",
            text: "Three years from the date of last use.",
            isCorrect: false,
            rationale:
              "This appears to reflect an older source answer. Current NFA guidance points to five years from last use, with ready accessibility for the first two years."
          },
          {
            id: "c",
            text: "Five years from the date of last use, with the records readily accessible during the first two years.",
            isCorrect: true,
            rationale:
              "NFA promotional-material guidance states that promotional material must be kept for five years from last use and readily accessible during the first two years."
          },
          {
            id: "d",
            text: "One year from the date of last use.",
            isCorrect: false,
            rationale:
              "One year is shorter than the current promotional-material recordkeeping period."
          }
        ],
        explanation:
          "Current NFA promotional-material guidance states that a Member must keep promotional material on file for five years from the date of last use and have it readily accessible during the first two years. NFA Rule 2-29(f) also ties promotional-material recordkeeping to the periods specified in CFTC Regulation 1.31, measured from last use.",
        sourceNote: appendSourceNote(
          question,
          "Second recovery: current answer verified against NFA Promotional Material FAQs and NFA Compliance Rule 2-29(f), checked 2026-05-14."
        )
      },
      "Second recovery: promoted after official-source check. The source's three-year answer is outdated; current NFA guidance is five years from last use, readily accessible for the first two years.",
      "OpenAI gpt-5.5 vision import + Codex second recovery official-source audit"
    )
  );

  replaceQuestion(regulatory, "s3-regulatory-pdf-097", (question) =>
    markVerified(
      {
        ...question,
        explanation:
          "NFA Code of Arbitration Section 5 provides that an arbitration claim or notice of intent to arbitrate must be received by NFA within two years from the date when the filing party knew or should have known of the act or transaction that is the subject of the controversy. This item is limited to the NFA arbitration timing rule.",
        sourceNote: appendSourceNote(
          question,
          "Second recovery: NFA two-year arbitration timing verified against NFA Code of Arbitration Section 5 and NFA Customer Arbitration Guide, checked 2026-05-14."
        )
      },
      "Second recovery: promoted after official-source check of NFA Code of Arbitration Section 5. The explanation was narrowed to NFA arbitration and no longer makes an unchecked CFTC reparations statement.",
      "OpenAI gpt-5.5 vision import + Codex second recovery official-source audit"
    )
  );

  replaceQuestion(regulatory, "s3-regulatory-pdf-119", (question) =>
    markVerified(
      {
        ...question,
        choices: [
          {
            id: "a",
            text: "The customer must provide written trading authorization, such as a signed power of attorney, before discretionary trading occurs.",
            isCorrect: true,
            rationale:
              "Written customer or account-controller authorization is required before discretionary trading authority may be exercised."
          },
          {
            id: "b",
            text: "The associated person must have at least three years of experience handling customer accounts.",
            isCorrect: false,
            rationale:
              "NFA Rule 2-8 uses a two-year continuous registration/work requirement for an AP of an FCM or IB to exercise discretion, subject to stated exceptions or waiver; three years is not the rule."
          },
          {
            id: "c",
            text: "The account may be handled without written authorization if the customer gives verbal permission before each trade.",
            isCorrect: false,
            rationale:
              "Verbal permission is not enough for discretionary authority. Written authorization is required for discretionary trading."
          },
          {
            id: "d",
            text: "Supervisor review is required only when the account has generated a customer complaint.",
            isCorrect: false,
            rationale:
              "Discretionary trading must be supervised under written review procedures; review is not limited to complaint situations."
          }
        ],
        explanation:
          "The repaired question asks for one clear requirement: written authorization. CFTC Regulation 166.2 requires specific authorization for individual trades or written authorization for discretionary trading authority. NFA Rule 2-8 similarly states that no Member or Associate may exercise discretion over a customer's commodity futures or cleared swaps account unless the customer or account controller has authorized that discretion in writing. NFA Rule 2-8 also includes supervisory review requirements and a two-year AP experience requirement for FCM/IB discretionary accounts, but those are not the correct choices in this narrowed item.",
        sourceNote: appendSourceNote(
          question,
          "Second recovery: narrowed and verified against CFTC Regulation 166.2 and NFA Compliance Rule 2-8, checked 2026-05-14."
        )
      },
      "Second recovery: promoted after narrowing the item to the written-authorization requirement and checking CFTC Regulation 166.2 plus NFA Rule 2-8.",
      "OpenAI gpt-5.5 vision import + Codex second recovery official-source audit"
    )
  );

  await fs.writeFile(marketPath, tsContent("s3MarketDocxQuestions", market), "utf8");
  await fs.writeFile(regulatoryPath, tsContent("regulatoryPdfQuestions", regulatory), "utf8");

  const imported = [...market, ...regulatory];
  const counts = imported.reduce(
    (acc, question) => {
      acc.total += 1;
      acc[question.qualityStatus ?? "needs_review"] += 1;
      return acc;
    },
    { total: 0, verified: 0, needs_review: 0, rejected: 0 }
  );
  console.log(JSON.stringify(counts, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
