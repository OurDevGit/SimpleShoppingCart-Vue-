import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from '@/pages/Cart/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
