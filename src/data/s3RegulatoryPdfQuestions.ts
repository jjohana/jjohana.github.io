import type { Question } from "../types";

export const regulatoryPdfQuestions: Question[] = [
  {
    "id": "s3-regulatory-pdf-001",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Associated Person registration may apply to an individual who is associated in a position requiring registration with which of the following types of firms?",
    "choices": [
      {
        "id": "a",
        "text": "Futures commission merchants, introducing brokers, commodity trading advisors, and commodity pool operators",
        "isCorrect": true,
        "rationale": "Associated Person registration applies to individuals associated in a registration-requiring capacity with FCMs, IBs, CTAs, and CPOs."
      },
      {
        "id": "b",
        "text": "Designated contract markets only",
        "isCorrect": false,
        "rationale": "Association with a designated exchange or designated contract market, by itself, is not the AP registration category tested here."
      },
      {
        "id": "c",
        "text": "Clearinghouses and contract markets only",
        "isCorrect": false,
        "rationale": "The AP category is tied to association with registrants such as FCMs, IBs, CTAs, and CPOs, not merely clearinghouses or contract markets."
      },
      {
        "id": "d",
        "text": "Commercial hedgers that trade futures for their own business accounts",
        "isCorrect": false,
        "rationale": "A commercial hedger trading for its own business account is not, merely for that reason, a firm whose employees are covered by the AP registration category."
      }
    ],
    "explanation": "The tested concept is that the Associated Person registration category applies to individuals associated, in a capacity requiring registration, with registrants such as futures commission merchants, introducing brokers, commodity trading advisors, and commodity pool operators. The original source also referenced leverage transaction merchants, but among the app-ready choices the best standalone answer is the one listing FCMs, IBs, CTAs, and CPOs, and excluding designated exchanges.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-001; sequence 1; source code 10_EZ_31.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove letter-referenced answer choices and make each choice standalone. The source concept is clear and preserved. Repair: Converted the source's reference-style correct answer ('A and C, only') into a standalone correct choice listing FCMs, IBs, CTAs, and CPOs. Removed all answer-letter references and retained a single clearly correct answer. Second-pass review: The repaired item is readable, uses standalone answer choices, has exactly one unambiguous correct answer, and preserves the tested AP-registration concept. The omission of leverage transaction merchants from the correct choice is acceptable because the stem asks which listed types may trigger AP registration rather than asking for an exhaustive list, and the explanation appropriately notes the source reference.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "1",
    "sourceQuestionNumber": 1,
    "sourceCode": "10_EZ_31",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-002",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The federal regulatory agency created in 1974 to oversee the U.S. futures markets is the:",
    "choices": [
      {
        "id": "a",
        "text": "National Futures Association.",
        "isCorrect": false,
        "rationale": "The National Futures Association is a self-regulatory organization, not the federal regulatory agency created in 1974."
      },
      {
        "id": "b",
        "text": "Commodity Futures Trading Commission.",
        "isCorrect": true,
        "rationale": "The Commodity Futures Trading Commission was created in 1974 and is the federal regulatory agency that oversees U.S. futures and futures options markets."
      },
      {
        "id": "c",
        "text": "Commodity Exchange Authority.",
        "isCorrect": false,
        "rationale": "The Commodity Exchange Authority was a predecessor agency, not the federal regulator created in 1974."
      },
      {
        "id": "d",
        "text": "Commodity Futures Commission.",
        "isCorrect": false,
        "rationale": "This is not the correct name of the federal futures regulator."
      }
    ],
    "explanation": "The Commodity Futures Trading Commission, which was created in 1974, is the federal regulatory agency that oversees the U.S. futures and futures options markets.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-002; sequence 2; source code 10_EZ_40.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question and answer choices are fully visible. The stated answer is consistent with current regulatory terminology: the CFTC was created by the Commodity Futures Trading Commission Act of 1974 and regulates U.S. futures and options on futures markets.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "2",
    "sourceQuestionNumber": 2,
    "sourceCode": "10_EZ_40",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-003",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "In addition to other specific compliance rules, the NFA has a rule requiring members to observe high standards of commercial honor and just and equitable principles of trade.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA Compliance Rule 2-4 requires Members and Associates to observe high standards of commercial honor and just and equitable principles of trade."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "NFA rules do include this requirement under Compliance Rule 2-4."
      }
    ],
    "explanation": "NFA Compliance Rule 2-4, Just and Equitable Principles of Trade, requires Members and Associates to observe high standards of commercial honor and just and equitable principles of trade in the conduct of their commodity futures and options business.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-003; sequence 3; source code 10_EZ_28.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory question. The displayed answer and explanation are consistent with NFA Compliance Rule 2-4 and support a single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "3",
    "sourceQuestionNumber": 3,
    "sourceCode": "10_EZ_28",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-004",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Besides information similar to that included in a CTA's disclosure document, the CPO's disclosure document must include the terms and conditions under which participants can withdraw their interests in the pool.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A CPO disclosure document must describe how a participant may redeem or withdraw an interest in the pool, including redemption-value calculation, conditions, required notice, and any restrictions."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because redemption or withdrawal terms are required content in a CPO disclosure document."
      }
    ],
    "explanation": "A CPO's disclosure document must provide a complete description of the manner in which a participant may redeem its interest in the pool, including how the redemption value will be calculated, the conditions under which a participant may redeem its interest, the terms of any required notification, and any restrictions placed on redemption.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-004; sequence 4; source code 10_EZ_5.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single correct answer. Terminology is consistent with CPO disclosure document requirements regarding redemption of pool interests.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "4",
    "sourceQuestionNumber": 4,
    "sourceCode": "10_EZ_5",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-005",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "reparations-procedures",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A pre-dispute resolution agreement may not require a customer to waive the right to seek CFTC reparations.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC regulations provide that a pre-dispute resolution (arbitration) agreement may not require a customer to waive the right to file a reparations claim in accordance with CFTC rules."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "Such an agreement may not require the customer to waive the right to seek CFTC reparations."
      }
    ],
    "explanation": "CFTC regulations provide that a pre-dispute resolution or arbitration agreement may not require a customer to waive the right to file a reparations claim in accordance with CFTC rules.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-005; sequence 5; source code 10_EZ_34.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The stated answer and explanation are consistent with the regulatory concept that pre-dispute arbitration agreements cannot waive the right to seek CFTC reparations.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "5",
    "sourceQuestionNumber": 5,
    "sourceCode": "10_EZ_34",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-006",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Based on a review of information obtained from each customer, a member of the NFA must determine if additional risk disclosure is required.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA members must evaluate customer information to determine whether additional risk disclosure is needed."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the member must determine whether the customer information indicates a need for additional risk disclosure."
      }
    ],
    "explanation": "The NFA recognizes that, based upon information obtained from a customer, some customers may require additional risk disclosure. In some cases, the only adequate disclosure may be that futures trading is too risky for that customer. After adequate risk disclosure is given, the customer may decide whether to trade, and the NFA member may accept or refuse the account.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-006; sequence 6; source code 10_EZ_10.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with explicit answer and explanation. Terminology is consistent with NFA customer risk disclosure obligations.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "6",
    "sourceQuestionNumber": 6,
    "sourceCode": "10_EZ_10",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-007",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "futures-commission-merchant",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Under the Commodity Exchange Act, which pair of entities are commonly classified as intermediaries in the futures industry?",
    "choices": [
      {
        "id": "a",
        "text": "Futures commission merchants and introducing brokers.",
        "isCorrect": true,
        "rationale": "FCMs and IBs are intermediary registrant categories that connect customers with futures markets and related services."
      },
      {
        "id": "b",
        "text": "Designated contract markets and clearing organizations.",
        "isCorrect": false,
        "rationale": "Exchanges and clearing organizations are market infrastructure entities, not the intermediary categories tested here."
      },
      {
        "id": "c",
        "text": "Floor traders and floor brokers.",
        "isCorrect": false,
        "rationale": "Floor traders and floor brokers are registrant categories, but they are not the FCM/IB intermediary pair identified by this source item."
      },
      {
        "id": "d",
        "text": "Commodity pool operators and commodity trading advisors.",
        "isCorrect": false,
        "rationale": "CPOs and CTAs are regulated participants that operate pools or provide trading advice, but they are not the FCM/IB intermediary pair tested here."
      }
    ],
    "explanation": "The tested concept is that futures commission merchants (FCMs) and introducing brokers (IBs) are intermediary categories under the Commodity Exchange Act framework. An exchange is not an intermediary for this purpose.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-007; sequence 7; source code 10_EZ_70.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Repaired by removing the banned combined-answer-letter and all-of-the-above formats. The revised item has four standalone semantic choices and exactly one correct answer. The concept is clear and general rather than dependent on a current numerical threshold or time-sensitive rule. Repair: Converted the source's referential answer choice \"A and B only\" into a direct correct answer and replaced weak/banned distractors with standalone regulatory categories. Second-pass review: The repaired question is readable, has exactly one unambiguous correct answer, avoids all/none/both/A-and-B formats, and uses standalone plausible choices. Rationales and explanation support the FCM/IB intermediary classification, with no calculations or obviously outdated regulatory claims. Taxonomy is appropriate for U.S. regulations/general regulatory content focused on FCMs and related intermediary categories.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "7",
    "sourceQuestionNumber": 7,
    "sourceCode": "10_EZ_70",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-008",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "commodity-exchange-act-enforcement",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which outcome may result from a violation of the Commodity Exchange Act?",
    "choices": [
      {
        "id": "a",
        "text": "Revocation of registration, monetary penalties, criminal prosecution, or a federal court injunction may be imposed depending on the violation.",
        "isCorrect": true,
        "rationale": "The Commodity Exchange Act provides for multiple enforcement consequences, including registration sanctions, monetary penalties, criminal prosecution, injunctions, and cease-and-desist orders."
      },
      {
        "id": "b",
        "text": "Only a written warning may be issued because the Act does not authorize monetary or registration sanctions.",
        "isCorrect": false,
        "rationale": "The Act authorizes more serious sanctions than a written warning, including monetary penalties and registration-related sanctions."
      },
      {
        "id": "c",
        "text": "Only an exchange disciplinary panel may act because federal authorities have no enforcement role under the Act.",
        "isCorrect": false,
        "rationale": "Federal authorities, including the CFTC and federal courts, have enforcement roles under the Commodity Exchange Act."
      },
      {
        "id": "d",
        "text": "Only civil remedies may be imposed because violations of the Act cannot lead to criminal prosecution.",
        "isCorrect": false,
        "rationale": "Certain violations of the Commodity Exchange Act can result in criminal prosecution in addition to civil or administrative remedies."
      }
    ],
    "explanation": "Violations of the Commodity Exchange Act may lead to a range of sanctions and remedies, including revocation or suspension of registration, monetary penalties, criminal prosecution, federal court injunctions, and cease-and-desist orders. The original \"all of the above\" format has been rewritten as a single best-answer question.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-008; sequence 8; source code 10_EZ_39.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the banned 'all of the above' structure while preserving the tested concept. The rule is a general, stable enforcement concept under the Commodity Exchange Act. Repair: Converted the source item from an 'all of the above' format into a single best-answer question with standalone choices and exactly one correct answer. Second-pass review: The repaired item is readable, has exactly one unambiguous correct answer, removes the original 'all of the above' format, and preserves the tested Commodity Exchange Act enforcement concept. The distractors are plausible enough for an easy regulatory question, and the explanation/rationales accurately support the answer. No calculation issues are present, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "8",
    "sourceQuestionNumber": 8,
    "sourceCode": "10_EZ_39",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-009",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "public-communications",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "NFA Member radio, television, or internet advertisements that make specific reference to trading profits obtained in the past or that can be achieved in the future must:",
    "choices": [
      {
        "id": "a",
        "text": "Be presented by an individual who is a supervisor or who otherwise has two or more years of trading experience.",
        "isCorrect": false,
        "rationale": "The rule shown does not require presentation by a supervisor or by someone with two or more years of trading experience."
      },
      {
        "id": "b",
        "text": "Be available for NFA review for a period of two years.",
        "isCorrect": false,
        "rationale": "The source identifies prior NFA approval, not merely availability for later NFA review, as the requirement for these advertisements."
      },
      {
        "id": "c",
        "text": "Have prior approval of the NFA.",
        "isCorrect": true,
        "rationale": "The source explanation states that NFA Member radio, television, or internet advertisements making specific reference to past or future trading profits must have prior approval of the NFA."
      },
      {
        "id": "d",
        "text": "Be presented by a member firm with at least a three-year trading track record.",
        "isCorrect": false,
        "rationale": "The requirement shown is prior NFA approval, not a three-year trading track record for the member firm."
      }
    ],
    "explanation": "NFA Member radio, television, or internet advertisements that make specific reference to trading profits obtained in the past or that can be achieved in the future must have prior approval of the NFA.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-009; sequence 9; source code 10_EZ_61.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, answer, and explanation are readable. The answer is explicitly shown as C, and the explanation supports it. Classified under public communications because the item concerns NFA advertising requirements for radio, television, or internet communications referencing trading profits.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "9",
    "sourceQuestionNumber": 9,
    "sourceCode": "10_EZ_61",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-010",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "written-authorization",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "While it is generally preferable to have authorization for a discretionary account before trading begins, it is sufficient to receive authorization within one business day of entry of a discretionary trade for the account.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Written authorization is required before discretion may be exercised over a customer's futures or options account."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC and NFA rules require written trading authorization before discretion can be exercised over a customer's futures or options account."
      }
    ],
    "explanation": "CFTC and NFA rules require written trading authorization before discretion can be exercised over a customer's futures or options account, so receiving authorization after the discretionary trade is not sufficient.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-010; sequence 10; source code 10_EZ_35.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item with a clear single correct answer and supporting explanation. The concept is consistent with discretionary-account written authorization requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "10",
    "sourceQuestionNumber": 10,
    "sourceCode": "10_EZ_35",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-011",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Any registrant must promptly file a Form 3-R to correct any deficiency or inaccuracy or to report any change that renders a previous registration form inaccurate.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC and NFA rules require applicants and registrants to report promptly on Form 3-R corrections or changes that make previously filed registration forms or schedules inaccurate or no longer current."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "Registrants are required to promptly report such corrections or changes on Form 3-R."
      }
    ],
    "explanation": "CFTC and NFA rules require applicants and registrants to promptly file Form 3-R for corrections, deficiencies, mistakes, or changes that render previously filed registration forms or schedules inaccurate or no longer current.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-011; sequence 11; source code 10_EZ_41.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single clearly identified correct answer. The terminology is consistent with registration update requirements using Form 3-R.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "11",
    "sourceQuestionNumber": 11,
    "sourceCode": "10_EZ_41",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-012",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The written document that advises prospective customers of the substantial potential for losses in trading futures is called a:",
    "choices": [
      {
        "id": "a",
        "text": "Letter of warning.",
        "isCorrect": false,
        "rationale": "This is not the required CFTC-specified disclosure document for futures/options customers."
      },
      {
        "id": "b",
        "text": "Commodity-account agreement.",
        "isCorrect": false,
        "rationale": "A commodity account agreement governs account terms, but the required warning about substantial potential losses is the risk-disclosure statement."
      },
      {
        "id": "c",
        "text": "Risk-disclosure statement.",
        "isCorrect": true,
        "rationale": "A CFTC-specified risk-disclosure statement must be provided to customers, with signed and dated acknowledgment, before opening a futures or options account."
      },
      {
        "id": "d",
        "text": "Margin agreement.",
        "isCorrect": false,
        "rationale": "A margin agreement relates to margin obligations; it is not the required document advising of the substantial potential for losses."
      }
    ],
    "explanation": "The risk-disclosure statement is a CFTC-specified written disclosure that advises prospective customers about the substantial risks of trading futures and options. It must be provided to customers, and the FCM or IB must obtain a signed and dated acknowledgment before opening the account.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-012; sequence 12; source code 10_EZ_48.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The source answer and explanation are consistent with the regulatory concept of required risk disclosure before account opening.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "12",
    "sourceQuestionNumber": 12,
    "sourceCode": "10_EZ_48",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-013",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "NFA Members and Associates are prohibited from making individualized recommendations to those customers that the Member or Associate has or should have advised that futures trading is too risky for them.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA suitability principles prohibit Members and Associates from making individualized recommendations to customers for whom they have advised, or should have advised, that futures trading is too risky."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The prohibition described in the statement is consistent with NFA suitability obligations."
      }
    ],
    "explanation": "NFA Members and Associates are prohibited from making individualized recommendations to customers when the Member or Associate has advised, or should have advised, that futures trading is too risky for those customers.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-013; sequence 13; source code 10_EZ_74.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question is fully visible, is a clear true/false item, and the displayed answer and explanation support A as the correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "13",
    "sourceQuestionNumber": 13,
    "sourceCode": "10_EZ_74",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-014",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cta-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A person, other than the pool's CPO, is given authority to allocate a commodity pool's assets among CTAs or investee pools. What is the key registration issue?",
    "choices": [
      {
        "id": "a",
        "text": "The authority may make the person a commodity trading advisor or otherwise require registration or an available exemption.",
        "isCorrect": true,
        "rationale": "Allocating pool assets among trading advisers or investee pools is advisory/allocation authority over commodity interest trading and can trigger CTA-style registration analysis."
      },
      {
        "id": "b",
        "text": "The person is automatically exempt because only the CPO can ever need commodity-interest registration.",
        "isCorrect": false,
        "rationale": "Other persons can have registration obligations depending on their advisory, solicitation, trading, or management role."
      },
      {
        "id": "c",
        "text": "The person registers with the SEC only because commodity pools are treated solely as securities funds.",
        "isCorrect": false,
        "rationale": "Commodity pool activity can create CFTC/NFA registration obligations even if other securities-law obligations also apply."
      },
      {
        "id": "d",
        "text": "The person is treated as a floor broker because asset allocation is the same as exchange-floor execution.",
        "isCorrect": false,
        "rationale": "Asset allocation authority is not floor brokerage or floor-trading execution activity."
      }
    ],
    "explanation": "The reliable concept is not the legacy label itself but the registration consequence of authority over commodity pool assets. A person who selects CTAs or investee pools or otherwise directs commodity-interest exposure may be performing advisory or management functions that require CFTC/NFA registration unless an exclusion or exemption applies.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-014; sequence 14; source code 10_EZ_51. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "14",
    "sourceQuestionNumber": 14,
    "sourceCode": "10_EZ_51",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-015",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "In regard to risk disclosure, the NFA has noted that there may be instances where, for some customers, the only adequate risk disclosure is that futures trading is too risky for that customer.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA risk-disclosure guidance recognizes that for some customers, disclosure may need to go beyond standardized risk language; the appropriate disclosure may be that futures trading is too risky for that customer."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This contradicts the NFA concept shown in the source item."
      }
    ],
    "explanation": "The statement is true. The NFA has noted that there may be circumstances in which the only adequate risk disclosure for a particular customer is to inform the customer that futures trading is too risky for that customer.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-015; sequence 15; source code 10_EZ_62.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear displayed correct answer and explanation. The terminology is consistent with NFA risk disclosure/customer suitability-related guidance.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "15",
    "sourceQuestionNumber": 15,
    "sourceCode": "10_EZ_62",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-016",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "nfa-membership",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The NFA's goals include which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "Strengthening industry self-regulation only.",
        "isCorrect": false,
        "rationale": "Strengthening industry self-regulation is one NFA goal, but it is not the only listed goal."
      },
      {
        "id": "b",
        "text": "Providing uniform regulatory standards only.",
        "isCorrect": false,
        "rationale": "Providing uniform regulatory standards is one NFA goal, but it is not the only listed goal."
      },
      {
        "id": "c",
        "text": "Reducing the cost of self-regulation only.",
        "isCorrect": false,
        "rationale": "Reducing the cost of self-regulation is one NFA goal, but it is not the only listed goal."
      },
      {
        "id": "d",
        "text": "Strengthening industry self-regulation, providing uniform regulatory standards, and reducing the cost of self-regulation.",
        "isCorrect": true,
        "rationale": "The source explanation states that the NFA's goals include all three: strengthening industry self-regulation, providing uniform regulatory standards, and reducing the cost of self-regulation."
      }
    ],
    "explanation": "The NFA's goals include strengthening industry self-regulation, providing uniform regulatory standards, and reducing the cost of self-regulation. The source used an \"All of the above\" choice; this has been rewritten semantically for app use.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-016; sequence 16; source code 10_EZ_22.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and internally consistent. The source's \"All of the above\" option was safely rewritten into a semantic answer choice without changing meaning.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "16",
    "sourceQuestionNumber": 16,
    "sourceCode": "10_EZ_22",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-017",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Registration as an Associated Person remains in effect until:",
    "choices": [
      {
        "id": "a",
        "text": "It is revoked or withdrawn.",
        "isCorrect": false,
        "rationale": "This is one condition under which AP registration ceases, but it is not the only listed condition."
      },
      {
        "id": "b",
        "text": "The registration of the registrant's sponsor is revoked or withdrawn.",
        "isCorrect": false,
        "rationale": "This is one condition under which AP registration ceases, but it is not the only listed condition."
      },
      {
        "id": "c",
        "text": "The Associated Person is no longer associated with the sponsoring registrant.",
        "isCorrect": false,
        "rationale": "This is one condition under which AP registration ceases, but it is not the only listed condition."
      },
      {
        "id": "d",
        "text": "Any of these conditions occurs: the registration is revoked or withdrawn, the sponsor's registration is revoked or withdrawn, or the AP is no longer associated with the sponsor.",
        "isCorrect": true,
        "rationale": "AP registration remains in effect only until one of the listed terminating events occurs."
      },
      {
        "id": "e",
        "text": "Only the registration is revoked or withdrawn, or the sponsor's registration is revoked or withdrawn.",
        "isCorrect": false,
        "rationale": "This omits the condition that the AP is no longer associated with the sponsoring registrant."
      }
    ],
    "explanation": "Registration as an AP remains in effect until it is revoked or withdrawn; the registration of the registrant's sponsor is revoked or withdrawn; or the registrant is no longer associated with the sponsor.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-017; sequence 17; source code 10_EZ_37.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source used combination choices such as 'A, B, and C.' The app-ready version rewrites the correct answer semantically to avoid answer-choice references while preserving the tested concept.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "17",
    "sourceQuestionNumber": 17,
    "sourceCode": "10_EZ_37",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-018",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "NFA Rule 2-30 (Customer Information and Risk Disclosure) is commonly referred to as the \"know-your-customer\" rule.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 is commonly referred to as the know-your-customer rule, though it does not impose a securities-style suitability determination requiring a firm to bar a customer from futures trading."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because NFA Rule 2-30 is commonly known as the know-your-customer rule."
      }
    ],
    "explanation": "NFA Rule 2-30, Customer Information and Risk Disclosure, is often referred to as the \"know-your-customer\" rule. However, unlike some securities know-your-customer rules, it does not require a member or associate to make a final suitability determination barring a customer from futures trading.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-018; sequence 18; source code 10_EZ_23.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with visible answer and explanation. Regulatory terminology is consistent with NFA Rule 2-30 customer information and risk disclosure requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "18",
    "sourceQuestionNumber": 18,
    "sourceCode": "10_EZ_23",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-019",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Before opening a commodity futures account for a non-exempt customer, what must an FCM or introducing broker do under CFTC risk-disclosure rules?",
    "choices": [
      {
        "id": "a",
        "text": "Provide the prescribed futures risk disclosure statement and obtain the customer's signed and dated acknowledgment.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.55 requires the disclosure statement before opening the account and requires an acknowledgment from the customer."
      },
      {
        "id": "b",
        "text": "Give only the firm's marketing brochure because risk disclosure is optional if the customer asks to trade.",
        "isCorrect": false,
        "rationale": "The prescribed risk disclosure is a regulatory requirement, not optional marketing material."
      },
      {
        "id": "c",
        "text": "Wait until after the first trade so the disclosure can be tailored to the customer's actual positions.",
        "isCorrect": false,
        "rationale": "The disclosure must be provided before the futures account is opened."
      },
      {
        "id": "d",
        "text": "Replace the CFTC statement with oral disclosure by the associated person.",
        "isCorrect": false,
        "rationale": "Oral disclosure is not a substitute for the prescribed written disclosure and acknowledgment."
      }
    ],
    "explanation": "CFTC Regulation 1.55 is the current reliable anchor: before opening a commodity futures account for an ordinary customer, the FCM or, for an introduced account, the IB must furnish the prescribed risk disclosure and receive the customer's signed and dated acknowledgment.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-019; sequence 19; source code 10_EZ_52. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "19",
    "sourceQuestionNumber": 19,
    "sourceCode": "10_EZ_52",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-020",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Once an FCM has obtained initial financial information from a customer there is no further requirement to request the customer to supplement or update the information.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "The statement is false because NFA Members have an ongoing duty to refresh active customer information and reassess risk disclosure when information materially changes."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "NFA Members are required to at least annually refresh active customer information and reassess appropriate risk disclosure, including whether futures trading is too risky for the customer, based on any materially changed information."
      }
    ],
    "explanation": "NFA Members are required to at least annually refresh active customer information and reassess appropriate risk disclosure, including a determination of whether futures trading is too risky for the customer, based on any materially changed information.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-020; sequence 20; source code 10_EZ_73.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item with a clear correct answer and supporting explanation. The concept is consistent with ongoing customer-information update and risk-disclosure review obligations.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "20",
    "sourceQuestionNumber": 20,
    "sourceCode": "10_EZ_73",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-021",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CTA or CPO presents simulated or hypothetical performance in promotional material. What must accompany that presentation?",
    "choices": [
      {
        "id": "a",
        "text": "A prominent caution explaining that the results are simulated or hypothetical and do not represent actual trading.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.41 requires prescribed cautionary disclosure when simulated or hypothetical performance is presented."
      },
      {
        "id": "b",
        "text": "A statement that hypothetical results are equivalent to actual customer trading results.",
        "isCorrect": false,
        "rationale": "That would be misleading; hypothetical performance has inherent limitations."
      },
      {
        "id": "c",
        "text": "No disclosure, provided the back-test shows a profit.",
        "isCorrect": false,
        "rationale": "Profitability does not remove the cautionary disclosure requirement."
      },
      {
        "id": "d",
        "text": "A guarantee that future customers will achieve similar results.",
        "isCorrect": false,
        "rationale": "Guarantees of similar future results are improper and contrary to the purpose of the caution."
      }
    ],
    "explanation": "The older source item used a narrow three-month actual-results rule. The current app-ready rule is broader and safer: under CFTC Regulation 4.41, simulated or hypothetical performance must be accompanied by a prominent prescribed caution because it is not actual trading and may benefit from hindsight.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-021; sequence 21; source code 10_EZ_64. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "21",
    "sourceQuestionNumber": 21,
    "sourceCode": "10_EZ_64",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-022",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Customer funds include:",
    "choices": [
      {
        "id": "a",
        "text": "Funds on deposit.",
        "isCorrect": false,
        "rationale": "Customer funds include funds on deposit, but this choice is incomplete because open trade equity and open option value are also included."
      },
      {
        "id": "b",
        "text": "Open trade equity.",
        "isCorrect": false,
        "rationale": "Customer funds include open trade equity, but this choice is incomplete because funds on deposit and open option value are also included."
      },
      {
        "id": "c",
        "text": "Open option value.",
        "isCorrect": false,
        "rationale": "Customer funds include open option value, but this choice is incomplete because funds on deposit and open trade equity are also included."
      },
      {
        "id": "d",
        "text": "Funds on deposit, open trade equity, and open option value.",
        "isCorrect": true,
        "rationale": "The source explanation states that customer funds include funds on deposit, open trade equity, and open option value."
      }
    ],
    "explanation": "Customer funds include funds on deposit, open trade equity, and open option value.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-022; sequence 22; source code 10_EZ_71.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses an 'All of the above' answer choice. It has been safely rewritten semantically in the app-ready record to avoid a reference-style answer while preserving the tested concept and exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "22",
    "sourceQuestionNumber": 22,
    "sourceCode": "10_EZ_71",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-023",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "It is a violation of the Commodity Exchange Act and CFTC regulations to trade a customer order against a proprietary account without the customer's prior authorization.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC trading standards prohibit FCMs and IBs from knowingly taking the other side of a customer order unless the customer has given prior consent and the transaction complies with approved exchange rules."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "Trading against a customer order without the customer's prior authorization is prohibited under the stated CFTC trading standards."
      }
    ],
    "explanation": "True. CFTC trading standards prohibit FCMs and IBs from knowingly taking, directly or indirectly, the other side of any customer order except with the customer's prior consent and in accordance with exchange rules approved by the Commission.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-023; sequence 23; source code 10_EZ_36.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer choices, correct answer, and explanation are clearly visible. The true/false format is preserved and only one answer is correct.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "23",
    "sourceQuestionNumber": 23,
    "sourceCode": "10_EZ_36",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-024",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Under NFA Rule 2-4 (Just and Equitable Principles of Trade), it is a violation for a Member or Associate to knowingly seek or obtain another Member's or Associate's confidential information or trade secrets.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA Rule 2-4 requires Members and Associates to observe high standards of commercial honor and just and equitable principles of trade, which includes not knowingly seeking or obtaining another Member's or Associate's confidential information or trade secrets."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This conduct is prohibited as inconsistent with just and equitable principles of trade."
      }
    ],
    "explanation": "Under NFA Rule 2-4, Just and Equitable Principles of Trade, it is a violation for a Member or Associate to knowingly seek or obtain another Member's or Associate's confidential information or trade secrets.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-024; sequence 24; source code 10_EZ_72.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is fully visible and internally consistent. It is a true/false regulation question with exactly one correct answer supported by the displayed explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "24",
    "sourceQuestionNumber": 24,
    "sourceCode": "10_EZ_72",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-025",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "guaranteed-ibs",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "An IB must satisfy NFA minimum financial requirements or operate pursuant to a satisfactory guarantee agreement from the FCM carrying broker.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "An introducing broker may either meet the applicable NFA minimum financial requirements or operate under an acceptable guarantee agreement with an FCM."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This statement is not false; the source explanation confirms the either/or requirement for an IB."
      }
    ],
    "explanation": "An IB must satisfy either the NFA's minimum financial requirements or operate pursuant to a satisfactory guarantee agreement from an FCM carrying broker.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-025; sequence 25; source code 10_EZ_38.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The source answer and explanation clearly identify A, True, as correct.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "25",
    "sourceQuestionNumber": 25,
    "sourceCode": "10_EZ_38",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-026",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "If the parties to a dispute choose to mediate their differences through NFA's mediation program, the mediator will:",
    "choices": [
      {
        "id": "a",
        "text": "Decide who is right as well as the amount of any claim to be paid.",
        "isCorrect": false,
        "rationale": "A mediator does not decide who is right or determine the amount of a claim; that is more characteristic of an adjudicatory process such as arbitration."
      },
      {
        "id": "b",
        "text": "Decide the amount to be made after the parties have determined who is right.",
        "isCorrect": false,
        "rationale": "A mediator does not decide the amount to be paid. Mediation is designed to help the parties reach their own voluntary resolution."
      },
      {
        "id": "c",
        "text": "Work together with the parties to try to find a mutually agreeable solution between the parties.",
        "isCorrect": true,
        "rationale": "In NFA mediation, the mediator facilitates discussion and works with the parties to help them find a mutually agreeable solution."
      },
      {
        "id": "d",
        "text": "Provide an evaluation of the case in order for the parties to decide whether or not to arbitrate the claim.",
        "isCorrect": false,
        "rationale": "The mediator's role is not to provide a binding or formal case evaluation for deciding whether to arbitrate, but to facilitate settlement discussions."
      }
    ],
    "explanation": "Mediation is a voluntary dispute-resolution process in which a neutral mediator helps the parties communicate and attempt to reach a mutually agreeable solution. The mediator does not decide who is right, determine damages, or impose an outcome.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-026; sequence 26; source code 10_EZ_68.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question and answer choices are readable. The indicated answer is consistent with the role of an NFA mediator.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "26",
    "sourceQuestionNumber": 26,
    "sourceCode": "10_EZ_68",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-027",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "With a few, limited exceptions, a CPO may not commingle the funds or property of any pool that it operates or that it intends to operate with the property of any other person.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "The statement is false because the rule described in the explanation is stricter than stated."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC regulations prohibit, without exception, a CPO from commingling the funds or property of any pool that it operates or intends to operate with the property of any other person."
      }
    ],
    "explanation": "The statement is false. CFTC regulations prohibit, without exception, a CPO from commingling the funds or property of any pool that it operates or intends to operate with the property of any other person.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-027; sequence 27; source code 10_EZ_8.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with clear source answer and explanation. The key turns on the phrase 'with a few, limited exceptions,' which conflicts with the stated no-exception prohibition in the explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "27",
    "sourceQuestionNumber": 27,
    "sourceCode": "10_EZ_8",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-028",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "While the NFA has established standards for written promotional materials and communications with customers, the NFA has not developed requirements for oral communications with customers or prospective customers.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA communications standards are not limited to written promotional materials; oral communications are also subject to general anti-fraud and other requirements."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "NFA rules apply broadly to communications with customers and prospective customers. Oral communications, including telephone contacts and scripted oral presentations, cannot be fraudulent, deceitful, misleading, or high-pressure."
      }
    ],
    "explanation": "False. Although NFA rules distinguish between specific content standards for written materials and routine telephone contacts, NFA requirements apply generally to all forms of communications. Oral communications and scripted oral presentations to customers or prospective customers are covered and must not be fraudulent, deceitful, misleading, or high-pressure.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-028; sequence 28; source code 10_EZ_19.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with one clearly indicated correct answer. The concept is consistent with NFA communications/promotional-material standards, including oral and scripted communications.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "28",
    "sourceQuestionNumber": 28,
    "sourceCode": "10_EZ_19",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-029",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "public-communications",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Any hypothetical performance results used by an NFA Member must have a disclaimer that:",
    "choices": [
      {
        "id": "a",
        "text": "Has been submitted to and approved by the NFA.",
        "isCorrect": false,
        "rationale": "NFA approval is not the requirement shown for hypothetical performance disclaimers."
      },
      {
        "id": "b",
        "text": "Is reasonably designed to inform the customer that the trading results are hypothetical.",
        "isCorrect": false,
        "rationale": "The source identifies the required disclaimer as the one specified by NFA Rule 2-29, not merely a generally designed notice."
      },
      {
        "id": "c",
        "text": "Is specified in NFA Rules.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 specifies the required disclaimer for hypothetical performance results used by an NFA Member."
      },
      {
        "id": "d",
        "text": "Is one of three different disclaimer examples contained in CFTC guidelines.",
        "isCorrect": false,
        "rationale": "The source explanation refers to NFA Rule 2-29 rather than CFTC guideline examples."
      }
    ],
    "explanation": "Any hypothetical performance results used by an NFA Member must have the disclaimer specified in NFA Rule 2-29.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-029; sequence 29; source code 10_EZ_65.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, source code, and explanation are clearly visible. The regulatory concept is consistent with NFA promotional/public communications requirements for hypothetical performance presentations under NFA Rule 2-29.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "29",
    "sourceQuestionNumber": 29,
    "sourceCode": "10_EZ_65",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-030",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "disciplinary-procedures",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "The NFA has the power to issue subpoenas.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "The NFA has authority in its disciplinary and investigative processes to issue subpoenas."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the NFA does have the power to issue subpoenas."
      }
    ],
    "explanation": "The NFA has the power to issue subpoenas.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-030; sequence 30; source code 10_EZ_66.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single clearly identified correct answer. The concept is consistent with NFA disciplinary and investigative authority.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "30",
    "sourceQuestionNumber": 30,
    "sourceCode": "10_EZ_66",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-031",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "In an NFA arbitration, a party may be represented at any time throughout the proceeding by an attorney or other representative.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA arbitration rules allow a party to be represented at any time throughout the arbitration proceeding, including a mediation conference, by an attorney or other representative."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because representation by an attorney or other representative is permitted throughout the NFA arbitration process."
      }
    ],
    "explanation": "A party to an NFA arbitration may be represented at any time throughout the arbitration proceeding, including a mediation conference, by an attorney or other representative.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-031; sequence 31; source code 10_EZ_6.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with clear answer and supporting explanation. Terminology is consistent with NFA arbitration procedure.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "31",
    "sourceQuestionNumber": 31,
    "sourceCode": "10_EZ_6",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-032",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "time-stamping",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "A written record of a customer's futures or options order must be prepared and time-stamped by the FCM, IB, or member of the exchange:",
    "choices": [
      {
        "id": "a",
        "text": "Immediately upon receipt.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.35 requires customer futures and options orders to be prepared in writing and time-stamped immediately upon receipt."
      },
      {
        "id": "b",
        "text": "Upon transmission of the confirmation to the client.",
        "isCorrect": false,
        "rationale": "Confirmations occur after order handling; the time-stamped order record must be created at receipt."
      },
      {
        "id": "c",
        "text": "Prior to the close of business.",
        "isCorrect": false,
        "rationale": "End-of-day preparation is too late; the order must be time-stamped immediately upon receipt."
      },
      {
        "id": "d",
        "text": "Upon confirmation of the order execution from the floor.",
        "isCorrect": false,
        "rationale": "Execution confirmation is not the trigger; the requirement is tied to receipt of the customer order."
      }
    ],
    "explanation": "CFTC Regulation 1.35 requires futures and options orders to be prepared in writing and time-stamped immediately upon receipt from the customer.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-032; sequence 32; source code 10_EZ_58.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable, unambiguous question with one correct answer. The cited concept is consistent with order recordkeeping/time-stamping requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "32",
    "sourceQuestionNumber": 32,
    "sourceCode": "10_EZ_58",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-033",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "written-authorization",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Before an FCM, IB, or AP may place a trade for a customer's account, which authorization is required?",
    "choices": [
      {
        "id": "a",
        "text": "Either specific customer authorization for the order, identifying the precise commodity interest and exact amount, or written discretionary trading authorization",
        "isCorrect": true,
        "rationale": "CFTC Rule 166.2 permits an FCM, IB, or AP to trade for a customer only with specific authorization for the order or written authorization to exercise discretion."
      },
      {
        "id": "b",
        "text": "General oral permission to trade a particular commodity whenever the firm believes market conditions are favorable",
        "isCorrect": false,
        "rationale": "General instructions are not enough unless the account has proper written discretionary trading authorization; otherwise each order must be specifically authorized."
      },
      {
        "id": "c",
        "text": "A signed risk disclosure statement, without any separate order instructions or discretionary authorization",
        "isCorrect": false,
        "rationale": "Risk disclosure is an account-opening requirement, but it does not by itself authorize the firm or AP to place trades for the customer."
      },
      {
        "id": "d",
        "text": "Prior approval from the exchange for each customer order entered by the FCM, IB, or AP",
        "isCorrect": false,
        "rationale": "The rule concerns customer authorization, not exchange pre-approval of each customer order."
      }
    ],
    "explanation": "Under CFTC Rule 166.2, an FCM, IB, or AP may not effect a transaction in commodity interests for a customer's account unless the customer has specifically authorized the order or has given written authorization for discretionary trading. Specific authorization means the customer identifies the precise commodity interest and the exact amount to be purchased or sold.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-033; sequence 33; source code 10_EZ_56.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the referential combination choice (\"A or B\") while preserving the tested authorization concept. Exactly one standalone choice is correct. Repair: Converted the original combination-answer format into a standalone correct answer and replaced weak referential distractors with semantic distractors. Second-pass review: The repaired item is clean. The stem is clear, there is exactly one unambiguous standalone correct answer, and the distractors are plausible without using referential all/none/A-and-B formats. The explanation and rationales accurately reflect CFTC Rule 166.2: trading requires either specific customer authorization for the order or written discretionary trading authorization. No calculations are involved, the regulatory point is current and not over-specific, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "33",
    "sourceQuestionNumber": 33,
    "sourceCode": "10_EZ_56",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-034",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Associated persons of FCMs and IBs who are registered with NFA also must be notice registered with a securities industry SRO such as FINRA.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "APs of FCMs and IBs registered with NFA are not required to also register with a securities industry SRO such as FINRA solely on that basis."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "FCMs and IBs may have SEC notice-registration obligations if they are not already registered as securities broker-dealers, but their associated persons do not also require registration with a securities industry SRO such as FINRA."
      }
    ],
    "explanation": "In contrast to FCMs and IBs who must notice register with the SEC if they are not already registered as securities broker-dealers, APs of FCMs and IBs registered with NFA do not also require registration with a securities industry SRO such as FINRA.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-034; sequence 34; source code 10_EZ_59.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is readable and internally consistent. It tests whether APs of FCMs/IBs registered with NFA must also register with a securities SRO such as FINRA; the source answer False is supported by the explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "34",
    "sourceQuestionNumber": 34,
    "sourceCode": "10_EZ_59",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-035",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "In addition to being registered as an Associated Person, any AP of an NFA member also must be registered with the NFA as an associate member.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA Bylaws require a person associated with an NFA member, i.e. an Associated Person, to be registered with the NFA as an associate, or if applicable, as a member."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "An AP of an NFA member generally must also be registered with the NFA as an associate, or if applicable, as a member."
      }
    ],
    "explanation": "NFA Bylaws require a person associated with an NFA member, commonly an Associated Person, to be registered with the NFA as an associate, or if applicable, as a member.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-035; sequence 35; source code 10_EZ_29.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are clearly visible. The true/false format has been preserved with exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "35",
    "sourceQuestionNumber": 35,
    "sourceCode": "10_EZ_29",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-036",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The excessive trading of an account by a broker, primarily for the purpose of generating commissions, is known as:",
    "choices": [
      {
        "id": "a",
        "text": "Unauthorized trading.",
        "isCorrect": false,
        "rationale": "Unauthorized trading is trading without customer authorization, not excessive trading primarily to generate commissions."
      },
      {
        "id": "b",
        "text": "Churning.",
        "isCorrect": true,
        "rationale": "Churning is excessive trading in a customer account primarily to generate commissions and is treated as a fraudulent practice."
      },
      {
        "id": "c",
        "text": "Front running.",
        "isCorrect": false,
        "rationale": "Front running refers to trading ahead of customer orders or material order information, not excessive account trading for commissions."
      },
      {
        "id": "d",
        "text": "Self dealing.",
        "isCorrect": false,
        "rationale": "Self dealing refers to acting for one's own benefit in a transaction; the term for the conduct described is churning."
      }
    ],
    "explanation": "Churning is the excessive trading of an account by a broker primarily for the purpose of generating commissions. It is a violation of the CFTC's antifraud provisions.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-036; sequence 36; source code 10_EZ_47.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The source answer and explanation support choice B. The regulatory concept is consistent with antifraud/prohibited conduct terminology.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "36",
    "sourceQuestionNumber": 36,
    "sourceCode": "10_EZ_47",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-037",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "If an NFA member uses hypothetical results in promotional materials, the member must, among other requirements, provide the NFA-required disclaimer statement.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA rules on communications with the public require hypothetical performance results in promotional material to include the prescribed disclaimer."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because hypothetical results must be accompanied by the required disclaimer."
      }
    ],
    "explanation": "NFA Rule 2-29, Communications with the Public and Promotional Material, requires presentations of hypothetical performance results to include the NFA-prescribed disclaimer, among other conditions.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-037; sequence 37; source code 10_EZ_26.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with one clearly indicated correct answer. The cited NFA promotional material concept is consistent with the statement.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "37",
    "sourceQuestionNumber": 37,
    "sourceCode": "10_EZ_26",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-038",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following is not a CFTC registration category?",
    "choices": [
      {
        "id": "a",
        "text": "Futures Commission Merchant",
        "isCorrect": false,
        "rationale": "A futures commission merchant is a CFTC registration category."
      },
      {
        "id": "b",
        "text": "Commodity Trading Advisor",
        "isCorrect": false,
        "rationale": "A commodity trading advisor is a CFTC registration category."
      },
      {
        "id": "c",
        "text": "Commodity Pool Operator",
        "isCorrect": false,
        "rationale": "A commodity pool operator is a CFTC registration category."
      },
      {
        "id": "d",
        "text": "Financial Planner",
        "isCorrect": true,
        "rationale": "Financial planner is not, by itself, a CFTC registration category. A financial planner would need to register only if acting in a registrable capacity, such as a CTA."
      },
      {
        "id": "e",
        "text": "Introducing Broker",
        "isCorrect": false,
        "rationale": "An introducing broker is a CFTC registration category."
      }
    ],
    "explanation": "With the exception of financial planner, the listed categories-FCM, CTA, CPO, and IB-are CFTC registration categories. A financial planner who acts in a registrable commodities capacity, such as a commodity trading advisor, would be required to register in that specific category.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-038; sequence 38; source code 10_EZ_2.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question and answer are readable and unambiguous. The concept is consistent with CFTC registration terminology; financial planner is not a CFTC registration category.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "38",
    "sourceQuestionNumber": 38,
    "sourceCode": "10_EZ_2",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-039",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "All trades on an exchange (contract market) must be competitively executed or otherwise executed in accordance with written rules of the exchange that have been approved by the CFTC.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "The Commodity Exchange Act and CFTC regulations generally require trades on a designated contract market to be competitively executed unless they are executed pursuant to exchange rules approved by the CFTC."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because permitted noncompetitive executions must still comply with written exchange rules approved by the CFTC."
      }
    ],
    "explanation": "The Commodity Exchange Act and CFTC regulations require trades to be competitively executed. Exceptions, such as exchanges of futures for product or physicals (EFPs) and transfer trades, must be done in accordance with written exchange rules that have been approved by the CFTC.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-039; sequence 39; source code 10_EZ_54.",
    "reviewStatus": "reviewed",
    "qualityStatus": "rejected",
    "qualityNotes": "Readable true/false item with a single correct answer shown. Terminology and regulatory concept are consistent with exchange trade execution rules and permitted exceptions under written exchange rules. Duplicate review: Exact duplicate of s3-regulatory-pdf-143. Repair pass: duplicate retained as rejected unless manually selected as the keeper",
    "issueTypes": [
      "duplicate"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "39",
    "sourceQuestionNumber": 39,
    "sourceCode": "10_EZ_54",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-040",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Each registrant, while registered and for two years after termination of registration, must notify the NFA in writing of any change of address.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA registrants are required to notify NFA in writing of address changes while registered and for two years after registration terminates."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the notification requirement described in the statement applies during registration and for two years after termination."
      }
    ],
    "explanation": "Registrants must give written notification to the NFA regarding any change of address while registered and for two years following termination of registration.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-040; sequence 40; source code 10_EZ_21.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, answer, source code, and explanation are clearly visible. The true/false format is preserved, and exactly one answer is correct.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "40",
    "sourceQuestionNumber": 40,
    "sourceCode": "10_EZ_21",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-041",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "time-stamping",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "In addition to being time-stamped immediately upon receipt, CFTC regulations require customer option orders also to be time-stamped upon transmittal for execution.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC regulations require customer options orders to be time-stamped immediately upon receipt and again upon transmittal for execution."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "Customer options orders require both time stamps: receipt and transmittal for execution."
      }
    ],
    "explanation": "CFTC regulations require customer options orders to be time-stamped immediately upon receipt and again upon transmittal for execution.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-041; sequence 41; source code 10_EZ_45.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with clear displayed correct answer and explanation. Terminology is consistent with order time-stamping requirements for customer option orders.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "41",
    "sourceQuestionNumber": 41,
    "sourceCode": "10_EZ_45",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-042",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "NFA rules prohibit members and associates from making a communication with the public that does which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "Operates as a fraud or deceit, uses a high-pressure approach, or states that futures trading is appropriate for all persons.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 prohibits public communications that operate as a fraud or deceit, employ or are part of a high-pressure approach, or state that futures trading is appropriate for all persons."
      },
      {
        "id": "b",
        "text": "Discusses the risks of futures trading in a balanced and non-misleading manner.",
        "isCorrect": false,
        "rationale": "Balanced, non-misleading risk discussion is not prohibited by this rule."
      },
      {
        "id": "c",
        "text": "Identifies the member or associate responsible for the communication.",
        "isCorrect": false,
        "rationale": "Identifying the responsible firm or person is not the prohibited conduct described in the source."
      },
      {
        "id": "d",
        "text": "Provides factual information about futures markets without promotional claims.",
        "isCorrect": false,
        "rationale": "Factual, non-misleading communication is not prohibited merely because it discusses futures markets."
      }
    ],
    "explanation": "Under NFA Rule 2-29, communications with the public and promotional material may not operate as a fraud or deceit, employ or be part of a high-pressure approach, or state that futures trading is appropriate for all persons.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-042; sequence 42; source code 10_EZ_24.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable and the source answer is clear. The app-ready version rewrites the source's combination answer choice into a single semantic correct choice to comply with the instruction to avoid 'A, B and C' style choices.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "42",
    "sourceQuestionNumber": 42,
    "sourceCode": "10_EZ_24",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-043",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "CFTC regulations provide that customer funds must generally, but not always, be segregated from the firm's proprietary funds.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "CFTC segregation rules require customer funds held by an FCM to be segregated from the firm's proprietary funds; the statement's \"generally, but not always\" phrasing is inconsistent with the rule as presented."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC regulations require all customer funds received by an FCM to be segregated and accounted for separately from the firm's proprietary funds, in an account identified and acknowledged as a customer segregated funds account."
      }
    ],
    "explanation": "The statement is false. CFTC regulations require all customer funds received by an FCM to be segregated and accounted for separately from the firm's proprietary funds. The account in which customer funds are deposited must be clearly identified and acknowledged as a customer segregated funds account.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-043; sequence 43; source code 10_EZ_12.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with clear keyed answer and explanation. Terminology is consistent with customer funds segregation requirements for FCMs.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "43",
    "sourceQuestionNumber": 43,
    "sourceCode": "10_EZ_12",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-044",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "hearings",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Complaints issued by the NFA are heard by the:",
    "choices": [
      {
        "id": "a",
        "text": "Business conduct committee.",
        "isCorrect": false,
        "rationale": "NFA complaints that result in a hearing are heard by the NFA Hearing Committee or a hearing panel, not the Business Conduct Committee."
      },
      {
        "id": "b",
        "text": "Board of directors.",
        "isCorrect": false,
        "rationale": "The NFA Board of Directors does not serve as the hearing body for complaints that proceed to a hearing."
      },
      {
        "id": "c",
        "text": "Compliance office.",
        "isCorrect": false,
        "rationale": "The Compliance Department may investigate matters, but hearings on NFA complaints are conducted by the Hearing Committee or a hearing panel."
      },
      {
        "id": "d",
        "text": "NFA hearing committee or a hearing panel.",
        "isCorrect": true,
        "rationale": "NFA complaints that result in a hearing are heard by the NFA Hearing Committee or a hearing panel."
      }
    ],
    "explanation": "NFA complaints that result in a hearing are heard by the NFA Hearing Committee or a hearing panel.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-044; sequence 44; source code 10_EZ_17.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable regulatory question with a single clear correct answer supported by the displayed explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "44",
    "sourceQuestionNumber": 44,
    "sourceCode": "10_EZ_17",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-045",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Any statements of opinion in promotional materials must be clearly identifiable as such and must have a reasonable basis in fact.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29(c) requires statements of opinion in promotional material to be clearly identifiable as opinion and to have a reasonable basis in fact."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the stated requirement is consistent with NFA promotional material rules."
      }
    ],
    "explanation": "NFA Rule 2-29(c) requires statements of opinion included in promotional material to be clearly identifiable as opinion and to have a reasonable basis in fact.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-045; sequence 45; source code 10_EZ_27.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is fully readable, has exactly one correct answer, and the explanation supports the answer. The regulatory concept is consistent with NFA promotional material standards.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "45",
    "sourceQuestionNumber": 45,
    "sourceCode": "10_EZ_27",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-046",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Any location, other than the main business address, where an NFA Member firm employs persons engaged in activities requiring registration as an AP, even if there is only one employee at that location, is considered by the NFA to be a branch office.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A branch office includes a location other than the main business address where an NFA Member firm has personnel engaged in activities requiring AP registration, even if only one AP works there."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The number of APs at the offsite location does not prevent it from being treated as a branch office."
      }
    ],
    "explanation": "Even if there is only one AP at a location away from the firm's main business office, that location is still considered to be a branch office.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-046; sequence 46; source code 10_EZ_76.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The stated answer and explanation are consistent with the regulatory concept of an NFA branch office location involving AP-registration activities away from the main business address.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "46",
    "sourceQuestionNumber": 46,
    "sourceCode": "10_EZ_76",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-047",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "CPOs and CTAs must discuss in their disclosure documents the principal risk factors of the pool or trading program, including factors such as volatility, leverage, liquidity, and counterparty creditworthiness.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CPO and CTA disclosure documents must discuss the principal risk factors of the pool or trading program, including examples such as volatility, leverage, liquidity, and counterparty creditworthiness."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the required disclosure includes principal risk factors such as volatility, leverage, liquidity, and counterparty creditworthiness."
      }
    ],
    "explanation": "CPO and CTA disclosure documents must review the pool's or trading program's principal risk factors, including volatility, leverage, liquidity, and counterparty creditworthiness.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-047; sequence 47; source code 10_EZ_44.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear answer and explanation. Regulatory terminology is consistent with CPO/CTA disclosure document requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "47",
    "sourceQuestionNumber": 47,
    "sourceCode": "10_EZ_44",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-048",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A designated contract market wants to amend an exchange trading rule such as a price-limit rule. Which statement best describes the CFTC role?",
    "choices": [
      {
        "id": "a",
        "text": "Exchange rule changes are subject to CFTC filing, self-certification, or approval procedures under the Commodity Exchange Act framework.",
        "isCorrect": true,
        "rationale": "DCM rule changes are not purely private changes; they are subject to the CFTC rule-submission framework."
      },
      {
        "id": "b",
        "text": "The exchange may change the rule privately without any CFTC filing or oversight.",
        "isCorrect": false,
        "rationale": "Exchange rules remain subject to CFTC oversight and filing procedures."
      },
      {
        "id": "c",
        "text": "Only NFA approves exchange trading rules; the CFTC has no role.",
        "isCorrect": false,
        "rationale": "NFA is important for member regulation, but DCM rule submissions are part of the CFTC oversight framework."
      },
      {
        "id": "d",
        "text": "A rule change is valid only after each customer gives written consent.",
        "isCorrect": false,
        "rationale": "Customer consent is not the mechanism for exchange rule certification or approval."
      }
    ],
    "explanation": "The source's absolute 'must be approved' wording is too crude for current rules. The current exam-useful point is that DCM rule changes are subject to the CFTC rule-submission framework, which may involve self-certification, prior approval, or review depending on the rule and procedure used.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-048; sequence 48; source code 10_EZ_7. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "48",
    "sourceQuestionNumber": 48,
    "sourceCode": "10_EZ_7",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-049",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "NFA's rule relating to promotional materials and other communications with the public applies only to material written by a firm or its employees.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA Rule 2-29 is not limited to materials written by a firm or its employees."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 applies to promotional material and communications with the public prepared by outside consultants or advertising firms as well as by the firm or its employees."
      }
    ],
    "explanation": "False. NFA Rule 2-29, Communications with the Public and Promotional Material, applies to materials prepared by outside consultants or advertising firms as well as to materials prepared by a firm or its employees.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-049; sequence 49; source code 10_EZ_18.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear displayed answer and explanation. The rule concept is consistent with NFA promotional material requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "49",
    "sourceQuestionNumber": 49,
    "sourceCode": "10_EZ_18",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-050",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "time-stamping",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Upon receipt by the FCM or IB, futures and options orders must be time-stamped to the nearest:",
    "choices": [
      {
        "id": "a",
        "text": "10 seconds.",
        "isCorrect": false,
        "rationale": "Customer orders are not required to be time-stamped to the nearest 10 seconds under the rule referenced by the source."
      },
      {
        "id": "b",
        "text": "Minute.",
        "isCorrect": true,
        "rationale": "CFTC regulations require customer orders to be time-stamped to the nearest minute immediately upon receipt."
      },
      {
        "id": "c",
        "text": "15 seconds.",
        "isCorrect": false,
        "rationale": "Customer orders are not required to be time-stamped to the nearest 15 seconds under the rule referenced by the source."
      },
      {
        "id": "d",
        "text": "30 minute trade bracket.",
        "isCorrect": false,
        "rationale": "A 30-minute trade bracket is not the required precision for time-stamping customer orders upon receipt."
      }
    ],
    "explanation": "CFTC regulations require all customer orders to be time-stamped to the nearest minute immediately upon receipt.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-050; sequence 50; source code 10_EZ_46.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable, contains exactly one keyed answer, and the explanation supports the keyed answer. The terminology is consistent with FCM/IB order time-stamping requirements as presented for Series 3 regulatory study material.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "50",
    "sourceQuestionNumber": 50,
    "sourceCode": "10_EZ_46",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-051",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "floor-broker",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "An individual who executes customer orders on the trading floor of a designated contract market (exchange) must register as:",
    "choices": [
      {
        "id": "a",
        "text": "An Associated Person.",
        "isCorrect": false,
        "rationale": "An associated person solicits or handles customer-related business for a registrant, but this is not the registration category for an exchange floor member executing customer orders on the trading floor."
      },
      {
        "id": "b",
        "text": "A Floor Broker.",
        "isCorrect": true,
        "rationale": "A floor broker is an individual who executes customer orders on the floor of a designated contract market."
      },
      {
        "id": "c",
        "text": "A Floor Broker or Floor Trader.",
        "isCorrect": false,
        "rationale": "A floor trader trades on the exchange floor for the trader's own account, not for customer orders."
      },
      {
        "id": "d",
        "text": "Any of the above.",
        "isCorrect": false,
        "rationale": "Only the floor broker registration category fits execution of customer orders on the exchange floor."
      }
    ],
    "explanation": "An exchange member executing customer orders on the floor of an exchange must register as a Floor Broker. The Floor Trader registration category applies only to exchange members trading solely for their own accounts.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-051; sequence 51; source code 10_EZ_57.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, answer, and explanation are readable and consistent. Although the source includes an 'Any of the above' distractor, the correct answer is unambiguous and the item can be used as-is with review tolerance.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "51",
    "sourceQuestionNumber": 51,
    "sourceCode": "10_EZ_57",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-052",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A table of contents is optional in a CTA or CPO disclosure document.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "A table of contents is not optional according to the source explanation."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "A table of contents is required to be included in all CTA and CPO disclosure documents."
      }
    ],
    "explanation": "A table of contents is required to be included in CTA and CPO disclosure documents, so the statement that it is optional is false.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-052; sequence 52; source code 10_EZ_11.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable and the displayed answer and explanation are consistent. True/False choices have been preserved with exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "52",
    "sourceQuestionNumber": 52,
    "sourceCode": "10_EZ_11",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-053",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "nfa-membership",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "The background information system available on NFA's website is known as BASIC.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA's Background Affiliation Status Information Center, commonly known as BASIC, is available on NFA's website."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "BASIC is the name of the background information system available through NFA's website."
      }
    ],
    "explanation": "NFA's background information system available on its website is known as BASIC, so the statement is true.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-053; sequence 53; source code 10_EZ_69.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with clear source answer and explanation. Terminology is consistent with NFA BASIC.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "53",
    "sourceQuestionNumber": 53,
    "sourceCode": "10_EZ_69",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-054",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "NFA rules provide no right of appeal of an NFA arbitration award.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA arbitration rules state that there is no right of appeal from an arbitration award, although a party may request modification by the panel under specified conditions."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because NFA arbitration rules do not provide a right of appeal from an arbitration award."
      }
    ],
    "explanation": "NFA arbitration rules state that there is no right of appeal of an arbitration award. However, under certain specified conditions, a party may ask the panel to modify its decision.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-054; sequence 54; source code 10_EZ_15.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is readable and internally consistent. It is a true/false regulatory question with exactly one correct answer, and the explanation supports the answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "54",
    "sourceQuestionNumber": 54,
    "sourceCode": "10_EZ_15",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-055",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "time-stamping",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "An FCM, IB, or Associated Person is prohibited from disclosing a customer order unless such disclosure is necessary to the effective execution of the order or is made at the request of an authorized representative of the CFTC, U.S. Department of Justice, or self-regulatory organization (NFA or exchange).",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC rules prohibit disclosing a customer's order except when necessary for effective execution or when requested by authorized representatives of the CFTC, Department of Justice, NFA, or an exchange."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement accurately describes the restriction on disclosure of customer orders and the permitted exceptions."
      }
    ],
    "explanation": "CFTC regulations prohibit an FCM, IB, or Associated Person from disclosing a customer's order unless the disclosure is necessary to the effective execution of the order or is made at the request of an authorized representative of the CFTC, U.S. Department of Justice, an exchange, or NFA.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-055; sequence 55; source code 10_EZ_32.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with answer and explanation visible. The concept concerns confidentiality/prohibition on improper disclosure of customer orders by FCMs, IBs, and Associated Persons. Mapped to FCM/IB regulations; no more specific allowed taxonomy subtopic exists for order disclosure, so time-stamping/order-handling-related compliance is the closest fit.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "55",
    "sourceQuestionNumber": 55,
    "sourceCode": "10_EZ_32",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-056",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Any pre-dispute resolution agreement used by a registrant must, among other requirements, contain a CFTC-specified explanatory statement.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC rules require a pre-dispute arbitration agreement used by a registrant to include a specified explanatory statement informing customers about dispute-resolution forums, potential waiver of the right to sue in court, preservation of the right to file a CFTC reparations claim, and that signing the arbitration agreement is not required."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement is true; the CFTC requires specified explanatory language in such pre-dispute arbitration agreements."
      }
    ],
    "explanation": "For firms using a pre-dispute resolution or arbitration agreement, CFTC regulations require the agreement to contain a CFTC-specified explanatory statement. The statement must advise customers that multiple forums exist for resolving customer disputes, that signing may waive the right to sue in court but does not waive the right to file a CFTC reparations claim, and that the customer need not sign the pre-dispute arbitration agreement.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-056; sequence 56; source code 10_EZ_42.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The displayed answer and explanation support choice A, and the terminology is consistent with CFTC arbitration/pre-dispute agreement disclosure requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "56",
    "sourceQuestionNumber": 56,
    "sourceCode": "10_EZ_42",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-057",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which statement best reflects the current regulatory treatment of ethics training for futures registrants?",
    "choices": [
      {
        "id": "a",
        "text": "Ethics training is part of a firm's supervision and fitness culture, and CFTC guidance allows flexible firm-specific programs rather than one universal fixed-hour schedule.",
        "isCorrect": true,
        "rationale": "CFTC Part 3 Appendix B treats ethics training as relevant to supervision and fitness and allows flexibility in method and timing."
      },
      {
        "id": "b",
        "text": "Ethics training is prohibited because only technical proficiency exams may be used.",
        "isCorrect": false,
        "rationale": "Ethics training is not prohibited; it is an important compliance and supervision tool."
      },
      {
        "id": "c",
        "text": "Ethics training is required only for customers, not registrants or associated persons.",
        "isCorrect": false,
        "rationale": "The guidance is directed at registrants and personnel, not customer education."
      },
      {
        "id": "d",
        "text": "A firm can ignore ethics training because supervision rules do not cover conduct standards.",
        "isCorrect": false,
        "rationale": "Supervision and ethical conduct are closely linked under the regulatory framework."
      }
    ],
    "explanation": "The old fixed-hour ethics-training formulation is not the best current study point. Current CFTC guidance treats ethics training as a flexible supervision and fitness practice. A firm should maintain a culture and program that keeps relevant personnel aware of ethical duties and regulatory changes.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-057; sequence 57; source code 10_EZ_49. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "57",
    "sourceQuestionNumber": 57,
    "sourceCode": "10_EZ_49",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-058",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Under the Commodity Exchange Act, a market emergency includes:",
    "choices": [
      {
        "id": "a",
        "text": "Major market disturbances that inhibit the forces of supply and demand.",
        "isCorrect": false,
        "rationale": "This is included in the definition of a market emergency, but it is not the only listed item."
      },
      {
        "id": "b",
        "text": "Threatened or actual market manipulations and corners.",
        "isCorrect": false,
        "rationale": "This is included in the definition of a market emergency, but it is not the only listed item."
      },
      {
        "id": "c",
        "text": "Any act of the U.S. or another government that affects a futures market.",
        "isCorrect": false,
        "rationale": "This is included in the definition of a market emergency, but it is not the only listed item."
      },
      {
        "id": "d",
        "text": "Major market disturbances that inhibit supply and demand, threatened or actual manipulations and corners, and government acts affecting a futures market.",
        "isCorrect": true,
        "rationale": "Under the Commodity Exchange Act, a market emergency can include each of these circumstances."
      }
    ],
    "explanation": "Under the Commodity Exchange Act, a market emergency includes, among other situations, major market disturbances that inhibit the forces of supply and demand, threatened or actual market manipulations and corners, and government acts that affect a futures market.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-058; sequence 58; source code 10_EZ_43.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source used an 'All of the above' choice; the app-ready version rewrites that choice semantically while preserving the intended correct answer. The item is readable and the explanation supports the answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "58",
    "sourceQuestionNumber": 58,
    "sourceCode": "10_EZ_43",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-059",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "NFA Rule 2-29 prohibits NFA Members or Associates from making any statement that futures trading is appropriate for all persons.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 addresses communications with the public and prohibits misleading or deceptive promotional statements, including claims implying futures trading is appropriate for everyone."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because NFA Rule 2-29 does prohibit Members and Associates from stating that futures trading is appropriate for all persons."
      }
    ],
    "explanation": "NFA Rule 2-29 prohibits NFA Members and Associates from making statements that futures trading is appropriate for all persons.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-059; sequence 59; source code 10_EZ_60.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is readable and the answer is clearly shown. The concept is consistent with NFA Rule 2-29 communications/promotional material standards.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "59",
    "sourceQuestionNumber": 59,
    "sourceCode": "10_EZ_60",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-060",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "A Commodity Exchange Act professional is required to provide only the specifically prescribed risk disclosure to a new customer.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA guidance indicates that customers may require risk disclosure beyond the specifically prescribed disclosure based on information obtained from the customer."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 contemplates that some customers may require additional risk disclosure beyond the prescribed disclosure; in some cases, the adequate disclosure may be that futures trading is too risky for that customer."
      }
    ],
    "explanation": "The statement is false. The NFA notes that, based on information obtained from customers, some customers may require risk disclosure in addition to that specifically prescribed by NFA Rule 2-30. Once adequate risk disclosure is provided, the customer may decide whether to trade and the NFA member may accept the account.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-060; sequence 60; source code 10_EZ_9.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear source answer and explanation. Terminology is consistent with NFA customer risk disclosure obligations under Rule 2-30.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "60",
    "sourceQuestionNumber": 60,
    "sourceCode": "10_EZ_9",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-061",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A commodity pool operator is required to disclose to prospective pool participants the types of commodity interests the CPO intends that the pool will trade and a description of any restrictions or limitations on trading by the pool.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A CPO disclosure document must describe the commodity interests the pool is expected to trade and any material restrictions or limitations on trading."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This statement is not false; those trading-program details are required disclosure items for prospective pool participants."
      }
    ],
    "explanation": "Among the items that must be disclosed in a CPO disclosure document are the types of commodity interests the CPO intends the pool to trade, along with a description of any restrictions or limitations on trading.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-061; sequence 61; source code 10_EZ_3.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single clearly indicated correct answer. Terminology is consistent with CPO disclosure document requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "61",
    "sourceQuestionNumber": 61,
    "sourceCode": "10_EZ_3",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-062",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "The NFA considers its members to be responsible for the content and requirements of Rule 2-29 (Communications with the Public and Promotional Materials) regarding the use of reprints of articles used for promotional materials.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA members are responsible for complying with NFA Rule 2-29 requirements when using reprints of articles as promotional material."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because NFA members do have responsibility for the content and Rule 2-29 requirements applicable to promotional use of article reprints."
      }
    ],
    "explanation": "NFA Rule 2-29 governs communications with the public and promotional material. Reprints of articles used as promotional material are subject to the rule, and NFA members are responsible for their content and compliance.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-062; sequence 62; source code 10_EZ_16.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with visible answer and explanation. Terminology is consistent with NFA promotional material requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "62",
    "sourceQuestionNumber": 62,
    "sourceCode": "10_EZ_16",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-063",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "transaction-cost-disclosure",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Unless commissions and fees are charged on a per-contract or a round-turn basis, the NFA requires the FCM or IB to provide a complete written explanation of the charges, including examples of what such fees would be on a per-trade or round-turn basis.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA requirements for just and equitable principles of trade require clear written disclosure of commission and fee charges when they are not charged on a per-contract or round-turn basis, including examples of what the fees would be on a comparable basis."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement accurately describes the required disclosure when commissions and fees are not stated on a per-contract or round-turn basis."
      }
    ],
    "explanation": "Unless commissions and fees are charged on a per-contract or round-turn basis, NFA Rule 2-4 requires Members to provide a complete written explanation of the charges, including examples of what such fees would be on a per-contract or round-turn basis.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-063; sequence 63; source code 10_EZ_67.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with visible answer and explanation. The stem says examples on a \"per-trade or round-turn basis,\" while the explanation says \"per-contract or round-turn basis\"; this appears to reflect transaction-cost disclosure terminology and does not prevent use of the question.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "63",
    "sourceQuestionNumber": 63,
    "sourceCode": "10_EZ_67",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-064",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A CTA is not required to disclose whether or not it or any of its principals will trade for their own accounts.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "A CTA must disclose whether the CTA or any principals will trade for their own accounts."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC regulations require CTAs to disclose in their disclosure document whether or not the CTA or any of its principals will trade for their own accounts and, if so, whether the CTA will permit clients to inspect the trading records for those accounts."
      }
    ],
    "explanation": "The statement is false. CFTC regulations require CTAs to disclose in their disclosure document whether the CTA or any of its principals will trade for their own accounts and, if so, whether clients may inspect the trading records for those accounts.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-064; sequence 64; source code 10_EZ_4.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear correct answer and supporting explanation. Terminology is consistent with CTA disclosure-document requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "64",
    "sourceQuestionNumber": 64,
    "sourceCode": "10_EZ_4",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-065",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "If a customer files a request for NFA arbitration against an NFA member, that member:",
    "choices": [
      {
        "id": "a",
        "text": "May decline to arbitrate.",
        "isCorrect": false,
        "rationale": "An NFA member generally may not decline customer-initiated NFA arbitration when the claim is timely and meets NFA Code of Arbitration requirements."
      },
      {
        "id": "b",
        "text": "May select another approved forum.",
        "isCorrect": false,
        "rationale": "The member does not have the unilateral right to avoid NFA arbitration by selecting another forum when a qualifying customer arbitration request has been filed."
      },
      {
        "id": "c",
        "text": "May refer the case to CFTC reparations.",
        "isCorrect": false,
        "rationale": "The member is not permitted simply to refer the matter to CFTC reparations in lieu of participating in a qualifying NFA arbitration."
      },
      {
        "id": "d",
        "text": "Is required to submit to arbitration.",
        "isCorrect": true,
        "rationale": "An NFA member is obligated to arbitrate when a customer requests NFA arbitration and the claim is timely and otherwise satisfies the NFA Code of Arbitration."
      }
    ],
    "explanation": "An NFA member is obligated to arbitrate a dispute when arbitration is requested by a customer and the customer's claim is filed in a timely manner and otherwise satisfies the requirements of the NFA's Code of Arbitration.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-065; sequence 65; source code 10_EZ_25.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are clearly visible. The regulatory concept is consistent with NFA arbitration obligations for member disputes initiated by customers, subject to timeliness and Code requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "65",
    "sourceQuestionNumber": 65,
    "sourceCode": "10_EZ_25",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-066",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "disciplinary-procedures",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "NFA complaints alleging violation of NFA rules by a member or associate member are issued by:",
    "choices": [
      {
        "id": "a",
        "text": "The CFTC office of proceedings.",
        "isCorrect": false,
        "rationale": "The CFTC Office of Proceedings is associated with CFTC proceedings, not issuing NFA complaints for violations of NFA rules."
      },
      {
        "id": "b",
        "text": "An NFA business conduct committee.",
        "isCorrect": true,
        "rationale": "NFA complaints alleging violations of NFA rules by a member or associate member are issued by an NFA Business Conduct Committee."
      },
      {
        "id": "c",
        "text": "An NFA hearing committee or panel.",
        "isCorrect": false,
        "rationale": "A hearing committee or panel may hear disciplinary matters but does not issue the complaint."
      },
      {
        "id": "d",
        "text": "The NFA board of directors.",
        "isCorrect": false,
        "rationale": "The NFA Board of Directors is not the body that issues these disciplinary complaints."
      }
    ],
    "explanation": "NFA complaints are issued by an NFA business conduct committee.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-066; sequence 66; source code 10_EZ_20.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The visible answer and explanation identify B as correct, and the terminology is consistent with NFA disciplinary procedure concepts.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "66",
    "sourceQuestionNumber": 66,
    "sourceCode": "10_EZ_20",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-067",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "appeals",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "The NFA appeals committee may increase, decrease, or set aside penalties imposed by a hearing panel, or may impose other and different penalties.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA appeals committee authority includes increasing, decreasing, or setting aside penalties imposed by a hearing panel, or imposing other and different penalties, subject to limits in NFA rules."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the described authority of the NFA appeals committee is permitted, subject to NFA rule limitations on types of penalties."
      }
    ],
    "explanation": "The statement is true. The NFA appeals committee may increase, decrease, or set aside penalties imposed by a hearing panel, or may impose other and different penalties, subject to the limitations imposed by NFA rules on types of penalties.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-067; sequence 67; source code 10_EZ_13.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory question with visible answer and supporting explanation. Terminology is consistent with NFA disciplinary appeals authority.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "67",
    "sourceQuestionNumber": 67,
    "sourceCode": "10_EZ_13",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-068",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "written-authorization",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "In order for a customer specifically to authorize an FCM, IB, or Associated Person to effect a trade for the customer's account, the customer must specify the precise futures or options contracts to be purchased or sold and the exact amount to be purchased or sold.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Under CFTC Rule 166.2, specific authorization for an order requires the customer to specify the precise commodity interest and exact amount to be traded."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the described requirements are consistent with specific authorization under CFTC Rule 166.2."
      }
    ],
    "explanation": "CFTC Rule 166.2 requires FCMs, IBs, and their APs to have either specific authorization for each order or written trading authorization to effect transactions in commodity interests for a customer. Specific authorization requires the customer to identify the precise commodity interest and the exact amount to be traded.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-068; sequence 68; source code 10_EZ_55.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer, and explanation are readable and internally consistent. True/False choices are preserved as True and False.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "68",
    "sourceQuestionNumber": 68,
    "sourceCode": "10_EZ_55",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-069",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "An individual who solicits customer orders or customer funds on behalf of an FCM, IB, CTA, or CPO generally must be registered as an Associated Person.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC/NFA registration concepts generally treat persons who solicit orders, funds, securities, or property for an FCM, IB, CPO, or CTA, or who supervise such solicitation, as Associated Persons requiring registration unless an exemption or purely clerical capacity applies."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement is generally correct; solicitation on behalf of these registrants is a core activity requiring AP registration."
      }
    ],
    "explanation": "CFTC regulations generally require Associated Persons to be registered. The definition includes persons associated with an FCM or IB who solicit or accept customer orders, other than in a clerical capacity, or supervise those who do; persons associated with a CPO who solicit funds, securities, or property for participation in a commodity pool, or supervise those who do; and persons associated with a CTA who solicit a client's or prospective client's discretionary account, or supervise those who do.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-069; sequence 69; source code 10_EZ_50.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The displayed answer and explanation consistently support A as the only correct answer. Minor grammatical issue in source explanation phrase \"require APs to be registered and defines\" was normalized in app-ready explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "69",
    "sourceQuestionNumber": 69,
    "sourceCode": "10_EZ_50",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-070",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "The Associated Person registration category applies only to persons associated with an FCM or an IB.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Associated Person registration is not limited to persons associated with an FCM or IB."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Associated Person registration can apply to persons associated in a capacity requiring registration with FCMs, IBs, CTAs, CPOs, and other registrants, not only FCMs and IBs."
      }
    ],
    "explanation": "The statement is false. The Associated Person registration category is broader than persons associated only with an FCM or IB; it also applies to persons associated in a capacity requiring registration with CTAs, CPOs, and certain other registrants.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-070; sequence 70; source code 10_EZ_30.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear correct answer. Source explanation includes Leverage Transaction Merchants, an older term, but the core AP concept remains valid and educationally useful for the question as written.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "70",
    "sourceQuestionNumber": 70,
    "sourceCode": "10_EZ_30",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-071",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "time-stamping",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "All customer orders for futures or futures options must be written and time-stamped and must include:",
    "choices": [
      {
        "id": "a",
        "text": "The customer account identification.",
        "isCorrect": false,
        "rationale": "An account identification alone is not sufficient; an order number is also required."
      },
      {
        "id": "b",
        "text": "An order number.",
        "isCorrect": false,
        "rationale": "An order number alone is not sufficient; customer account identification is also required."
      },
      {
        "id": "c",
        "text": "Either an account identification or an order number.",
        "isCorrect": false,
        "rationale": "The requirement is not either/or; both identifiers must be included."
      },
      {
        "id": "d",
        "text": "Both an account identification and an order number.",
        "isCorrect": true,
        "rationale": "Customer orders received by an FCM or IB must be written and time-stamped and include both the account identification and an order number."
      }
    ],
    "explanation": "All customer orders received by an FCM or IB must contain both an account identification and an order number.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-071; sequence 71; source code 10_EZ_33.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The displayed answer and explanation support choice D.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "71",
    "sourceQuestionNumber": 71,
    "sourceCode": "10_EZ_33",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-072",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "CFTC regulations provide that customer funds must generally, but not always, be segregated from the firm's proprietary funds.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Customer funds held by an FCM must be segregated and accounted for separately from the firm's proprietary funds; the statement's \"generally, but not always\" wording is incorrect."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC regulations require all customer funds received by an FCM to be segregated and accounted for separately from the firm's proprietary funds, with the account clearly identified as a customer segregated funds account."
      }
    ],
    "explanation": "CFTC regulations require customer funds received by an FCM to be segregated from and accounted for separately from the firm's proprietary funds. The depository account must be clearly identified and acknowledged as a customer segregated funds account.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-072; sequence 72; source code 10_EZ_1.",
    "reviewStatus": "reviewed",
    "qualityStatus": "rejected",
    "qualityNotes": "Readable true/false item with a clear displayed correct answer and supporting explanation. The rule concept is consistent with customer segregated funds requirements for FCMs. Duplicate review: Exact duplicate of s3-regulatory-pdf-043. Repair pass: duplicate retained as rejected unless manually selected as the keeper",
    "issueTypes": [
      "duplicate"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "72",
    "sourceQuestionNumber": 72,
    "sourceCode": "10_EZ_1",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-073",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "All trades on an exchange (contract market) must be competitively executed or otherwise executed in accordance with written rules of the exchange that have been approved by the CFTC.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Commodity Exchange Act requirements generally require competitive execution of trades on a contract market, unless a permitted exception is executed under exchange rules approved by the CFTC."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because noncompetitive execution is permitted only for recognized exceptions and only when conducted under CFTC-approved written exchange rules."
      }
    ],
    "explanation": "The Commodity Exchange Act and CFTC regulations require trades to be competitively executed. Permitted exceptions, such as exchanges of futures for physicals or transfer trades, must be handled according to written exchange rules approved by the CFTC.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-073; sequence 73; source code 10_EZ_53.",
    "reviewStatus": "reviewed",
    "qualityStatus": "rejected",
    "qualityNotes": "Question, answer, and explanation are legible. True/False format is valid and exactly one answer is correct. Regulatory concept is consistent: competitive execution is required unless a permitted exception is executed under approved exchange rules. Duplicate review: Exact duplicate of s3-regulatory-pdf-143. Repair pass: duplicate retained as rejected unless manually selected as the keeper",
    "issueTypes": [
      "duplicate"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "73",
    "sourceQuestionNumber": 73,
    "sourceCode": "10_EZ_53",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-074",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Seminar presentations, as well as any advertisements designed to encourage attendance at such seminars are excluded from the definition of promotional material.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA treats seminar presentations and advertisements designed to encourage attendance at such seminars as promotional material."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "They are covered by NFA's definition of promotional material, not excluded from it."
      }
    ],
    "explanation": "Seminar presentations, as well as any advertisements designed to encourage attendance at such seminars, are covered by NFA's definition of promotional material.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-074; sequence 74; source code 10_EZ_63.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question and explanation are readable. The answer is unambiguous and consistent with NFA promotional material treatment.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "74",
    "sourceQuestionNumber": 74,
    "sourceCode": "10_EZ_63",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-075",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "In regard to disclosing the previous five years of experience in a Disclosure Document, a CTA or CPO must account for all employment time gaps that exceed 90 days.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "CTA/CPO disclosure document biographical information requires explanation of gaps in employment during the prior five years; the source explanation does not limit the requirement to gaps exceeding 90 days."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "The statement is false because any gaps in employment time during the previous five years must be explained."
      }
    ],
    "explanation": "Any gaps in employment time during the previous five years must be explained.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-075; sequence 75; source code 10_EZ_77.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The app-ready stem corrects the obvious visual/source typo 'the exceed' to 'that exceed' while preserving the meaning. The answer and explanation are consistent.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "75",
    "sourceQuestionNumber": 75,
    "sourceCode": "10_EZ_77",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-076",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which statement accurately describes NFA arbitration proceedings?",
    "choices": [
      {
        "id": "a",
        "text": "The proceedings are generally informal, and a party may be represented by an attorney.",
        "isCorrect": true,
        "rationale": "NFA arbitration is intended to be less formal than court litigation, and parties may be represented by counsel."
      },
      {
        "id": "b",
        "text": "The parties must appear without attorneys because legal representation is prohibited.",
        "isCorrect": false,
        "rationale": "Attorney representation is permitted in NFA arbitration."
      },
      {
        "id": "c",
        "text": "The arbitration panel's award is only advisory and cannot be enforced in court.",
        "isCorrect": false,
        "rationale": "An NFA arbitration award may be enforced through a court."
      },
      {
        "id": "d",
        "text": "The proceeding must follow the same formal procedural rules used in a federal court trial.",
        "isCorrect": false,
        "rationale": "NFA arbitration proceedings are generally informal compared with court litigation."
      }
    ],
    "explanation": "NFA arbitration is generally an informal dispute-resolution process. Parties may be represented by an attorney, and an arbitration panel's award may be enforced by a court. The repaired item avoids the banned \"all of the above\" format by testing the same concept with one complete correct answer.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-076; sequence 76; source code 10_EZ_14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the all-of-the-above format while preserving the source-tested concept. Exactly one answer choice is correct and all choices are standalone. Repair: Converted the original all-of-the-above item into a single-best-answer question with standalone choices. The correct choice combines the true characteristics from the source, while distractors contradict those characteristics. Second-pass review: The repaired item is readable, has exactly one unambiguous correct answer, avoids all/none style formats, and the distractors are plausible and clearly incorrect. The explanation and rationales support the answer. No calculations are involved. The regulatory statements are general and consistent with NFA arbitration characteristics, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "76",
    "sourceQuestionNumber": 76,
    "sourceCode": "10_EZ_14",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-077",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Due to privacy regulations, NFA Member firms may not require employees to notify their employer, or to provide screen names, if the employee participates in any online trading or financial communities.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA rules require notification and disclosure of screen names; the statement that firms may not require this is false."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "NFA requires employees of NFA Members to notify their employer and provide screen names if they participate in online trading or financial communities."
      }
    ],
    "explanation": "The NFA requires employees of NFA Members to notify, and to provide screen names to, their employer if the employee participates in any online trading or financial community.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-077; sequence 77; source code 10_EZ_75.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear source-indicated answer and explanation. The concept concerns NFA supervision of employees' participation in online trading or financial forums, including screen-name disclosure; taxonomy placed under promotional/public communications compliance.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "77",
    "sourceQuestionNumber": 77,
    "sourceCode": "10_EZ_75",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-078",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Special offset instructions may be accepted for all but which of the following types of accounts?",
    "choices": [
      {
        "id": "a",
        "text": "Hedge accounts.",
        "isCorrect": false,
        "rationale": "The source indicates special offset instructions may be accepted for this type of account."
      },
      {
        "id": "b",
        "text": "Non-discretionary accounts.",
        "isCorrect": false,
        "rationale": "The source indicates special offset instructions may be accepted for this type of account."
      },
      {
        "id": "c",
        "text": "CTA-directed accounts.",
        "isCorrect": false,
        "rationale": "The source indicates special offset instructions may be accepted for this type of account."
      },
      {
        "id": "d",
        "text": "Discretionary accounts directed by the FCM, IB, or one of their APs.",
        "isCorrect": true,
        "rationale": "Special offset instructions may not be accepted from an account controller for accounts directed by an FCM, IB, or any of their APs."
      }
    ],
    "explanation": "Special offset instructions may not be accepted from an account controller for accounts directed by an FCM, IB, or any of their APs. Therefore, the exception is discretionary accounts directed by the FCM, IB, or one of their APs.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-078; sequence 78; source code 10_IM_34.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are visible and internally consistent. Minor grammatical correction made in app-ready stem from 'type' to 'types' and punctuation/hyphenation standardized without changing meaning.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "78",
    "sourceQuestionNumber": 78,
    "sourceCode": "10_IM_34",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-079",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "reparations-procedures",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Customer claims for damages under the CFTC's reparations program must be made within:",
    "choices": [
      {
        "id": "a",
        "text": "Six months.",
        "isCorrect": false,
        "rationale": "The reparations claim filing period is not six months."
      },
      {
        "id": "b",
        "text": "One year.",
        "isCorrect": false,
        "rationale": "The reparations claim filing period is not one year."
      },
      {
        "id": "c",
        "text": "Two years.",
        "isCorrect": true,
        "rationale": "Under the Commodity Exchange Act, a reparations claim must be filed within two years after the cause of action accrues."
      },
      {
        "id": "d",
        "text": "Three years.",
        "isCorrect": false,
        "rationale": "The reparations claim filing period is not three years."
      }
    ],
    "explanation": "The Commodity Exchange Act limits the time for filing a reparations claim to a period of two years after the cause of action occurs.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-079; sequence 79; source code 10_IM_16.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, source code, and explanation are clearly visible. The answer is consistent with the CFTC reparations statute of limitations concept.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "79",
    "sourceQuestionNumber": 79,
    "sourceCode": "10_IM_16",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-080",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "customer-complaints",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under NFA rules, what record must a member FCM or IB make and retain for a written customer options trading complaint?",
    "choices": [
      {
        "id": "a",
        "text": "A record showing the date received, the Associated Person who serviced the account, a general description of the complaint, and any action taken.",
        "isCorrect": true,
        "rationale": "NFA complaint-record requirements include retaining the written complaint and making and retaining a record of the date received, the AP who serviced the account, the general nature of the complaint, and any action taken."
      },
      {
        "id": "b",
        "text": "A record showing that the complaint was immediately forwarded to NFA for review.",
        "isCorrect": false,
        "rationale": "The rule tested here requires the firm to retain and document the complaint; it does not require every written complaint to be immediately forwarded to NFA."
      },
      {
        "id": "c",
        "text": "A completed CFTC reparations filing prepared on behalf of the customer.",
        "isCorrect": false,
        "rationale": "A firm's complaint-record requirement is separate from CFTC reparations procedures and does not require preparing a reparations filing for the customer."
      },
      {
        "id": "d",
        "text": "A record showing only the customer's name and account number, with no description of the complaint or resolution.",
        "isCorrect": false,
        "rationale": "The required record is more detailed; it must include the date received, the AP who serviced the account, a general description of the matter complained of, and any action taken."
      }
    ],
    "explanation": "For written customer options trading complaints, NFA rules require member FCMs and IBs to retain copies of the complaints and make and retain a related record. That record must include the date the complaint was received, the Associated Person who serviced the account, a general description of the matter complained of, and what action, if any, was taken.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-080; sequence 80; source code 10_IM_59.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the banned 'All of the above' format and provide four standalone semantic answer choices with exactly one correct answer. Repair: Removed the 'All of the above' distractor, rewrote the stem for clarity, and added a standalone plausible distractor while preserving the tested NFA complaint-recordkeeping requirement. Second-pass review: The repaired item is clear, has exactly one unambiguous correct answer, removes the prior 'All of the above' format, and uses plausible standalone distractors. The explanation and rationales consistently support the correct answer. No calculations are present, and the regulatory/taxonomy placement is appropriate for NFA FCM/IB customer complaint recordkeeping.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "80",
    "sourceQuestionNumber": 80,
    "sourceCode": "10_IM_59",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-081",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "The president of NFA may, on 30 days written notice, summarily bar from Membership or Associate Membership when that Member or employee thereof fails to comply with an arbitration award or settlement agreement unless there is a pending request to modify the agreement or there is a pending court application to modify or correct the award.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA may impose a summary bar from membership or associate membership on 30 days' written notice for failure to comply with an arbitration award or settlement agreement, subject to pending modification or court proceedings."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement accurately describes the NFA president's authority in this circumstance."
      }
    ],
    "explanation": "The president of NFA may, on 30 days' written notice, summarily bar a Member or Associate Member when the Member or employee fails to comply with an arbitration award or settlement agreement, unless there is a pending request to modify the agreement or a pending court application to modify or correct the award.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-081; sequence 81; source code 10_IM_122.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. Correct answer is explicitly shown as A/True. Minor wording issue in the on-screen explanation was corrected based on the clearer stem text.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "81",
    "sourceQuestionNumber": 81,
    "sourceCode": "10_IM_122",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-082",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Hypothetical, extracted, pro forma, or simulated results may not be included in a Disclosure Document for any program for which the NFA Member has three months of actual trading results for customer or proprietary accounts.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA rules for CPO/CTA disclosure documents generally prohibit including hypothetical, extracted, pro forma, or simulated results once the member has at least three months of actual trading results for customer or proprietary accounts for that program."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This statement is not false; the prohibition applies when the member has three months of actual results for the program."
      }
    ],
    "explanation": "Hypothetical, extracted, pro forma, or simulated results may not be included in a Disclosure Document for any program for which the NFA Member has three months of actual trading results for customer or proprietary accounts.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-082; sequence 82; source code 10_IM_116.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The source answer and explanation consistently identify A/True as correct.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "82",
    "sourceQuestionNumber": 82,
    "sourceCode": "10_IM_116",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-083",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "If an NFA Member's promotional material includes any reference to actual past trading profits, then the material must:",
    "choices": [
      {
        "id": "a",
        "text": "Document at least a three-year track record supporting the profit claim.",
        "isCorrect": false,
        "rationale": "NFA promotional material rules do not require a three-year track record merely because actual past trading profits are referenced."
      },
      {
        "id": "b",
        "text": "Document at least a five-year track record supporting the profit claim.",
        "isCorrect": false,
        "rationale": "NFA promotional material rules do not require a five-year track record merely because actual past trading profits are referenced."
      },
      {
        "id": "c",
        "text": "Mention that past trading results are not necessarily indicative of future results.",
        "isCorrect": true,
        "rationale": "Promotional material that refers to actual past trading profits must include a statement that past trading results are not necessarily indicative of future results."
      },
      {
        "id": "d",
        "text": "Follow the precise CFTC specified format.",
        "isCorrect": false,
        "rationale": "The required concept is the cautionary statement about past performance, not a precise CFTC-specified format."
      }
    ],
    "explanation": "If an NFA Member's promotional material includes any reference to actual past trading profits, the material must state that past trading results are not necessarily indicative of future results.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-083; sequence 83; source code 10_IM_103.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The answer and explanation are consistent with the visible source and with NFA promotional material principles regarding past performance disclosures.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "83",
    "sourceQuestionNumber": 83,
    "sourceCode": "10_IM_103",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-084",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "recordkeeping",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A commodity pool operator must have a record of all participants in the pool as well as signed copies of all required disclosure documents.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC regulations require a CPO to maintain records of pool participants and signed copies of required disclosure documents."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because a CPO is required to maintain these records."
      }
    ],
    "explanation": "CFTC regulations require a commodity pool operator to maintain a record of all participants in the pool, as well as signed copies of all required disclosure documents.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-084; sequence 84; source code 10_IM_76.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false CPO recordkeeping item. Minor grammar issue in visible stem corrected in app-ready version from \"disclosures documents\" to \"disclosure documents.\"",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "84",
    "sourceQuestionNumber": 84,
    "sourceCode": "10_IM_76",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-085",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "The NFA requires promotional material, along with a record of the firm's review and approval of it, to be retained and available for examination for a period of:",
    "choices": [
      {
        "id": "a",
        "text": "Five years from the date of publication or first use.",
        "isCorrect": false,
        "rationale": "The current NFA rule measures the retention period from the date of last use, not publication or first use."
      },
      {
        "id": "b",
        "text": "Three years from the date of last use.",
        "isCorrect": false,
        "rationale": "This appears to reflect an older source answer. Current NFA guidance points to five years from last use, with ready accessibility for the first two years."
      },
      {
        "id": "c",
        "text": "Five years from the date of last use, with the records readily accessible during the first two years.",
        "isCorrect": true,
        "rationale": "NFA promotional-material guidance states that promotional material must be kept for five years from last use and readily accessible during the first two years."
      },
      {
        "id": "d",
        "text": "One year from the date of last use.",
        "isCorrect": false,
        "rationale": "One year is shorter than the current promotional-material recordkeeping period."
      }
    ],
    "explanation": "Current NFA promotional-material guidance states that a Member must keep promotional material on file for five years from the date of last use and have it readily accessible during the first two years. NFA Rule 2-29(f) also ties promotional-material recordkeeping to the periods specified in CFTC Regulation 1.31, measured from last use.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-085; sequence 85; source code 10_IM_52. Second recovery: current answer verified against NFA Promotional Material FAQs and NFA Compliance Rule 2-29(f), checked 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Second recovery: promoted after official-source check. The source's three-year answer is outdated; current NFA guidance is five years from last use, readily accessible for the first two years.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "85",
    "sourceQuestionNumber": 85,
    "sourceCode": "10_IM_52",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex second recovery official-source audit"
  },
  {
    "id": "s3-regulatory-pdf-086",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Customers in NFA arbitration have the right to elect a \"mixed\" industry/non-industry panel.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Customers in NFA arbitration may elect a mixed panel; the source explanation states that two members of the panel are not affiliated with an NFA member."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the source states customers have the right to elect a mixed industry/non-industry arbitration panel."
      }
    ],
    "explanation": "Customers in NFA arbitration have the right to elect a mixed industry/non-industry panel. In such a panel, two members of the panel are not affiliated with an NFA member.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-086; sequence 86; source code 10_IM_72.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false question with a clear answer and supporting explanation. Terminology is consistent with NFA arbitration panel composition concepts.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "86",
    "sourceQuestionNumber": 86,
    "sourceCode": "10_IM_72",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-087",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "nfa-membership",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The National Futures Association is:",
    "choices": [
      {
        "id": "a",
        "text": "A futures exchange and industry self-regulatory organization.",
        "isCorrect": false,
        "rationale": "The NFA is not a futures exchange."
      },
      {
        "id": "b",
        "text": "A futures industry self-regulatory organization.",
        "isCorrect": true,
        "rationale": "The NFA is the futures industry's self-regulatory organization and is overseen by the CFTC."
      },
      {
        "id": "c",
        "text": "The trade association for the futures industry.",
        "isCorrect": false,
        "rationale": "The NFA is a self-regulatory organization, not merely a trade association."
      }
    ],
    "explanation": "The National Futures Association (NFA) is a not-for-profit membership corporation that serves as the futures industry's self-regulatory organization. The CFTC supervises and oversees the activities of the NFA, which has primary regulatory responsibility for registered persons and entities that are not members of an exchange.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-087; sequence 87; source code 10_IM_7.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The stated correct answer and explanation are consistent with NFA's role as the futures industry self-regulatory organization.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "87",
    "sourceQuestionNumber": 87,
    "sourceCode": "10_IM_7",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-088",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "penalties",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The NFA may impose which of the following penalties?",
    "choices": [
      {
        "id": "a",
        "text": "Expulsion or suspension of membership for a specified time period.",
        "isCorrect": false,
        "rationale": "This is an NFA penalty, but it is not the only listed sanction."
      },
      {
        "id": "b",
        "text": "Censure or reprimand.",
        "isCorrect": false,
        "rationale": "This is an NFA penalty, but it is not the only listed sanction."
      },
      {
        "id": "c",
        "text": "Cease and desist order.",
        "isCorrect": false,
        "rationale": "This is an NFA penalty, but it is not the only listed sanction."
      },
      {
        "id": "d",
        "text": "A monetary fine of up to $250,000 per violation.",
        "isCorrect": false,
        "rationale": "This is an NFA penalty, but it is not the only listed sanction."
      },
      {
        "id": "e",
        "text": "Expulsion or suspension of membership for a specified time period; censure or reprimand; cease and desist order; and a monetary fine of up to $250,000 per violation.",
        "isCorrect": true,
        "rationale": "NFA Rule 3-14 permits sanctions including expulsion or suspension, censure or reprimand, cease and desist orders, monetary fines up to $250,000 per violation, and other fitting penalties or remedial action not inconsistent with NFA rules."
      }
    ],
    "explanation": "All listed sanctions may be imposed by the NFA for violations of NFA rules. NFA Rule 3-14 includes expulsion or suspension, censure or reprimand, cease and desist orders, monetary fines up to $250,000 per violation, and any other fitting penalty or remedial action not inconsistent with the rules.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-088; sequence 88; source code 10_IM_40.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source used an 'All of the above' option, which was safely rewritten semantically to list the included sanctions while preserving a single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "88",
    "sourceQuestionNumber": 88,
    "sourceCode": "10_IM_40",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-089",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The losses experienced by a pool or account over a specified time period are known as the:",
    "choices": [
      {
        "id": "a",
        "text": "Loss ratio.",
        "isCorrect": false,
        "rationale": "A loss ratio is not the regulatory term used here for losses experienced over a specified period."
      },
      {
        "id": "b",
        "text": "Draw-down.",
        "isCorrect": true,
        "rationale": "A draw-down is the losses experienced by a pool or account over a specified time period."
      },
      {
        "id": "c",
        "text": "Net loss.",
        "isCorrect": false,
        "rationale": "Net loss is a general accounting term, not the specific disclosure/performance term described."
      },
      {
        "id": "d",
        "text": "Peak-to-valley loss.",
        "isCorrect": false,
        "rationale": "Peak-to-valley loss describes a particular way of measuring drawdown, but the general term asked for is draw-down."
      }
    ],
    "explanation": "The losses experienced by a pool or account over a specified time period are known as the pool's draw-down.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-089; sequence 89; source code 10_IM_14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, answer choices, correct answer, explanation, question number, and source code are clearly visible. Terminology is consistent with CPO/CTA performance-record disclosure concepts.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "89",
    "sourceQuestionNumber": 89,
    "sourceCode": "10_IM_14",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-090",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "reparations-procedures",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following forums are available for resolution of futures customers' disputes?",
    "choices": [
      {
        "id": "a",
        "text": "Civil court litigation",
        "isCorrect": false,
        "rationale": "This is one available forum, but not the only one."
      },
      {
        "id": "b",
        "text": "CFTC reparations",
        "isCorrect": false,
        "rationale": "This is one available forum, but not the only one."
      },
      {
        "id": "c",
        "text": "Arbitration",
        "isCorrect": false,
        "rationale": "This is one available forum, but not the only one."
      },
      {
        "id": "d",
        "text": "Civil court litigation, CFTC reparations, and arbitration",
        "isCorrect": true,
        "rationale": "Futures customers may have access to civil court litigation, CFTC reparations, and arbitration as forums for dispute resolution."
      },
      {
        "id": "e",
        "text": "CFTC reparations and arbitration only",
        "isCorrect": false,
        "rationale": "This omits civil court litigation, which is also a listed forum available for dispute resolution."
      }
    ],
    "explanation": "All three listed forums-civil court litigation, CFTC reparations, and arbitration-are available for resolution of futures customers' disputes.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-090; sequence 90; source code 10_IM_27.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source uses combination choices ('A, B and C' and 'B and C, only'); app-ready version rewrites those choices semantically to avoid cross-references while preserving the tested concept and a single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "90",
    "sourceQuestionNumber": 90,
    "sourceCode": "10_IM_27",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-091",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "CTAs and CPOs may obtain relief from certain disclosure document and recordkeeping provisions of CFTC regulations when dealing with certain qualified entities or individuals satisfying the CFTC's definition of \"Qualified Eligible Person\" (QEP).",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CTAs and CPOs may submit a claim for exemption from certain disclosure document and recordkeeping requirements when dealing with qualified entities and highly capitalized individuals known as Qualified Eligible Persons."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because CFTC regulations provide certain disclosure-document and recordkeeping relief for CTAs and CPOs in connection with Qualified Eligible Persons, subject to applicable exemption requirements."
      }
    ],
    "explanation": "CTAs and CPOs may submit a claim for exemption from certain disclosure document and recordkeeping requirements for qualified entities and highly capitalized individuals known as Qualified Eligible Persons (QEPs).",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-091; sequence 91; source code 10_IM_91.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The answer and explanation are visible and consistent with the concept that CTAs and CPOs may receive certain disclosure and recordkeeping relief for QEPs, subject to exemption conditions.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "91",
    "sourceQuestionNumber": 91,
    "sourceCode": "10_IM_91",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-092",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A commodity pool operator's disclosure document states that the CPO will charge an incentive fee based on increases in the value of the pool. Which description must the disclosure document include for that incentive fee?",
    "choices": [
      {
        "id": "a",
        "text": "The method used to calculate the increase in pool value, the measurement period, the amount or rate of the fee, and the pool value level at which the fee begins to be payable.",
        "isCorrect": true,
        "rationale": "When an incentive fee is based on an increase in pool value, the disclosure must explain how the increase is calculated, the period over which it is measured, the fee charged, and the threshold value at which fee payment commences."
      },
      {
        "id": "b",
        "text": "Only the percentage incentive fee and a statement that the CPO may determine all calculation details after the pool begins trading.",
        "isCorrect": false,
        "rationale": "The disclosure cannot omit the calculation method, measurement period, or starting threshold; those details must be specified."
      },
      {
        "id": "c",
        "text": "Only the CPO's past performance record and the general risks of trading commodity interests.",
        "isCorrect": false,
        "rationale": "Past performance and risk disclosures are separate disclosure topics; they do not replace the required specific disclosure of incentive-fee calculation terms."
      },
      {
        "id": "d",
        "text": "The fee calculation details only if the incentive fee is expected to exceed ordinary management fees.",
        "isCorrect": false,
        "rationale": "The incentive-fee disclosure requirements apply when the CPO charges an incentive fee based on increases in pool value; they are not conditioned on the fee exceeding management fees."
      }
    ],
    "explanation": "A CPO that charges an incentive fee based on an increase in the value of the pool must disclose the key terms of that fee: how the increase in pool value will be calculated, the time period over which the increase is measured, the fee to be charged, and the pool value at which payment of the fee commences. The repaired item removes the banned \"all of the above\" format by making the complete required disclosure package the single correct answer.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-092; sequence 92; source code 10_IM_88.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source text is clear and the tested concept is preserved. The answer choices have been rewritten so each is standalone and exactly one choice is correct; the banned all-of-the-above format has been removed. Repair: Rewrote the original all-of-the-above question into a single-best-answer item where the correct choice lists the complete required incentive-fee disclosure elements and the distractors omit or misstate required details. Second-pass review: The repaired item is readable, preserves the original regulatory concept, and has exactly one unambiguous correct answer without using an all/none/both format. The correct choice accurately consolidates the required incentive-fee disclosure elements, and the distractors are standalone, plausible, and clearly incorrect. Rationales and explanation support the answer. No calculations are involved, the regulatory statement is not obviously outdated or over-specific for Series 3 purposes, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "92",
    "sourceQuestionNumber": 92,
    "sourceCode": "10_IM_88",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-093",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "While routine day-to-day contacts with customers are not included within the definition of promotional material, they are, however, subject to NFA's general antifraud provision.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Routine day-to-day contacts with customers are excluded from the definition of promotional material, but they are still subject to NFA's general antifraud standards."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The exclusion from the definition of promotional material does not exempt routine customer contacts from antifraud requirements."
      }
    ],
    "explanation": "Routine day-to-day contacts with customers are not included within the definition of promotional material; however, they remain subject to NFA's general antifraud provision.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-093; sequence 93; source code 10_IM_106.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer choices, source question number, source code, and explanation are visible. The item is a clear true/false regulatory concept question and the source answer supports the correct choice.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "93",
    "sourceQuestionNumber": 93,
    "sourceCode": "10_IM_106",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-094",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "nfa-membership",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "NFA members are prohibited from conducting futures- or options-related business with or on behalf of firms that are required to be NFA members but are not.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA bylaws prohibit an NFA member from carrying an account, accepting an order, or handling a futures or options transaction for or on behalf of a non-member or suspended member that is required to be registered with the CFTC in specified capacities."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The prohibition applies when the firm is required to be an NFA member but is not, so the statement is true."
      }
    ],
    "explanation": "NFA members generally may not conduct futures- or options-related business for or on behalf of a firm that is required to be an NFA member but is not a member, including firms required to be registered with the CFTC as an FCM, IB, CPO, CTA, or leverage transaction merchant.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-094; sequence 94; source code 10_IM_55.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The displayed correct answer is A, and the explanation supports the rule concept regarding NFA members doing business with required-but-nonmember firms.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "94",
    "sourceQuestionNumber": 94,
    "sourceCode": "10_IM_55",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-095",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following is not included in the NFA's definition of promotional materials?",
    "choices": [
      {
        "id": "a",
        "text": "The text of a standardized oral presentation.",
        "isCorrect": false,
        "rationale": "The text of a standardized oral presentation is included in NFA's definition of promotional material."
      },
      {
        "id": "b",
        "text": "Any communication for publication, broadcast or use on other electronic medium.",
        "isCorrect": false,
        "rationale": "Communications for publication, broadcast, or use in electronic media are included in the definition of promotional material."
      },
      {
        "id": "c",
        "text": "Day-to-day customer telephone contacts.",
        "isCorrect": true,
        "rationale": "Day-to-day customer telephone contacts are not included in the specific definition of promotional materials, although they are still subject to general anti-fraud and sales-practice requirements."
      },
      {
        "id": "d",
        "text": "A standardized report, letter, circular, memorandum, or publication disseminated or directed to the public to solicit an account, agreement, or transaction.",
        "isCorrect": false,
        "rationale": "Such standardized materials directed to the public for solicitation purposes are included in the definition of promotional material."
      }
    ],
    "explanation": "While not included in the specific definition of promotional materials, day-to-day telephone contacts nevertheless are subject to general requirements such as the prohibitions against fraud and deceit and high-pressure sales solicitations.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-095; sequence 95; source code 10_IM_65.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source includes an answer choice 'A and C,' which is not app-ready and would create ambiguity because A is included in the definition. It was safely removed because the keyed correct answer is C and the remaining choices form a clear single-answer question.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "95",
    "sourceQuestionNumber": 95,
    "sourceCode": "10_IM_65",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-096",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CTA disclosure document must include business background information about the trading advisor and each principal who participates in making trading or operational decisions or supervises persons so engaged, during the last:",
    "choices": [
      {
        "id": "a",
        "text": "Year.",
        "isCorrect": false,
        "rationale": "CTA disclosure-document business background information is required for a five-year period, not one year."
      },
      {
        "id": "b",
        "text": "Two years.",
        "isCorrect": false,
        "rationale": "CTA disclosure-document business background information is required for a five-year period, not two years."
      },
      {
        "id": "c",
        "text": "Three years.",
        "isCorrect": false,
        "rationale": "CTA disclosure-document business background information is required for a five-year period, not three years."
      },
      {
        "id": "d",
        "text": "Five years.",
        "isCorrect": true,
        "rationale": "CTA disclosure documents must disclose the business background of the trading advisor and applicable principals for the five years preceding the date of the disclosure document."
      }
    ],
    "explanation": "CTAs must disclose the business background of the trading advisor and each principal of the trading advisor for the five years preceding the date of the disclosure document if the principal participates in making trading or operational decisions for the trading advisor or supervises persons so engaged. This includes, without limitation, the CTA's officers and directors.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-096; sequence 96; source code 10_IM_60.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable, the displayed correct answer is D, and the explanation supports the five-year requirement for CTA disclosure-document business background information.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "96",
    "sourceQuestionNumber": 96,
    "sourceCode": "10_IM_60",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-097",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "An NFA arbitration claim may be filed up to how long after the filing party knew or should have known of the act or transaction in question?",
    "choices": [
      {
        "id": "a",
        "text": "One year",
        "isCorrect": false,
        "rationale": "NFA arbitration claims are subject to a two-year filing limitation, not one year."
      },
      {
        "id": "b",
        "text": "Two years",
        "isCorrect": true,
        "rationale": "NFA arbitration rules require a notice of intent to arbitrate to be received by the NFA within two years from the date when the filing party knew or should have known of the act or transaction that is the subject of the controversy."
      },
      {
        "id": "c",
        "text": "Three years",
        "isCorrect": false,
        "rationale": "The filing limitation shown in the source is two years, not three years."
      },
      {
        "id": "d",
        "text": "No time limit as long as the filing is approved by the NFA",
        "isCorrect": false,
        "rationale": "There is a time limit; the notice of intent to arbitrate must be received within two years."
      }
    ],
    "explanation": "NFA Code of Arbitration Section 5 provides that an arbitration claim or notice of intent to arbitrate must be received by NFA within two years from the date when the filing party knew or should have known of the act or transaction that is the subject of the controversy. This item is limited to the NFA arbitration timing rule.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-097; sequence 97; source code 10_IM_57. Second recovery: NFA two-year arbitration timing verified against NFA Code of Arbitration Section 5 and NFA Customer Arbitration Guide, checked 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Second recovery: promoted after official-source check of NFA Code of Arbitration Section 5. The explanation was narrowed to NFA arbitration and no longer makes an unchecked CFTC reparations statement.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "97",
    "sourceQuestionNumber": 97,
    "sourceCode": "10_IM_57",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex second recovery official-source audit"
  },
  {
    "id": "s3-regulatory-pdf-098",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-cta-promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following terms best describes trading performance results that do not represent actual trading and are generally designed with the benefit of hindsight?",
    "choices": [
      {
        "id": "a",
        "text": "Pro forma results.",
        "isCorrect": false,
        "rationale": "Pro forma is not the regulatory term used here for performance results that do not represent actual trading and are generally designed with hindsight."
      },
      {
        "id": "b",
        "text": "Extracted performance.",
        "isCorrect": false,
        "rationale": "Extracted performance is not the best term for results that do not represent actual trading and are designed with the benefit of hindsight."
      },
      {
        "id": "c",
        "text": "Reconstructed results.",
        "isCorrect": false,
        "rationale": "Reconstructed results may suggest recreated information, but the regulatory term for non-actual trading results designed with hindsight is hypothetical performance."
      },
      {
        "id": "d",
        "text": "Hypothetical performance.",
        "isCorrect": true,
        "rationale": "Hypothetical performance results do not represent actual trading and are generally designed with the benefit of hindsight. They are subject to NFA communications and promotional material requirements."
      }
    ],
    "explanation": "Trading performance results that do not represent actual trading and are generally designed with the benefit of hindsight are known as hypothetical performance and are subject to requirements under NFA Rule 2-29 for communications with the public and promotional material.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-098; sequence 98; source code 10_IM_108.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer choices, correct answer, and explanation are fully visible. The concept is consistent with NFA promotional material rules concerning hypothetical performance results.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "98",
    "sourceQuestionNumber": 98,
    "sourceCode": "10_IM_108",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-099",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "public-communications",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An NFA Member hosting a blog, chat room, or forum where futures are discussed must regularly monitor the content of the sites it hosts and, at a minimum, take which corrective actions if abuses are detected?",
    "choices": [
      {
        "id": "a",
        "text": "Provide immediate electronic notice to the NFA.",
        "isCorrect": false,
        "rationale": "The explanation identifies removal of misleading or fraudulent posts and banning users for egregious or repeat violations as the required minimum corrective actions, not immediate notice to NFA."
      },
      {
        "id": "b",
        "text": "Remove any misleading or otherwise fraudulent posts only.",
        "isCorrect": false,
        "rationale": "Removing misleading or fraudulent posts is required, but it is not the only minimum corrective action described."
      },
      {
        "id": "c",
        "text": "Ban users for egregious or repeat violations only.",
        "isCorrect": false,
        "rationale": "Banning users for egregious or repeat violations is required, but it is not the only minimum corrective action described."
      },
      {
        "id": "d",
        "text": "Remove any misleading or otherwise fraudulent posts and ban users for egregious or repeat violations.",
        "isCorrect": true,
        "rationale": "NFA guidance for member-hosted blogs, chat rooms, or forums requires the member, at a minimum, to remove misleading or fraudulent posts and ban users for egregious or repeat violations when abuses are detected."
      }
    ],
    "explanation": "An NFA Member detecting abuses on a blog, chat room, or forum that it hosts must remove any misleading or otherwise fraudulent posts and must ban users for egregious or repeat violations.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-099; sequence 99; source code 10_IM_121.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source choice D used a reference-style answer ('b and c above'); it was safely rewritten semantically into a standalone choice while preserving the intended answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "99",
    "sourceQuestionNumber": 99,
    "sourceCode": "10_IM_121",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-100",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "anti-money-laundering",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "FCMs, IBs, and their Associated Persons are prohibited from informing a customer that a Suspicious Activity Report has been filed regarding possible money laundering activity in the customer's account.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Suspicious Activity Reports are confidential, and firms and associated persons may not notify the customer that a SAR has been filed."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because SAR confidentiality prohibits informing the customer about the filing."
      }
    ],
    "explanation": "FCMs, IBs, and their Associated Persons are prohibited from informing a customer that a Suspicious Activity Report has been filed regarding possible money laundering activity.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-100; sequence 100; source code 10_IM_99.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item. The answer and explanation are visible and consistent with SAR confidentiality requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "100",
    "sourceQuestionNumber": 100,
    "sourceCode": "10_IM_99",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-101",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In regard to CTA and CPO disclosure documents, proprietary trading results must:",
    "choices": [
      {
        "id": "a",
        "text": "Not be included in the disclosure document.",
        "isCorrect": false,
        "rationale": "Proprietary trading results may be included if properly presented and explained."
      },
      {
        "id": "b",
        "text": "Be labeled as proprietary.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the complete requirement because the results must also be set forth separately at the end of the disclosure document."
      },
      {
        "id": "c",
        "text": "Be placed at the end of the disclosure document.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the complete requirement because the results must also be prominently labeled as proprietary."
      },
      {
        "id": "d",
        "text": "Be prominently labeled as proprietary and set forth separately at the end of the disclosure document.",
        "isCorrect": true,
        "rationale": "Proprietary trading results included in a CTA or CPO disclosure document must be prominently labeled as proprietary and set forth separately at the end of the disclosure document."
      }
    ],
    "explanation": "Any proprietary trading results included in a CTA or CPO disclosure document must be prominently labeled as proprietary and must be set forth separately at the end of the disclosure document. Differences between the proprietary trading results and the results of the offered pool or trading program, such as differences in costs, leverage, and trading methodology, must be explained.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-101; sequence 101; source code 10_IM_66.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source choice D used a referential answer choice, 'B and C, only.' It has been safely rewritten semantically into a standalone correct choice consistent with the visible explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "101",
    "sourceQuestionNumber": 101,
    "sourceCode": "10_IM_66",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-102",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "When specific numerical or statistical information about past performance of any actual accounts, including a rate of return, is used in any promotional material, what does NFA require?",
    "choices": [
      {
        "id": "a",
        "text": "The information must be representative of the performance of all reasonably comparable accounts during the same time period, and rate-of-return figures must be calculated consistently with CFTC requirements for CPOs and CTAs.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 requires both representativeness across reasonably comparable accounts for the same time period and CFTC-consistent rate-of-return calculations."
      },
      {
        "id": "b",
        "text": "Only that the information not be misleading; no specific performance-presentation requirements apply.",
        "isCorrect": false,
        "rationale": "Promotional material must not be misleading, but NFA Rule 2-29 also imposes specific requirements for past-performance information."
      },
      {
        "id": "c",
        "text": "The information may be based on selected profitable accounts if the accounts actually existed and the period is disclosed.",
        "isCorrect": false,
        "rationale": "Using selected accounts would not satisfy the requirement that the information be representative of all reasonably comparable accounts during the same time period."
      },
      {
        "id": "d",
        "text": "Rate-of-return figures may be calculated by any reasonable method chosen by the firm if the method is disclosed.",
        "isCorrect": false,
        "rationale": "The rate-of-return figures must be calculated in a manner consistent with CFTC requirements for CPOs and CTAs."
      }
    ],
    "explanation": "NFA Rule 2-29, governing communications with the public and promotional material, requires specific numerical or statistical past-performance information for actual accounts to be representative of all reasonably comparable accounts during the same time period. If rates of return are used, they must be calculated consistently with CFTC requirements for CTAs and CPOs.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-102; sequence 102; source code 10_IM_82.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source answer D was rewritten semantically to avoid a referential 'Both A and B' choice while preserving the tested concept. The item is readable and consistent with NFA promotional material requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "102",
    "sourceQuestionNumber": 102,
    "sourceCode": "10_IM_82",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-103",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "If an NFA Member uses a testimonial in any promotional material, then which requirements must be satisfied?",
    "choices": [
      {
        "id": "a",
        "text": "The testimonial must be representative of all reasonably comparable accounts.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the only requirement."
      },
      {
        "id": "b",
        "text": "The material must prominently state that the testimonial is not indicative of future performance or success.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the only requirement."
      },
      {
        "id": "c",
        "text": "If applicable, the material must state that it was a paid testimonial.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the only requirement."
      },
      {
        "id": "d",
        "text": "The testimonial must be representative of all reasonably comparable accounts; the material must prominently state that the testimonial is not indicative of future performance or success; and, if applicable, the material must state that it was a paid testimonial.",
        "isCorrect": true,
        "rationale": "NFA promotional material rules require all three disclosures/conditions when a testimonial is used."
      },
      {
        "id": "e",
        "text": "The material must prominently state that the testimonial is not indicative of future performance or success and, if applicable, must state that it was a paid testimonial, but the testimonial need not be representative of reasonably comparable accounts.",
        "isCorrect": false,
        "rationale": "This omits the representativeness requirement."
      }
    ],
    "explanation": "If an NFA Member uses a testimonial in promotional material, the testimonial must be representative of all reasonably comparable accounts, the material must prominently state that the testimonial is not indicative of future performance or success, and, if applicable, the material must disclose that it was a paid testimonial.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-103; sequence 103; source code 10_IM_105.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses 'All of the above' and 'B and C above.' The app-ready version rewrites those choices semantically while preserving a single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "103",
    "sourceQuestionNumber": 103,
    "sourceCode": "10_IM_105",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-104",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "nfa-membership",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "An NFA Member, as a privilege of its membership, is permitted to represent to customers and prospective customers that it is sponsored and approved by the NFA.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA Rule 2-22 prohibits Members and Associates from representing or implying that NFA has sponsored, recommended, or approved them."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "An NFA Member may state the fact of its membership, but may not represent or imply that it is sponsored or approved by NFA."
      }
    ],
    "explanation": "NFA Rule 2-22 prohibits Members or Associates from representing or implying that they have been sponsored, recommended, or approved by NFA, or that NFA has passed upon their abilities. They may state the fact of NFA membership or Associate registration, provided the statement is not misleading, and may discuss NFA's functions and purposes.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-104; sequence 104; source code 10_IM_101.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, answer, and explanation are fully visible. The True/False format is clear, and the stated rule is consistent with NFA Rule 2-22 on prohibited representations.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "104",
    "sourceQuestionNumber": 104,
    "sourceCode": "10_IM_101",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-105",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Futures customers' funds may be held by:",
    "choices": [
      {
        "id": "a",
        "text": "Futures commission merchants and futures clearinghouses.",
        "isCorrect": true,
        "rationale": "FCMs and derivatives clearing organizations/clearinghouses are permitted to hold futures customer funds; introducing brokers may not accept or hold customer funds."
      },
      {
        "id": "b",
        "text": "Futures commission merchants only.",
        "isCorrect": false,
        "rationale": "This omits clearinghouses, which may hold customer funds in connection with clearing."
      },
      {
        "id": "c",
        "text": "Futures clearinghouses only.",
        "isCorrect": false,
        "rationale": "This omits futures commission merchants, which are permitted to hold customer funds."
      },
      {
        "id": "d",
        "text": "Futures commission merchants, clearinghouses, and introducing brokers.",
        "isCorrect": false,
        "rationale": "Introducing brokers may not hold customer funds."
      }
    ],
    "explanation": "The only futures industry institutions permitted by law to hold customer funds are futures commission merchants and futures clearinghouses. Introducing brokers are not permitted to accept or hold customer funds.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-105; sequence 105; source code 10_IM_6.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and internally consistent. The regulatory concept is that FCMs and clearinghouses may hold customer funds, while IBs may not.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "105",
    "sourceQuestionNumber": 105,
    "sourceCode": "10_IM_6",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-106",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In regard to supervision, each NFA member handling discretionary accounts must:",
    "choices": [
      {
        "id": "a",
        "text": "Adopt and enforce written procedures.",
        "isCorrect": false,
        "rationale": "This is one required supervisory obligation, but it is not the only one listed."
      },
      {
        "id": "b",
        "text": "Regularly review discretionary trading activity and make a written record of such review.",
        "isCorrect": false,
        "rationale": "This is one required supervisory obligation, but it is not the only one listed."
      },
      {
        "id": "c",
        "text": "In the case of an FCM or IB, ensure that the AP has a minimum of two years of experience.",
        "isCorrect": false,
        "rationale": "This is one required obligation for an FCM or IB handling discretionary accounts, but it is not the only one listed."
      },
      {
        "id": "d",
        "text": "Adopt and enforce written supervisory procedures, regularly review discretionary trading activity with written records, and, for an FCM or IB, ensure the AP directing trading has at least two years of experience.",
        "isCorrect": true,
        "rationale": "NFA discretionary-account supervision requirements include written supervisory procedures, regular review of discretionary trading with written records of review, and a two-year experience requirement for an AP directing trading in discretionary accounts at an FCM or IB."
      }
    ],
    "explanation": "NFA members directing trading in discretionary accounts must adopt and enforce written supervisory procedures and must regularly review discretionary trading activity, making a written record of the review. In addition, NFA members that are FCMs or IBs must ensure that the AP directing trading in the account has at least two years of experience.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-106; sequence 106; source code 10_IM_68.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source used an 'All of the above' choice; for app readiness, the correct choice was rewritten semantically to avoid a referential answer while preserving the tested concept. The visible answer and explanation are coherent and identify D as the only correct source choice.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "106",
    "sourceQuestionNumber": 106,
    "sourceCode": "10_IM_68",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-107",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "In addition to an annual report, a CPO must attach to its disclosure document the CPO's most current account statement, unless the performance information in the disclosure document is current as of a date not more than 60 days prior to the date on which the disclosure document is provided to a prospective participant.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CPO disclosure document requirements include attaching the most current account statement and annual report, subject to the stated current-performance-information exception."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement accurately describes the requirement and exception shown in the source."
      }
    ],
    "explanation": "CPOs are required to attach to their disclosure documents their most current account statements and annual reports. The source states an exception where the performance information in the disclosure document is current as of a date not more than 60 days before it is provided to the prospective participant.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-107; sequence 107; source code 10_IM_74.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question and answer are clearly visible. True/False format is preserved with exactly one correct answer. Terminology is consistent with CPO disclosure document requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "107",
    "sourceQuestionNumber": 107,
    "sourceCode": "10_IM_74",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-108",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "floor-broker",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under CFTC-approved exchange rules, when may a floor broker accept and execute customer orders as a cross-trade?",
    "choices": [
      {
        "id": "a",
        "text": "When the cross-trade is executed in accordance with the written rules of the particular exchange.",
        "isCorrect": true,
        "rationale": "A floor broker may execute cross-trades only under the written rules of the exchange, and those rules must be approved by the CFTC."
      },
      {
        "id": "b",
        "text": "Whenever both accounts involved are hedge accounts.",
        "isCorrect": false,
        "rationale": "Cross-trading is not permitted merely because the accounts are hedge accounts; the exchange's approved written cross-trade rules must be followed."
      },
      {
        "id": "c",
        "text": "Whenever the other side of the order is a proprietary account of the floor broker's firm.",
        "isCorrect": false,
        "rationale": "A proprietary account on the other side does not by itself authorize a cross-trade; approved exchange procedures govern whether and how it may be done."
      },
      {
        "id": "d",
        "text": "Whenever the floor broker believes the execution price is fair to both customers.",
        "isCorrect": false,
        "rationale": "A fair price alone is not sufficient. Cross-trades must be handled according to the exchange's written, CFTC-approved rules."
      }
    ],
    "explanation": "A floor broker may accept and execute orders as a cross-trade only when the transaction is handled in accordance with the written rules of the particular exchange, which must be approved by the CFTC. The rule is procedural and is not limited to hedge accounts or proprietary trades.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-108; sequence 108; source code 10_IM_61.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the banned 'All of the above' format and to make all distractors standalone. The tested concept and source answer are clear. Repair: Removed the 'All of the above' choice, rewrote the stem and distractors into app-ready standalone wording, and preserved the source-tested rule that cross-trades must comply with written CFTC-approved exchange rules. Second-pass review: The repaired question is clear, has exactly one unambiguous correct answer, removes the discouraged 'All of the above' format, and uses plausible standalone distractors. The explanation and rationales correctly support the rule that floor-broker cross-trades must be executed under written exchange rules approved by the CFTC. No calculations are present, the regulatory statement is appropriate, and the taxonomy is valid.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "108",
    "sourceQuestionNumber": 108,
    "sourceCode": "10_IM_61",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-109",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "For Series 3 regulatory purposes after Dodd-Frank, which group best reflects the broad set of commodity-interest products regulated by the CFTC framework?",
    "choices": [
      {
        "id": "a",
        "text": "Futures contracts, options on futures, retail forex where covered, and swaps.",
        "isCorrect": true,
        "rationale": "The CFTC framework covers futures, options on futures, swaps, and certain retail forex activity."
      },
      {
        "id": "b",
        "text": "Only exchange-traded equity securities.",
        "isCorrect": false,
        "rationale": "Equity securities are primarily securities-law products, not the full CFTC commodity-interest scope."
      },
      {
        "id": "c",
        "text": "Only agricultural futures contracts traded by floor brokers.",
        "isCorrect": false,
        "rationale": "The CFTC framework is much broader than agricultural futures and floor trading."
      },
      {
        "id": "d",
        "text": "Only cash commodity transactions with immediate delivery.",
        "isCorrect": false,
        "rationale": "Ordinary cash transactions with immediate delivery are not the broad derivatives scope tested here."
      }
    ],
    "explanation": "The source item was moved out of risk disclosure because it tests regulatory scope. After Dodd-Frank, swaps joined futures and options on futures as central CFTC-regulated commodity-interest products, with retail forex also covered in specific circumstances.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-109; sequence 109; source code 10_IM_123. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "109",
    "sourceQuestionNumber": 109,
    "sourceCode": "10_IM_123",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-110",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The funds of an FCM and those of its customers may:",
    "choices": [
      {
        "id": "a",
        "text": "Be commingled as long as generally accepted accounting principles are followed.",
        "isCorrect": false,
        "rationale": "Generally accepted accounting principles do not permit an FCM to commingle its own funds with customer segregated funds."
      },
      {
        "id": "b",
        "text": "Not be commingled.",
        "isCorrect": true,
        "rationale": "CFTC regulations require customer funds to be segregated from the FCM's own funds; they may not be commingled."
      },
      {
        "id": "c",
        "text": "Be commingled only at the clearinghouse level.",
        "isCorrect": false,
        "rationale": "The rule prohibits commingling customer segregated funds with funds belonging to the FCM; this answer does not state the required segregation."
      },
      {
        "id": "d",
        "text": "Be commingled only with the customer's written consent.",
        "isCorrect": false,
        "rationale": "Written customer consent does not authorize an FCM to commingle customer segregated funds with the FCM's own funds."
      }
    ],
    "explanation": "CFTC regulations prohibit an FCM from commingling customer segregated funds with funds belonging to the FCM.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-110; sequence 110; source code 10_IM_35.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The stated correct answer and explanation are consistent with FCM customer fund segregation requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "110",
    "sourceQuestionNumber": 110,
    "sourceCode": "10_IM_35",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-111",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "financial-reports",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "An FCM's computation and record of customer segregated funds must be prepared:",
    "choices": [
      {
        "id": "a",
        "text": "Weekly.",
        "isCorrect": false,
        "rationale": "FCMs must compute and prepare the record daily, not weekly."
      },
      {
        "id": "b",
        "text": "Daily.",
        "isCorrect": true,
        "rationale": "Each FCM must compute customer segregated funds information daily, as of the close of each business day."
      },
      {
        "id": "c",
        "text": "Monthly.",
        "isCorrect": false,
        "rationale": "The required computation and record are not prepared monthly; they are required daily."
      },
      {
        "id": "d",
        "text": "Quarterly.",
        "isCorrect": false,
        "rationale": "The required computation and record are not prepared quarterly; they are required daily."
      }
    ],
    "explanation": "Each FCM must compute on a daily basis, as of the close of each business day, the total amount of customer funds on deposit in segregated accounts, the total amount required to be on deposit in segregated accounts, and the FCM's residual interest in customer segregated funds. FCMs must also prepare a similar daily record for foreign futures and options secured amounts.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-111; sequence 111; source code 10_IM_19.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, correct answer, and explanation are clearly visible. The regulatory concept is consistent with FCM daily segregation computation requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "111",
    "sourceQuestionNumber": 111,
    "sourceCode": "10_IM_19",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-112",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under the CFTC conflict-of-interest framework for FCMs and IBs, which statement about research analysts and trading personnel is most accurate?",
    "choices": [
      {
        "id": "a",
        "text": "The firm must maintain policies and procedures designed to separate research from business trading influence that could compromise independence.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.71 requires conflict-of-interest policies and controls around research and business trading units."
      },
      {
        "id": "b",
        "text": "Research analysts may be placed directly under trading-desk supervision if NFA approves it informally.",
        "isCorrect": false,
        "rationale": "The current rule focuses on written conflicts policies and controls; direct trading-desk control is not the safe answer."
      },
      {
        "id": "c",
        "text": "Research rules apply only to securities broker-dealers and never to FCMs or IBs.",
        "isCorrect": false,
        "rationale": "CFTC Regulation 1.71 applies to FCMs and IBs."
      },
      {
        "id": "d",
        "text": "Research independence is irrelevant if the report is distributed only online.",
        "isCorrect": false,
        "rationale": "Distribution channel does not remove the conflict-of-interest concern."
      }
    ],
    "explanation": "CFTC Regulation 1.71 addresses conflicts of interest for FCMs and IBs, including research-related safeguards. The exam-useful point is that firms need policies and procedures to protect research integrity from improper business trading influence.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-112; sequence 112; source code 10_IM_125. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "112",
    "sourceQuestionNumber": 112,
    "sourceCode": "10_IM_125",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-113",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "disciplinary-procedures",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In a formal CFTC administrative complaint, which appeal rights are permitted?",
    "choices": [
      {
        "id": "a",
        "text": "A ruling of a CFTC Administrative Law Judge may be appealed to the Commission, and the respondent may appeal the Commission's order on review to the U.S. Court of Appeals.",
        "isCorrect": true,
        "rationale": "Either party may appeal an Administrative Law Judge's decision to the Commission, and the respondent may appeal the Commission's decision to the U.S. Court of Appeals."
      },
      {
        "id": "b",
        "text": "Only the initial ruling of the Administrative Law Judge may be appealed; the Commission's order on review may not be appealed to a court.",
        "isCorrect": false,
        "rationale": "The respondent may appeal the Commission's order to the U.S. Court of Appeals."
      },
      {
        "id": "c",
        "text": "Only the Commission's order on review may be appealed to the U.S. Court of Appeals; the Administrative Law Judge's ruling may not be appealed to the Commission.",
        "isCorrect": false,
        "rationale": "An Administrative Law Judge's decision may be appealed to the Commission."
      },
      {
        "id": "d",
        "text": "No appeal is permitted after a decision in a formal CFTC administrative complaint.",
        "isCorrect": false,
        "rationale": "Appeals are permitted both from the Administrative Law Judge to the Commission and, for the respondent, from the Commission to the U.S. Court of Appeals."
      }
    ],
    "explanation": "Either party may appeal a decision of a CFTC Administrative Law Judge to the Commission, and the respondent may appeal a Commission decision to the U.S. Court of Appeals.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-113; sequence 113; source code 10_IM_17.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source uses an 'A and B, only' answer choice, which has been rewritten into a semantic standalone correct choice for app readiness. The underlying rule and explanation are clear and consistent.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "113",
    "sourceQuestionNumber": 113,
    "sourceCode": "10_IM_17",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-114",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "disciplinary-procedures",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A respondent in an NFA complaint may appeal any adverse action issued by an NFA hearing panel directly to the:",
    "choices": [
      {
        "id": "a",
        "text": "NFA board of directors.",
        "isCorrect": false,
        "rationale": "Appeals from an adverse action issued by an NFA hearing committee or hearing panel go to the NFA Appeals Committee, not directly to the NFA Board of Directors."
      },
      {
        "id": "b",
        "text": "NFA appeals committee.",
        "isCorrect": true,
        "rationale": "A respondent in an NFA complaint may appeal an adverse action issued by the NFA hearing committee or hearing panel directly to the NFA Appeals Committee."
      },
      {
        "id": "c",
        "text": "CFTC.",
        "isCorrect": false,
        "rationale": "The appeal is made within the NFA disciplinary process to the NFA Appeals Committee, not directly to the CFTC."
      },
      {
        "id": "d",
        "text": "Appropriate NFA regional business conduct committee.",
        "isCorrect": false,
        "rationale": "An NFA regional business conduct committee is not the direct appeal body for an adverse action issued by an NFA hearing panel."
      }
    ],
    "explanation": "A respondent in an NFA complaint may appeal any adverse action issued by the NFA hearing committee or hearing panel directly to the NFA Appeals Committee.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-114; sequence 114; source code 10_IM_62.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer choices, correct answer, and explanation are clearly visible. The concept is consistent with NFA disciplinary appeal procedures.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "114",
    "sourceQuestionNumber": 114,
    "sourceCode": "10_IM_62",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-115",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Registrants under the Commodity Exchange Act can withdraw from registration while under investigation by the NFA or CFTC.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "A registrant under investigation by the CFTC or NFA is not permitted to withdraw from registration."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "A registrant under investigation by the CFTC or NFA is not permitted to withdraw from registration under the Commodity Exchange Act."
      }
    ],
    "explanation": "A registrant under investigation by the CFTC or NFA is not permitted to withdraw from registration under the Commodity Exchange Act. Therefore, the statement is false.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-115; sequence 115; source code 10_IM_4.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer choices, and explanation are clearly visible. The true/false format is preserved and exactly one answer is correct.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "115",
    "sourceQuestionNumber": 115,
    "sourceCode": "10_IM_4",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-116",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "position-reporting",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "For CFTC reporting purposes, positions must be aggregated based on common control and common ownership of 10 percent or more.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC aggregation rules generally require positions to be aggregated for reporting/limit purposes when accounts are under common control or have common ownership of 10% or more, subject to exceptions."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The stated aggregation threshold and common-control/common-ownership concept are consistent with the regulatory explanation shown."
      }
    ],
    "explanation": "CFTC regulations require aggregation, for position-reporting purposes, of accounts under common control or ownership of 10 percent or more, except in certain shareholder or limited partner pool situations. For CFTC and exchange position-limit purposes, positions also must be aggregated based on common ownership and control and for groups of accounts trading pursuant to an express or implied agreement.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-116; sequence 116; source code 10_IM_18.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, answer, source code, and explanation are clearly visible. True/False choices are properly represented, and exactly one answer is correct.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "116",
    "sourceQuestionNumber": 116,
    "sourceCode": "10_IM_18",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-117",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under current NFA customer arbitration guidance, when is a case generally handled through written submissions instead of an oral hearing?",
    "choices": [
      {
        "id": "a",
        "text": "Claims of $25,000 or less are resolved through summary proceedings, and claims over $25,000 up to $50,000 are also written unless an oral hearing is timely requested.",
        "isCorrect": true,
        "rationale": "Current NFA customer arbitration guidance describes summary/written proceedings for these claim ranges."
      },
      {
        "id": "b",
        "text": "Only claims of $5,000 or less can ever be handled through written submissions.",
        "isCorrect": false,
        "rationale": "That old threshold is too low under current NFA guidance."
      },
      {
        "id": "c",
        "text": "Every arbitration claim requires a live oral hearing regardless of amount.",
        "isCorrect": false,
        "rationale": "NFA summary proceedings can be based on written submissions."
      },
      {
        "id": "d",
        "text": "Written submissions are used only if the respondent defaults.",
        "isCorrect": false,
        "rationale": "Claim amount and procedural rules, not only default, determine summary proceedings."
      }
    ],
    "explanation": "The source's $5,000 threshold was outdated. Current NFA customer arbitration guidance says claims involving $25,000 or less are resolved through summary proceedings, and claims over $25,000 but not more than $50,000 are also handled through written submissions unless an oral hearing is timely requested with the required fee.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-117; sequence 117; source code 10_IM_89. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "117",
    "sourceQuestionNumber": 117,
    "sourceCode": "10_IM_89",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-118",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "A CPO disclosure document must identify all CTAs allocated or intended to be allocated at least 10 percent of the pool's funds that are available for commodity interest trading.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A CPO disclosure document must identify each major CTA, meaning any CTA allocated or intended to be allocated at least 10 percent of the pool's funds available for commodity interest trading."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This statement matches the disclosure requirement for identifying major CTAs."
      }
    ],
    "explanation": "A CPO disclosure document must identify each \"major CTA,\" defined as any CTA allocated or intended to be allocated at least 10 percent of the pool's funds available for commodity interest trading.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-118; sequence 118; source code 10_IN_77.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer, and explanation are visible and internally consistent. Converted to a standard true/false app-ready format while preserving the source meaning.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "118",
    "sourceQuestionNumber": 118,
    "sourceCode": "10_IN_77",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-119",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which requirement applies before an associated person of an FCM or IB may handle a discretionary customer account?",
    "choices": [
      {
        "id": "a",
        "text": "The customer must provide written trading authorization, such as a signed power of attorney, before discretionary trading occurs.",
        "isCorrect": true,
        "rationale": "Written customer or account-controller authorization is required before discretionary trading authority may be exercised."
      },
      {
        "id": "b",
        "text": "The associated person must have at least three years of experience handling customer accounts.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-8 uses a two-year continuous registration/work requirement for an AP of an FCM or IB to exercise discretion, subject to stated exceptions or waiver; three years is not the rule."
      },
      {
        "id": "c",
        "text": "The account may be handled without written authorization if the customer gives verbal permission before each trade.",
        "isCorrect": false,
        "rationale": "Verbal permission is not enough for discretionary authority. Written authorization is required for discretionary trading."
      },
      {
        "id": "d",
        "text": "Supervisor review is required only when the account has generated a customer complaint.",
        "isCorrect": false,
        "rationale": "Discretionary trading must be supervised under written review procedures; review is not limited to complaint situations."
      }
    ],
    "explanation": "The repaired question asks for one clear requirement: written authorization. CFTC Regulation 166.2 requires specific authorization for individual trades or written authorization for discretionary trading authority. NFA Rule 2-8 similarly states that no Member or Associate may exercise discretion over a customer's commodity futures or cleared swaps account unless the customer or account controller has authorized that discretion in writing. NFA Rule 2-8 also includes supervisory review requirements and a two-year AP experience requirement for FCM/IB discretionary accounts, but those are not the correct choices in this narrowed item.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-119; sequence 119; source code 10_IM_80. Second recovery: narrowed and verified against CFTC Regulation 166.2 and NFA Compliance Rule 2-8, checked 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Second recovery: promoted after narrowing the item to the written-authorization requirement and checking CFTC Regulation 166.2 plus NFA Rule 2-8.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "119",
    "sourceQuestionNumber": 119,
    "sourceCode": "10_IM_80",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex second recovery official-source audit"
  },
  {
    "id": "s3-regulatory-pdf-120",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A registrant distributes promotional material, disclosure documents, or a website in a non-English language to customers in the United States. What recordkeeping step is required for that material?",
    "choices": [
      {
        "id": "a",
        "text": "Maintain an English translation of the foreign-language material.",
        "isCorrect": true,
        "rationale": "Registrants must maintain English translations of foreign-language promotional material, including disclosure documents and websites, distributed to or intended for viewing by U.S. customers."
      },
      {
        "id": "b",
        "text": "Translate the material only if the NFA requests a translation during an examination.",
        "isCorrect": false,
        "rationale": "The requirement is to maintain an English translation as part of the records, not merely to be prepared to create one on request."
      },
      {
        "id": "c",
        "text": "File the foreign-language material with the CFTC before it is distributed.",
        "isCorrect": false,
        "rationale": "This question tests the English-translation recordkeeping requirement, not a general pre-filing requirement with the CFTC."
      },
      {
        "id": "d",
        "text": "Use the material without an English translation if the original language is the intended audience's primary language.",
        "isCorrect": false,
        "rationale": "Even when the material is aimed at speakers of another language, an English translation must be maintained if it is distributed to or intended for viewing by U.S. customers."
      }
    ],
    "explanation": "CFTC recordkeeping rules require English translations to be maintained for foreign-language promotional material, including disclosure documents and websites, when the material is distributed to or intended for viewing by customers located in the United States, its territories, or possessions.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-120; sequence 120; source code 10_IM_95.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Repaired by removing the banned referential combination choice and replacing all options with standalone semantic answers. The tested concept and correct answer are clear from the source. Repair: Rewrote the stem and answer choices into app-ready form, removed the 'A and B' choice, and preserved the requirement to maintain English translations of covered foreign-language materials. Second-pass review: The repaired item is clear and readable, has exactly one unambiguous correct answer, and removes the prior referential combination choice. Distractors are standalone and plausible. The explanation and rationales consistently support the recordkeeping requirement to maintain English translations for foreign-language promotional material/disclosure documents/websites intended for U.S. customers. Taxonomy is appropriate, and no calculations are involved.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "120",
    "sourceQuestionNumber": 120,
    "sourceCode": "10_IM_95",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-121",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "registration-exemptions",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A foreign futures-related product is proposed to be offered to U.S. persons. What is the safest regulatory conclusion?",
    "choices": [
      {
        "id": "a",
        "text": "The offer may require CFTC or other U.S. regulatory relief, recognition, registration, or other permission before it is made to U.S. persons.",
        "isCorrect": true,
        "rationale": "Foreign trading status does not automatically make a product freely offerable to U.S. persons."
      },
      {
        "id": "b",
        "text": "Foreign futures products are never subject to U.S. regulatory restrictions.",
        "isCorrect": false,
        "rationale": "U.S. persons can trigger U.S. regulatory requirements even for foreign products."
      },
      {
        "id": "c",
        "text": "The SEC is always the only regulator because the product is foreign.",
        "isCorrect": false,
        "rationale": "Depending on the product, CFTC jurisdiction or relief can be central."
      },
      {
        "id": "d",
        "text": "NFA approval alone always replaces any CFTC requirement.",
        "isCorrect": false,
        "rationale": "NFA membership or oversight does not automatically replace CFTC requirements."
      }
    ],
    "explanation": "The older source referred to specific no-action practices. The current reliable concept is broader: offering foreign futures-related products to U.S. persons can require CFTC recognition, relief, registration, or other regulatory analysis. Do not assume foreign products are freely offerable in the United States.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-121; sequence 121; source code 10_IM_29. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "121",
    "sourceQuestionNumber": 121,
    "sourceCode": "10_IM_29",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-122",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "upfront-fees",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The fee charged by a money manager based on account performance is referred to as a (an):",
    "choices": [
      {
        "id": "a",
        "text": "Management fee.",
        "isCorrect": false,
        "rationale": "A management fee is generally based on assets under management rather than account performance."
      },
      {
        "id": "b",
        "text": "Administrative fee.",
        "isCorrect": false,
        "rationale": "An administrative fee is not a performance-based money manager fee."
      },
      {
        "id": "c",
        "text": "Incentive fee.",
        "isCorrect": true,
        "rationale": "A fee charged by a money manager based on account performance is an incentive fee."
      },
      {
        "id": "d",
        "text": "Commission",
        "isCorrect": false,
        "rationale": "A commission is typically a transaction-based charge, not a fee based on account performance."
      }
    ],
    "explanation": "A fee charged by a money manager based on account performance is referred to as an incentive fee. CTAs and CPOs are required to disclose in their disclosure documents information regarding the use of incentive fees.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-122; sequence 122; source code 10_IM_84.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, answer, and explanation are readable and internally consistent. The concept is a standard CTA/CPO disclosure topic concerning incentive fees.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "122",
    "sourceQuestionNumber": 122,
    "sourceCode": "10_IM_84",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-123",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "speculative-position-limits",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which entities establish speculative position limits for futures and options contracts?",
    "choices": [
      {
        "id": "a",
        "text": "The CFTC and futures or options exchanges",
        "isCorrect": true,
        "rationale": "Correct. Speculative position limits may be established by CFTC regulation and by exchange rules, with exchange rules subject to CFTC oversight or approval."
      },
      {
        "id": "b",
        "text": "The NFA only",
        "isCorrect": false,
        "rationale": "Incorrect. The NFA enforces many industry rules, but speculative position limits are established by the CFTC and exchanges, not by the NFA alone."
      },
      {
        "id": "c",
        "text": "Futures commission merchants only",
        "isCorrect": false,
        "rationale": "Incorrect. FCMs may monitor customer positions for compliance, but they do not establish marketwide speculative position limits."
      },
      {
        "id": "d",
        "text": "Individual customers and their account executives",
        "isCorrect": false,
        "rationale": "Incorrect. Customers and account executives do not set regulatory or exchange speculative position limits."
      }
    ],
    "explanation": "Speculative position limits restrict the maximum size of a speculative position in futures or options contracts. These limits may be set by the CFTC and by futures or options exchanges. Exchange position-limit rules and levels are subject to CFTC oversight or approval. The NFA and FCMs may have compliance or supervisory roles, but they are not the entities identified as establishing these limits.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-123; sequence 123; source code 10_IM_11.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Repaired to remove answer-letter references and combined-choice format. The tested concept is clear from the source: speculative position limits may be established by the CFTC and exchanges. Exactly one standalone answer choice is correct. Repair: Converted the original 'A and B only' style item into a standalone multiple-choice question with four semantic choices and one correct answer. Second-pass review: The repaired item is clear and readable, has exactly one standalone correct answer, avoids combined/letter-reference formats, and provides plausible distractors. The explanation and rationales correctly support that speculative position limits may be established by the CFTC and futures/options exchanges, with exchange rules subject to CFTC oversight or approval. No calculations are involved, the regulatory statement is appropriately general and not over-specific, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "123",
    "sourceQuestionNumber": 123,
    "sourceCode": "10_IM_11",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-124",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Promotional material relating to futures trading may not discuss potential gains or profits.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Promotional material may discuss potential gains or profits if the material also includes an equally prominent statement of the risk of loss."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Promotional material may discuss potential gains or profits, provided those representations are accompanied by an equally prominent risk-of-loss statement."
      }
    ],
    "explanation": "Promotional material for futures trading is not absolutely prohibited from discussing potential gains or profits. However, profit or gain representations must be balanced by an equally prominent statement of the risk of loss.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-124; sequence 124; source code 10_IM_56.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item. The source answer and explanation are consistent with the rule that promotional material may discuss potential profits if accompanied by an equally prominent risk-of-loss statement.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "124",
    "sourceQuestionNumber": 124,
    "sourceCode": "10_IM_56",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-125",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "commodity-trading-advisor",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "A money manager who directs the trading of individual accounts is known as a:",
    "choices": [
      {
        "id": "a",
        "text": "CPO",
        "isCorrect": false,
        "rationale": "A Commodity Pool Operator operates or solicits funds for a commodity pool, rather than directing trading for individual accounts as an advisor."
      },
      {
        "id": "b",
        "text": "CTA",
        "isCorrect": true,
        "rationale": "A Commodity Trading Advisor is a money manager or advisor who directs or advises on trading in individual customer accounts."
      },
      {
        "id": "c",
        "text": "IB",
        "isCorrect": false,
        "rationale": "An Introducing Broker solicits or accepts orders but does not accept customer funds and is not defined as the advisor directing individual account trading."
      },
      {
        "id": "d",
        "text": "Guaranteed IB",
        "isCorrect": false,
        "rationale": "A guaranteed Introducing Broker is an IB guaranteed by an FCM; this is not the designation for a money manager directing individual account trading."
      }
    ],
    "explanation": "A money manager who directs trading of individual accounts is known as a Commodity Trading Advisor (CTA).",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-125; sequence 125; source code 10_IM_119.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable, the source marks B as correct, and the regulatory terminology is consistent: a CTA advises or directs trading for individual accounts, while a CPO operates a pool and IB categories refer to order solicitation/introducing broker activity.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "125",
    "sourceQuestionNumber": 125,
    "sourceCode": "10_IM_119",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-126",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following must be included in customer segregated funds?",
    "choices": [
      {
        "id": "a",
        "text": "Customer funds on deposit",
        "isCorrect": false,
        "rationale": "Customer funds on deposit must be included in customer segregated funds, but this choice is incomplete by itself."
      },
      {
        "id": "b",
        "text": "Customer open-trade futures equity",
        "isCorrect": false,
        "rationale": "Customer open-trade futures equity must be included in customer segregated funds, but this choice is incomplete by itself."
      },
      {
        "id": "c",
        "text": "Customer-owned Treasury bills",
        "isCorrect": false,
        "rationale": "Customer-owned Treasury bills must be included in customer segregated funds, but this choice is incomplete by itself."
      },
      {
        "id": "d",
        "text": "Customer funds on deposit, customer open-trade futures equity, and customer-owned Treasury bills",
        "isCorrect": true,
        "rationale": "All three listed categories are customer funds, equity, or property and must be treated as segregated property belonging to or accruing to the customer."
      },
      {
        "id": "e",
        "text": "Customer funds on deposit and customer open-trade futures equity only",
        "isCorrect": false,
        "rationale": "This omits customer-owned Treasury bills, which are also included in customer segregated funds."
      }
    ],
    "explanation": "A customer's funds on deposit, open-trade futures equity, and customer-owned Treasury bills must be treated as segregated funds, equity, and property belonging to or accruing to the customer. They may not be commingled with funds, equities, or property belonging to the FCM.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-126; sequence 126; source code 10_IM_36.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source used a combination answer choice, \"A, B and C.\" It has been safely rewritten semantically for app use while preserving a single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "126",
    "sourceQuestionNumber": 126,
    "sourceCode": "10_IM_36",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-127",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "nfa-membership",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "NFA membership is recommended but not required for all registered Futures Commission Merchants.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA membership is not merely recommended; registered FCMs must be members of a CFTC-registered futures association, and NFA is the only such association."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC regulations require FCMs to become and remain a member of at least one futures association registered by the CFTC; NFA is currently the only CFTC-registered futures association."
      }
    ],
    "explanation": "The statement is false. CFTC regulations require registered Futures Commission Merchants to be members of a registered futures association. Because NFA is the only CFTC-registered futures association, NFA membership is required for registered FCMs.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-127; sequence 127; source code 10_IM_67.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item with clear answer and supporting explanation. Terminology is consistent with NFA membership requirements for FCMs.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "127",
    "sourceQuestionNumber": 127,
    "sourceCode": "10_IM_67",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-128",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "written-authorization",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "A customer's stock account has $5,000 in excess funds. His commodities account at the same firm has a margin call for $2,500. The broker can transfer funds from the stock account to the commodities account:",
    "choices": [
      {
        "id": "a",
        "text": "Only with the customer's written permission.",
        "isCorrect": true,
        "rationale": "A transfer from a securities account to a commodities account requires the customer's written permission, often through a separately signed transfer authorization."
      },
      {
        "id": "b",
        "text": "At the broker's discretion.",
        "isCorrect": false,
        "rationale": "The broker does not have discretion to transfer funds between the customer's stock and commodities accounts without written authorization."
      },
      {
        "id": "c",
        "text": "Only if the customer is unavailable and immediate action is deemed necessary.",
        "isCorrect": false,
        "rationale": "Urgency or customer unavailability does not substitute for written customer permission to transfer funds between accounts."
      },
      {
        "id": "d",
        "text": "Under no circumstances.",
        "isCorrect": false,
        "rationale": "The transfer is allowed if the customer provides written permission."
      }
    ],
    "explanation": "A customer must provide written permission for a broker to transfer funds from a stock account to a commodity account. This is often accomplished through a separately signed transfer authorization.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-128; sequence 128; source code 10_IM_5.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The source answer and explanation consistently identify written customer permission as required for transferring funds from a stock account to a commodities account.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "128",
    "sourceQuestionNumber": 128,
    "sourceCode": "10_IM_5",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-129",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "nfa-membership",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An NFA member may, in regard to its NFA membership:",
    "choices": [
      {
        "id": "a",
        "text": "State that its activities have been approved or sponsored by the NFA.",
        "isCorrect": false,
        "rationale": "NFA membership may not be presented as NFA approval or sponsorship of the member's activities."
      },
      {
        "id": "b",
        "text": "State that it is an NFA member and explain the functions and purposes of the NFA, provided the effect of NFA membership is not misrepresented.",
        "isCorrect": true,
        "rationale": "An NFA member or associate may truthfully state NFA membership and may explain the NFA's functions and purposes, as long as it does not misrepresent what membership means."
      },
      {
        "id": "c",
        "text": "State that NFA membership guarantees the member's financial soundness or trading performance.",
        "isCorrect": false,
        "rationale": "NFA membership cannot be used to imply guarantees, endorsement, approval, or special protection beyond the fact of membership."
      },
      {
        "id": "d",
        "text": "State that the NFA sponsors the member's trading programs if the member is registered.",
        "isCorrect": false,
        "rationale": "Registration or membership does not mean that the NFA sponsors or approves the member's trading programs."
      }
    ],
    "explanation": "The source's correct answer is E, \"B and C, only.\" For app use, that combination answer has been rewritten into a single semantic correct choice. An NFA member or associate may state the fact of NFA membership and may discuss or explain the functions and purposes of the NFA, provided it does not misrepresent the effect of NFA membership. The member may not claim that its activities are approved or sponsored by the NFA.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-130; sequence 130; source code 10_IM_47.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source uses a combination choice, 'B and C, only.' It was safely rewritten semantically into a standalone correct answer to comply with app-ready choice rules. The source answer and explanation are clear and consistent with NFA membership-use principles.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "130",
    "sourceQuestionNumber": 129,
    "sourceCode": "10_IM_47",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-130",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CTA, in its Disclosure Document, must disclose which performance information?",
    "choices": [
      {
        "id": "a",
        "text": "The performance of the offered trading program.",
        "isCorrect": false,
        "rationale": "This must be disclosed, but it is not the only required performance information."
      },
      {
        "id": "b",
        "text": "The performance information for all other accounts directed by the CTA.",
        "isCorrect": false,
        "rationale": "This must be disclosed, but it is not the only required performance information."
      },
      {
        "id": "c",
        "text": "The performance information for all other accounts directed by each of its trading principals.",
        "isCorrect": false,
        "rationale": "This must be disclosed, but it is not the only required performance information."
      },
      {
        "id": "d",
        "text": "The performance of the offered trading program; performance information for all other accounts directed by the CTA; and performance information for all other accounts directed by each of its trading principals.",
        "isCorrect": true,
        "rationale": "CTA disclosure documents generally require performance information for the offered trading program, other accounts directed by the CTA, and other accounts directed by the CTA's trading principals."
      }
    ],
    "explanation": "A CTA, in its Disclosure Document, must disclose the performance of the offered trading program, performance information for all other accounts directed by the CTA, and performance information for all other accounts directed by each of its trading principals.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-129; sequence 129; source code 10_IM_115.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses 'All of the above' and 'A and B only.' The app-ready version rewrites the correct choice semantically to avoid answer-choice references while preserving the tested concept and exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "129",
    "sourceQuestionNumber": 130,
    "sourceCode": "10_IM_115",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-130-2",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CTA, in its Disclosure Document, must disclose which performance information?",
    "choices": [
      {
        "id": "a",
        "text": "The performance of the offered trading program.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the only required performance information."
      },
      {
        "id": "b",
        "text": "The performance information for all other accounts directed by the CTA.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the only required performance information."
      },
      {
        "id": "c",
        "text": "The performance information for all other accounts directed by each of its trading principals.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the only required performance information."
      },
      {
        "id": "d",
        "text": "The performance of the offered trading program, performance information for all other accounts directed by the CTA, and performance information for all other accounts directed by each of its trading principals.",
        "isCorrect": true,
        "rationale": "A CTA Disclosure Document must disclose the performance of the offered trading program, performance information for all other accounts directed by the CTA, and performance information for all other accounts directed by each of its trading principals."
      }
    ],
    "explanation": "A CTA, in its Disclosure Document, must disclose the performance of the offered trading program; performance information for all other accounts directed by the CTA; and performance information for all other accounts directed by each of its trading principals.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-131; sequence 131; source code 10_IM_115.",
    "reviewStatus": "reviewed",
    "qualityStatus": "rejected",
    "qualityNotes": "The source uses \"All of the above\" and \"A and B only\" answer choices. The app-ready version rewrites the correct option semantically to avoid referential choices while preserving the tested concept and exactly one correct answer. Duplicate review: Exact duplicate of s3-regulatory-pdf-130. Repair pass: duplicate retained as rejected unless manually selected as the keeper",
    "issueTypes": [
      "duplicate"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "131",
    "sourceQuestionNumber": 130,
    "sourceCode": "10_IM_115",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-131",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cta-regulations",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "A CTA may receive income based on which of the following compensation arrangements, if properly disclosed?",
    "choices": [
      {
        "id": "a",
        "text": "Incentive fees",
        "isCorrect": false,
        "rationale": "Incentive fees are one permitted form of CTA compensation if properly disclosed, but they are not the only listed form."
      },
      {
        "id": "b",
        "text": "Management fees",
        "isCorrect": false,
        "rationale": "Management fees are one permitted form of CTA compensation if properly disclosed, but they are not the only listed form."
      },
      {
        "id": "c",
        "text": "Commissions or commission sharing",
        "isCorrect": false,
        "rationale": "Commissions or commission sharing may be a permitted form of CTA compensation if properly disclosed, but they are not the only listed form."
      },
      {
        "id": "d",
        "text": "Incentive fees, management fees, and commissions or commission sharing",
        "isCorrect": true,
        "rationale": "A CTA may receive compensation based on incentive fees, management fees, and commissions or commission sharing, provided the compensation arrangement is properly disclosed."
      }
    ],
    "explanation": "If properly disclosed, a CTA may receive compensation based on incentive fees, management fees, and commission sharing.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-132; sequence 132; source code 10_IM_87.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source used an 'All of the above' option; the app-ready version rewrites that option semantically while preserving the tested concept and single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "132",
    "sourceQuestionNumber": 131,
    "sourceCode": "10_IM_87",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-132",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Under NFA Rule 2-30 (Customer Information and Risk Disclosure), which customer information must members and associates obtain at least from individual customers?",
    "choices": [
      {
        "id": "a",
        "text": "Only the customer's true name, address, and principal occupation",
        "isCorrect": false,
        "rationale": "Those items are required, but they are not the only required customer information listed by NFA Rule 2-30."
      },
      {
        "id": "b",
        "text": "Only the customer's current estimated annual income and net worth",
        "isCorrect": false,
        "rationale": "Estimated annual income and net worth are required, but additional information must also be obtained."
      },
      {
        "id": "c",
        "text": "Only the customer's approximate age and previous futures trading experience",
        "isCorrect": false,
        "rationale": "Approximate age and previous investment and futures-trading experience are required, but they are not the only items required."
      },
      {
        "id": "d",
        "text": "The customer's true name, address, principal occupation or business, estimated annual income and net worth, approximate age, and previous investment and futures-trading experience",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 requires members to obtain these items from individual customers."
      }
    ],
    "explanation": "NFA Rule 2-30 requires members and associates to obtain specified information from individual customers, including the customer's true name and address, principal occupation or business, current estimated annual income and net worth, approximate age, and an indication of previous investment and futures-trading experience.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-133; sequence 133; source code 10_IM_39.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source item is readable and the correct concept is clear. The source used an 'All of the above' choice, so the app-ready version rewrites the choices semantically to avoid that format while preserving the tested concept.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "133",
    "sourceQuestionNumber": 132,
    "sourceCode": "10_IM_39",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-133",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "position-reporting",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "CFTC and exchange position-reporting requirements apply to which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "Speculative, hedge, and proprietary accounts",
        "isCorrect": true,
        "rationale": "CFTC and exchange position-reporting requirements apply to all accounts holding reportable positions, regardless of whether the account is speculative, hedge, or proprietary."
      },
      {
        "id": "b",
        "text": "Speculative accounts only",
        "isCorrect": false,
        "rationale": "Reporting requirements are not limited to speculative accounts."
      },
      {
        "id": "c",
        "text": "Hedge accounts only",
        "isCorrect": false,
        "rationale": "Reporting requirements are not limited to hedge accounts."
      },
      {
        "id": "d",
        "text": "Proprietary accounts only",
        "isCorrect": false,
        "rationale": "Reporting requirements are not limited to proprietary accounts."
      }
    ],
    "explanation": "CFTC and exchange reporting requirements apply to all accounts holding reportable positions and do not distinguish, for purposes of filing the reports, between speculative, hedge, and proprietary accounts.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-134; sequence 134; source code 10_IM_24.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source answer D is a combination choice, but it can be safely rewritten semantically as a single app-ready choice: speculative, hedge, and proprietary accounts.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "134",
    "sourceQuestionNumber": 133,
    "sourceCode": "10_IM_24",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-134",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "commodity-trading-advisor",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Under CFTC/NFA terminology, which registration category describes a person or firm that, for compensation or profit, advises others-directly or through publications or electronic media-about the value of, or advisability of trading in, futures contracts?",
    "choices": [
      {
        "id": "a",
        "text": "Commodity Trading Advisor",
        "isCorrect": true,
        "rationale": "A Commodity Trading Advisor is the regulatory category for a person or firm that, for compensation or profit, advises others about the value of, or advisability of trading in, futures and other commodity interests."
      },
      {
        "id": "b",
        "text": "Introducing Broker",
        "isCorrect": false,
        "rationale": "An Introducing Broker solicits or accepts customer orders but does not accept customer funds; the definition in the question focuses on providing trading advice."
      },
      {
        "id": "c",
        "text": "Futures Commission Merchant",
        "isCorrect": false,
        "rationale": "A Futures Commission Merchant solicits or accepts orders and accepts customer funds, margin, or other assets; it is not defined primarily by compensated advisory activity."
      },
      {
        "id": "d",
        "text": "Floor Broker",
        "isCorrect": false,
        "rationale": "A Floor Broker executes orders on or subject to the rules of an exchange; the question describes compensated advisory services."
      }
    ],
    "explanation": "The described person or firm is a Commodity Trading Advisor (CTA). The source text visibly used \"compensation of profit,\" but the standard regulatory phrase is \"compensation or profit,\" so the wording has been corrected while preserving the tested concept.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-135; sequence 135; source code 10_IM_111.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "App-ready after correcting the apparent transcription/source typo from \"of profit\" to the standard phrase \"or profit.\" The concept and correct answer are clear from the source and are a stable general regulatory definition. Repair: Corrected the typo in the stem, modernized the wording, replaced weaker distractors with regulatory categories, and verified exactly one correct answer. Second-pass review: The repaired item is clear, tests the standard CFTC/NFA definition of a Commodity Trading Advisor, and has exactly one unambiguous correct answer. Distractors are plausible registration categories and the rationales/explanation support the answer. The correction from \"compensation of profit\" to \"compensation or profit\" is appropriate, with no calculation issues or apparent regulatory/taxonomy problems.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "135",
    "sourceQuestionNumber": 134,
    "sourceCode": "10_IM_111",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-135",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "anti-money-laundering",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which customer behavior is a red flag for possible money laundering that should prompt further review?",
    "choices": [
      {
        "id": "a",
        "text": "A customer shows an unusual level of concern about secrecy when opening or using an account.",
        "isCorrect": true,
        "rationale": "An unusual concern for secrecy is a recognized suspicious activity indicator and should prompt further AML review."
      },
      {
        "id": "b",
        "text": "A customer provides routine identification information when requested during account opening.",
        "isCorrect": false,
        "rationale": "Providing requested identification information is expected customer behavior, not a suspicious activity red flag by itself."
      },
      {
        "id": "c",
        "text": "A corporate customer accurately describes its business, industry, and expected account activity.",
        "isCorrect": false,
        "rationale": "A customer that can explain its business and expected account activity is not displaying the red flag tested here."
      },
      {
        "id": "d",
        "text": "A customer makes deposits and withdrawals that are consistent with the stated business purpose of the account.",
        "isCorrect": false,
        "rationale": "Activity consistent with the customer's stated business purpose generally is not suspicious by itself."
      }
    ],
    "explanation": "AML programs require firms to identify and review activity that may indicate money laundering or other suspicious conduct. Red flags include unusual concern for secrecy, a corporate customer's lack of knowledge about its own industry, extensive or unexplained wire activity, and deposits followed by requests to wire funds to a third party without an apparent business purpose. Of the choices given, the unusual concern for secrecy is the suspicious activity indicator.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-136; sequence 136; source code 10_IM_100.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the banned 'All of the above' format and to provide exactly one clearly correct answer while preserving the AML suspicious-activity-red-flag concept. The source explanation's incorrect reference to question 201 was not retained. Repair: Converted the original omnibus-answer item into a single-best-answer AML red-flag question. Removed 'All of the above' and replaced the other true source statements with clearly nonsuspicious distractors. Second-pass review: The repaired item is readable, has exactly one unambiguous correct answer, avoids all/none-style formats, and uses plausible standalone distractors. The explanation and rationales correctly support unusual concern for secrecy as an AML suspicious-activity red flag. No calculations are involved, the regulatory concept is broad and not obviously outdated, and the taxonomy is appropriate for FCM/IB anti-money-laundering content.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "136",
    "sourceQuestionNumber": 135,
    "sourceCode": "10_IM_100",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-136",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "If your promotional material or disclosure documents are written in a non-English language, and it is intended for viewing by U.S. customers, you must:",
    "choices": [
      {
        "id": "a",
        "text": "Be prepared to translate the material on request by the NFA",
        "isCorrect": false,
        "rationale": "The rule requires maintaining English translations; merely being prepared to translate on request is not sufficient."
      },
      {
        "id": "b",
        "text": "Maintain English translations of all foreign language promotional material",
        "isCorrect": true,
        "rationale": "CFTC Rule 1.31 requires English translations to be maintained for foreign-language promotional material, including disclosure documents and websites, distributed to or intended for viewing by customers in the United States, its territories, or possessions."
      },
      {
        "id": "c",
        "text": "NFA is not concerned about foreign language translations of documents as translations can be subjective",
        "isCorrect": false,
        "rationale": "The rule does address foreign-language materials and requires English translations to be maintained."
      },
      {
        "id": "d",
        "text": "A and B",
        "isCorrect": false,
        "rationale": "Only maintaining English translations is required; merely being prepared to translate on request is not enough."
      }
    ],
    "explanation": "CFTC Rule 1.31 requires firms to maintain English translations of foreign-language promotional material, including disclosure documents and websites, that are distributed to or intended for viewing by U.S. customers.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-137; sequence 137; source code 10_IM_93.",
    "reviewStatus": "reviewed",
    "qualityStatus": "rejected",
    "qualityNotes": "The source question is readable and the stated answer is clear. However, choice D is an 'A and B' combination choice, which the instructions flag as undesirable unless safely rewritten. Because A is not a correct standalone requirement, the item can still function, but it is marked needs_review rather than verified. Duplicate review: Exact duplicate of s3-regulatory-pdf-120. Repair pass: duplicate retained as rejected unless manually selected as the keeper",
    "issueTypes": [
      "bad_distractors",
      "duplicate"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "137",
    "sourceQuestionNumber": 136,
    "sourceCode": "10_IM_93",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-137",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Under NFA Rule 2-29 (Communications with the Public and Promotional Material):",
    "choices": [
      {
        "id": "a",
        "text": "Past trading results may not be presented.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-29 does not prohibit presenting past trading results outright; it imposes disclosure and presentation requirements."
      },
      {
        "id": "b",
        "text": "A discussion of past trading results must state that past results are not necessarily indicative of future results.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 requires promotional material using past trading results to include a statement that past results are not necessarily indicative of future results."
      },
      {
        "id": "c",
        "text": "Past trading results must be compared with hypothetical results.",
        "isCorrect": false,
        "rationale": "The rule does not require past trading results to be compared with hypothetical results."
      },
      {
        "id": "d",
        "text": "All promotional material containing past trading results must have prior NFA approval.",
        "isCorrect": false,
        "rationale": "The rule requires specified disclosures and standards for promotional material; it does not generally require prior NFA approval for all promotional material containing past results."
      }
    ],
    "explanation": "NFA Rule 2-29, governing communications with the public and promotional material, requires that promotional material presenting past trading results include a warning that past results are not necessarily indicative of future results.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-138; sequence 138; source code 10_IM_85.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question and answer are readable. The displayed answer and explanation consistently identify choice B. The item tests promotional material disclosure under NFA Rule 2-29.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "138",
    "sourceQuestionNumber": 137,
    "sourceCode": "10_IM_85",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-138",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which statement correctly describes a commodity pool operator's responsibilities when handling pool participant funds?",
    "choices": [
      {
        "id": "a",
        "text": "The CPO must keep each pool's property separate from other persons' property, operate each pool as a separate entity, and receive funds in the name of the pool.",
        "isCorrect": true,
        "rationale": "A CPO must not commingle pool property with the property of any other person, must operate each pool as a separate entity, and must receive funds in the name of the pool."
      },
      {
        "id": "b",
        "text": "The CPO may combine assets of multiple pools in one operating account if separate accounting records are maintained for each pool.",
        "isCorrect": false,
        "rationale": "Maintaining records is not enough; the CPO must operate each pool as a separate entity and may not commingle pool property with other property."
      },
      {
        "id": "c",
        "text": "The CPO may receive participant funds in the CPO's own name if the funds are promptly transferred to a pool account.",
        "isCorrect": false,
        "rationale": "Pool participant funds must be received in the name of the pool, not in the CPO's own name."
      },
      {
        "id": "d",
        "text": "The CPO may commingle pool property with other property if all pool participants have consented in writing.",
        "isCorrect": false,
        "rationale": "The rule prohibits commingling pool property with the property of any other person; written participant consent does not create this general exception."
      }
    ],
    "explanation": "For handling customer or participant funds, a CPO must treat each commodity pool as a distinct entity. The CPO may not commingle the property of a pool with the property of any other person, must operate each pool separately, and must receive funds in the name of the pool.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-139; sequence 139; source code 10_IM_113.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove referential choices such as 'All of the above' and 'A and C only' while preserving the tested CPO fund-handling concept. Exactly one standalone answer choice is correct. Repair: Converted the original combined-answer format into a single-best-answer question with standalone semantic choices and retained the same regulatory concept. Second-pass review: The repaired item is readable, has exactly one clear standalone correct answer, avoids referential all/none/A-and-B formats, and provides plausible distractors with supporting rationales. The regulatory concept is appropriate for CPO fund-handling requirements and the taxonomy is valid. No calculation issues are present.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "139",
    "sourceQuestionNumber": 138,
    "sourceCode": "10_IM_113",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-139",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Unless they are also registered as FCMs, IBs cannot:",
    "choices": [
      {
        "id": "a",
        "text": "Use their own new account forms.",
        "isCorrect": false,
        "rationale": "An introducing broker may use account-opening documentation, subject to applicable FCM and regulatory requirements; this is not the prohibited activity identified here."
      },
      {
        "id": "b",
        "text": "Handle customer funds.",
        "isCorrect": true,
        "rationale": "Introducing brokers may solicit or accept orders, but unless also registered as an FCM, they may not accept or handle customer funds in their own name."
      },
      {
        "id": "c",
        "text": "Give trading advice directly to customers.",
        "isCorrect": false,
        "rationale": "Giving trading advice is not the IB-specific prohibition tested by this question, assuming the advice is otherwise permitted and properly supervised."
      },
      {
        "id": "d",
        "text": "Handle discretionary trading accounts.",
        "isCorrect": false,
        "rationale": "Discretionary account activity may be permitted if properly authorized and supervised; the categorical prohibition for an IB that is not also an FCM is handling customer funds."
      }
    ],
    "explanation": "CFTC regulations prohibit introducing brokers from accepting or handling customer funds in the IB's own name unless the firm is also registered as an FCM.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-140; sequence 140; source code 10_IM_9.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The displayed answer and explanation are consistent with IB restrictions on accepting customer funds.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "140",
    "sourceQuestionNumber": 139,
    "sourceCode": "10_IM_9",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-140",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "guarantor-fcm-responsibilities",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under NFA rules, any FCM guaranteeing an IB shall be:",
    "choices": [
      {
        "id": "a",
        "text": "Liable for 50 percent of all awarded damage claims.",
        "isCorrect": false,
        "rationale": "NFA rules do not limit a guarantor FCM's responsibility to 50 percent of awarded damage claims."
      },
      {
        "id": "b",
        "text": "Liable for only those claims resulting from the FCM's own conduct.",
        "isCorrect": false,
        "rationale": "A guarantor FCM may be jointly and severally subject to discipline for the guaranteed IB's violative acts and omissions during the guarantee period."
      },
      {
        "id": "c",
        "text": "Liable only for monetary damages.",
        "isCorrect": false,
        "rationale": "The rule concerns joint and several disciplinary responsibility under NFA compliance rules, not only monetary damages."
      },
      {
        "id": "d",
        "text": "Jointly and severally subject to discipline under NFA rules for the acts and omissions of the IB that violate NFA rules.",
        "isCorrect": true,
        "rationale": "An FCM that enters into a guarantee agreement with an IB is jointly and severally subject to discipline under NFA compliance rules for the IB's acts and omissions that violate NFA requirements during the term of the guarantee agreement."
      }
    ],
    "explanation": "NFA rules provide that a member FCM that enters into a guarantee agreement with a member IB is jointly and severally subject to discipline under NFA compliance rules for the acts and omissions of the IB that violate NFA requirements occurring during the term of the guarantee agreement.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-141; sequence 141; source code 10_IM_49.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question and choices are readable. The displayed correct answer and explanation are consistent with NFA guarantor FCM responsibility for guaranteed IB conduct.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "141",
    "sourceQuestionNumber": 140,
    "sourceCode": "10_IM_49",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-141",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Under NFA rules, which communication is considered promotional material?",
    "choices": [
      {
        "id": "a",
        "text": "A market letter distributed to customers or prospects.",
        "isCorrect": true,
        "rationale": "Market letters are included in the NFA definition of promotional material."
      },
      {
        "id": "b",
        "text": "A private internal memo sent only to firm compliance staff.",
        "isCorrect": false,
        "rationale": "An internal compliance memo is not the type of customer- or public-facing sales communication covered by the promotional-material definition."
      },
      {
        "id": "c",
        "text": "A completed customer account statement showing actual account activity.",
        "isCorrect": false,
        "rationale": "An account statement is an account record, not promotional material designed to solicit or influence trading interest."
      },
      {
        "id": "d",
        "text": "A margin call notice sent to an existing customer.",
        "isCorrect": false,
        "rationale": "A margin call notice is an operational account communication, not promotional material."
      }
    ],
    "explanation": "NFA promotional material includes customer- or public-facing communications used to solicit or promote business, such as market letters, seminars, and broadcasts. Therefore, a market letter distributed to customers or prospects is promotional material.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-142; sequence 142; source code 10_IM_63.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the banned 'None of the above' format while preserving the tested concept that market letters, seminars, and broadcasts are included as NFA promotional material. Repair: Converted the exclusion/none-of-the-above question into a positive identification question with one standalone correct answer and plausible non-promotional distractors. Second-pass review: The repaired item is readable and meaningful, has exactly one unambiguous correct answer, avoids all/none/both formats, and uses plausible standalone distractors. The rationales and explanation support the answer and accurately preserve the tested concept that market letters are included in NFA promotional material. No calculations are present, no obvious regulatory issue is identified, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "142",
    "sourceQuestionNumber": 141,
    "sourceCode": "10_IM_63",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-142",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "commodity-exchange-act-enforcement",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "The CFTC can subpoena documents without need of federal court approval.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Among the CFTC's statutory authorities is the power to subpoena documents without need of approval from a federal court."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The CFTC has statutory subpoena authority and does not need federal court approval to subpoena documents."
      }
    ],
    "explanation": "Among the CFTC's statutory authorities is the power to subpoena documents without need of approval from a federal court.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-143; sequence 143; source code 10_IM_2.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is readable, has exactly one correct answer, and the explanation supports the answer. It tests CFTC statutory enforcement authority.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "143",
    "sourceQuestionNumber": 142,
    "sourceCode": "10_IM_2",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-143",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "All trades on an exchange (contract market) must be competitively executed or otherwise executed in accordance with written rules of the exchange that have been approved by the CFTC.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "The Commodity Exchange Act and CFTC regulations generally require competitive execution on a contract market. Noncompetitive exceptions, such as EFPs and transfer trades, must follow written exchange rules approved by the CFTC."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because exchange trades generally must be competitively executed unless an approved exchange rule permits another method."
      }
    ],
    "explanation": "The statement is true. Under the Commodity Exchange Act and related regulations, trades on a contract market generally must be competitively executed. Permitted exceptions, such as exchanges of futures for physicals/products and transfer trades, must be conducted under written exchange rules approved by the CFTC.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-144; sequence 144; source code 10_IM_53.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear stated answer and explanation. Terminology and regulatory concept are consistent with competitive execution requirements and approved exchange-rule exceptions.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "144",
    "sourceQuestionNumber": 143,
    "sourceCode": "10_IM_53",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-144",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "financial-reports",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Futures and options trades must be confirmed to the customer by the FCM in writing:",
    "choices": [
      {
        "id": "a",
        "text": "Not later than the following business day.",
        "isCorrect": true,
        "rationale": "CFTC regulations require an FCM to furnish a written confirmation of each futures and options transaction to the customer no later than the next business day."
      },
      {
        "id": "b",
        "text": "Within five business days.",
        "isCorrect": false,
        "rationale": "Confirmations are due no later than the next business day, not within five business days."
      },
      {
        "id": "c",
        "text": "Once a month.",
        "isCorrect": false,
        "rationale": "Monthly statements are required, but individual trade confirmations must be provided no later than the next business day."
      },
      {
        "id": "d",
        "text": "Within 48 hours.",
        "isCorrect": false,
        "rationale": "The required timing is no later than the next business day, not a general 48-hour period."
      }
    ],
    "explanation": "CFTC regulations provide that an FCM must, not later than the next business day, furnish to each customer a written confirmation of each futures and options transaction. FCMs also are required to provide monthly summary statements to customers.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-145; sequence 145; source code 10_IM_21.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question text, choices, answer, and explanation are clearly visible. The rule concept is consistent with FCM customer confirmation and statement requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "145",
    "sourceQuestionNumber": 144,
    "sourceCode": "10_IM_21",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-145",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "In regard to the CFTC-required risk-disclosure statement, an FCM or IB must:",
    "choices": [
      {
        "id": "a",
        "text": "Simply ensure that the statement is mailed to the customer.",
        "isCorrect": false,
        "rationale": "Merely mailing the statement is insufficient; the firm must obtain the customer's signed and dated acknowledgment."
      },
      {
        "id": "b",
        "text": "Obtain a signed and dated acknowledgment that the customer has received and understood the disclosure statement.",
        "isCorrect": true,
        "rationale": "An FCM or IB must receive a signed and dated acknowledgment from the customer indicating that the customer received and understood the risk-disclosure statement."
      },
      {
        "id": "c",
        "text": "At a minimum, receive a telephone acknowledgment of receipt by the customer.",
        "isCorrect": false,
        "rationale": "A telephone acknowledgment does not satisfy the requirement for a signed and dated acknowledgment."
      },
      {
        "id": "d",
        "text": "Be able to demonstrate that the risk-disclosure statement was among the general customer agreement documents provided to the customer.",
        "isCorrect": false,
        "rationale": "Providing the risk disclosure as part of account documents is not enough without the customer's signed and dated acknowledgment."
      }
    ],
    "explanation": "An FCM or IB must receive from the customer an acknowledgment, signed and dated by the customer, noting that the customer has received and understood the risk-disclosure statement provided to the customer.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-146; sequence 146; source code 10_IM_37.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer choices, indicated answer, and explanation are clearly readable. The concept is consistent with the risk-disclosure acknowledgment requirement for FCMs and IBs.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "146",
    "sourceQuestionNumber": 145,
    "sourceCode": "10_IM_37",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-146",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An NFA Member's promotional material includes specific numerical past-performance information for actual accounts, including a rate-of-return figure. What must the Member be able to show or do?",
    "choices": [
      {
        "id": "a",
        "text": "Show that the information is representative of all reasonably comparable actual accounts and calculate any rate-of-return figures consistently with CFTC Regulations.",
        "isCorrect": true,
        "rationale": "NFA promotional material standards require both representativeness for reasonably comparable actual accounts and CFTC-consistent calculation of rate-of-return figures when specific actual-account performance numbers are used."
      },
      {
        "id": "b",
        "text": "Use the figures as long as the material also includes the required cautionary statement about futures trading risk.",
        "isCorrect": false,
        "rationale": "A cautionary statement alone does not satisfy this requirement when specific actual-account past-performance numbers or rates of return are presented."
      },
      {
        "id": "c",
        "text": "Obtain written CFTC approval before publishing the actual-account performance figures.",
        "isCorrect": false,
        "rationale": "The rule tested does not require prior CFTC approval; it requires the Member to be able to substantiate representativeness and calculate rates of return properly."
      },
      {
        "id": "d",
        "text": "Limit the performance information to the single best-performing account if the account was actually traded by a customer.",
        "isCorrect": false,
        "rationale": "Selecting only a best-performing account would raise representativeness concerns; the Member must be able to show the information represents all reasonably comparable actual accounts."
      }
    ],
    "explanation": "When NFA promotional material includes specific numerical or statistical information about actual-account past performance, including rate-of-return figures, the Member must be able to demonstrate to NFA that the information is representative of the actual performance of all reasonably comparable accounts. Any rate-of-return figures must also be calculated in a manner consistent with CFTC Regulations.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-147; sequence 147; source code 10_IM_104.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The original banned 'A and B only' format has been rewritten as a single standalone correct answer. Distractors are standalone and test nearby misconceptions without changing the source concept. Repair: Rewrote the source combination answer into one standalone correct choice and replaced answer-letter-dependent formatting with app-ready semantic choices. Second-pass review: The repaired item is clear and faithful to the tested NFA promotional-material requirement. It has exactly one unambiguous correct answer, no prohibited all/none/both/A-and-B format, and the distractors are standalone and plausible. The explanation and rationales support the answer, no calculations are involved, the regulatory statement is not obviously outdated or over-specific, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "147",
    "sourceQuestionNumber": 146,
    "sourceCode": "10_IM_104",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-147",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following activities would require registration as an Associated Person?",
    "choices": [
      {
        "id": "a",
        "text": "Solicitation of a customer order.",
        "isCorrect": false,
        "rationale": "Soliciting customer orders is an activity that requires AP registration, but this choice is not the best answer because other listed activities also require registration."
      },
      {
        "id": "b",
        "text": "Acceptance of a customer order other than in a clerical capacity.",
        "isCorrect": false,
        "rationale": "Accepting customer orders in a non-clerical capacity requires AP registration, but this choice is not the best answer because other listed activities also require registration."
      },
      {
        "id": "c",
        "text": "Supervision of any Associated Person.",
        "isCorrect": false,
        "rationale": "Supervising an Associated Person requires AP registration, but this choice is not the best answer because the solicitation and order-acceptance activities also require registration."
      },
      {
        "id": "d",
        "text": "Solicitation of a customer order; acceptance of a customer order other than in a clerical capacity; and supervision of any Associated Person.",
        "isCorrect": true,
        "rationale": "Each of these activities requires registration as an Associated Person."
      }
    ],
    "explanation": "Registration as an Associated Person is required for individuals who solicit customer orders, accept customer orders other than in a clerical capacity, or supervise Associated Persons engaged in those activities.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-148; sequence 148; source code 10_IM_97.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses an 'All of the above' choice and an 'A and B only' choice. For app readiness, the correct choice was rewritten semantically to avoid referential/all-of-the-above wording while preserving the tested concept and exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "148",
    "sourceQuestionNumber": 147,
    "sourceCode": "10_IM_97",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-148",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Before a registered CTA enters into an advisory agreement for a trading program with a prospective client, what must generally happen?",
    "choices": [
      {
        "id": "a",
        "text": "The CTA must deliver the required Disclosure Document and obtain the client's acknowledgment of receipt.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.31 requires delivery before the advisory agreement is accepted and requires an acknowledgment."
      },
      {
        "id": "b",
        "text": "The CTA can wait until after the first month of trading to deliver the Disclosure Document.",
        "isCorrect": false,
        "rationale": "Disclosure must come before the advisory relationship is accepted."
      },
      {
        "id": "c",
        "text": "The CTA needs only oral disclosure if the client is experienced.",
        "isCorrect": false,
        "rationale": "The rule requires a Disclosure Document and acknowledgment unless an exemption applies."
      },
      {
        "id": "d",
        "text": "The exchange clearing the trades prepares and delivers the CTA Disclosure Document.",
        "isCorrect": false,
        "rationale": "The CTA, not the exchange, is responsible for CTA disclosure obligations."
      }
    ],
    "explanation": "The source's filing-timing formulation was dated. The current app-ready point is the core requirement in CFTC Regulation 4.31: a registered CTA must deliver a Disclosure Document for the trading program before entering into the advisory agreement and must obtain an acknowledgment of receipt.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-149; sequence 149; source code 10_IM_58. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "149",
    "sourceQuestionNumber": 148,
    "sourceCode": "10_IM_58",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-149",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "account-supervision-review",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "In regard to supervision of its employees and agents in the conduct of futures and options business, each NFA member and supervisory associate must:",
    "choices": [
      {
        "id": "a",
        "text": "Make a reasonable effort to supervise employees and their activities.",
        "isCorrect": false,
        "rationale": "The governing standard is diligent supervision, not merely making a reasonable effort."
      },
      {
        "id": "b",
        "text": "Diligently supervise employees and agents.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-9 requires NFA Members to diligently supervise employees and agents in the conduct of commodity interest activities for or on behalf of the Member; CFTC Regulation 166.3 similarly requires registrants with supervisory duties to diligently supervise handling of commodity interest accounts."
      },
      {
        "id": "c",
        "text": "Ensure only that supervisory procedures are in place.",
        "isCorrect": false,
        "rationale": "Having procedures in place alone is not sufficient; the requirement is diligent supervision."
      },
      {
        "id": "d",
        "text": "Follow the specific supervisory checklists contained in CFTC Rule 166.",
        "isCorrect": false,
        "rationale": "The rule imposes a diligent supervision obligation rather than mandating specific checklists in CFTC Rule 166."
      }
    ],
    "explanation": "NFA Rule 2-9 requires each NFA Member to diligently supervise its employees and agents in commodity futures and options activities conducted for or on behalf of the Member. CFTC Regulation 166.3 also requires registrants with supervisory duties to diligently supervise the handling of commodity interest accounts.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-150; sequence 150; source code 10_IM_38.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, answer, and explanation are readable and consistent with NFA Rule 2-9 and CFTC Regulation 166.3 regarding diligent supervision.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "150",
    "sourceQuestionNumber": 149,
    "sourceCode": "10_IM_38",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-150",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "upfront-fees",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Any up-front fees or expenses charged by a CPO must be reflected as a reduction of net performance in the period the contributions to the pool were made, unless such fees and expenses can be amortized pursuant to generally accepted accounting principles.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Contributions to a commodity pool must be stated before such fees are deducted. Up-front fees and organizational expenses reduce net performance in the period contributions were made unless they may be amortized under generally accepted accounting principles."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This contradicts the displayed rule regarding CPO up-front fees and organizational expenses."
      }
    ],
    "explanation": "Contributions to a commodity pool must be stated before up-front fees are deducted. Therefore, up-front fees and organizational expenses are reflected as a reduction of net performance in the period the contributions were made, unless those fees and expenses may be amortized pursuant to generally accepted accounting principles.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-151; sequence 151; source code 10_IM_73.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single displayed correct answer and supporting explanation. Terminology is consistent with CPO disclosure/performance presentation concepts for up-front fees and organizational expenses.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "151",
    "sourceQuestionNumber": 150,
    "sourceCode": "10_IM_73",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-151",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "If an NFA Member's promotional material mentions the possibility of profit, then the material must be accompanied by:",
    "choices": [
      {
        "id": "a",
        "text": "A calculation showing how the profit could be obtained.",
        "isCorrect": false,
        "rationale": "NFA promotional material rules do not require a profit calculation merely because profit potential is mentioned."
      },
      {
        "id": "b",
        "text": "An equally prominent statement of the risk of loss.",
        "isCorrect": true,
        "rationale": "Under NFA promotional material standards, a reference to the possibility of profit must be balanced by an equally prominent statement of the risk of loss."
      },
      {
        "id": "c",
        "text": "The CFTC required Cautionary Statement.",
        "isCorrect": false,
        "rationale": "The requirement shown in the source is not the CFTC required Cautionary Statement, but an equally prominent risk-of-loss statement."
      },
      {
        "id": "d",
        "text": "An explanation of why the Member thinks a profit potential exists.",
        "isCorrect": false,
        "rationale": "The rule requires balanced risk disclosure, not an explanation of the basis for the profit potential."
      }
    ],
    "explanation": "If an NFA Member's promotional material mentions the possibility of profit, NFA promotional material rules require the material to be accompanied by an equally prominent statement of the risk of loss.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-152; sequence 152; source code 10_IM_102.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The displayed answer and explanation support choice B. Source code 10_IM_102 is visible.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "152",
    "sourceQuestionNumber": 151,
    "sourceCode": "10_IM_102",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-152",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under the Commodity Exchange Act's regulatory structure, what is the relationship between the CFTC and futures exchanges?",
    "choices": [
      {
        "id": "a",
        "text": "The CFTC has exclusive jurisdiction over exchange-traded futures and options on futures, while exchanges retain self-regulatory responsibilities subject to CFTC oversight.",
        "isCorrect": true,
        "rationale": "The Commodity Exchange Act gives the CFTC exclusive jurisdiction over exchange-traded futures and options on futures, requires exchanges to perform self-regulatory functions, and gives the CFTC oversight authority over exchanges and other SROs."
      },
      {
        "id": "b",
        "text": "Futures exchanges have exclusive regulatory authority over their markets, and the CFTC may act only after an exchange requests assistance.",
        "isCorrect": false,
        "rationale": "The CFTC has statutory jurisdiction and oversight authority; its authority is not dependent on an exchange request."
      },
      {
        "id": "c",
        "text": "The CFTC directly regulates customers and futures commission merchants, but exchanges are not treated as self-regulatory organizations.",
        "isCorrect": false,
        "rationale": "Exchanges have self-regulatory obligations and are subject to CFTC oversight."
      },
      {
        "id": "d",
        "text": "Exchange self-regulation replaces CFTC oversight for futures and options on futures traded on designated exchanges.",
        "isCorrect": false,
        "rationale": "Exchange self-regulation does not replace CFTC oversight; it operates within the CFTC-supervised regulatory framework."
      }
    ],
    "explanation": "The Commodity Exchange Act establishes a dual regulatory structure. The CFTC has exclusive jurisdiction over exchange-traded futures and options on futures, while futures exchanges and other self-regulatory organizations have self-regulatory duties. The CFTC retains oversight jurisdiction over those exchanges and SROs.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-153; sequence 153; source code 10_IM_15.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to eliminate the banned 'All of the above' format while preserving the tested concept. The correct answer is now a single standalone statement, and distractors are plausible but clearly incorrect. Repair: Converted the original all-of-the-above item into a single-best-answer question about the CFTC's exclusive jurisdiction, exchange self-regulation, and CFTC oversight of exchanges/SROs. Second-pass review: The repaired item is readable and meaningful, has exactly one clearly correct answer, and eliminates the original all-of-the-above structure. The correct choice accurately captures the CEA/CFTC framework: CFTC jurisdiction and oversight alongside exchange self-regulatory responsibilities. Distractors are plausible but clearly incorrect, and the explanation/rationales support the keyed answer. No calculation issue is present, the regulatory statement is foundational and not obviously outdated, and the taxonomy is acceptable for the available categories.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "153",
    "sourceQuestionNumber": 152,
    "sourceCode": "10_IM_15",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-153",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "conflicts-of-interest",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A CPO or CTA must disclose, as a conflict of interest, if the pool shares in commission revenues.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Sharing in commissions charged by an FCM or IB is an item that must be disclosed in the conflict-of-interest section of a CPO or CTA disclosure document."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is false because such commission-sharing arrangements must be disclosed as conflicts of interest."
      }
    ],
    "explanation": "Sharing in the commissions charged by an FCM or IB is an item that must be disclosed in the conflict of interest section of a CTA or CPO disclosure document.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-154; sequence 154; source code 10_IM_50.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with clear source answer and explanation. Regulatory concept is consistent with CPO/CTA disclosure document conflict-of-interest requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "154",
    "sourceQuestionNumber": 153,
    "sourceCode": "10_IM_50",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-154",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "NFA rules require a broker opening a futures account to go beyond the prospective customer and seek independent verification of the applicant's information.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA Rule 2-30 does not require independent verification of the prospective customer's account-opening information."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 permits the member or associate to rely on the customer as the source of the required information and does not require verification."
      }
    ],
    "explanation": "False. NFA Rule 2-30, Customer Information and Risk Disclosure, provides that a member or associate is entitled to rely on the customer as the source for information obtained under the rule and is not required to verify that information.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-155; sequence 155; source code 10_IM_44.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear displayed answer and explanation. The terminology and concept are consistent with NFA Rule 2-30 customer information requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "155",
    "sourceQuestionNumber": 154,
    "sourceCode": "10_IM_44",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-155",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "CPOs and CTAs are required to disclose past performance information for the shorter of the life of the subject pool or trading program, or which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "Two years",
        "isCorrect": false,
        "rationale": "CPO and CTA disclosure documents require past performance for a longer period than two years unless the pool or trading program has a shorter life."
      },
      {
        "id": "b",
        "text": "Three years",
        "isCorrect": false,
        "rationale": "The required period is not three years."
      },
      {
        "id": "c",
        "text": "Five years",
        "isCorrect": false,
        "rationale": "Five years alone is incomplete because year-to-date performance is also required."
      },
      {
        "id": "d",
        "text": "Five years plus the year-to-date",
        "isCorrect": true,
        "rationale": "CFTC regulations require CTAs and CPOs to disclose past performance for the most recent five years and year-to-date, or for the life of the pool or trading program if shorter."
      }
    ],
    "explanation": "CPOs and CTAs must disclose past performance information for the most recent five years plus year-to-date, or for the life of the subject pool or trading program if it is shorter than five years. If additional performance history beyond the required period is shown but does not cover the entire history, it must be representative of the entire history of the pool or program.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-156; sequence 156; source code 10_IM_54.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable item with a single correct answer shown on the source screen. The explanation supports the answer and the terminology is consistent with CPO/CTA disclosure-document performance requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "156",
    "sourceQuestionNumber": 155,
    "sourceCode": "10_IM_54",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-156",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An IB may not accept customer checks:",
    "choices": [
      {
        "id": "a",
        "text": "Unless the checks are promptly deposited in the IB's customer segregated-funds account.",
        "isCorrect": false,
        "rationale": "An IB may not deposit customer checks into an IB customer segregated-funds account; customer checks accepted by an IB must be handled through the carrying FCM as required."
      },
      {
        "id": "b",
        "text": "Unless the checks are made payable to the IB's carrying FCM and are promptly deposited in the FCM's qualifying segregated-funds bank account or otherwise transmitted to the FCM.",
        "isCorrect": true,
        "rationale": "Customer checks received by an IB must be payable to the carrying FCM and promptly deposited in the FCM's customer segregated-funds account or otherwise promptly transmitted to the FCM, consistent with the IB's written agreement with the FCM."
      },
      {
        "id": "c",
        "text": "Unless the IB has a signed authorization from the customer.",
        "isCorrect": false,
        "rationale": "Customer authorization does not permit the IB to accept checks outside the required FCM-payable/transmission framework."
      },
      {
        "id": "d",
        "text": "Under any conditions.",
        "isCorrect": false,
        "rationale": "An IB may accept customer checks under limited conditions when the checks are payable to the carrying FCM and promptly deposited or transmitted as required."
      }
    ],
    "explanation": "Any customer checks received by an IB must be made payable to the carrying FCM, must be accepted in accordance with a written agreement with the FCM, and must be deposited promptly in the FCM's customer segregated-funds account or otherwise promptly transmitted to the FCM.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-157; sequence 157; source code 10_IM_30.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The source answer and explanation support choice B. Terminology is consistent with IB handling of customer funds/checks through the carrying FCM.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "157",
    "sourceQuestionNumber": 156,
    "sourceCode": "10_IM_30",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-157",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "The APs of FCMs that are notice-registered as broker-dealers must be notice-registered as securities registered representatives (RRs).",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Associated Persons of FCMs are not required to be notice-registered as securities registered representatives merely because the FCM is notice-registered as a broker-dealer."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Unlike FCMs or broker-dealers, APs are not required to be notice-registered. APs must hold the appropriate CFTC registration."
      }
    ],
    "explanation": "Unlike FCMs or broker-dealers, APs are not required to be notice-registered. APs, however, must hold CFTC registration.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-158; sequence 158; source code 10_IM_92.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. Minor grammar in the visible stem appears to say 'noticed registered'; app-ready version normalizes this to 'notice-registered' without changing meaning.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "158",
    "sourceQuestionNumber": 157,
    "sourceCode": "10_IM_92",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-158",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Who prescribes the standard futures risk-disclosure language that must be given to customers before a commodity futures account is opened?",
    "choices": [
      {
        "id": "a",
        "text": "The CFTC.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.55 contains the prescribed futures risk disclosure statement."
      },
      {
        "id": "b",
        "text": "The customer's bank.",
        "isCorrect": false,
        "rationale": "A bank does not prescribe the CFTC futures risk disclosure language."
      },
      {
        "id": "c",
        "text": "The customer's tax adviser.",
        "isCorrect": false,
        "rationale": "Tax advisers do not prescribe futures risk disclosure language."
      },
      {
        "id": "d",
        "text": "The exchange member's marketing department.",
        "isCorrect": false,
        "rationale": "Marketing departments cannot replace the prescribed CFTC disclosure language."
      }
    ],
    "explanation": "CFTC Regulation 1.55 contains the prescribed risk disclosure statement for commodity futures accounts. The key study point is that required futures risk-disclosure language is regulatory, not firm-written marketing language.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-159; sequence 159; source code 10_IM_12. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "159",
    "sourceQuestionNumber": 158,
    "sourceCode": "10_IM_12",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-159",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "For discretionary accounts, all of the following must happen except:",
    "choices": [
      {
        "id": "a",
        "text": "The customer must sign a power of attorney.",
        "isCorrect": false,
        "rationale": "Written authorization/power of attorney is required before an associated person may exercise discretion in a customer account."
      },
      {
        "id": "b",
        "text": "The customer must receive confirmations after trades are executed.",
        "isCorrect": false,
        "rationale": "Customers must receive trade confirmations for executed transactions, including in discretionary accounts."
      },
      {
        "id": "c",
        "text": "The customer must receive a risk disclosure statement.",
        "isCorrect": false,
        "rationale": "A customer must receive required risk disclosure before opening or trading a futures account."
      },
      {
        "id": "d",
        "text": "The customer must be informed of all orders before they are executed.",
        "isCorrect": true,
        "rationale": "This is the exception. In a properly authorized discretionary account, the authorized person may place trades without obtaining the customer's prior approval for each individual order."
      }
    ],
    "explanation": "A discretionary account permits an authorized associated person with power of attorney from the customer to execute trades on behalf of the customer without the customer's prior authorization for each trade. The customer must provide authorization, receive required risk disclosure, and receive confirmations, but need not be informed of every order before execution.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-160; sequence 160; source code 10_IM_3.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. Correct answer is supported by the visible explanation and is consistent with discretionary account concepts.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "160",
    "sourceQuestionNumber": 159,
    "sourceCode": "10_IM_3",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-160",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "NFA Rule 2-30 (Customer Information and Risk Disclosure) requires that new customer account information must be obtained, and the risk disclosure provided:",
    "choices": [
      {
        "id": "a",
        "text": "Within ten days of opening the account.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-30 requires obtaining required customer information and providing risk disclosure at or before account opening, not within ten days afterward."
      },
      {
        "id": "b",
        "text": "At least two days before an account is opened.",
        "isCorrect": false,
        "rationale": "The rule does not require the information and disclosure to be completed two days before the account is opened."
      },
      {
        "id": "c",
        "text": "At least 48 hours before the first trade is made.",
        "isCorrect": false,
        "rationale": "The timing standard is tied to account opening, not 48 hours before the first trade."
      },
      {
        "id": "d",
        "text": "At or before the time a customer opens an account.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 requires customer account information to be obtained and risk disclosure to be provided at or before the time a customer opens an account."
      }
    ],
    "explanation": "NFA Rule 2-30 requires that new customer account information be obtained and that the required risk disclosure be provided at or before the time the customer opens an account.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-161; sequence 161; source code 10_IM_107.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable, the answer key clearly identifies D, and the explanation is consistent with the stated NFA Rule 2-30 concept.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "161",
    "sourceQuestionNumber": 160,
    "sourceCode": "10_IM_107",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-161",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "position-reporting",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Any trader holding a CFTC-reportable futures position, if required by the Commission, must file with the CFTC a \"Statement of Reporting Trader\" (CFTC Form 40) providing, among other information, the following:",
    "choices": [
      {
        "id": "a",
        "text": "The trader's name, address, and business telephone number.",
        "isCorrect": false,
        "rationale": "This information is required on CFTC Form 40, but it is not the only required item listed."
      },
      {
        "id": "b",
        "text": "The trader's principal business and occupation.",
        "isCorrect": false,
        "rationale": "This information is required on CFTC Form 40, but it is not the only required item listed."
      },
      {
        "id": "c",
        "text": "The FCMs, IBs, and foreign brokers carrying the trader's account.",
        "isCorrect": false,
        "rationale": "This information is required on CFTC Form 40, but it is not the only required item listed."
      },
      {
        "id": "d",
        "text": "All three listed items are required: the trader's name, address, and business telephone number; the trader's principal business and occupation; and the FCMs, IBs, and foreign brokers carrying the trader's futures accounts.",
        "isCorrect": true,
        "rationale": "CFTC Form 40 requires reporting-trader identifying and business information, including the trader's name, address, business telephone number, principal business and occupation, and the intermediaries carrying the trader's futures accounts."
      },
      {
        "id": "e",
        "text": "Only the trader's name, address, business telephone number, principal business, and occupation are required; carrying broker information is not required.",
        "isCorrect": false,
        "rationale": "Carrying broker information, including FCMs, IBs, and foreign brokers carrying the trader's futures accounts, is also required."
      }
    ],
    "explanation": "CFTC Form 40, Statement of Reporting Trader, requires information about a reportable trader, including the trader's name, address, business telephone number, principal business and occupation, and the FCMs, IBs, and foreign brokers carrying the trader's futures accounts.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-162; sequence 162; source code 10_IM_28.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source used a combined answer choice, \"A, B and C.\" For app readiness, that choice was rewritten semantically to avoid cross-reference wording while preserving the tested concept. The item is readable and the displayed explanation supports one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "162",
    "sourceQuestionNumber": 161,
    "sourceCode": "10_IM_28",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-162",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In the case of an account introduced by an FCM or IB or directed by a CTA, who has the responsibility to obtain the NFA Rule 2-30 customer information and provide the risk disclosure?",
    "choices": [
      {
        "id": "a",
        "text": "The NFA member carrying the account.",
        "isCorrect": false,
        "rationale": "For an introduced or CTA-directed account, Rule 2-30 responsibility is not assigned to the carrying member solely because it carries the account."
      },
      {
        "id": "b",
        "text": "The firm whose name appears on the customer agreement.",
        "isCorrect": false,
        "rationale": "The rule assigns responsibility based on soliciting the account, not on whose name appears on the customer agreement."
      },
      {
        "id": "c",
        "text": "The NFA member soliciting the account.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 provides that for an account introduced by an FCM or IB, or for which a CTA directs trading, the Member soliciting the account is responsible for complying with the customer information and risk disclosure requirements."
      },
      {
        "id": "d",
        "text": "The firm required to do so by exchange rules.",
        "isCorrect": false,
        "rationale": "The requirement described is an NFA Rule 2-30 obligation, and the rule identifies the soliciting NFA Member as responsible in this situation."
      }
    ],
    "explanation": "NFA Rule 2-30, Customer Information and Risk Disclosure, provides that when an account is introduced by an FCM or IB, or when a CTA directs trading for the account, the NFA Member soliciting the account is responsible for complying with the rule.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-163; sequence 163; source code 10_IM_43.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are readable and internally consistent. The rule citation and concept are suitable for a U.S. Regulations customer information/risk disclosure item.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "163",
    "sourceQuestionNumber": 162,
    "sourceCode": "10_IM_43",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-163",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "A CPO may limit its presentation of past performance information only to the offered pool, provided the pool has at least a three-year history of trading and, during the minimum three-year period, at least 75 percent of the pool's assets were contributed by persons not affiliated with the CPO, trading manager, CTA, or FCM for the pool.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A CPO may present past performance information only for the offered pool if the pool has at least a three-year trading history and, during that minimum period, at least 75% of its assets were contributed by persons unaffiliated with the CPO, trading manager, CTA, or FCM for the pool."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement accurately describes the stated condition under which the CPO may limit the presentation to the offered pool."
      }
    ],
    "explanation": "A CPO may limit its presentation of past performance information only to the offered pool when the pool has at least a three-year trading history and, during that minimum three-year period, at least 75% of the pool's assets were contributed by persons unaffiliated with the CPO, trading manager, CTA, or FCM for the pool.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-164; sequence 164; source code 10_IM_31.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is readable and the visible answer/explanation clearly identify True as the correct answer. Terminology is consistent with CPO performance presentation requirements as shown in the source.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "164",
    "sourceQuestionNumber": 163,
    "sourceCode": "10_IM_31",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-164",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "futures-commission-merchant",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Generally, an individual or business entity that solicits or accepts orders to buy or sell futures or options on futures and accepts funds to margin, secure, or guarantee such contracts must register as:",
    "choices": [
      {
        "id": "a",
        "text": "An FCM.",
        "isCorrect": true,
        "rationale": "An FCM solicits or accepts futures/options-on-futures orders and, in connection with those orders, accepts money, securities, or property to margin, guarantee, or secure the resulting trades or contracts."
      },
      {
        "id": "b",
        "text": "An FCM or IB.",
        "isCorrect": false,
        "rationale": "An IB may solicit or accept orders, but cannot accept customer funds to margin, guarantee, or secure the contracts; accepting such funds points to FCM registration."
      },
      {
        "id": "c",
        "text": "An FCM, IB or CTA.",
        "isCorrect": false,
        "rationale": "A CTA is an adviser, and an IB cannot accept margin funds; the full activity described is that of an FCM."
      },
      {
        "id": "d",
        "text": "An exchange.",
        "isCorrect": false,
        "rationale": "An exchange is not the intermediary registration category described by soliciting/accepting orders and accepting customer margin funds."
      }
    ],
    "explanation": "CFTC regulations define a futures commission merchant (FCM) to include a person or business entity that solicits or accepts orders for futures or options on futures and, in connection with those orders, accepts money, securities, or property to margin, guarantee, or secure the trades or contracts.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-165; sequence 165; source code 10_IM_22.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are clearly visible. The regulatory concept is consistent with the FCM definition and distinguishes FCMs from IBs because of acceptance of customer funds.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "165",
    "sourceQuestionNumber": 164,
    "sourceCode": "10_IM_22",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-165",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "If hypothetical trading results are included in a Disclosure Document, they must appear as the last disclosure in the document.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Hypothetical trading results, when included in a Disclosure Document, must appear as the last disclosure."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This contradicts the required placement shown in the source explanation."
      }
    ],
    "explanation": "If hypothetical trading results are included in a Disclosure Document, they must appear as the last disclosure in the document.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-166; sequence 166; source code 10_IM_117.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item. The answer and explanation shown on the screen are consistent.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "166",
    "sourceQuestionNumber": 165,
    "sourceCode": "10_IM_117",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-166",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "You have built a website to promote your business to Russian clientele living in Brooklyn. Also as a convenience to these potential customers, you have rigorously translated your disclosure documents into the Russian language. You:",
    "choices": [
      {
        "id": "a",
        "text": "Must maintain English translations for a period of five years from the date of last use",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 requires members to maintain English translations of foreign-language promotional material, disclosure documents, and websites distributed to or intended for viewing by customers in the United States, its territories, or possessions."
      },
      {
        "id": "b",
        "text": "Must maintain English translations for a period of three years from the date of last use",
        "isCorrect": false,
        "rationale": "The retention period stated by the source is five years from the date of last use, not three years."
      },
      {
        "id": "c",
        "text": "Do not need to translate the Russian text into English if the person who wrote the Russian text is a bona fide English speaker employed by a professional language translation agency",
        "isCorrect": false,
        "rationale": "The requirement is to maintain English translations of covered foreign-language materials; the translator's English ability or employment by a translation agency does not eliminate that obligation."
      },
      {
        "id": "d",
        "text": "Are not required to translate the Russian text into English as long as you can make a person available to translate the document if requested by NFA",
        "isCorrect": false,
        "rationale": "The rule requires maintaining English translations, not merely arranging for a person to translate the document upon request."
      }
    ],
    "explanation": "Under NFA Rule 2-29, English translations must be maintained for foreign-language promotional material, disclosure documents, and websites that are distributed to, or intended for viewing by, customers located in the United States, its territories, or possessions. The source identifies the retention period as five years from the date of last use, so choice A is correct.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-167; sequence 167; source code 10_IM_96.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question is readable and has a single supported correct answer. Minor grammar/source wording issues were corrected in the app-ready stem and explanation without changing substance.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "167",
    "sourceQuestionNumber": 166,
    "sourceCode": "10_IM_96",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-167",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "arbitration-procedures",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A CFTC registrant may require its customers to sign a pre-dispute resolution agreement.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "CFTC regulations specify that signing a pre-dispute resolution or arbitration agreement must be voluntary, so a registrant may not require it."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC regulations specify that signing a pre-dispute resolution or arbitration agreement must be voluntary."
      }
    ],
    "explanation": "CFTC regulations specify that signing a pre-dispute resolution or arbitration agreement must be voluntary. Therefore, a CFTC registrant may not require customers to sign such an agreement.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-168; sequence 168; source code 10_IM_20.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false question with clear answer and explanation. Terminology is consistent with arbitration/pre-dispute dispute resolution agreement requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "168",
    "sourceQuestionNumber": 167,
    "sourceCode": "10_IM_20",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-168",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "guaranteed-ibs",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "An IB must open and carry each customer's account:",
    "choices": [
      {
        "id": "a",
        "text": "On a fully disclosed basis with its carrying broker.",
        "isCorrect": true,
        "rationale": "CFTC regulations require all accounts introduced by an introducing broker to be carried on a fully disclosed basis with the carrying FCM."
      },
      {
        "id": "b",
        "text": "Either on a fully disclosed basis or through a specifically designated customer omnibus account.",
        "isCorrect": false,
        "rationale": "IB-introduced accounts may not be carried through an omnibus account; they must be fully disclosed to the carrying FCM."
      },
      {
        "id": "c",
        "text": "As directed by the carrying broker's agreement.",
        "isCorrect": false,
        "rationale": "The regulatory requirement is that the accounts be fully disclosed, not merely handled as the carrying broker's agreement directs."
      },
      {
        "id": "d",
        "text": "In the same manner as would be done by an FCM.",
        "isCorrect": false,
        "rationale": "An IB introduces accounts to a carrying FCM; it does not carry customer accounts in the same manner as an FCM."
      }
    ],
    "explanation": "In accordance with CFTC regulations, all IB-introduced accounts must be carried on a fully disclosed basis with a carrying FCM.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-169; sequence 169; source code 10_IM_26.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The terminology is consistent with IB account carrying requirements; the source wording uses \"carrying broker,\" while the explanation clarifies carrying FCM.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "169",
    "sourceQuestionNumber": 168,
    "sourceCode": "10_IM_26",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-169",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under NFA rules for discretionary futures accounts, which practice is required before a member or associated person exercises trading discretion over a customer's account?",
    "choices": [
      {
        "id": "a",
        "text": "Obtain the customer's written authorization granting discretionary trading authority.",
        "isCorrect": true,
        "rationale": "NFA discretionary-account rules require written authorization from the customer before discretionary trading authority is exercised, subject to limited exceptions not tested here."
      },
      {
        "id": "b",
        "text": "Treat oral permission from the customer as sufficient written authorization if it is witnessed by another employee.",
        "isCorrect": false,
        "rationale": "Oral permission is not a substitute for the required written grant of discretionary authority."
      },
      {
        "id": "c",
        "text": "Allow discretionary orders to be entered without any special identification if the account executive approved the trades.",
        "isCorrect": false,
        "rationale": "Discretionary accounts and discretionary orders must be identifiable in the member's records and order-handling process."
      },
      {
        "id": "d",
        "text": "Review discretionary trading only when a customer complaint is received.",
        "isCorrect": false,
        "rationale": "Members must maintain written supervisory procedures for review of discretionary trading; review is not limited to complaint situations."
      }
    ],
    "explanation": "NFA Rule 2-8 addresses discretionary trading controls. A core requirement is that the customer's grant of discretion be in writing before discretionary trading is conducted. The rule also requires controls such as identifying discretionary accounts/orders and supervisory review procedures, but this repaired item tests the written-authorization requirement with one clear correct answer.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-170; sequence 170; source code 10_IM_46.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the banned 'All of the above' format and to provide standalone answer choices with exactly one correct response. Repair: Converted the original all-of-the-above question into a single-best-answer item focused on the written authorization requirement for discretionary accounts. Second-pass review: The repaired item is readable, has exactly one unambiguous correct answer, removes the all-of-the-above format, and uses plausible standalone distractors. The explanation and rationales correctly support the written-authorization requirement under NFA discretionary-account rules, while noting related controls without creating ambiguity. Taxonomy is appropriate and no calculation is involved.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "170",
    "sourceQuestionNumber": 169,
    "sourceCode": "10_IM_46",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-170",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "financial-reports",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An FCM may provide daily and monthly account statements to customers by electronic media under which of the following condition?",
    "choices": [
      {
        "id": "a",
        "text": "The customer agreement provides that the statements will be sent electronically.",
        "isCorrect": false,
        "rationale": "The customer agreement alone is not sufficient; the customer must give written consent in a statement containing the required electronic disclosure information."
      },
      {
        "id": "b",
        "text": "Monthly statements will be mailed as well as delivered electronically.",
        "isCorrect": false,
        "rationale": "The rule shown concerns conditions for electronic delivery, not a requirement that monthly statements also be mailed."
      },
      {
        "id": "c",
        "text": "The customer gives written consent in a statement that contains electronic disclosure information required by the NFA.",
        "isCorrect": true,
        "rationale": "The displayed explanation states that electronic delivery is permitted if the customer gives written consent in a statement containing the electronic disclosure information required by the NFA."
      },
      {
        "id": "d",
        "text": "The FCM notifies the customer that the statements will only be provided electronically.",
        "isCorrect": false,
        "rationale": "Unilateral notice by the FCM is not sufficient; customer written consent with required disclosures is needed."
      }
    ],
    "explanation": "An FCM may provide daily and monthly account statements to customers by electronic media if the customer gives written consent in a statement that contains the electronic disclosure information required by the NFA.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-171; sequence 171; source code 10_IM_120.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are readable. Minor grammar in the stem was corrected from 'condition' to 'condition?' for app readiness without changing meaning.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "171",
    "sourceQuestionNumber": 170,
    "sourceCode": "10_IM_120",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-171",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cta-regulations",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A CTA cannot accept funds from clients in the CTA's name.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A CTA generally may not accept customer funds in the CTA's own name unless the CTA is also properly registered as an FCM."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because customer funds must generally be handled by an FCM, not accepted in the CTA's name."
      }
    ],
    "explanation": "Unless a CTA is also registered as an FCM, it may not solicit, accept, or receive client funds, securities, or other property in the trading advisor's name to purchase, margin, guarantee, or secure a client's commodity interest. Customer funds must be received by an FCM.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-172; sequence 172; source code 10_IM_23.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with visible answer and explanation. The rule statement is slightly simplified because the explanation notes an FCM registration exception, but the intended Series 3 concept is clear and educationally useful.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "172",
    "sourceQuestionNumber": 171,
    "sourceCode": "10_IM_23",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-172",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cta-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A person acting as a commodity trading advisor (CTA) is generally exempt from CFTC registration if which condition is met?",
    "choices": [
      {
        "id": "a",
        "text": "The advisor has provided commodity trading advice to no more than 15 persons during the preceding 12 months and does not hold itself out generally to the public as a CTA.",
        "isCorrect": true,
        "rationale": "This is the limited-adviser CTA registration exemption: advice to no more than 15 persons in the preceding 12 months and no general public holding out as a CTA."
      },
      {
        "id": "b",
        "text": "The advisor's commodity trading recommendations were not profitable during the preceding 12 months.",
        "isCorrect": false,
        "rationale": "Profitability, or lack of profitability, does not determine whether CTA registration is required."
      },
      {
        "id": "c",
        "text": "The advisor is registered with FINRA, even though providing commodity trading advice is its principal business.",
        "isCorrect": false,
        "rationale": "FINRA registration does not replace CFTC/NFA CTA registration when a person is acting as a commodity trading advisor and no exemption applies."
      },
      {
        "id": "d",
        "text": "The advisor is registered with another financial regulator and none of its clients earned profits from the advice during the preceding 12 months.",
        "isCorrect": false,
        "rationale": "Registration with another regulator and client profitability do not by themselves create a CTA registration exemption."
      }
    ],
    "explanation": "A CTA is generally required to register unless an exemption applies. One commonly tested exemption applies when the advisor has provided commodity trading advice to no more than 15 persons during the preceding 12 months and does not hold itself out generally to the public as a CTA.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-173; sequence 173; source code 10_IM_86.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The referential source choice was replaced with a standalone distractor. The item now has exactly one clear correct answer and tests the CTA limited-adviser registration exemption. Repair: Rewrote the stem and choices into standalone app-ready wording, corrected the source typo from 'then' to 'than,' and removed the banned referential choice 'A and C.' Second-pass review: The repaired item is clear, has exactly one unambiguous correct answer, uses standalone answer choices with no referential formats, and the explanation/rationales support the CTA limited-adviser registration exemption. Taxonomy is appropriate and no calculation is involved.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "173",
    "sourceQuestionNumber": 172,
    "sourceCode": "10_IM_86",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-173",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "In regard to the new account information provided by a customer, the FCM or IB:",
    "choices": [
      {
        "id": "a",
        "text": "Must attempt to use at least one other means to verify the information.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-30 permits the member or associate to rely on the customer as the source of required customer information."
      },
      {
        "id": "b",
        "text": "Must verify at least the customer's income and net worth.",
        "isCorrect": false,
        "rationale": "The rule does not require verification of the customer's income or net worth information."
      },
      {
        "id": "c",
        "text": "Is entitled to rely on the customer as the sole source for the information.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 states that a member or associate may rely on the customer as the sole source for the information obtained under the rule and is not required to verify it."
      },
      {
        "id": "d",
        "text": "Must verify the customer's net worth and income only if no previous trading experience has been disclosed.",
        "isCorrect": false,
        "rationale": "There is no such conditional verification requirement in the displayed explanation of NFA Rule 2-30."
      }
    ],
    "explanation": "NFA Rule 2-30 (Customer Information and Risk Disclosure) provides that a member or associate is entitled to rely on the customer as the sole source for the information obtained under this rule and is not required to verify the information.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-174; sequence 174; source code 10_IM_45.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, answer, and explanation are clearly visible. The concept is consistent with NFA Rule 2-30 regarding customer information and risk disclosure.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "174",
    "sourceQuestionNumber": 173,
    "sourceCode": "10_IM_45",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-174",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "anti-money-laundering",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The anti-money laundering report that is required to be filed regarding a suspicious transaction is known as:",
    "choices": [
      {
        "id": "a",
        "text": "AML Alert Bulletin.",
        "isCorrect": false,
        "rationale": "This is not the standard name of the required anti-money laundering filing."
      },
      {
        "id": "b",
        "text": "Suspicious Activity Report.",
        "isCorrect": true,
        "rationale": "A report filed regarding suspicious activity or transactions under AML rules is a Suspicious Activity Report, commonly abbreviated SAR."
      },
      {
        "id": "c",
        "text": "Suspicious Transaction Report.",
        "isCorrect": false,
        "rationale": "Although descriptive, this is not the standard U.S. AML filing name used here."
      },
      {
        "id": "d",
        "text": "FinCEN Notification.",
        "isCorrect": false,
        "rationale": "FinCEN receives certain reports, but the required report is called a Suspicious Activity Report."
      }
    ],
    "explanation": "The anti-money laundering report required to be filed regarding a suspicious transaction is known as a Suspicious Activity Report, or SAR.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-175; sequence 175; source code 10_IM_98.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The displayed answer and explanation correctly identify the AML report as a Suspicious Activity Report (SAR).",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "175",
    "sourceQuestionNumber": 174,
    "sourceCode": "10_IM_98",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-175",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "NFA Rule 2-3 prohibits a member or associate from sharing in the profits or losses of a customer's account:",
    "choices": [
      {
        "id": "a",
        "text": "Under any conditions.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-3 permits profit or loss sharing if the customer's prior written authorization is obtained."
      },
      {
        "id": "b",
        "text": "Unless prior notice is given to the NFA.",
        "isCorrect": false,
        "rationale": "The exception is not prior notice to NFA; it is prior written authorization from the customer."
      },
      {
        "id": "c",
        "text": "Unless prior written authorization is received from the customer.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-3 prohibits a member or associate from sharing, directly or indirectly, in profits or losses accruing in a customer account unless the customer's prior written authorization is obtained."
      },
      {
        "id": "d",
        "text": "Unless it is a joint account.",
        "isCorrect": false,
        "rationale": "The rule's stated exception is prior written customer authorization, not merely the existence of a joint account."
      }
    ],
    "explanation": "NFA Rule 2-3 prohibits members and associates from sharing directly or indirectly in the profits or losses of a customer's account unless the customer gives prior written authorization.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-176; sequence 176; source code 10_IM_78.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and internally consistent. The displayed answer and explanation support choice C.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "176",
    "sourceQuestionNumber": 175,
    "sourceCode": "10_IM_78",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-176",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An associated person's registration terminated within the preceding 60 days and the person becomes associated with a new sponsor. What may NFA grant if the required filings and certifications are made?",
    "choices": [
      {
        "id": "a",
        "text": "A temporary AP license for the new sponsor, subject to the conditions in the registration rules.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 3.40 includes special temporary licensing procedures for APs whose registration terminated within the preceding 60 days."
      },
      {
        "id": "b",
        "text": "A permanent license with no new Form 8-R or sponsor certification.",
        "isCorrect": false,
        "rationale": "Required filings and certifications still matter."
      },
      {
        "id": "c",
        "text": "An automatic exemption from AP registration for one year.",
        "isCorrect": false,
        "rationale": "The rule concerns temporary licensing, not a one-year exemption."
      },
      {
        "id": "d",
        "text": "A floor-trader registration because changing sponsors converts the AP role into floor trading.",
        "isCorrect": false,
        "rationale": "AP status and floor-trader status are different registration categories."
      }
    ],
    "explanation": "CFTC Regulation 3.40 contains temporary licensing procedures. For an AP whose registration terminated within the preceding 60 days, NFA may grant a temporary license with the new sponsor when the required Form 8-R and sponsor certifications are filed and the regulatory conditions are satisfied.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-177; sequence 177; source code 10_IM_32. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "177",
    "sourceQuestionNumber": 176,
    "sourceCode": "10_IM_32",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-177",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cta-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which activity would generally require a person or firm to register as a Commodity Trading Advisor (CTA)?",
    "choices": [
      {
        "id": "a",
        "text": "Providing commodity interest trading advice for compensation while holding the firm out to the public as a trading advisor.",
        "isCorrect": true,
        "rationale": "A person who, for compensation or profit, advises others about commodity interest trading and holds out as a trading advisor generally must register as a CTA unless an exemption applies."
      },
      {
        "id": "b",
        "text": "Providing commodity interest trading advice to 15 or fewer persons in the past 12 months without holding out to the public as a trading advisor.",
        "isCorrect": false,
        "rationale": "This describes a common CTA registration exemption, assuming the other conditions of the exemption are met."
      },
      {
        "id": "c",
        "text": "Publishing general market news that is not tailored to any customer's commodity interest trading account.",
        "isCorrect": false,
        "rationale": "General, nonpersonalized market commentary is not typically CTA activity requiring registration by itself."
      },
      {
        "id": "d",
        "text": "Giving incidental commodity interest comments as part of another regulated business without receiving separate compensation for the advice.",
        "isCorrect": false,
        "rationale": "Incidental advice without separate compensation may fall outside CTA registration requirements or within an exclusion, depending on the facts."
      }
    ],
    "explanation": "CTA registration is generally required when a person or firm, for compensation or profit, advises others about commodity interest trading or holds itself out as providing that advice. A person who advises only 15 or fewer persons during the prior 12 months and does not hold out to the public may qualify for an exemption, so publicly holding out as a trading advisor is the clearest registration-triggering fact.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-178; sequence 178; source code 10_IM_110.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove banned answer formats and to test one clear CTA-registration trigger with standalone choices. Repair: Converted the original 'All of the above' item into a single-best-answer question focused on holding out to the public as a commodity trading advisor for compensation, with exemption-based distractors. Second-pass review: The repaired item is readable, removes prohibited all/none/A-and-B formats, and has exactly one clearly correct answer. The distractors are plausible and generally align with CTA exclusions/exemptions, including the 15-or-fewer/no-holding-out framework. Rationales and explanation support the keyed answer, and the taxonomy is appropriate for CTA registration requirements.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "178",
    "sourceQuestionNumber": 177,
    "sourceCode": "10_IM_110",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-178",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Each futures trade initiated in an account that a Member or Associate has written authorization to trade shall be presumed to have been made pursuant to the trading authorization unless otherwise indicated in writing at the time the trade was made.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA Rule 2-8 provides that futures trades in an account for which a Member or Associate has written trading authorization are presumed to be made pursuant to that authorization unless otherwise indicated in writing at the time of the trade."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This statement accurately reflects the presumption under NFA Rule 2-8 for discretionary accounts."
      }
    ],
    "explanation": "NFA Rule 2-8 (Discretionary Accounts) provides that each futures trade initiated in an account that a Member or Associate has written authorization to trade shall be presumed to have been made pursuant to the trading authorization unless otherwise indicated in writing at the time the trade was made.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-179; sequence 179; source code 10_IM_109.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, answer choices, source code, and explanation are readable. The item is a true/false question with exactly one correct answer and is consistent with NFA Rule 2-8 terminology regarding discretionary accounts and written trading authorization.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "179",
    "sourceQuestionNumber": 178,
    "sourceCode": "10_IM_109",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-179",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which statement about principal-protected commodity pools is accurate under current CFTC Part 4 terminology?",
    "choices": [
      {
        "id": "a",
        "text": "A principal-protected pool is a recognized disclosure category; it is not automatically prohibited merely because it is designed to limit initial-investment losses.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.10 defines principal-protected pools, which confirms that the category exists."
      },
      {
        "id": "b",
        "text": "All principal-protected pools are categorically banned by CFTC regulation.",
        "isCorrect": false,
        "rationale": "The category is defined in CFTC Part 4 and is not categorically banned on that basis alone."
      },
      {
        "id": "c",
        "text": "A pool may call itself principal-protected without explaining costs, risks, or conditions.",
        "isCorrect": false,
        "rationale": "Disclosure must not be misleading and must explain material terms and risks."
      },
      {
        "id": "d",
        "text": "Principal-protected status eliminates CPO disclosure obligations.",
        "isCorrect": false,
        "rationale": "Being principal-protected does not by itself eliminate disclosure obligations."
      }
    ],
    "explanation": "The source asked whether principal-protected pools are no longer permitted. Current CFTC Part 4 uses the defined term 'principal-protected pool,' so the safe answer is that the category exists, but claims about protection must be disclosed accurately and must not be misleading.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-180; sequence 180; source code 10_IM_75. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "180",
    "sourceQuestionNumber": 179,
    "sourceCode": "10_IM_75",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-180",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "margin-deposit-collection",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "No FCM or IB may represent that the FCM or IB will:",
    "choices": [
      {
        "id": "a",
        "text": "Guarantee a person against loss.",
        "isCorrect": false,
        "rationale": "This is prohibited, but it is not the only prohibited representation listed."
      },
      {
        "id": "b",
        "text": "Limit the loss of a person.",
        "isCorrect": false,
        "rationale": "This is prohibited, but it is not the only prohibited representation listed."
      },
      {
        "id": "c",
        "text": "Not call for exchange-required margin.",
        "isCorrect": false,
        "rationale": "This is prohibited, but it is not the only prohibited representation listed."
      },
      {
        "id": "d",
        "text": "Guarantee a person against loss; limit the loss of a person; and not call for exchange-required margin.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.56 prohibits an FCM, IB, or person representing either that the FCM or IB will guarantee against loss, limit loss, or not call for or attempt to collect required initial and maintenance margin."
      },
      {
        "id": "e",
        "text": "Guarantee a person against loss and limit the loss of a person, but not the margin representation.",
        "isCorrect": false,
        "rationale": "This omits the prohibited representation that the FCM or IB will not call for or attempt to collect required margin."
      }
    ],
    "explanation": "CFTC Regulation 1.56 prohibits an FCM, IB, or any person from representing that the FCM or IB will guarantee a person against loss, limit a person's loss, or not call for or attempt to collect initial and maintenance margins as established by the exchange or clearinghouse.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-181; sequence 181; source code 10_IM_10.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses combination choices, but the app-ready version rewrites choices D and E semantically to avoid references such as 'A, B and C' while preserving one correct answer. The regulatory concept is clear and supported by the explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "181",
    "sourceQuestionNumber": 180,
    "sourceCode": "10_IM_10",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-181",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "hard",
    "questionType": "multiple_choice",
    "stem": "A CPO or CTA includes extracted, pro forma, simulated, or hypothetical performance in a Disclosure Document. Where should that supplemental performance information generally appear?",
    "choices": [
      {
        "id": "a",
        "text": "After the required disclosures, with appropriate caution and support so the presentation is not misleading.",
        "isCorrect": true,
        "rationale": "CFTC Part 4 requires supplemental and hypothetical/extracted performance to be presented with care and after required information."
      },
      {
        "id": "b",
        "text": "Before all required performance disclosures so it receives the most emphasis.",
        "isCorrect": false,
        "rationale": "Required performance information should not be displaced by supplemental performance."
      },
      {
        "id": "c",
        "text": "Only in oral sales presentations so it is not part of the Disclosure Document.",
        "isCorrect": false,
        "rationale": "Oral use does not avoid anti-fraud and disclosure concerns."
      },
      {
        "id": "d",
        "text": "Without explanation if the extracted component performed better than the whole program.",
        "isCorrect": false,
        "rationale": "Selective performance without explanation can be misleading."
      }
    ],
    "explanation": "CFTC Part 4 treats extracted, pro forma, simulated, and hypothetical performance as high-risk supplemental information. The current study point is not a legacy mechanical condition, but that such performance must be supported, placed after required information, accompanied by required cautions where applicable, and not be misleading.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-182; sequence 182; source code 10_IM_118. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "182",
    "sourceQuestionNumber": 181,
    "sourceCode": "10_IM_118",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-182",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A CTA's Disclosure Document must follow a CFTC specified format.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A CTA Disclosure Document is subject to prescribed CFTC/NFA disclosure requirements and must be prepared in the required format."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement is true; CTA Disclosure Documents must follow the specified disclosure format."
      }
    ],
    "explanation": "A CTA's Disclosure Document must follow a CFTC specified format.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-183; sequence 183; source code 10_IM_112.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is fully visible. It is a clear true/false regulatory question, and the displayed answer and explanation support choice A.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "183",
    "sourceQuestionNumber": 182,
    "sourceCode": "10_IM_112",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-183",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "time-stamping",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under CFTC recordkeeping rules, which customer order records must an FCM or IB retain for at least five years?",
    "choices": [
      {
        "id": "a",
        "text": "Only orders that were filled",
        "isCorrect": false,
        "rationale": "Recordkeeping requirements are not limited to filled orders."
      },
      {
        "id": "b",
        "text": "Filled and unfilled orders, but not canceled orders",
        "isCorrect": false,
        "rationale": "Canceled orders are also order records that must be retained."
      },
      {
        "id": "c",
        "text": "Filled, unfilled, and canceled orders",
        "isCorrect": true,
        "rationale": "CFTC order-record requirements include records of filled, unfilled, and canceled orders, and required records generally must be retained for at least five years."
      },
      {
        "id": "d",
        "text": "Only canceled orders and order tickets involving customer complaints",
        "isCorrect": false,
        "rationale": "The retention requirement is broader and applies to order records generally, including filled, unfilled, and canceled orders."
      }
    ],
    "explanation": "FCMs and IBs must retain required order records, including filled, unfilled, and canceled orders. CFTC Regulation 1.35 addresses order records, and CFTC Regulation 1.31 generally requires required records to be retained for at least five years.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-184; sequence 184; source code 10_IM_13.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Repaired to remove the banned 'None of the above' format while preserving the source-tested concept. The rule is a standard recordkeeping principle for FCM/IB order records and is suitable for a static Series 3 practice item. Repair: Removed the prohibited 'None of the above' answer choice and replaced it with a substantive distractor. Clarified the stem and retained exactly one correct answer. Second-pass review: The repaired item is readable, has exactly one unambiguous correct answer, removes the prior 'None of the above' choice, and provides plausible standalone distractors. The explanation and rationales support the correct answer. The regulatory statement is consistent with CFTC order-record and general retention requirements, and the taxonomy is appropriate for FCM/IB order recordkeeping/time-stamping.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "184",
    "sourceQuestionNumber": 183,
    "sourceCode": "10_IM_13",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-184",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "When must an NFA member or associate obtain the information and provide the risk disclosure required by NFA Rule 2-30 (Customer Information and Risk Disclosure)?",
    "choices": [
      {
        "id": "a",
        "text": "Within 48 hours of meeting the customer.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-30 requires the information and risk disclosure by the time the customer first opens the account, not within 48 hours of meeting the customer."
      },
      {
        "id": "b",
        "text": "At or before the time the customer first opens the account.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-30 requires the specified customer information to be obtained and the risk disclosure to be provided at or before the time the customer first opens a futures or options trading account."
      },
      {
        "id": "c",
        "text": "Within 5 days of deposit of the initial account funds.",
        "isCorrect": false,
        "rationale": "The requirement is tied to opening the account, not to a later deadline after the initial deposit of funds."
      },
      {
        "id": "d",
        "text": "As required by the carrying broker's internal procedures.",
        "isCorrect": false,
        "rationale": "Internal procedures do not replace the timing requirement under NFA Rule 2-30."
      }
    ],
    "explanation": "NFA Rule 2-30 requires the specified customer information to be obtained and the required risk disclosure to be provided at or before the time a customer first opens a futures or options trading account.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-185; sequence 185; source code 10_IM_42.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are clearly visible. The stated answer is consistent with the displayed explanation and NFA Rule 2-30 timing concept.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "185",
    "sourceQuestionNumber": 184,
    "sourceCode": "10_IM_42",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-185",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "net-capital-requirements",
    "difficulty": "hard",
    "questionType": "multiple_choice",
    "stem": "Under current CFTC minimum financial rules, how is the basic adjusted-net-capital requirement for an FCM determined?",
    "choices": [
      {
        "id": "a",
        "text": "The FCM must maintain adjusted net capital at least equal to the greatest applicable required amount, including the fixed-dollar minimum, risk-based requirement, RFA requirement, and any applicable SEC broker-dealer requirement.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.17 uses a greatest-of structure for FCM adjusted net capital."
      },
      {
        "id": "b",
        "text": "The FCM always needs only $45,000 in adjusted net capital.",
        "isCorrect": false,
        "rationale": "$45,000 is associated with IB minimum capital, not the general FCM requirement."
      },
      {
        "id": "c",
        "text": "The FCM may choose the lowest applicable capital formula.",
        "isCorrect": false,
        "rationale": "The rule uses the greatest applicable amount, not the lowest."
      },
      {
        "id": "d",
        "text": "The FCM has no minimum capital requirement if it carries only customer accounts.",
        "isCorrect": false,
        "rationale": "Customer-account activity does not eliminate FCM financial requirements."
      }
    ],
    "explanation": "CFTC Regulation 1.17 currently requires an FCM to maintain adjusted net capital equal to or above the greatest applicable amount. The fixed-dollar minimum is one component, but risk-based, registered futures association, SEC broker-dealer, and swap-dealer-related requirements can also matter.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-186; sequence 186; source code 10_IM_71. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "186",
    "sourceQuestionNumber": 185,
    "sourceCode": "10_IM_71",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-186",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A CPO disclosure document must include a break-even analysis featuring a tabular presentation of fees and expenses.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "NFA requirements for CPO disclosure documents include a break-even analysis with a tabular presentation of fees and expenses."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This statement is true; the break-even analysis and fee/expense table are required elements of CPO disclosure documents."
      }
    ],
    "explanation": "NFA Rule 2-13 requires CPO disclosure documents to contain a break-even analysis that includes a tabular presentation of fees and expenses. The table must show how much trading profit customers need during the first year of investment in the pool to break even on their original investment.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-187; sequence 187; source code 10_IM_81.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single clearly indicated correct answer and supporting explanation. Terminology is consistent with CPO disclosure document requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "187",
    "sourceQuestionNumber": 186,
    "sourceCode": "10_IM_81",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-187",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "financial-reports",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "An FCM must file quarterly financial reports, as well as an annual certified financial report.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "FCMs do not satisfy the requirement by filing only quarterly financial reports plus an annual certified financial report."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "FCMs are required to file financial reports monthly, and the year-end financial report must be certified by an independent public accountant."
      }
    ],
    "explanation": "FCMs are required to file financial reports on a monthly basis. The statement is false because it says quarterly financial reports are required. The year-end financial report must be certified by an independent public accountant.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-188; sequence 188; source code 10_IM_70.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single correct answer shown on the source page. The explanation supports the answer and fits FCM financial reporting requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "188",
    "sourceQuestionNumber": 187,
    "sourceCode": "10_IM_70",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-188",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In order to handle discretionary accounts, NFA rules require an associate member that is not registered as a CPO, CTA, or an Associated Person of a CTA or CPO to have:",
    "choices": [
      {
        "id": "a",
        "text": "Passed a qualification examination for directing accounts.",
        "isCorrect": false,
        "rationale": "A special qualification examination for directing accounts is not the requirement stated in NFA Rule 2-8."
      },
      {
        "id": "b",
        "text": "Been continuously registered and have worked as an associated person for at least two years.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-8 requires an AP exercising discretion over a customer's account to have been continuously registered for at least two years and to have worked in that registered capacity during that period, unless NFA grants a waiver based on equivalent experience."
      },
      {
        "id": "c",
        "text": "At least three years of qualifying experience.",
        "isCorrect": false,
        "rationale": "The rule described in the source specifies a two-year continuous registration and work requirement, not three years."
      },
      {
        "id": "d",
        "text": "CFTC approval to handle discretionary accounts.",
        "isCorrect": false,
        "rationale": "The source explanation refers to the NFA Rule 2-8 registration/work requirement and possible NFA waiver, not CFTC approval."
      }
    ],
    "explanation": "NFA Rule 2-8 on discretionary accounts requires, among other things, that an AP exercising discretion over a customer's account be continuously registered for at least two years and have worked in that registered capacity during that time. NFA may waive this requirement upon a showing of equivalent experience.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-189; sequence 189; source code 10_IM_51.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. Minor punctuation in the displayed stem was normalized from 'CPO. CTA' to 'CPO, CTA' because the intended list is clear from context.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "189",
    "sourceQuestionNumber": 188,
    "sourceCode": "10_IM_51",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-189",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The registration functions of the CFTC are performed by the:",
    "choices": [
      {
        "id": "a",
        "text": "CFTC's division of trading and markets.",
        "isCorrect": false,
        "rationale": "The displayed explanation states that the CFTC has authorized the NFA to perform various registration functions on its behalf."
      },
      {
        "id": "b",
        "text": "FINRA.",
        "isCorrect": false,
        "rationale": "FINRA is a securities self-regulatory organization and is not the entity authorized to perform CFTC registration functions."
      },
      {
        "id": "c",
        "text": "NFA.",
        "isCorrect": true,
        "rationale": "The CFTC has authorized the National Futures Association to perform various registration functions on behalf of the Commission."
      },
      {
        "id": "d",
        "text": "SEC.",
        "isCorrect": false,
        "rationale": "The SEC regulates securities markets and is not the entity authorized to perform CFTC registration functions."
      }
    ],
    "explanation": "The CFTC, by regulation, has authorized the NFA to perform various registration functions on behalf of the Commission.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-190; sequence 190; source code 10_IM_41.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, answer choices, correct answer, and explanation are clearly visible. The regulatory concept is consistent with NFA registration functions performed on behalf of the CFTC.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "190",
    "sourceQuestionNumber": 189,
    "sourceCode": "10_IM_41",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-190",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "The NFA prohibits any reference in futures promotional materials to actual profits realized in the past.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA rules do not impose an absolute prohibition on referring to actual past profits in promotional material."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Promotional material may refer to actual past trading profits if it includes appropriate disclosure that past results are not necessarily indicative of future results."
      }
    ],
    "explanation": "The statement is false. NFA promotional material rules permit references to actual past trading profits, provided the material includes the required caution that past results are not necessarily indicative of future results.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-191; sequence 191; source code 10_IM_79.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item. The answer and explanation are consistent with the visible source and with NFA promotional material principles regarding past performance disclosures.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "191",
    "sourceQuestionNumber": 190,
    "sourceCode": "10_IM_79",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-191",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A Member uses foreign-language promotional material or disclosure material for U.S. customers. What is the key recordkeeping requirement?",
    "choices": [
      {
        "id": "a",
        "text": "Maintain an English translation and keep promotional-material records for the required retention period.",
        "isCorrect": true,
        "rationale": "NFA promotional-material guidance requires English translations of foreign-language material and record retention."
      },
      {
        "id": "b",
        "text": "Translate only the profitable examples and not the risk disclosure.",
        "isCorrect": false,
        "rationale": "The translation requirement is not limited to favorable portions."
      },
      {
        "id": "c",
        "text": "Destroy the English version after the material is first used.",
        "isCorrect": false,
        "rationale": "Records must be retained; destruction after first use would defeat examination access."
      },
      {
        "id": "d",
        "text": "Avoid review because foreign-language material is outside NFA communications rules.",
        "isCorrect": false,
        "rationale": "Foreign-language material for U.S. customers remains subject to communications and recordkeeping requirements."
      }
    ],
    "explanation": "NFA promotional-material guidance requires Members to retain promotional material and, where material is in another language for U.S. customers, maintain English translations so the material can be reviewed and examined.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-192; sequence 192; source code 10_IM_94. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "192",
    "sourceQuestionNumber": 191,
    "sourceCode": "10_IM_94",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-192",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-cta-promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CPO's use of hypothetical trading performance in advertising:",
    "choices": [
      {
        "id": "a",
        "text": "Is prohibited.",
        "isCorrect": false,
        "rationale": "Hypothetical performance is not categorically prohibited, but it is subject to required qualifications and limitations."
      },
      {
        "id": "b",
        "text": "Is permitted provided it is accompanied by a qualifying statement.",
        "isCorrect": true,
        "rationale": "A CPO's use of hypothetical trading performance must be accompanied by a CFTC-specified qualification statement highlighting limitations of hypothetical or simulated results."
      },
      {
        "id": "c",
        "text": "Has no restrictions.",
        "isCorrect": false,
        "rationale": "Hypothetical performance advertising is restricted and requires qualifying disclosure."
      },
      {
        "id": "d",
        "text": "Must include an example of a hypothetical trading loss.",
        "isCorrect": false,
        "rationale": "The stated requirement is a qualifying statement, not necessarily an example of a hypothetical trading loss."
      }
    ],
    "explanation": "A CPO's use of hypothetical trading performance must be accompanied by a CFTC-specified qualification statement that highlights certain inherent limitations of hypothetical or simulated performance results.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-193; sequence 193; source code 10_IM_83.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable question with exactly one correct answer indicated by the source. The regulatory concept is consistent with disclosure requirements for hypothetical or simulated performance in CPO/CTA promotional material.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "193",
    "sourceQuestionNumber": 192,
    "sourceCode": "10_IM_83",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-193",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "recordkeeping",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "All books and records required to be kept by CFTC regulations must be retained for a period of at least:",
    "choices": [
      {
        "id": "a",
        "text": "One year.",
        "isCorrect": false,
        "rationale": "CFTC recordkeeping rules generally require required books and records to be kept for five years, not one year."
      },
      {
        "id": "b",
        "text": "Five years.",
        "isCorrect": true,
        "rationale": "CFTC regulations generally require required books and records to be retained for at least five years."
      },
      {
        "id": "c",
        "text": "Seven years.",
        "isCorrect": false,
        "rationale": "The general CFTC retention period for required books and records is five years, not seven years."
      },
      {
        "id": "d",
        "text": "Three years.",
        "isCorrect": false,
        "rationale": "Three years is shorter than the general five-year retention period required under CFTC recordkeeping rules."
      }
    ],
    "explanation": "CFTC regulations require books and records required to be kept under those regulations to be retained for at least five years.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-194; sequence 194; source code 10_IM_25.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable and the answer/explanation are consistent with the general CFTC five-year record retention requirement. The item asks broadly about CFTC-required books and records; taxonomy mapped to recordkeeping.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "194",
    "sourceQuestionNumber": 193,
    "sourceCode": "10_IM_25",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-194",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "NFA Rule 2-30 (Customer Information and Risk Disclosure) requires members and associates to obtain at least which information from customers who are individuals?",
    "choices": [
      {
        "id": "a",
        "text": "The customer's true name, address, and principal occupation or business",
        "isCorrect": false,
        "rationale": "This is one of the required items, but it is not the only required customer information under the rule."
      },
      {
        "id": "b",
        "text": "The customer's current estimated annual income and net worth",
        "isCorrect": false,
        "rationale": "This is one of the required items, but it is not the only required customer information under the rule."
      },
      {
        "id": "c",
        "text": "The customer's approximate age",
        "isCorrect": false,
        "rationale": "This is one of the required items, but it is not the only required customer information under the rule."
      },
      {
        "id": "d",
        "text": "The customer's previous investment and futures trading experience, along with true name, address, occupation or business, current estimated annual income and net worth, and approximate age",
        "isCorrect": true,
        "rationale": "For an individual customer, NFA Rule 2-30 requires members to obtain the customer's true name and address, principal occupation or business, current estimated annual income and net worth, approximate age, and an indication of previous investment and futures trading experience."
      }
    ],
    "explanation": "NFA Rule 2-30 requires members and associates to obtain specified customer information from individual customers, including true name and address, principal occupation or business, current estimated annual income and net worth, approximate age, and an indication of previous investment and futures trading experience. The source used an \"All of the above\" answer, which has been rewritten into a substantive correct choice for app use.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-195; sequence 195; source code 10_IM_1.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source question is readable and the credited answer is supported by the visible explanation. The app-ready version rewrites the source's 'All of the above' choice into a substantive answer choice to comply with app standards.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "195",
    "sourceQuestionNumber": 194,
    "sourceCode": "10_IM_1",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-195",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "According to NFA guidance on promotional material, which set of claims is identified as presenting potential abusive promotional practices?",
    "choices": [
      {
        "id": "a",
        "text": "Claims about seasonal trends, historical price moves, price movements described as conservative, and profit-potential projections",
        "isCorrect": true,
        "rationale": "NFA guidance identifies all of these categories as areas where promotional claims may be abusive."
      },
      {
        "id": "b",
        "text": "Claims limited to the mechanics of account-opening documentation and customer identification procedures",
        "isCorrect": false,
        "rationale": "Account-opening and customer identification procedures are regulatory compliance topics, but they are not the promotional-claim categories identified in this item."
      },
      {
        "id": "c",
        "text": "Claims limited to how exchange clearinghouses process trades and guarantee contract performance",
        "isCorrect": false,
        "rationale": "Clearinghouse functions are not the promotional-material claim areas identified by the NFA in this context."
      },
      {
        "id": "d",
        "text": "Claims about routine trade-confirmation timing and monthly account statement delivery",
        "isCorrect": false,
        "rationale": "Trade confirmations and account statements are not the promotional-claim categories identified as potentially abusive in this item."
      }
    ],
    "explanation": "NFA guidance on promotional material identifies several types of claims as areas of potential abuse, including claims regarding seasonal trends, historical price moves, price movements characterized as conservative, and profit-potential projections. The revised choices remove the original banned \"all of the above\" format while preserving the tested concept.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-196; sequence 196; source code 10_IM_124.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten into a single-best-answer format with standalone choices and no banned answer formats. Source image and transcript clearly support the correct answer. Repair: Converted the original \"all of the above\" item into an app-ready single-best-answer question by combining the true source propositions into one correct semantic answer and replacing partial-answer distractors with clearly incorrect standalone regulatory-topic distractors. Second-pass review: The repaired item is readable, has exactly one clear correct answer, avoids all/none/both formats, and the distractors are standalone. The explanation and rationales support the keyed answer, no calculation is involved, and the regulatory statement is a general NFA promotional-material principle that is not obviously outdated or overly specific. Taxonomy is appropriate for FCM/IB promotional material.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "196",
    "sourceQuestionNumber": 195,
    "sourceCode": "10_IM_124",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-196",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "account-supervision-review",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following activities require written supervisory procedures?",
    "choices": [
      {
        "id": "a",
        "text": "The handling of discretionary accounts, the handling of option accounts, and the preparation and distribution of promotional material",
        "isCorrect": true,
        "rationale": "All three listed activities require written supervisory procedures."
      },
      {
        "id": "b",
        "text": "The handling of discretionary accounts only",
        "isCorrect": false,
        "rationale": "Written supervisory procedures are also required for option accounts and promotional material."
      },
      {
        "id": "c",
        "text": "The handling of option accounts only",
        "isCorrect": false,
        "rationale": "Written supervisory procedures are also required for discretionary accounts and promotional material."
      },
      {
        "id": "d",
        "text": "The preparation and distribution of promotional material only",
        "isCorrect": false,
        "rationale": "Written supervisory procedures are also required for discretionary accounts and option accounts."
      }
    ],
    "explanation": "Written supervisory procedures must cover the handling of discretionary accounts, the handling of option accounts, and the preparation and distribution of promotional material.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-197; sequence 197; source code 10_IM_69.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses a combination answer choice ('A, B and C'), so the app-ready version rewrites the choices semantically while preserving the tested concept and single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "197",
    "sourceQuestionNumber": 196,
    "sourceCode": "10_IM_69",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-197",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "bunched-orders",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which statement best describes a CTA's responsibilities when using bunched or block orders for customer accounts?",
    "choices": [
      {
        "id": "a",
        "text": "The CTA must use fair allocation procedures, ensure correct contract allocations to customer accounts, and periodically review each trading program's allocation method for fairness.",
        "isCorrect": true,
        "rationale": "CTAs using bunched or block orders must follow fair and equitable allocation procedures, allocate contracts correctly among customer accounts, and review the allocation method at least quarterly."
      },
      {
        "id": "b",
        "text": "The CTA may allocate profitable trades first to accounts with the highest account equity if this method is disclosed in advance.",
        "isCorrect": false,
        "rationale": "Allocation procedures must be fair and equitable; favoring accounts based on equity for profitable trades would not satisfy that standard."
      },
      {
        "id": "c",
        "text": "The CTA only needs written customer authorization and does not need a separate allocation procedure for bunched orders.",
        "isCorrect": false,
        "rationale": "Written authorization for discretionary trading does not replace the need for fair bunched-order allocation procedures."
      },
      {
        "id": "d",
        "text": "The CTA may decide allocations after the trading day ends without documenting or reviewing the allocation method.",
        "isCorrect": false,
        "rationale": "Bunched-order allocations must be handled under fair procedures with appropriate allocation and review, not through undocumented after-the-fact discretion."
      }
    ],
    "explanation": "A CTA that bunches or blocks orders must use allocation procedures designed to be fair and equitable, must ensure customer accounts receive the correct contract allocations on each trade, and must review each trading program's allocation method at least quarterly to confirm it has been fair and equitable.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-198; sequence 198; source code 10_IM_114.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten from the source's banned 'All of the above' format into a standalone single-best-answer multiple-choice item. The tested concept is clear and preserved. Repair: Converted the source item from an 'All of the above' question into an app-ready standalone multiple-choice question with exactly one correct answer and meaningful distractors. Second-pass review: The repaired item is readable and meaningful, has exactly one unambiguous correct answer, avoids all/none/both formats, and uses standalone plausible distractors. The rationales and explanation support the correct answer. No calculations are involved. The regulatory concept regarding CTA bunched/block order allocation procedures, correct allocation, and periodic/quarterly review is appropriate for the stated taxonomy and not obviously outdated or over-specific.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "198",
    "sourceQuestionNumber": 197,
    "sourceCode": "10_IM_114",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-198",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "CPO disclosure documents must include the minimum aggregate amount of funds for the pool to commence but not to cease trading.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "CPO disclosure documents must disclose both the minimum aggregate funds needed for the pool to commence trading and the amount needed for it to cease trading."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "The statement is false because it omits the requirement to disclose the minimum aggregate amount of funds for the pool to cease trading."
      }
    ],
    "explanation": "CPO disclosure documents must include the minimum aggregate amount of funds required for the pool to commence trading and to cease trading. Therefore, the statement that they must include the amount to commence but not to cease trading is false.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-199; sequence 199; source code 10_IM_64.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false CPO disclosure-document requirement with a single correct answer matching the displayed explanation.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "199",
    "sourceQuestionNumber": 198,
    "sourceCode": "10_IM_64",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-199",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under the Commodity Exchange Act's regulatory structure for exchange-traded futures and options on futures, which statement best describes the relationship between the CFTC and exchanges?",
    "choices": [
      {
        "id": "a",
        "text": "The CFTC has exclusive jurisdiction over exchange-traded futures and options on futures, while exchanges and other self-regulatory organizations have self-regulatory duties subject to CFTC oversight.",
        "isCorrect": true,
        "rationale": "The Commodity Exchange Act gives the CFTC exclusive jurisdiction over exchange-traded futures and options on futures, assigns self-regulatory responsibilities to exchanges and similar organizations, and subjects those organizations to CFTC oversight."
      },
      {
        "id": "b",
        "text": "Exchanges have exclusive regulatory authority over futures trading, and the CFTC may intervene only when an exchange requests assistance.",
        "isCorrect": false,
        "rationale": "Exchanges have self-regulatory responsibilities, but the CFTC retains jurisdiction and oversight authority; its role is not limited to acting at an exchange's request."
      },
      {
        "id": "c",
        "text": "The CFTC directly regulates customers but has no oversight authority over exchanges or other self-regulatory organizations.",
        "isCorrect": false,
        "rationale": "The CFTC has oversight jurisdiction over exchanges and other self-regulatory organizations under the Commodity Exchange Act's regulatory scheme."
      },
      {
        "id": "d",
        "text": "The Commodity Exchange Act leaves exchange-traded futures and options on futures primarily outside federal regulatory jurisdiction.",
        "isCorrect": false,
        "rationale": "Exchange-traded futures and options on futures are within the CFTC's jurisdiction under the Commodity Exchange Act."
      }
    ],
    "explanation": "The Commodity Exchange Act establishes a regulatory framework in which the CFTC has jurisdiction over exchange-traded futures and options on futures. At the same time, exchanges and other self-regulatory organizations have self-regulatory responsibilities, and the CFTC has oversight jurisdiction over those organizations.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-200; sequence 200; source code 10_IM_90.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove the banned 'All of the above' format while preserving the tested concept. The repaired item has one clearly correct standalone answer and plausible standalone distractors. Repair: Converted the original 'All of the above' question into a single-best-answer item that combines the three true source propositions into one correct standalone choice and replaces the remaining choices with incorrect standalone distractors. Second-pass review: The repaired item is readable, removes the all-of-the-above format, and has exactly one clearly correct answer. The correct choice accurately summarizes the CEA/CFTC regulatory structure for exchange-traded futures and options on futures, exchange/SRO self-regulatory duties, and CFTC oversight. Distractors are plausible and clearly incorrect, and the explanation/rationales support the answer. No calculation issues or obvious regulatory/taxonomy problems identified.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "200",
    "sourceQuestionNumber": 199,
    "sourceCode": "10_IM_90",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-200",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "accepting-customer-funds",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following activities may not be undertaken by an Introducing Broker?",
    "choices": [
      {
        "id": "a",
        "text": "Solicitation of accounts",
        "isCorrect": false,
        "rationale": "Introducing Brokers may solicit customer accounts."
      },
      {
        "id": "b",
        "text": "Acceptance of orders",
        "isCorrect": false,
        "rationale": "Introducing Brokers may accept customer orders."
      },
      {
        "id": "c",
        "text": "Acceptance of customer funds in its own name",
        "isCorrect": true,
        "rationale": "An Introducing Broker is prohibited from accepting or handling customer funds in its own name. Customer funds must be payable or transmitted to the carrying FCM as required."
      },
      {
        "id": "d",
        "text": "Handling of discretionary accounts",
        "isCorrect": false,
        "rationale": "The prohibited activity identified here is accepting customer funds in the IB's own name."
      }
    ],
    "explanation": "An Introducing Broker may solicit accounts and accept orders, but it may not accept or handle customer funds in its own name. Checks must be payable to the carrying FCM and handled according to the FCM's authorization, and wire transfers must be sent directly to the FCM by the customer.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-201; sequence 201; source code 10_IM_8.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and internally consistent. The correct answer and explanation are visible and align with IB fund-handling restrictions.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "201",
    "sourceQuestionNumber": 200,
    "sourceCode": "10_IM_8",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-201",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "account-opening",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which of the following is generally an exception to the FIFO requirement for offsetting open futures and options positions?",
    "choices": [
      {
        "id": "a",
        "text": "A trade offset in accordance with specific customer instructions",
        "isCorrect": true,
        "rationale": "Specific customer instructions are a recognized exception to the general requirement to offset against the oldest open position first."
      },
      {
        "id": "b",
        "text": "A discretionary account in which an FCM, IB, or associated person submits special offset instructions",
        "isCorrect": false,
        "rationale": "FCMs, IBs, and their associated persons generally may not submit special offset instructions for customer discretionary accounts they direct."
      },
      {
        "id": "c",
        "text": "A speculative account with no customer offset instructions",
        "isCorrect": false,
        "rationale": "Absent an exception, positions generally must be offset on a FIFO basis against the oldest open positions."
      },
      {
        "id": "d",
        "text": "A non-discretionary account offset solely for administrative convenience of the firm",
        "isCorrect": false,
        "rationale": "Firm convenience is not a recognized exception to the FIFO offset requirement."
      }
    ],
    "explanation": "Futures and options positions generally are offset against the oldest open positions first, often referred to as FIFO. Exceptions include hedge accounts, day trades, and offsets made in accordance with specific customer instructions. However, an FCM, IB, or associated person directing a customer's discretionary account generally may not submit special offset instructions.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-202; sequence 202; source code 10_IM_33.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove combination answer choices and answer-letter references while preserving the tested regulatory concept. The stem asks for one recognized exception, allowing exactly one standalone correct answer. Repair: Converted the original combination-choice item into an app-ready standalone multiple-choice question with one correct answer: specific customer offset instructions as an exception to FIFO offsetting. Second-pass review: The repaired item is readable, uses standalone answer choices, has exactly one unambiguous correct answer, and removes the problematic combination format. Rationales and explanation consistently support the keyed answer and accurately reflect the stated FIFO exceptions, while noting the limitation on special offset instructions for discretionary accounts directed by an FCM, IB, or AP. Taxonomy is appropriate and no calculation is involved.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "202",
    "sourceQuestionNumber": 201,
    "sourceCode": "10_IM_33",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-202",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "A registered CTA or CPO is entitled to note in its disclosure document that the NFA has passed upon its abilities and qualifications.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "NFA rules prohibit a member or associate from representing or implying that NFA has approved the member or passed upon its abilities or qualifications."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "A member may state the fact of NFA membership, but may not imply sponsorship, recommendation, approval, or that NFA has passed upon its abilities or qualifications."
      }
    ],
    "explanation": "False. NFA rules prohibit a member or associate from representing or implying that the member or associate has been sponsored, recommended, or approved by NFA, or that NFA has passed upon the member's or associate's abilities. A member may state the fact of NFA membership if the effect of membership is not misrepresented and may explain NFA's functions and purposes.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-203; sequence 203; source code 10_IM_48.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a single clear correct answer. The explanation supports the answer and is consistent with NFA promotional/disclosure principles regarding representations of NFA approval.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "203",
    "sourceQuestionNumber": 202,
    "sourceCode": "10_IM_48",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-203",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "just-equitable-principles",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which statement is most accurate about ethics training under current CFTC guidance?",
    "choices": [
      {
        "id": "a",
        "text": "CFTC guidance allows firms flexibility to design ethics training appropriate to their business, personnel, and supervision needs.",
        "isCorrect": true,
        "rationale": "CFTC Part 3 Appendix B is a Statement of Acceptable Practices and recognizes flexible approaches."
      },
      {
        "id": "b",
        "text": "Every registrant must complete exactly one hour every three years, regardless of the firm's program.",
        "isCorrect": false,
        "rationale": "The old fixed-hour formulation is not the current safe statement."
      },
      {
        "id": "c",
        "text": "Ethics training is unrelated to supervision.",
        "isCorrect": false,
        "rationale": "The guidance links ethics training to fitness and adequate supervision."
      },
      {
        "id": "d",
        "text": "Only exchange floor personnel may receive ethics training.",
        "isCorrect": false,
        "rationale": "The guidance can apply across registrants and associated personnel."
      }
    ],
    "explanation": "The legacy item stated fixed timing and duration. Current CFTC guidance is more flexible: firms may design ethics training appropriate to their activities, and the program is relevant to fitness and supervision.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-204; sequence 204; source code 10_DI_8. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "204",
    "sourceQuestionNumber": 203,
    "sourceCode": "10_DI_8",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-204",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "The U.S. Securities and Exchange Commission plays no regulatory role in the sale of interests in a commodity pool.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "The SEC may have a regulatory role where interests in a commodity pool are securities offered to the public."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Interests in a commodity pool may be treated as securities, so SEC requirements can apply to their public offering."
      }
    ],
    "explanation": "False. The SEC may have a regulatory role in the offering of interests in a commodity pool because such interests can be treated as securities that must comply with securities offering requirements before being offered to the public.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-205; sequence 205; source code 10_DI_7.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false question with source answer B. The concept is broadly consistent: commodity pool interests may be securities and SEC requirements may apply to public offerings, even though the source wording 'SEC approval' is simplified.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "205",
    "sourceQuestionNumber": 204,
    "sourceCode": "10_DI_7",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-205",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A registered CPO operates a pool with net assets of $500,000 or less at the beginning of the pool's fiscal year. How often must the CPO generally distribute account statements?",
    "choices": [
      {
        "id": "a",
        "text": "At least quarterly, within the applicable regulatory timing rules.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.22 requires at least monthly statements for pools over $500,000 and otherwise at least quarterly."
      },
      {
        "id": "b",
        "text": "Only once every five years.",
        "isCorrect": false,
        "rationale": "CPO account statements are periodic, not five-year reports."
      },
      {
        "id": "c",
        "text": "Daily, regardless of pool size.",
        "isCorrect": false,
        "rationale": "Daily distribution is not the general Part 4 account-statement rule."
      },
      {
        "id": "d",
        "text": "Never, if the pool has fewer than 100 participants.",
        "isCorrect": false,
        "rationale": "Participant count alone does not remove the periodic account-statement requirement."
      }
    ],
    "explanation": "CFTC Regulation 4.22 provides that account statements are distributed at least monthly for pools with net assets of more than $500,000 at the beginning of the fiscal year, and otherwise at least quarterly, subject to the rule's details and annual-report exception.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-206; sequence 206; source code 10_DI_5. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "206",
    "sourceQuestionNumber": 205,
    "sourceCode": "10_DI_5",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-206",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "A CPO may make a loan from a commodity pool to the commodity pool operator or any affiliated person or entity as long as the total amount of all loans does not exceed 10% of the pool's assets and the CPO has reported the loan to the NFA.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "CPOs are prohibited from permitting a commodity pool to make direct or indirect loans or advances of pool assets to the CPO or affiliated persons or entities."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "The statement is false because a CPO may not permit a commodity pool to make direct or indirect loans or advances of pool assets to the CPO or any affiliated person or entity."
      }
    ],
    "explanation": "No CPO may permit a commodity pool to use any means to make a direct or indirect loan or advance pool assets to the CPO or any affiliated person or entity.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-207; sequence 207; source code 10_DI_45.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false regulatory item with a clear single correct answer and supporting explanation. The screenshot label shows Question 206 of 249, while the user-provided source item sequence is 207; the visible question number was preserved.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "207",
    "sourceQuestionNumber": 206,
    "sourceCode": "10_DI_45",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-207",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The calculation required to be in a CPO's Disclosure Document in order to advise the participant of the impact fees and expenses have on the potential profitability of their investment is known as a:",
    "choices": [
      {
        "id": "a",
        "text": "Commission to equity ratio.",
        "isCorrect": false,
        "rationale": "A commission-to-equity ratio is not the required disclosure calculation described."
      },
      {
        "id": "b",
        "text": "Break-even analysis.",
        "isCorrect": true,
        "rationale": "A CPO Disclosure Document must include a break-even analysis showing the impact of fees and expenses on the potential profitability of the participant's investment."
      },
      {
        "id": "c",
        "text": "Cost analysis.",
        "isCorrect": false,
        "rationale": "The required calculation is specifically referred to as a break-even analysis, not a general cost analysis."
      },
      {
        "id": "d",
        "text": "Expense impact analysis.",
        "isCorrect": false,
        "rationale": "Although descriptive, this is not the regulatory term for the required calculation."
      }
    ],
    "explanation": "A break-even analysis is the calculation required to be in a CPO's Disclosure Document in order to advise the participant of the impact fees and expenses have on the potential profitability of their investment.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-208; sequence 208; source code 10_DI_41.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The source wording is slightly ungrammatical but the intended regulatory concept is clear and educationally useful.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "208",
    "sourceQuestionNumber": 207,
    "sourceCode": "10_DI_41",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-208",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "transaction-cost-disclosure",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "When an FCM or IB charges fees in a way that is not based on a per-trade or round-turn amount, what disclosure must be provided to the customer?",
    "choices": [
      {
        "id": "a",
        "text": "The firm must provide a complete written explanation of the fees, including reasonable examples expressed on a per-trade or round-turn basis and, when equivalents may vary widely, a reasonably expected range.",
        "isCorrect": true,
        "rationale": "FCMs and IBs must explain non-per-trade or non-round-turn charges in writing and give reasonable examples translated into per-trade or round-turn terms, including a reasonable range when the equivalent charges may vary widely."
      },
      {
        "id": "b",
        "text": "The firm must stop using that fee method and replace it with a fixed round-turn commission schedule.",
        "isCorrect": false,
        "rationale": "The rule does not prohibit other fee methods; it requires appropriate disclosure to the customer."
      },
      {
        "id": "c",
        "text": "The firm must compare the charges to similar fees commonly used in the securities markets.",
        "isCorrect": false,
        "rationale": "The required comparison is to per-trade or round-turn equivalents, not to securities-market fee examples."
      },
      {
        "id": "d",
        "text": "The firm must disclose only the maximum possible fee that could be charged under the arrangement.",
        "isCorrect": false,
        "rationale": "The disclosure must include a complete written explanation and reasonable examples; where equivalents vary widely, it should describe the reasonably expected range, not merely a maximum."
      }
    ],
    "explanation": "If an FCM's or IB's fees and charges are not determined on a per-trade or round-turn basis, the customer must receive a complete written explanation of those fees and charges. The disclosure should include a reasonable example stated in per-trade or round-turn terms. If the per-trade or round-turn equivalent may vary widely, the firm should explain that fact and provide examples showing the reasonably expected range of fees or charges.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-209; sequence 209; source code 10_DI_2.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Repaired by removing the banned 'None of the above' choice and rewriting all choices as standalone semantic answers. Source image and transcript agree that choice C is correct, and the tested concept is clear. Repair: Converted the original source item into an app-ready question by preserving the correct disclosure requirement while replacing the discouraged 'None of the above' distractor with a substantive incorrect option. Second-pass review: The repaired question is readable and tests the intended FCM/IB transaction-cost disclosure requirement. It has exactly one unambiguous correct answer, no all/none/both formats, and plausible standalone distractors. The explanation and rationales support the correct answer, no calculations are involved, the regulatory statement is not obviously outdated or over-specific, and the taxonomy is appropriate.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "209",
    "sourceQuestionNumber": 208,
    "sourceCode": "10_DI_2",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-209",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CPO's Disclosure Document must be current as of its date except that performance information must be current as of a date not more than:",
    "choices": [
      {
        "id": "a",
        "text": "One month preceding the date of the document.",
        "isCorrect": false,
        "rationale": "CPO Disclosure Document performance information may be current as of a date not more than three months before the date of the document."
      },
      {
        "id": "b",
        "text": "Three months preceding the date of the document.",
        "isCorrect": true,
        "rationale": "A CPO's Disclosure Document must be current as of its date, except that performance information may be current as of a date not more than three months preceding the date of the document."
      },
      {
        "id": "c",
        "text": "Nine months preceding the date of the document.",
        "isCorrect": false,
        "rationale": "Nine months is too long; the performance information must be current within three months of the document date."
      },
      {
        "id": "d",
        "text": "Twelve months preceding the date of the document.",
        "isCorrect": false,
        "rationale": "Twelve months is too long; the performance information must be current within three months of the document date."
      }
    ],
    "explanation": "A CPO's Disclosure Document must be current as of its date, except that performance information must be current as of a date not more than three months preceding the date of the document.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-210; sequence 210; source code 10_DI_38.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, correct answer, and explanation are clearly visible. The item tests CPO Disclosure Document currency requirements and has exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "210",
    "sourceQuestionNumber": 209,
    "sourceCode": "10_DI_38",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-210",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "hard",
    "questionType": "multiple_choice",
    "stem": "For a CTA Disclosure Document, what is the general current performance-disclosure period for the offered trading program when performance exists?",
    "choices": [
      {
        "id": "a",
        "text": "The five most recent calendar years and year-to-date, or the life of the program if shorter, with monthly rates for the offered program.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.35 requires recent five-year and year-to-date performance disclosure, subject to life-of-program limits."
      },
      {
        "id": "b",
        "text": "Only the single best month in the program's history.",
        "isCorrect": false,
        "rationale": "Selective best-month disclosure would be misleading and incomplete."
      },
      {
        "id": "c",
        "text": "Only proprietary trading results, even when customer-account performance exists.",
        "isCorrect": false,
        "rationale": "Required performance disclosure focuses on the offered program and other required account/program information."
      },
      {
        "id": "d",
        "text": "No performance disclosure unless every trade was profitable.",
        "isCorrect": false,
        "rationale": "The rules require performance disclosure even when results include losses."
      }
    ],
    "explanation": "The source used a narrow proprietary-results formulation. The current reliable CTA point is CFTC Regulation 4.35: required past performance generally covers the five most recent calendar years and year-to-date, or the life of the program if shorter, with monthly rates for the offered program.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-211; sequence 211; source code 10_DI_35. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "211",
    "sourceQuestionNumber": 210,
    "sourceCode": "10_DI_35",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-211",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-cta-promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CPO or CTA publishes an online video or audio message that refers to past or possible future trading profits. What is the safest compliance treatment?",
    "choices": [
      {
        "id": "a",
        "text": "Treat it as promotional material subject to NFA/CFTC communications standards, supervisory review, required disclaimers, and recordkeeping; pre-use filing may be required when a specific NFA rule category applies.",
        "isCorrect": true,
        "rationale": "Online audio/video profit claims are promotional communications and must comply with communications, review, disclaimer, and recordkeeping rules."
      },
      {
        "id": "b",
        "text": "Treat it as exempt from all rules because it is online rather than printed.",
        "isCorrect": false,
        "rationale": "Online format does not remove communications obligations."
      },
      {
        "id": "c",
        "text": "Permit profit claims without risk disclosure if the speaker is a principal.",
        "isCorrect": false,
        "rationale": "A principal's status does not remove anti-fraud, disclaimer, or supervision requirements."
      },
      {
        "id": "d",
        "text": "Delete all records after posting because the public can view the video.",
        "isCorrect": false,
        "rationale": "Public availability is not a substitute for required records."
      }
    ],
    "explanation": "The old item used a narrow pre-use approval formulation. The current, exam-safe point is broader: online audio and video communications that make recommendations or refer to profits are promotional material and must satisfy NFA/CFTC communications standards, including review, required disclaimers, and record retention.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-212; sequence 212; source code 10_DI_44. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "212",
    "sourceQuestionNumber": 211,
    "sourceCode": "10_DI_44",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-212",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which practice is prohibited for a commodity pool operator (CPO) when handling pool property?",
    "choices": [
      {
        "id": "a",
        "text": "Depositing pool participant funds into an account held in the name of the commodity pool.",
        "isCorrect": false,
        "rationale": "A CPO generally should receive and hold pool funds in the pool's name; the prohibited practice is accepting funds in a name other than the pool's name."
      },
      {
        "id": "b",
        "text": "Combining the property of a pool with the property of the CPO or any other person.",
        "isCorrect": true,
        "rationale": "CFTC rules prohibit a CPO from commingling the property of any pool it operates or intends to operate with the property of any other person."
      },
      {
        "id": "c",
        "text": "Maintaining separate records for each commodity pool operated by the CPO.",
        "isCorrect": false,
        "rationale": "Maintaining separate records is consistent with CPO compliance obligations; it is not a prohibited practice."
      },
      {
        "id": "d",
        "text": "Operating more than one commodity pool while keeping each pool's property separately identified.",
        "isCorrect": false,
        "rationale": "Operating multiple pools is not itself prohibited, provided the CPO complies with applicable rules and keeps pool property properly segregated and identified."
      }
    ],
    "explanation": "A CPO is prohibited from commingling the property of any commodity pool it operates or intends to operate with the property of any other person, including the CPO. Relatedly, pool participant funds must be accepted in the pool's name rather than in another person's name. The repaired question tests the commingling prohibition as one clear best answer without combination answer choices.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-213; sequence 213; source code 10_DI_15.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Rewritten to remove disfavored combination choices and references to answer letters while preserving the tested CPO prohibited-practices concept. Exactly one standalone answer is correct. Repair: Converted the original 'A and B only' format into a standalone four-choice question focused on one clear prohibited CPO practice: commingling pool property with the property of the CPO or another person. Second-pass review: The repaired item is readable, has exactly one unambiguous correct answer, avoids combination answer formats, and uses standalone plausible choices. The explanation and rationales correctly support the CPO commingling prohibition and related funds-in-pool-name rule. No calculations are present, the regulatory statement is stable and appropriate for Series 3, and the taxonomy is valid.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "213",
    "sourceQuestionNumber": 212,
    "sourceCode": "10_DI_15",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low"
  },
  {
    "id": "s3-regulatory-pdf-213",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "If a CTA or CPO knows or should know that its Disclosure Document is materially inaccurate or incomplete, it must correct the defect and distribute the correction within:",
    "choices": [
      {
        "id": "a",
        "text": "21 calendar days.",
        "isCorrect": true,
        "rationale": "CPO/CTA disclosure document corrections for materially inaccurate or incomplete information must be made and distributed within 21 calendar days."
      },
      {
        "id": "b",
        "text": "30 calendar days.",
        "isCorrect": false,
        "rationale": "The required period shown in the source is 21 calendar days, not 30 calendar days."
      },
      {
        "id": "c",
        "text": "45 calendar days.",
        "isCorrect": false,
        "rationale": "The required period shown in the source is 21 calendar days, not 45 calendar days."
      },
      {
        "id": "d",
        "text": "60 calendar days.",
        "isCorrect": false,
        "rationale": "The required period shown in the source is 21 calendar days, not 60 calendar days."
      }
    ],
    "explanation": "If a CTA or CPO knows or should know that its Disclosure Document is materially inaccurate or incomplete, it must correct the defect and distribute the correction within 21 calendar days.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-214; sequence 214; source code 10_DI_34.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, correct answer, explanation, question number, and source code are clearly visible. The item is unambiguous and educationally useful.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "214",
    "sourceQuestionNumber": 213,
    "sourceCode": "10_DI_34",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-214",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which statement best describes current CTA Disclosure Document obligations before accepting a prospective client's advisory agreement?",
    "choices": [
      {
        "id": "a",
        "text": "The CTA must deliver the required Disclosure Document and receive an acknowledgment of receipt, unless an exemption applies.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.31 requires delivery and acknowledgment before the advisory agreement is accepted."
      },
      {
        "id": "b",
        "text": "The CTA files the document only with a futures exchange and need not deliver it to the client.",
        "isCorrect": false,
        "rationale": "Client delivery and acknowledgment are core requirements."
      },
      {
        "id": "c",
        "text": "The CTA can rely solely on an oral explanation by the AP.",
        "isCorrect": false,
        "rationale": "Oral explanation does not replace the required Disclosure Document."
      },
      {
        "id": "d",
        "text": "The CTA has no disclosure obligation if the trading program uses only exchange-traded futures.",
        "isCorrect": false,
        "rationale": "Exchange-traded futures do not eliminate CTA disclosure obligations."
      }
    ],
    "explanation": "The legacy source focused on filing destination. For current app use, the core rule is more reliable: a registered CTA must deliver a Disclosure Document containing required information and obtain acknowledgment before accepting the advisory agreement, unless valid relief applies.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-215; sequence 215; source code 10_DI_25. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "215",
    "sourceQuestionNumber": 214,
    "sourceCode": "10_DI_25",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-215",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Even if exempted from registration as a CPO, the antifraud provisions of the Act continue to apply.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Exemption from CPO registration does not exempt a person from the Act's antifraud provisions."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The antifraud provisions continue to apply even where a CPO registration exemption is available."
      }
    ],
    "explanation": "Even if exempted from registration as a CPO, the antifraud provisions of the Act continue to apply.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-216; sequence 216; source code 10_DI_30.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with visible answer and explanation. The regulatory concept is consistent: registration exemptions do not eliminate antifraud obligations.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "216",
    "sourceQuestionNumber": 215,
    "sourceCode": "10_DI_30",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-216",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Persons who have passed FINRA's Series 7 exam and also pass the Series 33 exam can become Associated Persons authorized to offer and sell futures and options on futures involving stock-index, foreign-currency, precious-metal, or interest-rate products.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Series 33 qualification does not authorize offering and selling futures or options on futures involving precious metals."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Persons who qualify for and pass the Series 33 exam are authorized for stock-index, foreign-currency, and interest-rate futures and options on futures, but not precious metals."
      }
    ],
    "explanation": "The statement is false because Series 33 authorization excludes precious metals; it covers stock-index, foreign-currency, and interest-rate futures and options on futures.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-217; sequence 217; source code 10_DI_19.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with a clear single correct answer and explanation consistent with the displayed source.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "217",
    "sourceQuestionNumber": 216,
    "sourceCode": "10_DI_19",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-217",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "position-reporting",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Each FCM or clearing member must file reports with the CFTC for each account holding a reportable futures and/or options position, as fixed by the CFTC, on:",
    "choices": [
      {
        "id": "a",
        "text": "A daily basis.",
        "isCorrect": true,
        "rationale": "CFTC large-trader reporting rules require FCMs and clearing members to report reportable futures and options positions on a daily basis."
      },
      {
        "id": "b",
        "text": "A weekly basis as of each Friday.",
        "isCorrect": false,
        "rationale": "Reportable positions are not reported only weekly; the applicable reporting obligation is daily."
      },
      {
        "id": "c",
        "text": "A monthly basis unless requested by the CFTC on a more frequent basis.",
        "isCorrect": false,
        "rationale": "The regular reporting requirement is daily, not monthly subject to CFTC request."
      },
      {
        "id": "d",
        "text": "Only on an \"as requested\" basis.",
        "isCorrect": false,
        "rationale": "Although the CFTC may request additional information, reportable positions must be reported on a daily basis."
      }
    ],
    "explanation": "CFTC regulations require FCMs and clearing members to file daily reports for accounts holding reportable futures and/or options positions. A special account information form may also be required for each reportable account, and traders may be required to file a Statement of Reporting Trader, CFTC Form 40, upon special call by the Commission.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-218; sequence 218; source code 10_DI_11.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, answer, and explanation are clearly visible. The regulatory concept is consistent with CFTC large-trader/reportable-position reporting requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "218",
    "sourceQuestionNumber": 217,
    "sourceCode": "10_DI_11",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-218",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "How current must performance information in a CPO or CTA Disclosure Document generally be?",
    "choices": [
      {
        "id": "a",
        "text": "Current as of a date not more than three months before the date of the Disclosure Document.",
        "isCorrect": true,
        "rationale": "CFTC Part 4 performance rules require performance information to be current within this three-month window."
      },
      {
        "id": "b",
        "text": "Current as of any date within the last ten years.",
        "isCorrect": false,
        "rationale": "Ten years is too stale for required performance information."
      },
      {
        "id": "c",
        "text": "Current only as of the pool's original launch date.",
        "isCorrect": false,
        "rationale": "Performance information must be updated; launch-date-only information is not sufficient."
      },
      {
        "id": "d",
        "text": "Current only if the program had losses.",
        "isCorrect": false,
        "rationale": "The currency requirement applies to performance information generally."
      }
    ],
    "explanation": "CFTC Part 4 provides that performance information presented in a Disclosure Document must be current as of a date not more than three months before the date of the document. This applies to required performance information, subject to the specific CPO/CTA rules.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-219; sequence 219; source code 10_DI_4. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "219",
    "sourceQuestionNumber": 218,
    "sourceCode": "10_DI_4",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-219",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "hard",
    "questionType": "multiple_choice",
    "stem": "A commodity pool is also subject to securities-law disclosure obligations. What is the safest CPO compliance conclusion?",
    "choices": [
      {
        "id": "a",
        "text": "The CPO must analyze and satisfy both CFTC/NFA and applicable securities-law disclosure requirements, using harmonized or exemptive relief only when available.",
        "isCorrect": true,
        "rationale": "Dual regulatory status can require compliance with both regimes unless valid relief applies."
      },
      {
        "id": "b",
        "text": "SEC registration automatically cancels all CFTC Part 4 obligations.",
        "isCorrect": false,
        "rationale": "Securities-law status does not automatically eliminate CFTC/NFA obligations."
      },
      {
        "id": "c",
        "text": "CFTC disclosure rules always cancel SEC disclosure obligations.",
        "isCorrect": false,
        "rationale": "CFTC rules do not automatically eliminate securities-law obligations."
      },
      {
        "id": "d",
        "text": "The pool may omit material disclosure because another regulator also reviews it.",
        "isCorrect": false,
        "rationale": "Material disclosure obligations remain central."
      }
    ],
    "explanation": "The source's specific Statement of Additional Information wording is too context-dependent for a verified Series 3 QCM. The reliable current concept is dual compliance: if a pool is subject to both CFTC/NFA and securities-law disclosure regimes, the CPO must analyze both and rely on harmonized or exemptive relief only when it actually applies.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-220; sequence 220; source code 10_DI_42. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "220",
    "sourceQuestionNumber": 219,
    "sourceCode": "10_DI_42",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-220",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "financial-reports",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Generally, independent IBs are required to file financial reports:",
    "choices": [
      {
        "id": "a",
        "text": "On an annual basis.",
        "isCorrect": false,
        "rationale": "Independent IBs generally must file financial reports more frequently than annually."
      },
      {
        "id": "b",
        "text": "On a semiannual basis.",
        "isCorrect": true,
        "rationale": "Independent IBs are required to file financial reports on at least a semiannual basis."
      },
      {
        "id": "c",
        "text": "On a quarterly basis.",
        "isCorrect": false,
        "rationale": "The general requirement shown is semiannual filing, not quarterly filing."
      },
      {
        "id": "d",
        "text": "Only when requested by the CFTC or the NFA.",
        "isCorrect": false,
        "rationale": "Independent IBs have a periodic financial reporting obligation; filings are not required only upon request."
      }
    ],
    "explanation": "Independent IBs are required to file financial reports on at least a semiannual basis.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-221; sequence 221; source code 10_DI_13.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The question, choices, correct answer, source code, and explanation are clearly visible. The terminology is consistent with independent introducing broker financial reporting requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "221",
    "sourceQuestionNumber": 220,
    "sourceCode": "10_DI_13",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-221",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which condition is part of the small-pool CPO registration exemption in CFTC Regulation 4.13(a)(2)?",
    "choices": [
      {
        "id": "a",
        "text": "No pool operated by the person has more than 15 participants, and aggregate gross capital contributions for all pools do not exceed $400,000, subject to the rule's exclusions.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.13(a)(2) contains the 15-participant and $400,000 aggregate-contribution conditions."
      },
      {
        "id": "b",
        "text": "The operator may run unlimited pools with unlimited outside capital.",
        "isCorrect": false,
        "rationale": "The exemption has participant and contribution limits."
      },
      {
        "id": "c",
        "text": "The exemption is available only if every participant is a retail forex dealer.",
        "isCorrect": false,
        "rationale": "Retail forex dealer status is not the condition tested by 4.13(a)(2)."
      },
      {
        "id": "d",
        "text": "The pool must trade only securities and no commodity interests.",
        "isCorrect": false,
        "rationale": "The exemption is a CPO registration exemption for commodity pools meeting specified limits."
      }
    ],
    "explanation": "CFTC Regulation 4.13(a)(2) remains the current source for the small-pool exemption: none of the pools operated has more than 15 participants, and total gross capital contributions for units of participation in all pools do not exceed $400,000, subject to participant/contribution exclusions in the rule.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-222; sequence 222; source code 10_DI_36. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "222",
    "sourceQuestionNumber": 221,
    "sourceCode": "10_DI_36",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-222",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "While the CFTC has many requirements relating to CTA Disclosure Documents, regulations do not specify a specific order of presentation of material in a CTA Disclosure Document.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "CFTC Regulations do specify the order of presentation of material in a CTA Disclosure Document."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC Regulations specify the order of presentation of material in a CTA Disclosure Document."
      }
    ],
    "explanation": "CFTC Regulations specify the order of presentation of material in a CTA Disclosure Document, so the statement is false.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-223; sequence 223; source code 10_DI_29.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with visible answer and explanation. The regulatory concept is consistent with CFTC Part 4 disclosure document presentation requirements for CTAs.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "223",
    "sourceQuestionNumber": 222,
    "sourceCode": "10_DI_29",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-223",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "member-responsibility-actions",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The summary action taken by the NFA president, with the concurrence of the NFA board of directors, to suspend or restrict a member or otherwise to direct the member to take remedial action is known as:",
    "choices": [
      {
        "id": "a",
        "text": "A Final Decision and Order.",
        "isCorrect": false,
        "rationale": "A Final Decision and Order is not the NFA summary action described."
      },
      {
        "id": "b",
        "text": "An Emergency Decision and Order.",
        "isCorrect": false,
        "rationale": "The NFA summary action described is specifically called a Member Responsibility Action, not an Emergency Decision and Order."
      },
      {
        "id": "c",
        "text": "A Summary Decision.",
        "isCorrect": false,
        "rationale": "Although the action is summary in nature, the formal term is Member Responsibility Action."
      },
      {
        "id": "d",
        "text": "A Member Responsibility Action.",
        "isCorrect": true,
        "rationale": "An NFA Member Responsibility Action is a summary action taken by the NFA president, with required concurrence, to suspend or restrict a member or direct remedial action when needed to protect markets, customers, or other NFA members."
      }
    ],
    "explanation": "The president of the NFA, with concurrence of the board of directors or executive committee, may take summary action, known as a Member Responsibility Action (MRA), to suspend, restrict operations, or otherwise direct remedial action when there is reason to believe that the action is necessary to protect the markets, customers, or other NFA members.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-224; sequence 224; source code 10_DI_23.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, answer, and explanation are readable and consistent. The term Member Responsibility Action is correctly matched to NFA summary action authority.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "224",
    "sourceQuestionNumber": 223,
    "sourceCode": "10_DI_23",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-224",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which statement is safest regarding offering commodity pool interests across U.S. states?",
    "choices": [
      {
        "id": "a",
        "text": "A pool interest may raise federal and state securities-law issues, so availability in every state cannot be assumed without legal/regulatory analysis.",
        "isCorrect": true,
        "rationale": "Commodity pool interests can implicate securities offering rules and state-law considerations."
      },
      {
        "id": "b",
        "text": "Every U.S. commodity pool interest is automatically available in all states regardless of state law.",
        "isCorrect": false,
        "rationale": "State-law and securities-law issues can affect offerings."
      },
      {
        "id": "c",
        "text": "State law controls futures exchange contract terms but never pool interests.",
        "isCorrect": false,
        "rationale": "State securities or offering laws can be relevant to pool interests."
      },
      {
        "id": "d",
        "text": "Only agricultural pools are subject to any state-law restrictions.",
        "isCorrect": false,
        "rationale": "The issue is not limited to agricultural pools."
      }
    ],
    "explanation": "The source's false answer remains directionally correct, but the current app-ready wording is broader and safer: commodity pool interests can involve federal and state securities-law analysis, so a CPO should not assume nationwide offering availability without checking applicable law and exemptions.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-225; sequence 225; source code 10_DI_18. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "225",
    "sourceQuestionNumber": 224,
    "sourceCode": "10_DI_18",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-225",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "financial-reports",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "The CFTC requires books and records to be archived and available for inspection for:",
    "choices": [
      {
        "id": "a",
        "text": "Three years from the date of last use",
        "isCorrect": false,
        "rationale": "CFTC recordkeeping rules generally require covered records to be maintained for five years, not three years."
      },
      {
        "id": "b",
        "text": "Five years from the date of publication or first use",
        "isCorrect": false,
        "rationale": "This phrasing applies to certain promotional material retention periods, not the general books-and-records retention requirement shown here."
      },
      {
        "id": "c",
        "text": "Five years from the date thereof and readily accessible during the first two years of the five-year period",
        "isCorrect": true,
        "rationale": "Under CFTC Rule 1.31, required books and records must generally be kept for five years from the date thereof and be readily accessible during the first two years of that five-year period."
      },
      {
        "id": "d",
        "text": "Two years from the date thereof",
        "isCorrect": false,
        "rationale": "Records must be readily accessible during the first two years, but the total retention period is five years."
      }
    ],
    "explanation": "CFTC Rule 1.31 provides that required books and records generally must be retained for five years from the date thereof and must be readily accessible during the first two years of the five-year period.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-226; sequence 226; source code 10_DI_27.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable and indicates C as the correct answer. The rule concept is consistent with CFTC Rule 1.31 recordkeeping retention language. Taxonomy placement is closest available within FCM/IB recordkeeping/financial reporting topics, though the specific allowed subtopic for general recordkeeping is only under CPO/CTA.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "226",
    "sourceQuestionNumber": 225,
    "sourceCode": "10_DI_27",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-226",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "registration-exemptions",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which statement best describes offering foreign futures-related products to U.S. persons?",
    "choices": [
      {
        "id": "a",
        "text": "The analysis can depend on product type, foreign board access, CFTC relief or recognition, and other U.S. regulatory conditions.",
        "isCorrect": true,
        "rationale": "Foreign product access for U.S. persons is fact-specific and can require CFTC or other regulatory treatment."
      },
      {
        "id": "b",
        "text": "Foreign futures and foreign government-debt futures may always be sold to U.S. persons without any U.S. review.",
        "isCorrect": false,
        "rationale": "U.S. regulatory conditions can apply."
      },
      {
        "id": "c",
        "text": "Only the foreign exchange's home regulator has any authority over U.S. customer access.",
        "isCorrect": false,
        "rationale": "U.S. regulators may also have authority when U.S. persons are solicited or given access."
      },
      {
        "id": "d",
        "text": "NFA membership automatically approves every foreign product.",
        "isCorrect": false,
        "rationale": "NFA membership does not automatically approve all foreign products for U.S. customers."
      }
    ],
    "explanation": "The source listed legacy categories requiring approval. The current reliable study concept is that foreign futures-related products offered to U.S. persons require regulatory analysis based on the product, trading venue, CFTC relief or recognition, and other applicable U.S. conditions.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-227; sequence 227; source code 10_DI_12. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "227",
    "sourceQuestionNumber": 226,
    "sourceCode": "10_DI_12",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-227",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under CFTC Part 4 definitions, what is a major investee pool?",
    "choices": [
      {
        "id": "a",
        "text": "An investee pool allocated or intended to be allocated at least 10 percent of the net asset value of the investing pool.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.10 defines a major investee pool using a 10 percent net asset value threshold."
      },
      {
        "id": "b",
        "text": "Any pool in which another pool invests at least 20 percent of the investee pool's own net asset value.",
        "isCorrect": false,
        "rationale": "The current definition uses at least 10 percent of the investing pool's net asset value."
      },
      {
        "id": "c",
        "text": "Only a pool guaranteed by the federal government.",
        "isCorrect": false,
        "rationale": "Guarantee status is unrelated to the major investee pool definition."
      },
      {
        "id": "d",
        "text": "Any account managed by an associated person for one customer.",
        "isCorrect": false,
        "rationale": "A major investee pool is a pool-to-pool allocation concept, not a single-customer account."
      }
    ],
    "explanation": "The source's 20 percent formulation is not current. CFTC Regulation 4.10 defines a major investee pool, with respect to a pool, as any investee pool allocated or intended to be allocated at least 10 percent of the net asset value of the pool.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-228; sequence 228; source code 10_DI_9. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "228",
    "sourceQuestionNumber": 227,
    "sourceCode": "10_DI_9",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-228",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "The CFTC requires \"books and records\" to be archived and available for inspection for:",
    "choices": [
      {
        "id": "a",
        "text": "Three years from the date of last use",
        "isCorrect": false,
        "rationale": "CFTC recordkeeping requirements generally require records to be maintained for five years, not three years from last use."
      },
      {
        "id": "b",
        "text": "Five years from the date of publication or first use",
        "isCorrect": false,
        "rationale": "The five-year retention period is measured from the date of the record, not from publication or first use."
      },
      {
        "id": "c",
        "text": "Five years from the date thereof and readily accessible during the first two years of the five-year period",
        "isCorrect": true,
        "rationale": "CFTC Rule 1.31 requires required books and records to be kept for five years from the date thereof and readily accessible during the first two years of the five-year period."
      },
      {
        "id": "d",
        "text": "Two years from the date thereof",
        "isCorrect": false,
        "rationale": "The readily accessible period is two years, but the overall retention period is five years."
      }
    ],
    "explanation": "CFTC Rule 1.31 stipulates that books and records must be kept for five years from the date thereof and be readily accessible during the first two years of the five-year period.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-229; sequence 229; source code 10_DI_28.",
    "reviewStatus": "reviewed",
    "qualityStatus": "rejected",
    "qualityNotes": "The screenshot is readable and the source answer is clear. However, CFTC Rule 1.31 recordkeeping requirements have been amended over time, including changes to storage/accessibility terminology, so the legacy wording may be outdated depending on the current Series 3 testable rule set. Needs review before app publication. Duplicate review: Exact duplicate of s3-regulatory-pdf-225. Repair pass: duplicate retained as rejected unless manually selected as the keeper",
    "issueTypes": [
      "outdated_rule",
      "duplicate"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "229",
    "sourceQuestionNumber": 228,
    "sourceCode": "10_DI_28",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-229",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A CTA's disclosure document must be updated when it becomes materially inaccurate or incomplete or, in any event, at least every:",
    "choices": [
      {
        "id": "a",
        "text": "Three months.",
        "isCorrect": false,
        "rationale": "CTA disclosure documents are not required to be updated at least every three months under the rule reflected in the source."
      },
      {
        "id": "b",
        "text": "Six months.",
        "isCorrect": false,
        "rationale": "Six months is not the update interval shown by the source explanation."
      },
      {
        "id": "c",
        "text": "Nine months.",
        "isCorrect": true,
        "rationale": "The source explanation states that CFTC regulations prohibit a CTA from using a disclosure document dated more than nine months preceding the date of its use."
      },
      {
        "id": "d",
        "text": "Twelve months.",
        "isCorrect": false,
        "rationale": "Twelve months is too long; the source states the document may not be dated more than nine months before use."
      }
    ],
    "explanation": "CFTC regulations prohibit a CTA from using a disclosure document dated more than nine months preceding the date of its use. It also must be corrected when it becomes materially inaccurate or incomplete.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-230; sequence 230; source code 10_DI_1.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, and explanation are clearly visible. The regulatory concept is consistent with CTA disclosure document dating/update requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "230",
    "sourceQuestionNumber": 229,
    "sourceCode": "10_DI_1",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-230",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Once an exemption from registration as a CTA or CPO is obtained, the exemption remains in effect until a change requiring registration occurs.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "The exemption is not simply indefinite until a registration-triggering change occurs; it must be reaffirmed annually."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Any person claiming an exemption from CTA or CPO registration must annually reaffirm the notice of exemption within 60 days after the calendar year end, or the exemption is deemed withdrawn."
      }
    ],
    "explanation": "Any person claiming an exemption from CTA or CPO registration must annually reaffirm the notice of exemption within 60 days after the calendar year end. A failure to file the reaffirmation is treated as a withdrawal of the exemption, so the statement is false.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-231; sequence 231; source code 10_DI_47.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, answer, source code, and explanation are readable. The true/false format is preserved with exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "231",
    "sourceQuestionNumber": 230,
    "sourceCode": "10_DI_47",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-231",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "performance-records",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "For a CPO Disclosure Document, what period does required past-performance disclosure generally cover when the pool has sufficient history?",
    "choices": [
      {
        "id": "a",
        "text": "The most recent five calendar years and year-to-date, with life-of-pool treatment if the history is shorter.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 4.25 uses the most recent five calendar years and year-to-date framework for pool performance disclosure."
      },
      {
        "id": "b",
        "text": "Only the pool's first year of trading.",
        "isCorrect": false,
        "rationale": "Required performance disclosure is not limited to the first year."
      },
      {
        "id": "c",
        "text": "Only profitable years.",
        "isCorrect": false,
        "rationale": "Required disclosure cannot omit losing years because they are unfavorable."
      },
      {
        "id": "d",
        "text": "Only years selected by the CPO's marketing department.",
        "isCorrect": false,
        "rationale": "The disclosure period is rule-based, not a marketing choice."
      }
    ],
    "explanation": "CFTC Regulation 4.25 requires capsule past-performance information including the annual and year-to-date rate of return for the pool for the most recent five calendar years and year-to-date, or the life of the pool if shorter.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-232; sequence 232; source code 10_DI_40. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "232",
    "sourceQuestionNumber": 231,
    "sourceCode": "10_DI_40",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-232",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In reference to the previous five-year background information that a CTA or CPO must provide in a Disclosure Document, which of the following is required?",
    "choices": [
      {
        "id": "a",
        "text": "Only the names of previous employers for the previous five years.",
        "isCorrect": false,
        "rationale": "The disclosure background requirement is broader than only employer names."
      },
      {
        "id": "b",
        "text": "Previous five years of employment history, including the starting and ending dates of employment.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the complete requirement described by the explanation."
      },
      {
        "id": "c",
        "text": "Names of previous employers along with a description of the duties performed.",
        "isCorrect": false,
        "rationale": "This is required, but it is not the complete requirement described by the explanation."
      },
      {
        "id": "d",
        "text": "Both the previous five years of employment history, including starting and ending dates, and names of previous employers with a description of duties performed.",
        "isCorrect": true,
        "rationale": "CTA/CPO disclosure background information must include employers, associations, or ventures with starting and ending dates for the previous five-year period, plus a discussion of duties performed."
      }
    ],
    "explanation": "The background information must include names of employers, associations, or ventures, including starting and ending dates, for the previous five-year period, as well as a discussion of the duties performed for each individual.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-233; sequence 233; source code 10_DI_46.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses a combination choice, \"b and c.\" It was safely rewritten semantically as a standalone answer choice while preserving the intended correct answer. The question and explanation are readable and consistent.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "233",
    "sourceQuestionNumber": 232,
    "sourceCode": "10_DI_46",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-233",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "guaranteed-ibs",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Only guaranteed Introducing Brokers are required to carry all accounts on a fully disclosed basis at a carrying FCM.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "This is not limited to guaranteed Introducing Brokers."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Both guaranteed and non-guaranteed Introducing Brokers must introduce all accounts on a fully disclosed basis to a carrying FCM."
      }
    ],
    "explanation": "The statement is false. Both guaranteed and non-guaranteed Introducing Brokers must introduce all accounts on a fully disclosed basis to a carrying FCM.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-234; sequence 234; source code 10_DI_3.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with clear answer and explanation. Concept concerns Introducing Broker account carrying/introducing requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "234",
    "sourceQuestionNumber": 233,
    "sourceCode": "10_DI_3",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-234",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "formal-complaints",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An NFA business conduct committee action that states each NFA requirement alleged to have been violated and each act or omission that constitutes an alleged violation of NFA rules is:",
    "choices": [
      {
        "id": "a",
        "text": "A Member Responsibility Action.",
        "isCorrect": false,
        "rationale": "A Member Responsibility Action is an emergency or summary action, not the notice of charges that lists alleged rule violations and acts or omissions."
      },
      {
        "id": "b",
        "text": "A complaint.",
        "isCorrect": true,
        "rationale": "A complaint is the notice of charges issued by an NFA Business Conduct Committee and states the NFA requirements allegedly violated and the acts or omissions constituting the alleged violations."
      },
      {
        "id": "c",
        "text": "An arbitration claim.",
        "isCorrect": false,
        "rationale": "An arbitration claim is used to initiate an arbitration dispute, not an NFA disciplinary charge by a Business Conduct Committee."
      },
      {
        "id": "d",
        "text": "A cease and desist order.",
        "isCorrect": false,
        "rationale": "A cease and desist order directs a party to stop certain conduct; it is not the complaint or notice of charges describing alleged violations."
      }
    ],
    "explanation": "The notice of charges issued by an NFA Business Conduct Committee is known as a complaint. It identifies each NFA requirement alleged to have been violated and the specific acts or omissions that constitute the alleged violations.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-235; sequence 235; source code 10_DI_10.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The screenshot is readable, shows exactly one correct answer, and the terminology is consistent with NFA disciplinary procedure concepts.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "235",
    "sourceQuestionNumber": 234,
    "sourceCode": "10_DI_10",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-235",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "position-reporting",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In determining whether an account holds a reportable position under CFTC regulations, the position is computed as follows:",
    "choices": [
      {
        "id": "a",
        "text": "The total gross long or short position, all months combined, in the same commodity on all exchanges.",
        "isCorrect": false,
        "rationale": "Reportable status is not initially computed by combining all months across all exchanges."
      },
      {
        "id": "b",
        "text": "The total long or total short position in any one month in any one market on any one exchange.",
        "isCorrect": true,
        "rationale": "CFTC reportable position status is determined based on the total long or total short gross position in any one month in any one market on any one exchange."
      },
      {
        "id": "c",
        "text": "The net long or net short position in the spot month.",
        "isCorrect": false,
        "rationale": "The computation is based on gross long or gross short positions, not a net spot-month position only."
      },
      {
        "id": "d",
        "text": "The combined total of futures and options in all months of the same commodity.",
        "isCorrect": false,
        "rationale": "The source explanation specifies any one month in any one market on any one exchange, not a combined total across all months."
      }
    ],
    "explanation": "In determining CFTC reportable status, the total long or total short gross position in any one month in any one market on any one exchange is used. If this calculation results in a reportable position, the open positions for all months in the same market on the same exchange also must be reported.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-236; sequence 236; source code 10_DI_16.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The image is readable, the answer is explicitly shown as B, and the explanation supports the answer. Terminology is consistent with CFTC large trader/reportable position concepts.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "236",
    "sourceQuestionNumber": 235,
    "sourceCode": "10_DI_16",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-236",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In regard to supplemental information included in a CTA Disclosure Document, CFTC regulations require that the supplemental information:",
    "choices": [
      {
        "id": "a",
        "text": "Cannot be misleading.",
        "isCorrect": false,
        "rationale": "This is true, but it is not the complete answer because the regulations also require compliance with antifraud provisions and placement after required disclosures."
      },
      {
        "id": "b",
        "text": "Must comply with antifraud provisions of the Act.",
        "isCorrect": false,
        "rationale": "This is true, but it is not the complete answer because the regulations also require that supplemental information not be misleading and be placed after required disclosures."
      },
      {
        "id": "c",
        "text": "Must be placed after all required disclosures.",
        "isCorrect": false,
        "rationale": "This is true, but it is not the complete answer because the regulations also require that supplemental information not be misleading and comply with antifraud provisions."
      },
      {
        "id": "d",
        "text": "Cannot be misleading, must comply with the antifraud provisions of the Act, and must be placed after all required disclosures.",
        "isCorrect": true,
        "rationale": "CFTC regulations require all three stated conditions for supplemental information included in a CTA Disclosure Document."
      }
    ],
    "explanation": "CFTC Regulations require that supplemental information included in a CTA Disclosure Document cannot be misleading, must comply with the antifraud provisions of the Act, and must be placed after all required disclosures.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-237; sequence 237; source code 10_DI_32.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source uses 'All of the above' and 'A and B only'; app-ready version rewrites the correct choice semantically to avoid prohibited referential answer choices while preserving the tested concept and exactly one correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "237",
    "sourceQuestionNumber": 236,
    "sourceCode": "10_DI_32",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-237",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "net-capital-requirements",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Under current CFTC minimum financial rules, what is the baseline adjusted-net-capital test for an independent introducing broker?",
    "choices": [
      {
        "id": "a",
        "text": "The IB must maintain adjusted net capital at least equal to the greatest applicable amount, including $45,000, any RFA requirement, and any applicable SEC broker-dealer requirement.",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.17 contains a greatest-of test for IB adjusted net capital, including the $45,000 baseline."
      },
      {
        "id": "b",
        "text": "The IB needs no capital if it introduces accounts to an FCM.",
        "isCorrect": false,
        "rationale": "Independent IBs have minimum financial requirements."
      },
      {
        "id": "c",
        "text": "The IB always uses the smallest listed amount.",
        "isCorrect": false,
        "rationale": "The rule uses the greatest applicable amount."
      },
      {
        "id": "d",
        "text": "The IB uses the FCM capital rule of $1,000,000 in every case.",
        "isCorrect": false,
        "rationale": "The FCM and IB capital rules are different."
      }
    ],
    "explanation": "CFTC Regulation 1.17 currently states that each registered IB must maintain adjusted net capital equal to or above the greatest applicable amount, including $45,000, the amount required by its registered futures association, or any applicable SEC broker-dealer requirement.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-238; sequence 238; source code 10_DI_17. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "238",
    "sourceQuestionNumber": 237,
    "sourceCode": "10_DI_17",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-238",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "A person wants to rely on the CFTC Regulation 4.13(a)(2) small-pool CPO exemption. Which fact would generally prevent reliance on that exemption?",
    "choices": [
      {
        "id": "a",
        "text": "One of the pools operated by the person has more than 15 participants.",
        "isCorrect": true,
        "rationale": "The exemption requires that none of the pools operated has more than 15 participants, subject to exclusions."
      },
      {
        "id": "b",
        "text": "The operator keeps records of the pool's activity.",
        "isCorrect": false,
        "rationale": "Recordkeeping does not by itself prevent the exemption."
      },
      {
        "id": "c",
        "text": "The operator has read the CFTC rules before forming the pool.",
        "isCorrect": false,
        "rationale": "Regulatory awareness does not prevent the exemption."
      },
      {
        "id": "d",
        "text": "The pool has fewer than 15 participants and total gross capital contributions within the rule's limit.",
        "isCorrect": false,
        "rationale": "Those facts are consistent with the exemption rather than preventing it."
      }
    ],
    "explanation": "CFTC Regulation 4.13(a)(2) includes two core limits: no pool operated by the person has more than 15 participants, and total gross capital contributions for all pools do not exceed $400,000, subject to stated exclusions. Exceeding the participant limit would generally defeat that exemption.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-239; sequence 239; source code 10_DI_24. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "239",
    "sourceQuestionNumber": 238,
    "sourceCode": "10_DI_24",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-239",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "promotional-material",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "In regard to statements of opinion in promotional materials, NFA rules require that:",
    "choices": [
      {
        "id": "a",
        "text": "Opinions must be contained in a separate section of the promotional material.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-29 does not require opinions to be contained in a separate section of the promotional material."
      },
      {
        "id": "b",
        "text": "Opinions must be clearly identified as such and have a reasonable basis in fact.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 requires statements of opinion in promotional material to be clearly identifiable as such and to have a reasonable basis in fact."
      },
      {
        "id": "c",
        "text": "Opinions need only be clearly identified as opinions, with no factual basis requirement.",
        "isCorrect": false,
        "rationale": "The rule requires both clear identification as opinion and a reasonable basis in fact."
      },
      {
        "id": "d",
        "text": "Opinions must be contained in a separate section and have a reasonable basis in fact.",
        "isCorrect": false,
        "rationale": "Although a reasonable basis in fact is required, a separate section is not required."
      }
    ],
    "explanation": "NFA Rule 2-29, Communications with the Public and Promotional Material, requires that statements of opinion included in promotional material must be clearly identifiable as such and must have a reasonable basis in fact. It does not require that opinions appear in a separate section of the promotional material.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-240; sequence 240; source code 10_DI_22.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Source used combination answer choices, including 'A, B and C' and 'B and C, only.' The app-ready version rewrites these into standalone semantic choices while preserving the tested rule and the single correct answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "240",
    "sourceQuestionNumber": 239,
    "sourceCode": "10_DI_22",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-240",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "The registration of an Associated Person is contingent upon the sponsoring registrant's hiring or otherwise employing the applicant within:",
    "choices": [
      {
        "id": "a",
        "text": "30 days.",
        "isCorrect": true,
        "rationale": "An AP's sponsor must certify that it intends to hire or otherwise employ the applicant as an AP within 30 days of receiving notification of registration."
      },
      {
        "id": "b",
        "text": "60 days.",
        "isCorrect": false,
        "rationale": "The required period shown in the source is 30 days, not 60 days."
      },
      {
        "id": "c",
        "text": "90 days.",
        "isCorrect": false,
        "rationale": "The required period shown in the source is 30 days, not 90 days."
      },
      {
        "id": "d",
        "text": "Six months.",
        "isCorrect": false,
        "rationale": "The required period shown in the source is 30 days, not six months."
      }
    ],
    "explanation": "An AP's sponsor must sign a certification stating that it intends to hire or otherwise employ the applicant as an AP within 30 days of receipt of notification of registration. The sponsor also must notify the CFTC/NFA if the AP is not hired.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-241; sequence 241; source code 10_DI_14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Question, choices, correct answer, and explanation are clearly visible. The terminology is consistent with Associated Person registration sponsorship requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "241",
    "sourceQuestionNumber": 240,
    "sourceCode": "10_DI_14",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-241",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "A CPO's Disclosure Document cannot be older than:",
    "choices": [
      {
        "id": "a",
        "text": "Three months.",
        "isCorrect": false,
        "rationale": "A CPO Disclosure Document generally must be current within 12 months, not three months."
      },
      {
        "id": "b",
        "text": "Six months.",
        "isCorrect": false,
        "rationale": "Six months is not the maximum age shown by the source for a CPO Disclosure Document."
      },
      {
        "id": "c",
        "text": "Nine months.",
        "isCorrect": false,
        "rationale": "Nine months is not the maximum age shown by the source for a CPO Disclosure Document."
      },
      {
        "id": "d",
        "text": "Twelve months.",
        "isCorrect": true,
        "rationale": "A CPO's Disclosure Document must be updated at least every twelve months, and more frequently if material changes require disclosure."
      }
    ],
    "explanation": "A CPO's Disclosure Document must be updated at least every twelve months, and may require more frequent updates if there are material changes that must be disclosed.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-242; sequence 242; source code 10_DI_37.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. Minor possessive punctuation corrected for app-ready wording without changing meaning.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "242",
    "sourceQuestionNumber": 241,
    "sourceCode": "10_DI_37",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-242",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "discretionary-accounts",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "When a futures or options account is controlled by a third-party account controller who is not an associated person of the FCM or IB, what documentation must the FCM or IB obtain under NFA discretionary account rules?",
    "choices": [
      {
        "id": "a",
        "text": "No additional documentation is required if the customer has already opened the account with the FCM or IB.",
        "isCorrect": false,
        "rationale": "NFA discretionary account rules require additional documentation for third-party controlled accounts."
      },
      {
        "id": "b",
        "text": "Only a copy of the account controller's trading authorization, or a customer acknowledgment that the authorization has been given.",
        "isCorrect": false,
        "rationale": "This authorization documentation is required, but it is not the only required documentation."
      },
      {
        "id": "c",
        "text": "Only a customer acknowledgment that the customer received the account controller's disclosure document or a written explanation of why no disclosure document is required.",
        "isCorrect": false,
        "rationale": "This customer acknowledgment is required, but it is not the only required documentation."
      },
      {
        "id": "d",
        "text": "Documentation of the account controller's trading authorization, plus the customer's acknowledgment that the customer received the required disclosure document or written explanation of why one is not required.",
        "isCorrect": true,
        "rationale": "For third-party controlled discretionary accounts, the FCM or IB must obtain both the authorization-related documentation and the customer acknowledgment regarding the disclosure document or written explanation."
      }
    ],
    "explanation": "For discretionary accounts controlled by a third party, NFA Rule 2-8 requires the FCM or IB to obtain two types of documentation: first, a copy of the account controller's written trading authorization or an acknowledgment from the customer that the authorization has been given; and second, an acknowledgment from the customer that the customer received the account controller's disclosure document or a written statement explaining why a disclosure document is not required.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-243; sequence 243; source code 10_DI_21.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The original source is clear and the answer has been rewritten to eliminate the banned 'Both B and C' format. Each answer choice is standalone and exactly one choice is correct. Repair: Rewrote the stem and answer choices into standalone app-ready wording while preserving the tested NFA discretionary account documentation requirement. Removed the cross-reference answer format. Second-pass review: The repaired item is clear, has exactly one unambiguous correct answer, avoids all/none/both formats, and all choices are standalone. The rationales and explanation consistently support the correct answer. The regulatory statement aligns with NFA discretionary account documentation requirements for third-party account controllers, and the taxonomy is appropriate. No calculation issues are present.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 repair + second-pass audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "243",
    "sourceQuestionNumber": 242,
    "sourceCode": "10_DI_21",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-243",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "What is the core effect of CFTC Regulation 4.7 for CPOs and CTAs dealing only with qualified eligible persons?",
    "choices": [
      {
        "id": "a",
        "text": "It can provide exemptions from specified Part 4 disclosure, reporting, and recordkeeping requirements when the rule's conditions are satisfied.",
        "isCorrect": true,
        "rationale": "Regulation 4.7 provides targeted relief for CPOs and CTAs operating with qualified eligible persons."
      },
      {
        "id": "b",
        "text": "It automatically exempts the firm from all CFTC and NFA rules.",
        "isCorrect": false,
        "rationale": "The relief is specific and conditional, not a blanket exemption from all regulation."
      },
      {
        "id": "c",
        "text": "It applies to any retail customer who signs a waiver.",
        "isCorrect": false,
        "rationale": "The rule is tied to qualified eligible persons and specified conditions."
      },
      {
        "id": "d",
        "text": "It eliminates anti-fraud obligations.",
        "isCorrect": false,
        "rationale": "Anti-fraud obligations remain."
      }
    ],
    "explanation": "CFTC Regulation 4.7 gives qualifying CPOs and CTAs relief from specified Part 4 requirements for pools or accounts limited to qualified eligible persons. It is conditional relief, not a blanket exemption from all CFTC/NFA obligations.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-244; sequence 244; source code 10_DI_43. Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "244",
    "sourceQuestionNumber": 243,
    "sourceCode": "10_DI_43",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit"
  },
  {
    "id": "s3-regulatory-pdf-244",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "A commodity pool includes any investment trust, syndicate or similar form of enterprise operated for the purpose of trading commodity interests by pooling funds of customers.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A commodity pool is an enterprise, such as an investment trust, syndicate, or similar form of enterprise, operated for the purpose of trading commodity interests by pooling customer funds."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement accurately describes a commodity pool."
      }
    ],
    "explanation": "A commodity pool includes any investment trust, syndicate or similar form of enterprise operated for the purpose of trading commodity interests by pooling funds of customers.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-245; sequence 245; source code 10_DI_31.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item. The source answer identifies A as correct, and the definition is consistent with commodity pool terminology.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "245",
    "sourceQuestionNumber": 244,
    "sourceCode": "10_DI_31",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-245",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "customer-information",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "If a U.S. customer refuses to provide certain customer information requested pursuant to NFA Rule 2-30 (Customer Information and Risk Disclosure), the FCM or IB must:",
    "choices": [
      {
        "id": "a",
        "text": "Refuse to accept the account.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-30 does not require the firm to automatically refuse the account solely because the U.S. customer declines to provide some requested information."
      },
      {
        "id": "b",
        "text": "Make a written notation to that effect and may accept the account only upon the approval of a designated officer of the NFA member firm.",
        "isCorrect": true,
        "rationale": "For a U.S. customer who refuses to provide requested Rule 2-30 customer information, the member or associate must make a written notation of the refusal and the account may be accepted only with approval by an officer or supervisor of the firm."
      },
      {
        "id": "c",
        "text": "Provide a specific NFA notice to the customer.",
        "isCorrect": false,
        "rationale": "The required procedure is documentation of the refusal and supervisory approval, not providing a special NFA notice."
      },
      {
        "id": "d",
        "text": "Take no special action.",
        "isCorrect": false,
        "rationale": "Special action is required: a written notation must be made and officer or supervisor approval is needed before accepting the account."
      }
    ],
    "explanation": "If a U.S. customer refuses to provide requested information under NFA Rule 2-30, the NFA member or associate must make a written notation to that effect and may accept the account only with approval from an officer or supervisor of the firm. The screen also notes that this written-notation requirement does not apply in the same way to a non-U.S. person, and that CFTC regulations require FCMs, IBs, and exchange members to obtain, at a minimum, the true name and address and principal occupation or business of the person for whom the account is carried or introduced.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-246; sequence 246; source code 10_DI_20.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. Minor visible typo in source choice B ('affect' for 'effect') was corrected in the app-ready version because the intended wording is clear from the explanation and regulatory context.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "246",
    "sourceQuestionNumber": 245,
    "sourceCode": "10_DI_20",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-246",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "An Associated Person may have a dual or multiple association with more than one sponsoring registrant if the new sponsor files the proper forms and if:",
    "choices": [
      {
        "id": "a",
        "text": "One of the sponsors agrees to take full responsibility for the AP's employment activities.",
        "isCorrect": false,
        "rationale": "Dual or multiple association does not rest on only one sponsor taking responsibility; each sponsor must accept responsibility for the AP's conduct."
      },
      {
        "id": "b",
        "text": "The original sponsor agrees to take full responsibility.",
        "isCorrect": false,
        "rationale": "The requirement is not that only the original sponsor takes full responsibility."
      },
      {
        "id": "c",
        "text": "Each sponsor accepts joint and several responsibility.",
        "isCorrect": true,
        "rationale": "For an AP with dual or multiple affiliations, each sponsor must acknowledge supervisory responsibility and joint and several responsibility for the AP's conduct."
      },
      {
        "id": "d",
        "text": "The NFA grants an exemption from the dual affiliation prohibition.",
        "isCorrect": false,
        "rationale": "The stated condition is each sponsor's joint and several responsibility, not an NFA exemption from a dual-affiliation prohibition."
      }
    ],
    "explanation": "In cases of dual affiliation of an AP, each sponsor must acknowledge that, in addition to each sponsor's responsibility to supervise the AP, each sponsor is jointly and severally responsible for the AP's conduct.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-247; sequence 247; source code 10_DI_26.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and unambiguous. The displayed answer and explanation support choice C.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "247",
    "sourceQuestionNumber": 246,
    "sourceCode": "10_DI_26",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-247",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In regard to directing a client's trading account, a CTA must provide the prospective client with a disclosure document:",
    "choices": [
      {
        "id": "a",
        "text": "Prior to the opening of an account at an FCM or IB.",
        "isCorrect": false,
        "rationale": "The disclosure document timing is tied to solicitation or entering into the advisory agreement, not merely opening an account at an FCM or IB."
      },
      {
        "id": "b",
        "text": "Before entering into an agreement or engaging in the solicitation of business.",
        "isCorrect": true,
        "rationale": "CTAs directing client accounts must deliver the disclosure document at or before the earlier of soliciting the prospective client or entering into the agreement to direct the account."
      },
      {
        "id": "c",
        "text": "Prior to execution of the first order.",
        "isCorrect": false,
        "rationale": "Providing the disclosure document before the first order would be too late if solicitation or the agreement occurred earlier."
      },
      {
        "id": "d",
        "text": "Within 30 days of the initial solicitation of the account.",
        "isCorrect": false,
        "rationale": "The document must be delivered at or before solicitation or entering into the agreement, not within 30 days after solicitation."
      }
    ],
    "explanation": "CFTC regulations require CTAs directing clients' trading accounts to deliver a disclosure document for the trading program to a prospective client at or before the earlier of the time the CTA solicits the client or enters into the agreement to direct the client's account.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-248; sequence 248; source code 10_DI_6.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable and internally consistent. The answer and explanation support choice B.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "248",
    "sourceQuestionNumber": 247,
    "sourceCode": "10_DI_6",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-248",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Since CPO Disclosure Documents are legal documents they generally contain a lot of legal jargon and technical terms that prevent them from being written in a plain English format.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "NFA Rule 2-35 requires CPO/CTA Disclosure Documents to be as clear and concise as possible, using plain English principles."
      }
    ],
    "explanation": "NFA Rule 2-35 requires CPO/CTA Disclosure Documents to be as clear and concise as possible, using plain English principles. Therefore, the statement is false.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-249; sequence 249; source code 10_DI_39.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with answer and explanation visible. Concept is consistent with disclosure document plain-English requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "249",
    "sourceQuestionNumber": 248,
    "sourceCode": "10_DI_39",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-249",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Copies of CTA and CPO Disclosure Documents must be submitted to the NFA and a letter of acceptance received back before the documents may be used.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CTA and CPO disclosure documents generally must be filed with NFA and accepted before they are used with prospective clients or pool participants."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is incorrect because the source states that NFA submission and receipt of an acceptance letter are required before use."
      }
    ],
    "explanation": "Copies of CTA and CPO Disclosure Documents must be submitted to the NFA and a letter of acceptance received back before the documents may be used.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-250; sequence 250; source code 10_DI_33.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "Readable true/false item with one clearly indicated correct answer. Terminology is consistent with CTA/CPO disclosure document filing and NFA acceptance requirements.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
    "issueTypes": [],
    "extractionConfidence": "high",
    "sourcePageRange": "250",
    "sourceQuestionNumber": 249,
    "sourceCode": "10_DI_33",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  }
];
