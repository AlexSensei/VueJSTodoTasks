<template>
    <div>
        Name
        <br>
        <input type="text" v-model="task.name">
        <br>
        Content
        <br>
        <input type="text" v-model="task.content">
        <br>
        Priority
        <br>
        <input type="checkbox" v-model="task.priority">
        <br>
        Completed
        <br>
        <input type="checkbox" v-model="task.is_done">
        <br>
        <button v-on:click="addTask">Edit Task</button>
    </div>
</template>

<script>
import { tasks } from '../services/task.js';
export default {
  name: 'EditTask',
  data() {
    return {
      task: this.default()
    };
  },
  created() {
    this.$route.params.task &&
      tasks.get(this.$route.params.task.id).then(response => {
        console.log(response.data[0]);
        this.task = response.data[0];
      });
  },
  methods: {
    addTask: function() {
      tasks.update(this.task).then(response => this.$router.push('/tasks'));
    },
    default() {
      return {
        name: '',
        content: '',
        priorty: false,
        is_done:false,
      };
    }
  }
};
</script>