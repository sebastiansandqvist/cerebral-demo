const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve('part-3', 'src', 'index.js'),
  devtool: 'none',
  output: {
    path: path.resolve('part-3', 'public'),
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: [['es2015', { modules: false}], 'react']
      }
    }]
  }
}