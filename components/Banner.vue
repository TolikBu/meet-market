<template>
  <v-row class="banner mx-0">
    <img class="banner__image" src="~static/img/banner.png" />
  </v-row>
</template>

<script>
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 300px;
  margin-top: 32px;
  margin-bottom: 32px;
  &__image {
    width: 100%;
  }
}
@media (max-width: 1264px) {
  .banner {
    height: 200px;
  }
}
</style>
