<script setup>

</script>

<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__list_container">
        <div class="footer__list_item">
          <span class="list__header_text">Продкуты</span>
          <span class="list__btn--grey">Домены</span>
          <span class="list__btn--grey">Хостинг</span>
          <span class="list__btn--grey">SSL-сертификаты</span>
          <span class="list__btn--grey">Сервисы</span>
        </div>
        <div class="footer__list_item">
          <span class="list__header_text">Полезное</span>
          <span class="list__btn--grey">Стоимость услуг</span>
          <span class="list__btn--grey">Способы оплаты</span>
          <span class="list__btn--grey">База знаний</span>
          <span class="list__btn--grey">Документы</span>
          <span class="list__btn--grey">Whois</span>
          <span class="list__btn--grey">Магазин доменов</span>

        </div>
      </div>
      <div class="footer__list_container">
        <div class="footer__list_item">
          <span class="list__header_text">Контакты</span>
          <span class="list__btn--grey">8-(888)-888-88-88</span>
          <span class="list__btn--grey">8-(888)-888-88-88</span>
        </div>
        <div class="footer__list_item">
          <span class="list__header_text">Социальные сети</span>
          <div class="list__social-links">
            <a href="https://telegram.org/?1" class="list__social-links_item"></a>
            <a href="https://vk.com/" class="list__social-links_item"></a>
            <a href="https://youtube.com/" class="list__social-links_item"></a>
          </div>
        </div>
      </div>
    </div>
    <span class="copyright">
        © ООО «Lorem Ipsum»<br>
        Правовая информация и правила пользования<br>
        Правила применения рекомендательных технологий
      </span>
  </div>

</template>

<style>
  .footer{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

  }
  .footer__container {
    width: inherit;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 29vw;
    border-style: solid;
    border-color: #808080FF #FFFFFFFF #808080FF #FFFFFFFF;

  }
  .footer__list_container {
    display: flex;

  }
  .footer__list_container:nth-child(1) {
    gap: 8.6vw;
  }
  .footer__list_container:nth-child(2) {
    flex-direction: column;
    gap: 64px;
  }

  .list__header_text{
    font-size: 24px;
    font-weight: bold;
  }
  .footer__list_item{
    display: flex;
    flex-direction: column;
    gap: 16px
  }
  .list__btn--grey{
    font-size: 16px;
    color: grey;
  }
  .list__social-links{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .list__social-links_item{
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    gap: 17px;
  }
  .list__social-links_item:nth-child(1){
    background-image: url("@/assets/Telegram.png");
  }  .list__social-links_item:nth-child(2){
    background-image: url("@/assets/VK.png");
  }
  .list__social-links_item:nth-child(3){
    background-image: url("@/assets/YouTube.png");
  }
  .copyright{
    width: 500px;
    align-self: flex-start;
    padding: 36px 0 20px 0;
    margin-left:13.5vw;
    line-height: 46.2px;
  }
</style>