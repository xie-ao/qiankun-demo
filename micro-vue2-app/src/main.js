// micro-vue2-app/src/main.js
import './public-path' // 引入 public-path.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null

function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app') // 挂载到指定容器
}

// 独立运行时直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 暴露 Qiankun 生命周期钩子
export async function bootstrap() {
  console.log('Vue 2 微应用 bootstrap')
}

export async function mount(props) {
  console.log('Vue 2 微应用 mount', props)
  render(props)
}

export async function unmount() {
  console.log('Vue 2 微应用 unmount')
  instance.$destroy()
  instance = null
}