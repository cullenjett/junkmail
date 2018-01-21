const React = require('react');
const ReactDomServer = require('react-dom/server');
const path = require('path');

const { inlineCSS } = require('./inline-css');
const mainCSSPath = path.resolve(__dirname, '../styles/main.css');

function toString(templatePath) {
  const Component = require(templatePath).default;
  const string = ReactDomServer.renderToStaticMarkup(<Component />);
  return inlineCSS(string);
}

function toStream(templatePath) {
  const Component = require(templatePath).default;
  const stream = ReactDomServer.renderToStaticNodeStream(<Component />);
  return stream;
}

module.exports = {
  toString,
  toStream
};
