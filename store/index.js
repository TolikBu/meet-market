import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = () => ({
  // items должны приходить через actions (имитация запроса с сервера), тут они сразу в state для упрощения
  items: [
    {
      id: 1,
      name: "Yeezy Boost",
      brand: "Ash",
      price: 1300,
      size: ["34", "35", "41", "45"],
      sex: "man"
    },
    {
      id: 2,
      name: "Nike Off White Air",
      brand: "Nike Air",
      price: 2990,
      size: ["34", "41", "45"],
      sex: "woman"
    },
    {
      id: 3,
      name: "Nike run winter+",
      brand: "Nike Air",
      price: 2190,
      size: ["34", "42", "43", "45"],
      sex: "unisex"
    }
  ]
});

const getters = {
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
};

export default new Vuex.Store({
  state,
  getters
});



