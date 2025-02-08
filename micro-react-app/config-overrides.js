// micro-react-app/config/webpack.config.js
const { name } = require('../package.json')

module.exports = {
  output: {
    library: `${name}-[name]`, // 暴露库名称
    libraryTarget: 'umd', // 通用模块定义
    jsonpFunction: `webpackJsonp_${name}`, // 避免 JSONP 冲突
  },
  devServer: {
    port: 8082, // 指定端口
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许跨域
    },
  },
}