//在index.js中引入axios
import axios from 'axios';
//引入qs模块，用来序列化post类型的数据
import QS from 'qs';
//antd的message提示组件，大家可根据自己的ui组件更改。
// import { message } from 'antd'

axios.defaults.timeout = 10000
// axios.defaults.baseURL=xxx

/*
请求拦截器
*/
axios.interceptors.request.use(
    (config) => {
        // 每次发送请求之前本地存储中是否存在token，也可以通过Redux这里只演示通过本地拿到token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = localStorage.getItem('userToken')

        //在每次的请求中添加token
        // config.data = Object.assign({}, config.data, {
        //     token: token,
        // })

        //设置请求头
        config.headers = {
            "Content-Type": "application/json",
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660563256469624609046529","bc":"110100"}',
            "X-Host": "mall.film-ticket.cinema.list"
        };
        config.data = QS.stringify(config.data)
        console.log(31, config)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


/*
响应拦截器
*/

// 响应拦截器
axios.interceptors.response.use(response => {
    //根据返回不同的状态码做不同的事情
    // 这里一定要和后台开发人员协商好统一的错误状态码
    if (response.status) {
        switch (response.status) {
            case 200:
                return response;
            default:
                return response
        }
    } else {
        return response;
    }
})
//最后把封装好的axios导出
export default axios