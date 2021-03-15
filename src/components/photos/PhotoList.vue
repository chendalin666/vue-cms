<template>
    <div>
        <mt-navbar v-model="active" fixed>
            <mt-tab-item v-for="(item,index) in category" :key="item.id" :id="index">{{item.title}}</mt-tab-item>
        </mt-navbar>

        <ul>
            <li v-for="item in photolist" :key="item.id">
                <!--  使用mintui中的v-lazy懒加载，值为图片的url地址 -->
                <img v-lazy="'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg'">
                <div class="info">
                    <h3>{{item.title}}</h3>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            active:0,
            category:[],
            photolist:[]
        };
    },
    created() {
        this.getPhotoCategory()
        this.getPhotoByCategory(0)
    },
    methods: {
        async getPhotoCategory(){
            const {data} = await this.$http.get("/api/getimgcategory");
            if(data.status === 0) console.log(data.message); data.message.unshift({title:'全部',id:0});this.category = data.message;
        },
        async getPhotoByCategory(id){
            const {data} = await this.$http.get("/api/getimages/"+id)
            if(data.status === 0) console.log(data.message);this.photolist = data.message
        }
    },

};
</script>

<style lang="css" scoped>
.mint-navbar{
    top: 40px;
}
.mint-tab-container{
    top: 55px;
}
.mint-navbar .mint-tab-item{
    color: #999;
}
.mint-navbar .mint-tab-item.is-selected{
    color:royalblue;
} 
ul{
    list-style: none;
    padding: 0 10px;
    margin-top: 70px;
}
ul>li{
    width: 100%;
    margin-top: 10px;
    box-shadow: 0 0 6px gray;
    position: relative;
    color: #fff;
}
ul>li>.info{
    position: absolute;
    bottom: 0;
    background-color: rgba(200,200,200,0.8);

}
ul>li>.info>p{
    color: #555;
}
ul>li>img{
    /* inherit继承父元素宽度 */
    width: inherit;
    /* 使元素的中部与父元素的基线加上父元素x-height的一半对齐 */
    vertical-align: middle;
}
/* 设置懒加载时候的样式 */
img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}

</style>