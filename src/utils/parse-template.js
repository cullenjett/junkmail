const React = require('react');
const ReactDomServer = require('react-dom/server');
const Helmet = require('react-helmet').default;

const { buildIndexHtml } = require('./build-index-html');
const { inlineCSS } = require('./inline-css');

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

module.exports = {
  toString
};
