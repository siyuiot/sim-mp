
let wxhttp = require("../../utils/wxhttp.js") //封装request请求
let util = require("../../utils/util.js") //封装request请求

Page({

    /**
     * 页面的初始数据
     */
    data: {
      info: {},
      urlParamSid: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({urlParamSid: parseInt(options.sid)})
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
      wx.showLoading({
        title: "加载中",
      })
      wxhttp.simInfo({
        data: {
          sid: this.data.urlParamSid
        },
        success(res) {
          wx.hideLoading()
          // console.log(res)
          if (res.state == 0) {
            callback()
          } else {
            wx.showToast({
              title: "失败,请重试",
              icon: "none"
            })
          }
        },
        fail() {
          wx.hideLoading()
          wx.showToast({
            title: "失败,请重试",
            icon: "none"
          })
        }
      }).then((res) => {
        console.log(res)
        let vData = {info: res.data}
        vData.info.bindAt = util.formatTime(new Date(vData.info.bindTs * 1000)).slice(0,10)
        vData.info.serviceEndAt = util.formatTime(new Date(vData.info.serviceEndTs * 1000)).slice(0,10)
        this.setData(vData)
      })
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
    productList: function (e) {
      let sid = e.currentTarget.dataset.sid
      wx.navigateTo({
        url: '../productList/index?sid='+sid
      })
    }
})