// Basket Page POM

// Importing necessary modules
import { Page, Locator, expect } from '@playwright/test';

// Basket Page Class
export class BasketPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    // Method to verify basket page loaded
    async verifyBasketPageLoaded() {
        // Expect the page to have the URL for the basket page
        await expect(this.page).toHaveURL(/cart.html/);

        // Expect the cart items to be visible
        await expect(this.cartItems).toBeVisible();
    }

    // Method to verify the number of items in the cart
    async getCartItemsCount() {
        return await this.cartItems.count();
    }

    // Method to click the checkout button
    async clickCheckout() {
        await this.checkoutButton.click();
    }

    // Method to click the continue shopping button
    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }

    // Method to verify the cart is empty
    async verifyCartIsEmpty() {
        const itemCount = await this.getCartItemsCount();
        expect(itemCount).toBe(0);
    }
}