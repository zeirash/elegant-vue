import Vue from 'vue'
import LandingPage from './pages/LandingPage'
import AdminPage from './pages/AdminPage'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: LandingPage },
    { path: '/dashboard', component: AdminPage }
  ],
  mode: 'history'
})