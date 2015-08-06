/* eslint es6: false */
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'phylocanvas-quickstart.js',
    library: 'PhyloCanvas',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /webpack/, loader: 'babel?stage=0' },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
