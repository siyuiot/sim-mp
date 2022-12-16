let wxconf = require("../../config.js") //静态配置文件
const login = require('../../utils/login')
const wxhttp = require('../../utils/wxhttp')
// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPhoto: "/assets/images/icon.png",
    phoneNumber: "", //手机号
    isLogined: false,
    cardInfo: { text: '帮助中心' },
    isCombo: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 处理自定义tabbar 图标需要点击两次的问题
    this.getTabBar().init();
    if (wx.getStorageSync("token") && wx.getStorageSync("pn")) {
      this.setData({
        isLogined: true,
        phoneNumber: wx.getStorageSync("pn")
      })
      this.getSimInfo()
    }

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
  getPhoneNumber(e) {
    // console.log(e.detail.code)
    let that = this
    login.login(e, that, function () {
      // that.getUserStatus()
      that.getSimInfo()
    })
  },
  toMySim() {
    wx.navigateTo({
      url: '/pages/mySim/index',
    })
  },
  toSimPay() {
    wx.navigateTo({
      url: '/pages/simCombo/index',
    })
  },
  getSimInfo(){
      // 获取套餐信息
      wx.showLoading({
        title: "加载中",
      })
      wxhttp.simInfo({}).then(res => {
        if (res.data.iccid) {
          this.setData({ isCombo: true })
          wx.setStorageSync('simNo', res.data.simNo)
          wx.setStorageSync('iccid', res.data.iccid)
        } else {
          this.setData({ isCombo: false })
        }
      })
  },
  idCard(){
    wx.navigateToMiniProgram({
      appId: 'wxa5b3db0cd2c5a1ed',
      path: 'pages/index/index',
      success(res) { }
    })
  },
  help(){
    let targetUrl = `https://${wxconf.host}/static/help/index.html?time=new Date().getTime()`
    wx.navigateTo({
      url: '../webView/index?mername=帮助中心&targetUrl='+targetUrl,
    })
  },
  userAgreementAndPrivacy(){
    let targetUrl = `https://${wxconf.host}/static/userAgreementAndPrivacy/index.html?time=new Date().getTime()`
    wx.navigateTo({
      url: '../webView/index?mername=用户协议及隐私&targetUrl='+targetUrl,
    })
  },
  simList(){ // 隐藏的调试页面
    wx.navigateTo({
      url: '../simList/index'
    })
  }
})