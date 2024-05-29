<script>

</script>

<template>
  <div class="menu">
    <div class="menu__logo"></div>
    <div class="menu__btns">
      <div class="btns__item">ГЛАВНАЯ</div>
      <div class="btns__item">О НАС</div>
      <div class="btns__item">КУПИТЬ</div>
    </div>
    <span class="menu__slogan">It`s just works</span>
  </div>
</template>

<style>
  .menu{
    width: 100vw;
    z-index: 2;
    padding: 20px;
    display: flex;
    position: sticky;
    justify-content: center;
    gap: 140px;
    align-items: center;
    font-size: 16px;
    top: 0;
    background-color: white;
  }
  .menu__btns{
    display: flex;
    gap: 50px;
  }
  .menu__logo{
    width: 100px;
    height: 100px;
    background-image:url("@/assets/logo.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>