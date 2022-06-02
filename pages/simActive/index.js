// pages/simActive/index.js
let wxhttp = require("../../utils/wxhttp.js") //封装request请求

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
                if(this.data.simValue){
                  this.setData({
                    nextDisabled:false
                  })
                }
            },
            fail(){
              wx.showToast({
                title: '请重新扫码',
                icon: 'error',
                duration: 2000
              })
              
            }
        })
    },
    onChange(e){
      this.setData({
        simValue:e.detail
      })
      if(this.data.simValue){
        this.setData({
          nextDisabled:false
        })
      }
    },
    // 下一步 绑定sim卡 成功跳转到换电套餐
    toCombo(){
      let req = {
          iccid: this.data.simValue,
          pku: ''
      }
      wxhttp.simBind(req).then(res=>{
        wx.showToast({
          title: '绑卡成功',
          icon: 'success',
          duration: 2000,
          success(){
            wx.navigateTo({
              url: '/pages/simCombo/index',
            })
          }
        })
      })
    }
})