import { createStore } from 'vuex'

export default createStore({
  state: {
    cards_home:[
      {id: 16, name: 'Intel Xeon E5-1650v3', price:'7 758,19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 17, name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 18, name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
    ],
    cards: [
        {id: 1, name: 'Intel Xeon E5-1650v3', price:'7 758.19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 2,name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 3, name: 'AMD EPYC 7713', price:'40 518.01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 19, name: 'Intel Xeon E5-1650v3', price:'7 758.19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 4, name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 5, name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 20, name: 'Intel Xeon E5-1650v3', price:'7 758,19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 6, name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 7, name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 21, name: 'Intel Xeon E5-1650v3', price:'7 758,19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 8, name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 9, name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 22, name: 'Intel Xeon E5-1650v3', price:'7 758,19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 10, name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 11, name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 23, name: 'Intel Xeon E5-1650v3', price:'7 758,19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 12, name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 13, name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 24, name: 'Intel Xeon E5-1650v3', price:'7 758,19', cores: '6 ядер, 3.5 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},
      {id: 14, name: 'AMD Ryzen™ Threadripper™ PRO 5995WX', price:'23 309,43', cores: '64 ядер, 2.7 ГГц', memory:'128 ГБ DDR4', drive: '4 × 480 ГБ SSD SATA'},
      {id: 15, name: 'AMD EPYC 7713', price:'40 518,01', cores: '64 ядер, 3.6 ГГц', memory:'64 ГБ DDR4', drive: '2 × 480 ГБ SSD SATA'},],
    cart: [],
    searchQuery: '',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
