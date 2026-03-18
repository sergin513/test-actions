const { test, expect } = require('@playwright/test');

test('somma funziona', async ({ page }) => {

  await page.goto('http://localhost:3000/index.html');

  await page.fill('#a', '4');
  await page.fill('#b', '6');

  await page.locator('button').click();

  await expect(page.locator('#result')).toHaveText('10');
  
});