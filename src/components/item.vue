<template>
  <div class="item-container">
    <div class="inline">
        <div class="item-img">
            <!--img src="#" width="40" height="auto" /-->
        </div>
    </div>
    <div class="inline">
        <div class="item-title">{{title}}</div>
        <div class="item-desc"></div>
        <div class="item-price"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.inline {
  display: inline-block;
}
.item-container {
    border-radius: 6px;
    border: 1px solid black;
    width: 31%;
    float: left;
    margin: 1em;
    display: flex;
    align-items: top;
}

.item-img {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 6px;
}
</style>
