import Vue from 'vue'
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
    render:c=> c(App)
})