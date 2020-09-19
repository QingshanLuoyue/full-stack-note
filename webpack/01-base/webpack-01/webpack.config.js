const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  //入口
  //string array object
  entry: "./src/index.js",
  // entry: {
  //   index: "./src/index.js",
  //   login: "./src/a.js",
  // },
  //none development production
  mode: "development",
  //出口
  output: {
    //输出资源的存放位置，必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    //资源名称 占位符 [name] [hash] [chunkhash] [contenthash]
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //多个loader 是有执行顺序的，自后往前
        use: ["style-loader", "css-loader"],
      },

      //   {
      //     test: /\.png$/,
      //     use: "",
      //   },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "laohan.html",
    }),
    new CleanWebpackPlugin(),
  ],
};

//spa 单页面应用 也可以理解为单入口
//mpa 多页面应用 利于seo
