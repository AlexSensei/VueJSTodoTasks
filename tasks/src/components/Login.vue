<template>
  <div class="hello">
      Login
      <br>
      Email
      <br>
      <input type="text" v-model="email">
      <br>
      Password
      <br>
      <input type="password" v-model="password">
      <br>
      <button v-on:click="login">Login</button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data () {
      return {
          email: '',
          password: '',
      }
  },
  methods: {
      login: function(){
          axios.post('http://myapp.test/api/auth/login', {
              email: this.email,
              password: this.password,
          },
          {
              'Content-Type':'application/json'
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
