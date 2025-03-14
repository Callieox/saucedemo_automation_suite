import { expect } from '@playwright/test';
import { test } from '../fixtures/loginFixture';

// Page Objects
import { InventoryPage } from '../../pom/pages/inventoryPage';

test.describe('02.1 ~ Inventory UI Tests', () => {

    // ---------- BeforeEach ----------

    test.beforeEach(async ({ page, login, inventoryPage }) => {
        await inventoryPage.verifyInventoryPageLoaded();
    });

    // ---------- Test 1 ----------

    test('02.1.1 ~ Verify products are shown', async ({ inventoryPage }) => {

        test.step('Assert inventory containers are visible', async () => {
            await expect(inventoryPage.multipleProductContainer).toBeVisible();
        });

    });

});