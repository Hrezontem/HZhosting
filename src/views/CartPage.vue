<script >

import FooterComponent from "@/components/FooterComponent.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import CardList from "@/components/CardList.vue";
import CartList from "@/components/CartList.vue";
import ButtonUI from "@/components/ButtonUI.vue";
export default {
  components: {ButtonUI, CartList, CardList, FooterComponent, HeaderMenu},
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
  <div class="cart-list">
    <cart-list v-if="this.$store.state.cart.length > 0" :cartItems="this.$store.state.cart"></cart-list>
    <span class="cart-empty" v-else>Корзина пуста</span>
    <div class="cost">Стоимость товаров: {{costCart}}₽</div>
    <button-u-i v-if="this.$store.state.cart.length > 0">Купить</button-u-i>
  </div>

  <footer-component></footer-component>
</template>

<style scoped>
.cost{
  padding: 20px;
  font-size: 20px;
}
.cart-empty{
  color: #5e5e5e;
  font-size: 20px;
  font-weight: bold;
}
.cart-list{
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.32);
}
</style>