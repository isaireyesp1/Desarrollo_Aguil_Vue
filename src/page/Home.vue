<template>
    <section class="intro-section text-white">
      <div class="intro-overlay">
        <div class="content container">
          <h1 class="title">Bienvenido al Home</h1>
          <p class="subtitle">
            Aqui encontraras los proyectos que hemos realizado en la clase.
          </p>
          <div class="brand-logos">
              <img src="/iconos/fb.png" alt="Facebook" />
              <img src="/iconos/gh.png" alt="Git Hub" />
              <img src="/iconos/tt.png" alt="Tik Tok" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .intro-section {
    width: 100%;
    height: 100vh; /* Asegura que la sección ocupe todo el alto de la ventana */
    background-color: #1d2123; /* Azul elegante */
    background-size: cover;
    background-position: center;
    padding: 4rem 1rem; /* Espacio flexible */
    display: flex;
    justify-content: center;
    align-items: center; /* Centra todo el contenido dentro de la sección */
    position: relative;
    opacity: 0; /* Inicialmente invisible */
    animation: fadeIn 1.5s forwards; /* Animación de aparición */
  }
  
  .content {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 3rem; /* Título más grande */
    font-weight: bold;
    margin-bottom: 1rem;
    opacity: 0; /* Inicialmente invisible */
    animation: fadeInUp 2s forwards; /* Animación de aparición del título */
  }
  
  .subtitle {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    opacity: 0; /* Inicialmente invisible */
    animation: fadeInUp 2.5s forwards; /* Animación del subtítulo */
  }
  
  .brand-logos {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    opacity: 0; /* Inicialmente invisible */
    animation: fadeInUp 3s forwards; /* Animación de los logos */
  }
  
  .brand-logos img {
    width: 80px;
    filter: brightness(0) invert(1);
  }
  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  </style>