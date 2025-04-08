<script setup>
</script>

<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">Rutas</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/calculadora" class="nav-link" exact-active-class="active">Calculadora</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/horario" class="nav-link" exact-active-class="active">Horario</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/eventos" class="nav-link" exact-active-class="active">Eventos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/props" class="nav-link" exact-active-class="active">Props</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ejemploweb" class="nav-link" exact-active-class="active">Ejemplo Web</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" exact-active-class="active">About</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow-1 container py-4">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease;
}
.navbar-nav .nav-link:hover {
  color: #fff;
}
.navbar-nav .nav-link.active {
  color: #fff;
  font-weight: bold;
  border-bottom: 2px solid #fff;
}
</style>
