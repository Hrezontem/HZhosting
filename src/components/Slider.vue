<script>

</script>

<template>
  <div class="slider">
    <div class="slider__btns">
      <div class="slider__btns_item"></div>
      <div class="slider__btns_item"></div>
    </div>
    <div class="slides"></div>
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
    width: 100%;
    background-image: url("@/assets/slide.png");
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
  }
  .slider__btns_item:nth-child(2){
    transform: scale(-1, 1)
  }
</style>