<script>
import HeaderMenu from "@/components/HeaderMenu.vue";
import Slider from "@/components/Slider.vue"
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
    ButtonUI,
    FooterComponent,
    HeaderMenu,
    Slider
  },
  data(){
    return{
      cards:[
        {name: 'Intel Xeon E5-1650v3', price:'7 758,19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
        {name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
        {name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      ]
    }
  },


}
</script>

<template>
  <header-menu></header-menu>
  <slider></slider>
  <div class="cards">
    <card
        :card="card"
        v-for="card in cards"
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