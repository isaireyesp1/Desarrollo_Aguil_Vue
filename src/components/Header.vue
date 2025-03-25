<template>
  <header>

      <a class="tim">Tim.Shop</a> 
    
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
template{

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333333;
  border-bottom: 1px solid #444444; 
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
  color: #FFFFFF; 
}
a.tim {
  text-decoration: none;
  color: #FFFFFF; 
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: 25px;
}

.search-cart {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-cart input {
  padding: 5px;
  border: 1px solid #444444; 
  border-radius: 4px;
  background-color: #333333;
  color: #FFFFFF;
}

.search-cart button {
  padding: 5px 10px;
  background-color: #000000; 
  color: #FFFFFF; 
  border: none;
  cursor: pointer;
}

.search-cart a {
  text-decoration: none;
  color: #FFFFFF; 
}
</style>