// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store/store'
import App from './App'
Vue.config.productionTip = false
import './coommon/css/base.less'
import {fetchget,fetchPost} from './api'
Vue.prototype.$post=fetchPost
Vue.prototype.$get=fetchget
new Vue({
  el: '#app',
  router,
  store,
  render:(h)=>h(App)
})