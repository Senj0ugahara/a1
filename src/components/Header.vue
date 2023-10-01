<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header-logo">
        <a class="header-logo__link" href="https://allods.mail.ru/">
          <img src="../assets/images/logo.png" alt="Аллоды онлайн">
        </a>
      </div>
      <div class="header-info">
        <h1 class="header-info__title">Коллекционные издания</h1>
        <p class="header-info__subtitle">
          Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!
        </p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 20px 0 50px;
  background-image: url('../assets/images/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &-logo {
    text-align: center;
    z-index: 1;
  }

  &-info {
    padding-top: 460px;
    color: #fff;
    text-align: center;

    &__title {
      margin-bottom: 25px;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 42px;
      font-weight: 700;
      line-height: 49px;
      text-transform: uppercase;
    }

    &__subtitle {
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
    }
  }
}
</style>