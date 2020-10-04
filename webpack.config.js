const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", 
  entry: {
    index : "./source/index.js",
    hi : "./source/hi.js", 
  },
  output: {
    path: path.resolve(__dirname, "webpack_result"), // string
    filename: "[name]_bundle.js", // string
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : "./source/index.html",
      filename : "./index.html",
      chunks : ["index"],
    }),
    new HtmlWebpackPlugin({
      template : "./source/hi.html",
      filename : "./hi.html",
      chunks : ["hi"],
    }),

  ]
};