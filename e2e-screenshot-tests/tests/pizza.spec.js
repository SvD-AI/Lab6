const { test, expect } = require('@playwright/test');

test.describe('Pizza Shop Tests', () => {

    // Посилання на нашу сторінку (припускаємо, що сервер запущено на порту 3000)
    const PAGE_URL = 'http://localhost:3000/pizza.html';

    test.beforeEach(async ({ page }) => {
        await page.goto(PAGE_URL);
    });

    // --- E2E ТЕСТИ (3-5 штук) ---

    test('TC-01: Перевірка заголовка сторінки', async ({ page }) => {
        // Було 'Pizza Order', міняємо на 'Burger King' щоб тест впав
        await expect(page).toHaveTitle(/Burger King/); 
    });

    test('TC-02: Успішне замовлення піци', async ({ page }) => {
        // Заповнюємо ім'я
        await page.fill('#name', 'Test User');
        // Обираємо піцу
        await page.selectOption('#pizza', 'pepperoni');
        // Клікаємо замовити
        await page.click('#orderBtn');

        // Перевіряємо, що з'явилося повідомлення успіху
        const message = page.locator('#message');
        await expect(message).toBeVisible();
        await expect(message).toContainText('Дякуємо! Замовлення прийнято.');
    });

    test('TC-03: Валідація форми (пусте ім\'я)', async ({ page }) => {
        // Намагаємося натиснути кнопку без введення імені
        await page.click('#orderBtn');

        // Перевіряємо валідацію браузера (CSS псевдоклас :invalid)
        const invalidInput = page.locator('#name:invalid');
        await expect(invalidInput).toBeVisible(); // Поле має бути "невалідним"
    });

    // --- SCREENSHOT ТЕСТИ (2 штуки) ---

    test('Visual-01: Перевірка вигляду всієї форми', async ({ page }) => {
        // Робимо скріншот всієї форми
        const form = page.locator('.container');
        await expect(form).toHaveScreenshot('pizza-form.png');
    });

    test('Visual-02: Перевірка вигляду кнопки', async ({ page }) => {
        const btn = page.locator('#orderBtn');
        await expect(btn).toHaveScreenshot('order-button.png');
    });

});
