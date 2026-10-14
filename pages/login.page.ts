import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly usernameIn: Locator;
  readonly passwordIn: Locator;
  readonly loginBtn: Locator;
  readonly errorMsg: Locator;
  
  constructor(private readonly page: Page){
    this.usernameIn = page.getByPlaceholder('Username');
    this.passwordIn = page.getByPlaceholder('Password');
    this.loginBtn = page.locator('//input[@id="login-button"]');
    this.errorMsg = page.getByRole('alert');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void>{
    await this.usernameIn.fill(username);
    await this.passwordIn.fill(password);
    await this.loginBtn.click();
  }
}