<template>
    <div>
        <!-- 轮播图 :auto=4000 意思是4秒换下一张图 -->
        <mt-swipe :auto="4000">
            <!-- 通过vfor循环遍历获取到的lunbotu数据 -->
            <mt-swipe-item v-for="item in lunbotu" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-6">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻咨询</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            lunbotu:[]//轮播图数据
        }
    },
    methods: {
        async getlunbo(){
            // 解构赋值获取数据
            const {data} = await this.$http.get('/api/getlunbo')
            console.log(data)
            // 如果data的状态码为0说明请求数据成功，然后将data的message数据传递给给this.lunbotu
            if (data.status === 0) this.lunbotu = data.message
            console.log(this.lunbotu)
        }
    },
    created() {// 页面加载时执行
        // 获取轮播图
        this.getlunbo()
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 150px;
        .mint-swipe-item{
            img{
                width: 100%;
                height: 100%;
            }
            &:nth-of-type(1){
                background-color: rosybrown;
            }
            &:nth-of-type(2){
                background-color:royalblue;
            }
            &:nth-of-type(3){
                background-color: darkcyan;
            }
        }
    }
    .mui-grid-view{
        li {
            img{
                width: 60px;
                height: 60px;
            }
        }
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 12px;
    }
</style>