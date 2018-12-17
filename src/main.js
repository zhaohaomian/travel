// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})