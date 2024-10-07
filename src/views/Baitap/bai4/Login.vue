<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card p-4" style="width: 400px;">
        <h2 class="text-center">Login account</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="email" class="form-label">Your email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login an account</button>
        </form>
        <p class="mt-3 text-center">
          Already have an account? <a href="#">Register here</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>