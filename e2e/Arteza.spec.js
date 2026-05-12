import { test } from '@applitools/eyes-playwright/fixture';
const { Arteza } = require('../pages/Arteza.js');

// Добавляем недостающие импорты
const { 
  VisualGridRunner, 
  Configuration, 
  BrowserType, 
  DeviceName, 
  BatchInfo 
} = require('@applitools/eyes-playwright');

// Создаем раннер и батч ВНЕ теста, чтобы они были общими для всех запусков
const runner = new VisualGridRunner({ testConcurrency: 10 });
const batch = new BatchInfo('Arteza E2E - Visual Regression');

test.describe('Pruebas Visuales Arteza', () => {

  test('Arteza Main Flow', async ({ page, eyes }, testInfo) => {
    const arteza = new Arteza(page);

    // 1. Создаем конфигурацию специально для этого теста
    const config = new Configuration();
    config.setBatch(batch);
    config.setApiKey(process.env.APPLITOOLS_API_KEY);
    config.setAppName('Arteza');
    config.setTestName(testInfo.title); // Берем имя из test(...)

    // 2. Настраиваем Ultrafast Grid (все эти проверки будут внутри ОДНОГО теста в Applitools)
//    config.addBrowser(1920, 1080, BrowserType.CHROME);
//    config.addBrowser(1366, 768, BrowserType.FIREFOX);
//    config.addBrowser(1280, 800, BrowserType.SAFARI);
//    config.addDeviceEmulation(DeviceName.iPhone_X);
//    config.addDeviceEmulation(DeviceName.Pixel_5);

    // 3. ПРИМЕНЯЕМ конфигурацию к eyes из фикстуры
    await eyes.setConfiguration(config);

    // 4. Открываем сессию (теперь она подхватит настройки Grid)
    await eyes.open(page);

    await arteza.goto();
    await eyes.check('Página principal');

    const postLinks = page.getByRole('main', { name: 'Main Content' }).getByRole('link');
    const count = await postLinks.count();

    // Цикл по постам
    for (let i = 0; i < count; i++) {
      const currentPost = postLinks.nth(i);
      const title = await currentPost.innerText();

      await test.step(`Comprobasión de post: ${title}`, async () => {
        await currentPost.click();
        await page.waitForLoadState('networkidle');

        // Снимок отдельной страницы поста
        await eyes.check(`Post: ${title}`);

        await page.goBack();
      });
    }

    // Проверка разделов меню
    const sections = ['CATEGORÍAS', 'ETIQUETAS', 'ARCHIVO', 'DONAR', 'SOBRE MÍ', 'INICIO'];

    for (const section of sections) {
        await page.getByRole('link', { name: section, exact: section === 'INICIO' }).click();
        await page.waitForLoadState('networkidle');
        await eyes.check(`Menu ${section.toLowerCase()}`);
    }

    // Фикстура сама вызовет eyes.close(), если не возникло ошибок
  });
});
