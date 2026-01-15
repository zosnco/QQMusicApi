module.exports = {
  qq: process.env.QQ || '1493312415', // 如果是微信号的，这里写 wxuin，可以在浏览器端登录后 cookie 中获取
  port: process.env.PORT || 3300,
  useDataStatistics: process.env.USE_DATA_STATISTICS ? process.env.USE_DATA_STATISTICS === 'true' : false, // 是否启用数据统计和ip拦截
}