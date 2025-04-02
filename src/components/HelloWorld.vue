<script setup>
import { ref } from 'vue';

// Lista de productos simulados
const products = ref([
  {
    id: 1,
    name: 'Mochila Artesanal',
    description: 'Hecha a mano con materiales ecológicos.',
    price: 45.00,
    image: 'https://via.placeholder.com/250'
  },
  {
    id: 2,
    name: 'Cuenco de Cerámica',
    description: 'Cuenco de cerámica pintado a mano.',
    price: 30.00,
    image: 'https://via.placeholder.com/250'
  },
  {
    id: 3,
    name: 'Collar de Perlas',
    description: 'Collar artesanal con perlas naturales.',
    price: 25.00,
    image: 'https://via.placeholder.com/250'
  },
  {
    id: 4,
    name: 'Alfombra Tejida',
    description: 'Alfombra tejida a mano con diseños únicos.',
    price: 60.00,
    image: 'https://via.placeholder.com/250'
  }
]);
</script>

<template>
  <div class="store-container">
    <!-- Barra lateral -->
    <div class="sidebar">
      <h3>Categorías</h3>
      <ul>
        <li>Ropa</li>
        <li>Decoración</li>
        <li>Accesorios</li>
        <li>Juguetes</li>
      </ul>
    </div>

    <!-- Contenedor principal -->
    <div class="main-content">
      <h1>Bienvenido a TimShop - Tu tienda en línea de artesanías</h1>
      <p>Descubre productos únicos y personalizados para ti.</p>

      <!-- Botón para ingresar a la tienda -->
      <button class="btn">Ingresar</button>

      <!-- Lista de productos -->
      <div class="products">
        <div class="product-card" v-for="product in products" :key="product.id">
          <img :src="product.image" alt="Product Image" class="product-image" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p class="price">${{ product.price.toFixed(2) }}</p>
          <button class="add-to-cart-btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2025 TimShop. Todos los derechos reservados.</p>
  </footer>
</template>

<style scoped>
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f4; /* Fondo suave */
  color: #333; /* Texto oscuro */
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenido ocupe toda la altura */
}

/* Contenedor principal */
.store-container {
  display: flex;
  flex-grow: 1; /* Hace que el contenedor ocupe todo el espacio disponible */
}

/* Barra lateral */
.sidebar {
  width: 20%;
  background-color: #fff;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.sidebar h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.sidebar ul {
  list-style-type: none;
}

.sidebar ul li {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #666;
}

.sidebar ul li:hover {
  background-color: #f1f1f1;
  color: #000;
}

/* Contenido principal */
.main-content {
  width: 80%;
  padding: 20px;
  text-align: center;
  flex-grow: 1; /* Esto asegura que el contenido ocupe todo el espacio disponible */
}

h1 {
  font-size: 30px;
  color: #444;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.btn {
  background-color: #56cfe1; /* Color azul suave */
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
}

.btn:hover {
  background-color: #3b9eaf;
}

/* Productos */
.products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 30px;
}

.product-card {
  background-color: #fff; /* Fondo blanco */
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-card h2 {
  font-size: 18px;
  color: #333;
  margin-top: 10px;
}

.product-card p {
  font-size: 14px;
  color: #666;
  margin: 5px 0;
}

.price {
  font-weight: bold;
  color: #27ae60; /* Color verde para precios */
}

.add-to-cart-btn {
  background-color: #000; /* Botón negro */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
}

.add-to-cart-btn:hover {
  background-color: #333;
}

/* Estilos del footer */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  width: 100%;
  position: relative; /* Asegura que no se sobreponga */
}
</style>


