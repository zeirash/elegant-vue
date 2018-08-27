<template>
  <div id="feature-container">
    <div class="content">
        <feature-card
          imgSrc="./dist/money.png"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing el!"
          title="Murah"
        ></feature-card>
        <feature-card
          imgSrc="./dist/recommended.png"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing el!"
          title="Bermutu"
        ></feature-card>
        <feature-card
          imgSrc="./dist/users.png"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing el!"
          title="Banyak Pelanggan"
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
