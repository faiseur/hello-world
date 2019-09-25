import Vue from 'vue'
import VueRouter from 'vue-router'
import map from './map'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: map
})


export default router
