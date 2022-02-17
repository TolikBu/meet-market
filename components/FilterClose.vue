<template >
  <div class="ml-8 mb-9 d-flex">
    <div class="filter mr-3 d-flex">
      <div class="filter__text">Очистить&nbspвсё</div>
      <img src="~static/img/filterclose.svg" alt="" class="filter__close" />
    </div>
    <div class="filter mr-3 d-flex">
      <div class="filter__text">Новинки</div>
      <img src="~static/img/filterclose.svg" alt="" class="filter__close" />
    </div>
    <div class="filter mr-3 d-flex">
      <div class="filter__text">Кросовки</div>
      <img src="~static/img/filterclose.svg" alt="" class="filter__close" />
    </div>
    <div class="filter mr-3 d-flex">
      <div class="filter__text">Nike</div>
      <img src="~static/img/filterclose.svg" alt="" class="filter__close" />
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.filter {
  padding: 11px 22px;
  border: 1px solid rgba(29, 29, 32, 0.1);
  box-sizing: border-box;
  border-radius: 32px;
  cursor: pointer;
  &:hover{
    border: 1px solid #84A2FC;
  }
  &__text {
    display: inline-block;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    color: #1d1d20;
    margin-right: 22px;
  }
}
</style>
