const path = require('path');
export default {
  connect: {
    port: process.env.PORT || 1200, // 监听端口
    socket: process.env.SOCKET || undefined, // 监听 Unix Socket, null 为禁用
  },
  cacheType: process.env.CACHE_TYPE, // 缓存类型，支持 'memory' 设为空可以禁止缓存
  cacheExpire: parseInt(process.env.CACHE_EXPIRE) || 5 * 60, // 缓存时间，单位为秒
  userAgent:
    process.env.UA ||
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
  listenInaddrAny: parseInt(process.env.LISTEN_INADDR_ANY) || 1, // 是否允许公网连接，取值 0 1
  requestRetry: parseInt(process.env.REQUEST_RETRY) || 2, // 请求失败重试次数
  // 是否显示 Debug 信息，取值 boolean 'false' 'key' ，取值为 'false' false 时永远不显示，取值为 'key' 时带上 ?debug=key 显示
  debugInfo: process.env.DEBUG_INFO || true,
  loggerLevel: process.env.LOGGER_LEVEL || 'info',
  puppeteerWSEndpoint: process.env.PUPPETEER_WS_ENDPOINT,
  proxy: {
    protocol: process.env.PROXY_PROTOCOL,
    host: process.env.PROXY_HOST,
    port: process.env.PROXY_PORT,
    auth: process.env.PROXY_AUTH,
    url_regex: process.env.PROXY_URL_REGEX || '.*',
  },
  blacklist: process.env.BLACKLIST && process.env.BLACKLIST.split(','),
  whitelist: process.env.WHITELIST && process.env.WHITELIST.split(','),
  typeConfig: {
    search: 'search',
    chapter: 'chapter',
    download: 'images',
    downloadAll: 'downloadAll',
  },
  downloadBase: path.resolve(__dirname, '../../../downloadResult'), // 根目录下的文件夹
  convertImageExtname: ['.webp'],
  mysql: {
    host: 'localhost', // 数据库服务器所在的IP或域名
    port: 3306,
    user: 'root', // 用户名
    password: 'admin123456', // 密码
    database: 'comic', // 数据库名
  },
};
