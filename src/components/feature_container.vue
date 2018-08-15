<template>
  <div id="feature-container">
    <div class="content">
        <feature-card
          imgSrc="/dist/money.png"
        ></feature-card>
        <feature-card
        ></feature-card>
        <feature-card
        ></feature-card>
    </div>
  </div>
</template>

<script>
import FeatureCard from './feature_Card.vue'

export default {
  components: {
      'feature-card': FeatureCard
  },
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style scoped>
#feature-container {
    background: linear-gradient(#1E9E25, #fff);
}

.content {
    display: flex;
    justify-content: center;
    padding: 2em;
    flex-wrap: wrap;
}
</style>
