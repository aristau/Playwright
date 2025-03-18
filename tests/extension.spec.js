// @ts-check
import { chromium } from '@playwright/test';
import { test, expect } from '../fixtures/extensionTest';

test('view extension popup', async ({ page }) => {
  await page.goto('chrome-extension://apoakkflmfmppaebpefjflbhkhbkojom/hello.html');
  await expect(page.locator('body')).toContainText('Hello Extensions');
 });

 test('first name is populated', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/register');
  await expect(page.getByRole('textbox', {name: 'First Name'})).toHaveValue('Anna');
});

// test('required fields are populated', async ({ page}) => {
//   await page.goto('https://qa-practice.netlify.app/register');
//   await expect(page.locator('input[required]')).toHaveCount(2);
// });


// test('extension test3', async ({ page, extensionId }) => {
//   await page.goto(`chrome-extension://${extensionId}/hello.html`);
//   await expect(page.locator('body')).toHaveText('Hello');
// });

