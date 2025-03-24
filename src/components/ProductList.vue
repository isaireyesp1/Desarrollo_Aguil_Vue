<template>
    <div class="product-list">
      <h1>Lista de Productos</h1>
      <div class="products">
        <ProductCard 
          v-for="(product, index) in products" 
          :key="index"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :image="product.image"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from "./ProductCard.vue";
  
  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        products: [
          { name: "Collar de madera", description: "Hecho a mano con materiales naturales.", price: 25, image: "https://via.placeholder.com/150" },
          { name: "Bolsa artesanal", description: "Tejida con fibras naturales.", price: 40, image: "https://via.placeholder.com/150" },
          { name: "Pulsera tejida", description: "Diseño único y colores vibrantes.", price: 15, image: "https://via.placeholder.com/150" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    text-align: center;
  }
  
  .products {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  </style>
  