import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ApplicationURL from '../helpers/ApplicationURL';
import ProductsPage from '../pages/ProductsPage';
import YourCartPage from '../pages/YourCartPage';
import PageTitles from '../helpers/PageTitles';


test('sanity test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const yourCartPage = new YourCartPage(page);
  await loginPage.loginToApplication();

  await productsPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);
  await productsPage.validateTitle(PageTitles.INVENTORY_PAGE);

  
  await productsPage.chooseProductByTitle('Sauce Labs Backpack');
  await productsPage.chooseProductByTitle('Sauce Labs Bike Light');
  await productsPage.chooseProductByTitle('Sauce Labs Bolt T-Shirt');


  await productsPage.validateNumberOfItems("3");
  await productsPage.goToCart();

  await yourCartPage.validatePageUrl(ApplicationURL.YOUR_CART_PAGE_URL);
  await yourCartPage.validateTitle(PageTitles.YOUR_CART_PAGE);

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


test('demo test_2', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();
    const productsPage = new ProductsPage(page);   
    await productsPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);
    await productsPage.validateTitle("Products");
});
