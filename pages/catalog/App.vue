<template>
  <v-app class="component-app">
    <v-main>
      <v-container class="component-test">
        <Banner></Banner>
        <Breadcrumbs></Breadcrumbs>
        <TitleCatalog></TitleCatalog>
        <v-col class="d-flex">
          <SideBar></SideBar>
          <Card></Card>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
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

