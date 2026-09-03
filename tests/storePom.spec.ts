import { test } from '@playwright/test';
import { StorePage } from '../Pages/storePage';
import { basePage } from '../Pages/basePage';
import { StoreLocators } from '../Locators/storeLocators';

test.describe('Store Tests', () => {
    test('By Product Process', async ({ page }) => {
        const storePage = new StorePage(page);
        const basePageInstancebase = new basePage(page);

        await test.step('Open Page demoblaze', async () => {

            await basePageInstancebase.loadPage('https://www.demoblaze.com/index.html');

            await basePageInstancebase.ExpectTitleToContain('STORE');

        });

        await test.step('Select product and add to cart', async () => {

            await storePage.selectProduct();
            //await basePageInstancebase.closeDialog();

        });

        await test.step('Go to cart', async () => {


            await storePage.goToCartAndPlaceOrder();


        });

        await test.step('Click Place Order button', async () => {

            await basePageInstancebase.ExpectElementToBeVisible(storePage.getItemElement());
            await storePage.clickPlaceOrderButton();
        });

        await test.step('Fill order form', async () => {

            await basePageInstancebase.ExpectElementToBeVisible(storePage.getTextboxNameElement());

            await storePage.fillOrderForm("John", "Colombia", "Bogota", "122989887771", "8", "2023");
        });

        await test.step('Click OK on confirmation message', async () => {
           
            await storePage.clickOkButton();

            /* await basePageInstancebase.WaitForUrl('https://www.demoblaze.com/index.html',
                 async () => {
                     await storePage.clickOkButton();
                 }
             );*/

            await basePageInstancebase.ExpectElementToBeVisible(storePage.getCategorySectionElement());
        });

    });
});
