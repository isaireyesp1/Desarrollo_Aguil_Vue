<template>
  <div class="card bg-dark text-white border-secondary text-center custom-card">
    <img :src="product.image" :alt="product.name" class="card-img-top img-fluid p-3" />
    <div class="card-body">
      <h3 class="card-title">{{ product.name }}</h3>
      <p class="card-text">{{ product.price }}</p>
      <button class="btn btn-light">Añadir al carrito</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object
});
</script>

<style scoped>
.custom-card {
  width: 100%; /* Ocupará todo el ancho disponible en su contenedor */
  max-width: 350px; /* Mantiene un tamaño adecuado */
  margin: auto; /* Centra la tarjeta si es necesario */
}

.card-img-top {
  height: 250px;
  object-fit: contain;
}
</style>
