<template>
  <div class="product-card">
    <img :src="image" alt="Imagen del producto" />
    <div class="info">
      <div class="name">{{ name }}</div>
      <div class="description">{{ description }}</div>
      <div class="price">${{ price }}</div>
      <div class="buttons">
        <button class="add-to-cart">Añadir al carrito</button>
        <button class="view-details">Ver detalles</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: String,
    description: String,
    price: Number,
    image: String
  }
};
</script>

<style scoped>
.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

.product-card img {
  width: 100%;
  height: 180px; 
  object-fit: cover;
  border-radius: 4px;
}

.product-card .info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.product-card .name {
  font-weight: bold;
  margin-top: 10px;
}

.product-card .price {
  margin-top: 10px;
  font-size: 1.2em;
  color: #007bff;
}

.product-card .description {
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;
}

.product-card .buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.product-card .buttons button {
  background-color:#28a745;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}
.product-card .buttons .view-details {
  background-color:#ffc107;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.product-card .buttons button:hover {
  background-color: #0056b3; 
}

.product-card .buttons button:focus {
  outline: none; 
}
</style>
