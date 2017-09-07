// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import store from './vuex/store'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(ElementUI)
Vue.use(VueCookies)
// Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
