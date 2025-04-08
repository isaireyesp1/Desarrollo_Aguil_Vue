<template>
    <div class="container">
      <h3 class="mt-4 text-center fw-bold">Horario de Clases 8US</h3>
      <div class="table-responsive">
        <table class="table table-striped table-hover table-bordered">
          <thead class="table-dark text-center">
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Lunes</th>
              <th scope="col">Martes</th>
              <th scope="col">Miércoles</th>
              <th scope="col">Jueves</th>
              <th scope="col">Viernes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in horario" :key="index">
              <td class="fw-bold text-center">{{ row.Hora }}</td>
              <td class="text-center">{{ row.Lunes || '-' }}</td>
              <td class="text-center">{{ row.Martes || '-' }}</td>
              <td class="text-center">{{ row.Miercoles || '-' }}</td>
              <td class="text-center">{{ row.Jueves || '-' }}</td>
              <td class="text-center">{{ row.Viernes || '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const horario = ref([
    { Hora: '7:00 AM - 8:00 AM', Lunes: 'Programación Lógica y Funcional', Martes: 'Inteligencia Artificial', Miercoles: 'Desarrollo Ágil', Jueves: 'Programación Lógica y Funcional', Viernes: '' },
    { Hora: '8:00 AM - 9:00 AM', Lunes: 'Programación Lógica y Funcional', Martes: 'Inteligencia Artificial', Miercoles: 'Desarrollo Ágil', Jueves: 'Programación Lógica y Funcional', Viernes: '' },
    { Hora: '9:00 AM - 10:00 AM', Lunes: 'Desarrollo Ágil', Martes: 'Administración de Redes', Miercoles: '', Jueves: 'Administración de Redes', Viernes: '' },
    { Hora: '10:00 AM - 11:00 AM', Lunes: 'Desarrollo Ágil', Martes: 'Administración de Redes', Miercoles: '', Jueves: 'Administración de Redes', Viernes: 'Desarrollo Ágil' },
    { Hora: '11:00 AM - 12:00 PM', Lunes: '', Martes: 'Desarrollo en la Nube', Miercoles: 'Desarrollo en la Nube', Jueves: 'Inteligencia Artificial', Viernes: 'Desarrollo en la Nube' },
    { Hora: '12:00 PM - 1:00 PM', Lunes: '', Martes: 'Desarrollo en la Nube', Miercoles: 'Desarrollo en la Nube', Jueves: 'Inteligencia Artificial', Viernes: '' },
    { Hora: '1:00 PM - 2:00 PM', Lunes: '', Martes: '', Miercoles: 'Desarrollo con Realidad Aumentada', Jueves: 'Desarrollo con Realidad Aumentada', Viernes: '' },
    { Hora: '2:00 PM - 3:00 PM', Lunes: '', Martes: '', Miercoles: 'Desarrollo con Realidad Aumentada', Jueves: '', Viernes: 'Taller de Investigación II' },
    { Hora: '3:00 PM - 4:00 PM', Lunes: '', Martes: 'Desarrollo con Realidad Aumentada', Miercoles: 'Taller de Investigación II', Jueves: '', Viernes: 'Taller de Investigación II' },
    { Hora: '4:00 PM - 5:00 PM', Lunes: '', Martes: 'Desarrollo con Realidad Aumentada', Miercoles: 'Taller de Investigación II', Jueves: '', Viernes: '' }
  ]);
  </script>
  
  <style scoped>
  /* Estilos adicionales para mejor presentación */
  .table th,
  .table td {
    vertical-align: middle;
  }
  
  .table th {
    font-size: 1rem;
  }
  
  .table td {
    font-size: 0.95rem;
  }
  </style>