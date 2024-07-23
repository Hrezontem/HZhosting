<script>

import CartListItem from "@/components/CartListItem.vue";

export default {
  components: {CartListItem},
  props: {
    cartItems: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div class="cart-list__container" >
    <cart-list-item
        v-for="(cartItem, index) in cartItems"
        :cartItem="cartItem"
        :key="cartItem.id"
        :cart-item-index="index + 1"
    >

    </cart-list-item>
  </div>
</template>

<style scoped>
.cart-list__container{
  margin-top: 40px;
  padding: 20px;

}
</style>