// pages/zf/zf.js
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
        // 处理自定义tabbar 图标需要点击两次的问题
        // this.getTabBar().init();
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
    simBind: function(){
      wx.navigateTo({
        url: '../simBind/index'
      })
    },
    simList: function(){
      wx.navigateTo({
        url: '../simList/index'
      })
    },
    simInfo: function(){
      wx.navigateTo({
        url: '../simInfo/index'
      })
    },
    productList: function(){
      wx.navigateTo({
        url: '../productList/index'
      })
    }
})