import { expect, Locator, Page } from "@playwright/test";

export default class LoginPage {

    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;


    constructor(protected page:Page){
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');

    }


    public async loginToApplication(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
      
    }

}