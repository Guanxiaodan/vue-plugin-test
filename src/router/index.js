import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chart from '@/pages/vChartsTest'
import transfer from '@/pages/iviewTransfer'
import dropdown from '@/pages/iviewDropDown'
import drag from '@/pages/vueDragula'
import draggable from '@/pages/vueDraggable'

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
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: draggable
    }
  ]
})
