import type { Question } from "../types";

export const regulatoryPdfQuestions: Question[] = [
  {
    "id": "s3-regulatory-pdf-001",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "associated-person",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "The Associated Person registration category applies to persons associated, in a position requiring registration, with:",
    "choices": [
      {
        "id": "a",
        "text": "FCMs and IBs.",
        "isCorrect": false,
        "rationale": "This is only partially correct; associated persons may be associated with FCMs and IBs, but also with CTAs and CPOs."
      },
      {
        "id": "b",
        "text": "Designated exchanges.",
        "isCorrect": false,
        "rationale": "Associated Person registration does not apply merely because a person is associated with a designated exchange."
      },
      {
        "id": "c",
        "text": "CTAs and CPOs.",
        "isCorrect": false,
        "rationale": "This is only partially correct; associated persons may be associated with CTAs and CPOs, but also with FCMs and IBs."
      },
      {
        "id": "d",
        "text": "A, B and C.",
        "isCorrect": false,
        "rationale": "This incorrectly includes designated exchanges."
      },
      {
        "id": "e",
        "text": "A and C, only",
        "isCorrect": true,
        "rationale": "The source identifies E as correct. The explanation states that AP registration applies to persons associated in a registered capacity with FCMs, IBs, CTAs, CPOs, and Leverage Transaction Merchants."
      }
    ],
    "explanation": "The Associated Person registration category applies to persons associated in a registered capacity with FCMs, IBs, CTAs, CPOs, and Leverage Transaction Merchants. Among the listed choices, that corresponds to FCMs and IBs, and CTAs and CPOs, but not designated exchanges.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-001; sequence 1; source code 10_EZ_31.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The item is readable and the stated answer is clear, but the correct choice uses a reference-style answer choice, \"A and C, only,\" which is not app-ready under the provided rules unless safely rewritten. The source also mentions Leverage Transaction Merchants in the explanation, but they are not included as a standalone answer choice.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "1",
    "sourceQuestionNumber": 1,
    "sourceCode": "10_EZ_31",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "Which of the following is an \"Intermediary\" under the Commodity Exchange Act?",
    "choices": [
      {
        "id": "a",
        "text": "FCM.",
        "isCorrect": false,
        "rationale": "An FCM is an intermediary, but this choice alone is incomplete because an IB is also an intermediary."
      },
      {
        "id": "b",
        "text": "IB.",
        "isCorrect": false,
        "rationale": "An IB is an intermediary, but this choice alone is incomplete because an FCM is also an intermediary."
      },
      {
        "id": "c",
        "text": "Exchange.",
        "isCorrect": false,
        "rationale": "An exchange is not classified as an intermediary in this context."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": false,
        "rationale": "This is incorrect because an exchange is not an intermediary in this context."
      },
      {
        "id": "e",
        "text": "FCM and IB only.",
        "isCorrect": true,
        "rationale": "Both futures commission merchants (FCMs) and introducing brokers (IBs) are intermediaries under the Commodity Exchange Act."
      }
    ],
    "explanation": "Both futures commission merchants (FCMs) and introducing brokers (IBs) are considered intermediaries under the Commodity Exchange Act; an exchange is not included in that category for this question.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-007; sequence 7; source code 10_EZ_70.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source uses a referential answer choice, \"A and B only.\" It was safely rewritten as \"FCM and IB only,\" but the item still depends on a combined-choice format and should be reviewed before use. The visible answer and explanation are consistent.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "7",
    "sourceQuestionNumber": 7,
    "sourceCode": "10_EZ_70",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-008",
    "sectionId": "us_regulations",
    "topicId": "arbitration-discipline",
    "subtopicId": "commodity-exchange-act-enforcement",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Persons found to have violated the Commodity Exchange Act may be subject to:",
    "choices": [
      {
        "id": "a",
        "text": "Revocation of registration.",
        "isCorrect": false,
        "rationale": "This is one possible sanction for violations of the Commodity Exchange Act, but it is not the only sanction listed."
      },
      {
        "id": "b",
        "text": "Monetary fines.",
        "isCorrect": false,
        "rationale": "This is one possible sanction for violations of the Commodity Exchange Act, but it is not the only sanction listed."
      },
      {
        "id": "c",
        "text": "Criminal prosecution.",
        "isCorrect": false,
        "rationale": "This is one possible consequence for violations of the Commodity Exchange Act, but it is not the only sanction listed."
      },
      {
        "id": "d",
        "text": "Federal court injunction.",
        "isCorrect": false,
        "rationale": "This is one possible remedy for violations of the Commodity Exchange Act, but it is not the only sanction listed."
      },
      {
        "id": "e",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "Violations of the Commodity Exchange Act may result in revocation of registration, monetary fines, criminal prosecution, federal court injunctions, and other sanctions such as cease-and-desist orders."
      }
    ],
    "explanation": "All of the referenced sanctions, as well as cease and desist orders, are provided for violations of the Commodity Exchange Act.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-008; sequence 8; source code 10_EZ_39.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the stated answer is legally/conceptually consistent. However, the source uses an 'All of the above' answer choice, which is disfavored for app-ready QCMs under the instructions unless safely rewritten; semantic rewriting would require restructuring the choices, so this item is marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "8",
    "sourceQuestionNumber": 8,
    "sourceCode": "10_EZ_39",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "questionType": "true_false",
    "stem": "Any person, other than a commodity pool's CPO, with authority to allocate pool assets to CTAs or investee pools is known as a \"trading manager\" and must be registered.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A trading manager is described as a person, other than the pool's CPO, with authority to allocate pool assets to CTAs or investee pools; the explanation states that CFTC regulations require trading managers to register as CTAs."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement is consistent with the source explanation, which identifies the correct answer as True."
      }
    ],
    "explanation": "Any person, other than a commodity pool's CPO, with authority to allocate pool assets to CTAs or investee pools is known as a trading manager. CFTC regulations require trading managers to register as commodity trading advisors.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-014; sequence 14; source code 10_EZ_51.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source marks True as correct. However, the statement uses specific CFTC registration terminology for 'trading managers' that may require current-rule verification before being treated as app-verified content.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "14",
    "sourceQuestionNumber": 14,
    "sourceCode": "10_EZ_51",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "In lieu of providing a prospective customer with a separate CFTC futures risk-disclosure statement (CFTC Regulation 1.55) and an options risk-disclosure statement (CFTC Regulation 33.7), an FCM or IB may provide a customer with the multi-jurisdictional, \"generic risk-disclosure statement.\"",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CFTC regulations permit use of the multi-jurisdictional generic risk-disclosure statement instead of separate futures and commodity options risk-disclosure statements."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This is false because the generic risk-disclosure statement may be used in lieu of separate futures and commodity options risk-disclosure statements."
      }
    ],
    "explanation": "CFTC regulations permit the use of the multi-jurisdictional \"generic risk-disclosure statement\" in lieu of separate futures and commodity options risk-disclosure statements.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-019; sequence 19; source code 10_EZ_52.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and internally consistent, but the cited regulatory framework appears dated. CFTC risk disclosure rules have been amended since the source material; verify current applicability of references to CFTC Regulations 1.55 and 33.7 and the multi-jurisdictional generic risk-disclosure statement before marking as verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "19",
    "sourceQuestionNumber": 19,
    "sourceCode": "10_EZ_52",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Hypothetical trading results cannot be presented for any trading program that has:",
    "choices": [
      {
        "id": "a",
        "text": "At least three years of actual client trading results.",
        "isCorrect": false,
        "rationale": "A program with three years of actual client trading results exceeds the threshold, but this is not the specific regulatory threshold tested by the source item."
      },
      {
        "id": "b",
        "text": "At least three months of actual client or proprietary trading results.",
        "isCorrect": true,
        "rationale": "Hypothetical trading results may not be presented for a trading program that has at least three months of actual client or proprietary trading results."
      },
      {
        "id": "c",
        "text": "At least six months of client, but not proprietary trading results.",
        "isCorrect": false,
        "rationale": "The threshold is at least three months, and it may be based on actual client or proprietary trading results."
      },
      {
        "id": "d",
        "text": "At least six months of client or proprietary trading results.",
        "isCorrect": false,
        "rationale": "Six months is longer than the threshold; the rule tested uses at least three months of actual client or proprietary trading results."
      }
    ],
    "explanation": "Hypothetical trading results may not be presented for any trading program that has at least three months of actual client or proprietary trading results.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-021; sequence 21; source code 10_EZ_64.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source marks B as correct. However, rules governing hypothetical performance presentation have changed over time and may be more nuanced under current NFA/CFTC promotional material and performance reporting requirements, so this legacy item should be reviewed before being treated as current exam content.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "21",
    "sourceQuestionNumber": 21,
    "sourceCode": "10_EZ_64",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "In order to trade for a customer's account, an FCM, IB, or AP must have which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "Specific customer instructions as to the precise commodity interest and amount to be purchased or sold",
        "isCorrect": false,
        "rationale": "This is one valid form of specific authorization, but the source's keyed answer also includes written discretionary account trading authorization."
      },
      {
        "id": "b",
        "text": "A written discretionary account trading authorization",
        "isCorrect": false,
        "rationale": "This is one valid form of authorization, but the source's keyed answer also includes specific customer instructions for each order."
      },
      {
        "id": "c",
        "text": "General instructions as to which commodity to trade",
        "isCorrect": false,
        "rationale": "General instructions are not sufficient; the authorization must be specific for each order or must be written discretionary trading authorization."
      },
      {
        "id": "d",
        "text": "Any of the above",
        "isCorrect": false,
        "rationale": "General instructions alone are not sufficient, so not all listed alternatives are acceptable."
      },
      {
        "id": "e",
        "text": "A or B",
        "isCorrect": true,
        "rationale": "CFTC Rule 166.2 permits trading for a customer's account if the FCM, IB, or AP has specific authorization for the order or written discretionary trading authorization."
      }
    ],
    "explanation": "CFTC Rule 166.2 (Authorization to Trade) requires FCMs, IBs, or their APs to have either specific authorization for each order or written trading authorization to effect transactions in commodity interests on behalf of a customer. Specific authorization must identify the precise commodity interest and the exact amount to be purchased or sold.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-033; sequence 33; source code 10_EZ_56.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "Readable and the keyed answer is consistent with the explanation, but the correct answer choice is a referential combination choice, \"A or B.\" The prompt rules discourage app-ready choices such as references to other choices; it should be rewritten into a standalone answer before verification.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "33",
    "sourceQuestionNumber": 33,
    "sourceCode": "10_EZ_56",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "qualityNotes": "Readable true/false item with a single correct answer shown. Terminology and regulatory concept are consistent with exchange trade execution rules and permitted exceptions under written exchange rules. Duplicate review: Exact duplicate of s3-regulatory-pdf-143.",
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
    "subtopicId": "speculative-position-limits",
    "difficulty": "easy",
    "questionType": "true_false",
    "stem": "Changes in exchange rules fixing maximum daily price limits must be approved by the CFTC.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Designated contract market rule changes regarding maximum daily price limits are regulatory rule changes that must be submitted for CFTC review/approval under the framework described by the source."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The source states that such changes must be submitted to and approved by the CFTC."
      }
    ],
    "explanation": "Changes in exchange rules fixing maximum daily price limits must be submitted to, and approved by, the CFTC.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-048; sequence 48; source code 10_EZ_7.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is fully readable and internally consistent, with A/True shown as correct. However, the regulatory statement may be outdated or oversimplified under current CFTC self-certification/prior-approval procedures for exchange rule amendments, so it should be reviewed before being marked verified for a current Series 3 item bank.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "48",
    "sourceQuestionNumber": 48,
    "sourceCode": "10_EZ_7",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "questionType": "true_false",
    "stem": "Ethics training, while a good business practice, is not required by U.S. law for registered futures professionals.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "Ethics training is not merely a voluntary good business practice; the source states that CFTC regulations require individual registrants to receive ethics training."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "CFTC regulations require registrants who are individuals to receive ethics training so they understand their public responsibilities under the Commodity Exchange Act and applicable CFTC, exchange, NFA, federal, and state rules."
      }
    ],
    "explanation": "The statement is false. The source explanation states that CFTC regulations require individual registrants to receive ethics training regarding their responsibilities to the public, including just and equitable principles of trade and applicable laws, rules, and regulations.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-057; sequence 57; source code 10_EZ_49.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the answer is clear. However, the regulatory premise may be outdated because the CFTC's former explicit ethics training rule requirements have changed over time; this should be checked against current Series 3/NFA/CFTC requirements before marking verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "57",
    "sourceQuestionNumber": 57,
    "sourceCode": "10_EZ_49",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "qualityNotes": "Readable true/false item with a clear displayed correct answer and supporting explanation. The rule concept is consistent with customer segregated funds requirements for FCMs. Duplicate review: Exact duplicate of s3-regulatory-pdf-043.",
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
    "qualityNotes": "Question, answer, and explanation are legible. True/False format is valid and exactly one answer is correct. Regulatory concept is consistent: competitive execution is required unless a permitted exception is executed under approved exchange rules. Duplicate review: Exact duplicate of s3-regulatory-pdf-143.",
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
    "stem": "In NFA arbitration:",
    "choices": [
      {
        "id": "a",
        "text": "Proceedings are informal.",
        "isCorrect": false,
        "rationale": "This statement is a characteristic of NFA arbitration, but the source's correct choice is the inclusive option."
      },
      {
        "id": "b",
        "text": "Parties may be represented by an attorney.",
        "isCorrect": false,
        "rationale": "This statement is a characteristic of NFA arbitration, but the source's correct choice is the inclusive option."
      },
      {
        "id": "c",
        "text": "Awards of the panel may be enforced by a court.",
        "isCorrect": false,
        "rationale": "This statement is a characteristic of NFA arbitration, but the source's correct choice is the inclusive option."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "The source states that all listed statements are characteristics that apply to NFA arbitration."
      }
    ],
    "explanation": "All of the listed statements are characteristics that apply to NFA arbitration: proceedings are informal, parties may be represented by an attorney, and panel awards may be enforced by a court.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-076; sequence 76; source code 10_EZ_14.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the stated answer is clear, but the item relies on an 'All of the above' answer choice. The instruction says to avoid such choices unless safely rewritten semantically; because the source format is preserved here and alternatives A, B, and C are each true, the app-ready item should be reviewed or rewritten before verification.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "76",
    "sourceQuestionNumber": 76,
    "sourceCode": "10_EZ_14",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "In regard to written customer options trading complaints, NFA rules require member FCMs and IBs to retain all written complaints and to:",
    "choices": [
      {
        "id": "a",
        "text": "Make and retain a record of the date the complaint was received, the Associated Person who serviced the account, a general description of the material complained of, and what, if any, action was taken.",
        "isCorrect": true,
        "rationale": "NFA recordkeeping rules require member FCMs and IBs to retain the written complaint and a record of when it was received, the Associated Person involved, the general nature of the complaint, and any action taken."
      },
      {
        "id": "b",
        "text": "Immediately forward all such complaints to the NFA for review.",
        "isCorrect": false,
        "rationale": "The requirement shown is to retain and document the complaint, not to immediately forward all complaints to NFA."
      },
      {
        "id": "c",
        "text": "Fill out a CFTC customer complaint form and advise the customer of CFTC reparations.",
        "isCorrect": false,
        "rationale": "The shown NFA requirement concerns complaint retention and related records, not completing a CFTC form or advising on reparations."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": false,
        "rationale": "This cannot be correct because the forwarding and CFTC-form actions are not part of the stated requirement."
      }
    ],
    "explanation": "The NFA requires member FCMs and IBs to retain copies of all written customer options trading complaints and to make and retain a record of the date the complaint was received, the Associated Person who serviced the account, a general description of the matter complained of, and what, if any, action was taken in regard to the complaint.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-080; sequence 80; source code 10_IM_59.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The item is readable and the stated answer is consistent with the displayed explanation. However, the source uses an 'All of the above' choice, which is discouraged for app-ready QCM format unless safely rewritten; no safe semantic rewrite is available from the visible text without inventing a new distractor.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "80",
    "sourceQuestionNumber": 80,
    "sourceCode": "10_IM_59",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
        "rationale": "NFA Rule 2-29 retention is measured from the date of last use, not publication or first use, and the period stated here is not the rule shown."
      },
      {
        "id": "b",
        "text": "Three years from the date of last use.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 requires copies of promotional material and the record of review and approval to be maintained and available for NFA examination for three years from the date of last use."
      },
      {
        "id": "c",
        "text": "Five years from the date of last use and be readily accessible during the first two years of the five-year period.",
        "isCorrect": false,
        "rationale": "This resembles a different recordkeeping formulation, but it is not the promotional-material retention period stated in NFA Rule 2-29 as shown."
      },
      {
        "id": "d",
        "text": "One year from the date of last use.",
        "isCorrect": false,
        "rationale": "One year is shorter than the required three-year retention period from the date of last use."
      }
    ],
    "explanation": "NFA Rule 2-29, Communications with the Public and Promotional Material, requires copies of promotional material, along with a record of the firm's review and approval, to be maintained and available for NFA examination for three years from the date of last use.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-085; sequence 85; source code 10_IM_52.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the keyed answer is clear. However, current NFA Compliance Rule 2-29 promotional material recordkeeping is generally understood to require records to be kept for five years from the date of last use and readily accessible during the first two years, making the source's keyed answer likely outdated. Choice C appears to reflect the current five-year/two-year standard. Marked needs_review rather than verified due to likely outdated rule content.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "85",
    "sourceQuestionNumber": 85,
    "sourceCode": "10_IM_52",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "If a CPO charges incentive fees based on an increase in the value of the pool, then the CPO must specify which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "How the increase in value of the pool will be calculated.",
        "isCorrect": false,
        "rationale": "This must be specified, but the source's credited answer includes all listed items."
      },
      {
        "id": "b",
        "text": "The period of time during which the increase is calculated.",
        "isCorrect": false,
        "rationale": "This must be specified, but the source's credited answer includes all listed items."
      },
      {
        "id": "c",
        "text": "The fee to be charged at the end of the specified time period.",
        "isCorrect": false,
        "rationale": "This must be specified, but the source's credited answer includes all listed items."
      },
      {
        "id": "d",
        "text": "The value of the pool at which payment of the fee commences.",
        "isCorrect": false,
        "rationale": "This must be specified, but the source's credited answer includes all listed items."
      },
      {
        "id": "e",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "A CPO charging incentive fees based on an increase in pool value must disclose each of these items."
      }
    ],
    "explanation": "All of the listed items must be specified in a disclosure document if the CPO charges incentive fees.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-092; sequence 92; source code 10_IM_88.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The item is readable and the regulatory concept appears consistent, but the source uses an 'All of the above' answer choice. Per audit rules, such answer choices should be avoided unless safely rewritten semantically; therefore not marked verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "92",
    "sourceQuestionNumber": 92,
    "sourceCode": "10_IM_88",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "explanation": "NFA arbitration rules require a notice of intent to arbitrate to be received by the NFA within two years from the date when the filing party knew or should have known of the act or transaction that is the subject of the controversy. The source also states that the same two-year time limitation applies to filing CFTC reparations claims.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-097; sequence 97; source code 10_IM_57.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and internally consistent, with exactly one indicated correct answer. However, the regulatory statement appears potentially outdated or at least requires current-rule verification: NFA arbitration eligibility/time-limit rules and CFTC reparations limitations may not be accurately summarized as the same two-year limit under current rules. Marked needs_review per instruction for uncertain or outdated regulations.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "97",
    "sourceQuestionNumber": 97,
    "sourceCode": "10_IM_57",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "A floor broker can accept orders as a cross-trade:",
    "choices": [
      {
        "id": "a",
        "text": "Only for hedge accounts.",
        "isCorrect": false,
        "rationale": "Cross-trade acceptance is not limited only to hedge accounts."
      },
      {
        "id": "b",
        "text": "Only against proprietary trades.",
        "isCorrect": false,
        "rationale": "The rule shown does not limit cross-trades to proprietary trades."
      },
      {
        "id": "c",
        "text": "In accordance with the written rules of a particular exchange.",
        "isCorrect": true,
        "rationale": "Cross-trades may be executed only in accordance with written exchange rules that have been approved by the CFTC."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": false,
        "rationale": "Because choices A and B are not correct limitations, 'All of the above' is not correct."
      }
    ],
    "explanation": "Cross-trades may only be executed in accordance with written exchange rules that have been approved by the CFTC.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-108; sequence 108; source code 10_IM_61.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source is readable and the stated correct answer is consistent with the explanation. However, the question uses an 'All of the above' answer choice, which the audit rules discourage unless it can be safely rewritten; it has been preserved in the transcript/app record and therefore marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "108",
    "sourceQuestionNumber": 108,
    "sourceCode": "10_IM_61",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-109",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "risk-disclosure",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "With passage of the Dodd-Frank Act, which of the following are now included within the definition of \"derivative\"?",
    "choices": [
      {
        "id": "a",
        "text": "Futures and options on futures.",
        "isCorrect": false,
        "rationale": "This is included, but it is not the only listed product included within the definition."
      },
      {
        "id": "b",
        "text": "Retail foreign exchange contracts.",
        "isCorrect": false,
        "rationale": "This is included, but it is not the only listed product included within the definition."
      },
      {
        "id": "c",
        "text": "Swaps.",
        "isCorrect": false,
        "rationale": "This is included, but it is not the only listed product included within the definition."
      },
      {
        "id": "d",
        "text": "Futures and options on futures, retail foreign exchange contracts, and swaps.",
        "isCorrect": true,
        "rationale": "Under the Dodd-Frank Act, all three listed categories are included within the definition of a derivative."
      }
    ],
    "explanation": "Under the Dodd-Frank Act, futures, options on futures, retail foreign exchange contracts, and swaps all fall within the definition of a derivative.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-109; sequence 109; source code 10_IM_123.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source question is readable and the displayed answer is clear. However, the source uses an 'All of the above' answer choice; it has been rewritten semantically for app use. Taxonomy is problematic because the allowed U.S. Regulations subtopics do not include a precise derivatives/Dodd-Frank definitions category, and 'general-futures-terminology' is only available under Market Knowledge, not U.S. Regulations.",
    "issueTypes": [
      "wrong_taxonomy"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "109",
    "sourceQuestionNumber": 109,
    "sourceCode": "10_IM_123",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "questionType": "true_false",
    "stem": "Research analysts can be directly under the control and supervision of the trading department, provided that the NFA has approved the firm's procedures that provide sufficient safeguard.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "CFTC conflict-of-interest rules prohibit research analysts from being under the direct control or supervision of trading or clearing departments."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "Research analysts cannot be under the control and supervision of trading or clearing departments pursuant to CFTC Regulation 1.71."
      }
    ],
    "explanation": "Research analysts cannot be under the control and supervision of the trading or clearing departments pursuant to CFTC Regulation 1.71, which addresses conflicts of interest between trading and clearing functions and research functions.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-112; sequence 112; source code 10_IM_125.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "Readable true/false item with a clear displayed answer. Marked needs_review because the source explanation calls CFTC Regulation 1.71 \"new\" and the exact current applicability/terminology should be checked before app publication.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "112",
    "sourceQuestionNumber": 112,
    "sourceCode": "10_IM_125",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "An NFA arbitration proceeding is conducted entirely through written submissions in which of the following situations?",
    "choices": [
      {
        "id": "a",
        "text": "The aggregate amount of the claims, exclusive of interest and costs, do not exceed $5,000",
        "isCorrect": false,
        "rationale": "This is one of the situations listed by the source, but the source's correct answer is the combined 'All of the above' option."
      },
      {
        "id": "b",
        "text": "The aggregate amount of the claims, exclusive of interest and costs, are more than $5,000 but do not exceed $10,000 and none of the parties requests an oral hearing.",
        "isCorrect": false,
        "rationale": "This is one of the situations listed by the source, but the source's correct answer is the combined 'All of the above' option."
      },
      {
        "id": "c",
        "text": "The panel has consented to the written agreement of the parties to waive oral hearing.",
        "isCorrect": false,
        "rationale": "This is one of the situations listed by the source, but the source's correct answer is the combined 'All of the above' option."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "The source states that an NFA arbitration will be considered entirely through written submissions under any of the listed three situations."
      }
    ],
    "explanation": "An NFA arbitration will be considered entirely through written submissions under any of the listed three situations.",
    "sourceType": "imported",
    "active": true,
    "concept": "Arbitration, Discipline and Enforcement",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-117; sequence 117; source code 10_IM_89.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The item is readable and the source answer is clear, but the correct answer is 'All of the above,' which the app rules discourage. A reviewer should rewrite the item into a single semantic correct choice before use.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "117",
    "sourceQuestionNumber": 117,
    "sourceCode": "10_IM_89",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "For an AP of an FCM or an IB to accept a discretionary account, which of the following must occur?",
    "choices": [
      {
        "id": "a",
        "text": "The customer must execute a power of attorney or trading authorization, and the AP's supervisor must review all activity in the discretionary account.",
        "isCorrect": true,
        "rationale": "A discretionary account requires written trading authorization from the customer. In addition, the AP's supervisor must review the discretionary account activity. The source also notes a two-year registrant experience requirement, not three years."
      },
      {
        "id": "b",
        "text": "The customer must execute a power of attorney or trading authorization, and the AP handling the account must have at least 3 years of experience.",
        "isCorrect": false,
        "rationale": "The written authorization requirement is correct, but the experience requirement in the source explanation is at least two years as a registrant, not three years."
      },
      {
        "id": "c",
        "text": "The AP handling the account must have at least 3 years of experience, and the AP's supervisor must review all trades executed in the discretionary account.",
        "isCorrect": false,
        "rationale": "Supervisor review is required, but the source explanation states the AP must have been registered and acted as a registrant for at least two years, not three years."
      },
      {
        "id": "d",
        "text": "Only the AP's supervisor review is required; written customer authorization is not required.",
        "isCorrect": false,
        "rationale": "Written customer authorization, such as a power of attorney or trading authorization, is required for a discretionary account."
      },
      {
        "id": "e",
        "text": "Only written customer authorization is required; supervisor review is not required.",
        "isCorrect": false,
        "rationale": "Supervisor review of discretionary account activity is also required."
      }
    ],
    "explanation": "To handle a discretionary account for an FCM or IB, an AP must have written customer authorization, such as a signed power of attorney or trading authorization. The source explanation also states that the AP must have been registered and acted as a registrant for at least two years, and that the AP's supervisor must review all activity in the discretionary account.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-119; sequence 119; source code 10_IM_80.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source uses combination answer choices ('A & B' and 'A & C'), which are not app-preferred. The app-ready version rewrites the choices semantically while preserving the tested concept. Marked needs_review rather than verified because the source answer E omits the two-year registrant requirement that is stated in the explanation and may make the original stem/answer set incomplete depending on interpretation of 'the following must occur.'",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "119",
    "sourceQuestionNumber": 119,
    "sourceCode": "10_IM_80",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-120",
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
        "rationale": "The rule described in the source requires maintaining English translations, not merely being prepared to translate on request."
      },
      {
        "id": "b",
        "text": "Maintain English translations of all foreign language promotional material",
        "isCorrect": true,
        "rationale": "CFTC Rule 1.31 requires English translations to be maintained for foreign-language promotional material, including disclosure documents and websites, that is distributed to or intended for viewing by customers in the United States, its territories, or possessions."
      },
      {
        "id": "c",
        "text": "NFA is not concerned about foreign language translations of documents as translations can be subjective",
        "isCorrect": false,
        "rationale": "The rule specifically requires English translations to be maintained, so regulators are concerned with such materials."
      },
      {
        "id": "d",
        "text": "A and B",
        "isCorrect": false,
        "rationale": "The correct requirement is to maintain English translations; the source identifies only choice B as correct."
      }
    ],
    "explanation": "CFTC Rule 1.31 requires registrants to maintain English translations of foreign-language promotional material, including disclosure documents and websites, distributed to or intended for viewing by customers located in the United States, its territories, or possessions.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-120; sequence 120; source code 10_IM_95.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source is readable and the stated correct answer is clear. However, choice D is an 'A and B' combination choice, which is disallowed for app-ready verified status unless safely rewritten; the semantic rewrite is not performed here because the source uses a referential answer choice.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "120",
    "sourceQuestionNumber": 120,
    "sourceCode": "10_IM_95",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-121",
    "sectionId": "us_regulations",
    "topicId": "general-regulatory",
    "subtopicId": "cftc-registration",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Before a foreign stock-index futures contract can be offered or sold to a U.S. person, the stock-index futures contract must have a no-action letter from the:",
    "choices": [
      {
        "id": "a",
        "text": "SEC.",
        "isCorrect": false,
        "rationale": "The SEC is not the agency identified by the source explanation for the required no-action letter."
      },
      {
        "id": "b",
        "text": "NFA.",
        "isCorrect": false,
        "rationale": "The NFA is not the agency identified by the source explanation for the required no-action letter."
      },
      {
        "id": "c",
        "text": "CFTC.",
        "isCorrect": true,
        "rationale": "Foreign stock-index futures contracts must receive a CFTC no-action letter before they can be offered or sold to a U.S. person."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": false,
        "rationale": "The source identifies only the CFTC as the required issuer of the no-action letter."
      }
    ],
    "explanation": "Foreign stock-index futures contracts must receive a CFTC no-action letter before they can be offered or sold to a U.S. person.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-121; sequence 121; source code 10_IM_29.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is clear. However, the item uses an 'All of the above' distractor, and the foreign stock-index futures no-action framework may be outdated or require legal/regulatory confirmation under current CFTC staff advisories and Part 30/foreign board of trade requirements. Marked needs_review rather than verified.",
    "issueTypes": [
      "outdated_rule",
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "121",
    "sourceQuestionNumber": 121,
    "sourceCode": "10_IM_29",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "Limits on the maximum size of a speculative market position in futures or options contracts are established by which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "CFTC.",
        "isCorrect": false,
        "rationale": "This is only part of the correct response; position limits may be established by the CFTC and by exchanges."
      },
      {
        "id": "b",
        "text": "Futures and options exchanges.",
        "isCorrect": false,
        "rationale": "This is only part of the correct response; position limits may be established by exchanges and by the CFTC."
      },
      {
        "id": "c",
        "text": "NFA.",
        "isCorrect": false,
        "rationale": "The NFA is not identified as the body that establishes these speculative position limits."
      },
      {
        "id": "d",
        "text": "A, B and C.",
        "isCorrect": false,
        "rationale": "This incorrectly includes the NFA."
      },
      {
        "id": "e",
        "text": "A and B. only.",
        "isCorrect": true,
        "rationale": "The CFTC and exchanges have position limit requirements. CFTC regulations set certain specific limits, and exchanges provide position limits or accountability limits for other commodities, subject to CFTC approval."
      }
    ],
    "explanation": "The CFTC and exchanges have position limit requirements. CFTC regulations provide for specific limits for grains, including the soybean complex, and cotton. Exchanges provide position limits or position accountability limits for other commodities. In some cases, both exchange and CFTC limits apply, and exchange position-limit rules and levels must be approved by the CFTC.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-123; sequence 123; source code 10_IM_11.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the stated answer is consistent with the explanation. However, the source uses answer choices that refer to other choices, including 'A, B and C' and 'A and B only,' which are not app-preferred and cannot be safely rewritten semantically without changing the displayed format. Therefore marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "123",
    "sourceQuestionNumber": 123,
    "sourceCode": "10_IM_11",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "qualityNotes": "The source uses \"All of the above\" and \"A and B only\" answer choices. The app-ready version rewrites the correct option semantically to avoid referential choices while preserving the tested concept and exactly one correct answer. Duplicate review: Exact duplicate of s3-regulatory-pdf-130.",
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
    "stem": "A person who, for compensation of profit, engages in the business of advising others, either directly or indirectly through publications, writing or electronic media, as to the value of or the advisability of trading futures is known as:",
    "choices": [
      {
        "id": "a",
        "text": "A Commodity Trading Advisor.",
        "isCorrect": true,
        "rationale": "A Commodity Trading Advisor is a person or firm that, for compensation or profit, advises others about the value of, or advisability of trading in, futures, options on futures, retail off-exchange forex contracts, or swaps."
      },
      {
        "id": "b",
        "text": "A Financial Advisor.",
        "isCorrect": false,
        "rationale": "A financial advisor is not the specific CFTC/NFA registration category described by advice concerning futures trading."
      },
      {
        "id": "c",
        "text": "An Introducing Broker.",
        "isCorrect": false,
        "rationale": "An Introducing Broker solicits or accepts orders but does not accept customer funds; the definition in the question concerns providing trading advice."
      },
      {
        "id": "d",
        "text": "A Commodity Trading Counselor.",
        "isCorrect": false,
        "rationale": "Commodity Trading Counselor is not the regulatory registration category described; the correct term is Commodity Trading Advisor."
      }
    ],
    "explanation": "The described person is a Commodity Trading Advisor (CTA). A CTA is generally one who, for compensation or profit, directly or indirectly advises others as to the value of, or advisability of trading in, commodity interests such as futures.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-135; sequence 135; source code 10_IM_111.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The item is readable and the answer is clear. However, the visible source text says \"for compensation of profit,\" while the standard regulatory phrase is \"for compensation or profit.\" This appears to be a source typo or visual transcription issue, so the record is marked needs_review rather than verified.",
    "issueTypes": [
      "OCR/transcription"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "135",
    "sourceQuestionNumber": 134,
    "sourceCode": "10_IM_111",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-135",
    "sectionId": "us_regulations",
    "topicId": "fcm-ib",
    "subtopicId": "anti-money-laundering",
    "difficulty": "easy",
    "questionType": "multiple_choice",
    "stem": "Which of the following are examples of suspicious activity that could warrant further review?",
    "choices": [
      {
        "id": "a",
        "text": "A customer exhibits an unusual level of concern for secrecy.",
        "isCorrect": false,
        "rationale": "This is an example of suspicious activity, but it is not the best answer in the original source because other listed items are also examples."
      },
      {
        "id": "b",
        "text": "A corporate customer lacks general knowledge of its own industry.",
        "isCorrect": false,
        "rationale": "This is an example of suspicious activity, but it is not the best answer in the original source because other listed items are also examples."
      },
      {
        "id": "c",
        "text": "A customer engages in extensive, sudden, or unexplained wire activity.",
        "isCorrect": false,
        "rationale": "This is an example of suspicious activity, but it is not the best answer in the original source because other listed items are also examples."
      },
      {
        "id": "d",
        "text": "A customer makes a funds deposit followed by a request that the money be wired out or transferred to a third party without any apparent business purpose.",
        "isCorrect": false,
        "rationale": "This is an example of suspicious activity, but it is not the best answer in the original source because other listed items are also examples."
      },
      {
        "id": "e",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "The source states that all listed activities are suspicious activities that could warrant further review."
      }
    ],
    "explanation": "All listed activities are examples of suspicious activity that could warrant further review: unusual concern for secrecy, a corporate customer's lack of knowledge of its own industry, extensive or unexplained wire activity, and deposits followed by requests to wire or transfer funds to a third party without an apparent business purpose.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-136; sequence 136; source code 10_IM_100.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The question is readable and the intended answer is clear, but it relies on an 'All of the above' option. The individual answer choices are each true examples of suspicious activity, so exactly one semantically correct answer is not maintained without the omnibus choice. The explanation also contains an apparent source numbering error, referring to question 201 instead of 135.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "136",
    "sourceQuestionNumber": 135,
    "sourceCode": "10_IM_100",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "qualityNotes": "The source question is readable and the stated answer is clear. However, choice D is an 'A and B' combination choice, which the instructions flag as undesirable unless safely rewritten. Because A is not a correct standalone requirement, the item can still function, but it is marked needs_review rather than verified. Duplicate review: Exact duplicate of s3-regulatory-pdf-120.",
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
    "stem": "In regard to handling customer funds, a CPO:",
    "choices": [
      {
        "id": "a",
        "text": "Cannot commingle the property of any pool that it operates with the property of any other person.",
        "isCorrect": false,
        "rationale": "This statement is true, but the source's correct answer is the combined choice D."
      },
      {
        "id": "b",
        "text": "Must operate each pool as a separate entity.",
        "isCorrect": false,
        "rationale": "This statement is true, but the source's correct answer is the combined choice D."
      },
      {
        "id": "c",
        "text": "Must receive all funds in the name of the pool.",
        "isCorrect": false,
        "rationale": "This statement is true, but the source's correct answer is the combined choice D."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "The explanation confirms that a CPO must not commingle pool property with any other person's property, must operate each pool as a separate entity, and must receive all funds in the name of the pool."
      },
      {
        "id": "e",
        "text": "A and C only.",
        "isCorrect": false,
        "rationale": "This omits the requirement that each pool be operated as a separate entity."
      }
    ],
    "explanation": "In regard to handling customer funds, a CPO cannot commingle the property of any pool that it operates with the property of any other person; must operate each pool as a separate entity; and must receive all funds in the name of the pool.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-139; sequence 139; source code 10_IM_113.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The item is readable and the source answer is clear, but it uses 'All of the above' and 'A and C only' answer choices. Per audit rules, such referential choices should not be verified unless safely rewritten semantically. The source is preserved in the transcript; app-ready item needs review/rewrite to avoid referential options.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "139",
    "sourceQuestionNumber": 138,
    "sourceCode": "10_IM_113",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "The NFA's definition of promotional material excludes:",
    "choices": [
      {
        "id": "a",
        "text": "Market letters.",
        "isCorrect": false,
        "rationale": "Market letters are included in the NFA definition of promotional material."
      },
      {
        "id": "b",
        "text": "Broadcasts.",
        "isCorrect": false,
        "rationale": "Broadcasts are included in the NFA definition of promotional material."
      },
      {
        "id": "c",
        "text": "Seminars.",
        "isCorrect": false,
        "rationale": "Seminars are included in the NFA definition of promotional material."
      },
      {
        "id": "d",
        "text": "None of the above.",
        "isCorrect": true,
        "rationale": "None of the listed items is excluded because market letters, broadcasts, and seminars are all included as promotional material."
      }
    ],
    "explanation": "The NFA definition of promotional materials includes market letters, seminars, and broadcasts; therefore none of the listed items is excluded.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-142; sequence 142; source code 10_IM_63.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source is readable and the stated answer is consistent with the explanation. However, the correct option is 'None of the above,' which the instructions flag as undesirable unless it can be safely rewritten semantically. Because the item asks what is excluded and all listed alternatives are included, a clean semantic rewrite would require adding an actual excluded item not present in the source, so the app-ready record is marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "142",
    "sourceQuestionNumber": 141,
    "sourceCode": "10_IM_63",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "If an NFA Member's promotional material includes any specific numerical or statistical information about past performance of actual accounts, including rate of return, what must the Member be able to do?",
    "choices": [
      {
        "id": "a",
        "text": "Demonstrate to NFA that the information is representative of the actual performance of all reasonably comparable accounts, and calculate any rate-of-return figures in a manner consistent with CFTC Regulations.",
        "isCorrect": true,
        "rationale": "NFA promotional material rules require Members using specific numerical or statistical past-performance information for actual accounts to demonstrate representativeness across reasonably comparable accounts and calculate rate-of-return figures consistently with CFTC Regulations."
      },
      {
        "id": "b",
        "text": "Include only the NFA-required cautionary statement, with no need to demonstrate representativeness or calculate rate of return under CFTC Regulations.",
        "isCorrect": false,
        "rationale": "The visible explanation does not state that a cautionary statement alone satisfies the requirement; it specifically identifies representativeness and CFTC-consistent rate-of-return calculations."
      },
      {
        "id": "c",
        "text": "Obtain prior written approval from the CFTC before using any actual account performance numbers.",
        "isCorrect": false,
        "rationale": "Prior CFTC approval is not stated in the visible question or explanation as the requirement."
      },
      {
        "id": "d",
        "text": "File the promotional material with NFA at least 30 days before first use in every case.",
        "isCorrect": false,
        "rationale": "The visible explanation addresses representativeness and rate-of-return calculation standards, not a universal 30-day pre-use filing requirement."
      }
    ],
    "explanation": "If an NFA Member's promotional material includes specific numerical or statistical information about past performance of actual accounts, including rate-of-return information, the Member must be able to demonstrate to NFA that the information is representative of the actual performance of all reasonably comparable accounts and must calculate any rate-of-return figures in a manner consistent with CFTC Regulations.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-147; sequence 147; source code 10_IM_104.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the stated correct answer is clear, but the original correct choice is 'A and B only,' which violates the app rule against answer choices that reference other choices. The app-ready version rewrites the correct answer semantically and replaces distractors, so it should be reviewed for fidelity and educational quality before verification.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "147",
    "sourceQuestionNumber": 146,
    "sourceCode": "10_IM_104",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "A CTA generally must file with the CFTC and NFA a disclosure document for each trading program it offers:",
    "choices": [
      {
        "id": "a",
        "text": "Any time prior to the document's first use or intended use.",
        "isCorrect": false,
        "rationale": "CTA/CPO disclosure documents generally must be filed with the CFTC and NFA at least 21 days before first use or intended use, not merely any time before use."
      },
      {
        "id": "b",
        "text": "Within 10 days of its first use.",
        "isCorrect": false,
        "rationale": "The filing must generally occur before first use or intended use, not within 10 days after first use."
      },
      {
        "id": "c",
        "text": "Within 30 days of its first use.",
        "isCorrect": false,
        "rationale": "The filing must generally occur before first use or intended use, not within 30 days after first use."
      },
      {
        "id": "d",
        "text": "At least 21 days prior to its first use or intended use.",
        "isCorrect": true,
        "rationale": "A CTA or CPO generally must file the disclosure document with the CFTC and NFA at least 21 days prior to the document's first use or intended use."
      }
    ],
    "explanation": "A CTA or CPO generally must file a disclosure document with the CFTC and the NFA at least 21 days prior to the document's first use or intended use.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-149; sequence 149; source code 10_IM_58.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is clear. However, the 21-day pre-use filing statement may reflect an older regulatory formulation; current CTA/CPO disclosure document review and filing requirements should be checked before treating this as verified for a current Series 3 app.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "149",
    "sourceQuestionNumber": 148,
    "sourceCode": "10_IM_58",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "The Commodity Exchange Act, in setting out the CFTC's regulatory scheme, provides that:",
    "choices": [
      {
        "id": "a",
        "text": "The CFTC has exclusive regulatory authority over all futures and options on futures traded on an exchange.",
        "isCorrect": false,
        "rationale": "This statement is accurate, but the source's correct answer combines all listed statements."
      },
      {
        "id": "b",
        "text": "Exchanges have an obligation to regulate themselves.",
        "isCorrect": false,
        "rationale": "This statement is accurate, but the source's correct answer combines all listed statements."
      },
      {
        "id": "c",
        "text": "The CFTC has oversight jurisdiction over the exchanges and any other self-regulatory organizations.",
        "isCorrect": false,
        "rationale": "This statement is accurate, but the source's correct answer combines all listed statements."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "The Commodity Exchange Act gives the CFTC exclusive jurisdiction over exchange-traded futures and options on futures, recognizes self-regulatory obligations of exchanges, and gives the CFTC oversight jurisdiction over exchanges and other self-regulatory organizations."
      }
    ],
    "explanation": "The Commodity Exchange Act gives the CFTC exclusive jurisdiction over futures and options on futures traded on exchanges. The Act and regulations also assign self-regulatory responsibilities to futures and options exchanges and give the CFTC oversight jurisdiction of exchanges and other self-regulatory organizations.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-153; sequence 153; source code 10_IM_15.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is clear. However, the correct choice is 'All of the above,' and the rules say to avoid all/none-of-the-above choices unless they can be safely rewritten semantically. Because A, B, and C are each true and D merely aggregates them, the item is not app-ready without revision.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "153",
    "sourceQuestionNumber": 152,
    "sourceCode": "10_IM_15",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Futures and options risk-disclosure statements, which are required to be provided to customers prior to opening a futures or options account, must contain language prescribed by the:",
    "choices": [
      {
        "id": "a",
        "text": "Futures and options exchanges.",
        "isCorrect": false,
        "rationale": "Risk-disclosure wording is prescribed by CFTC regulations, not by the exchanges."
      },
      {
        "id": "b",
        "text": "CFTC.",
        "isCorrect": true,
        "rationale": "CFTC regulations prescribe the required language for futures and options risk-disclosure statements."
      },
      {
        "id": "c",
        "text": "NFA.",
        "isCorrect": false,
        "rationale": "Although NFA enforces many customer protection and disclosure obligations for members, the required risk-disclosure language referenced here is prescribed by CFTC regulation."
      },
      {
        "id": "d",
        "text": "FCM handling the account.",
        "isCorrect": false,
        "rationale": "An FCM must provide the required disclosure, but it does not prescribe the required language."
      }
    ],
    "explanation": "CFTC regulations prescribe the required wording for customer risk-disclosure statements that must be provided before opening a futures or options account. The source explanation references CFTC Regulation 1.55 for futures risk-disclosure language and Regulation 33.7 for options risk-disclosure language.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-159; sequence 159; source code 10_IM_12.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The question is readable and the intended answer is clear. However, the cited options regulation reference in the source explanation appears potentially outdated because Part 33 exchange-traded commodity option rules have changed over time. The general concept that CFTC-prescribed risk disclosure language is required remains consistent, but the item should be reviewed for current rule citations before being marked verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "159",
    "sourceQuestionNumber": 158,
    "sourceCode": "10_IM_12",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "In regard to discretionary accounts, NFA rules require which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "The grant of discretion must be in writing.",
        "isCorrect": false,
        "rationale": "This is a required element, but it is not the only requirement listed."
      },
      {
        "id": "b",
        "text": "The member's records systems must clearly identify discretionary accounts.",
        "isCorrect": false,
        "rationale": "This is a required element, but it is not the only requirement listed."
      },
      {
        "id": "c",
        "text": "Each trade must be marked as discretionary.",
        "isCorrect": false,
        "rationale": "This is a required element, but it is not the only requirement listed."
      },
      {
        "id": "d",
        "text": "The member must have written procedures for review of discretionary trading.",
        "isCorrect": false,
        "rationale": "This is a required element, but it is not the only requirement listed."
      },
      {
        "id": "e",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-8 addresses discretionary trading requirements, including written authorization, identification of discretionary accounts, marking discretionary orders, and written supervisory review procedures."
      }
    ],
    "explanation": "The source identifies E as correct. NFA Rule 2-8 on discretionary trading covers the listed controls and procedures for discretionary accounts, including written customer authorization and supervisory review requirements.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-170; sequence 170; source code 10_IM_46.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source uses an 'All of the above' choice. Although the intended answer is clear and the regulatory concept is coherent, the item should be reviewed or rewritten into semantically independent choices for app use.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "170",
    "sourceQuestionNumber": 169,
    "sourceCode": "10_IM_46",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "A CTA must register with the CFTC unless:",
    "choices": [
      {
        "id": "a",
        "text": "The CTA has provided advice to not more than 15 persons during the last year and does not hold itself out to the public as providing trading advice.",
        "isCorrect": true,
        "rationale": "This describes the CTA registration exemption for an adviser who has not provided commodity trading advice to more than 15 persons during the preceding 12 months and does not hold itself out generally to the public as a CTA."
      },
      {
        "id": "b",
        "text": "The CTA has not made money during the last twelve months.",
        "isCorrect": false,
        "rationale": "Profitability or lack of profitability during the prior year does not by itself exempt a CTA from CFTC registration."
      },
      {
        "id": "c",
        "text": "The CTA is registered with FINRA even though its principal business is providing commodity trading advice.",
        "isCorrect": false,
        "rationale": "FINRA registration does not substitute for required CTA registration when the person is engaged in commodity trading advice as a principal business."
      },
      {
        "id": "d",
        "text": "The CTA is registered with another regulator and has had no profitable clients during the last twelve months.",
        "isCorrect": false,
        "rationale": "Neither registration with another regulator nor recent profitability determines the CTA registration requirement."
      }
    ],
    "explanation": "CTA registration is generally not required if the trading advisor has provided advice to not more than 15 persons during the last year and does not hold itself out to the public as providing trading advice.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-173; sequence 173; source code 10_IM_86.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source is readable and the stated correct answer is consistent with the CTA registration exemption concept. However, the original choice D is a referential 'A and C' option, which is not app-ready under the provided rules. I rewrote D semantically to avoid the reference, so the item should be reviewed before verification.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "173",
    "sourceQuestionNumber": 172,
    "sourceCode": "10_IM_86",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "questionType": "true_false",
    "stem": "Any person whose registration as an Associated Person has terminated within the preceding 60 days may be granted a temporary AP license upon becoming associated with a new sponsor, provided the new sponsor submits the required forms and information.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "A temporary AP license may be granted when a person's AP registration terminated within the preceding 60 days and the person becomes associated with a new sponsor, if the new sponsor submits the required registration materials and the person otherwise remains qualified."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This contradicts the stated temporary AP license rule shown in the source explanation."
      }
    ],
    "explanation": "A person whose registration as an Associated Person has terminated within the preceding 60 days and who becomes associated with a new sponsor may be granted a temporary license to act as an AP upon submission by the new sponsor of the required registration documents, provided the applicant otherwise continues to satisfy registration requirements.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-177; sequence 177; source code 10_IM_32.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and internally consistent, with exactly one correct answer. However, the explanation references submission of a fingerprint card; modern NFA/CFTC registration processing requirements may differ, so the rule should be checked for current terminology and filing requirements before marking verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "177",
    "sourceQuestionNumber": 176,
    "sourceCode": "10_IM_32",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-177",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cta-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which of the following would require registration as a CTA?",
    "choices": [
      {
        "id": "a",
        "text": "Advising more than 15 persons during the previous 12 months.",
        "isCorrect": false,
        "rationale": "The source indicates this is one of several examples requiring CTA registration, but not the best answer because all listed examples require registration."
      },
      {
        "id": "b",
        "text": "Holding yourself out to the public as a trading advisor.",
        "isCorrect": false,
        "rationale": "Holding oneself out to the public as a trading advisor can require CTA registration, but the source asks which of the listed examples would require registration, and all listed examples do."
      },
      {
        "id": "c",
        "text": "Allocating assets to CTAs or investee pools.",
        "isCorrect": false,
        "rationale": "The source indicates this is one of several examples requiring CTA registration, but not the best answer because all listed examples require registration."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "The source states that all listed examples would require registration as a CTA."
      },
      {
        "id": "e",
        "text": "A and C only.",
        "isCorrect": false,
        "rationale": "This omits choice B, which the source explanation includes among the examples requiring CTA registration."
      }
    ],
    "explanation": "All of the listed examples would require registration as a CTA.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-178; sequence 178; source code 10_IM_110.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source's indicated answer is clear. However, the item uses 'All of the above' and 'A and C only' answer formats, which are disallowed for app-ready verified items unless safely rewritten. It is therefore marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "178",
    "sourceQuestionNumber": 177,
    "sourceCode": "10_IM_110",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "Principal-protected pools are no longer permitted by CFTC regulation.",
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
        "rationale": "Principal-protected pools are permitted by CFTC regulation, provided required disclosures are made and the cost of funding the principal-protection feature is included in the break-even calculation."
      }
    ],
    "explanation": "Principal-protected pools are permitted by CFTC regulation. The pool's principal-protected nature and the protection mechanism must be disclosed. The cost of purchasing and carrying the assets used to fund the principal-protection feature must also be included in the break-even calculation, expressed as a percentage of a unit of participation.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-180; sequence 180; source code 10_IM_75.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source marks B/False as correct. However, the regulatory treatment of principal-protected pools may be time-sensitive and should be checked against current CFTC/NFA disclosure requirements before marking verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "180",
    "sourceQuestionNumber": 179,
    "sourceCode": "10_IM_75",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In regard to showing extracted trading results in a Disclosure Document, the following requirement(s) apply:",
    "choices": [
      {
        "id": "a",
        "text": "A CTA is prohibited from showing extracted performance results.",
        "isCorrect": false,
        "rationale": "Extracted performance is not categorically prohibited if the applicable disclosure conditions are met."
      },
      {
        "id": "b",
        "text": "Extracted performance results can only be used with prior approval of the NFA.",
        "isCorrect": false,
        "rationale": "The visible explanation identifies a disclosure-document asset-allocation condition, not prior NFA approval, as the requirement."
      },
      {
        "id": "c",
        "text": "Extracted performance can only be used if presented in the CFTC specified Extracted Performance Table.",
        "isCorrect": false,
        "rationale": "The visible explanation does not state that a CFTC-specified extracted performance table is the exclusive condition."
      },
      {
        "id": "d",
        "text": "Extracted performance is permitted only when the CTA's or CPO's previous Disclosure Document designated the percentage of assets that would be committed toward the particular component of the overall trading program.",
        "isCorrect": true,
        "rationale": "The source states that extracted trading results may be shown only when the prior Disclosure Document designated the percentage of assets committed to the particular component of the overall trading program."
      }
    ],
    "explanation": "Extracted trading results in a Disclosure Document are permitted only when the CTA's or CPO's previous Disclosure Document designated the percentage of assets that would be committed toward the particular component of the overall trading program.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-182; sequence 182; source code 10_IM_118.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the keyed answer is clear. However, this is a nuanced CPO/CTA Disclosure Document performance-presentation rule, and the exact current NFA/CFTC requirements for extracted performance should be reviewed before marking verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "182",
    "sourceQuestionNumber": 181,
    "sourceCode": "10_IM_118",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "Which of the following orders must be retained by the FCM or IB for a period of at least five years?",
    "choices": [
      {
        "id": "a",
        "text": "All filled orders",
        "isCorrect": false,
        "rationale": "CFTC recordkeeping requirements are not limited to filled orders."
      },
      {
        "id": "b",
        "text": "All filled and unfilled orders",
        "isCorrect": false,
        "rationale": "This omits canceled orders, which must also be retained."
      },
      {
        "id": "c",
        "text": "All filled, unfilled, and canceled orders",
        "isCorrect": true,
        "rationale": "CFTC Regulation 1.35 requires records of orders, including filled, unfilled, and canceled orders, to be kept, and Regulation 1.31 generally requires required records to be retained for at least five years."
      },
      {
        "id": "d",
        "text": "None of the above",
        "isCorrect": false,
        "rationale": "Choice C correctly describes the relevant order records that must be retained."
      }
    ],
    "explanation": "CFTC Regulation 1.35 requires order records, including filled, unfilled, and canceled orders, to be retained by FCMs, IBs, and members of contract markets. CFTC Regulation 1.31 requires these and other required records to be retained for at least five years.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-184; sequence 184; source code 10_IM_13.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The item is readable and the stated answer is consistent with the explanation. Although choice D uses 'None of the above,' it is not needed to determine the correct answer and can remain as a distractor in this context.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
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
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "NFA financial rules require FCMs to maintain adjusted net capital equal to or in excess of the higher of $1,000,000 or which of the following:",
    "choices": [
      {
        "id": "a",
        "text": "Four percent (six to avoid early warning status) of the funds required to be segregated plus a similar computation of foreign futures and options secured amounts.",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "b",
        "text": "$6,000 for each branch office or guaranteed IB and IB branch office.",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "c",
        "text": "$3,000 for each sponsored AP, including APs sponsored by guaranteed IBs.",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "d",
        "text": "For a broker-dealer, the net capital required by SEC regulations.",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "e",
        "text": "The highest of any of the above.",
        "isCorrect": true,
        "rationale": "The source indicates that FCMs must maintain adjusted net capital at least equal to the highest applicable computation listed."
      }
    ],
    "explanation": "FCMs must, at all times, maintain adjusted net capital equal to or in excess of the highest computation outlined in this question.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-186; sequence 186; source code 10_IM_71.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is clear. However, the answer choice uses 'any of the above,' which is not ideal for app-ready QCM format. In addition, the $1,000,000 FCM adjusted net capital figure may be outdated under current CFTC/NFA requirements and should be checked before use.",
    "issueTypes": [
      "outdated_rule",
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "186",
    "sourceQuestionNumber": 185,
    "sourceCode": "10_IM_71",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "You have built a website to promote your business to Russian clientele living in Brooklyn. As a convenience to these potential customers, you have translated your disclosure documents into the Russian language. What must you do?",
    "choices": [
      {
        "id": "a",
        "text": "Maintain English translations for a period of five years from the date of last use.",
        "isCorrect": true,
        "rationale": "NFA Rule 2-29 guidance requires members to maintain English translations of foreign-language promotional material, disclosure documents, and websites intended for customers in the United States."
      },
      {
        "id": "b",
        "text": "Maintain English translations for a period of three years from the date of last use.",
        "isCorrect": false,
        "rationale": "The source states a five-year maintenance period, not three years."
      },
      {
        "id": "c",
        "text": "No English translation is needed if the Russian text was written by a bona fide English speaker employed by a professional translation agency.",
        "isCorrect": false,
        "rationale": "Use of a professional translator does not eliminate the requirement to maintain English translations for covered foreign-language material."
      },
      {
        "id": "d",
        "text": "No English translation is needed if someone can be made available to translate the document if requested by NFA.",
        "isCorrect": false,
        "rationale": "The requirement is to maintain English translations; an ad hoc oral translator is not sufficient."
      }
    ],
    "explanation": "NFA Rule 2-29 guidance requires English translations of foreign-language promotional material, disclosure documents, and websites distributed to or intended for viewing by customers located in the United States, its territories, or possessions. The source identifies answer A as correct.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-192; sequence 192; source code 10_IM_94.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the keyed answer is clear. However, because NFA record-retention details for foreign-language promotional material may have changed or require confirmation against the current rule/interpretive notice, the item is marked needs_review rather than verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "192",
    "sourceQuestionNumber": 191,
    "sourceCode": "10_IM_94",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "Which claims have been identified by the NFA as areas of potentially abusive promotional practices?",
    "choices": [
      {
        "id": "a",
        "text": "Claims regarding seasonal trends, historical price moves, price movements characterized as conservative, and profit potential projections",
        "isCorrect": true,
        "rationale": "NFA guidance identifies these types of promotional claims as potential areas of abuse."
      },
      {
        "id": "b",
        "text": "Only claims regarding seasonal trades and historical price moves",
        "isCorrect": false,
        "rationale": "The source explanation also includes claims about price movements characterized as conservative and profit potential projections."
      },
      {
        "id": "c",
        "text": "Only claims regarding price movements characterized as conservative",
        "isCorrect": false,
        "rationale": "This is one listed area, but it is not the only area identified in the source explanation."
      },
      {
        "id": "d",
        "text": "Only claims regarding profit potential projections",
        "isCorrect": false,
        "rationale": "This is one listed area, but it is not the only area identified in the source explanation."
      }
    ],
    "explanation": "Claims regarding seasonal trends, historical price moves, price movements characterized as conservative, and profit potential projections are all among the areas of potential abuse identified by the NFA.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-196; sequence 196; source code 10_IM_124.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The image is readable and the stated correct answer is clear. However, the original item relies on 'All of the above,' which is disallowed for verified app-ready use unless rewritten. A semantic rewrite is provided, but it should be reviewed against the underlying NFA interpretive notice/source code before verification.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "196",
    "sourceQuestionNumber": 195,
    "sourceCode": "10_IM_124",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "questionType": "true_false",
    "stem": "In regard to the handling of bunched (block) orders, CTAs are required to maintain fair and balanced allocation procedures, ensure customer accounts receive correct contract allocations on each trade, and review each trading program at least quarterly to ensure the allocation method has been fair and equitable.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "CTAs that use bunched or block orders must have fair and equitable allocation procedures and periodically review allocation methods."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "This statement accurately describes required CTA procedures for bunched or block order allocations."
      }
    ],
    "explanation": "CTA handling of bunched or block orders must follow the listed requirements: fair and balanced allocation procedures, correct contract allocations to customer accounts, and quarterly review of each trading program's allocation method for fairness and equity.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-198; sequence 198; source code 10_IM_114.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The visible source question is readable and the indicated answer is D, but it uses 'All of the above' and 'A and B only' choices. It was rewritten as a True/False item to avoid answer choices referencing other choices, so it should be reviewed before verification.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "198",
    "sourceQuestionNumber": 197,
    "sourceCode": "10_IM_114",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "The Commodity Exchange Act, in setting out the CFTC's regulatory scheme, emphasizes that:",
    "choices": [
      {
        "id": "a",
        "text": "The CFTC has exclusive regulatory authority over all futures and options on futures taking place on an exchange.",
        "isCorrect": false,
        "rationale": "This statement is described in the explanation, but it is not the only correct statement."
      },
      {
        "id": "b",
        "text": "Exchanges have an obligation to regulate themselves.",
        "isCorrect": false,
        "rationale": "This statement is described in the explanation, but it is not the only correct statement."
      },
      {
        "id": "c",
        "text": "The CFTC has oversight jurisdiction over the exchanges and any other self-regulatory organizations.",
        "isCorrect": false,
        "rationale": "This statement is described in the explanation, but it is not the only correct statement."
      },
      {
        "id": "d",
        "text": "All of the above.",
        "isCorrect": true,
        "rationale": "The Commodity Exchange Act gives the CFTC jurisdiction over exchange-traded futures and options on futures, assigns self-regulatory responsibilities to exchanges, and gives the CFTC oversight jurisdiction over exchanges and other self-regulatory organizations."
      }
    ],
    "explanation": "The Commodity Exchange Act gives the CFTC exclusive jurisdiction over futures and options on futures traded on exchanges. The Act and regulations also assign self-regulatory responsibilities to futures and options exchanges and give the CFTC oversight jurisdiction over exchanges and any other self-regulatory organizations.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-200; sequence 200; source code 10_IM_90.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source question is readable and the stated answer is supported by the explanation, but it uses an 'All of the above' option. Per instruction, such choices should be avoided unless safely rewritten; because the source's structure depends on combining A, B, and C, this item is marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "200",
    "sourceQuestionNumber": 199,
    "sourceCode": "10_IM_90",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "Futures and options positions generally must be offset against the oldest open positions (FIFO basis) with the exception of which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "Hedge accounts and day trades",
        "isCorrect": false,
        "rationale": "This is incomplete. Hedge accounts and day trades are exceptions, but positions offset in accordance with specific customer instructions are also an exception."
      },
      {
        "id": "b",
        "text": "Positions offset in accordance with specific customer instructions",
        "isCorrect": false,
        "rationale": "This is incomplete. Specific customer offset instructions are an exception, but hedge accounts and day trades are also exceptions."
      },
      {
        "id": "c",
        "text": "Discretionary accounts directed by an FCM, IB, or one of their APs",
        "isCorrect": false,
        "rationale": "FCMs, IBs, or their APs directing a customer's discretionary account generally are not permitted to submit special offset instructions."
      },
      {
        "id": "d",
        "text": "A, B and C",
        "isCorrect": false,
        "rationale": "This includes discretionary accounts directed by an FCM, IB, or AP, which are generally not an exception."
      },
      {
        "id": "e",
        "text": "A and B only",
        "isCorrect": true,
        "rationale": "Hedge accounts, day trades, and offsets made in accordance with specific customer instructions are exceptions to the FIFO offset rule."
      }
    ],
    "explanation": "Hedge accounts, day trades, and position offsets made in accordance with specific customer instructions are exceptions to the general requirement that futures and options positions be offset against the oldest open position first. However, FCMs, IBs, or their APs directing a customer's discretionary account generally are not permitted to submit special offset instructions.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-202; sequence 202; source code 10_IM_33.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the stated correct answer is clear. However, the source uses non-standalone combination choices (\"A, B and C\" and \"A and B only\"), which should be rewritten before app use if possible. The regulatory concept appears internally consistent, but because the combination-choice structure cannot be preserved as an ideal QCM, this item is marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "202",
    "sourceQuestionNumber": 201,
    "sourceCode": "10_IM_33",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "subtopicId": "associated-person",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "As required by the CFTC, new registrants must take at least four hours of initial ethics training within six months before or after being granted registration and thereafter must complete follow-up training of at least:",
    "choices": [
      {
        "id": "a",
        "text": "Two hours every two years.",
        "isCorrect": false,
        "rationale": "Follow-up ethics training was stated as at least one hour every three years, not two hours every two years."
      },
      {
        "id": "b",
        "text": "Three hours every two years.",
        "isCorrect": false,
        "rationale": "Follow-up ethics training was stated as at least one hour every three years, not three hours every two years."
      },
      {
        "id": "c",
        "text": "One hour every three years.",
        "isCorrect": true,
        "rationale": "The source explanation states that new AP registrants must receive four hours of initial ethics training within six months of registration and at least one hour of ethics training every three years thereafter."
      },
      {
        "id": "d",
        "text": "One hour every two years.",
        "isCorrect": false,
        "rationale": "The stated follow-up interval is every three years, not every two years."
      }
    ],
    "explanation": "CFTC regulations require new AP registrants to receive four hours of initial ethics training within six months of their registration and thereafter at least one hour of ethics training every three years.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-204; sequence 204; source code 10_DI_8.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source-marked answer is clear. However, the ethics training requirement described appears to reflect older CFTC/NFA ethics-training rules; current requirements should be verified before using as an app-ready regulatory item.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "204",
    "sourceQuestionNumber": 203,
    "sourceCode": "10_DI_8",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "In the case of pools with net assets of less than $500,000 at the beginning of the pool's fiscal year, the CPO must distribute a financial account statement to participants at least:",
    "choices": [
      {
        "id": "a",
        "text": "Weekly.",
        "isCorrect": false,
        "rationale": "Quarterly, not weekly, is the stated minimum frequency for pools with net assets of less than $500,000."
      },
      {
        "id": "b",
        "text": "Monthly.",
        "isCorrect": false,
        "rationale": "Monthly statements apply in the explanation to pools with net assets of more than $500,000."
      },
      {
        "id": "c",
        "text": "Quarterly.",
        "isCorrect": true,
        "rationale": "The explanation states that CFTC regulations require CPOs to distribute account statements at least quarterly for pools with net assets of less than $500,000."
      },
      {
        "id": "d",
        "text": "Semi-annually.",
        "isCorrect": false,
        "rationale": "Semi-annual distribution is less frequent than the quarterly minimum stated in the explanation."
      }
    ],
    "explanation": "CFTC regulations require CPOs to distribute account statements at least quarterly in the case of pools with net assets of less than $500,000. If the net assets are more than $500,000, then the statements are required to be distributed at least monthly. CPOs also are required to distribute to each participant an annual certified statement of financial condition.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-206; sequence 206; source code 10_DI_5.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and internally consistent, but the regulatory threshold/frequency for CPO periodic account statements appears potentially outdated and should be checked against current CFTC Part 4 requirements before use as a verified item.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "206",
    "sourceQuestionNumber": 205,
    "sourceCode": "10_DI_5",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "If an FCM's or IB's fees and charges are not determined on a per-trade or a round-turn basis, which of the following applies?",
    "choices": [
      {
        "id": "a",
        "text": "The FCM or IB may not charge a fee determined on any other basis.",
        "isCorrect": false,
        "rationale": "FCMs and IBs may charge fees on another basis if proper disclosure is provided."
      },
      {
        "id": "b",
        "text": "An explanation of such fees and examples of similar fees charged in the securities markets must be provided.",
        "isCorrect": false,
        "rationale": "The comparison must be expressed in terms of per-trade or round-turn equivalents, not securities-market examples."
      },
      {
        "id": "c",
        "text": "An explanation of such fees and examples in terms of per-trade or round-turn fees, including as needed a reasonable range of prices, must be provided.",
        "isCorrect": true,
        "rationale": "If fees are not charged per trade or round turn, the customer must receive a complete written explanation, including reasonable per-trade or round-turn examples and, where applicable, a reasonably expected range."
      },
      {
        "id": "d",
        "text": "None of the above.",
        "isCorrect": false,
        "rationale": "Choice C accurately states the disclosure requirement."
      }
    ],
    "explanation": "If fees and charges are not based on a per-trade or round-turn charge, an FCM or IB must provide the customer with a complete written explanation of the fees and charges. This disclosure should include a reasonable example of the fees and charges on a per-trade or round-turn basis. If the per-trade or round-turn equivalent may vary widely, the FCM or IB should explain that fact and provide examples showing the reasonably expected range of fees or charges.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-209; sequence 209; source code 10_DI_2.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source is readable and the answer is clear. However, choice D is 'None of the above,' which the instructions discourage unless safely rewritten; no semantic rewrite is necessary for audit, so marked needs_review rather than verified.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "209",
    "sourceQuestionNumber": 208,
    "sourceCode": "10_DI_2",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "If a CTA has less than one year of experience in directing customer accounts, past performance results must be shown for the CTA's proprietary trading for the past:",
    "choices": [
      {
        "id": "a",
        "text": "One year.",
        "isCorrect": false,
        "rationale": "The required proprietary trading performance history is longer than one year."
      },
      {
        "id": "b",
        "text": "Two years.",
        "isCorrect": false,
        "rationale": "The required proprietary trading performance history is longer than two years."
      },
      {
        "id": "c",
        "text": "Three years.",
        "isCorrect": false,
        "rationale": "The required proprietary trading performance history is longer than three years."
      },
      {
        "id": "d",
        "text": "Five years.",
        "isCorrect": true,
        "rationale": "If a CTA has less than one year of experience directing customer accounts, the CTA must present proprietary trading performance results for the past five years."
      }
    ],
    "explanation": "If a CTA has less than one year of experience in directing customer accounts, past performance results must be shown for the CTA's proprietary trading for the past five years.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-211; sequence 211; source code 10_DI_35.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and indicates answer D. However, CTA/CPO disclosure document performance presentation requirements may have changed over time and should be checked against current NFA/CFTC rules before marking verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "211",
    "sourceQuestionNumber": 210,
    "sourceCode": "10_DI_35",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-211",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-cta-promotional-material",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Audio pod-casts and videos on the internet that make specific trading recommendations or refer to profits that have been obtained in the past or can be achieved in the future must be:",
    "choices": [
      {
        "id": "a",
        "text": "Submitted to the NFA within 10 days of their first use.",
        "isCorrect": false,
        "rationale": "The source indicates prior NFA approval is required, not submission after first use."
      },
      {
        "id": "b",
        "text": "Be submitted to the NFA on a monthly basis.",
        "isCorrect": false,
        "rationale": "The source does not indicate a monthly submission requirement."
      },
      {
        "id": "c",
        "text": "Be submitted to the NFA for approval 10 days prior to use.",
        "isCorrect": true,
        "rationale": "The visible explanation states that such internet audio podcasts and videos must be submitted to the NFA for approval at least 10 days prior to use."
      },
      {
        "id": "d",
        "text": "Be available for NFA review upon request.",
        "isCorrect": false,
        "rationale": "The source states these materials must be submitted to the NFA for approval before use, rather than merely retained for review on request."
      }
    ],
    "explanation": "According to the source explanation, audio podcasts and internet videos that make specific trading recommendations or refer to past or potential future profits must be submitted to the NFA for approval at least 10 days prior to use.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-212; sequence 212; source code 10_DI_44.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The image is readable and the source answer is clear, but the regulatory filing/approval requirement for promotional material involving audio podcasts and internet videos should be checked against current NFA rules and interpretive notices before marking verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "212",
    "sourceQuestionNumber": 211,
    "sourceCode": "10_DI_44",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-212",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "CPOs are prohibited from doing which of the following activities?",
    "choices": [
      {
        "id": "a",
        "text": "Accepting funds in other than the pool's name.",
        "isCorrect": false,
        "rationale": "This activity is prohibited for CPOs, but it is not the complete answer because commingling pool property is also prohibited."
      },
      {
        "id": "b",
        "text": "Commingling funds of any pool with those of any person.",
        "isCorrect": false,
        "rationale": "This activity is prohibited for CPOs, but it is not the complete answer because accepting funds other than in the pool's name is also prohibited."
      },
      {
        "id": "c",
        "text": "Entering orders directly to an FCM's trading floor desk.",
        "isCorrect": false,
        "rationale": "The cited CPO prohibitions concern accepting funds other than in the pool's name and commingling pool property, not this activity."
      },
      {
        "id": "d",
        "text": "A, B and C",
        "isCorrect": false,
        "rationale": "Choice C is not included in the stated CPO prohibitions."
      },
      {
        "id": "e",
        "text": "A and B, only",
        "isCorrect": true,
        "rationale": "CFTC regulations prohibit a CPO from accepting funds in other than the pool's name and from commingling pool property with the property of any other person."
      }
    ],
    "explanation": "CFTC regulations prohibit a CPO from accepting funds in other than the pool's name and from commingling the property of any pool that it operates or intends to operate with the property of any other person.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-213; sequence 213; source code 10_DI_15.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The source question is readable and the regulatory concept is coherent, but the source uses combination answer choices ('A, B and C' and 'A and B, only'), which are disfavored for app-ready QCM format and cannot be safely rewritten without changing the structure.",
    "issueTypes": [
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "213",
    "sourceQuestionNumber": 212,
    "sourceCode": "10_DI_15",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "A CTA's initial disclosure document, as well as amendments to it, must be filed with:",
    "choices": [
      {
        "id": "a",
        "text": "The NFA.",
        "isCorrect": false,
        "rationale": "The CTA must file the disclosure document with the CFTC and file copies with the NFA; NFA alone is incomplete."
      },
      {
        "id": "b",
        "text": "The CFTC.",
        "isCorrect": false,
        "rationale": "The CTA must file the disclosure document with the CFTC and file copies with the NFA; CFTC alone is incomplete."
      },
      {
        "id": "c",
        "text": "The SEC.",
        "isCorrect": false,
        "rationale": "CTA disclosure document filing is a commodities regulatory requirement, not an SEC filing requirement."
      },
      {
        "id": "d",
        "text": "The CFTC, the NFA, and the SEC.",
        "isCorrect": false,
        "rationale": "The SEC is not included in the filing requirement described."
      },
      {
        "id": "e",
        "text": "The CFTC and the NFA only.",
        "isCorrect": true,
        "rationale": "The source explanation states that a CTA is required to file its initial disclosure document and amendments with the CFTC and to file copies with the NFA."
      }
    ],
    "explanation": "A commodity trading advisor's initial disclosure document and amendments must be filed with the CFTC, with copies filed with the NFA. The SEC is not part of this CTA disclosure document filing requirement.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-215; sequence 215; source code 10_DI_25.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is internally consistent, but the regulatory requirement may be outdated. Current NFA/CFTC filing processes for CPO/CTA disclosure documents have changed over time, including filing with NFA through electronic systems rather than direct CFTC filing in many contexts. Marked needs_review for regulatory currency.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "215",
    "sourceQuestionNumber": 214,
    "sourceCode": "10_DI_25",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "The information contained in a CTA or CPO disclosure document must be current as of the date of the disclosure document except for the performance data, which must be current as of a date not more than:",
    "choices": [
      {
        "id": "a",
        "text": "One month preceding the date of the document.",
        "isCorrect": false,
        "rationale": "The displayed explanation states the allowed look-back period for performance information is not more than three months, not one month."
      },
      {
        "id": "b",
        "text": "Three months preceding the date of the document.",
        "isCorrect": true,
        "rationale": "The displayed explanation states that performance information in a CTA disclosure document must be current as of a date not more than three months preceding the date of the document."
      },
      {
        "id": "c",
        "text": "Six months preceding the date of the document.",
        "isCorrect": false,
        "rationale": "The displayed explanation states the maximum period is three months, not six months."
      },
      {
        "id": "d",
        "text": "Twelve months preceding the date of the document.",
        "isCorrect": false,
        "rationale": "The displayed explanation states the maximum period is three months, not twelve months."
      }
    ],
    "explanation": "CFTC regulations provide that performance information in a CTA disclosure document must be current as of a date not more than three months preceding the date of the document.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-219; sequence 219; source code 10_DI_4.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and identifies B as the source answer. However, because this is a regulatory timing requirement for CTA/CPO disclosure documents, current rule status should be checked before marking verified. The explanation also specifically says CTA disclosure document while the stem includes both CTA and CPO.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "219",
    "sourceQuestionNumber": 218,
    "sourceCode": "10_DI_4",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-219",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "disclosure-documents",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "In addition to providing a Disclosure Document, a CPO who must register with the SEC also must provide participants with a:",
    "choices": [
      {
        "id": "a",
        "text": "Separate SEC required Disclosure Document.",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "b",
        "text": "SEC specified Supplemental Statement.",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "c",
        "text": "CFTC/SEC Combined Disclosure Document.",
        "isCorrect": false,
        "rationale": "Incorrect."
      },
      {
        "id": "d",
        "text": "Statement of Additional Information.",
        "isCorrect": true,
        "rationale": "A CPO that also must register with the SEC must provide participants with a Statement of Additional Information in addition to the CPO Disclosure Document."
      }
    ],
    "explanation": "In addition to providing a Disclosure Document, a CPO who must register with the SEC also must provide participants with a Statement of Additional Information.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-220; sequence 220; source code 10_DI_42.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source indicates D. However, the regulatory statement may be outdated or context-dependent because SEC/CFTC disclosure harmonization rules for registered investment companies and CPOs have changed over time. The source explanation is also minimal and does not cite the applicable rule or context.",
    "issueTypes": [
      "outdated_rule",
      "weak_explanation"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "220",
    "sourceQuestionNumber": 219,
    "sourceCode": "10_DI_42",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "questionType": "true_false",
    "stem": "Registration as a commodity pool operator is required if the total gross capital contributions to all of the operator's pools is more than $400,000 and there are more than 15 persons in any one pool.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "The source identifies A, True, as correct."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The source identifies A, True, as correct."
      }
    ],
    "explanation": "Registration as a commodity pool operator is required if the total gross capital contributions to all of the operator's pools is more than $400,000 and there are more than 15 persons in any one pool.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-222; sequence 222; source code 10_DI_36.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source marks True as correct. However, the stated $400,000 and 15-person threshold appears tied to older or simplified CPO registration exemption concepts and may not accurately reflect current CFTC/NFA rules. The explanation merely repeats the stem and does not clarify the regulatory basis.",
    "issueTypes": [
      "outdated_rule",
      "weak_explanation"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "222",
    "sourceQuestionNumber": 221,
    "sourceCode": "10_DI_36",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "questionType": "true_false",
    "stem": "By law, every U.S. commodity pool, as well as every U.S. futures contract, is available to persons residing in any of the 50 states, regardless of any state law or regulation.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "This statement is too broad. Commodity pool interests may be subject to state Blue Sky registration or exemption requirements."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "State Blue Sky laws may apply to the offer and sale of commodity pool interests, so only clients in states where the offering has been registered or is exempt may purchase an investment in the pool."
      }
    ],
    "explanation": "The statement is false. State Blue Sky laws have been applied to the offer and sale of commodity pools. As a result, a commodity pool interest may be offered only in states where the offering has been registered or qualifies for an exemption from registration.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-225; sequence 225; source code 10_DI_18.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source indicates B/False. However, the regulatory treatment of commodity pool interests under state Blue Sky laws can be nuanced and may depend on current federal preemption, exemptions, and state law; therefore this should be reviewed before being treated as verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "225",
    "sourceQuestionNumber": 224,
    "sourceCode": "10_DI_18",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "Which of the following foreign contracts require specific CFTC or SEC approval before they can be offered or sold in the United States?",
    "choices": [
      {
        "id": "a",
        "text": "Futures on foreign stock indexes and futures on foreign debt instruments",
        "isCorrect": true,
        "rationale": "Foreign stock-index futures and related options require CFTC no-action relief, and foreign government debt obligations must be designated as exempted securities by the SEC before futures and related options on those products may be offered or sold to U.S. persons."
      },
      {
        "id": "b",
        "text": "Futures on foreign stock indexes and futures on foreign agricultural products",
        "isCorrect": false,
        "rationale": "Foreign stock-index futures require CFTC no-action relief, but the explanation states that foreign agricultural futures are not one of the specific categories requiring this approval."
      },
      {
        "id": "c",
        "text": "Futures on foreign debt instruments and futures on foreign agricultural products",
        "isCorrect": false,
        "rationale": "Foreign debt obligations require SEC exempted-security designation, but foreign agricultural futures are not included among the specific restrictions described."
      },
      {
        "id": "d",
        "text": "Futures on foreign stock indexes, foreign debt instruments, and foreign agricultural products",
        "isCorrect": false,
        "rationale": "The source explanation identifies only foreign stock-index futures and foreign government debt-obligation futures, not foreign agricultural products."
      }
    ],
    "explanation": "Foreign stock-index futures and related options must receive a CFTC no-action letter. A foreign government debt obligation must be designated an exempted security by the SEC before futures and related options contracts on that product can be offered or sold to U.S. persons. The source states that these are the only such restrictions among the listed categories.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-227; sequence 227; source code 10_DI_12.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and identifies answer E. For app readiness, the combination choice 'A and B only' was rewritten semantically to avoid referential choices. However, the regulatory statement should be reviewed for current applicability because foreign board of trade access, CFTC Part 30 relief/no-action practices, and SEC exempted-security treatment may have evolved since the source material.",
    "issueTypes": [
      "bad_distractors",
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "227",
    "sourceQuestionNumber": 226,
    "sourceCode": "10_DI_12",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-227",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "true_false",
    "stem": "A \"major investee pool\" is defined as any pool in which another pool participates or invests at least 20 percent of the net asset value of the pool.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": false,
        "rationale": "The stated 20 percent threshold is incorrect; the displayed explanation says the threshold is at least 10 percent."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": true,
        "rationale": "The displayed explanation states that a major investee pool is defined by another pool investing at least 10 percent of the net asset value of the pool, not 20 percent."
      }
    ],
    "explanation": "A major investee pool is defined as any pool in which another pool invests at least 10 percent of the net asset value of the pool. Therefore, the statement using a 20 percent threshold is false.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-228; sequence 228; source code 10_DI_9.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is internally consistent. However, this is a specialized CPO disclosure-document definition and the current regulatory threshold/terminology should be independently confirmed before marking verified.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "228",
    "sourceQuestionNumber": 227,
    "sourceCode": "10_DI_9",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "qualityNotes": "The screenshot is readable and the source answer is clear. However, CFTC Rule 1.31 recordkeeping requirements have been amended over time, including changes to storage/accessibility terminology, so the legacy wording may be outdated depending on the current Series 3 testable rule set. Needs review before app publication. Duplicate review: Exact duplicate of s3-regulatory-pdf-225.",
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
    "stem": "All required performance disclosure in a CPO's Disclosure Document must be presented for:",
    "choices": [
      {
        "id": "a",
        "text": "The most recent two years and the year-to-date.",
        "isCorrect": false,
        "rationale": "CPO disclosure document performance disclosure requirements are not limited to the most recent two years plus year-to-date."
      },
      {
        "id": "b",
        "text": "The most recent three years and the year-to-date.",
        "isCorrect": false,
        "rationale": "The source identifies five years plus year-to-date, not three years plus year-to-date."
      },
      {
        "id": "c",
        "text": "The most recent five years and the year-to-date.",
        "isCorrect": true,
        "rationale": "Required performance disclosure in a CPO's Disclosure Document must be presented for the most recent five years and the year-to-date."
      },
      {
        "id": "d",
        "text": "The most recent ten years and the year-to-date.",
        "isCorrect": false,
        "rationale": "The source identifies five years plus year-to-date, not ten years plus year-to-date."
      }
    ],
    "explanation": "All required performance disclosure in a CPO's Disclosure Document must be presented for the most recent five years and the year-to-date.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-232; sequence 232; source code 10_DI_40.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and internally consistent, with exactly one stated correct answer. However, the regulatory lookback period for CPO/CTA performance presentation may be affected by current CFTC/NFA disclosure-document requirements and should be verified against current rules before app use.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "232",
    "sourceQuestionNumber": 231,
    "sourceCode": "10_DI_40",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "The adjusted net capital requirement of an introducing broker may be satisfied by the greatest of which of the following?",
    "choices": [
      {
        "id": "a",
        "text": "$45,000",
        "isCorrect": false,
        "rationale": "This is one component of the greatest-of test, but not the only one."
      },
      {
        "id": "b",
        "text": "$6,000 per office operated, for introducing brokers with less than $1 million in adjusted net capital",
        "isCorrect": false,
        "rationale": "This is one component of the greatest-of test, but not the only one."
      },
      {
        "id": "c",
        "text": "$3,000 for each associated person sponsored, for introducing brokers with less than $1 million in adjusted net capital",
        "isCorrect": false,
        "rationale": "This is one component of the greatest-of test, but not the only one."
      },
      {
        "id": "d",
        "text": "For a securities broker-dealer, the net capital required by the SEC",
        "isCorrect": false,
        "rationale": "This is one component of the greatest-of test, but not the only one."
      },
      {
        "id": "e",
        "text": "The greatest amount determined using all of these methods",
        "isCorrect": true,
        "rationale": "The introducing broker adjusted net capital requirement is determined by applying each applicable alternative and using the greatest resulting amount."
      }
    ],
    "explanation": "Each of the listed methods must be considered when determining the adjusted net capital requirement of an introducing broker; the requirement is the greatest amount produced under the applicable alternatives.",
    "sourceType": "imported",
    "active": true,
    "concept": "FCM / IB Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-238; sequence 238; source code 10_DI_17.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is clear. However, the stated IB minimum net capital figure of $45,000 may be outdated under current NFA/CFTC requirements, so the item should be reviewed before use as a current regulatory question. The source also uses an 'All of the above' option; it was semantically rewritten in the app-ready choices.",
    "issueTypes": [
      "outdated_rule"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "238",
    "sourceQuestionNumber": 237,
    "sourceCode": "10_DI_17",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
  },
  {
    "id": "s3-regulatory-pdf-238",
    "sectionId": "us_regulations",
    "topicId": "cpo-cta",
    "subtopicId": "cpo-regulations",
    "difficulty": "medium",
    "questionType": "multiple_choice",
    "stem": "Which of the following are among the factors considered in determining whether a commodity pool operator is exempt from CFTC registration?",
    "choices": [
      {
        "id": "a",
        "text": "Operating more than one pool at any one time and having total gross capital contributions in all operated pools exceed $400,000.",
        "isCorrect": true,
        "rationale": "The visible explanation states that operating more than one pool at any time and gross capital contributions in all operated pools of over $400,000 are factors considered in determining whether a CPO is exempt from CFTC registration."
      },
      {
        "id": "b",
        "text": "Using more than one Commodity Trading Advisor.",
        "isCorrect": false,
        "rationale": "The source does not identify use of more than one Commodity Trading Advisor as one of the factors."
      },
      {
        "id": "c",
        "text": "Using more than one Commodity Trading Advisor and operating only one pool.",
        "isCorrect": false,
        "rationale": "Use of more than one Commodity Trading Advisor is not identified by the source as a factor, and operating only one pool does not match the stated factor of operating more than one pool."
      },
      {
        "id": "d",
        "text": "Having total gross capital contributions at or below $400,000 while receiving only reimbursement for ordinary administrative costs.",
        "isCorrect": false,
        "rationale": "The source explanation identifies gross capital contributions over $400,000 and compensation beyond reimbursement for ordinary administrative costs as relevant factors."
      }
    ],
    "explanation": "According to the source explanation, operating more than one commodity pool at any time and having total gross capital contributions in all operated pools of over $400,000 are factors considered when determining whether a commodity pool operator is exempt from CFTC registration. The source also notes other factors, such as receiving compensation beyond reimbursement for ordinary administrative costs and advertising or otherwise holding oneself out to the public as a pool operator.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-239; sequence 239; source code 10_DI_24.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source answer is clear, but the original choices include combination options such as \"A, B and C\" and \"A and B only,\" which are not app-ready. The item was rewritten semantically to avoid those choices. Also, CPO registration exemptions and monetary thresholds may have changed or may require more precise current-rule context, so the item should be reviewed against current CFTC/NFA rules before verification.",
    "issueTypes": [
      "outdated_rule",
      "bad_distractors"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "239",
    "sourceQuestionNumber": 238,
    "sourceCode": "10_DI_24",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
    "stem": "In regard to discretionary accounts handled by third-party account controllers (accounts directed by someone other than an AP of the FCM or IB), NFA rules require:",
    "choices": [
      {
        "id": "a",
        "text": "No additional documentation.",
        "isCorrect": false,
        "rationale": "NFA Rule 2-8 requires additional documentation for discretionary accounts controlled by third parties."
      },
      {
        "id": "b",
        "text": "The FCM or IB to obtain a copy of the account controller's trading authorization or written acknowledgment from the customer that such authorization has been given.",
        "isCorrect": false,
        "rationale": "This item is required, but it is incomplete because the customer acknowledgment regarding receipt of a disclosure document or written statement is also required."
      },
      {
        "id": "c",
        "text": "The FCM or IB to obtain an acknowledgment from the customer that the customer has received either a disclosure document or a written statement from the account controller explaining why the document is not required.",
        "isCorrect": false,
        "rationale": "This item is required, but it is incomplete because the FCM or IB must also obtain the trading authorization or customer acknowledgment that authorization has been given."
      },
      {
        "id": "d",
        "text": "Both the trading authorization or customer acknowledgment of authorization, and the customer's acknowledgment regarding receipt of the disclosure document or written statement.",
        "isCorrect": true,
        "rationale": "For third-party controlled discretionary accounts, NFA Rule 2-8 requires both forms of documentation described in choices B and C."
      }
    ],
    "explanation": "NFA Rule 2-8, covering discretionary accounts, requires FCMs and IBs to obtain additional documentation when an account is controlled by a third party other than certain family members. They must obtain a copy of the account controller's written trading authorization, or an acknowledgment from the customer that the authorization has been given, and they must also obtain an acknowledgment from the customer that a disclosure document has been received from the account controller or that a written statement explaining why no disclosure document is required has been received.",
    "sourceType": "imported",
    "active": true,
    "concept": "General Regulatory Topics",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-243; sequence 243; source code 10_DI_21.",
    "reviewStatus": "reviewed",
    "qualityStatus": "verified",
    "qualityNotes": "The source uses 'Both B and C' as the correct choice. For app readiness, choice D has been rewritten semantically to avoid a cross-reference while preserving the rule tested. The item is readable and the explanation supports the answer.",
    "verifiedAt": "2026-05-14T00:00:00.000Z",
    "verifiedBy": "OpenAI gpt-5.5 vision transcript + content audit, reasoning low",
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
    "questionType": "true_false",
    "stem": "CTAs and CPOs who service only high net worth clients known as \"Qualified Eligible Persons\" are exempted from various disclosure, reporting, and recordkeeping requirements.",
    "choices": [
      {
        "id": "a",
        "text": "True",
        "isCorrect": true,
        "rationale": "Certain CTAs and CPOs serving only Qualified Eligible Persons may qualify for exemptions or reduced disclosure, reporting, and recordkeeping requirements."
      },
      {
        "id": "b",
        "text": "False",
        "isCorrect": false,
        "rationale": "The statement is generally true in the Series 3 regulatory context for CTAs and CPOs serving only Qualified Eligible Persons."
      }
    ],
    "explanation": "CTAs and CPOs who service only high net worth clients known as \"Qualified Eligible Persons\" are exempted from various disclosure, reporting, and recordkeeping requirements.",
    "sourceType": "imported",
    "active": true,
    "concept": "CPO / CTA Regulations",
    "sourceNote": "User-provided S3-Regulatory.pdf LLM vision import; source item regulatory-pdf-244; sequence 244; source code 10_DI_43.",
    "reviewStatus": "needs_review",
    "qualityStatus": "needs_review",
    "qualityNotes": "The screenshot is readable and the source marks A/True as correct. However, the rule is stated broadly; QEP-related CPO/CTA exemptions depend on the specific CFTC/NFA exemption and conditions, and current regulatory requirements may not be fully captured by this simplified wording. Explanation merely repeats the stem.",
    "issueTypes": [
      "outdated_rule",
      "weak_explanation"
    ],
    "extractionConfidence": "high",
    "sourcePageRange": "244",
    "sourceQuestionNumber": 243,
    "sourceCode": "10_DI_43",
    "createdAt": "2026-05-14T00:00:00.000Z",
    "updatedAt": "2026-05-14T00:00:00.000Z"
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
