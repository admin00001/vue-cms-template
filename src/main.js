import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'public/style/reset.css'
import 'public/js/ajax'
import 'public/icons' // svg icon 图标，svg可以去iconfont.cn下载, 然后把svg 里面的 fill="颜色" 改为 fill=“”
// import {getAdminInfoUrl} from 'config/api'

Vue.use(ElementUI)
Vue.config.productionTip = false
// 每次路由切换都会请求一次管理员信息接口，看是否掉线
// router.beforeEach((to, from, next) => {
//   // 请求用户接口，判断是否登录
//   Vue.prototype.$ajax.get(getAdminInfoUrl).then(result => {
//     if (result.code === 0) {
//       store.commit('SET_USER_INFO', result.data)
//       if (to.path === '/login') {
//         next({path: '/'})
//       } else {
//         next()
//       }
//     } else {
//       if (to.path === '/login') {
//         next()
//       } else {
//         next('/login')
//       }
//     }
//     document.title = to.meta.title || 'Admin'
//   }).catch(err => {
//     console.error(err)
//   })
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
