import "../assets/jquery-1.8.3.min.js"
import "../assets/cat.js"
import "../assets/buffermove.js"
import "../assets/banner.js"
import "../assets/youziku.api.min.js"
import Vue from 'vue'
import Router from 'vue-router'
import bookcity from '@/pages/bookcitys'
import bookshelf from '@/pages/bookshelfs'
import my from '@/pages/mys'
import blist from '@/pages/blist'
import brecommend from '@/pages/brecommend'
import bclassify from '@/pages/bclassify'
import bstory from '@/pages/bstory'
import collections from '@/pages/collections'
import downloads from '@/pages/downloads'
import historys from '@/pages/historys'

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
    },
    {
      path: '/blist',
      name: 'blist',
      component: blist
    },
    {
      path: '/brecommend',
      name: 'brecommend',
      component: brecommend
    },
    {
      path: '/bclassify',
      name: 'bclassify',
      component: bclassify
    },
    {
      path: '/bstory',
      name: 'bstory',
      component: bstory
    },
    {
      path: '/collections',
      name: 'collections',
      component: collections
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: downloads
    },
    {
      path: '/historys',
      name: 'historys',
      component: historys
    }
  ]
})
