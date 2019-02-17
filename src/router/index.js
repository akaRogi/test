import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import local from '@/components/local'
import HomeNav from '@/components/home/sonNav'
import daily from '@/components/daily'
import dailyMain from '@/components/daily/show'
import top250 from '@/components/top250'
import design from '@/components/design'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is_show',
  routes: [
    {
      path: '/home/:id?',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/:id?',
          name: 'HomeNav',
          component: HomeNav
        }
      ]
    },
    {
      path: '/local',
      name: 'local',
      component: local
    },
    {
      path: '/daily',
      name: 'daily',
      component: daily,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/daily/:id?',
      name: 'dailyMain',
      component: dailyMain
    },
    {
      path: '/top250',
      name: 'top250',
      component: top250
    },
    {
      path: '/design/:id?',
      name: 'design',
      component: design
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
