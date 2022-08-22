const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about.js',
        menu: './src/menu.js',
        contact: './src/contact.js',

      },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};