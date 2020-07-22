const path = require("path");

const config = {
  mode: "development",
  entry: "./lib/components/Index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
    ],
  },
};
module.exports = config;
