const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function allTemplates(source) {
  const files = [];

  await traverse(source, filePath => {
    if (isNotTestFile(filePath)) {
      files.push(filePath);
    }
  });

  return files;
}

async function traverse(currentDirPath, cb) {
  const files = await readdir(currentDirPath);

  return await Promise.all(
    files.map(async fileName => {
      const filePath = path.join(currentDirPath, fileName);
      const stats = await stat(filePath);

      if (stats.isFile()) {
        cb(filePath);
        return Promise.resolve();
      } else {
        return traverse(filePath, cb);
      }
    })
  );
}

function isNotTestFile(filePath) {
  return /^(?!.*(test|spec)\.js$).*\.js$/.test(filePath);
}

module.exports = {
  allTemplates,
  traverse
};
