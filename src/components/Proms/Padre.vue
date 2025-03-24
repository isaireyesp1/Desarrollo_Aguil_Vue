<script setup>

import { ref } from 'vue';

import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';
defineProps({
  edad: String,
});
</script>

<template>
  <div>
   
    <h1>Soy el Padre</h1>
    <Hijo1 class="mt-4" edad="12"/>
    <Hijo2 class="mt-4" edad="5"/>
  </div>
</template>

<style scoped>

h1 {
  color: #333;
  font-size: 24px;
  text-align: center;
}
</style>
