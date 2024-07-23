<script >
export default {
  props:{
    cartItem:{
      type: Object,
      required: true,
    },
    cartItemIndex: ''
  },
}
</script>

<template>
  <div class="cart-list__item">
    <div class="cart-list__item__container">
      <div class="item-number">{{cartItemIndex}}</div>
      <span class="item-name">{{cartItem.name}} | Цена: {{cartItem.price}} ₽</span>
    </div>
    <hr class="item-divider">
  </div>

</template>

<style scoped>
.cart-list__item{
  display: flex;
  flex-direction: column;
  transition: .3s ease-in-out;
}

.cart-list__item:hover {
  transform: scale(1.05);
  margin-top: 10px;
  margin-bottom: 10px;

}

.cart-list__item__container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.item-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: black solid 1px;
}
.item-divider{
  margin-top: 10px;
  width: 100%;
  border-style: none;
  background-color: black;
  height: 4px;
  margin-bottom: 10px;

}
</style>