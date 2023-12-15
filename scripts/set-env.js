// scripts/set-env.js
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const envFilePath = './src/environments/environment.prod.ts';

async function setEnv() {
  const content = `
    export const environment = {
      production: true,
      bearerToken: '${process.env.BEARER_TOKEN}',
    };
  `;

  await writeFile(envFilePath, content);
}

setEnv().catch(err => {
  console.error(err);
  process.exit(1);
});