<template>
    <div>
      <label for="nombre">Nombre del Alumno:</label>
      <input type="text" id="nombre" v-model="nombre">
      <button @click="agregarAlumno">Agregar Alumno</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: ''
      };
    },
    methods: {
      agregarAlumno() {
        if (this.nombre.trim()) {
          alert(`Alumno Agregado Correctamente: ${this.nombre}`);
          this.nombre = ''; // Limpiar el campo después de agregar el alumno
        } else {
          alert('Por favor, ingresa un nombre.');
        }
      }
    }
  };
  </script>
  