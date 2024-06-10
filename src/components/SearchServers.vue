<script setup>

</script>

<template>
<div class="search">
  <div class="search__container">
    <div>></div>
    <input class="search__input" placeholder="Поиск..." type="text">
  </div>
  <select>
    <option>ЯДРА</option>
    <option>RAM</option>
    <option>HDD/SSD</option>
  </select>
</div>
</template>

<style scoped>
select{
  padding: 13px;
  font-size: 24px;
}
.search__input {
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 30px;
  color: white;
}
.search__container{
  display: flex;
  border-bottom-style: solid;
  border-bottom-color: white;
  font-size: 40px;
}
.search{
  padding: 20px;
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
}
</style>