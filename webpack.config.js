const path = require('path')
const src = __dirname + "/src"
const dist = __dirname + "/lib"
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: dist
  },
  context: src,
  entry: {
    main: './index.babel.js',
  },
  output: {
    filename: 'htmlcompiler.js',
    sourceMapFilename: '[name].map',
    path: dist,
    publicPath:"",
    libraryTarget: 'commonjs2'
  },
  module: {
  }
}