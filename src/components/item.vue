<template>
  <div class="item-container" itemscope itemtype="http://schema.org/Product">
    <div class="inline">
      <div class="item-img">
        <div id="slider">
          <slider animation="normal" :auto="false" width="120px" height="120px" class="slider-container">
            <slider-item v-for="(img, index) in imgSrc" :key="index">
              <img v-bind:src="img" itemprop="image" width="120px" height="120px" :alt="title" class="slider-img" v-on:click="zoomImg(img, title)" />
            </slider-item>
          </slider>
        </div>
      </div>
    </div>
    <div class="inline content">
        <div class="item-title" itemprop="name">{{title}}</div>
        <div class="item-desc" itemprop="description">{{desc}}</div>
        <div class="item-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
          <div v-for="(data, index) in price_setup" :key="index">
            <span itemprop="priceCurrency" content="IDR">Rp.</span> <span itemprop="price">{{numberWithCommas(data.price)}}</span>/{{data.metric}}
          </div>
        </div>
    </div>
    <!-- The Modal -->
      <div v-if="clicked" id="myModal" class="modal-dialog">
        <span class="close" v-on:click="closeImg()">&times;</span>
        <img class="modal-img" :src="myImg" itemprop="image">
        <div id="caption" itemprop="name">{{caption}}</div>
      </div>
    </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  props: ['title', 'price', 'imgSrc', 'desc', 'price_setup'],
  components: {
    'slider': Slider,
    'slider-item': SliderItem
  },
  data () {
    return {
      clicked: false,
      caption: '',
      myImg: ''
    }
  },
  methods: {
    zoomImg: function(img, caption) {
      this.myImg = img
      this.caption = caption
      this.clicked = true
    },
    customId: function(key, index) {
      return 'img' + key + 'index' + index
    },
    closeImg: function() {
      this.clicked = false
    },
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
  margin-top: 4px;
}

.item-price {
  position: absolute;
  color: #8E8E8E;
  bottom: 5px;
  font-size: .9rem;
}

.slider-img, .slider-container {
  border-radius: 6px;
  cursor: pointer;
}

.slider-img:hover {
  opacity: .8;
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
    font-size: .8rem;
  }

  .item-img, .slider-img, .slider-container {
    width: 100px !important;
    height: 100px !important;
    border-radius: 6px;
  }

  .item-container {
    height: 100px;
  }

  .item-price, .item-desc {
    font-size: .7rem;
  }
}

/* Modal Content (Image) */
.modal-img {
  margin: 80px auto 0;
  display: block;
  width: 60%;
  max-width: 500px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-img, #caption { 
    animation-name: zoom;
    animation-duration: 0.6s;
}

@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
    .modal-img {
      width: 100%;
      margin-top: 100px;
    }
}
</style>
