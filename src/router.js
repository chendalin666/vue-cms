// 路由模块

// 导入路由模块
import VueRouter from 'vue-router'
// 导入登录和注册组件
import Login from './components/account/Login.vue'
import Reg from './components/account/Reg.vue'

// 路由实例
const router = new VueRouter({
    routes:[
        // redirect重定向
        {path:'/',redirect:'/login'},
        {path:'/login',component:Login},
        {path:'/reg',component:Reg}
    ]
})
// 导出router对象
export default router