import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.headers.common['Authorization'] = "Bearer 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"
Vue.http.headers.common['Content-Type'] = "application/json"
Vue.http.headers.common['Access-Control-Allow-Origin'] = "*"
Vue.http.headers.common['Access-Control-Allow-Methods'] = "GET, POST, PATCH, PUT, DELETE, OPTIONS"
Vue.http.headers.common['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept"

new Vue({
  el: '#app',
  render: h => h(App)
})