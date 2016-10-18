import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

// var data = { msg: 'hello!' }

var vm = new Vue({
  el: 'app',
  store,
  // data: data,
  components: { App }
})

// console.log('ok');