const { test, expect } = require('@playwright/test');

test('logout attempt without logging in', async ({ page }) => {
    await page.goto('https://adactinhotelapp.com/');

    await page.click('#logout');

    const errorMsg = page.locator('.auth_error');
    await expect(errorMsg).toContainText('Please Login to access this area');
});
