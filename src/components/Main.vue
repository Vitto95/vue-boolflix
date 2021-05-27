<template>
  <main>
    <div
      class="container-film"
      v-for="(film, index) in filteredArr"
      :key="index"
    >
      <p>{{ index }}</p>
      <p>Titolo: {{ film.title }}</p>
      <p v-if="film.title.toLowerCase() !== film.original_title.toLowerCase()">
        Titolo originale: {{ film.original_title }}
      </p>
      <p>Lingua Originale: {{ film.original_language }}</p>
      <p>Voto medio: {{ film.vote_average }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: {
    filteredArr: Array,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  background-color: lightcyan;
  .container-film {
    width: 25%;
    background-color: lightsalmon;
  }
}
</style>
