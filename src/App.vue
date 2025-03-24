<template>
  <Layout3>
    <router-view />
  </Layout3>
</template>

<script>
import Layout from "./components/Layout.vue";
import Layout2 from "./components/Layout2.vue";
import Layout3 from "./components/Layout3.vue";
export default {
  components: {
    Layout,
    Layout2,
    Layout3
  }
};
</script>
