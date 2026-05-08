import { test } from '@applitools/eyes-playwright/fixture'
const { Arteza } = require('../pages/Arteza.js');

test('Arteza', async ({ page, eyes }) => {
  const arteza = new Arteza(page);
  await arteza.goto();

  await eyes.check('Login Page')

});
