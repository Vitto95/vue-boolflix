<template>
  <main>
    <div v-for="(film, index) in filteredArr" :key="index">
      <p>Titolo {{ film.title }}</p>
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

/* Da fare: passare tramite props da App.vue l'array filtrato e mostrare a video le informazioni richieste. */
</script>

<style lang="scss" scoped></style>
