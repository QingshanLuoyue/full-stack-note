// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: wxContext.OPENID,
        page: 'pages/billboard/index',
        lang: 'zh_CN',
        data: {
          thing1: {
            value: '啦啦啦啦'
          },
          thing4:{
            value:"大家好"
          }
        },
        templateId: 'D9_tHhTzZGddyMjBScHhC7P2p9gqi1213wydZ7o4nCc',
        miniprogramState: 'developer'
      })
    return result
  } catch (err) {
    return err
  }
}