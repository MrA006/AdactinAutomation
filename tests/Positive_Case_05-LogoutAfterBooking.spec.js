const { test, expect } = require('@playwright/test');

test('successful logout after booking', async ({ page }) => {
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

    await page.click('#radiobutton_0');
    await page.click('#continue');

    await page.waitForSelector('#first_name');
    await page.fill('#first_name', 'Anas');
    await page.fill('#last_name', 'Arif');
    await page.fill('#address', '9843u, university road, xinjiang');
    await page.fill('#cc_num', '5258934758934567');
    await page.selectOption('#cc_type', 'Master Card');
    await page.selectOption('#cc_exp_month', 'March');
    await page.selectOption('#cc_exp_year', '2026');
    await page.fill('#cc_cvv', '093');
    await page.click('#book_now');

    await page.waitForSelector('#order_no');

    await page.click('#logout');
    const logoutMsg = page.locator('.reg_success');
    await expect(logoutMsg).toContainText('You have successfully logged out');
});
