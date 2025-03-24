<template>
    <div class="card">
      <h2>{{ carrera }}</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Número de Control</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alumno in alumnos" :key="alumno.control">
            <td>{{ alumno.nombre }}</td>
            <td>{{ alumno.control }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    alumnos: Array,
    carrera: String
  });
  </script>
  
  <style scoped>
  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    padding: 20px;
  }
  
  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }
  </style>
  