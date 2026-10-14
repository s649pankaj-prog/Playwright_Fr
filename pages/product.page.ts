import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly title: Locator;
  readonly items: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('title');
    this.items = page.getByTestId('inventory-item');
  }
}