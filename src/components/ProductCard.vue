<template>
    <div class="product-card">
      <img :src="image" :alt="name" class="product-image" />
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <p class="price">$ {{ price }}</p>
      <button @click="addToCart">🛒 Agregar al carrito</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      description: String,
      price: Number,
      image: String
    },
    methods: {
      addToCart() {
        alert(`"${this.name}" agregado al carrito.`);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
    width: 250px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .price {
    font-size: 18px;
    font-weight: bold;
    color: #28a745;
  }
  
  button {
    background: #007bff;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>
  