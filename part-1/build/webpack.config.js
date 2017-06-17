const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve('part-1', 'index.js'),
  devtool: 'none',
  output: {
    path: path.resolve('part-1', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: [['es2015', { modules: false}]]
      }
    }]
  }
}