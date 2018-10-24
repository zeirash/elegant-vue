<template>
  <div id="feature-container">
    <div class="content">
        <feature-card
          imgSrc="./dist/money.png"
          description="Produk yang dijual berasal dari supplier terbaik di berbagai daerah nusantara. Sehingga harga yang ditawarkan bersahabat di kantong masyarakat."
          title="Murah"
        ></feature-card>
        <feature-card
          imgSrc="./dist/recommended.png"
          description="Dengan berbagai banyak pertimbangan dalam penentuan supplier, maka produk memiliki kualitas yang baik."
          title="Bermutu"
        ></feature-card>
        <feature-card
          imgSrc="./dist/users.png"
          description="Dengan harga yang bersaing dan kualitas yang baik, kini produk2 UD Elegant Jaya sudah menyebar di berbagai daerah di seluruh nusantara."
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
    color: rgba(31, 30, 30, 0.7);
}
</style>
