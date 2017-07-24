// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeLine from 'v-charts/lib/line'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
const VueDragula = require('vue-dragula')

Vue.config.productionTip = false
Vue.component(VeLine.name, VeLine)
Vue.use(iView)
Vue.use(VueDragula)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
