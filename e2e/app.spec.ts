import { expect, test } from "@playwright/test";

test("opens the dashboard and browses the QCM bank", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Study Dashboard" })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "Active account" })).toHaveValue("jj");

  await page.getByRole("button", { name: "QCM Bank" }).click();
  await expect(page.getByLabel("Question bank priority")).toHaveValue("all");
  await expect(page.getByLabel("Quality status")).toHaveValue("usable");
  await expect(page.getByRole("heading", { name: "1113 QCMs in current scope" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Section to subtopic" })).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("s3-regulatory-pdf");
  await expect(page.getByRole("heading", { name: "250 QCMs in current scope" })).toBeVisible();
  await expect(page.locator(".regulatory-stats .metric").filter({ hasText: "Regulatory QCMs" })).toContainText("250");
  await page.getByLabel("Regulatory focus").selectOption("high-yield");
  await page.getByLabel("Question bank priority").selectOption("all");
  await expect(page.getByRole("heading", { name: "1113 QCMs in current scope" })).toBeVisible();
  await page.getByLabel("Quality status").selectOption("rejected");
  await page.getByLabel("Issue type").selectOption("duplicate");
  await expect(page.getByRole("heading", { name: "0 QCMs in current scope" })).toBeVisible();
});

test("keeps study progress isolated between accounts", async ({ page }) => {
  await page.goto("/");
  const accountSelect = page.getByRole("combobox", { name: "Active account" });

  await page.getByRole("button", { name: "Quick drill" }).click();
  await expect(page.getByRole("heading", { name: /Question 1 of/ })).toBeVisible();

  await accountSelect.selectOption("eric");
  await expect(page.getByRole("heading", { name: "Study Dashboard" })).toBeVisible();
  await expect(page.locator(".sidebar-footer")).toContainText("Active account: Eric");
  await expect(page.locator(".sidebar-footer")).toContainText("0 sessions");

  await accountSelect.selectOption("jj");
  await expect(page.locator(".sidebar-footer")).toContainText("Active account: JJ");
  await expect(page.locator(".sidebar-footer")).toContainText("1 sessions");
});

test("starts a topic drill and shows immediate feedback", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Practice", exact: true }).click();
  await expect(page.getByLabel("Quality status")).toHaveValue("verified");
  await expect(page.getByLabel("Question bank priority")).toHaveValue("all");
  await expect(page.getByRole("heading", { name: "1113 matching QCMs" })).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("s3-market-docx");
  await expect(page.getByRole("heading", { name: "465 matching QCMs" })).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("authored");
  await expect(page.getByRole("heading", { name: "394 matching QCMs" })).toBeVisible();
  await page.getByRole("button", { name: /Start drill/ }).click();

  await expect(page.getByRole("heading", { name: /Question 1 of/ })).toBeVisible();
  await page.locator(".answer-choice").first().click();
  await page.getByRole("button", { name: "Submit answer" }).click();
  await expect(page.locator(".feedback-status")).toContainText(/Correct|Incorrect/);
});

test("opens the integrated course and launches filtered practice", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Course" }).click();
  await expect(page.getByRole("heading", { name: "Series 3 Course" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Chapters" })).toBeVisible();
  await page.getByRole("button", { name: /Course visual Key roles in the futures industry/i }).click();
  await expect(page.getByRole("heading", { name: "Key roles in the futures industry" })).toBeVisible();
  await expect(page.getByRole("img", { name: /Key roles in the futures industry/i })).toHaveAttribute(
    "src",
    "course/futures-industry-roles.png"
  );
  await page.getByRole("button", { name: "Enlarge visual" }).click();
  const enlargedVisual = page.getByRole("dialog", { name: "Key roles visual enlarged" });
  await expect(enlargedVisual).toBeVisible();
  await expect(enlargedVisual.getByRole("img", { name: /Key roles in the futures industry/i })).toHaveAttribute(
    "src",
    "course/futures-industry-roles.png"
  );
  await page.getByRole("button", { name: "Close enlarged visual" }).click();
  await expect(enlargedVisual).not.toBeVisible();
  await page.getByLabel("Search course").fill("CFTC");
  await expect(page.getByRole("img", { name: /Key roles in the futures industry/i })).toBeVisible();
  await page.getByLabel("Search course").fill("basis");
  await expect(page.getByRole("button", { name: /Basis Calculations|Basis Calculation/i }).first()).toBeVisible();
  await page.getByRole("button", { name: /Basis Calculations|Basis Calculation/i }).first().click();
  await expect(page.getByRole("heading", { name: /Basis/i }).first()).toBeVisible();
  await page.getByRole("button", { name: "Practice this topic" }).click();
  await expect(page.getByRole("heading", { name: "Practice by Topic" })).toBeVisible();
  await expect(page.getByLabel("Section")).toHaveValue("market_knowledge");
  await expect(page.getByLabel("Quality status")).toHaveValue("verified");
});

test("opens the glossary and searches acronyms", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Glossary" }).click();
  await expect(page.getByRole("heading", { name: "Acronyms & Definitions" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Acronyms and key definitions" })).toBeVisible();
  await page.getByLabel("Search glossary").fill("CFTC");
  await expect(page.getByRole("heading", { name: "CFTC" })).toBeVisible();
  await expect(page.getByText("Commodity Futures Trading Commission").first()).toBeVisible();
  await page.getByLabel("Category").selectOption("market");
  await expect(page.getByRole("heading", { name: "CFTC" })).not.toBeVisible();
});

test("starts a mock exam and opens results", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Mock Exam" }).click();
  await expect(page.getByLabel("Question bank priority")).toHaveValue("all");
  await expect(page.getByLabel("Quality status")).toHaveValue("verified");
  await expect(page.getByText("1113 matching active QCMs")).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("s3-market-docx");
  await expect(page.getByText("469 matching active QCMs")).toBeVisible();
  await expect(page.locator(".distribution-summary .metric").filter({ hasText: "Current bank" })).toContainText("469");
  await page.getByLabel("Question bank priority").selectOption("s3-regulatory-pdf");
  await expect(page.getByText("250 matching active QCMs")).toBeVisible();
  await expect(page.locator(".distribution-summary .metric").filter({ hasText: "Current bank" })).toContainText("250");
  await expect(page.getByText("Arbitration, Discipline and Enforcement")).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("all");
  await page.getByRole("button", { name: /Start mock exam/ }).click();
  await expect(page.getByRole("heading", { name: /Question 1 of 120/ })).toBeVisible();
  await page.getByRole("button", { name: "Submit session" }).click();
  await expect(page.getByRole("heading", { name: "Results", exact: true })).toBeVisible();
  await expect(page.getByText("both sections must pass")).toBeVisible();
});
