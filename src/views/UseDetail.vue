<template>
  <h1>Use Detail page: {{ id }}</h1>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const {id} = route.params;
</script>

<style>

</style>