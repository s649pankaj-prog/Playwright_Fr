import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { ProductPage } from '../../pages/product.page';

type Pages = {
  loginPage: LoginPage;
  productsPage: ProductPage;
};

// this provides fresh page object to LoginPage and ProductPage
export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }, 
  productsPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  }
});

export { expect } from '@playwright/test';