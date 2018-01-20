require('babel-core/register');
const path = require('path');

const { toString, toStream } = require('./parse-template');
const { getFiles } = require('./get-files');

const templatesDirectory = path.join(__dirname, './templates');

getFiles(templatesDirectory).then(templates => {
  console.log('TEMPLATES:', templates);

  templates.forEach(templatePath => {
    const string = toString(templatePath);
    console.log('STRING:', string);

    const stream = toStream(templatePath);
    stream.on('data', chunk => {
      console.log('STREAM:', chunk.toString());
    });
    stream.on('end', () => {
      console.log('=== STREAM END ===');
    });
  });
});
