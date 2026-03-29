const { test, expect } = require('@playwright/test');

test('search itinerary with non-existent order ID', async ({ page }) => {
    test.slow();

    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');
    await page.click('#login');

    await page.getByRole('link', { name: 'Booked Itinerary' }).click();
    
    await page.fill('#order_id_text', 'HTL-000000');
    await page.click('#search_hotel_id');

    await page.waitForSelector('#search_result_error');
    const noResults = page.locator('#search_result_error');
    await expect(noResults).toContainText('0 result(s) found');

    await page.click('#logout');
    const logoutMsg = page.locator('.reg_success');
    await expect(logoutMsg).toContainText('You have successfully logged out');
});
