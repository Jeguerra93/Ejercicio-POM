import { test, expect } from '@playwright/test';

//test.use({ launchOptions: { slowMo: 2000 } });

test.describe('Proceso de carrito de compras', () => {
test('Compra de producto', async ({ page }) => {
   // test.setTimeout(60000);

   await test.step('Abrir la pagina de demoblaze', async () => {
  await page.goto('https://www.demoblaze.com/index.html');

  await expect(page).toHaveTitle(/STORE/);

   });

  await test.step('Seleccionar producto y agregar al carrito', async () => {

      //await page.getByRole('link').filter({ hasText: /^$/ }).first().click();

  await page.locator('img[src="imgs/galaxy_s6.jpg"]').nth(0).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  await page.getByRole('link', { name: 'Add to cart' }).click();

});

  await test.step('Ir al carrito e iniciar proceso de compra', async () => {
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  //await page.locator('#name').fill('John');}
  });

  test.step('Completar formulario de compra', async () => {
  await page.getByRole('textbox', { name: 'Name:' }).fill('John');
  await page.getByRole('textbox', { name: 'Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Country:' }).fill('Colombia');
  await page.getByRole('textbox', { name: 'Country:' }).press('Tab');
  await page.getByRole('textbox', { name: 'City:' }).fill('Bogota');
  await page.getByRole('textbox', { name: 'City:' }).press('Tab'); 
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('122989887771');
  await page.getByRole('textbox', { name: 'Credit card:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Month:' }).fill('8');
  await page.getByRole('textbox', { name: 'Month:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Year:' }).fill('2026');
  await page.getByRole('textbox', { name: 'Year:' }).press('Tab');
  await page.getByRole('button', { name: 'Purchase' }).click();

  });

  await test.step('Clic en OK en mensaje de confirmación', async () => {
  await page.getByRole('button', { name: 'OK' }).click();

  await expect(page.locator('#cat')).toBeVisible();

});

  //await page.pause();
 
});

});