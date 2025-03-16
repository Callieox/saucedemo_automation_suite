// Inventory Page POM

// Importing necessary modules
import { Page, Locator, expect } from '@playwright/test';

// Inventory Page Class
export class InventoryPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly productFilter: Locator;
    readonly multipleProductContainer: Locator;
    readonly individualProductContainer: Locator;
    readonly productPicture: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('[data-test="title"]');
        this.productFilter = page.locator('[data-test="product-sort-container"]');
        this.multipleProductContainer = page.locator('[data-test="inventory-list"]');
        this.individualProductContainer = page.locator('[data-test="inventory-item"]');
        this.productPicture = page.locator('.inventory_item_img');
        this.productDescription = page.locator('[data-test="inventory-item-description"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
        this.addToCartButton = page.locator('.btn_inventory');
    }

    // Method to verify inventory page
    async verifyInventoryPageLoaded() {
        // Expect the page title to be visible upon login
        await expect(this.pageTitle).toBeVisible();

        // Assert URL is for the inventory page
        await expect(this.page).toHaveURL(/inventory.html/);

        // Assert title shown is for the inventory page
        await expect(this.pageTitle).toContainText('Products');
    }

}