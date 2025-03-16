// Fixture file to handling login and page navigation

// Importing necessary modules
import { test as base } from '@playwright/test';

// Importing necessary POM classes
import { LoginPage } from '../../pom/pages/loginPage';
import { InventoryPage } from '../../pom/pages/inventoryPage';
import { NavBar } from '../../pom/components/navBar';

// Importing test data
import userData from '../../data/userData.json';

// Fixture
export const test = base.extend<{
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    navBar: NavBar;
}>({
  // Handles login
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.page.goto('/');
        await loginPage.login(userData.user.standard, userData.password.valid);
        await use(loginPage);
    },

    // Handles inventory page
    inventoryPage: async ({ page, loginPage }, use) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.verifyInventoryPageLoaded();
        await use(inventoryPage);
    },

    // Handles navigation bar
    navBar: async ({ page, inventoryPage }, use) => {
        const navBar = new NavBar(page);

        await navBar.headerTitle.waitFor({ state: 'visible' });
        await use(navBar);
    }
});

// Exporting necessary modules
export const expect = base.expect;