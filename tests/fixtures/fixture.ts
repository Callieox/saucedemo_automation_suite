import { test as base } from '@playwright/test';
import { LoginPage } from '../../pom/pages/loginPage';
import { InventoryPage } from '../../pom/pages/inventoryPage';
import { NavBar } from '../../pom/components/navBar';

import userData from '../../data/userData.json';

export const test = base.extend<{
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    navBar: NavBar;
}>({
  // LoginPage Fixture: Handles login
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.page.goto('/');
        await loginPage.login(userData.user.standard, userData.password.valid);
        await use(loginPage);
    },

  // InventoryPage Fixture: Only works after login
    inventoryPage: async ({ page, loginPage }, use) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.verifyInventoryPageLoaded();
        await use(inventoryPage);
    },

    navBar: async ({ page, inventoryPage }, use) => {
        const navBar = new NavBar(page);

        await navBar.headerTitle.waitFor({ state: 'visible' });
        await use(navBar);
    }
});

export const expect = base.expect;