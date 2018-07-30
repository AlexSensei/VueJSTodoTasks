<template>
  <div class="container-fluid text-center">    
    <div class="row content">
      <div class="col-sm-2 sidenav">
        <router-link :to="{ name: 'home' }" class="btn btn-primary">Home</router-link>
      </div>
      <div class="col-sm-8 text-left"> 
        <router-view></router-view>
      </div>
      <div class="col-sm-2 sidenav">
        <side-bar /> 
      </div>
    </div>
</div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import SideBar from './components/SideBar.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Register,
    Login,
    SideBar,
    AddTask
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
