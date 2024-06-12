<script>

import {defineComponent} from "vue";
import ButtonUI from "@/components/ButtonUI.vue";

export default {
  components: {ButtonUI},
  props:{
    card:{
      type:Object,
      required:true
    }
  },
  methods:{
    pushToCart(){
      if(!this.$store.state.cart.includes(this.card)){
        this.$store.state.cart.push(this.card);
      }
    }
  }
}
</script>

<template>
  <div class="card">
    <span class="card__header__text">{{card.name}}</span>
    <div class="card__container">
      <div class="card__text">{{card.price}} ₽/мес.</div>
      <span class="card__text">
      Ядра    {{card.cores}}<br>
      Память  {{card.memory}}<br>
      Диски   {{card.drive}}
    </span>
      <button-u-i class="btn-card" @click="pushToCart()">Заказать сейчас</button-u-i>
    </div>
  </div>
</template>

<style>
.card{
  width: 15vw;
  height: 45vh;
  padding: 28px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.32);
}
.card__header__text{
  align-self: flex-start;
  font-weight: bold;
  font-size: 24px;
}
.card__text{
}
.card__text:nth-child(1){
  font-size: 22px;
}
.card__container > .card__text:nth-child(2){
  font-size: 15px;
}
.card__container{
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 65px;

}
.btn-card{
  align-self: flex-end;
}
</style>