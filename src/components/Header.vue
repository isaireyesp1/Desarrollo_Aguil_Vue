<template>
  <header>
    <div class="logo">
      <img src="./assets/logo.png" alt="Tim.Shop Logo" />
    </div>
    <nav>
      <ul>
        <li><a href="#">Categorías</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Historial</a></li>
        <li><a href="#">Lo más vendido</a></li>
        <li><a href="#">Lo nuevo</a></li>
        <li><a href="#">Vender</a></li>
        <li><a href="#">Ayuda</a></li>
      </ul>
    </nav>
    <div class="search-cart">
      <input type="text" placeholder="Buscar..." />
      <button>Buscar</button>
      <a href="#">Carrito</a>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333333; /* Fondo gris oscuro */
  border-bottom: 1px solid #444444; /* Borde gris más oscuro */
}

.logo img {
  height: 50px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

nav ul li a {
  text-decoration: none;
  color: #FFFFFF; /* Texto blanco */
}

.search-cart {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-cart input {
  padding: 5px;
  border: 1px solid #444444; /* Borde gris más oscuro */
  border-radius: 4px;
  background-color: #333333; /* Fondo gris oscuro */
  color: #FFFFFF; /* Texto blanco */
}

.search-cart button {
  padding: 5px 10px;
  background-color: #000000; /* Fondo negro */
  color: #FFFFFF; /* Texto blanco */
  border: none;
  cursor: pointer;
}

.search-cart a {
  text-decoration: none;
  color: #FFFFFF; /* Texto blanco */
}
</style>