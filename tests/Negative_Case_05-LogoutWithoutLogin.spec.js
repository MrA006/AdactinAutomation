const { test, expect } = require('@playwright/test');

test('logout attempt without logging in', async ({ page }) => {
    await page.goto('https://adactinhotelapp.com/SearchHotel.php');

    const currentUrl = page.url();
    if (currentUrl.includes('SearchHotel.php')) {
        await page.click('#logout');
    }

    const loginForm = page.locator('#login_form');
    await expect(loginForm).toBeVisible();
});
