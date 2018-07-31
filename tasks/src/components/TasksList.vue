<template>
    <div>
        <router-link :to="{ name: 'addTask' }" class="btn btn-primary">Add Task</router-link>
        <br>
        High Priority Tasks
        <div v-for="task in priorityTasks" :key="task.id">
            <div class="well" id="taskBody">
                <h3>{{ task.name }}</h3>
                <p>{{ task.content }}</p>
                <router-link :to="{ name: 'addTask', params: { id: task.id } }" class="btn btn-warning">Edit</router-link>
                <button class="btn btn-danger" @click="deletePriorityTask(task)" >Delete</button>
            </div>
        </div>
         <br>
        My Tasks
        <div v-for="task in pendingTasks" :key="task.id">
            <div class="well" id="taskBody">
                <h3>{{ task.name }}</h3>
                <p>{{ task.content }}</p>
                <router-link :to="{ name: 'addTask', params: { id: task.id } }" class="btn btn-warning">Edit</router-link>
                <button class="btn btn-danger" @click="deleteTask(task)" >Delete</button>
            </div>
        </div>
        <br>
        Completed Tasks
        <div v-for="task in completedTasks" :key="task.id">
            <div class="well" id="taskBody">
                <h3>{{ task.name }}</h3>
                <p>{{ task.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { tasks } from '../services/task.js';
import { users } from '../services/user.js';

export default {
  name: 'tasksList',
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    completedTasks () { return this.tasks.filter(el => el.is_done); },
    priorityTasks () { return this.tasks.filter(el => { return !el.is_done && el.priority }); },
    pendingTasks () { return this.tasks.filter(el => { return !el.is_done && !el.priority }); },
  },
  beforeRouteEnter(to, from, next) {
    if (users.isLoggedIn()) {
      tasks.getAll().then(response => {
        next(vm => {
          vm.tasks = response.data;
        });
      });
    } else {
      next(vm => {
        vm.$router.push({name:'login'});
      });
    }
    
  },
  methods: {
    deleteTask(task) {
      tasks.delete(task.id).then(
        this.tasks = this.tasks.filter(el => el.id !== task.id));
    },
    deletePriorityTask(task) {
      tasks.delete(task.id).then(
        this.priorityTasks = this.priorityTasks.filter(el => el.id !== task.id));
    }
  }
};
</script>