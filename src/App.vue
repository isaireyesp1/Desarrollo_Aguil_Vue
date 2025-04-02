<template>
  <Eventos>
    <router-view />
  </Eventos>
</template>

<script>
import Eventos from "./components/Eventos.vue";

export default {
  components: {
    Eventos
  }
};
</script>
