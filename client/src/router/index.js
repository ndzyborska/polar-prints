import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Foods from '@/components/Foods/Home'
import New from '@/components/Foods/New'
import Log from '@/components/Log'
import FoodDetails from '@/components/Foods/FoodDetails'
import NotFound from '@/components/NotFound'
import Prints from '@/components/Prints'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foods',
      component: Foods
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
      path: '/food/:foodId',
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
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/notFound'
    }
  ]
})
