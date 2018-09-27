<template>
  <div id="search-container">
    <div class="input-container">
      <input type="text" placeholder="Search item" class="input" v-model="search" v-on:focus="scrollToSearch()" />
      <img src="../assets/search.png" class="search-icon" alt="" />
    </div>
    <div class="list-item">
      <component-item  v-for="(item, index) in searchItem"
        v-bind:key="index"
        v-bind:title="item.name"
        v-bind:price="item.price"
        v-bind:imgSrc="item.img"
        v-bind:desc="item.desc"
        v-bind:metric="item.metric"
      ></component-item>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import db from '../db.js'

import Item from './item.vue'
import Data from '../data.json'

export default {
  components: {
    'component-item': Item
  },
  data () {
    return {
      items: [],
      search: ""
    }
  },
  computed: {
    searchItem: function() {
      console.log("search")
      var self=this;
      return this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
        });
    }
  },
  methods: {
    scrollToSearch: function() {
      window.scroll({
        top: 400, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  },
  beforeCreate() {
    console.log('mounted')
    axios.get('http://api.elegant-houseware.tk/item')
    .then((res) => {
      this.items = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.input {
  width: 95%;
  border: none;
  color: #8E8E8E;
}

.input:focus {
  outline-width: 0;
}

.input-container {
  border: 1.5px solid #8E8E8E;
  border-radius: 6px;
  padding: .3em;
  width: 40%;
  margin: 1em auto;
  position: relative;
}

.search-icon {
  position: absolute;
  right: 5px;
  width: 20px;
  height: auto;
}

.search-icon:hover {
  cursor: pointer;
}

.list-item {
  height: 450px;
  overflow-y: scroll;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
}

@media screen and (max-width: 1160px) {
  .list-item {
    justify-content: center;
  }

  .input-container {
    width: 50%;
  }
}

@media screen and (max-width: 920px) {
  .input-container {
    width: 80%;
  }
}
</style>
