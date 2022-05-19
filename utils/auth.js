// 通过login获取的code存储的本地
var requestWxCode = function (callback) {
  wx.login({
    success(res) {
      if (res.code) {
        // console.log(0)
        wx.setStorageSync("wxcode", res.code)
        callback && callback.success()
      } else {
        callback && callback.fail(res.errMsg)
      }
    },
    fail(res) {
      callback && callback.fail(res.errMsg)
    }
  })
}
// 使用code 使用本地code 没有再重新requestWxcode
var useWxCode = function (callback) {
  var requestWxCodeAgain = function () {
    requestWxCode({
      success() {
        // console.log(1)
        var c = wx.getStorageSync("wxcode")
        wx.setStorageSync("wxcode", "")
        callback(c, null)
      },
      fail(errmsg) {
        callback("", errmsg)
      }
    })
  }
  wx.checkSession({
    success() {
      // console.log(3)
      var code = wx.getStorageSync("wxcode")
      wx.setStorageSync("wxcode", "")
      if (!code) {
        requestWxCodeAgain()
        return false
      }
      callback(code, null)
    },
    fail() {
      // console.log(4)
      requestWxCodeAgain()
    }
  })
}
module.exports={
  requestWxCode:requestWxCode,
  useWxCode:useWxCode,
}