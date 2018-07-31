<template>
  <div>
    <div v-if="!showInfo">
      <br>
      <router-link :to="{ name: 'login' }" class="btn btn-primary">Login <span class="sr-only">(current)</span></router-link>
      <br>
      <router-link :to="{ name: 'register' }" class="btn btn-primary">Register</router-link>
      <br>
      
    </div>
    <div v-if="showInfo">
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { users } from '../services/user.js';

export default {
  name: 'side-app',
  data() {
    return {
      showInfo: false
    };
  },
  methods: {
    logout () {
      users.logout();
      this.$router.push({name: 'login'});
      this.showInfo = false;
    }
  },
  beforeRouteEnter(to, from, next) {
    if(users.isLoggedIn())
      next(vm => (vm.showInfo = true));
    else next(vm => (vm.showInfo = false));
  }
};
</script>