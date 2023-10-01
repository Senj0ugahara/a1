import { createStore } from 'vuex'

export default createStore({
  state: {
    kitItems: [
      {
        icon: require('../assets/images/icons/icon1.png'),
        name: 'Игровое время',
        quantityFree: '-',
        quantitySub: '30 дней'
      },
      {
        icon: require('../assets/images/icons/icon2.png'),
        name: 'Запечатанный набор инструментов',
        quantityFree: '1',
        quantitySub: '1'
      },
      {
        icon: require('../assets/images/icons/icon3.png'),
        name: 'Хрупкая чистая руна 10-й ступени',
        quantityFree: '1',
        quantitySub: '-'
      },
      {
        icon: require('../assets/images/icons/icon4.png'),
        name: 'Большой символ изобилия творца',
        quantityFree: '10',
        quantitySub: '-'
      },
      {
        icon: require('../assets/images/icons/icon5.png'),
        name: 'Мана-батарея',
        quantityFree: '-',
        quantitySub: '20'
      },
      {
        icon: require('../assets/images/icons/icon6.png'),
        name: 'Модуль памяти',
        quantityFree: '-',
        quantitySub: '10'
      },
      {
        icon: require('../assets/images/icons/icon7.png'),
        name: 'Помощник Вито',
        quantityFree: '1',
        quantitySub: '1'
      }
    ]
  },
  getters: {
    getKitItems(state) {
      return state.kitItems;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
