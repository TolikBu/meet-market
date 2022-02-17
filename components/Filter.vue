<template>
  <div class="filters">
    <ul class="filters__list">
      <li>
        <select
          class="filters__item"
          id="brand"
          name="brand"
          multiple
          v-model="selectedBrands"
        >
          <option disabled>Brand</option>
          <option v-for="brand in getAvailableBrandFilter" :key="brand">
            {{ brand }}
          </option>
        </select>
        <button @click="filterBrand">Применить</button>
      </li>
      <hr />
      <li>
        <div id="price">
          <input type="number" v-model="minPrice" /> -
          <input type="number" v-model="maxPrice" />
        </div>
        <button @click="filterPrice">Применить</button>
      </li>
      <hr />
      <li>
        <select name="size" id="size" v-model="selectedSize">
          <option disabled>Size</option>
          <option
            :value="size"
            v-for="size in getAvailableSizeFilter"
            :key="size"
          >
            {{ size }}
          </option>
        </select>
        <button @click="filterSize">Применить</button>
      </li>
    </ul>

    <div class="data">
      <ul>
        <li
          v-for="item in filteredItems"
          :key="item.id"
          style="border: 1px solid limegreen"
        >
          {{ item.title }} - {{ item.brand }}
          <br />
          {{ item.size }} - {{ item.sex }} - {{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Filter',
  data() {
    return {
      selectedBrands: [],
      minPrice: 0,
      maxPrice: null,
      selectedSize: null,
      filteredItems: [],
    }
  },
  computed: {
    ...mapGetters([
      'getAvailableBrandFilter',
      'getAvailablePriceFilter',
      'getAvailableSizeFilter',
    ]),
    ...mapState(['items']),
  },
  created() {
    this.maxPrice = this.getAvailablePriceFilter.maxPrice
    this.filteredItems = this.items
  },
  methods: {
    filterBrand() {
      this.filteredItems = this.items.filter((item) =>
        this.selectedBrands.includes(item.brand)
      )
    },
    // на вход передается 2 цены - минимальная и максимальная
    // если выбран селект, где цена, например, до 3000, то минимальную цену передать как ноль
    filterPrice() {
      this.filteredItems = this.items.filter(
        (item) => item.price <= this.maxPrice && item.price >= this.minPrice
      )
    },
    filterSize() {
      this.filteredItems = this.items.filter((item) =>
        item.size.includes(this.selectedSize)
      )
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filters {
  width: 1000px;
  height: 100px;
  display: flex;
  &__item {
    width: 190px;
    background: #fff;
    border: 1px solid black;
    border-radius: 6px;
    padding: 15px 22px;
  }
}
</style>


// ul {
//   list-style-type: none;
// }