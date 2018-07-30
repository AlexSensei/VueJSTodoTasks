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
      <button class="btn btn-primary" v-on:click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-app',
  data() {
    return {
      showInfo: Boolean
    };
  },
  methods: {
    logout: function() {
      localStorage.removeItem('token');
      this.$router.push('login');
      this.showInfo = false;
    }
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem('token') != null) next(vm => (vm.showInfo = true));
    else next(vm => (vm.showInfo = false));
  }
};
</script>