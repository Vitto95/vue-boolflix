<template>
  <div>
    <p>Titolo: {{ cardObject.title }}</p>
    <p
      v-if="
        cardObject.title.toLowerCase() !==
          cardObject.original_title.toLowerCase()
      "
    >
      Titolo originale: {{ cardObject.original_title }}
    </p>
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
  },
};
</script>

<style></style>
