// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filter from './utils/filter'
import vueScrollTo from 'vue-scrollto'

// import font awesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

// import the ngrogress
import 'nprogress/nprogress.css' // Progress 进度条样式

// import mustard-ui
import 'mustard-ui/dist/css/mustard-ui.min.css'

// import animation css
import 'animate.css/animate.min.css'

// import components
import './components/'

// add fontawesome library
fontawesome.library.add(solid, regular)

Vue.config.productionTip = false

// use the font awesome
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(vueScrollTo)

// import filter
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
