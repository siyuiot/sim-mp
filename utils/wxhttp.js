const conf = require('../config.js')
const md5 = require('../utils/md5.js')

// 登陆api
const login = function(options) {
  let date = new Date().getTime()
  let token = md5.md5("BLUE" + date + "SHARK")
  wx.request({
    header: {
      Authorization: "Bearer " + token,
      Ts: date,
      SGAGENT: "MINI|||||com.sharkgulf.blueshark|||"
    },
    url: conf.service.loginUrl,
    method: "POST",
    data: options.data,
    success: function(res) {
      options.success(res.data)
    },
    fail: function(error) {
      options.fail(error)
    }
  })
}
const request = (url, method, data) => {
  let _url = url
  let date = new Date().getTime()
  let token = ""
  if (_url == conf.service.sendSmsvcUrl || _url == conf.service.validateSmsvcUrl || _url == conf.service.isBookOpenUrl || _url == conf.service.activityStatusUrl) {
    token = md5.md5("BLUE" + date + "SHARK")
  } else {
    token = wx.getStorageSync('token')
  }
  token = wx.getStorageSync('token')

  let that = this
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: JSON.stringify(data.data),
      header: {
        Authorization: "Bearer " + token,
        APP_VER: "minapp-1.0",
        Ts: date,
        SGAGENT: "MINI|||||com.sharkgulf.blueshark|||"
      },
      success(res) {
        // console.log(res, url)
        //token过期
        if (res.data.state == 1000 || res.data.state == 1001) {
          wx.hideLoading()
          wx.removeStorageSync("token")
          // let pages = getCurrentPages()
          // let currentPage = pages[pages.length - 1]
          // let curUrl = currentPage.route
          // token 过期 但前页为my页不跳转
          // if (curUrl != 'pages/my/my') {
          // if (curUrl != 'pages/my/my') {
          //   wx.navigateTo({
          //     url: '/pages/my/my',
          //   })
          // }
          wx.reLaunch({
            url: '/pages/index/index',
          })
        } else {
          if (res.data.state == 0) {
            wx.hideLoading()
            resolve(res.data)
          } else {
            wx.hideLoading()
            // console.log("reject")
            reject(res.data)
            wx.showToast({
              title: res.data.stateInfo,
              icon: 'none'
            })
          }
        }
      },
      fail(error) {
        reject(error)
      },
      complete() {
        //加载完成
      }
    })
  })
}
// 小程序的promise没有finally方法，扩展一下 finally是promise无论执行成功和失败都会执行finally

Promise.prototype.finally = function(callback) {
  var Promise = this.constructor
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(
        function() {
          return value
        }
      )
    },
    function(reason) {
      Promise.resolve(callback()).then(
        function() {
          throw reason
        }
      )
    }
  )
}

module.exports = {
  login,
  request,
  simBind: (data) => {
    return request(conf.service.simBindUrl, 'post', data)
  },
  simList: (data) => {
    return request(conf.service.simListUrl, 'post', data)
  },
  simInfo: (data) => {
    return request(conf.service.simInfoUrl, 'post', data)
  },
  productList: (data) => {
    return request(conf.service.productListUrl, 'post', data)
  }
}