import type { Question } from "../types";

const calculationVerifiedIds = [
  "s3-market-docx-38",
  "s3-market-docx-70",
  "s3-market-docx-132",
  "s3-market-docx-133",
  "s3-market-docx-134",
  "s3-market-docx-135",
  "s3-market-docx-136",
  "s3-market-docx-137",
  "s3-market-docx-138",
  "s3-market-docx-139",
  "s3-market-docx-140",
  "s3-market-docx-141",
  "s3-market-docx-142",
  "s3-market-docx-143",
  "s3-market-docx-145",
  "s3-market-docx-160",
  "s3-market-docx-169",
  "s3-market-docx-179",
  "s3-market-docx-182",
  "s3-market-docx-190",
  "s3-market-docx-210",
  "s3-market-docx-214",
  "s3-market-docx-217",
  "s3-market-docx-222",
  "s3-market-docx-225",
  "s3-market-docx-228",
  "s3-market-docx-231",
  "s3-market-docx-232",
  "s3-market-docx-233",
  "s3-market-docx-234",
  "s3-market-docx-236",
  "s3-market-docx-241",
  "s3-market-docx-251",
  "s3-market-docx-263",
  "s3-market-docx-266",
  "s3-market-docx-267",
  "s3-market-docx-268",
  "s3-market-docx-269",
  "s3-market-docx-270",
  "s3-market-docx-280",
  "s3-market-docx-292",
  "s3-market-docx-301",
  "s3-market-docx-305",
  "s3-market-docx-313",
  "s3-market-docx-314",
  "s3-market-docx-319",
  "s3-market-docx-320",
  "s3-market-docx-321",
  "s3-market-docx-322",
  "s3-market-docx-324",
  "s3-market-docx-326",
  "s3-market-docx-327",
  "s3-market-docx-328",
  "s3-market-docx-329",
  "s3-market-docx-330",
  "s3-market-docx-334",
  "s3-market-docx-335",
  "s3-market-docx-336",
  "s3-market-docx-337",
  "s3-market-docx-338",
  "s3-market-docx-339",
  "s3-market-docx-347",
  "s3-market-docx-352",
  "s3-market-docx-353",
  "s3-market-docx-354",
  "s3-market-docx-356",
  "s3-market-docx-357",
  "s3-market-docx-359",
  "s3-market-docx-360",
  "s3-market-docx-361",
  "s3-market-docx-363",
  "s3-market-docx-365",
  "s3-market-docx-366",
  "s3-market-docx-370",
  "s3-market-docx-371",
  "s3-market-docx-372",
  "s3-market-docx-373",
  "s3-market-docx-378",
  "s3-market-docx-384",
  "s3-market-docx-406",
  "s3-market-docx-411",
  "s3-market-docx-428",
  "s3-market-docx-431",
  "s3-market-docx-433",
  "s3-market-docx-437",
  "s3-market-docx-439",
  "s3-market-docx-440",
  "s3-market-docx-441",
  "s3-market-docx-444"
];

const calculationVerifiedOverrides = Object.fromEntries(
  calculationVerifiedIds.map((id) => [
    id,
    {
      qualityStatus: "verified",
      issueTypes: [],
      qualityNotes: "Verified in calculation audit: formula, direction, contract size, commission treatment, and answer were recomputed."
    } satisfies Partial<Question>
  ])
) as Record<string, Partial<Question>>;

export const questionQualityOverrides: Record<string, Partial<Question>> = {
  ...calculationVerifiedOverrides,
  "s3-market-docx-131": {
    qualityStatus: "rejected",
    issueTypes: ["wrong_answer", "ambiguous"],
    qualityNotes: "Rejected by calculation audit: the imported options table is corrupted and the indicated intrinsic-value answer conflicts with the formula."
  },
  "s3-market-docx-250": {
    qualityStatus: "rejected",
    issueTypes: ["duplicate"],
    qualityNotes: "Rejected by duplicate audit: exact duplicate of s3-market-docx-239."
  },
  "s3-market-docx-300": {
    qualityStatus: "rejected",
    issueTypes: ["duplicate"],
    qualityNotes: "Rejected by duplicate audit: exact duplicate of s3-market-docx-283."
  },
  "s3-market-docx-332": {
    qualityStatus: "rejected",
    issueTypes: ["wrong_answer", "calculation_error"],
    qualityNotes: "Rejected by calculation audit: the source-indicated sugar loss subtracts commissions from a loss; no displayed answer matches the corrected loss."
  },
  "s3-market-docx-410": {
    qualityStatus: "rejected",
    issueTypes: ["wrong_answer", "ambiguous"],
    qualityNotes: "Rejected by calculation audit: the imported options table and explanation conflict on which option has intrinsic value."
  },
  "s3-market-docx-443": {
    qualityStatus: "rejected",
    issueTypes: ["duplicate"],
    qualityNotes: "Rejected by duplicate audit: near-duplicate of s3-market-docx-378."
  }
};
