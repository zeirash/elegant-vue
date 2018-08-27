<template>
  <div class="item-container">
    <div class="inline">
        <div class="item-img">
            <img v-bind:src="imgSrc" width="40" height="auto" alt="" />
        </div>
    </div>
    <div class="inline content">
        <div class="item-title">{{title}}</div>
        <div class="item-desc"> deskripsi singkat barang</div>
        <div class="item-price">
          Grosir: Kontak kami<br/>
          Eceran: {{price}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'imgSrc'],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
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
    height: 120px;
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
  font-size: .9rem;
}

.item-price {
  position: absolute;
  color: #8E8E8E;
  bottom: 5px;
  font-size: .9rem;
}

@media screen and (max-width: 1380px) {
  .item-container {
    width: 30%;
  }
}

@media screen and (max-width: 1160px) {
  .item-container {
    width: 40%;
  }
}

@media screen and (max-width: 920px) {
  .item-container {
    width: 80%;
  }
}

@media screen and (max-width: 400px) {
  .item-title {
    font-weight: 500;
    font-size: 1rem;
  }

  .item-img {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    border-radius: 6px;
  }

  .item-container {
    height: 100px;
  }
}
</style>
