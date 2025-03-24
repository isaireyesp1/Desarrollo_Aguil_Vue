<template>
 <!-- <Proms msg="isai"/>-->
  <Padre />
  </template>
  
  <script>
  import Gatos from "./Gatitos.vue"; 
  import Proms from "./Proms.vue";  
  import Padre from "./Proms/Padre.vue"; 
  export default {
    name: "Layout",
    components: {
      Gatos,
      Proms,
      Padre
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
  