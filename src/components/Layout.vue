<template>
    <div class="layout">
      <Header @goToCart="goToCart" />
      <Sidebar />
      <main class="content">
        <slot></slot> 
        <Recorrido /> 
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "./Header.vue";
  import Sidebar from "./Sidebard.vue";
  import Footer from "./Footer.vue";
  import Recorrido from "./Recorrido.vue"; // Asegúrate de importar correctamente
  
  export default {
    name: "Layout",
    components: {
      Header,
      Sidebar,
      Footer,
      Recorrido
    },
    methods: {
      goToCart() {
        this.$router.push("/cart");
      }
    }
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .content {
    display: flex;
    flex-grow: 1;
    margin-top: 20px;
    padding: 20px;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100%;
    background-color: #f4f4f4;
  }
  
  footer {
    margin-top: auto;
    padding: 20px;
    background-color: #f4f4f4;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  </style>
  