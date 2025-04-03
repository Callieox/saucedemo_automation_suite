// Details Input Page POM

// Importing necessary modules
import { Page, Locator, expect } from '@playwright/test';

// Details Input Page Class
export class DetailsInputPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }
}