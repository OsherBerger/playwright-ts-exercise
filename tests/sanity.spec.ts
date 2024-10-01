import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import UserCredentials from '../helpers/UserCredentials';


test('sanity test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication(UserCredentials.PERFORMANCE_GLITCH_USER, UserCredentials.CORRECT_PASSWORD);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('.checkout_info').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('123');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('123');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('123');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

});

test('demo test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication(UserCredentials.LOCKED_OUT_USER, UserCredentials.CORRECT_PASSWORD);

});

test('demo test 2', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication(UserCredentials.STANDARD_USER, UserCredentials.CORRECT_PASSWORD);

});
