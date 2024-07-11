<template>
  <div class="task-form-container">
    <h2>Add Task</h2>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <input type="text" v-model="taskName" placeholder="Task Name" />
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      taskName: ''
    };
  },
  methods: {
    ...mapActions(['addTask']),
    addTask() {
      if (this.taskName) {
        this.addTask({ name: this.taskName });
        this.taskName = '';
      }
    }
  }
};
</script>

<style scoped>
.task-form-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
