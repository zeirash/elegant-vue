<template>
  <div>
    <div class="header-bg">
        <div class="layer-bg"></div>
    </div>
    <search-container></search-container>
    <feature-container></feature-container>
  </div>
</template>

<script>
import SearchContainer from './search_container.vue'
import FeatureContainer from './feature_container.vue'

export default {
  components: {
    'search-container': SearchContainer,
    'feature-container': FeatureContainer
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.header-bg {
  background: url("../assets/background-top.jpg") no-repeat;
  background-size: cover;
  height: 500px;
  position: relative;
}

.layer-bg {
  background: #1E9E25;
  opacity: .6;
  height: 100%;
  width: 100%;
}
</style>
