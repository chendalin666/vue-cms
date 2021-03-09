// 根组件

<template>
    <div>
        <h1 v-html="msg"></h1>
        <mt-button type="primary" @click="show">primary</mt-button>
        <button type="button" class="mui-btn mui-btn-danger">红色</button>
        <router-link to="/login">登录</router-link>
        <router-link to="/reg">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
// 引入mintUI中的弹窗
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            msg:'app组件'
        }
    },
    methods: {
        show(){
            // 弹窗
            Toast({
                // 弹窗信息
                message:'lbwnb',
                // 弹窗位置
                position:'top',
                // 持续时间2秒
                duration:2000,
                // 设置弹窗的图标样式
                iconClass:'bi-align-top msg'
            })
        }
    },
}
</script>

// 使用style的scoped属性实现私有样式的定义
// 原理是给当前组件的标签创建自定义属性data-xxxx
<style lang="css" scoped>
    h1{
        color: rgb(0, 130, 130);
    }
</style>