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
      <p v-if="validPassword"> Passwords dont match! </p>
      <br>
      <button @click="registerUser">Submit</button>
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
        this.validPassword = true;
      else this.validPassword = false;
    }
  },
  methods: {
    registerUser () {
      users.register(this.name, this.email, this.password);
      if (users.isLoggedIn()) {
        this.$router.push({name: 'tasks'});
      }
    }
  }
};
</script>


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
