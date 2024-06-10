<script>
import {ref} from "vue";
import Vue from 'vue';

export default {
  data(){
    return{
      currentSlideIndex: 0,
      images: [
        {dir_image: "slide.png"},
        {dir_image: "2.jpg"},
        {dir_image: "3.jpg"},
      ]
    }
  },
  methods: {
    prevSlide(){
      if(this.currentSlideIndex > 0){
        this.currentSlideIndex --;
      } else {
        this.currentSlideIndex = this.images.length;

      }
    },
    nextSlide(){
      if(this.currentSlideIndex >= this.images.length - 1){
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;

      }
    }

  },

}
</script>

<template>
  <div class="slider">
    <div class="slider__btns">
      <div class="slider__btns_item--background">
        <div class="slider__btns_item" @click="prevSlide()"></div>

      </div>
      <div class="slider__btns_item--background">
        <div class="slider__btns_item" @click="nextSlide()"></div>
      </div>
    </div>
    <div class="slides" :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}" >
      <div class="slides__item__container" v-for="image in images" >
        <img alt="sas" :src="require('@/assets/img/'+ image.dir_image)"  class="slides__item">
      </div>
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
    overflow: hidden;
  }
  .slides{
    display: flex;
    transition: all ease .5s;
  }
  .slides__item{
    width: 70vw;

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
  .slider__btns_item--background{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 33%, rgba(149,149,149,1) 100%);
  }
  .slider__btns_item--background:nth-child(1){
    background: rgb(255,255,255);
    background: linear-gradient(270deg, rgba(255,255,255,0) 33%, rgba(149,149,149,1) 100%);
  }
  .slider__btns_item--background:nth-child(2) > .slider__btns_item{
    transform: scale(-1, 1)
  }
</style>