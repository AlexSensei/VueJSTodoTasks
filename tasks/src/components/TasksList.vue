<template>
    <div>
        <router-link :to="{ name: 'addTask' }" class="btn btn-primary">Add Task</router-link>
        <br>
        High Priority Tasks
        <div v-for="task in priorityTasksList" :key="task.id">
            <div class="well" id="taskBody">
                <h5>{{ task.name }}</h5>
                <p>{{ task.content }}</p>
                <router-link :to="{ name: 'edit', params: { task: task } }" class="btn btn-default">Edit</router-link>
                <button class="btn btn-danger" v-on:click="deleteTask(task)" >Delete</button>
            </div>
        </div>
         <br>
        My Tasks
        <div v-for="task in tasksList" :key="task.id">
            <div class="well" id="taskBody">
                <h5>{{ task.name }}</h5>
                <p>{{ task.content }}</p>
                <router-link :to="{ name: 'edit', params: { task: task } }" class="btn btn-default">Edit</router-link>
                <button class="btn btn-danger" v-on:click="deleteTask(task)" >Delete</button>
            </div>
        </div>
        Completed Tasks
        <div v-for="task in completedTasksList" :key="task.id">
            <div class="well" id="taskBody">
                <h5>{{ task.name }}</h5>
                <p>{{ task.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { tasks } from '../services/task.js';

export default {
  name: 'tasksList',
  data() {
    return {
      tasksList: [],
      priorityTasksList: [],
      completedTasksList: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem('token') != null) {
      tasks.getAll().then(response => {
        next(vm => {
          vm.tasksList = response.data;
          vm.completedTasksList = vm.tasksList.filter(el => el.is_done == true );
          vm.tasksList = vm.tasksList.filter(el => el.is_done != true );
          vm.priorityTasksList = vm.tasksList.filter(el => el.priority == true );
          vm.tasksList = vm.tasksList.filter(el => el.priority != true );
        });
      });
    } else {
      next(vm => {
        vm.$router.push('login');
      });
    }
    
  },
  methods: {
    deleteTask(task) {
      tasks.delete(task.id);
      this.tasksList = this.tasksList.filter(el => el.id !== task.id);
    }
  }
};
</script>