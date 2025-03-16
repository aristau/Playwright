const { test: base, chromium } = require('@playwright/test');
const path = require('path');

const test = base.extend({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, '../extension');
    const context = await chromium.launchPersistentContext('', {
      channel: 'chromium',
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
  extensionId: async ({ context }, use) => {
    let [background] = context.serviceWorkers();
    if (!background)
      background = await context.waitForEvent('serviceworker');

    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  },
});
const expect = test.expect;

module.exports = { test, expect };