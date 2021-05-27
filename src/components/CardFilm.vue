<template>
  <!-- dati per film -->
  <div class="film-data" v-if="typeDataCard === 'movie'">
    <p>Tipologia dato: {{ typeDataCard }}</p>
    <p>Titolo: {{ cardObject.title }}</p>
    <p>Titolo originale: {{ cardObject.original_title }}</p>
    <p>Lingua Originale: {{ cardObject.original_language }}</p>
    <p>Voto medio: {{ cardObject.vote_average }}</p>
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
};
</script>

<style lang="scss" scoped>
.film-data {
  background-color: blue;
}
</style>
