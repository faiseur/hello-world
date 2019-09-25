import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
