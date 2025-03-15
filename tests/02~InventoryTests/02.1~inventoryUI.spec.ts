import { expect } from '@playwright/test';
import { test } from '../fixtures/fixture';

test.describe('02.1 ~ Inventory UI Tests', () => {

    // ---------- BeforeEach ----------

    test.beforeEach(async ({ page, loginPage, inventoryPage }) => {
        await inventoryPage.verifyInventoryPageLoaded();
    });

    // ---------- Test 1 ----------

    test('02.1.1 ~ Verify products are shown', async ({ inventoryPage }) => {
        test.step('Assert inventory containers are visible', async () => {
            await expect(inventoryPage.multipleProductContainer).toBeVisible();
        });
    });

    // ---------- Test 2 ----------

    test('02.1.2 ~ Verify all elements accessible on page', async ({ inventoryPage, navBar }) => {    
        test.step('Verify the page has loaded', async () => {
            await inventoryPage.verifyInventoryPageLoaded();
        });

        test.step('Assert all relevant UI is visible', async () => {
            await navBar.validateNavBarUI();
        });
    });
});