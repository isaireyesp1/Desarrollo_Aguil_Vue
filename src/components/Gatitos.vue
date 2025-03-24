<script>
import Header from "./Card.vue";
</script>
<template>
    <div class="container-fluid vh-100 d-flex flex-column">
      <h1 class="text-center py-3">MASCOTAS</h1>
      
      <Header />
       
  
    </div>
  </template>
  
  <script setup>
  const pets = [
    { name: "Gato 1", image: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", description: "Un gato hermoso y cariñoso." },
    { name: "Perro 1", image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", description: "Un perro leal y juguetón." },
    { name: "Gato 2", image: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", description: "Un gato curioso y divertido." },
    { name: "Perro 2", image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", description: "Un perro listo para la aventura." },
  
    { name: "Gato 3", image: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", description: "Gato tranquilo y relajado." },
    { name: "Perro 3", image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", description: "Perro fiel y protector." },
    { name: "Gato 4", image: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", description: "Gato juguetón y ágil." },
    { name: "Perro 4", image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", description: "Perro amigable y enérgico." },
  
    { name: "Gato 5", image: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", description: "Gato elegante y misterioso." },
    { name: "Perro 5", image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", description: "Perro obediente y valiente." },
    { name: "Gato 6", image: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", description: "Gato independiente y explorador." },
    { name: "Perro 6", image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", description: "Cachorro adorable y juguetón." }
  ];
  </script>
  
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
  