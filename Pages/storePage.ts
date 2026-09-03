import {basePage} from "./basePage";
import {StoreLocators} from "../Locators/storeLocators";
import {Page, Locator} from "@playwright/test";

export class StorePage extends basePage {
  
    private readonly product: Locator;
    private readonly addToCartButton: Locator;
    private readonly cartLink: Locator;
    private readonly itemDeleteLink: Locator;
    private readonly placeOrderButton: Locator;
    private readonly nameInput: Locator;
    private readonly countryInput: Locator;
    private readonly cityInput: Locator;
    private readonly creditCardInput: Locator;
    private readonly monthInput: Locator;
    private readonly yearInput: Locator;
    private readonly purchaseButton: Locator;
    private readonly okButton: Locator;
    private readonly categorySection: Locator;

    constructor(page: Page) {
        super(page);
        this.product = page.locator(StoreLocators.product.locator);
        this.addToCartButton = page.getByRole(StoreLocators.addToCartButton.role, { name: StoreLocators.addToCartButton.name });        
        this.cartLink = page.getByRole(StoreLocators.cartLink.role, { name: StoreLocators.cartLink.name, exact: StoreLocators.cartLink.exact });
        this.placeOrderButton = page.getByRole(StoreLocators.placeOrderButton.role, { name: StoreLocators.placeOrderButton.name });
        this.nameInput = page.getByRole(StoreLocators.nameInput.role, { name: StoreLocators.nameInput.name });
        this.countryInput = page.getByRole(StoreLocators.countryInput.role, { name: StoreLocators.countryInput.name });
        this.cityInput = page.getByRole(StoreLocators.cityInput.role, { name: StoreLocators.cityInput.name });
        this.creditCardInput = page.getByRole(StoreLocators.creditCardInput.role, { name: StoreLocators.creditCardInput.name });
        this.monthInput = page.getByRole(StoreLocators.monthInput.role, { name: StoreLocators.monthInput.name });
        this.yearInput = page.getByRole(StoreLocators.yearInput.role, { name: StoreLocators.yearInput.name });
        this.purchaseButton = page.getByRole(StoreLocators.purchaseButton.role, { name: StoreLocators.purchaseButton.name });
        this.okButton = page.getByRole(StoreLocators.okButton.role, { name: StoreLocators.okButton.name });
        this.categorySection = page.locator(StoreLocators.categorySection.id);
        this.itemDeleteLink = page.getByRole(StoreLocators.itemDeleteLink.role, { name: StoreLocators.itemDeleteLink.name });

    }

    async selectProduct() {
        await this.product.first().click();
        await this.addToCartButton.click();
    }


    async goToCartAndPlaceOrder() {
        await this.cartLink.click();
    }

    async clickPlaceOrderButton() {
        await this.placeOrderButton.click();
    }   

    async fillOrderForm(name: string, country: string, city: string, creditCard: string, month: string, year: string) {
        await this.nameInput.fill(name);
        await this.nameInput.press('Tab');
        await this.countryInput.fill(country);
        await this.countryInput.press('Tab');
        await this.cityInput.fill(city);
        await this.cityInput.press('Tab');
        await this.creditCardInput.fill(creditCard);
        await this.creditCardInput.press('Tab');
        await this.monthInput.fill(month);
        await this.monthInput.press('Tab');
        await this.yearInput.fill(year);
        await this.yearInput.press('Tab');
        await this.purchaseButton.click();

  }

async clickOkButton() {
    await this.okButton.click();
  }

getItemElement() {
    return this.itemDeleteLink;
}

getTextboxNameElement() {
    return this.nameInput;


}

getCategorySectionElement() {
    return this.categorySection;

}



}
