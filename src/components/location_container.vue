<template>
  <div>
      <div class="location-content">
          <div class="location-group">
              <div class="location-map">
                  <img v-bind:src="imgSrc" alt="" />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['imgSrc'],
  data () {
    return {

    }
  },
  methods: {
      
  }
}
</script>

<style scoped>
#location-container {
    width: 50%;
    border: 1px solid black;
}

.location-content {
    margin-top: 1em;
}

.location-group {
    display: inline-block;
    margin-left: 2em;
}

.location-map img {
    width: 300px;
    height: 300px;
}

@media screen and (max-width: 360px) {
    .location-map img {
        width: 250px;
        height: 250px;
    }
}
</style>