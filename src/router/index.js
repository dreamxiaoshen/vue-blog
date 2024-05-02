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
        component: categoriesView,
    },{
        path: '/tags',
        component: tagView,
    },{
        path: '/about',
        component: categoriesView,
    },
    {
        path: '/message',
        component: categoriesView,
    },
    {
        path: '/archives',
        component: pigeonhole,
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