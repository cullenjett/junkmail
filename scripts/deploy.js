require('babel-core/register');
const path = require('path');

const { toString } = require('../src/utils/parse-template');
const { allTemplates } = require('../src/utils/find-templates');

deploy();

function deploy() {
  const templatesDirectory = path.join(__dirname, '../src/templates');

  allTemplates(templatesDirectory).then(templates => {
    printDeploying(templates);
    templates.forEach(templatePath => {
      toString(templatePath).then(string => {
        printTemplate(templatePath, string);
      });
    });
  });
}

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
