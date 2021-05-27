<template>
  <!-- dati per film -->
  <div class="film-data" v-if="typeDataCard === 'movie'">
    <p>Tipologia dato: {{ typeDataCard }}</p>
    <img :src="getImageUrl(cardObject.poster_path)" alt="img" />
    <p>Titolo: {{ cardObject.title }}</p>
    <p>Titolo originale: {{ cardObject.original_title }}</p>
    <p>Lingua Originale: {{ cardObject.original_language }}</p>
    <p>Voto medio: {{ cardObject.vote_average }}</p>
    <div>
      <p>output stella piena</p>
      <i class="fas fa-star"></i>
    </div>
    <div>
      <p>output stella vuota</p>
      <i class="far fa-star"></i>
    </div>
    <p>******************************************************</p>
  </div>
</template>

<script>
export default {
  name: "CardFilm",
  props: {
    cardObject: Object,
    typeDataCard: String,
  },
  data() {
    return {
      baseUrl: "https://image.tmdb.org/t/p/",
      baseWidth: "w300",
    };
  },
  methods: {
    getImageUrl(dinamicUrl) {
      let completeUrl = this.baseUrl + this.baseWidth + dinamicUrl;
      return completeUrl;
    },
  },
};
</script>

<style lang="scss" scoped>
.film-data {
  background-color: blue;
}
</style>
