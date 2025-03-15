import { test as baseTest, expect } from '@playwright/test';
import { LoginPage } from '../../pom/pages/loginPage';
import { NavBar } from '../../pom/components/navBar';
import { InventoryPage } from '../../pom/pages/inventoryPage';

import userData from '../../data/userData.json';

type Fixtures = {
    loginPage: LoginPage;
    navBar: NavBar;
    inventoryPage: InventoryPage;
};

export const test = baseTest.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        // Go to the login page and perform login
        await page.goto('/');
        await loginPage.login(userData.user.standard, userData.password.valid);

        // Wait for the page to navigate after login
        await page.waitForURL('/inventory.html', { timeout: 5000 });

        await use(loginPage);
    },

    navBar: async ({ page, loginPage }, use) => {
        const navBar = new NavBar(page);

        // Wait for the nav bar to be visible after login
        await page.waitForSelector('.app_logo', { state: 'visible', timeout: 5000 });

        // You can also validate some NavBar elements here if necessary
        await navBar.validateNavBarUI();

        await use(navBar);
    },

    inventoryPage: async ({ page, navBar }, use) => {
        const inventoryPage = new InventoryPage(page);

        // Verify the page title is visible and contains expected text
        await expect(inventoryPage.pageTitle).toBeVisible({ timeout: 5000 });
        await expect(inventoryPage.pageTitle).toContainText('Products');

        await use(inventoryPage);
    },
});