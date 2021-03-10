<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <a class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class='mui-ellipsis'>
                            <span>发布时间:{{item.add_time}}</span>
                            <span>浏览量:{{item.click}}</span>
                        </p>
                    </div>
                </a>
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
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: rgb(38,162,255);
    }
</style>