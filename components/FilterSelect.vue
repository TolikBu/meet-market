<template>
  <div class="filters">
    <div class="filters__block ml-8 mr-3 mb-8">
      <div
        class="filters__select"
        value="Бренд"
        aria-placeholder="По популярности"
      >
        Бренд<img
          src="~/static/img/blackbtn.svg"
          alt=""
          class="app__select__icon ml-3"
        />
      </div>
      <div class="filters__list">
        <div
          id="brand"
          name="brand"
          multiple
          :v-model="selectedBrands"
          class="filters__list__dinamic"
        >
          <div
            v-for="brand in getAvailableBrandFilter"
            :key="brand"
            class="filters__list__item"
          >
            <input type="checkbox" class="filters__list__checkbox mr-2" />
            {{ brand }}
          </div>
          </div>
        </div>
        <button class="filters__list__btn">Применить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'FilterSelect',
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
      'getAvailablePieceFilter',
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
    filterPiece() {
      this.filteredItems = this.items.filter((item) =>
        this.selectedPiece.includes(item.piece)
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

<style scoped lang="scss">
.filters {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  &__list {
    padding: 32px 20px 20px 20px;
    width: 320px;
    display: flex;
    flex-direction: column;
    background: #fefefe;
    box-shadow: 0px 8px 40px rgba(52, 59, 117, 0.15);
    border-radius: 10px;
    &__item {
      display: flex;
    }
  }
  &__select {
    display: flex;
    justify-content: space-between;
    width: 190px;
    background: #f3f3f3;
    border-radius: 6px;
    padding: 15px 22px;
    color: #000;
  }
}

ul {
  list-style-type: none;
}
</style>


