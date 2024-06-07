<script>
import {ref} from "vue";

export default {
  data(){
    return{
      images: [
        {dir_image: "@/assets/slides/1.jpg"},
        {dir_image: "@/assets/slides/2.jpg"},
        {dir_image: "@/assets/slides/3.jpg"},
      ]
    }
  },
  methods: {
    imageUrl(selectedImage) {
      return new URL(selectedImage, import.meta.url).href;
    }

  },
  computed: {

  }
}
</script>

<template>
  <div class="slider">
    <div class="slider__btns">
      <div class="slider__btns_item"></div>
      <div class="slider__btns_item"></div>
    </div>
    <div class="slides">
      <img alt="sas" :src='imageUrl(image.dir_image)' v-for="image in images"  class="slides__item">
    </div>
  </div>
</template>

<style>
  .slider{
    width: 70vw;
    display: flex;
    justify-content: space-between;
    height: 32vh;
    background-color: #878787;
  }
  .slides{
    display: flex;
  }
  .slides__item{
    width: 100%;
  }
  .slider__btns{
    width: inherit;
    height: 32vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
  }
  .slider__btns_item{
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("@/assets/arrow.png");
    cursor: pointer;
  }
  .slider__btns_item:nth-child(2){
    transform: scale(-1, 1)
  }
</style>