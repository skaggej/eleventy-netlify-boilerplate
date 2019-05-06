const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://10.0.75.1:8080/');
  await percySnapshot('homepage');
});