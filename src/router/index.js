import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const HomePage=()=>import('../pages/HomePage');
const Login=()=>import('@/components/Login');
const Blog=()=>import('@/components/Blog');
const Home=()=>import('@/pages/home');
const UserList=()=>import('@/pages/userList');

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
      component:HomePage,
      children:[{
        path:'',
        component:Home, 
        meta:[]
      },{
        path:'/UserList',
        component:UserList,
        meta:['数据管理','用户列表']
      }]
    }
  ]
})
