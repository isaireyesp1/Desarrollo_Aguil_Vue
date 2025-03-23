<template>
    <div class="container">
      <h1>Lista de Alumnos</h1>
      <table>
        <thead>
          <tr>
            <th>Número de Control</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.controlNumber">
            <td>{{ student.controlNumber }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.carrera }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Recorrido',
    data() {
      return {
        students: [
          { controlNumber: '21620053', name: 'Juan Pérez', phone: '555-123-4567', email: 'juan@example.com', carrera: 'ISC' },
          { controlNumber: '21620067', name: 'María Gómez', phone: '555-987-6543', email: 'maria@example.com', carrera: 'ISC' },
          { controlNumber: '20620166', name: 'Carlos Rodríguez', phone: '555-456-7890', email: 'carlos@example.com', carrera: 'IC' },
          { controlNumber: '21620543', name: 'Ana López', phone: '555-321-6548', email: 'ana@example.com', carrera: 'IM' },
          { controlNumber: '21620089', name: 'Luis Fernández', phone: '555-654-7891', email: 'luis@example.com', carrera: 'II' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1000px; /* Aumentar el ancho para un mejor uso del espacio */
    margin: 20px auto; /* Centrado en la página con un margen superior */
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px; /* Bordes redondeados para mayor suavidad */
  }
  
  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
    color: #333;
    font-weight: 500;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #eaeaea;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 20px;
    }
  
    th, td {
      padding: 8px;
    }
  }
  </style>
  