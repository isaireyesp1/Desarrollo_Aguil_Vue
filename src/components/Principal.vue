<!--<script setup>
// 
import Card from './Card.vue';
import CardPrincipal from './CardPrincipal.vue';

</script>
<template> -->
    <!-- Estructura HTML 
    <div class="container">
        <h1 class="text-center"> TIM SHOP</h1> -->
        <!-- INICIO DEL PRIMER ROW -->
        <!-- <CardPrincipal /> --> 
        <!-- CIERRE DEL PRIMER ROW -->
        <!-- INICIO DEL SEGUNDO ROW -->
        <!-- <Card /> --> 
        <!-- CIERRE DEL SEGUNDO ROW -->  
<!--     </div>  
</template>
<style scoped>
/* Estilos CSS */

</style> -->

<script setup>
import { ref } from 'vue';
import Card from './Card.vue';
import CardPrincipal from './CardPrincipal.vue';
import CardDos from './CardDos.vue';

// Lista de marcas con íconos y enlaces
const marcas = ref([
  { nombre: 'BMW', enlace: '#' },
  { nombre: 'Audi', enlace: '#' },
  { nombre: 'Mercedes-Benz', enlace: '#' }
]);

</script>

<template>
  <!-- Barra de navegación -->
  <nav class="navbar">
    <div class="navbar-container">
      <div 
        v-for="marca in marcas" 
        :key="marca.nombre" 
        class="nav-item" 
        @mouseover="hover = marca.nombre" 
        @mouseleave="hover = ''"
      >
        <a :href="marca.enlace" class="nav-link">
          <span class="icon">{{ marca.icono }}</span>
          <span class="text">{{ marca.nombre }}</span>
        </a>
      </div>
    </div>
  </nav>
  
  <!-- Contenido Principal -->
  <div class="container">
    <!--<CardPrincipal />-->
    <Card />
    <CardDos />
  </div>
</template>

<!-- Estilo global sin scoped -->
<style>
/* Establecer el fondo para toda la página */
body {
  background-color: #293241; /* Fondo color oscuro */
  color: white; /* El texto será blanco */
}

/* Barra de navegación */
.navbar {
  background-color: #293241;
  padding: 15px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  gap: 30px;
}

.nav-item {
  transition: transform 0.3s ease, background-color 0.3s ease;
  padding: 10px 20px;
  border-radius: 10px;
}

.nav-item:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  font-size: 24px;
}

.text {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.nav-item:hover .text {
  opacity: 1;
}
</style>

