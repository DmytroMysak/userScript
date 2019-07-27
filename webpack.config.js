const path = require('path');

module.exports = {
  entry: './src/customizeFacebook/index.js',
  output: {
    filename: './src/customizeFacebook/dist/bundle.js',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
};
