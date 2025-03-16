// Login page POM

// Importing necessary modules
import { Page, Locator, expect } from '@playwright/test';

// Login Page Class
export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    // Login method
    async login(username: string, password: string){
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);

        await this.passwordInput.waitFor({ state: 'visible' });
        await this.passwordInput.fill(password);
        
        await this.loginButton.waitFor({ state: 'attached' });
        await this.loginButton.click();
    }

    // Get error message method
    async getErrorMessage() {
        return this.errorMessage;
    }
}