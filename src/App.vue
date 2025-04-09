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
  <div id="app">

    <div class="container">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/v1">CalculadoraV1</router-link></a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/v2">CalculadoraV2</router-link></a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/eventos">Eventos</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/horario">Horario</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  <!--  
    <h1>Vue Router</h1>
    <nav>
      
      <router-link to="/v2">CalculadoraV2</router-link>
    </nav>
    -->
    <router-view></router-view>
  </div>
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
