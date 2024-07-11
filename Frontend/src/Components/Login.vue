<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="validateLogin">
      <div class="form-group">
        <input type="text" v-model="username" placeholder="Username" />
        <div v-if="errors.username" class="error">{{ errors.username }}</div>
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" />
        <div v-if="errors.password" class="error">{{ errors.password }}</div>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { validateUsername, validatePassword } from '../services/SignupValidations';

export default {
  data() {
    return {
      username: '',
      password: '',
      errors: {}
    };
  },
  methods: {
    ...mapActions(['login']),
    validateLogin() {
      this.errors = {};
      this.errors.username = validateUsername(this.username);
      this.errors.password = validatePassword(this.password);
      if (!this.errors.username && !this.errors.password) {
        this.login({ username: this.username, password: this.password });
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
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

.error {
  color: red;
  font-size: 0.875em;
}
</style>
