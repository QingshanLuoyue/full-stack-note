// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await cloud.cloudPay.unifiedOrder({
    "body" : "大帅-超市6",
    "outTradeNo" : "123213211341231233",
    "spbillCreateIp" : "127.0.0.1",
    "subMchId" : "1236636002",
    "totalFee" : 100,
    "envId": "zhongjiang-3z81s",
    "functionName": "pay_cb"
  })
  return res
}