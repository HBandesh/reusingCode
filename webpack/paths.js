const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'index.web.js'),
  templatePath: path.resolve(__dirname, '../', 'web/index.html'),
  imagesFolder: 'assets',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
