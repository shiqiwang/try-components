import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PullDownList from '@/components/pullDownList'
import Parent from '@/components/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pull-down-list',
      name: 'pullDownList',
      component: PullDownList
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    }
  ]
})
