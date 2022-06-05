// pages/mySim/index.js
const wxhttp =require('../../utils/wxhttp')
let util = require("../../utils/util.js") //封装request请求

Page({

    /**
     * 页面的初始数据
     */
    data: {
        simInfo:null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取套餐信息
        wx.showLoading({
            title: "加载中",
        })
        wxhttp.simInfo({}).then(res => {
            let simInfo=res.data
            simInfo.serviceEndTs = util.formatTime(new Date(simInfo.serviceEndTs * 1000)).slice(0,10)
            simInfo.simByte = util.formatFlow(simInfo.simByte)
            simInfo.simAvailableByte = util.formatFlow(simInfo.simAvailableByte)
            this.setData({simInfo})
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

    }
})