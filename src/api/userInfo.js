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
//根据分类数据查询文章
export const articleByCategoryGetService = (categoryTitle)=>{
    return request.get('/articleByCategory?categoryTitle='+categoryTitle);
}
//根据标签数据查询文章
export const articleByTagGetService = (tagTitle)=>{
    return request.get('/articleByTag?tagTitle='+tagTitle);
}
//根据id据查询文章
export const articleByIdService = (id)=>{
    return request.get('/articleById?id='+id);
}
