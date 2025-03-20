<template>
  <header class="d-flex justify-content-between align-items-center p-3 bg-dark border-bottom border-secondary">
    <a class="text-white fw-bold fs-4 text-decoration-none">Tim.Shop</a> 

    <nav>
      <ul class="nav">
        <li class="nav-item"><a class="nav-link text-white" href="#">Categorías</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Ofertas</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Historial</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Lo más vendido</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Lo nuevo</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Vender</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Ayuda</a></li>
      </ul>
    </nav>

    <div class="d-flex align-items-center gap-2">
      <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="Buscar..." />
      <button class="btn btn-light">Buscar</button>
      <a href="#" class="text-white text-decoration-none">Carrito</a>
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.nav-link {
  color: #FFFFFF !important; /* Asegura que los enlaces sean blancos */
}

.nav-link:hover {
  color: #cccccc !important; /* Cambio de color al pasar el mouse */
}

.form-control {
  max-width: 200px;
}
</style>
