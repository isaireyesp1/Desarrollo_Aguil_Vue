<script setup>
import { ref } from 'vue'
defineProps({
    edad: String,
})
</script>
<template>
    <h1>Soy el Hijo 2</h1>
    <p>{{ edad }}</p>
    
</template>

<style scoped>


</style>