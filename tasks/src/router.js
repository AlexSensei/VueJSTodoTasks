import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';
import Register from './components/Register.vue';
import AddTask from './components/AddTask.vue';
import TasksList from './components/TasksList.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/tasks', name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/taskCreate', component: AddTask, name: 'addTask' },
  { path: '/tasks', component: TasksList, name: 'tasks' },
];

export const router = new VueRouter({
  mode: 'history',
  routes
});
