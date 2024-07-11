// frontend/src/components/TaskList.vue

<template>
  <div class="task-container">
    <h2>Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task._id">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['tasks'])
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(['fetchTasks'])
  }
};
</script>

<style scoped>
.task-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

li:last-child {
  border-bottom: none;
}
</style>
