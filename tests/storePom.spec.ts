//import { test } from '@playwright/test';
//import { StorePage } from '../Pages/storePage';
import { test, expect } from '../Fixtures/fixtures';
import { basePage } from '../Pages/basePage';
import { StoreLocators } from '../Locators/storeLocators';



test.describe('Store Tests', () => {
    test('Buy Product Process', async ({ storePage }) => {
        //const storePage = new StorePage(page);
       // const basePageInstancebase = new basePage(page);

        await test.step('Open Page demoblaze', async () => {

          //  console.log("Navegando a la URL local:", process.env.BASE_URL);

            await storePage.loadPage(process.env.QA_BASE_URL);

            await storePage.ExpectTitleToContain('STORE');

        });

        await test.step('Select product and add to cart', async () => {

            await storePage.selectProduct();
            //await basePageInstancebase.closeDialog();

        });

        await test.step('Go to cart', async () => {


            await storePage.goToCartAndPlaceOrder();


        });

        await test.step('Click Place Order button', async () => {

            await storePage.ExpectElementToBeVisible(storePage.getItemElement());
            await storePage.clickPlaceOrderButton();
        });

        await test.step('Fill order form', async () => {

            await storePage.ExpectElementToBeVisible(storePage.getTextboxNameElement());

            await storePage.fillOrderForm("John", "Colombia", "Bogota", "122989887771", "8", "2023");
        });

        await test.step('Click OK on confirmation message', async () => {
           
            await storePage.clickOkButton();

            /* await basePageInstancebase.WaitForUrl('https://www.demoblaze.com/index.html',
                 async () => {
                     await storePage.clickOkButton();
                 }
             );*/

            await storePage.ExpectElementToBeVisible(storePage.getCategorySectionElement());
        });

    });
});
