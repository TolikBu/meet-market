<template>
  <v-row class="card__block">
    <v-col class="card__component">
      <v-row class="card__list">
        <v-col v-for="card in cards" :key="card.id"  class="justify-end">
          <v-card class="card">
            <v-img :src="card.img"></v-img>
            <v-card-title> {{ card.title }} </v-card-title>
            <v-card-text>
              <p class="card__text">{{ card.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Card',

  data: () => ({
    cards: [
      {
        id: 0,
        img: '~static/img/blackshoes.png',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
      },
      {
        id: 1,
        img: '',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
      },
      {
        id: 2,
        img: '',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
      },
      {
        id: 3,
        img: '',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax Flyknit White',
      },
      {
        id: 4,
        img: '',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
      },
      {
        id: 5,
        img: '',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
      },
      {
        id: 6,
        img: '',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
      },
      {
        id: 7,
        img: '',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax Flyknit White',
      },
    ],
  }),
}
</script>

<style lang="scss">
.card__block{
  width: 1248px;
  justify-content: end;
}
.card {
  box-sizing: border-box;
  padding: 20px;
  width: 285px;
  min-height: 328px;
  background: #fefefe;
  border: 1px solid rgba(29, 29, 32, 0.1);
  border-radius: 8px;
  color: black;
  box-shadow: none;
  .card__text {
    color: black;
  }
}
</style>