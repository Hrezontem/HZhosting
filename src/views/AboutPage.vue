<script>

import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {FooterComponent, HeaderMenu},
  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Default Title";
    },
  }

}
</script>

<template>
  <header-menu></header-menu>
  <footer-component></footer-component>
</template>

<style scoped>

</style>