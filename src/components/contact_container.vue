<template>
  <form @submit.prevent="sub">
      <div class="input-group">
          <input type="text" v-model="name" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Nama</label>
      </div>
      <div class="input-group">
          <input type="text" v-model="email" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
      </div>
      <div class="input-group">
          <textarea v-model="message" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="text-area">Pesan</label>
      </div>
      <div class="input-group">
        <div class="button-container">
            <button type="submit" class="button">Submit</button>
            <button type="reset" class="button">Reset</button>
        </div>
      </div>

      <div v-if="show" id="modal-dialog">
          <div id="modal-content">
            <div id="modal-text">Success</div>
            <div v-on:click="closeModal" id="ok-button">OK</div>
          </div>
      </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
        name: '',
        email: '',
        message: '',
        show: false
    }
  },
  methods: {
      sub: function(e) {
            var templateParams = {
                from_name:  this.name,
                message: this.message,
                from_email: this.email
            }
          emailjs.send('sendgrid', 'customtemplate', templateParams, 'user_2pcBp4posKKPW5iqt7nv2')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
        this.show = true
      },
      closeModal: function(e) {
          this.show = false
      }
  }
}
</script>

<style scoped>
.button {
    border: 2px solid #fff;
    background: transparent;
    padding: .6em;
    width: 100px;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease all;
}

.button:hover {
    background-color: #fff;
    color: #1E9E25;
}

.input-group {
    position: relative;
    margin: 1.4em;
}

input, textarea {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #fff;
    resize: none;
    background: transparent;
    color:#fff;
}

input:focus, textarea:focus { 
    outline: none; 
}

label {
    color: #fff; 
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all; 
    -moz-transition: 0.2s ease all; 
    -webkit-transition: 0.2s ease all;
}

.text-area {
    top: 34px;
}

input:focus ~ label, input:valid ~ label, textarea:focus ~ label, textarea:valid ~ label {
  top: -14px;
  font-size: 14px;
  color:#fff;
}

/* BOTTOM BARS ================================= */
.bar { 
    position: absolute; 
    display: block; 
    width: 320px; 
}
.bar:before, .bar:after {
  content: '';
  height: 2px; 
  width: 0;
  bottom: 0; 
  position: absolute;
  background:#F5F5F5; 
  transition: 0.2s ease all; 
  -moz-transition: 0.2s ease all; 
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after, textarea:focus ~ .bar:before, textarea:focus ~ .bar:after {
  width: 50%;
}

/* modal dialog */
#modal-dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: rgba(0,0,0,0.8); 
}

#modal-content {
    position: relative;
    height: 150px;
    width: 300px;
    margin: 300px auto;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 500;
    font-size: 1.4rem;
}

#ok-button {
    font-size: 1em;
    color: #fff;
    padding: .6em;
    font-size: 1rem;
    background-color: #ccc;
    margin-top: 20px;
    margin-bottom:-10px;
    cursor: pointer;
}
</style>
