import css from "./style/index.less";
import pic from "./images/logo.png";
console.log("hello 老韩!!!!");

import axios from "axios";

axios.get("/api/info").then((res) => {
  console.log(res);
});
// let img = new Image();
// console.log(pic);
// img.src = pic;
// let root = document.querySelector("#app");
// root.append(img);

// 图片 file-loader url-loader
// 第三方字体
// 本地开发服务 最主要目的 提升开发体验
