// 新闻列表页
<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <!-- 通过vbind绑定路由id -->
                <router-link :to="'/home/newslist/'+item.id" class="mui-navigate-right">
                    <!-- <img class="mui-media-object mui-pull-left" :src="item.img_url"> -->
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class='mui-ellipsis'>
                            <!-- dateFormat(传递格式) -->
                            <!-- <span>发布时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>  -->
                            <span>发布时间:{{item.add_time | dateFormat}}</span>
                            <span>浏览量:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newslist:[]
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        async getNewsList(){
            const {data} = await this.$http.get('/api/getnewslist')
            console.log(data);
            if(data.status === 0 ) this.newslist = data.message
        }
    },
}
</script>

<style lang="scss" scoped>
.mui-media-body{
    h4{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: rgb(38,162,255);
    }
    }
</style>