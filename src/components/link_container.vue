<template>
  <div>
    <div class="link-group">
        <div class="icon">
          <img src="../assets/whatsapp-logo.png" />
        </div>
        <div class="text">+62 895 2368 6433</div>
    </div>
    <div class="link-group">
        <div class="icon">
          <img src="../assets/call-answer.png" />
        </div>
        <div class="text">+62 895 2368 6433</div>
    </div>
    <div class="link-group">
        <div class="icon">
          <img src="../assets/tokopedia-logo.png" />
        </div>
        <div class="text">UD. Elegant Jaya<br/>
        <span class="desc-text"><a href="https://tokopedia.link/XZFeNucdnP" target="_blank">https://tokopedia.link/XZFeNucdnP</a></span></div>
    </div>
    <div class="link-group">
        <div class="icon loc">
          <img src="../assets/map-logo.png" />
        </div>
        <div class="text">Dupak Grosir Surabaya<br/>
        <span class="desc-text">jl sdlfkjsdf lt 9</span></div>
    </div>
    <div class="link-group">
        <div class="icon loc">
          <img src="../assets/map-logo.png" />
        </div>
        <div class="text">Dupak Grosir Surabaya<br/>
        <span class="desc-text">jl sdlfkjsdf lt 9</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
      
  }
}
</script>

<style scoped>
.link-group {
  display: flex;
  align-items: center;
  margin: 1em .5em;
}

.icon img {
  width: 30px;
  height: auto;
}

.icon {
  margin-right: .5em;
}

.desc-text {
  font-size: .9rem;
}
</style>