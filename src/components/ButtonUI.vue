<script setup>

</script>

<template>
  <button class="btn"><slot></slot></button>
</template>

<style>
  .btn{
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    color: black;
    font-size: 15px;
    cursor: pointer;
    outline: none;
    background-color: #E7E7E7;
    transition: 0.3s ease-in-out;

  }

  .btn:hover {
    background-color: black;
    color: white;

  }
</style>