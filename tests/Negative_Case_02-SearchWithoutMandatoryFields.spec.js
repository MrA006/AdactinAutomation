const { test, expect } = require('@playwright/test');

test('search hotel without selecting mandatory fields', async ({ page }) => {
    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');
    await page.click('#login');

    await page.waitForSelector('#location');
    await page.click('#Submit');

    const errorMsg = page.locator('#checkin_span');
    await expect(errorMsg).toContainText('Check-In Date Field should not be empty');
});
