<template>
    <div class="container my-5">
      <h1 class="text-center mb-4">Lista de Alumnos</h1>
      

      <div class="mb-3">
        <label for="carrera" class="form-label">Selecciona una carrera:</label>
        <select id="carrera" v-model="selectedCarrera" @change="filtrarAlumnos" class="form-select">
          <option value="">Todos</option>
          <option value="ISC">Ingeniería en Sistemas Computacionales</option>
          <option value="IC">Ingeniería en Computación</option>
          <option value="IM">Ingeniería Mecánica</option>
        </select>
      </div>
  

      <div class="mb-4">
        <h3>Agregar Nuevo Alumno  (Evento Change)</h3>
        <form @submit.prevent="agregarAlumno" class="d-flex flex-column">
          <div class="mb-2">
            <label for="nombre" class="form-label">Nombre:</label>
            <input type="text" id="nombre" v-model="nuevoAlumno.nombre" class="form-control" required />
          </div>
          <div class="mb-2">
            <label for="carreraAlumno" class="form-label">Carrera:</label>
            <select id="carreraAlumno" v-model="nuevoAlumno.carrera" class="form-select" required>
              <option value="ISC">Ingeniería en Sistemas Computacionales</option>
              <option value="IC">Ingeniería en Computación</option>
              <option value="IM">Ingeniería Mecánica</option>
            </select>
          </div>
          <button type="submit" class="btn btn-success" >Agregar Alumno</button>

        </form>
      </div>
  

      <div v-if="filteredAlumnos.length > 0">
        <h2 class="mt-4">Alumnos:</h2>
        <ul class="list-group">
          <li v-for="(alumno, index) in filteredAlumnos" :key="index" class="list-group-item">
            {{ alumno.nombre }} - {{ alumno.carrera }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-center text-muted">No se encontraron alumnos.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  

  const alumnos = ref([
    { nombre: 'Juan Pérez', carrera: 'ISC' },
    { nombre: 'María Gómez', carrera: 'ISC' },
    { nombre: 'Carlos Rodríguez', carrera: 'IC' },
    { nombre: 'Ana López', carrera: 'IM' },
    { nombre: 'Luis Fernández', carrera: 'ISC' },
  ]);
  

  const selectedCarrera = ref('');
  const nuevoAlumno = ref({ nombre: '', carrera: 'ISC' });
  
  
  const filteredAlumnos = ref(alumnos.value);
  
 
  const filtrarAlumnos = () => {
    if (selectedCarrera.value) {
      filteredAlumnos.value = alumnos.value.filter(
        (alumno) => alumno.carrera === selectedCarrera.value
      );
    } else {
      filteredAlumnos.value = alumnos.value;
    }
  };
  

  const agregarAlumno = () => {

    alumnos.value.push({ ...nuevoAlumno.value });
    if(alumnos){
        alert("Alumno Agregado Correctamente");
    }
    filtrarAlumnos();
  
   
    nuevoAlumno.value = { nombre: '', carrera: 'ISC' };
  };

  const Evento= () => {

};
  </script>
  
  <style scoped>

  h1, h2 {
    color: #333;
  }
  
  h3 {
    margin-top: 20px;
  }
  
  .form-control, .form-select {
    max-width: 400px;
    margin: 0 auto;
  }
  
  button {
    width: 200px;
    margin: 0 auto;
    display: block;
  }
  
  .list-group-item {
    background-color: #f9f9f9;
  }
  
  .text-center {
    text-align: center;
  }
  

  .mb-3 {
    margin-bottom: 20px;
  }
  

  .container {
    background-color: #fff;
    padding: 30px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .list-group-item:hover {
    background-color: #f1f1f1;
  }
  </style>
  