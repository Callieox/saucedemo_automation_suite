// Details Confirmation Page POM

// Importing necessary modules
import { Page, Locator, expect } from '@playwright/test';

// Details Confirmation Page Class
export class DetailsConfirmationPage {
    readonly page: Page;
    readonly itemName: Locator;
    readonly itemDescription: Locator;
    readonly itemPrice: Locator;
    readonly itemQuantity: Locator;
    readonly paymentInfo: Locator;
    readonly shippingInfo: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.itemName = page.locator('.inventory_item_name');
        this.itemDescription = page.locator('.inventory_item_desc');
        this.itemPrice = page.locator('.inventory_item_price');
        this.itemQuantity = page.locator('.cart_quantity');
        this.paymentInfo = page.locator('.summary_info_label.summary_info_label_payment_method');
        this.shippingInfo = page.locator('.summary_info_label.summary_info_label_shipping');
        this.itemTotal = page.locator('.summary_subtotal_label');
        this.tax = page.locator('.summary_tax_label');
        this.total = page.locator('.summary_total_label');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }
}