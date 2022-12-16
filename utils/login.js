let wxconf = require("../config.js") //静态配置文件
let wxhttp = require("./wxhttp.js") //封装request请求
let wxauth = require("./auth.js")
const login = function (e, that, callback) {
	if (e.detail.errMsg.indexOf("fail") > -1) {
		// wx.showModal({
		//   title:"提示",
		//   content:"无法获取手机号码:"+e.detail.errMsg,
		//   showCancel:false
		// })
		return false
	}
	wx.showLoading({
		title: "登录中",
	})
	// getPhoneNumber 返回的 code 与 wx.login 返回的 code 作用是不一样的，不能混用
	wxauth.useWxCode(function (code, err) {
		if (code == "") {
			wx.hideLoading()
			wx.showToast({
				title: "登录失败请检查是否授权",
				icon: "none"
			})
			return false
		}
		console.log(code, e)
		wxhttp.login({
			data: {
				minapp: {
					appid: wxconf.app.appid,
					code: code, // wx.login的code
					iv: e.detail.iv,
					encryptedData: e.detail.encryptedData
				},
				code: e.detail.code // getPhoneNumber按钮事件传递的code
			},
			success(res) {
				wx.hideLoading()
				// console.log(res)
				if (res.state == 0) {
					console.log("login success")
					wx.setStorageSync('token', res.data.token)
					wx.setStorageSync("openId", res.data.openId)
					wx.setStorageSync('pn', res.data.user.phoneNum)
					wx.setStorageSync("uid", res.data.user.uid)
					that.setData({
						isLogined: true,
						phoneNumber: res.data.user.phoneNum
					})
					callback()
				} else {
					// console.log(res)
					wx.showToast({
						title: "登录失败,请重试",
						icon: "none"
					})
				}
			},
			fail() {
				wx.hideLoading()
				wx.showToast({
					title: "登录失败,请重试",
					icon: "none"
				})
			}
		})
	})
}
module.exports = {
	login
}