// Order Confirmation Page POM

// Importing necessary modules
import { Page, Locator, expect } from '@playwright/test';

// Order Confirmation Page Class
export class OrderConfirmationPage {
    readonly page: Page;
    readonly checkoutCompleteHeader: Locator;
    readonly orderConfirmationMessage: Locator;
    readonly backHomeButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.checkoutCompleteHeader = page.locator('.complete-header');
        this.orderConfirmationMessage = page.locator('.complete-text');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }
}