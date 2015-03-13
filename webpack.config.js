var webpack = require('webpack');

var plugins = [
  new webpack.optimize.CommonsChunkPlugin('./common.js')
];

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,

  output: {
    filename: '[name].js',
  },
  
  node: {
    fs: "empty"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  },

  plugins: plugins
};
