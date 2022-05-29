// pages/simActive/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        steps: [
            {
              text: '添加卡',
              inactiveIcon: 'card',
              activeIcon: 'card',
            },
            {
              text: '购买套餐',
              inactiveIcon: 'bag',
              activeIcon: 'bag',
            },
            {
              text: '实名认证',
              inactiveIcon: 'manager',
              activeIcon: 'manager',
            },
          ],
          active:0,
          simValue:'',
          simName:'',
          nextDisabled:true
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
    onChange(){

    },
    scanSim(){
        // 只允许从相机扫码
        let that = this
        wx.scanCode({
            onlyFromCamera: true,
            success (res) {
                that.setData({
                    simValue:res.result
                })
            console.log(res)
            }
        })
    }
})