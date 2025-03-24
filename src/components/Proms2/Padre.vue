<template>
    <div class="container">
      <h1>Lista de Alumnos por Carrera</h1>
  
      <!-- Pasamos los arreglos de alumnos de cada carrera a los hijos -->
      <Hijo1 :alumnos="alumnosISC" carrera="Ingeniería en Sistemas Computacionales" />
      <Hijo2 :alumnos="alumnosIC" carrera="Ingeniería en Computación" />
      <Hijo3 :alumnos="alumnosIM" carrera="Ingeniería Mecánica" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Hijo1 from './Hijo1.vue';
  import Hijo2 from './Hijo2.vue';
  import Hijo3 from './Hijo3.vue';
  
  // Arreglos de alumnos para cada carrera
  const alumnosISC = ref([
    { nombre: 'Juan Pérez', control: '21620053' },
    { nombre: 'María Gómez', control: '21620067' },
    { nombre: 'Carlos Rodríguez', control: '20620166' }
  ]);
  
  const alumnosIC = ref([
    { nombre: 'Ana López', control: '21620543' },
    { nombre: 'Luis Fernández', control: '21620089' },
  ]);
  
  const alumnosIM = ref([
    { nombre: 'Miguel Álvarez', control: '21621099' },
    { nombre: 'Patricia Díaz', control: '20621111' },
  ]);
  </script>
  
  <style scoped>
  .container {
    width: 90%;
    margin: 30px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  h2 {
    color: #444;
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  table {
    width: 100%;
    margin-bottom: 30px;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 12px 18px;
    text-align: left;
    border: 1px solid #ddd;
    font-size: 16px;
  }
  
  th {
    background-color: #007BFF;
    color: white;
    font-weight: 600;
  }
  
  td {
    background-color: #f4f4f4;
    transition: background-color 0.3s ease;
  }
  
  td:hover {
    background-color: #e1f5fe;
  }
  
  tr:nth-child(even) td {
    background-color: #fafafa;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 15px;
    }
  
    th, td {
      font-size: 14px;
      padding: 8px;
    }
  }
  </style>
  