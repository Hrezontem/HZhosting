<script>
import HeaderMenu from "@/components/HeaderMenu.vue";
import Slider from "@/components/Slider.vue"
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import Card from "@/components/Card.vue";
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    }
  },
  components: {
    Card,
    ButtonUI,
    FooterComponent,
    HeaderMenu,
    Slider
  },
  data(){
  },


}
</script>

<template>
  <header-menu></header-menu>
  <h1>Главная</h1>
  <slider></slider>
  <div class="cards">
    <card
        :card="card"
        v-for="card in this.$store.state.cards_home"
    >
    </card>
  </div>
  <div class="main__text">
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </span>
  </div>
  <footer-component></footer-component>
</template>

<style>
.main__text{
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 64px;
  font-size: 16px;
}
.cards{
  display: flex;
  align-items: center;
  gap: 54px;
}
</style>