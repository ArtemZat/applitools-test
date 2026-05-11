import { test } from '@applitools/eyes-playwright/fixture'
const { Arteza } = require('../pages/Arteza.js');

test('Arteza', async ({ page, eyes }) => {
  const arteza = new Arteza(page);
  await arteza.goto();

  await eyes.check('Página principal')

  const postLinks = page.getByRole('main', { name: 'Main Content' }).getByRole('link');

  const count = await postLinks.count();

  for (let i = 0; i < count; i++) {
    const currentPost = postLinks.nth(i);
    const title = await currentPost.innerText(); // Запоминаем название для отчета

    await test.step(`Comprobasión de post: ${title}`, async () => {
      await currentPost.click();

      await page.waitForLoadState('networkidle');
      await age.waitForTimeout(1000);

//      await eyes.check(`Post: ${title}`, Target.window().layout())
      await eyes.check(`Post: ${title}`)

      await page.goBack(); // Возвращаемся в список для следующей итерации
    });
  }

  await page.getByRole('link', { name: 'CATEGORÍAS' }).click();
  await eyes.check('Menu categorias')
  await page.goBack();

  await page.getByRole('link', { name: 'ETIQUETAS' }).click();
  await eyes.check('Menu etiquetas')
  await page.goBack();

  await page.getByRole('link', { name: 'ARCHIVO' }).click();
  await eyes.check('Menu archivo')
  await page.goBack();

  await page.getByRole('link', { name: 'DONAR' }).click();
  await eyes.check('Menu donar')
  await page.goBack();

  await page.getByRole('link', { name: 'SOBRE MÍ' }).click();
  await eyes.check('Menu sobre mi')
  await page.goBack();

  await page.getByRole('link', { name: 'INICIO', exact: true }).click();
  await eyes.check('Menu inicio')

});
