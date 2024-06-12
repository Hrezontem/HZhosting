<script >

import FooterComponent from "@/components/FooterComponent.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import CardList from "@/components/CardList.vue";
export default {
  components: {CardList, FooterComponent, HeaderMenu},
  computed:{
    costCart(){
      let cost = 0;
      this.$store.state.cart.forEach((item)=>{
        cost += Number(item.price.replace(/\s+/g, '').replace(',', '.'));
        console.log(item.price.replace(/\s+/g, '').replace(',', '.'));

      })
      console.log(cost);

      return cost
    }
  }

}
</script>

<template>
  <header-menu></header-menu>
  <h1>Корзина</h1>
  <div class="cost">Стоимость товаров: {{costCart}}₽</div>

  <card-list v-if="this.$store.state.cart.length > 0" :cards="this.$store.state.cart"></card-list>
  <span class="cart-empty" v-else>Корзина пуста</span>
  <footer-component></footer-component>
</template>

<style scoped>
.cart-empty{
  color: #5e5e5e;
  font-size: 20px;
  font-weight: bold;
}
</style>