// frontend/src/store/index.js

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    user: null
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        commit('SET_TASKS', response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        // Optionally, you can commit an empty tasks array or handle the error state
        // commit('SET_TASKS', []);
      }
    },
    // Other actions as needed
  }
});

