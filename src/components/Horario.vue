<template>
    <div class="horario">
      <h1>Horario de la Semana</h1>
      <table class="tabla-horario">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
            <th>Domingo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hora, index) in horas" :key="index">
            <td>{{ hora }}</td>
            <td v-for="dia in dias" :key="dia">
              <span v-if="semana[dia][index]">{{ semana[dia][index] }}</span>
              <span v-else>No disponible</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Horario',
    data() {
      return {
        horas: ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'],
        dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        semana: {
          Lunes: ['IA', 'Aguil', 'IA', 'Aguil'],
          Martes: ['IA', 'Aguil', 'IA', 'Aguil'],
          Miércoles: ['IA', 'Aguil', 'IA', 'Aguil'],
          Jueves: ['IA', 'Aguil', 'IA', 'Aguil'],
          Viernes: ['IA', 'Aguil', 'IA', 'Aguil'],
          Sábado: ['IA', 'Aguil', 'IA', 'Aguil'],
          Domingo: ['IA', 'Aguil', 'IA', 'Aguil'],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .horario {
    margin: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .tabla-horario {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .tabla-horario th,
  .tabla-horario td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
  }
  
  .tabla-horario th {
    background-color: #4CAF50;
    color: white;
  }
  
  .tabla-horario td {
    background-color: #f9f9f9;
  }
  
  .tabla-horario tr:nth-child(even) td {
    background-color: #f2f2f2;
  }
  
  .tabla-horario td span {
    display: block;
    padding: 8px;
    background-color: #e0e0e0;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  .tabla-horario td span:nth-child(odd) {
    background-color: #c9f7dc;
  }
  </style>
  