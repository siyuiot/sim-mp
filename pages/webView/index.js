Page({
    /**
     * 页面的初始数据
     */
    data: {
      url: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options)
      this.setData({url: options.targetUrl})
      var that = this;
      that.setData({
        mername: options.mername//options为页面路由过程中传递的参数
      })
      console.log(that.data.mername)
      wx.setNavigationBarTitle({
        title: that.data.mername//页面标题为路由参数
      })
    }
})