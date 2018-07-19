<template>
  <div id="search-container">
    <div class="input-container">
      <input type="text" placeholder="Search item" class="input" v-model="search"/>
      <img src="../assets/search.png" class="search-icon" />
    </div>
    <div class="list-item">
      <component-item  v-for="(item, index) in searchItem"
        v-bind:key="index"
        v-bind:title="item.name"
      ></component-item>
    </div>
  </div>
</template>

<script>
import Item from './item.vue'

export default {
  components: {
    'component-item': Item
  },
  data () {
    return {
      items: [
        {name:"item 1", price: "price 1"},
        {name:"item 2 sdfsdfsd", price: "price 2"},
        {name:"item 3", price: "price 2"},
        {name:"item 4 sdfsdfsdf", price: "price 2"},
        {name:"item 1", price: "price 1"},
        {name:"item 2 sdfsdfsd", price: "price 2"},
        {name:"item 3", price: "price 2"},
        {name:"item 4 sdfsdfsdf", price: "price 2"},
        {name:"item 3", price: "price 2"},
        {name:"item 4 sdfsdfsdf", price: "price 2"},
        {name:"item 1", price: "price 1"},
        {name:"item 2 sdfsdfsd", price: "price 2"},
        {name:"item 3", price: "price 2"},
      ],
      search: ""
    }
  },
  computed: {
    searchItem: function() {
      var self=this;
      return this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
        });
    }
  }
}
</script>

<style scoped>
.input {
  width: 550px;
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
  width: 600px;
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
  height: 550px;
  overflow-y: scroll;
}
</style>
