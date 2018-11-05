import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})