const path = require("path");
module.exports = {
  //入口
  entry: "./src/index.js",
  mode: "development",
  //出口
  output: {
    //输出资源的存放位置，必须是绝对路径
    path: path.resolve(__dirname, "./laohan"),
    //资源名称
    filename: "laohan.js",
  },
};
