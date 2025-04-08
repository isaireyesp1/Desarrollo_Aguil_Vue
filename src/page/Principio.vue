<script setup>
import Card from '../components/Card.vue';
import CardDos from '../components/CardDos.vue';
</script>

<template>

  <div class="container">
    <Card />
    <CardDos />
  </div>
</template>
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