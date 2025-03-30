<script setup>
import { ref } from 'vue'

defineProps({
    nombrecito: String,
})
</script> 

<template>
    <h1>{{ nombrecito }}</h1>
</template>

<style scoped>
</style>