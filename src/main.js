import Vue from 'vue'
import App from './App.vue'
// import LP from './pages/LandingPage'
import vueSmoothScroll from 'vue2-smooth-scroll'
// import VueRouter from 'vue-router'
import router from './router'

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }


// const routes = [
//   { path: '/foo', component: LP },
//   { path: '/bar', component: Bar }
// ]


Vue.use(vueSmoothScroll)
// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes
// })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})