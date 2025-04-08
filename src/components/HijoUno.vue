<script setup>
defineProps({
    edad: String,
})
</script>

<template>
    <div class="text-center">
        <h6 class="text-success">Soy el componente Hijo Uno</h6>
        <p class="fw-bold">Edad: {{ edad }}</p>
    </div>
</template>

<style scoped>
</style>