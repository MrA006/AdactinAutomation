const { test, expect } = require('@playwright/test');

test('check-out date before check-in date', async ({ page }) => {
    test.slow();

    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');
    await page.click('#login');

    await page.waitForSelector('#location');
    await page.selectOption('#location', 'Sydney');
    await page.selectOption('#hotels', 'Hotel Cornice');
    await page.selectOption('#room_type', 'Double');
    await page.selectOption('#room_nos', '1');
    await page.fill('#datepick_in', '10/04/2025');
    await page.fill('#datepick_out', '03/04/2025');
    await page.selectOption('#adult_room', '1 - One');
    await page.selectOption('#child_room', '1 - One');
    await page.click('#Submit');

    const errorMsg = page.locator('#checkin_span');
    await expect(errorMsg).toContainText('Check-In Date shall be before than Check-Out Date');

});
