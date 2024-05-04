//导入request.js请求工具
import request from '@/utils/request.js'
//获取个人信息
export const userInfoGetService = ()=>{
    return request.get('/mainData');
}
//获取文章列表
export const articleListGetService = ()=>{
    return request.get('/mainArticle');
}
//获取分类详情
export const categoryGetService = ()=>{
    return request.get('/category');
}
//获取标签详情
export const tagGetService = ()=>{
    return request.get('/tag');
}
