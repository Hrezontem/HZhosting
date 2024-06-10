<script>
export default {
  props:{
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<template>
  <input class="search__input" placeholder="Поиск..." type="text" @input="updateInput"  :value="modelValue">

</template>

<style scoped>
.search__input {
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 30px;
  color: white;
}
</style>