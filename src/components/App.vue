// 根组件

<template>
    <div>
        <h1 v-html="msg"></h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'app组件'
        }
    },
    methods: {
        show(){
            
        }
    },
}
</script>

<style lang="css" scoped>
    h1{
        color: rgb(0, 130, 130);
    }
</style>