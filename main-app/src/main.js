// main-app/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun' // 引入 Qiankun

const app = createApp(App)

// 注册微应用
registerMicroApps([
  {
    name: 'micro-vue2-app', // 微应用名称
    entry: '//localhost:8081', // 微应用入口（开发环境）
    container: '#micro-app-container', // 挂载容器
    activeRule: '/vue2', // 激活规则（路由匹配）
  },
  {
    name: 'micro-react-app',
    entry: '//localhost:8082',
    container: '#micro-app-container',
    activeRule: '/react',
  },
])

// 启动 Qiankun
start()

app.mount('#app')
