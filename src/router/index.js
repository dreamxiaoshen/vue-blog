//导入vue-router
//createWebHistory一般使用history不适用hashhistory
import {
    createRouter,
    createWebHistory
} from 'vue-router'
//导入组件
import categoriesView from '@/views/categories/categoriesView.vue';
import Home from "@/views/home/HomeView.vue";
import tagView from "@/views/tag/tagView.vue";
import pigeonhole from "@/views/pigeonhole/pigeonHole.vue";
import link from "@/views/link/linkView.vue"
import aboutView from "@/views/about/aboutView.vue"
import messageView from "@/views/message/messageView.vue"
import maintagView from "@/views/replypage/tagView.vue"
import maincategoriesview from "@/views/replypage/categoriesView.vue"
import articleView from "@/views/article/ArticleView.vue"
//定义路由关系
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/categories',
        component: categoriesView,
    },{
        path: '/links',
        component: link,
    },{
        path: '/tags',
        component: tagView,
    },{
        path: '/about',
        component: aboutView,
    },
    {
        path: '/message',
        component: messageView,
    },
    {
        path: '/archives',
        component: pigeonhole,
    },
    {
        path: '/tags/:tagTitle',
        component: maintagView,
    },{
        path: '/categories/:categoriesTitle',
        component: maincategoriesview,
    },{
        path: '/article/:articleTitle',
        component: articleView,
    }


]


//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    //滚动条返回顶部
    scrollBehavior () {
        return {
            top :0,
        }
    }
});

export default router