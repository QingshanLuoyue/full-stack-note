//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database();
Page({
  data: {
    title:"",
    imageurl:""
  },
  //事件处理函数
  btnGetWerun: function() {
    wx.getWeRunData({
      success: (result) => {
        wx.cloud.callFunction({
          name:"getwerun",
          data:{
            werundata:wx.cloud.CloudID(result.cloudID)
          },
          success:(res)=>{
            console.log(res);
            var stepList=res.result.werundata.data.stepInfoList;
            wx.showModal({
              content:"您今天一共走了 "+stepList[stepList.length-1].step+" 步"
            })
          }
        });
      },
    })
  },
  btnScanCode:function(){
    wx.scanCode({
      onlyFromCamera: true,
      success:(res)=>{
        wx.cloud.callFunction({
          name:"getbook",
          data:{
            isbn:res.result
          },
          success:(result)=>{
            console.log(result);
            this.setData({
              imageurl:result.result.cover_url,
              title:result.result.title
            });
          }
        });
      }
    })
  },
  onLoad: function () {
    
  }
})
