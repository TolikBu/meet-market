<template>
  <div class="filters">
    <div class="filters__block ml-8 mr-3 mb-8">
      <div class="filters__select" value="Бренд" v-on:click="toggleShow($event)" >
        Бренд<img
          src="~/static/img/blackbtn.svg"
          alt=""
          class="app__select__icon ml-3"
        />
      </div>
      <div
        class="filters__list"
        v-bind:class="{ active: isActive, filters__list: hasError }"
      >
        <div class="filters__check">
          <span class="filters__check__text">Выбрано:</span>
          <button class="filters__check__btn">Очистить</button>
        </div>
        <div class="filters__listitem">
          <div
            id="brand"
            name="brand"
            multiple
            :v-model="selectedBrands"
            class="filters__listitem__dinamic"
          >
            <div
              v-for="brand in getAvailableBrandFilter"
              :key="brand"
              class="filters__listitem__item"
            >
              <input type="checkbox" class="filters__list__checkbox mr-2" />
              {{ brand }}
            </div>
          </div>
          <div>
            <div
              v-for="piece in getAvailablePieceFilter"
              :key="piece"
              class="filters__listitem__text"
            >
              {{ piece }}
            </div>
          </div>
        </div>
        <button class="filters__listitem__btn">Применить</button>
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
      isActive: false,
      hasError: true,
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
    toggleShow() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  &__block {
    position: relative;
  }
  &__list {
    display: none;
    position: absolute;
    background: #fefefe;
    padding: 32px 20px 20px 20px;
    box-shadow: 0px 8px 40px rgba(52, 59, 117, 0.15);
    z-index: 99;
  }
  &__check {
    display: flex;
    justify-content: space-between;
    margin-bottom: 33px;
    &__text {
      font-size: 14px;
      line-height: 17px;
      color: #1d1d20;
    }
    &__btn {
      font-size: 14px;
      line-height: 17px;
      color: #1d1d20;
      border-bottom: 1px solid #1d1d20;
      opacity: 0.3;
    }
  }
  &__select {
    display: flex;
    justify-content: space-between;
    width: 190px;
    background: #ebebeb;
    border-radius: 6px;
    padding: 15px 22px;
    color: #000;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
  }
  &__listitem {
    width: 320px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    &__item {
      display: flex;
      margin-bottom: 36px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #1d1d20;
    }
    &__text {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 36px;
      color: rgba(29, 29, 32, 0.3);
    }
    &__btn {
      padding: 17px 0;
      width: 100%;
      background: #1d1d20;
      border-radius: 6px;
      color: #fefefe;
    }
  }
  .active {
    display: block;
  }
}
ul {
  list-style-type: none;
}
</style>


