//导入vue-router
//createWebHistory一般使用history不适用hashhistory
import { createRouter, createWebHistory } from 'vue-router'
//导入组件


//定义路由关系
const routes = [
]

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router