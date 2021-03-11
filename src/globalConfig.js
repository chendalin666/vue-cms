// 导入vue
import Vue from 'vue';
// 导入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css';

// 导入mui
import '../lib/mui/css/mui.min.css';
import '../lib/mui/css/icons-extra.css';

// 引入过滤器模块
import './filters';

// 导入axios
import axios from 'axios';
// 把axios挂载到vue的$http原型对象上,可以通过this.$http调用axios的方法
Vue.prototype.$http = axios.create({
  // 通过axios.create的baseURL设置请求的根路径
  baseURL: 'http://www.liulongbin.top:3005',
});
Vue.use(MintUI);
