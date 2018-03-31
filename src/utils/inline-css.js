const fs = require('fs');
const path = require('path');
const util = require('util');
const inlineCss = require('inline-css');

const readFile = util.promisify(fs.readFile);
const cssFilePath = path.join(__dirname, '../../build/styles.css');
const readMainCSS = readFile(cssFilePath, 'utf-8');

async function inlineCSS(htmlString) {
  const css = await readMainCSS;

  return inlineCss(htmlString, {
    url: ' ',
    extraCss: css
  });
}

module.exports = {
  inlineCSS
};
