
let wxhttp = require("../../utils/wxhttp.js") //封装request请求

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("onLoad")
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
    formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      wx.showLoading({
        title: "绑定中",
      })
      wxhttp.simBind({
        data: {
          iccid: e.detail.value.iccid,
          pku: e.detail.value.pku
        },
        success(res) {
          wx.hideLoading()
          // console.log(res)
          if (res.state == 0) {
            console.log("bind success")
            wx.navigateBack({})
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
      })
    }
})