// @ts-check
import { test, expect } from '../fixtures/extensionTest';

test('has title2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});



// test('extension popup', async ({ page, extensionId }) => {
//     await page.goto(`chrome-extension://${extensionId}/popup.html`);
//     await expect(page.locator('body')).toHaveText('my-extension popup');
// });
