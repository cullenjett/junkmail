require('babel-core/register');

const path = require('path');

const { toString } = require('../src/utils/parse-template');
const { allTemplates } = require('../src/utils/find-templates');

deploy();

async function deploy() {
  const templatesDirectory = path.join(__dirname, '../src/templates');
  const templates = await allTemplates(templatesDirectory);

  printDeploying(templates);

  templates.forEach(async templatePath => {
    const templateString = await toString(templatePath);
    printTemplate(templatePath, templateString);
  });
}

/* eslint-disable no-console */
function printDeploying(templates) {
  console.log(
    'Templates being deployed:\n*',
    templates.map(t => path.basename(t, '.js')).join('\n* ')
  );
  console.log();
}

function printTemplate(templatePath, string) {
  console.log(`${path.basename(templatePath, '.js')}:\n=> ${string}`);
  console.log();
}
