// micro-react-app/src/index.js
import './public-path' // 引入 public-path.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function render(props) {
  const { container } = props
  ReactDOM.render(
    <App />,
    container ? container.querySelector('#root') : document.querySelector('#root') // 挂载到指定容器
  )
}

// 独立运行时直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

// 暴露 Qiankun 生命周期钩子
export async function bootstrap() {
  console.log('React 微应用 bootstrap')
}

export async function mount(props) {
  console.log('React 微应用 mount', props)
  render(props)
}

export async function unmount() {
  console.log('React 微应用 unmount')
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}