const { test, expect } = require('@playwright/test');

test('booking with multiple rooms and adults', async ({ page }) => {
    test.slow();

    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');
    await page.click('#login');

    await page.waitForSelector('#location');
    await page.selectOption('#location', 'Melbourne');
    await page.selectOption('#hotels', 'Hotel Sunshine');
    await page.selectOption('#room_type', 'Deluxe');
    await page.selectOption('#room_nos', '3');
    await page.fill('#datepick_in', '05/05/2025');
    await page.fill('#datepick_out', '12/05/2025');
    await page.selectOption('#adult_room', '3 - Three');
    await page.selectOption('#child_room', '2 - Two');
    await page.click('#Submit');

    await page.click('#radiobutton_0');
    await page.click('#continue');

    await page.waitForSelector('#first_name');
    await page.fill('#first_name', 'Anas');
    await page.fill('#last_name', 'Arif');
    await page.fill('#address', '9843u, university road, xinjiang');
    await page.fill('#cc_num', '4758934758934567');
    await page.selectOption('#cc_type', 'VISA');
    await page.selectOption('#cc_exp_month', 'March');
    await page.selectOption('#cc_exp_year', '2026');
    await page.fill('#cc_cvv', '093');

    await page.click('#book_now');

    await page.waitForSelector('#order_no');
    const orderNumber = await page.inputValue('#order_no');
    expect(orderNumber).toBeTruthy();

    await page.click('#my_itinerary');
    await page.waitForSelector('#order_id_text');
    await page.fill('#order_id_text', orderNumber);
    await page.click('#search_hotel_id');

    await page.waitForSelector('#search_result_error');
    const orderId = await page.inputValue('.select_text');
    expect(orderId).toBe(orderNumber);

    await page.click('#logout');
    const logoutMsg = page.locator('.reg_success');
    await expect(logoutMsg).toContainText('You have successfully logged out');
});
