<template>
  <v-app id="app" class="component-app">
    <v-main>
      <v-container class="component-test">
        <Banner />
        <Breadcrumbs />
        <TitleCatalog />
      </v-container>
      <v-container class="component-test">
        <v-col class="d-flex pa-0 justify-space-between">
          <SideBar />
          <div>
            <FilterSelect />
            <FilterClose />
            <Card />
          </div>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FilterSelect from '@/components/FilterSelect'

export default {
  name: 'App',
  components: {
    FilterSelect,
  },
}
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