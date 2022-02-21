<template>
  <v-main>
    <h1>Домашняя страница</h1>
    <NuxtLink to="/catalog/test/app">
      Нажать для перехода в каталог
    </NuxtLink>
  </v-main>
</template>

<script>
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
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
}
</style>

