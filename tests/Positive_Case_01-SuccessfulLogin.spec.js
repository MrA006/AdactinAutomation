const { test, expect } = require('@playwright/test');

test('successful login with valid credentials', async ({ page }) => {
    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');
    await page.click('#login');

    await page.waitForSelector('.welcome_menu');
    const welcomeMsg = page.locator('.welcome_menu').first();
    await expect(welcomeMsg).toContainText('Welcome to Adactin Group of Hotels');
});
