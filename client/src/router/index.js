import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Foods from '@/components/Foods/Home'
import New from '@/components/Foods/New'
import Log from '@/components/Log'
import FoodDetails from '@/components/Foods/FoodDetails'
import Prints from '@/components/Prints'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/foods',
      name: 'foods',
      component: Foods
    },
    {
      path: '/foods/:foodId',
      name: 'foodDetail',
      component: FoodDetails
    },
    {
      path: '/newFood',
      name: 'newFood',
      component: New
    },
    {
      path: '/log',
      name: 'log',
      component: Log
    },
    {
      path: '/prints',
      name: 'prints',
      component: Prints
    }
  ]
})
