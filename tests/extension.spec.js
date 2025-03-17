// @ts-check
import { test, expect } from '../fixtures/extensionTest';

// test('example test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('extension test', async ({ page }) => {
//   await page.goto('chrome://extensions');
//   await expect(page).toHaveTitle(/Extensions/);
// });

test('view extension popup', async ({ page }) => {
  await page.goto('chrome-extension://apoakkflmfmppaebpefjflbhkhbkojom/hello.html');
  await expect(page.locator('body')).toContainText('Hello Extensions')
 });

 test('first name is populated', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/register');
  await expect(page.getByRole('textbox', {name: 'First Name'})).toHaveValue('Anna')
});

// test('first name has correct value', async({page }) => {

// });


// test('required fields are populated', async ({ page}) => {
//   await page.goto('https://qa-practice.netlify.app/register');
//   await expect(page.locator('input[required]')).toHaveCount(2);
// });


// test('extension test3', async ({ page, extensionId }) => {
//   await page.goto(`chrome-extension://${extensionId}/hello.html`);
//   await expect(page.locator('body')).toHaveText('Hello');
// });

