// 1. jsonp
// 2. node 正向代理 还是那句话 一定知道跨域发生在哪里的
// 3. cors
// 4. nginx 反向代理

// 有做过做过全局的请求处理
// 统一处理登录态 统一处理全局处理
// axios 太牛X了
// 拦截器 适配器

// xhr 添加hook 实现各个阶段打日志

const obj = {
  a: 'xxxx',
  1: 1,
  b: true,
  c: {
    name: '2',
  },
};

const sizeof = require('object-sizeof');

sizeof(obj);

// 重新 属性 方法
// 基础的东西

class XhrHook {
  constructor(beforeHooks = {}, afterHooks = {}) {
    this.xhr = window.XMLHttpRequest;
  }
}
