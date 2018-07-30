<template>
    <div>
        Name
        <br>
        <input type="text" v-model="name">
        <br>
        Content
        <br>
        <input type="text" v-model="content">
        <br>
        <button v-on:click="addTask">Create Task</button>
    </div>
</template>

<script>

import { tasks } from '../services/task.js';
export default {
  name: 'AddTask',
  data() {
      return {
          name:'',
          content:'',
      }
  },
  methods: {
      addTask: function() {
       tasks.addTask({
              name: this.name,
              content: this.content,
          });
      }
  }
}
</script>