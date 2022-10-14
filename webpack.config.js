// const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: __dirname + '/public',
//     filename: './app.js'
//   },
//   devServer: {
//     port: 8080,
//     contentBase: './public',
//   },
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    })
  ]
};