import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const HomePage=()=>import('../pages/HomePage');
const Login=()=>import('@/components/Login');
const Blog=()=>import('@/components/Blog');
const Home=()=>import('@/pages/home');
const UserList=()=>import('@/pages/userList');
const shopList=()=>import('@/pages/shopList');
const foodList=()=>import('@/pages/foodList');
const orderList=()=>import('@/pages/orderList');
const adminList=()=>import('@/pages/adminList');
const addShop=()=>import('@/pages/addShop');

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
      },
      {path:'/shopList',
       component:shopList,
       meta:['数据管理','商家列表']
      },
      {
        path:'/foodList',
        component:foodList,
        meta:['数据管理','食品列表']
      },
      {
        path:'/orderList',
        component:orderList,
        meta:['数据管理','订单列表']
      },
      {
        path:'/adminList',
        component:adminList,
        meta:['数据管理','管理员列表']
      },
      {
        path:'/addShop',
        component:addShop,
        meta:['添加数据','添加店铺']
      },

      ]
    }
  ]
})
