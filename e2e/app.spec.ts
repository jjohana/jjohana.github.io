import { expect, test } from "@playwright/test";

test("opens the dashboard and browses the QCM bank", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Study Dashboard" })).toBeVisible();

  await page.getByRole("button", { name: "QCM Bank" }).click();
  await expect(page.getByRole("heading", { name: /QCMs in current scope/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Section to subtopic" })).toBeVisible();
});

test("starts a topic drill and shows immediate feedback", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Practice", exact: true }).click();
  await page.getByRole("button", { name: /Start drill/ }).click();

  await expect(page.getByRole("heading", { name: /Question 1 of/ })).toBeVisible();
  await page.locator(".answer-choice").first().click();
  await page.getByRole("button", { name: "Submit answer" }).click();
  await expect(page.getByText(/Correct|Incorrect/)).toBeVisible();
});

test("starts a mock exam and opens results", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Mock Exam" }).click();
  await page.getByRole("button", { name: /Start mock exam/ }).click();
  await expect(page.getByRole("heading", { name: /Question 1 of 120/ })).toBeVisible();
  await page.getByRole("button", { name: "Submit session" }).click();
  await expect(page.getByRole("heading", { name: "Results", exact: true })).toBeVisible();
  await expect(page.getByText("both sections must pass")).toBeVisible();
});
