<template>
  <section class="kit">
    <div class="container">
      <div class="kit-wrapper">
        <div class="kit-image">
          <img src="../assets/images/vito.png" alt="Vito">
        </div>
        <div class="kit-info">
          <h2 class="kit-title">Набор «Посылка с контрабандой»</h2>
          <KitList />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KitList from './UI/KitList.vue';

export default {
  components: {
    KitList
  }
}
</script>

<style lang="scss" scoped>
.kit {
  padding: 58px 0 50px;
  background-image: url('../assets/images/kit-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &-wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1259.98px) {
      justify-content: center;
    }
  }

  &-image {
    position: relative;
    width: 40%;
    margin-right: 160px;
    z-index: 1;

    @media (max-width: 1259.98px) {
      display: none;
    }

    &::before {
      content: '';
      position: absolute;
      top: 170px;
      left: -130px;
      width: 680px;
      height: 680px;
      border-radius: 100%;
      background-image: url('../assets/images/vito-gradient.png');
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }

  &-info {
    width: 60%;

    @media (max-width: 1259.98px) {
      width: 100%;
    }
  }

  &-title {
    margin-bottom: 35px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    color: #416DF4;
    text-transform: uppercase;

    @media (max-width: 1259.98px) {
      text-align: center;
    }
  }
}
</style>