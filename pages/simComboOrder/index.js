// pages/simComboOrder/index.js
let wxconf = require("../../config.js") //静态配置文件
let wxhttp = require("../../utils/wxhttp.js") //封装request请求
let util = require("../../utils/util.js") //封装request请求
Page({

  /**
   * 页面的初始数据
   */
  data: {
    simNo: '',
    iccid: '',
    urlParamSid: 0,
    urlParamSkuId: 0,
    combo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const simNo = wx.getStorageSync('simNo')
    const iccid = wx.getStorageSync('iccid')
    const combo = JSON.parse(wx.getStorageSync('combo'))
    this.setData({
      simNo,
      iccid,
      urlParamSid: parseInt(options.sid),
      urlParamSkuId: parseInt(options.skuId),
      combo
    })

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

  },
  simOrderPayment: function () {
    // 订单提交
    wx.showLoading({
      title: "加载中",
    })
    let openId = wx.getStorageSync("openId")
    let req = {
      appId: wxconf.app.appid,
      openId: openId,
      sid: this.data.urlParamSid,
      skuId: this.data.urlParamSkuId
    }
    wxhttp.simOrderPayment(req).then((res) => {
      console.log(res)
      // 调起支付
      wx.requestPayment({
        timeStamp: res.data.timeStamp,
        nonceStr: res.data.nonceStr,
        package: res.data.package,
        signType: res.data.signType,
        paySign: res.data.paySign,
        success(res) {
          wx.navigateToMiniProgram({
            appId: 'wxa5b3db0cd2c5a1ed',
            path: 'pages/index/index',
            success(res) { }
          })
        },
        fail(res) {
          wx.showToast({
            title: '请重新支付',
          })
        }
      })
    })
  }

})