const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  // entry: {
  //   index: "./src/index.js",
  //   login: "./src/login.js",
  // },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[hash:6].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          // miniCssExtractPlugin.loader,
          "ljf-style-loader",
          "ljf-css-loader",
          "ljf-less-loader",
        ],
      },
      {
        test: /\.js$/,
        use: [
          "replace-loader",
          {
            loader: "replace-loader-async",
            options: {
              name: "韩明洋",
            },
          },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: ["./node_modules", "./myLoaders", "./ljfLoaders"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    // new htmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "login.html",
    //   chunks: ["login"],
    // }),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "css/index-[contenthash:6].css",
    }),
  ],
};
