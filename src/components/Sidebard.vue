<template>
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: "Sidebar"
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 220px;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 2px solid #ddd;
  }
  
  .sidebar nav ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar nav ul li {
    margin: 15px 0;
  }
  
  .sidebar nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  .sidebar nav ul li a:hover {
    color: #007bff;
  }
  </style>
  