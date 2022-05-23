let wxconf = require("../config.js") //静态配置文件
let wxhttp = require("./wxhttp.js") //封装request请求
let wxauth = require("./auth.js")
const login = function(e,that,callback){
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
	wxauth.useWxCode(function(code, err) {
		if (code == "") {
			wx.hideLoading()
			wx.showToast({
				title: "登录失败请检查是否授权",
				icon: "none"
			})
			return false
		}
		wxhttp.login({
			data: {
				minapp: {
					appid: wxconf.app.appid,
					code: e.detail.code,
					iv: e.detail.iv,
					encryptedData: e.detail.encryptedData
				}
			},
			success(res) {
        wx.hideLoading()
        // console.log(res)
				if (res.state == 0) {
          console.log("login success")
					wx.setStorageSync('token', res.data.token)
					wx.setStorageSync('pn', res.data.user.phoneNum)
					wx.setStorageSync("user_id", res.data.user.uid)
					that.setData({
						isLogined: true,
						phoneNumber: res.data.user.phoneNum
					})
					callback()
				} else {
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
module.exports={
	login
}