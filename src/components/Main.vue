<template>
  <main>
    <div class="card-film-container" v-if="typeData === 'movie'">
      <CardFilm
        v-for="(objectCard, index) in filteredArrData"
        :key="index"
        :cardObject="objectCard"
        :typeDataCard="typeData"
      />
    </div>

    <div class="card-film-container" v-if="typeData === 'tv'">
      <CardSeries
        v-for="(objectCard, index) in filteredArrData"
        :key="index"
        :cardObject="objectCard"
        :typeDataCard="typeData"
      />
    </div>
  </main>
</template>

<script>
import CardFilm from "./CardFilm";
import CardSeries from "./CardSeries";

export default {
  name: "Main",
  components: {
    CardFilm,
    CardSeries,
  },
  props: {
    filteredArrData: Array,
    typeData: String,
  },
};
</script>

<style lang="scss" scoped></style>
