// index.js
// 获取应用实例
const app = getApp()
const wxhttp = require('../../utils/wxhttp')
let util = require("../../utils/util.js") //封装request请求

Page({
  data: {
    simInfo: null,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow() {
    // 处理自定义tabbar 图标需要点击两次的问题
    this.getTabBar().init();
  },
  onLoad() {
    if (wx.getStorageSync("token") && wx.getStorageSync("pn")) {
      // 获取套餐信息
      wx.showLoading({
        title: "加载中",
      })
      wxhttp.simInfo({}).then(res => {
        let simInfo = res.data
        if (simInfo) {
          simInfo.serviceEndTs = util.formatTime(new Date(simInfo.serviceEndTs * 1000)).slice(0, 10)
          simInfo.simByte = util.formatFlow(simInfo.simByte)
          simInfo.simAvailableByte = util.formatFlow(simInfo.simAvailableByte)
        }
        this.setData({ simInfo })
      })
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
    }

  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    // console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  toActiveSim() {
    wx.navigateTo({
      url: '/pages/simActive/index',
    })
  }
})
