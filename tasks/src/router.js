import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';
import Register from './components/Register.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login', name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});
