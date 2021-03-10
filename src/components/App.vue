// 根组件

<template>
    <div class="app-container">
        <!--头部区域 -->
        <mt-header fixed title="vue-cms">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <transition>
            <!-- 路由容器 -->
            <router-view></router-view>
        </transition>
        

        <!-- 底部区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/shopcar" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        
    },
}
</script>

<style lang="css" scoped>
    .app-container{
        padding-top:40px;
        /* 当切换组件的时候，动画效果会使页面宽度溢出，出现底部滚动条，用overflow可以解决溢出问题 */
        overflow: hidden;
    }
    /* 即将进入的组件的位置 */
    .v-enter{
        opacity: 0;
        /* 距离x轴正方向的距离为宽度的100% */
        transform: translateX(100%);
    }
    /* 离开后的位置 */
    .v-leave-to{
        opacity: 0;
        /* x轴的负方向 */
        transform: translateX(-100%);
        /* 使元素离开时浮动起来 */
        position: absolute;
    }
    /* 进入和离开的时的样式 */
    .v-enter-active,
    .v-leave.active{
        transition: all .3s ease;
    }
</style>