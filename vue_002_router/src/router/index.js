import Vue from 'vue'
import Router from 'vue-router'
import BuyOne from '@/components/BuyOne'
import About from '@/components/About'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history', // 访问路径中没有# 需要服务器端配置渲染ssr ，有利于seo，访问更快。
  routes: [
    // {
    //   path: '/',
    //   redirect: '/buyOne'  // 重定向
    // },
    // {
    //   path: '/buyOne',
    //   name: 'first',
    //   component: BuyOne
    // },
    // {
    //   path: '/about/:id',
    //   name: 'About',
    //   props: true, // 设为true，则可以在该页面的props中接收到id
    //   component: About,
    //   children: [
    //     {
    //       path: 'test',
    //       component: Test
    //     }
    //   ]
    // }

    { // 命名布局
      path: '/buyOne',
      name: 'first',
      components: { // 复数s
        default: BuyOne,
        bob: Test
      }
    }
  ]
})
