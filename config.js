const host = "siyu.atrenew.com:6443"

const config = {
  host: host,
  // 下面的地址配合云端 Demo 工作
  service: {
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
    productListUrl: `https://${host}/productSku/get/list`,

    // 商品信息
    productInfoUrl: `https://${host}/productSku/get/info`,

    // 订单支付
    simOrderPaymentUrl: `https://${host}/simOrder/payment`,
  },

  // 下面是APP的属性
  app: {
    //思域物联网appId
    appid: `wxb71c87a341a6eda7`,
  }
};

module.exports = config