// @ts-check
import { test, expect } from '../fixtures/extensionTest';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('extension test', async ({ page }) => {
  await page.goto('chrome://extensions');
  await expect(page).toHaveTitle(/Extensions/);
});

test('extension test2', async ({ page }) => {
  await page.goto('chrome://extensions/?id=apoakkflmfmppaebpefjflbhkhbkojom');
  await expect(page).toHaveTitle(/Extensions/);
});


// test('extension test3', async ({ page, extensionId }) => {
//   await page.goto(`chrome-extension://${extensionId}/hello.html`);
//   await expect(page.locator('body')).toHaveText('Hello');
// });

