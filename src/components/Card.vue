<template>
  <div class="row flex-grow-1 justify-content-center">
   <!-- Sección de Gatos -->
   <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header text-center">
            <h6>Gatos</h6>
          </div>
          <div class="card-body text-center">
            <p>Información sobre gatos</p>
          </div>
        </div>
      </div>

      <!-- Sección de Perros -->
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header text-center">
            <h6>Perros</h6>
          </div>
          <div class="card-body text-center">
            <p>Información sobre perros</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 FILAS CON 4 IMÁGENES CADA UNA -->
    <div class="container">
      <div class="row" v-for="row in 3" :key="row">
        <div class="col-md-3" v-for="(pet, index) in pets" :key="index">
          <div class="card">
            <img :src="pet.image" class="card-img-top" :alt="pet.name">
            <div class="card-body">
              <p class="card-text">{{ pet.description }}</p>
              <button class="btn btn-warning">Más Información</button>
            </div>
          </div>
        </div>
      </div>
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