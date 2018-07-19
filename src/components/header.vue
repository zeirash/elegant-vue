<template>
  <div>
    <header v-bind:class="{scrolled: isScroll}">
        <nav>
            <div class="menu-item"><span>About</span></div>
            <div class="menu-item"><span>Contact</span></div>
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

    nav {
        text-align: right;
    }

    .menu-item {
        display: inline-block;
        padding: 1.5em;
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
</style>
