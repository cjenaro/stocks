import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const startStocks = [
  {
    name: "Google",
    price: 200,
    owned: 0
  },
  {
    name: "BMW",
    price: 110,
    owned: 0
  },
  {
    name: "Apple",
    price: 250,
    owned: 0
  },
  {
    name: "Twitter",
    price: 100,
    owned: 0
  }
];

const startFunds = 10000;

const state = {
  funds: startFunds,
  stocks: [...startStocks],
  savedFunds: startFunds,
  savedStocks: [...startStocks]
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {}
});
