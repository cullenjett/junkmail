const fs = require('fs');
const path = require('path');
const util = require('util');
const inlineCss = require('inline-css');

const readFile = util.promisify(fs.readFile);
const cssFilePath = path.join(__dirname, '../../build/styles.css');
const readMainCSS = readFile(cssFilePath, 'utf-8');

function inlineCSS(htmlString) {
  return readMainCSS.then(css => {
    return inlineCss(htmlString, {
      url: ' ',
      extraCss: css
    });
  });
}

module.exports = {
  inlineCSS
};
