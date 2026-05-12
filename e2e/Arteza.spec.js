import { test } from '@applitools/eyes-playwright/fixture'
const { Arteza } = require('../pages/Arteza.js');

const { Eyes, Target, VisualGridRunner, Configuration, MatchLevel } = require('@applitools/eyes-playwright');

test.beforeAll(async () => {
    // Usamos Ultrafast Grid para escalar pruebas rápidamente
    runner = new VisualGridRunner({ testConcurrency: 5 });
    const config = new Configuration();
    
    // 🔥 PRO TIP: Agrupar en un "Batch" para que en el Dashboard no salgan sueltas, sino como una "Release"
    config.setBatch(new BatchInfo(''));
    config.setApiKey(process.env.APPLITOOLS_API_KEY);
    
    // Matriz de pruebas (Cross-browser y Responsive real)
    config.addBrowser(1920, 1080, BrowserType.CHROME);    // Desktop Full HD
    config.addBrowser(1366, 768, BrowserType.FIREFOX);    // Laptop estándar
    config.addBrowser(1280, 800, BrowserType.SAFARI);     // Mac
    config.addDeviceEmulation(DeviceName.iPhone_X);       // iPhone   
    config.addDeviceEmulation(DeviceName.Pixel_5);        // Mobile Android

    // Inicializamos Eyes con toda esta configuración brutal
    eyes = new Eyes(runner, config);
  });

test('Arteza Main Flow', async ({ page, eyes }) => {
  const arteza = new Arteza(page);
  await eyes.open(page, 'Arteza');

  await arteza.goto();
  await eyes.check('Página principal');

  const postLinks = page.getByRole('main', { name: 'Main Content' }).getByRole('link');

  const count = await postLinks.count();

  for (let i = 0; i < count; i++) {
    const currentPost = postLinks.nth(i);
    const title = await currentPost.innerText(); // Запоминаем название для отчета

    await test.step(`Comprobasión de post: ${title}`, async () => {
      await currentPost.click();

      await page.waitForLoadState('networkidle');
//      await page.waitForTimeout(1000);

//      await eyes.check(`Post: ${title}`, Target.window().layout())
      await eyes.check(`Post: ${title}`)

      await page.goBack(); // Возвращаемся в список для следующей итерации
    });
  }

  await page.getByRole('link', { name: 'CATEGORÍAS' }).click();
  await page.waitForLoadState('networkidle');
  await eyes.check('Menu categorias')

  await page.getByRole('link', { name: 'ETIQUETAS' }).click();
  await page.waitForLoadState('networkidle');
  await eyes.check('Menu etiquetas')

  await page.getByRole('link', { name: 'ARCHIVO' }).click();
  await page.waitForLoadState('networkidle');
  await eyes.check('Menu archivo')

  await page.getByRole('link', { name: 'DONAR' }).click();
  await page.waitForLoadState('networkidle');
  await eyes.check('Menu donar')

  await page.getByRole('link', { name: 'SOBRE MÍ' }).click();
  await page.waitForLoadState('networkidle');
  await eyes.check('Menu sobre mi')

  await page.getByRole('link', { name: 'INICIO', exact: true }).click();
  await page.waitForLoadState('networkidle');
  await eyes.check('Menu inicio')

});
