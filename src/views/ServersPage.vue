<script>

import HeaderMenu from "@/components/HeaderMenu.vue";
import Card from "@/components/Card.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchServers from "@/components/SearchServers.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import Slider from "@/components/Slider.vue";
import CardList from "@/components/CardList.vue";
export default {
  components: {
    CardList,
    Card,
    HeaderMenu,
    SearchServers,
    FooterComponent,
  },
  computed: {
    searchedCards(){
      return this.$store.state.cards.filter(card => card.name.toLowerCase().includes(this.$store.state.searchQuery.toLowerCase()));
    }
  }
}
</script>

<template>
  <header-menu></header-menu>
  <search-servers></search-servers>
  <card-list :cards="searchedCards"></card-list>
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