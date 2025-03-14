import { Page, Locator, expect } from '@playwright/test';

export class NavBar {
    readonly page: Page;
    readonly burgerMenu: Locator;
    readonly headerTitle: Locator;
    readonly basketIcon: Locator;

    constructor(page:Page) {
        this.page = page;
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.headerTitle = page.locator('.app_logo');
        this.basketIcon = page.getByTestId('shopping-cart-link');
    }

    async navigateToBurgerMenu(){
        await this.burgerMenu.waitFor({ state: 'visible' });
        await this.burgerMenu.click();
    }

    async getHeaderTitle() {
        return this.headerTitle;
    }

    async viewBasket() {
        await this.basketIcon.waitFor({ state: 'visible' });
        await this.basketIcon.click();
    }
}