<template>
  <div class="feature-card">
    <div class="feature-img">
        <!--img src="#" width="40" height="auto" /-->
    </div>
    <div class="feature-title">Title</div>
    <div class="feature-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing el!
    </div>
  </div>
</template>

<script>
export default {
  props: ['height'],
  data () {
    return {
      
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
    margin: 0 2em;
    height: 420px;
}

.feature-img {
    height: 100px;
    width: 100px;
    background-color: #ccc;
    margin: 1em auto;
}

.feature-title {
    margin-top: 1em;
}

.feature-content {
    margin-top: 2em;
}

</style>
