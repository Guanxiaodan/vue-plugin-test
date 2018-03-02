import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chart from '@/pages/vCharts/vChartsTest'
import transfer from '@/pages/iview/iviewTransfer'
import tabs from '@/pages/iview/iviewTabs'
import self from '@/pages/iview/self'
import upload from '@/pages/iview/upload'
import dropdown from '@/pages/iview/iviewDropDown'
import drag from '@/pages/vueDrag/vueDragula'
import swiper from '@/pages/swiper/swiper'
// import draggable from '@/pages/vueDrag/vueDraggable'
// import vueDraggableTables from '@/pages/vueDrag/vueDraggableTables'
// import vueDraggableResizableTry from '@/pages/vueDrag/vueDraggableResizableTry'

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
    // {
    //   path: '/draggable',
    //   name: 'draggable',
    //   component: draggable
    // },
    // {
    //   path: '/dragdiv',
    //   name: 'dragdiv',
    //   component: vueDraggableResizableTry
    // },
    // {
    //   path: '/vueDraggableTables',
    //   name: 'vueDraggableTables',
    //   component: vueDraggableTables
    // },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    }
  ]
})
