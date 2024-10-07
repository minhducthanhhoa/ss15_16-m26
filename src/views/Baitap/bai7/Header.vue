<template>
    <div>
        <nav>
            <router-link active-class="active-link" to="/">Home</router-link>
            <router-link active-class="active-link" to="/product">Product</router-link>
            <router-link active-class="active-link" to="/detail"></router-link>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .active-link{
        color: white;
        background-color: blue; 
    }
</style>