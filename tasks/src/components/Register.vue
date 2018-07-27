<template>
  <div class="hello">
      Register user
      <br>
      Name
      <input type="text" v-model="name">
      Email
      <input type="text" v-model="email">
      Password
      <input type="password" v-model="password">
      Confirm password
      <input type="password" v-model="confirmPassword">
      <p> {{ validPassword }} </p>
      <button v-on:click="register">Submit</button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
      return {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          validPassword: '',
      }
  },
  watch: {
      confirmPassword(oldValue) {
        if(oldValue != this.password)
            this.validPassword='Passwords dont match!';
        else
            this.validPassword='';
      }
  },
  methods: {
      register: function(){
          axios.post('http://myapp.test/api/auth/register', {
              name: this.name,
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
