// 导入vue
import Vue from 'vue'
// 导入axios
import axios from 'axios'
// 把axios挂载到vue的$http原型对象上,可以通过this.$http调用axios的方法
Vue.prototype.$http = axios.create({
    // 通过axios.create的baseURL设置请求的根路径
    baseURL:'http://www.liulongbin.top:3005'
})
// 导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 导入mui
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
// 导入App根组件
import App from './components/App.vue'

// 创建vue实例
const vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{
        
    },
    // 用render渲染App根组件
    render:c=> c(App),
    // 挂载路由
    router
})