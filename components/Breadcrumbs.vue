<template>
  <v-breadcrumbs class="breadcrumbs" :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item >
        <span :style="`color: ${item.color}`">
          {{ item.text }}
        </span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Главная",
        disabled: false,
        color: "black",
      },
      {
        text: "Кросовки",
        disabled: false,
        color: "black",
      },
     
    ],
  }),
};
</script>


<style scoped lang="scss">
.breadcrumbs {
  font-style: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  padding: 0;
  margin-bottom: 35px;
  
}
.v-breadcrumbs a {
    color: purple;
}
</style>