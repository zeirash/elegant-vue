<template>
  <div id="app">
    <app-header></app-header>
    <main-content></main-content>
  </div>
</template>

<script>
import Header from './components/header.vue'
import MainContent from './components/main_content.vue'

export default {
  components: {
    'app-header': Header,
    'main-content': MainContent
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
</style>
