const host = "siyu.d.blueshark.com"
// const host = "siyu.blueshark.com"

const config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,
    // 测试的请求地址，用于测试会话
    // requestUrl: `https://${host}`,

    // 登录地址，用于建立会话
    loginUrl: `https://${host}/user/login/minapp`,

    // 用户sim绑定
    simBindUrl: `https://${host}/userSim/bind`,

    // 用户sim列表
    simListUrl: `https://${host}/userSim/get/list`,

    // 用户sim信息
    simInfoUrl: `https://${host}/userSim/get/info`,

    // 商品列表
    productListUrl: `https://${host}/product/get/list`,

    // 获取用户信息
    getUseInfoUrl: `https://${host}/app/user/getuserinfo`,

    // 获取openid
    getOpenIdUrl: `https://${host}/wechat/code2Session`,

    // 支付
    pingppPayUrl: `https://${host}/app/order/pingpppay`,

    //预订订单是否已支付
    bookIsPayUrl: `https://${host}/app/order/book/isPay`,
    
    //预定商品固定参数（车的类型价格颜色）
    getProductsUrl: `https://${host}/app/order/book/products`,

    // 用户预约信息
    getUserPreInfoUrl: `https://${host}/preorder/detail`,

    // 预订使用的预约信息(包括预约号、群)
    getPreInfoUrl: `https://${host}/preorder/book/info`,

    // 预定订单创建
    createBookUrl: `https://${host}/app/order/book/submit`,

    // 预订订单详情
    getBookDetailUrl: `https://${host}/app/order/book/detail`,

    // 预订单列表
    // getOrderListUrl: `https://${host}/app/order/book/orders`,

    // 取消订单
    cancelOrderUrl: `https://${host}/app/order/book/cancel`,

    // 修改订单
    updateOrderUrl: `https://${host}/app/order/book/update`,

    // 发送短信验证码
    sendSmsvcUrl: `https://${host}/app/user/sendsmsvc`,

    //验证短信验证码
    validateSmsvcUrl: `https://${host}/app/user/validatesmsvc`,
  },

  // 下面是APP的属性
  app: {
    //思域物联网appId
    appid: `wxb71c87a341a6eda7`,
  }
};

module.exports = config