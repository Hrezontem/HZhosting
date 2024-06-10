<script>

import SearchInput from "@/components/SearchInput.vue";
export default {
  components: {
    SearchInput,
  },

  data(){
    return{

    }
  }
}
</script>

<template>
<div class="search">
  <div class="search__container" >
    <div>></div>
    <search-input v-model="this.$store.state.searchQuery" ></search-input>
  </div>
  <select hidden="hidden">
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