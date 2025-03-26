<script>
export default {
    name: "Layout",
    components: {
      Card
    },
    methods: {
      goToCart() {
        this.$router.push("/cart");
      }
    }
  };
import Card from "./Card.vue";
</script>
<template>
    <div class="container-fluid vh-100 d-flex flex-column">
      <h1 class="text-center py-3">MASCOTAS</h1>
      <Card />
    </div>
  </template>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .container-fluid {
    height: 100%;
  }
  
  .card {
    width: 100%;
  }
  
  .card-img-top {
    height: 180px;
    object-fit: cover;
  }
  </style>
  