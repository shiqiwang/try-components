import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import PullDownList from '@/components/pullDownList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      name: 'PullDownList',
      component: PullDownList
      //  component: Hello
    }
  ]
})
