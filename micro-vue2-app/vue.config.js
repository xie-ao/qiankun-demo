// micro-vue2-app/vue.config.js
const { name } = require('./package')

module.exports = {
  devServer: {
    port: 8081, // 指定端口
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许跨域
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`, // 暴露库名称
      libraryTarget: 'umd', // 通用模块定义
      jsonpFunction: `webpackJsonp_${name}`, // 避免 JSONP 冲突
    },
  },
}