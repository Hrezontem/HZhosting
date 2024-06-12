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
  <h1>Сервера</h1>
  <search-servers></search-servers>
  <card-list :cards="searchedCards"></card-list>
  <footer-component></footer-component>
</template>

<style scoped>

</style>