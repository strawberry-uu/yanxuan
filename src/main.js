import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Mint from 'mint-ui'; 

Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'

import Vuex from 'vuex'

Vue.use(Vuex);

import store from '../src/assets/js/data.js'
import router from '../src/assets/js/router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
