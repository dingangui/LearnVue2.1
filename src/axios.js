import axios from "axios"
import Element from "element-ui"
import store from './store'
import router from './router'

axios.defaults.baseURL = "http://localhost:8081"

// 前置拦截
axios.interceptors.request.use(config => {
    return config
})

// 后置拦截
axios.interceptors.response.use(response => {
        let res = response.data;
        console.log(res)

        if (res.code === 200) {
            return response
        } else {
            Element.Message.error(response.data.msg, {duration: 2 * 1000})
            return Promise.reject(response.data.msg)
        }

    }
    ,
    error => {
        console.log(error)
        if (error.response.status === 401) {
            store.commit("REMOVE_INFO")
            router.push("/login")
        }
        Element.Message.error(error.response.data.msg, {duration: 2 * 1000})
        return Promise.reject(error)



    })