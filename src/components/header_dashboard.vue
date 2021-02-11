<template>
  <div>
    <header class="header-dashboard">

    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    loadImg: function (path) {
      return require('../assets/' + path)
    },
  }
}
</script>

<style scoped>
.header-dashboard {
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: #1E9E25;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>
