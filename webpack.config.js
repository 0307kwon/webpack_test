const path = require('path');

module.exports = {
  mode: "development", 
  entry: "./source/index.js", 
  output: {
    path: path.resolve(__dirname, "webpack_result"), // string
    filename: "bundle.js", // string
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
    ],
  },
};