<template>
  <h1>Prodict Detail  of ID: {{ id }}</h1>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const { id } = route.params;
    console.log(route.params);
    
</script>

<style>

</style>