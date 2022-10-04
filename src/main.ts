/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-19 21:49:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-24 15:51:06
 * @FilePath: \zheye-master\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'

import App from './App.vue'

// 真实 api 获取, 原项目api地址是http://apis.imooc.com/api/column?icode=xxxxxxxxxx

// defaults.baseURL：api地址域名前缀，即http://apis.imooc.com/api/部分.

// 本地环境和真实环境的api前缀
axios.defaults.baseURL = process.env.NODE_DEV === 'development' ? 'http://localhost:7001/api/' : 'http://api.xxx.xxx/api/'

// 用axios.interceptors拦截 icode部分
// axios.interceptors.request.use(config => {
//   config.params = { ...config.params, icode: 'xxxxxx' }
//   return config
// })

axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  store.commit('setError', { status: false, message: '' })
  return config
})

axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 1000)
  return config
}, e => {
  const { error } = e.response.data
  store.commit('setError', { status: true, message: error })
  store.commit('setLoading', false)
  return Promise.reject(e.response.data)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
