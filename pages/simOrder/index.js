
let wxconf = require("../../config.js") //静态配置文件
let wxhttp = require("../../utils/wxhttp.js") //封装request请求
let util = require("../../utils/util.js") //封装request请求

Page({

    /**
     * 页面的初始数据
     */
    data: {
      simInfo: {},
      productInfo: {},
      urlParamSid: 0,
      urlParamSkuId: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        urlParamSid: parseInt(options.sid),
        urlParamSkuId: parseInt(options.skuId)
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
        this.setData({simInfo: res.data})
      })
      // 商品信息
      wx.showLoading({
        title: "加载中",
      })
      wxhttp.productInfo({
        data: {
          skuId: this.data.urlParamSkuId
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
        this.setData({productInfo: res.data})
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
    simOrderPayment: function () {
      // 订单提交
      wx.showLoading({
        title: "加载中",
      })
      let openId = wx.getStorageSync("openId")
      wxhttp.simOrderPayment({
        data: {
          appId: wxconf.app.appid,
          openId: openId,
          sid: this.data.urlParamSid,
          skuId: this.data.productInfo.skuId
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
        // 调起支付
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success (res) {
            console.log(res)
          },
          fail (res) {
            console.log(res)
          }
        })
      })
    }
})