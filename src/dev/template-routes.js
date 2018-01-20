import path from 'path';

const ctx = require.context('../templates', true, /\.js$/);

const keys = ctx.keys();
const values = keys.map(ctx);

const allFiles = keys.reduce((obj, key, index) => {
  obj[key] = values[index];
  return obj;
}, {});

const routes = Object.keys(allFiles).reduce((arr, filename) => {
  arr.push({
    path: '/' + path.basename(filename, '.js'),
    Component: allFiles[filename].default
  });
  return arr;
}, []);

export default routes;
