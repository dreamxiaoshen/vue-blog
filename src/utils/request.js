//定制请求的实例
//添加请求拦截器
//导入axios  npm install axios
import axios from 'axios';
import {
    ElMessage
} from 'element-plus'
//定义一个变量,记录公共的前缀,baseURL
const baseURL = '/api';
const instance = axios.create({
    baseURL
})
//添加请求拦截器
instance.interceptors.request.use(

)
//添加响应拦截器
instance.interceptors.response.use(
    result => {

        if (result.data.code == 0) {
            ElMessage.success(result.data.message ? result.data.message : '请求成功')
            return result.data
            
        } else {
            ElMessage.error(result.data.message ? result.data.message : '服务异常')
        }

    },
    err => {
        if (err.response.status === 401) {
            ElMessage.error('无权访问')
        } else {
            ElMessage.error('服务异常');
        }
        return Promise.reject(err); //异步的状态转化成失败的状态
    }
)

export default instance;