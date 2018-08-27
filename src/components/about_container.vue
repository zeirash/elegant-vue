<template>
  <div id="about-container">
    <div class="about-title">About Us</div>
    <div class="about-content">
        <div class="inline">
            <div class="about-img"></div>
        </div>
        <div class="inline description">
            <div class="about-desc">
                UD Elegant Jaya merupakan
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, corporis nemo! Laudantium voluptatum doloribus 
                rem amet repellendus hic voluptates dicta, quia ratione adipisci? Velit assumenda dolore voluptates itaque. Blanditiis, officia.
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
    width: 300px;
    background-color: #ccc;
    height: 400px;
}

.about-desc {
    padding-left: 60px;
    font-size: 1.1rem;
}

.description {
    width: 60%;
}

@media screen and (max-width: 803px) {
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
