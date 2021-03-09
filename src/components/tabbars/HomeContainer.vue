<template>
    <div>
        <!-- 轮播图 :auto=4000 意思是4秒换下一张图 -->
        <mt-swipe :auto="4000">
            <!-- 通过vfor循环遍历获取到的lunbotu数据 -->
            <mt-swipe-item v-for="item in lunbotu" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <h1>home</h1>
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
            // console.log(data)
            // 如果data的状态码为0说明请求数据成功，然后将data的message数据传递给给this.lunbotu
            if (data.status === 0) this.lunbotu = data.message
            // console.log(this.lunbotu)
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
</style>