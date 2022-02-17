<template>
  <v-container class="card__container ma-0">
    <v-row>
      <v-col v-for="card in cards" :key="card.id" class="card__wrap">
        <v-card class="card mb-10" elevation="0" outlined>
          <v-btn class="mx-2 card__like" icon color="black" @click="active">
            <img src="~static/img/like.svg" />
          </v-btn>
          <v-img height="159" :src="card.img"></v-img>
          <v-card-title class="card__title"> {{ card.title }} </v-card-title>
          <v-card-text class="pa-0 mb-10">
            <p class="card__text">{{ card.description }}</p>
          </v-card-text>
          <v-row class="card__tags ma-0">
            <div class="tags1 mr-3" v-if="card.tags1">
              {{ card.tags1 }}
            </div>
            <div class="tags2 mr-3" v-if="card.tags2">
              {{ card.tags2 }}
            </div>
            <div class="tags3" v-if="card.tags3">
              {{ card.tags3 }}
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
    active() {},
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
        img: 'https://s3-alpha-sig.figma.com/img/ff1b/fe71/b78d685bad44242e5d20587e89a8817a?Expires=1646006400&Signature=On6et-GEP2o5FjEWp1cV20njhNGGpAw00~L4vbjCQ85Fx172R3xjBS8ZBCraKnioTlEYICwGyK4AtXvoN9ttPB3MBqaLt4wp8-dLffzsTPQniPqcwtu98vC68GMDb46BRZ545ytG1fkK4nAUWPEmOKYoD~7JU7HfHpqWBwHlzYU5a4sN0MRdVtYxLR-T2pC6DsxTVpjBQhtSn1qOlPSOv~gJT6iXspNIMM4WmeqPM~cmidohlcn9C-D~2wcbEsWWI7d5bwSS~ccyzUkNO-WZhoi~KdZgAhEq~vsVl9u1esa99GyFTz-s4bzXQdGe-QUwCiTrQuZVImuOh0IegdzhAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: '',
        tags2: '',
        tags3: 'Экспрес-доставка',
      },
      {
        id: 2,
        img: 'https://s3-alpha-sig.figma.com/img/b4d3/c1ce/e6116fef7bcb16ef1fe1f63838f979f7?Expires=1646006400&Signature=BFuTg2lzhsU0HytGsAc1UapvGrdOqMN7pNEq01o539jiySVhmJYMRE924uvlXfvRhLBuTjZR9RBep5Qxe8cxXpb2d-Fj0Z2E95RvG1tV-l4eUvNULm4CRHo8SqnzA5d4qpj6bGxG1rqcg8Dbp~8oq2i5QvcUnIHHS5s7elWVQmS39QHz0fyl48dZWFW3aLTlXcEj3kpl6NtzgJT1sLknEiekPNdFDcrloXPhJhYu8g99F5t2v~e66uSb~2u0vG-XY9wJ53cGISTOBjK8fpm9yyErSMVz6wuvsh-omh73jqEDoWIw5fas2nfaD~jvZr7S0oE0sbhR1RbGESzgOa0kXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags2: '90% рекомендуют',
      },
      {
        id: 3,
        img: 'https://s3-alpha-sig.figma.com/img/84e7/d9a5/ebe574d726b645d552438dfdca13e0ba?Expires=1646006400&Signature=VeU6UrynnpC8aNqpzaT0Jml02x3n-7dJZFRfYuMo-cqG7vwpiT2T2V8F-e0XGWzzqHuLxf08mr37aJbp3K4ZLDV26WHlEiLZ2nkc1ahqzoVYD~RNRiT64sD2k3dCpAbWCJAnH3SfPHL7vH-L9gFLa~ZLn9pdssujnMzOy4TFqlSSvMycAwxXPS3nQmRWq~HPvdCwUsuNnVDestGMeiIk75Y4aekXFJ2b0AyehThVZACSeLgMjKeyEOrWYfpmt-9ZsYvMD0AFiCeRKFMcl8dBZw3EASUH26-mtomIA7uEx4rt-~NT5cIJdgXvEoAzIeSjPGZjuomjU0vieNVeO-tSmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax',
      },
      {
        id: 4,
        img: 'https://s3-alpha-sig.figma.com/img/998a/d07b/09b2f32394dcabe9cf161cd1fc211e51?Expires=1646006400&Signature=J6u-Zr7xCZw7ebk97YHBiitMH~oCUKUFykig7a2jPcWOjBjbyq9c7O~xM37lAIFSKBdjKxKaNdQGiCSnGliP-fs3EijSogr2Czvz08tMe8uTILs4GvVTyvwwwKaFmJYUh6NHd8z7Qu95D-Df9-E6HltKhHt8LyP~Y0P7-Z9JUwMSKSyy7Bw5z-v1JRxVlxMv8kwIgwMfj2JnV6mBoe49OsLqjdfvmwJMKumVZ1dT~zMn~E9bLbvAoFGmekgPPLhhwawHD5duPCmG9m1fhC6iFJQVm5cMToorPq9UROfXK4c3LEaNXm2PGHbLShTM5q0ilg1BE3sgok6MenCgZiN6gA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags3: 'Экспрес-доставка',
      },
      {
        id: 5,
        img: 'https://s3-alpha-sig.figma.com/img/49de/29d8/c29896982b2480f5d6870934e56565d7?Expires=1646006400&Signature=B-hh1Jxz7aeaUmc8SLRo9h3qovY5EKJ0kB7mxT4lavoX5Dpi9HK99mlWV3Lecl1hJusPJ99CR4o3C1F6wNMrVxDvUbWk6zLYs483WOMl4Eb6pqRP-6yCxpy-qaCEMfOPEeumU7zd14OS4elqATFZtwu~TJze6WIdJIcdQUmdeNgyw4A2PVtuZ1sFPOrtddKpw3WEP3HIIkdrwbC1USoSFAkW19EucKJ6i~ElB4xj9chfQfVTHWenua~VY8hqjTzsiiz1e4xNoHaCMgQgn2xorCoe8LU7XNPDF5pPpZwYA~PWf-MgLHZTFgNzikd5dzX1AKn7ZBbkGK5Hfr7KH1IzeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
      },
      {
        id: 6,
        img: 'https://s3-alpha-sig.figma.com/img/1714/eaee/9a59d2c7ac56c96e5bd605e6765c79c8?Expires=1646006400&Signature=KaV5NAizWNEk2ke5WX5mVCr~QV5YNorb-qSP3RbDLxwVPYBo4R3mw8sK2oBZM-oCjS0DdoendtVXW4VaUshREKySKRxnMwHVbvB~xFlZbRvhs24-FBB1~rN0aapPm6tU9-O3vdPrpRNNNImsHhdFPmDSClSFeC0bN~SuteTDHgbhrjx6hnYbyUoQXv3uMeWz81zP5BwNKNemErB1cd1MzQv~zdFEbH11Ys9tv2BYVmiz5lRwBPOt-wzJT5b8aAN2QoduEsyd9k47vVFhhXboiXkTRxQgtNizhNqKkzmojqJUQYnN8yWJhTl4w7y3Uku0JjAX92DawhAomuAdUek9DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags3: 'Экспрес-доставка',
      },
      {
        id: 7,
        img: 'https://s3-alpha-sig.figma.com/img/a05f/9ede/6d35253d629213a0791a96915e03a79b?Expires=1646006400&Signature=K0Lj2mNW914eZxLEEgoC9QnJedjxFZnhyLDMLAAvo~rW0mVLC2DQu-ePb-d~ZQLvMAGJLPFI81uxvBHkr8mdoAXQqNUfSZrSGRZ-S4ZdzxA6~Gldf1e-75lAd2FOZDYqVh5FN1QrLmG0XmP0BOj0JUtsF0gccCpOrHo~es6R7JFmejlmOpzDA0Br0hQmn3iQBm5Qd89ejDU63W-B05ka-ar7ZgED7h4VvjJXJudUFFbtYEo0NnLhO2Z8-peWz6Y9NV1ypUVaIHSvsIIhNHmTfAc3L2vqHVae4dOxlW3S8QYv-eUlNF9hoBq1nSaYZ1RngV~0maTLDyF1teymOxf2qQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax',
      },
      {
        id: 8,
        img: 'https://s3-alpha-sig.figma.com/img/b077/1b8a/51ccb1492e695c5ee667f9f3d3a6c076?Expires=1646006400&Signature=PxchTZN9EGBdhpwn-dEG9EWz6zO4DJgt9TxPlwlsCIKi~UQZRDVzEZIpTVmIea8wEbc3KnLIDACt~YFmFMY39huRID3F5e0y1WnCmc7S6nQLyVTPki2xp6RAhV7WG3JgNpkpYWI~HS41R07nq-l9HBvrbuoq80zAPdUST67UAbe2YfnfZldREK6Wkg7MwHtJnOLDA2QG8LPZf16n2~DLJ554A1IfBwWJ86H4MMyiETeIxmIx3oDKvY80hHZ4IGuSANI5PVxQJqywjPMZut3w6GrcQ6lfROmAfZWcLRi8~~-V-c3SXp5v2St~cGinDiCemGM7xQV6GCmeRBPQEJQaoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
        tags2: '90% рекомендуют',
      },
      {
        id: 9,
        img: 'https://s3-alpha-sig.figma.com/img/ff1b/fe71/b78d685bad44242e5d20587e89a8817a?Expires=1646006400&Signature=On6et-GEP2o5FjEWp1cV20njhNGGpAw00~L4vbjCQ85Fx172R3xjBS8ZBCraKnioTlEYICwGyK4AtXvoN9ttPB3MBqaLt4wp8-dLffzsTPQniPqcwtu98vC68GMDb46BRZ545ytG1fkK4nAUWPEmOKYoD~7JU7HfHpqWBwHlzYU5a4sN0MRdVtYxLR-T2pC6DsxTVpjBQhtSn1qOlPSOv~gJT6iXspNIMM4WmeqPM~cmidohlcn9C-D~2wcbEsWWI7d5bwSS~ccyzUkNO-WZhoi~KdZgAhEq~vsVl9u1esa99GyFTz-s4bzXQdGe-QUwCiTrQuZVImuOh0IegdzhAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Экспрес-доставка',
      },
      {
        id: 10,
        img: 'https://s3-alpha-sig.figma.com/img/b4d3/c1ce/e6116fef7bcb16ef1fe1f63838f979f7?Expires=1646006400&Signature=BFuTg2lzhsU0HytGsAc1UapvGrdOqMN7pNEq01o539jiySVhmJYMRE924uvlXfvRhLBuTjZR9RBep5Qxe8cxXpb2d-Fj0Z2E95RvG1tV-l4eUvNULm4CRHo8SqnzA5d4qpj6bGxG1rqcg8Dbp~8oq2i5QvcUnIHHS5s7elWVQmS39QHz0fyl48dZWFW3aLTlXcEj3kpl6NtzgJT1sLknEiekPNdFDcrloXPhJhYu8g99F5t2v~e66uSb~2u0vG-XY9wJ53cGISTOBjK8fpm9yyErSMVz6wuvsh-omh73jqEDoWIw5fas2nfaD~jvZr7S0oE0sbhR1RbGESzgOa0kXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
      },
      {
        id: 11,
        img: 'https://s3-alpha-sig.figma.com/img/84e7/d9a5/ebe574d726b645d552438dfdca13e0ba?Expires=1646006400&Signature=VeU6UrynnpC8aNqpzaT0Jml02x3n-7dJZFRfYuMo-cqG7vwpiT2T2V8F-e0XGWzzqHuLxf08mr37aJbp3K4ZLDV26WHlEiLZ2nkc1ahqzoVYD~RNRiT64sD2k3dCpAbWCJAnH3SfPHL7vH-L9gFLa~ZLn9pdssujnMzOy4TFqlSSvMycAwxXPS3nQmRWq~HPvdCwUsuNnVDestGMeiIk75Y4aekXFJ2b0AyehThVZACSeLgMjKeyEOrWYfpmt-9ZsYvMD0AFiCeRKFMcl8dBZw3EASUH26-mtomIA7uEx4rt-~NT5cIJdgXvEoAzIeSjPGZjuomjU0vieNVeO-tSmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax',
        tags2: '90% рекомендуют',
      },
      {
        id: 12,
        img: 'https://s3-alpha-sig.figma.com/img/998a/d07b/09b2f32394dcabe9cf161cd1fc211e51?Expires=1646006400&Signature=J6u-Zr7xCZw7ebk97YHBiitMH~oCUKUFykig7a2jPcWOjBjbyq9c7O~xM37lAIFSKBdjKxKaNdQGiCSnGliP-fs3EijSogr2Czvz08tMe8uTILs4GvVTyvwwwKaFmJYUh6NHd8z7Qu95D-Df9-E6HltKhHt8LyP~Y0P7-Z9JUwMSKSyy7Bw5z-v1JRxVlxMv8kwIgwMfj2JnV6mBoe49OsLqjdfvmwJMKumVZ1dT~zMn~E9bLbvAoFGmekgPPLhhwawHD5duPCmG9m1fhC6iFJQVm5cMToorPq9UROfXK4c3LEaNXm2PGHbLShTM5q0ilg1BE3sgok6MenCgZiN6gA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags3: 'Экспрес-доставка',
      },
      {
        id: 13,
        img: 'https://s3-alpha-sig.figma.com/img/49de/29d8/c29896982b2480f5d6870934e56565d7?Expires=1646006400&Signature=B-hh1Jxz7aeaUmc8SLRo9h3qovY5EKJ0kB7mxT4lavoX5Dpi9HK99mlWV3Lecl1hJusPJ99CR4o3C1F6wNMrVxDvUbWk6zLYs483WOMl4Eb6pqRP-6yCxpy-qaCEMfOPEeumU7zd14OS4elqATFZtwu~TJze6WIdJIcdQUmdeNgyw4A2PVtuZ1sFPOrtddKpw3WEP3HIIkdrwbC1USoSFAkW19EucKJ6i~ElB4xj9chfQfVTHWenua~VY8hqjTzsiiz1e4xNoHaCMgQgn2xorCoe8LU7XNPDF5pPpZwYA~PWf-MgLHZTFgNzikd5dzX1AKn7ZBbkGK5Hfr7KH1IzeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
      },
      {
        id: 14,
        img: 'https://s3-alpha-sig.figma.com/img/1714/eaee/9a59d2c7ac56c96e5bd605e6765c79c8?Expires=1646006400&Signature=KaV5NAizWNEk2ke5WX5mVCr~QV5YNorb-qSP3RbDLxwVPYBo4R3mw8sK2oBZM-oCjS0DdoendtVXW4VaUshREKySKRxnMwHVbvB~xFlZbRvhs24-FBB1~rN0aapPm6tU9-O3vdPrpRNNNImsHhdFPmDSClSFeC0bN~SuteTDHgbhrjx6hnYbyUoQXv3uMeWz81zP5BwNKNemErB1cd1MzQv~zdFEbH11Ys9tv2BYVmiz5lRwBPOt-wzJT5b8aAN2QoduEsyd9k47vVFhhXboiXkTRxQgtNizhNqKkzmojqJUQYnN8yWJhTl4w7y3Uku0JjAX92DawhAomuAdUek9DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
        tags3: 'Экспрес-доставка',
      },
      {
        id: 15,
        img: 'https://s3-alpha-sig.figma.com/img/a05f/9ede/6d35253d629213a0791a96915e03a79b?Expires=1646006400&Signature=K0Lj2mNW914eZxLEEgoC9QnJedjxFZnhyLDMLAAvo~rW0mVLC2DQu-ePb-d~ZQLvMAGJLPFI81uxvBHkr8mdoAXQqNUfSZrSGRZ-S4ZdzxA6~Gldf1e-75lAd2FOZDYqVh5FN1QrLmG0XmP0BOj0JUtsF0gccCpOrHo~es6R7JFmejlmOpzDA0Br0hQmn3iQBm5Qd89ejDU63W-B05ka-ar7ZgED7h4VvjJXJudUFFbtYEo0NnLhO2Z8-peWz6Y9NV1ypUVaIHSvsIIhNHmTfAc3L2vqHVae4dOxlW3S8QYv-eUlNF9hoBq1nSaYZ1RngV~0maTLDyF1teymOxf2qQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax',
      },
      {
        id: 16,
        img: 'https://s3-alpha-sig.figma.com/img/b077/1b8a/51ccb1492e695c5ee667f9f3d3a6c076?Expires=1646006400&Signature=PxchTZN9EGBdhpwn-dEG9EWz6zO4DJgt9TxPlwlsCIKi~UQZRDVzEZIpTVmIea8wEbc3KnLIDACt~YFmFMY39huRID3F5e0y1WnCmc7S6nQLyVTPki2xp6RAhV7WG3JgNpkpYWI~HS41R07nq-l9HBvrbuoq80zAPdUST67UAbe2YfnfZldREK6Wkg7MwHtJnOLDA2QG8LPZf16n2~DLJ554A1IfBwWJ86H4MMyiETeIxmIx3oDKvY80hHZ4IGuSANI5PVxQJqywjPMZut3w6GrcQ6lfROmAfZWcLRi8~~-V-c3SXp5v2St~cGinDiCemGM7xQV6GCmeRBPQEJQaoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags1: 'Новика',
        tags2: '90% рекомендуют',
      },
      {
        id: 14,
        img: 'https://s3-alpha-sig.figma.com/img/ff1b/fe71/b78d685bad44242e5d20587e89a8817a?Expires=1646006400&Signature=On6et-GEP2o5FjEWp1cV20njhNGGpAw00~L4vbjCQ85Fx172R3xjBS8ZBCraKnioTlEYICwGyK4AtXvoN9ttPB3MBqaLt4wp8-dLffzsTPQniPqcwtu98vC68GMDb46BRZ545ytG1fkK4nAUWPEmOKYoD~7JU7HfHpqWBwHlzYU5a4sN0MRdVtYxLR-T2pC6DsxTVpjBQhtSn1qOlPSOv~gJT6iXspNIMM4WmeqPM~cmidohlcn9C-D~2wcbEsWWI7d5bwSS~ccyzUkNO-WZhoi~KdZgAhEq~vsVl9u1esa99GyFTz-s4bzXQdGe-QUwCiTrQuZVImuOh0IegdzhAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '7 323 руб.',
        description: 'Yeezy Boost 350 V2 Ash Pearl',
        tags3: 'Экспрес-доставка',
      },
      {
        id: 18,
        img: 'https://s3-alpha-sig.figma.com/img/b4d3/c1ce/e6116fef7bcb16ef1fe1f63838f979f7?Expires=1646006400&Signature=BFuTg2lzhsU0HytGsAc1UapvGrdOqMN7pNEq01o539jiySVhmJYMRE924uvlXfvRhLBuTjZR9RBep5Qxe8cxXpb2d-Fj0Z2E95RvG1tV-l4eUvNULm4CRHo8SqnzA5d4qpj6bGxG1rqcg8Dbp~8oq2i5QvcUnIHHS5s7elWVQmS39QHz0fyl48dZWFW3aLTlXcEj3kpl6NtzgJT1sLknEiekPNdFDcrloXPhJhYu8g99F5t2v~e66uSb~2u0vG-XY9wJ53cGISTOBjK8fpm9yyErSMVz6wuvsh-omh73jqEDoWIw5fas2nfaD~jvZr7S0oE0sbhR1RbGESzgOa0kXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '22 420 руб.',
        description: 'Nike AJ I 1 Retro High "Tie Dye"',
      },
      {
        id: 19,
        img: 'https://s3-alpha-sig.figma.com/img/84e7/d9a5/ebe574d726b645d552438dfdca13e0ba?Expires=1646006400&Signature=VeU6UrynnpC8aNqpzaT0Jml02x3n-7dJZFRfYuMo-cqG7vwpiT2T2V8F-e0XGWzzqHuLxf08mr37aJbp3K4ZLDV26WHlEiLZ2nkc1ahqzoVYD~RNRiT64sD2k3dCpAbWCJAnH3SfPHL7vH-L9gFLa~ZLn9pdssujnMzOy4TFqlSSvMycAwxXPS3nQmRWq~HPvdCwUsuNnVDestGMeiIk75Y4aekXFJ2b0AyehThVZACSeLgMjKeyEOrWYfpmt-9ZsYvMD0AFiCeRKFMcl8dBZw3EASUH26-mtomIA7uEx4rt-~NT5cIJdgXvEoAzIeSjPGZjuomjU0vieNVeO-tSmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: '13 566 руб.',
        description: 'Nike Off White Air VaporMax',
        tags2: '90% рекомендуют',
      },
    ],
  }),
}
</script>

<style lang="scss">
.card__container {
  max-width: 1248px;
  display: flex;
  flex-wrap: wrap;
  .card__wrap {
    display: flex;
    justify-content: end;
    padding: 0;
  }
}
.card {
  box-sizing: border-box;
  padding: 20px;
  width: 285px;
  min-height: 365px;
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
  }
  &__like {
    position: absolute;
    right: 20px;
    z-index: 10;
  }
}
.tags1 {
  color: #ffffff;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
  line-height: 100%;
  background: #84a2fc;
  border-radius: 4px;
}
.tags2 {
  color: #ffffff;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
  line-height: 100%;
  background: #7cd010;
  border-radius: 4px;
}
.tags3 {
  color: #ffffff;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
  line-height: 100%;
  background: #ea7373;
  border-radius: 4px;
  
}
</style>