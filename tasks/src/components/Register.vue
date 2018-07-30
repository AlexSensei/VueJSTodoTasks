<template>
  <div class="hello">
      Register user
      <br>
      Name
      <br>
      <input type="text" v-model="name">
      <br>
      Email
      <br>
      <input type="text" v-model="email">
      <br>
      Password
      <br>
      <input type="password" v-model="password">
      <br>
      Confirm password
      <br>
      <input type="password" v-model="confirmPassword">
      <br>
      <p> {{ validPassword }} </p>
      <br>
      <button v-on:click="registerUser">Submit</button>
  </div>
</template>

<script>
import { users } from '../services/user.js';
export default {
  name: 'Register',
  props: {
    msg: String
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      validPassword: ''
    };
  },
  watch: {
    confirmPassword(oldValue) {
      if (oldValue != this.password)
        this.validPassword = 'Passwords dont match!';
      else this.validPassword = '';
    }
  },
  methods: {
    registerUser: function() {
      users.register(this.name, this.email, this.password);
      if (localStorage.getItem('token') != null) {
        this.$router.push('/tasks');
      }
    }
  }
};
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
