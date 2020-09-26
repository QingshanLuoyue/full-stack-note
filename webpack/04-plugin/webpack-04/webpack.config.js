const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
// const txtWebpackPlugin = require("./myPlugins/txt-webpack-plugin.js");
const fileWebpackPlugin = require("./myPlugins/file-webpack-plugin.js");
module.exports = {
  entry: "./src/index.js",
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
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            limit: 2048,
          },
        },
      },
      {
        test: /\.woff2$/,
        use: "file-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:9092/",
      },
    },
    hot: true,
    hotOnly: true,
  },
  resolveLoader: {
    modules: ["./node_modules", "./myLoaders"],
  },
  devtool: "inline-source-map",
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new CleanWebpackPlugin(),
    // new miniCssExtractPlugin({
    //   filename: "css/index-[contenthash:6].css",
    // }),
    // new txtWebpackPlugin({ name: "老韩" }),
    new fileWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
