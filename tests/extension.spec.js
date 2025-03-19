// @ts-check
import { chromium } from '@playwright/test';
import { test, expect } from '../fixtures/extensionTest';

//Open the extension before each test
test.describe('extension', () => {
  test.beforeEach(async ({ page, extensionId }) => {
    await page.goto(`chrome-extension://${extensionId}/hello.html`)
  });

  test('view extension popup', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Hello Extensions');
  });

  test('playwright can interact with extension', async ({ page }) => {
    await page.getByTestId('extensionFirstName').fill('Anna');
    await page.getByTestId('extensionSaveBtn').click();
  });

  test('website first name is populated with first name from extension', async ({ page}) => {
    //Enter a name and press the Save button in the extension
    await page.getByTestId('extensionFirstName').fill('Rose');
    await page.getByTestId('extensionSaveBtn').click();

    //Log Chrome storage data for debugging purposes
    const storageData = await page.evaluate(() => {
      return new Promise((resolve) => {
          chrome.storage.sync.get(null, resolve);
      });
    });
    console.log(storageData);

    //Go to a website
    await page.goto('https://qa-practice.netlify.app/register');

    //Confirm that the first name input on the website is populated with the first name that was saved in the extension
    await expect(page.getByRole('textbox', {name: 'First Name'})).toHaveValue('Rose');
  });

});