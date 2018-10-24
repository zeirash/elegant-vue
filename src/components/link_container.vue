<template>
  <div>
    <div class="link-group">
        <div class="icon">
          <img :src="loadImg('whatsapp_logo.png')" alt="" />
        </div>
        <div class="text">+62 895 2368 6433</div>
    </div>
    <div class="link-group">
        <div class="icon">
          <img :src="loadImg('shopee_logo.png')" alt="" />
        </div>
        <div class="text">UD. Elegant Jaya<br/>
        <span class="desc-text"><a href="https://shopee.co.id/timothy.wijaya_97" target="_blank">https://shopee.co.id/timothy.wijaya_97</a></span>
        </div>
    </div>
    <div class="link-group">
        <div class="icon">
          <img :src="loadImg('tokopedia_logo.png')" alt="" />
        </div>
        <div class="text">UD. Elegant Jaya<br/>
        <span class="desc-text"><a href="https://tokopedia.link/XZFeNucdnP" target="_blank">https://tokopedia.link/XZFeNucdnP</a></span>
        </div>
    </div>
    <div class="link-group">
        <div class="icon">
          <img :src="loadImg('instagram_logo.png')" alt="" />
        </div>
        <div class="text"><span><a href="https://www.instagram.com/elegant_jaya" target="_blank">@elegant_jaya</a></span></div>
    </div>
    <div class="link-group">
        <div class="icon loc">
          <img :src="loadImg('map_logo.png')" alt="" />
        </div>
        <div class="text">Dupak Grosir Surabaya<br/>
        <span class="desc-text">Blok EG5.10 Lt 1</span></div>
    </div>
    <div class="link-group">
        <div class="icon loc">
          <img :src="loadImg('map_logo.png')" alt="" />
        </div>
        <div class="text">UD Elegant Jaya<br/>
        <span class="desc-text">Ruko Royal Palem, Bl. Bl No.7, Duri Kepa<br/>Jakarta Barat</span></div>
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
    loadImg: function (path) {
      return './dist/' + path
    }  
  }
}
</script>

<style scoped>
.link-group {
  display: flex;
  align-items: center;
  margin: .6em .5em;
}

.icon img {
  width: 30px;
  height: auto;
}

.icon {
  margin-right: .5em;
}

.desc-text {
  font-size: .8rem;
}
</style>