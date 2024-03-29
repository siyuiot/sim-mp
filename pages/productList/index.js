
let wxhttp = require("../../utils/wxhttp.js") //封装request请求

Page({

    /**
     * 页面的初始数据
     */
    data: {
      list: [],
      sid: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // console.log(options)
      this.setData({sid: parseInt(options.sid)})
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
      wxhttp.productList({
          pid: 1
      }).then((res) => {
        // console.log(res)
        this.setData({list: res.data})
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
    simOrder: function (e) {
      let sid = e.currentTarget.dataset.sid
      let skuId = e.currentTarget.dataset.skuid
      console.log(e.currentTarget.dataset)
      wx.navigateTo({
        url: '../simOrder/index?sid='+sid+'&skuId='+skuId
      })
    }
})