import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: () => import('@/page/Login/Login')
    },
    {
      path: '/',
      component: () => import('page/Admin/Admin'),
      children: [
        {
          path: '/index',
          redirect: '/'
        },
        {
          path: '/',
          meta: {
            title: '首页'
          },
          component: () => import('page/Index/Index')
        },
        {
          path: '/news',
          meta: {
            title: '新闻中心'
          },
          component: () => import('page/News/Index')
        },
        {
          path: '/news/:id(\\d+)',
          meta: {
            title: '编辑新闻'
          },
          component: () => import('page/News/Edit')
        },
        {
          path: '/news/add',
          meta: {
            title: '添加新闻'
          },
          component: () => import('page/News/Add')
        },
        {
          path: '/404',
          meta: {
            title: '404，页面找不到'
          },
          component: () => import('@/page/ErrorPage/ErrorPage')
        },
        {
          path: '*',
          redirect: '/404' // 这个404重定向路由要放在路由配置的最后
        }
      ]
    }
  ]
})
