import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import {routes} from './assets/routes'

Vue.use(VueRouter);
const router = new VueRouter({
  routes : routes,
  mode : 'history',
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return {
        selector : to.hash
      }
    }
    if (savedPosition){
      return savedPosition;
    }
    return {x:0, y:0};
  }
})

Vue.filter('k_to_c', function(k_value) {
  return Math.floor(k_value - 273.15);
})

Vue.filter('timestamp_date', function(timestamp){
  let date = new Date(timestamp);
  return date;
})

Vue.filter('mph_to_kph', function(mph){
  return Math.floor(mph*1.61);
})

export const eventBus = new Vue();
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
