// 1. Importamos el "test" original de Playwright renombrándolo como "base"
import { test as base } from '@playwright/test';
// 2. Importamos tu clase StorePage (ajusta la ruta según tu proyecto)
import { StorePage } from '../Pages/storePage'; 

// 3. Definimos los tipos para TypeScript (muy importante en tu aprendizaje)
type MisFixtures = {
  storePage: StorePage;
};

// 4. Extendemos (mejoramos) el test base con nuestro nuevo fixture
export const test = base.extend<MisFixtures>({
  
  // Definimos cómo se construye "storePage"
  storePage: async ({ page }, use) => {
    
    // A. PREPARACIÓN: Instanciamos la clase por ti (lo que hacías en cada prueba)
    const storePage = new StorePage(page);
    
    // B. USO: La palabra mágica "use" pausa el fixture y le entrega la página lista a tu test
    await use(storePage);
    
    // C. LIMPIEZA: Al terminar el test, el código seguiría aquí. 
    // Por ahora no necesitamos limpiar nada, pero es bueno saberlo.

   /* await page.evaluate(() => window.localStorage.clear());
    console.log('Limpieza completada: Caché y carrito borrados.');*/
  },
});

// Exportamos también expect para que no tengas que importarlo de otro lado
export { expect } from '@playwright/test';