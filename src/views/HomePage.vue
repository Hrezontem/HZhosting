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
  <footer-component></footer-component>
</template>

<style>
.cards{
  display: flex;
  align-items: center;
  gap: 54px;
}
</style>