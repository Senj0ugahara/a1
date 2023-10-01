<template>
  <div class="kit-list">
    <div class="servers">
      <div class="servers-item">
        <div class="servers-item__free">
          Бесплатные сервера
        </div>
      </div>
      <div class="servers-item">
        <div class="servers-item__sub">
          Подписочный сервер
        </div>
      </div>
    </div>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in getKitItems" :key="index">
        <div class="list-item__icon">
          <img :src="item.icon" :alt="item.name">
        </div>
        <p class="list-item__name">{{ item.name }}</p>
        <p class="list-item__quantity list-item__quantity_free">{{ item.quantityFree }}</p>
        <p class="list-item__quantity list-item__quantity_sub">{{ item.quantitySub }}</p>
      </li>
    </ul>
    <div class="kit-list-buy">
      <div class="kit-list-buy__box">
        <img src="@/assets/images/box.png" alt="box">
      </div>
      <div class="kit-list-buy__price">
        <p>399 ₽</p>
        <button class="kit-list-buy__btn">Приобрести</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getKitItems() {
      return this.$store.getters.getKitItems;
    }
  }
}
</script>

<style lang="scss" scoped>
.kit-list {
  @media (max-width: 1259.98px) {
    width: 632px;
    margin: 0 auto;
  }

  @media (max-width: 632.98px) {
    width: 100%;
  }

  &-buy {
    margin-top: 32px;
    display: flex;
    align-items: flex-end;

    &__box {
      margin-right: 34px;
    }

    &__price {
      margin-bottom: 30px;

      p {
        margin-bottom: 11px;
        font-size: 50px;
        font-weight: 400;
        line-height: 59px;
        color: #fff;
      }
    }

    &__btn {
      width: 180px;
      height: 40px;
      background: #FCFF00;
      border-radius: 7px;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #000;
      text-transform: uppercase;
    }
  }
}
.servers {
  margin-bottom: 9px;
  display: flex;
  justify-content: flex-end;

  &-item {
    width: 140px;
    height: 23px;
    padding-top: 4px;
    border: 1px solid #671D007A;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    color: #671D00;

    &:not(:last-child) {
      margin-right: 11px;
    }
  }
}

.list {
  display: flex;
  flex-direction: column;

  &-item {
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid #671D007A;

    &:not(:last-child) {
      margin-bottom: 1px;
    }

    &__icon {
      width: 64px;
      height: 64px;
      margin-right: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__name {
      width: 180px;
      margin-right: 146px;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #fff;

      @media (max-width: 1259.98px) {
        margin-right: 116px;
      }
    }

    &__quantity {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #fff;
      text-align: center;

      &_free {
        margin-right: 90px;
        width: 27px;
      }

      &_sub {
        width: 72px;
      }
    }
  }
}
</style>