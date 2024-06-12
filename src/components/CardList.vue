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
        :key="card.id"
        v-for="card in cards">

    </card>
  </div>
</template>

<style scoped>
.cards{
  display: grid;
  grid-template-columns: 16vw 16vw 16vw;
  align-items: center;
  gap: 54px;
}
</style>