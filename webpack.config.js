const path = require('path');

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
};