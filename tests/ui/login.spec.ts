import { test, expect } from '../../fixture/ui';
import { env } from '../../utils/config/env';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  })

  test('valid user reaches the products page', { tag: '@smoke'}, async ({loginPage, productsPage }) => {
    await loginPage.login(env.standardUser, env.password);
    await expect(productsPage.title).toHaveText('Products');
    await expect(productsPage.items.first()).toBeVisible();
  })

  const invalidLogins = [
    { name: 'locked out user', user: env.lockedUser , pass: env.password , error: env.lockedErr },
    { name: 'wrong password', user: env.standardUser, pass: env.invPass, error: env.invErr },
    { name: 'wrong username', user: env.invUser, pass: env.password, error: env.invErr },
    { name: 'wrong credentials', user: env.invUser, pass: env.invPass, error: env.invErr }
  ];

  for(const { name, user, pass, error } of invalidLogins) {
    test(`Login failed ${name}`, {tag: '@regression' }, async ({ loginPage }) => {
      await loginPage.login(user, pass);
      await expect(loginPage.errorMsg).toHaveText(error);
    });
  }
});