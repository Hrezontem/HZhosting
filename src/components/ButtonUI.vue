<script setup>

</script>

<template>
  <button class="btn"><slot></slot></button>
</template>

<style>
  .btn{
    width: 281px;
    padding: 15px;
    border: none;
    background-color: #E7E7E7;
    border-radius: 10px;
    color: black;
    font-size: 15px;
    cursor: pointer;
  }
</style>