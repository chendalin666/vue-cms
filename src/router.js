// 路由模块
// 导入路由
import VueRouter from 'vue-router';
import HomeContainer from './components/tabbars/HomeContainer.vue';
import MemberContainer from './components/tabbars/MemberContainer.vue';
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue';
import SearchContainer from './components/tabbars/SearchContainer.vue';
import NewsList from './components/newslist/NewsList.vue';
import NewsInfo from './components/newslist/NewsInfo.vue';

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    component: HomeContainer,
  }, {
    path: '/member',
    component: MemberContainer,
  }, {
    path: '/shopcar',
    component: ShopcarContainer,
  }, {
    path: '/search',
    component: SearchContainer,
  }, {
    path: '/home/newslist',
    component: NewsList,
  }, {
    path: '/home/newslist/:id',
    component: NewsInfo,
    props: true, // 启用props接受路由传参
  },
  ],
  // 设置被选中的路由链接的样式
  linkActiveClass: 'mui-active',
});
export default router;
