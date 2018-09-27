<template>
  <div>
    <header v-bind:class="{scrolled: isScroll}">
        <nav>
            <div class="menu-item logo"><a href="#top" v-smooth-scroll="{ duration: 800, offset: 0, container: '' }">
              <div class="logo-content">
                <div><img :src="loadImg('icon.png')" width="30px" /></div>
                <span class="logo-title">Elegant Jaya</span>
              </div>
            </a></div>
            <div class="menu-right">
              <div class="menu-item"><span><a href="#about-container" v-smooth-scroll="{ duration: 800, offset: -60, container: '' }">Tentang</a></span></div>
              <div class="menu-item"><span><a href="#contact" v-smooth-scroll="{ duration: 800, offset: -50, container: '' }">Kontak</a></span></div>
            </div>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isScroll: false
    }
  },
  methods: {
    loadImg: function (path) {
      return './dist/' + path
    },
    handleScroll () {
      if(window.scrollY > 30) this.isScroll = true
      else this.isScroll = false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    z-index: 99;
    transition: all .3s;
}

.menu-right {
  float: right;
}

.menu-item {
    display: inline-block;
    padding: 1.2em 1em 1em;
    font-weight: 500;
    font-size: 16px;
    color: #F5F5F5;
}

.menu-item span:hover {
    cursor: pointer;
}

.scrolled {
    background-color: #1E9E25;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.logo {
  margin-top: -8px;
}

.logo-content {
  display: flex;
  align-items: center;
}

.logo-title {
  padding-left: 10px;
}

@media screen and (max-width: 543px) {
  .logo-title {
    display: none;
  }
}
</style>
