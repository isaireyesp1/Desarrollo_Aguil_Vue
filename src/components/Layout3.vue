<template>
    <!-- <Proms msg="isai"/>-->
     <Padre />
     </template>
     
     <script>
     import Padre from "./Proms2/Padre.vue"; 
     export default {
       name: "Layout",
       components: {
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
     