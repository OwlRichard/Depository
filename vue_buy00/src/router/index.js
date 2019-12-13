import Vue from 'vue'
import Router from 'vue-router'
import BuyOne from '@/components/BuyOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BuyOne',
      component: BuyOne
    }
  ]
})
