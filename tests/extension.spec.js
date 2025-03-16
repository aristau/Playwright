// @ts-check
import { test, expect } from '../fixtures/extensionTest';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('popup page', async ({ page, extensionId }) => {
  await page.goto(`chrome-extension://${extensionId}/popup.html`);
  await expect(page.locator('body')).toHaveText('my-extension popup');
});
