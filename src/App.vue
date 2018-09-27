<template>
  <div id="app">
    <app-header></app-header>
    <main-content></main-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import MainContent from './components/main_content.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    'app-header': Header,
    'main-content': MainContent,
    'app-footer': Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: #fff;
}

/*scroll bar style*/
.list-item::-webkit-scrollbar-track {
  background-color: #ffffff;
}
.list-item::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
}
.list-item::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #fff;
}
.list-item:hover::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #9E9E9E;
}

.inline {
  display: inline-block;
}

.btn {
  z-index: 22 !important;
  width: 35px !important;
}

.indicators {
  z-index: 33 !important;
}

.slider-item {
  z-index: 11 !important;
}

/* modal dialog */
.modal-dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999 !important;
    background: rgba(0,0,0,0.8); 
}
</style>
