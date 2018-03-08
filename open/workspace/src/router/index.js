import "../assets/jquery-1.8.3.min.js"
import "../assets/cat.js"
import "../assets/buffermove.js"
import "../assets/banner.js"
import "../assets/youziku.api.min.js"
import Vue from 'vue'
import Router from 'vue-router'
import bookcity from '@/components/bookcity'
import bookshelf from '@/components/bookshelf'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookcity',
      component: bookcity
    },
    {
      path: '/bookcity',
      name: 'bookcity',
      component: bookcity
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: bookshelf
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
