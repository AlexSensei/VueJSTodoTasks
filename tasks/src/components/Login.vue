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
import { users } from '../services/user.js';
import { EventBus } from '../event-bus.js';
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function() {
      users.login(this.email, this.password);
      if (localStorage.getItem('token') != null) {
        EventBus.$emit('i-got-clicked', true);
        this.$router.push('/tasks');
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
