// miniprogram/pages/billboard/index.js
let videoAd;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //9CrIcgm_VRaS1qvboYxUx_P6N8lgMlwBOjpWQ6y_zzs
  btnGoPoster(){
    wx.navigateTo({
      url: '/pages/testposter/testposter',
    })
  },
  btnTestSubscribeMsg(){
    wx.requestSubscribeMessage({
      tmplIds: ["D9_tHhTzZGddyMjBScHhC7P2p9gqi1213wydZ7o4nCc"],
      success:(res)=>{
        console.log(res);
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  },
  btnSendSubscribeMsg(){
    wx.cloud.callFunction({
      name:"sendsubscribemsg"
    });
  },
  btnWechatPay(){
    wx.cloud.callFunction({
      name:"makeorder",
      success(res){
        console.log(res)
        wx.requestPayment({
          ...res.result.payment,
          success(res){
            console.log(res);
          },
          fail(err){
            console.log(err);
          }
        })
      }
    });
  },
  btnShowVideoAd(){
    if (videoAd) {
      videoAd.show().catch(() => {
      // 失败重试
      videoAd.load()
          .then(() => videoAd.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          });
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let scene=decodeURIComponent(options.scene)
    console.log(scene)

    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-1eca307374dc2826'
      })
      videoAd.onLoad(() => {
        console.log('激励视频 广告加载成功');
      })
      videoAd.onError((err) => {
        console.log(err);
      })
      videoAd.onClose((res) => {
        if (res && res.isEnded) {
          console.log('激励视频 播放完成');
          //这里触发真正参与
          
        } else {
          console.log('激励视频 未完关闭');
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})