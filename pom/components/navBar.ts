// NavBar Component

// Import necessary modules
import { Page, Locator, expect } from '@playwright/test';

// NavBar Class
export class NavBar {
    readonly page: Page;
    readonly burgerMenu: Locator;
    readonly headerTitle: Locator;
    readonly basketIcon: Locator;

    // Constructor
    constructor(page:Page) {
        this.page = page;
        this.burgerMenu = page.locator('.bm-burger-button');
        this.headerTitle = page.locator('.app_logo');
        this.basketIcon = page.locator('.shopping_cart_link');
    }

    // Method to validate NavBar UI
    async validateNavBarUI() {
        await expect(this.burgerMenu).toBeVisible();
        await expect(this.headerTitle).toBeVisible();
        await expect(this.basketIcon).toBeVisible();
    }

    // Method to navigate to burger menu
    async navigateToBurgerMenu(){
        await this.burgerMenu.waitFor({ state: 'visible' });
        await this.burgerMenu.click();
    }

    // Method to get header title
    async getHeaderTitle() {
        return await this.headerTitle.textContent();
    }

    // Method to view basket
    async viewBasket() {
        await this.basketIcon.waitFor({ state: 'visible' });
        await this.basketIcon.click();
    }
}