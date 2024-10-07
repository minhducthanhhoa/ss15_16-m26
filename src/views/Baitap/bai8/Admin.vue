<template>
    <div>
        <nav>
            <router-link active-class="active-link" to="/product">Product</router-link>
            <router-link active-class="active-link" to="/dashboard">Dashboard</router-link>
            <router-link active-class="active-link" to="/account">Account</router-link>
        </nav>
    </div>
</template>

<script>
</script>

<style scoped>
    .active-link{
        background-color: blue;
        color: #fff;
        font-weight: 700;
    }
</style>