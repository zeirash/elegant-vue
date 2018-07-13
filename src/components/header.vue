<template>
  <div>
    <header>
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
      
    }
  }
}
</script>

<style scoped>
    header {
        position: fixed;
        width: 100%;
        z-index: 99;
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
</style>
