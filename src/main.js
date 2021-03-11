// 导入vue
import Vue from 'vue';
// 导入全局配置
import './globalConfig';
// 导入vue-router
import VueRouter from 'vue-router';
// 导入路由模块
import router from './router';
// 导入App根组件
import App from './components/App.vue';

Vue.use(VueRouter);
// import '@babel/polyfill';

// 创建vue实例(eslint-disable-next-line意思是在eslint检查语法时下一行排除)
// eslint-disable-next-line
const vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  // 用render渲染App根组件
  render: function render(c) {
    return c(App);
  },
  // 挂载路由
  router,
});
