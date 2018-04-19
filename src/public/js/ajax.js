import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
const NOT_LOGIN_CODE = 536975769 // 用户未登录的错误码

axios.post = function (url, data = {}) {
  return axios({
    method: 'post', // 请求协议
    withCredentials: true,
    url: url, // 请求的地址
    data: qs.stringify(data), // post 请求的数据
    timeout: 5000, // 超时时间, 单位毫秒
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

axios.get = function (url, params = {}) {
  return axios({
    method: 'get', // 请求协议
    withCredentials: true,
    url, // 请求的地址
    params, // get 请求的数据
    timeout: 5000 // 超时时间, 单位毫秒
  })
}

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if (+response.data.code === NOT_LOGIN_CODE && this.$router) {
    this.$router.push('/login')
    this.$message.error('登录超时，请重新登录!')
  }
  return response.data
}, error => Promise.reject(error.response))

Vue.prototype.$ajax = axios
