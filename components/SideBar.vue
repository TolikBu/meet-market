<template>
  <div class="sidebar">
    <div class="sidebar__title">Подборки Meet-Market</div>
    <div class="sidebar__cat__list">
      <div class="sidebar__cat__item">Все товары</div>
      <div class="sidebar__cat__item">Пополярные</div>
      <div class="sidebar__cat__item active">Экспресс-доставка</div>
      <div class="sidebar__cat__item">Новинки</div>
      <div class="sidebar__cat__item">Black&White</div>
      <div class="sidebar__cat__item">Зима</div>
      <div class="sidebar__cat__item">Подборка Light</div>
      <div class="sidebar__cat__item">Подборка Multicolor</div>
      <div class="sidebar__cat__item">Подборка Dark</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  
  &__title {
    font-size: 21px;
    line-height: 150%;
    color: rgba(29, 29, 32, 0.3);
    margin-bottom: 28px;
  }
  &__cat__item {
    font-size: 21px;
    line-height: 25px;
    margin-bottom: 28px;
    cursor: pointer;
    &:hover {
      color: #f4900c;
    }
  }
  .active {
    position: relative;
    color: #f4900c;
    &:before {
      position: absolute;
      content: '';
      width: 22px;
      height: 22px;
      right: 0;
      background-image: url('~static/img/emoji.svg');
    }
  }
}
</style>