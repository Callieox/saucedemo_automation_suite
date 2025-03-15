import { Page, Locator, expect } from '@playwright/test';

export class NavBar {
    readonly page: Page;
    readonly burgerMenu: Locator;
    readonly headerTitle: Locator;
    readonly basketIcon: Locator;

    constructor(page:Page) {
        this.page = page;
        this.burgerMenu = page.locator('.bm-burger-button');
        this.headerTitle = page.locator('.app_logo');
        this.basketIcon = page.locator('.shopping_cart_link');
    }

    async validateNavBarUI() {
        await expect(this.burgerMenu).toBeVisible();
        await expect(this.headerTitle).toBeVisible();
        await expect(this.basketIcon).toBeVisible();
    }

    async navigateToBurgerMenu(){
        await this.burgerMenu.waitFor({ state: 'visible' });
        await this.burgerMenu.click();
    }

    async getHeaderTitle() {
        return await this.headerTitle.textContent();
    }

    async viewBasket() {
        await this.basketIcon.waitFor({ state: 'visible' });
        await this.basketIcon.click();
    }
}