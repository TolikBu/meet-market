const state = () => ({
  items: [
    {
      id: 0,
      name: "Yeezy Boost",
      brand: "Timberland",
      price: 1300,
      size: ["34", "35", "41", "45"],
      sex: "man",
      piece: 33
    },
    {
      id: 1,
      name: "Nike Off White Air",
      brand: "Nike Air",
      price: 2990,
      size: ["34", "41", "45"],
      sex: "woman",
      piece: 22
    },
    {
      id: 2,
      name: "Nike run winter+",
      brand: "Nike",
      price: 2190,
      size: ["34", "42", "43", "45"],
      sex: "unisex",
      piece: 23
    },
    {
      id: 3,
      name: "Nike run winter+",
      brand: "Adidas",
      price: 2190,
      size: ["34", "42", "43", "45"],
      sex: "unisex",
      piece: 77
    },
    {
      id: 4,
      name: "Nike run winter+",
      brand: "Puma",
      price: 2190,
      size: ["34", "42", "43", "45"],
      sex: "unisex",
      piece: 63
    }
  ],
  
})

const getters = {
  getAvailableBrandFilter: (state) =>
    new Set(state.items.map((item) => item.brand)),
  getAvailablePieceFilter: (state) =>
    new Set(state.items.map((item) => item.piece)),
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

export default { state, getters }










