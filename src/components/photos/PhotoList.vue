<template>
    <div>
    <mt-navbar v-model="active" fixed>
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">热点</mt-tab-item>
        <mt-tab-item id="3">社会</mt-tab-item>
        <mt-tab-item id="4">娱乐</mt-tab-item>
        <mt-tab-item id="5">资讯</mt-tab-item>
        <mt-tab-item id="6">长沙</mt-tab-item>
        

    </mt-navbar>

    <mt-tab-container v-model="active">
        <mt-tab-container-item id="1">
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>
            <mt-cell title="tab-container 1"></mt-cell>

        </mt-tab-container-item>

        <mt-tab-container-item id="2">
            <mt-cell title="tab-container 2"></mt-cell>
            <mt-cell title="tab-container 2"></mt-cell>

        </mt-tab-container-item>

        <mt-tab-container-item id="3">
            <mt-cell title="tab-container 3"></mt-cell>
            <mt-cell title="tab-container 3"></mt-cell>

        </mt-tab-container-item>
        
        <mt-tab-container-item id="4">
            <mt-cell title="tab-container 4"></mt-cell>
            <mt-cell title="tab-container 4"></mt-cell>

        </mt-tab-container-item>
        
        <mt-tab-container-item id="5">
            <mt-cell title="tab-container 5"></mt-cell>
            <mt-cell title="tab-container 5"></mt-cell>

        </mt-tab-container-item>
        
        <mt-tab-container-item id="6">
            <mt-cell title="tab-container 6"></mt-cell>
            <mt-cell title="tab-container 6"></mt-cell>

        </mt-tab-container-item>
        
    </mt-tab-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:"1"
        };
    },
    methods: {

    },

};
</script>

<style lang="css" scoped>
.mint-navbar,.mint-cell:nth-of-type(1){
    top: 40px;
}
.mint-navbar .mint-tab-item{
    color: #999;
}
.mint-navbar .mint-tab-item.is-selected{
    color:royalblue;
}
</style>