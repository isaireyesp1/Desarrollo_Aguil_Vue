<template>
    <!--
    <div class="layout">
      <Header @goToCart="goToCart" />
      <Sidebar />
      <main class="content">
        <slot></slot> 
        <Horario /> 
      </main>
      <Footer />
    </div>
-->
  <Gatos />
  </template>
  
  <script>
  import Header from "./Header.vue";
  import Sidebar from "./Sidebard.vue";
  import Footer from "./Footer.vue";
  //import Recorrido from "./Recorrido.vue"; 
  import Horario from "./Horario.vue"; 
  import list from "./ProductList.vue"; 
  import Gatos from "./Gatitos.vue"; 
  
  export default {
    name: "Layout",
    components: {
      Header,
      Sidebar,
      Footer,
      Horario,
      Gatos
    },
    methods: {
      goToCart() {
        this.$router.push("/cart");
      }
    }
  };
  </script>
  <style scoped>
 
  </style>
  