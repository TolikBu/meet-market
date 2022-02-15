<template>
  <v-container class="card__container ma-0">
    <v-row>
      <v-col v-for="card in cards" :key="card.id" class="card__wrap">
        <v-card class="card mb-10" elevation="0" outlined>
          <v-btn class="mx-2 card__like" icon color="black" @click="active">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-img height="159" :src="card.img"></v-img>
          <v-card-title class="card__title"> {{ card.title }} </v-card-title>
          <v-card-text class="pa-0">
            <p class="card__text">{{ card.description }}</p>
          </v-card-text>
          <v-row class="card__tags">
            <div class="tags1">
              {{ card.tags1 }}
            </div>
            <div class="tags2">
              {{ card.tags2 }}
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    active() {
      
    }
  },
  data: () => ({
    cards: [
      {
        id: 0,
        img: 'https://s3-alpha-sig.figma.com/img/b077/1b8a/51ccb1492e695c5ee667f9f3d3a6c076?Expires=1646006400&Signature=PxchTZN9EGBdhpwn-dEG9EWz6zO4DJgt9TxPlwlsCIKi~UQZRDVzEZIpTVmIea8wEbc3KnLIDACt~YFmFMY39huRID3F5e0y1WnCmc7S6nQLyVTPki2xp6RAhV7WG3JgNpkpYWI~HS41R07nq-l9HBvrbuoq80zAPdUST67UAbe2YfnfZldREK6Wkg7MwHtJnOLDA2QG8LPZf16n2~DLJ554A1IfBwWJ86H4MMyiETeIxmIx3oDKvY80hHZ4IGuSANI5PVxQJqywjPMZut3w6GrcQ6lfROmAfZWcLRi8~~-V-c3SXp5v2St~cGinDiCemGM7xQV6GCmeRBPQEJQaoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
        tags2: '90% рекомендуют',
      },
      {
        id: 1,
        img: '',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Экспрес-доставка',
        tags2: '',
      },
      {
        id: 2,
        img: '',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags1: '',
        tags2: '90% рекомендуют',
      },
      {
        id: 3,
        img: '',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax Flyknit White',
        tags1: '',
        tags2: '',
      },
      {
        id: 4,
        img: '',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Экспрес-доставка',
        tags2: '',
      },
      {
        id: 5,
        img: '',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
        tags2: '',
      },
      {
        id: 6,
        img: '',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags1: 'Экспрес-доставка',
        tags2: '',
      },
      {
        id: 7,
        img: '',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax Flyknit White',
        tags1: '',
        tags2: '',
      },
      {
        id: 8,
        img: '~static/img/blackshoes.jpg',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
        tags2: '90% рекомендуют',
      },
      {
        id: 9,
        img: '',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Экспрес-доставка',
        tags2: '',
      },
      {
        id: 10,
        img: '',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags1: '',
        tags2: '90% рекомендуют',
      },
      {
        id: 11,
        img: '',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax Flyknit White',
        tags1: '',
        tags2: '',
      },
      {
        id: 12,
        img: '',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Экспрес-доставка',
        tags2: '',
      },
      {
        id: 13,
        img: '',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
        tags2: '',
      },
      {
        id: 14,
        img: '',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags1: 'Экспрес-доставка',
        tags2: '',
      },
      {
        id: 15,
        img: '',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax Flyknit White',
        tags1: '',
        tags2: '',
      },
      {
        id: 16,
        img: '~static/img/blackshoes.jpg',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
        tags2: '90% рекомендуют',
      },
      {
        id: 17,
        img: '',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Экспрес-доставка',
        tags2: '',
      },
      {
        id: 18,
        img: '',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags1: '',
        tags2: '90% рекомендуют',
      },
      {
        id: 19,
        img: '',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax Flyknit White',
        tags1: '',
        tags2: '',
      },
    ],
  }),
}
</script>

<style lang="scss">
.card__container {
  width: 1248px;
  display: flex;
  flex-wrap: wrap;
  .card__wrap {
    width: 285px;
    padding: 0;
  }
}
.card {
  box-sizing: border-box;
  padding: 20px;
  width: 285px;
  min-height: 328px;
  background: #fefefe;
  color: black;
  &__title {
    padding: 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #1d1d20;
    margin: 0;
    margin-bottom: 12px;
    margin-top: 30px;
  }
  &__text {
    padding: 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #1d1d20;
    margin-bottom: 40px;
  }
  &__like {
    position: absolute;
    right: 20px;
    z-index: 10;
  }
  .tags1 {
    padding: 10px;
    font-size: 14px;
    line-height: 100%;
  }
}
</style>