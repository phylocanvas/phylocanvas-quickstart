const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'phylocanvas-quickstart.js',
    library: 'PhyloCanvas',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /(webpack|node_modules)/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-es2015-modules-umd',
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
};
