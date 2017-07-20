import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chart from '@/pages/vChartsTest'
import transfer from '@/pages/iviewTransfer'
import dropdown from '@/pages/iviewDropDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: dropdown
    }
  ]
})
