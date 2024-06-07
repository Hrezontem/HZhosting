<script setup>

</script>

<template>
  <div class="btns__item"><slot></slot></div>
</template>

<style scoped>
.btns__item {
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  cursor: pointer;
  user-select: none;
}
.btns__item:hover {
  background-size: 100% 2px;
}

</style>