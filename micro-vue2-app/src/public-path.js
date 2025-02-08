// micro-vue2-app/src/public-path.js
if (window.__POWERED_BY_QIANKUN__) {
    // 动态设置 publicPath（确保资源路径正确）
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  }