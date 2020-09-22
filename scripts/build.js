const Fs = require('fs-extra');
const Path = require('path');
const { sync: globSync } = require('glob');
require('html-minifier').minify = require('html-minifier-terser').minify;
const minify = require('minify');

const getPath = (...paths) => Path.resolve(__dirname, '..', ...paths);

const DIST_DIR = getPath('dist');
if (Fs.existsSync(DIST_DIR)) Fs.removeSync(DIST_DIR);
Fs.mkdirSync(DIST_DIR);

const FILE_LIST = [
  'comment_png',
  'css/reset.css',
  'css/index.css',
  'css/hywh_thin.ttf',
  'imgs',
  'js/Item_Json.js',
  'js/index.js',
  'tiles_test',
  'favicon.ico',
  'disclaimer.html',
  'index.html',
];
FILE_LIST.forEach(file => Fs.copySync(getPath('YuanShen', file), getPath('dist', file)));

const minifyOptions = {
  html: {
    removeOptionalTags: false,
  },
};
globSync(`${DIST_DIR}/**/*.@(js|css|html)`).forEach(path =>
  minify(path, minifyOptions).then(min => Fs.writeFileSync(path, min))
);
