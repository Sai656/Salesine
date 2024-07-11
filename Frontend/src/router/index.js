// frontend/src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import TaskList from '../components/TaskList.vue';
import TaskForm from '../components/TaskForm.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/tasks', component: TaskList },
  { path: '/add-task', component: TaskForm }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

