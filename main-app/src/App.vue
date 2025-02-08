<!-- main-app/src/App.vue -->
<template>
  <div id="app">
    <h1>主应用（Vue 3）</h1>
    <router-link to="/vue2">Vue 2 微应用</router-link> |
    <router-link to="/react">React 微应用</router-link>
    <div id="micro-app-container"></div> <!-- 微应用挂载点 -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>