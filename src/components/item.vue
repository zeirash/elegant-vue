<template>
  <div class="item-container">
    <div class="inline">
        <div class="item-img">
            <!--img src="#" width="40" height="auto" /-->
        </div>
    </div>
    <div class="inline content">
        <div class="item-title">{{title}}</div>
        <div class="item-desc"> deskripsi singkat barang</div>
        <div class="item-price">
          Grosir: <br/>
          Eceran:
        </div>
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

.content {
  margin: 10px;
}

.item-container {
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 31%;
    float: left;
    margin: 1em;
    display: flex;
    align-items: top;
    position: relative;
}

.item-img {
  width: 120px;
  height: 120px;
  background-color: #ccc;
  border-radius: 6px;
}

.item-title {
  font-weight: 500;
  font-size: 1.2rem;
}

.item-desc {
  color: #8E8E8E;
}

.item-price {
  position: absolute;
  color: #8E8E8E;
  bottom: 5px;
}
</style>
