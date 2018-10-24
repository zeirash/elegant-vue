<template>
  <div id="about-container">
    <div class="about-title">Tentang Kami</div>
    <div class="about-content">
        <div class="inline">
            <div class="about-img">
                <div class="cover-img"></div>
            </div>
        </div>
        <div class="inline description">
            <div class="about-desc">
                Sebuah toko yang penuh cerita, berawal dari pencarian supplier ke berbagai daerah dan muulai merintis fokus pada produk garment 
                untuk kebutuhan rumah tangga seperti serbet, lap handuk, dan handuk. Seiring berjalannya waktu, UD Elegant Jaya mulai mengembangkan
                sayapnya dengan menjual produk-produk perlengkapan rumah tangga hingga 300+ item dari berbagai supplier pilihan.
                <br/><br/>
                Saat ini UD Elegant Jaya sudah memiliki toko fisik di 2 tempat. Surabaya, . Jakarta, 
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, corporis nemo! Laudantium voluptatum doloribus 
                rem amet repellendus hic voluptates dicta, quia ratione adipisci? Velit assumenda dolore voluptates itaque. Blanditiis, officia.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.cia.
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style scoped>
#about-container {
    color: #606060;
}

.about-title {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 500;
    padding: 1em 0;
}

.about-content {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 18px 50px;
}

.about-img {
    background: url("../assets/houseware.jpg") no-repeat;
    background-size: cover;
    position: relative;
    width: 350px;
    height: 400px;
}

.cover-img {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: .4;
    background-color: #000;
}

.about-desc {
    padding-left: 60px;
    font-size: 1.1rem;
    line-height: 1.4rem;
}

.description {
    width: 60%;
}

@media screen and (max-width: 928px) {
    .description {
        width: 100%;
    }

    .about-desc {
        padding-left: 10px;
        padding-top: 20px;
    }
}

@media screen and (max-width: 400px) {
    .about-img {
        width: 250px;
        height: 300px;
    }
}

</style>
