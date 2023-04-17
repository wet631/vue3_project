import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
    // 根据后端的接口的统一前缀
    // baseURL:'/api',
    baseURL:'',
    timeout:80000,//超时请求时间
    withCredentials:true,//异步请求携带cookie
    // headers:{
    //     // 设置后端需要传参类型
    //     'Content-Type': 'application/json',
    //     'token': x-auth-token',//一开始就要token
    //     'X-Requested-With': 'XMLHttpRequest',
    // }
})

// request 拦截器
request.interceptors.request.use(
    config => {
        // 如果要去localStore获取到token
        // let token = localStorage.getItem("x-auth-token");
         // if (token) {
            // 添加请求头
            // config.headers["Authorization"]="Bearer "+ token
        //  }
        return config
    },
    error =>{
        Promise.reject(error)
    }
)

// response 拦截器 
request.interceptors.response.use(
    response =>{
        // 对响应的数据做出操作
        return response.data
    },
    error =>{
        // 对响应的错误做出操作 
        return Promise.reject(error)
    }
)

export default request