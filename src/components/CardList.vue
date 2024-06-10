<script>

import Card from "@/components/Card.vue";
export default {
  components: {Card},
  props: {
    cards: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div class="cards" >
    <card
        :card="card"
        v-for="card in cards"></card>
  </div>
</template>

<style scoped>

</style>