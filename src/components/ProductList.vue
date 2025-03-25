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
        { name: "Collar de madera", description: "Hecho a mano con materiales naturales.", price: 25, image: "https://i.pinimg.com/originals/37/d0/de/37d0de986c8244f8715445eda9370718.jpg" },
        { name: "Bolsa artesanal", description: "Tejida con fibras naturales.", price: 40, image: "https://e7.pngegg.com/pngimages/677/582/png-clipart-tote-bag-basket-artisan-craft-weaving-hand-woven-wreath-wreath-miscellaneous-luggage-bags.png" },
        { name: "Pulsera tejida", description: "Diseño único y colores vibrantes.", price: 15, image: "https://th.bing.com/th/id/OIP.HJ6c-sxoshv_ROuWnwnQlQHaHa?rs=1&pid=ImgDetMain" },
        { name: "Sombrero de paja", description: "Perfecto para el verano.", price: 18, image: "https://th.bing.com/th/id/OIP.vs3zTIv_hosybnrCKDl4ggHaHa?rs=1&pid=ImgDetMain" },
        { name: "Cartera de cuero", description: "Hecha a mano con cuero natural.", price: 55, image: "https://th.bing.com/th/id/OIP.3TFCOKfPo0jp3E7bh5fjVwHaHa?rs=1&pid=ImgDetMain" },
        { name: "Fular de seda", description: "Diseño elegante y único.", price: 30, image: "https://th.bing.com/th/id/R.048480506cac2d33b3a9beb4cb0a104e?rik=dBiC3zBisM6XTA&pid=ImgRaw&r=0" },
        { name: "Anillo de plata", description: "Joyería artesanal.", price: 45, image: "https://th.bing.com/th/id/OIP.aIBBsQ3LhlwNIbe61aOyRAHaHa?rs=1&pid=ImgDetMain" },
        { name: "Zapatos de lino", description: "Ligeros y frescos para el verano.", price: 60, image: "https://th.bing.com/th/id/R.01616d51d127465307c6f62932b45668?rik=kTZl5QXjbpeYlA&pid=ImgRaw&r=0" },
        { name: "Camiseta de algodón", description: "Cómoda y suave para el día a día.", price: 25, image: "https://th.bing.com/th/id/R.049bf829979f4418dab151297214fc07?rik=f85fbAAFLFCRrQ&pid=ImgRaw&r=0" }
      ]
    };
  }
};
</script>

<style scoped>
.product-list {
  text-align: center;
  margin: 20px 0;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 productos por fila */
  gap: 20px; /* Espacio entre los productos */
  margin-top: 20px;
  padding-left: 100px; /* Mueve la lista de productos hacia la derecha */
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px; /* Altura fija para las tarjetas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px); /* Efecto de elevación */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más intensa al pasar el mouse */
}

.product-card img {
  width: 100%; /* Asegura que la imagen ocupe todo el espacio disponible */
  height: 200px; /* Fija la altura de las imágenes */
  object-fit: cover; /* Asegura que la imagen no se distorsione */
  border-radius: 4px;
}

.product-card .name {
  font-weight: bold;
  margin-top: 10px;
  font-size: 1.2em;
}

.product-card .price {
  margin-top: 10px;
  font-size: 1.2em;
  color: #007bff;
  font-weight: bold;
}

.product-card .description {
  font-size: 0.9em;
  color: #666;
  flex-grow: 1;
  margin-top: 10px;
}
</style>
