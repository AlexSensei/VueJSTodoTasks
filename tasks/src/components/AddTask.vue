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
        <div v-if="editing">
          <br>
          Completed
          <br>
          <input type="checkbox" v-model="task.is_done">
          <br>
          <button @click="editTask">Update Task</button>
        </div>
        <br>
        <button v-if="!editing" @click="addTask">Create Task</button>
    </div>
</template>

<script>
import { tasks } from '../services/task.js';
export default {
  name: 'AddTask',
  data() {
    return {
      task: this.default(),
      editing: false
    };
  },
  created() {
    this.$route.params.id &&
      tasks.get(this.$route.params.id).then(response => {
        this.editing = true;
        this.task = response.data;
      });
  },
  methods: {
    addTask() {
      tasks 
        .add(this.task)
        .then(response => this.$router.push({name: 'tasks'}));
    },
    editTask() {
      tasks.update(this.task).then(response => this.$router.push('/tasks'));
    },
    default() {
      return {
        name: '',
        content: '',
        priorty: false,
        is_done: false,
      };
    }
  }
};
</script>