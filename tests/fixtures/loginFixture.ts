import { test as baseTest, expect } from '@playwright/test';
import { LoginPage } from '../../pom/pages/loginPage';
import { InventoryPage } from '../../pom/pages/inventoryPage';

import userData from '../../data/userData.json';

type LoginFixtures = {
    login: LoginPage;
    inventoryPage: InventoryPage;
};

export const test = baseTest.extend<LoginFixtures>({
    // User login
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        // Navigate to url
        await page.goto('/');

        // Login to app with standard user
        await loginPage.login(userData.user.standard, userData.password.valid);

        // Assert login was successful
        await expect(page).toHaveURL('/inventory.html');

        await use(loginPage);
    },

    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);

        // Expect the page title to be visible upon login
        await expect(inventoryPage.pageTitle).toBeVisible();

        // Assert title shown is for the inventory page
        await expect(inventoryPage.pageTitle).toContainText('Products');

        await use(inventoryPage);
    },
    
});