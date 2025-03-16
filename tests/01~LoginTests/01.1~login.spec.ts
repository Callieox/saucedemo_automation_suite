// Test for Login

// Playwright imports
import { test, expect } from '@playwright/test';

// Page Objects
import { LoginPage } from '../../pom/pages/loginPage';

// Test Data
import userData from '../../data/userData.json';
import errorData from '../../data/errorData.json';

// Test Suite
test.describe('01.1 ~ Login Tests', () => {

    // ---------- BeforeEach ----------

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('#login-button')).toBeVisible();
    });

    // ---------- Test 1 ----------

    test('01.1.1 ~ Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        test.step('Fill in login fields with valid data', async () => {
            await loginPage.login(userData.user.standard, userData.password.valid);
        });

        await test.step('Verify user is logged in', async () => {
            await expect(page.locator('.inventory_list')).toBeVisible();
        });
    });

    // ---------- Test 2 ----------

    test('01.1.2 ~ Login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        test.step('Fill in login fields with invalid data', async () => {
            await loginPage.login(userData.user.standard, userData.password.invalid);
        });

        await test.step('Verify user is not logged in', async () => {
            const errorMessage = await loginPage.getErrorMessage();
            await expect(errorMessage).toHaveText(errorData.login.incorrect_login_details);
        });
    });

    // ---------- Test 3 ----------

    test('01.1.3 ~ Login with locked out credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        test.step('Fill in login fields with locked out data', async () => {
            await loginPage.login(userData.user.locked_out, userData.password.valid);
        });

        await test.step('Verify user is not logged in', async () => {
            const errorMessage = await loginPage.getErrorMessage();
            await expect(errorMessage).toHaveText(errorData.login.locked_out_user);
        });
    });

});