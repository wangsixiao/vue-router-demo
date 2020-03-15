import Vue from 'vue'
import Router from 'vue-router'

var Home = () => import('@/components/home')
var HomePage = () => import('@/components/homePage')
var HomeMessage = () => import('@/components/homeMessage')

var About = () => import('@/components/home')

Vue.use(Router)

let routes = [
  // 重定向到home组件
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'page'
      },
      {
        path: 'page',
        component: HomePage
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  }, {
    path: '/about/:userid',
    name: 'about',
    component: About
  }
]

export default new Router({
  routes,
  // 设置history模式，url上不会有#
  mode: 'history',
  // 选中元素class名
  linkActiveClass: 'clickActive'
})
