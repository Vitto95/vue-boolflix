<template>
  <!-- Dati per serie tv -->
  <div class="tv-data" v-if="typeDataCard === 'tv'">
    <p>Tipologia dato: {{ typeDataCard }}</p>
    <img :src="getImageUrl(cardObject.poster_path)" alt="img" />
    <p>Titolo serie: {{ cardObject.name }}</p>
    <p>Lingua Originale: {{ cardObject.original_language }}</p>
    <p>Voto medio: {{ cardObject.vote_average }}</p>
    <p>******************************************************</p>
    <span class="flag-icon flag-icon-gr"></span>
  </div>
</template>

<script>
export default {
  name: "CardSeries",
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
.tv-data {
  background-color: red;
}
</style>
