import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import city from '@/components/city/city'
import detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当访问根路径，直接跳转至定义的组件中去
      path: '/',  
      name: 'home',
      component: home
    },
    {
      path: '/city',  
      name: 'city',
      component: city
    },
    {
      // 动态路由 id接受一个参数  带有动态的都优先考虑v-bind
      path: '/detail/:id',  
      name: 'detail',
      component: detail
    }
  ],
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  // mode: 'history',
  // base: process.env.BASE_URL,
  // routes
  })