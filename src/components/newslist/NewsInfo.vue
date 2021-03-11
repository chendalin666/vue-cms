<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="info">
            <span>发布时间:{{newsinfo.add_time | dateFormat}}</span>
            <span>浏览量:{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content">
        </div>
        <!-- 评论组件 父组件通过绑定属性名向子组件传值-->
        <comment :newsid="id"></comment>
    </div>
</template>

<script>
// 引入评论组件
import Comment from '../sub-component/Comment.vue';
export default {
    data() {
        return {
            newsinfo:{}
        }
    },
    methods: {
        async getNewsInfo(){
            const {data} = await this.$http.get('/api/getnew/'+this.id)
            console.log(data);
            if(data.status === 0) this.newsinfo = data.message[0]
        }
    },
    created() {
        this.getNewsInfo()
    },
    // 子组件
    components:{
        Comment
    },
    // 接受路由传递的参数
    props:['id']
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 3px;
    .title{
        font-size: 1em;
        color: red;
        margin: 10px 0;
        text-align: center;
    }
    .info{
        color: #26a2ff;
        display: flex;
        justify-content: space-between;
    }
}
</style>