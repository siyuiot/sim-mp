// pages/simCombo/index.js
let wxhttp = require("../../utils/wxhttp.js") //封装request请求
let utils = require("../../utils/util")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        sid: 0,
        simNo:'',
        iccid:'',
        itemMargin:'item-left'
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
        const simNo=wx.getStorageSync('simNo')
        const iccid=wx.getStorageSync('iccid')
        this.setData({
            simNo,
            iccid
        })
        // 获取套餐列表
        wx.showLoading({
            title: "加载中",
        })
        const req = {
            pid: 1
        }
        wxhttp.productList(req).then((res) => {
            let list = res.data
            const length = list.length-1
            list.forEach((item,index)=>{
                item.price=utils.formatPrice(item.price)
                if(index===0){
                    item.itemMargin='item-left'
                }else if(index===length){
                    item.itemMargin='item-right'
                }else{
                    item.itemMargin=''
                }
            })
            this.setData({ list: res.data })
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
    toComboOrder(e) {
        console.log(e,'e')
        let skuId = e.currentTarget.dataset.combo.skuId
        wx.setStorageSync('combo', JSON.stringify(e.currentTarget.dataset.combo))
        wx.navigateTo({
            url: `/pages/simComboOrder/index?skuId=${skuId}`,
        })
    }
})