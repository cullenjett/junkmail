const React = require('react');
const ReactDomServer = require('react-dom/server');
const path = require('path');
const Helmet = require('react-helmet').default;

const { buildIndexHtml } = require('./build-index-html');
const { inlineCSS } = require('./inline-css');
const mainCSSPath = path.resolve(__dirname, '../styles/main.css');

function toString(templatePath) {
  const Component = require(templatePath).default;
  const markup = ReactDomServer.renderToStaticMarkup(<Component />);
  const helmet = Helmet.renderStatic();
  const indexHtml = buildIndexHtml({
    markup,
    helmet
  });

  return inlineCSS(indexHtml);
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
