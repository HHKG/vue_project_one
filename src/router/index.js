import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import Login from '@/components/Login'
import HomePage from '../pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Blog',
      name:'Blog',
      component:Blog
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/HomePage',
      name:'HomePage',
      component:HomePage
    }
  ]
})
