<template>
  <div>
    <!-- Botón para mostrar/ocultar el sidebar -->
    <button @click="toggleSidebar" class="toggle-btn">☰</button>
    
    <!-- Sidebar -->
    <aside :class="{'sidebar': true, 'collapsed': isCollapsed}">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </aside>
  </div>
</template>


<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>


<style scoped>
/* Estilos generales del sidebar */
.sidebar {
  width: 220px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 2px solid #ddd;
  transition: transform 0.3s ease;
}

/* Cuando el sidebar está colapsado (oculto) */
.sidebar.collapsed {
  transform: translateX(-100%);
}

/* Estilos para la lista de navegación */
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

/* Estilo del botón para mostrar/ocultar el sidebar */
.toggle-btn {
  position: fixed; /* Aseguramos que esté siempre visible */
  top: 20px;
  left: 20px;
  background: #f4f4f4;
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  z-index: 1000; /* Asegura que el botón esté encima del contenido */
}

/* Estilo cuando el ratón pasa por encima del botón */
.toggle-btn:hover {
  background-color: #007bff;
  color: #fff;
}
</style>

