import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)
// 导入自己的路由模块，得到路由对象
import router from './router.js'
// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// 导入mui
import '../lib/mui/css/mui.min.css'
// 导入全局样式
import './css/global.css'
// 导入App根组件
import App from './components/App.vue'
// 创建vue实例
const vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    // 用render渲染的组件是根组件
    render:c=> c(App),
    // 挂载路由
    router
})