<template>
  <div>
    <footer id="contact">
      <div class="flex-container">
        <div id="form-container">
          <div class="header-group">Kontak Kami</div>
          <contact-container></contact-container>
        </div>
        <div id="link-container">
          <link-container
            waIcon="./dist/whatsapp_logo.png"
          ></link-container>
        </div>
        <div id="location-container">
          <div class="header-group location-title">Lokasi Kami</div>
          <div class="flex-container">
            <location-container
              imgSrc="./dist/map_palem.png"
            ></location-container>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ContactContainer from './contact_container.vue'
import LocationContainer from './location_container.vue'
import LinkContainer from './link_container.vue'

export default {
  components: {
      'contact-container': ContactContainer,
      'location-container': LocationContainer,
      'link-container': LinkContainer
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
footer {
    /*height: 500px;*/
    background-color: #1E9E25;
    padding: 2em;
    color: #fff;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#link-container {
    margin: 1em;
    font-size: 1.2rem;
}

#form-container, #location-container {
  margin: 1em;
}

.header-group {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
}
</style>
