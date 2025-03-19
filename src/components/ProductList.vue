<template>
  <section class="product-list">
    <h2>Nuevos productos</h2>
    <div class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

const products = ref([
  { id: 1, name: 'Alebrije', price: '$799.97 MXN', image: './alebrije.webp' },
  { id: 2, name: 'Sombrero', price: '$2,999.00 MXN', image: './sombrero.webp' },
  { id: 3, name: 'Vestido de Telar', price: '$1,990.75 MXN', image: './Vestido.png' },
  { id: 4, name: 'Molcajete', price: '$250.00 MXN', image: './MOLCAJETE.webp' },
  { id: 5, name: 'Zapatos', price: '$1,500.00 MXN', image: './zapatos.webp' },
  { id: 6, name: 'Chamarra de cuero', price: '$3,500.00 MXN', image: './chamarra.png' },
  { id: 7, name: 'Guayabera', price: '$1,200.00 MXN', image: './guayavera.png' },
  { id: 8, name: 'Botas vaqueras', price: '$2,000.00 MXN', image: './Botas.webp' }
])
</script>

<style scoped>
.product-list {
  margin: 20px 0;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.product-card {
  flex: 1 1 calc(33.333% - 20px); /* Tres productos por fila */
  box-sizing: border-box;
}
</style>