<template>
  <div>
    <br>
    <router-link :to="{ name: 'login' }" class="btn btn-primary">Login <span class="sr-only">(current)</span></router-link>
    <br>
    <router-link :to="{ name: 'register' }" class="btn btn-primary">Register</router-link>
    <br>
    <router-link :to="{ name: 'addTask' }" class="btn btn-primary">Add Task</router-link>
  </div>
</template>

<script>
export default{
  name: 'side-app',
}

</script>