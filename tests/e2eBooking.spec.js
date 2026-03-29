const { test, expect } = require('@playwright/test');



test('end-to-end booking flow', async ({ page }) => {
    test.slow();

    await page.goto('https://adactinhotelapp.com/');
    
    // Log in
    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');
    await page.click('#login');

    
    await page.waitForSelector('#location');

    // Select filters
    await page.selectOption('#location', 'Sydney');
    await page.selectOption('#hotels', 'Hotel Cornice');
    await page.selectOption('#room_type', 'Double');
    await page.selectOption('#room_nos', '1');
    await page.fill('#datepick_in', '03/04/2025');
    await page.fill('#datepick_out', '10/04/2025');
    await page.selectOption('#adult_room', '1 - One');
    await page.selectOption('#child_room', '1 - One');
    await page.click('#Submit');


    // select first hotel 
    await page.click('#radiobutton_0');
    await page.click('#continue');
    
    // Fill in booking details  
    await page.waitForSelector('#first_name');
    await page.fill('#first_name','Anas');
    await page.fill('#last_name','Arif');
    await page.fill('#address','9843u, university road, xinjiang');
    await page.fill('#cc_num','4758934758934567');
    await page.selectOption('#cc_type','VISA');
    await page.selectOption('#cc_exp_month','March');
    await page.selectOption('#cc_exp_year','2026');
    await page.fill('#cc_cvv','093');

    await page.click('#book_now');

    await page.waitForSelector('#order_no');
    const orderNumber = await page.inputValue('#order_no');
    expect(orderNumber).toBeTruthy();

    //navigate to my_itinerary and verify whether order id is present
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