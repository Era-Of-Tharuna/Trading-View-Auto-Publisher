const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 100,
  });

  const context = await browser.newContext({
    storageState: 'storage/state.json',
  });

  const page = await context.newPage();

  console.log('Opening TradingView...');
  await page.goto('https://www.tradingview.com/chart/', {
    waitUntil: 'domcontentloaded',
    timeout: 0,
  });

  // ⏳ Allow full UI load
  await page.waitForTimeout(20000);

  console.log('Opening Publish dialog (Alt + P)...');

  await page.keyboard.down('Alt');
  await page.keyboard.press('KeyP');
  await page.keyboard.up('Alt');

  // ⏳ Wait for publish dialog
  await page.waitForTimeout(4000);

  console.log('Typing title...');
  await page.keyboard.type('Bullish breakout on AAPL', { delay: 50 });

  // Move to content field
  await page.keyboard.press('Tab');

  console.log('Typing description...');
  await page.keyboard.type(
    'Apple stock is showing strong bullish momentum. Price is holding above key support and volume is increasing. This indicates a possible upward move.',
    { delay: 40 }
  );

  // Move to Publish button
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);

  console.log('Publishing idea...');
  await page.keyboard.press('Enter');

  console.log('POST SUBMITTED');

  // ⏳ Keep browser open so you can verify
  await page.waitForTimeout(15000);

  await browser.close();
})();
