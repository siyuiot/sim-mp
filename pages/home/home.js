const login = require('../../utils/login')
// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myPhoto: "/assets/images/icon.png",
        phoneNumber: "", //手机号
        isLogined:false,
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
    getPhoneNumber (e) {
      // console.log(e.detail.code)
      let that = this
      login.login(e,that,function(){
        // that.getUserStatus()
      })
    }
})