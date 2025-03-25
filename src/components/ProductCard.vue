<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button>Añadir al carrito</button>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>

<style scoped>
.product-card {
  border: 1px solid #444444;
  padding: 10px;
  text-align: center;
  width: 100%; 
  box-sizing: border-box;
  background-color: #000000; 
}

.product-card img {
  max-width: 100%;
  width: 100%;
  height: 200px; 
  object-fit: contain; 
}

.product-card h3 {
  margin: 10px 0;
  color: #FFFFFF; 
}

.product-card p {
  color: #FFFFFF;
}

.product-card button {
  padding: 5px 10px;
  background-color: #FFFFFF; 
  color: #000000; 
  border: none;
  cursor: pointer;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>