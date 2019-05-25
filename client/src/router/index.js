import Vue from 'vue'
import Router from 'vue-router'
import Foods from '@/components/Foods/Home'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Food from '@/components/Food'
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
      path: '/foods',
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
      path: '/foods',
      name: 'foods',
      component: Food
    },
    {
      path: '/prints',
      name: 'prints',
      component: Prints
    }
  ]
})
