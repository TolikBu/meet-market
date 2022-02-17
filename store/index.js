import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [
      {
        id: 0,
        name: "Yeezy Boost",
        brand: "Ash",
        price: 1300,
        size: ["34", "35", "41", "45"],
        sex: "man"
      },
      {
        id: 1,
        name: "Nike Off White Air",
        brand: "Nike Air",
        price: 2990,
        size: ["34", "41", "45"],
        sex: "woman"
      },
      {
        id: 2,
        name: "Nike run winter+",
        brand: "Nike Air",
        price: 2190,
        size: ["34", "42", "43", "45"],
        sex: "unisex"
      }
    ]
  },
  getters: {
    getAvailableBrandFilter: (state) =>
      new Set(state.items.map((item) => item.brand)),
    getAvailablePriceFilter: (state) => ({
      minPrice: Math.min(...state.items.map((item) => item.price)),
      maxPrice: Math.max(...state.items.map((item) => item.price))
    }),
    getAvailableSizeFilter: (state) => {
      const newArr = state.items
        .map((item) => item.size)
        .reduce((acc, arr) => {
          acc = [...acc, ...arr];
          return acc;
        }, []);

      return new Set(newArr);
    }
  }
})










