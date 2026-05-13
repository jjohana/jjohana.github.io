import { expect, test } from "@playwright/test";

test("opens the dashboard and browses the QCM bank", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Study Dashboard" })).toBeVisible();

  await page.getByRole("button", { name: "QCM Bank" }).click();
  await expect(page.getByLabel("Question bank priority")).toHaveValue("s3-imported");
  await expect(page.getByRole("heading", { name: "686 QCMs in current scope" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Section to subtopic" })).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("s3-regulatory-pdf");
  await expect(page.getByRole("heading", { name: "242 QCMs in current scope" })).toBeVisible();
  await expect(page.locator(".regulatory-stats .metric").filter({ hasText: "Regulatory QCMs" })).toContainText("242");
  await page.getByLabel("Regulatory focus").selectOption("high-yield");
  await page.getByLabel("Question bank priority").selectOption("all");
  await expect(page.getByRole("heading", { name: "972 QCMs in current scope" })).toBeVisible();
});

test("starts a topic drill and shows immediate feedback", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Practice", exact: true }).click();
  await expect(page.getByRole("heading", { name: "686 matching QCMs" })).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("s3-regulatory-pdf");
  await expect(page.getByRole("heading", { name: "242 matching QCMs" })).toBeVisible();
  await page.getByRole("button", { name: /Start drill/ }).click();

  await expect(page.getByRole("heading", { name: /Question 1 of/ })).toBeVisible();
  await page.locator(".answer-choice").first().click();
  await page.getByRole("button", { name: "Submit answer" }).click();
  await expect(page.locator(".feedback-status")).toContainText(/Correct|Incorrect/);
});

test("starts a mock exam and opens results", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Mock Exam" }).click();
  await expect(page.getByLabel("Question bank priority")).toHaveValue("s3-imported");
  await expect(page.getByText("686 matching active QCMs")).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("s3-market-docx");
  await expect(page.getByText("444 matching active QCMs")).toBeVisible();
  await expect(page.locator(".distribution-summary .metric").filter({ hasText: "Current bank" })).toContainText("444");
  await page.getByLabel("Question bank priority").selectOption("s3-regulatory-pdf");
  await expect(page.getByText("242 matching active QCMs")).toBeVisible();
  await expect(page.locator(".distribution-summary .metric").filter({ hasText: "Current bank" })).toContainText("242");
  await expect(page.getByText("Arbitration, Discipline and Enforcement")).toBeVisible();
  await page.getByLabel("Question bank priority").selectOption("s3-imported");
  await page.getByRole("button", { name: /Start mock exam/ }).click();
  await expect(page.getByRole("heading", { name: /Question 1 of 120/ })).toBeVisible();
  await page.getByRole("button", { name: "Submit session" }).click();
  await expect(page.getByRole("heading", { name: "Results", exact: true })).toBeVisible();
  await expect(page.getByText("both sections must pass")).toBeVisible();
});
