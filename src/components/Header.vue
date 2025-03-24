<template>
    <header>
      <div class="logo">Horario</div>
      <div class="search-bar">
        <input type="text" placeholder="Buscar productos..." />
        <button>🔍</button>
      </div>
      <div class="user-cart">
        <button>👤 Usuario</button>
        <button @click="goToCart">🛒 Carrito</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    methods: {
      goToCart() {
        this.$router.push("/cart");
      }
    }
  };
  </script>
  
  <style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #eee;
  width: 130%; /* Hace que el header ocupe todo el ancho disponible */
}
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-bar input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .search-bar button {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    margin-left: 10px;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
  }
  
  .user-cart button {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    margin-left: 10px;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
  }
  </style>
  