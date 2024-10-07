<template>
    <div>
      <nav>
        <router-link active-class="active-link" to="/">Home</router-link>
        <router-link active-class="active-link" to="{name: 'about'}">About</router-link>
        <router-link active-class="active-link" to="/contact">Contact</router-link>
      </nav>
      <router-view></router-view>
      <nav>
        <button @click="goToHome">Home</button>
        <button @click="goToAbout">About</button>
        <button @click="goToContact">Contact</button>
      </nav>
      <Navbar></Navbar>
      <Header></Header>
      <Admin></Admin>
    </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const goToHome = ()=>{
    // điều hướng qua trang home
    route.push("/");
  }
  const goToAbout = ()=>{
    route.push("/about");
  }
  const goToContact = ()=>{
    route.push("/contact");
  }
  import Navbar from './views/Baitap/bai6/Navbar.vue';
  import Header from './views/Baitap/bai7/Header.vue';
  import Admin from './views/Baitap/bai8/Admin.vue';

</script>

<style scoped>
  nav {
    display: flex;
    gap: 20px;
  }
  .active-link{
    color: white;
    background-color: blue;
  }
</style>