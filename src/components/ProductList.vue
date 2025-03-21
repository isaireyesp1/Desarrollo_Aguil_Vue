<template>
  <section class="product-list">
    <h2 class="section-title">Nuevos productos</h2>
    <div class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

const products = ref([
  { id: 1, name: 'Alebrije', price: '$799.97 MXN', image: './Productos/alebrije.webp' },
  { id: 2, name: 'Sombrero', price: '$2,999.00 MXN', image: './Productos/sombrero.webp' },
  { id: 3, name: 'Vestido de Telar', price: '$1,990.75 MXN', image: './Productos/Vestido.png' },
  { id: 4, name: 'Molcajete', price: '$250.00 MXN', image: './Productos/MOLCAJETE.webp' },
  { id: 5, name: 'Zapatos', price: '$1,500.00 MXN', image: './Productos/zapatos.webp' },
  { id: 6, name: 'Chamarra de cuero', price: '$3,500.00 MXN', image: './Productos/chamarra.png' },
  { id: 7, name: 'Guayabera', price: '$1,200.00 MXN', image: './Productos/guayavera.png' },
  { id: 8, name: 'Botas vaqueras', price: '$2,000.00 MXN', image: './Productos/Botas.webp' },
  { id: 9, name: 'Huypil', price: '$12,000.00 MXN', image: './Productos/Huypil.png' }
])
</script>

<style scoped>
.product-list {
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9; /* Fondo suave */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-card {
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden; /* Redondea las esquinas de las tarjetas */
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 250px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
  text-align: center;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
}

.btn-light {
  background-color: #ff6600;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-light:hover {
  background-color: #e65c00;
}
</style>
