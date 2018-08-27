<template>
  <div>
    <div class="header-bg" id="top">
        <div class="layer-bg"></div>
        <div class="content-header">
          Elegant Houseware<br/>
          <span>dolor sit amet blabla</span>
        </div>
    </div>
    <search-container></search-container>
    <feature-container></feature-container>
    <about-container></about-container>
  </div>
</template>

<script>
import SearchContainer from './search_container.vue'
import FeatureContainer from './feature_container.vue'
import AboutContainer from './about_container.vue'

export default {
  components: {
    'search-container': SearchContainer,
    'feature-container': FeatureContainer,
    'about-container': AboutContainer
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
  position: absolute;
}

.content-header {
  color: #fff;
  z-index: 99;
  position: absolute;
  left: 0;
  right: 0;
  top: 150px;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
}

.content-header span {
  font-style: italic;
  font-size: 1.8rem;
}
</style>
