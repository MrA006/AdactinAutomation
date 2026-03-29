const { test, expect } = require('@playwright/test');

test('invalid login credentials', async ({ page }) => {

    await page.goto('https://adactinhotelapp.com/');


    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'wrongpass123');
    await page.click('#login');

    const errorMsg = page.locator('.auth_error');
    await expect(errorMsg).toContainText('Invalid Login details');


    await page.waitForTimeout(10000);


});
