const { test, expect } = require('@playwright/test');

test('valid hotel search with correct filters', async ({ page }) => {
    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');
    await page.click('#login');

    await page.waitForSelector('#location');
    await page.selectOption('#location', 'Sydney');
    await page.selectOption('#hotels', 'Hotel Cornice');
    await page.selectOption('#room_type', 'Double');
    await page.selectOption('#room_nos', '1');
    await page.fill('#datepick_in', '03/04/2025');
    await page.fill('#datepick_out', '10/04/2025');
    await page.selectOption('#adult_room', '1 - One');
    await page.selectOption('#child_room', '0 - None');
    await page.click('#Submit');

    await page.waitForSelector('#select_form');
    const searchResults = page.locator('#select_form');
    await expect(searchResults).toBeVisible();
});
