<script>

import HeaderMenu from "@/components/HeaderMenu.vue";
import Card from "@/components/Card.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchServers from "@/components/SearchServers.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import Slider from "@/components/Slider.vue";
export default {
  components: {
    Card,
    HeaderMenu,
    SearchServers,
    FooterComponent,
  },
}
</script>

<template>
  <header-menu></header-menu>
  <search-servers></search-servers>
  <div class="cards" >
    <card
        :card="card"
        v-for="card in this.$store.state.cards"></card>
  </div>
  <footer-component></footer-component>
</template>

<style scoped>
.cards{
  display: grid;
  grid-template-columns: 16vw 16vw 16vw;
  align-items: center;
  gap: 54px;
}
</style>