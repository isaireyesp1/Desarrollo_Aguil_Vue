<script setup>
import Header from './components/Header.vue'
import ProductList from './components/ProductList.vue'
import Footer from './components/Footer.vue'
import Eventos from './components/Eventos/Eventos.vue'
import Eventos2 from './components/Eventos/Evento2.vue'
import Calculadora from './components/Calculadora.vue'
import Calculadora2 from './components/CalculadoraV2.vue'

</script>

<template>
  <div class="main-container">
    <Header />
    <main>
      <Calculadora2 />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Reset general */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

/* Fondo general */
body {
  background-color: #FFFFFF; /* Fondo blanco */
  color: #000000; /* Texto negro */
  line-height: 1.6;
}

/* Contenedor principal */
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 20px;
}
</style>
