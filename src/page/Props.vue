<script setup>
import HijoUno from '../components/HijoUno.vue'
import HijoDos from '../components/HijoDos.vue'
</script>

<template>
    <div class="container text-center mt-5">
        <h1 class="mb-4">Soy el componente Padre</h1>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <HijoUno class="card p-3 shadow-sm" edad="10" />
            </div>
            <div class="col-md-6 mt-3 mt-md-0">
                <HijoDos class="card p-3 shadow-sm" edad="5" />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>