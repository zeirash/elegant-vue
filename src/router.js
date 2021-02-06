import Vue from 'vue'
import LandingPage from './pages/LandingPage'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Bar = { template: '<div>bar</div>' }
export default new VueRouter({
  routes: [
    { path: '/', component: LandingPage },
    { path: '/dashboard', component: Bar }
  ],
  mode: 'history'
})