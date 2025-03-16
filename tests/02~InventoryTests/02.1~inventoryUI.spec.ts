// Test for Inventory UI

// Fixture imports
import { test, expect } from '../fixtures/fixture';

// Test Suite
test.describe('02.1 ~ Inventory UI Tests', () => {

    // ---------- Test 1 ----------
    test('02.1.1 ~ Verify products are shown', async ({ inventoryPage }) => {
        await test.step('Assert inventory containers are visible', async () => {
            await expect(inventoryPage.multipleProductContainer).toBeVisible();
        });
    });

    // ---------- Test 2 ----------
    test('02.1.2 ~ Verify all elements accessible on page', async ({ navBar }) => {
        await test.step('Assert all relevant UI is visible', async () => {
            await navBar.validateNavBarUI();
        });
    });
});