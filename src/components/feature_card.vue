<template>
  <div class="feature-card">
    <div class="feature-img">
        <img v-bind:src="loadImg(imgSrc)" width="100" height="auto" alt="icon" />
    </div>
    <div class="feature-title">{{title}}</div>
    <div class="feature-content">
        {{description}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgSrc', 'title', 'description'],
  data () {
    return {}
  },
  methods: {
    loadImg: function (path) {
      console.log('path:',path)
      return require('../assets/' + path)
    }
  }
}
</script>

<style scoped>
.feature-card {
    border-radius: 6px;
    width: 200px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    text-align: center;
    padding: 1.2em;
    background: #fff;
    margin: 2em 2em;
    height: 400px;
}

.feature-img {
    height: 100px;
    width: 100px;
    margin: 1em auto;
}

.feature-title {
    margin-top: 1em;
}

.feature-content {
    margin-top: 2em;
    line-height: 1.4rem;
}
</style>
