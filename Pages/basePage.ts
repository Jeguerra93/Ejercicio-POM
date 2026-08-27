import {Page, expect, Locator} from '@playwright/test';

export class basePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loadPage(url: string) {
    await this.page.goto(url);
  }

  async ClickElement(locator: string) {
    await this.page.locator(locator).click();
  }

  async TabElement(locator: string) {
    await this.page.locator(locator).press('Tab');
  }

  async FillElement(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async ExpectElementToBeVisible(element: Locator) {
    await expect(element).toBeVisible();
  }

  async WaitForUrl(urlHome: string) {
    await this.page.waitForURL(urlHome);
  }

  async ExpectTitleToContain(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  
    async closeDialog() {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        });
    }

}