<script>

import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {FooterComponent, HeaderMenu},


}
</script>

<template>
  <header-menu></header-menu>
  <h1 >О компании Lorem Ipsum Hosting</h1>

  <div class="main__text">
    <p>
      Lorem Ipsum Hosting - это первая компания на рынке российского хостинга, предоставляющая услуги по системе “Все включено”. Мы построили работу таким образом, чтобы у наших клиентов не было необходимости разбираться в тонкостях настроек сервера, а всю работу выполняли наши специалисты.
    </p>
    <p>
      С самого основания в 2023 году мы продолжаем развиваться и становиться лучше для наших клиентов. За это время мы открыли новые направления и улучшили качество наших услуг. Сегодня наша команда состоит из более 10 настоящих профессионалов, каждый из которых вносит свой вклад в развитие наших услуг, чтобы Вы могли размещать свои сайты и знать, что они будут работать максимально хорошо.
      На сегодняшний день в нашей компании 25 000+ сайтов на обслуживании и 8 000+ клиентов.
    </p>
  </div>
  <footer-component></footer-component>
</template>

<style scoped>
.main__text {
  width: 30vw;
  display: flex;
  gap: 20px;
}
</style>