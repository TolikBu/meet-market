<template>
  <v-app class="component-app">
    <v-main>
      <v-container class="component-test">
        <Banner></Banner>
        <v-breadcrumbs divider="/" class="breadcrumbs">
          <v-breadcrumbs-item class="breadcrumbs__item"
            >Главная /</v-breadcrumbs-item
          >
          <v-breadcrumbs-item class="breadcrumbs__item">
            Кроосовки</v-breadcrumbs-item
          >
        </v-breadcrumbs>
        <TitleCatalog></TitleCatalog>
        <SideBar></SideBar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
</script>

<style scoped lang="scss">
.component-app {
  min-width: auto;
  background: #ffffff;
  color: black;
  .component-test {
    padding: 0;
    width: 1624px;
    background: #fefefe;
    box-sizing: border-box;
  }
  .breadcrumbs {
    font-size: 16px;
    line-height: 19px;
    color: rgba(29, 29, 32, 0.3);
    padding: 0;
    margin-bottom: 35px;
    &__item {
      padding: 0;
    }
  }
}

</style>

