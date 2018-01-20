const React = require('react');
const ReactDomServer = require('react-dom/server');
const path = require('path');

function toString(templatePath) {
  const Component = require(templatePath).default;
  const string = ReactDomServer.renderToStaticMarkup(<Component />);
  return string;
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
