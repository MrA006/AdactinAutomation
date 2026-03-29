const { test, expect } = require('@playwright/test');

test('empty required fields on booking form', async ({ page }) => {
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
    await page.fill('#datepick_in', '03/04/2025');
    await page.fill('#datepick_out', '10/04/2025');
    await page.selectOption('#adult_room', '1 - One');
    await page.selectOption('#child_room', '1 - One');
    await page.click('#Submit');

    await page.click('#radiobutton_0');
    await page.click('#continue');

    await page.waitForSelector('#first_name');
    await page.fill('#last_name', 'Arif');
    await page.fill('#address', '9843u, university road, xinjiang');
    await page.fill('#cc_cvv', '093');
    await page.selectOption('#cc_type', 'VISA');
    await page.selectOption('#cc_exp_month', 'March');
    await page.selectOption('#cc_exp_year', '2026');
    await page.click('#book_now');

    const errorMsg = page.locator('#first_name_span');
    await expect(errorMsg).toContainText('Please Enter your First Name');

});
