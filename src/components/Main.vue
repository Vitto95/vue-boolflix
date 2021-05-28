<template>
  <main>
    <div class="card-container" v-show="typeData === 'movie'">
      <CardFilm
        v-for="(objectCard, index) in filteredArrData"
        :key="index"
        :cardObject="objectCard"
        :typeDataCard="typeData"
      />
    </div>

    <div class="card-container" v-show="typeData === 'tv'">
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

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  /*   padding: 50px; */
  background-color: black;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 300px);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

/* media query */

@media all and (min-width: 1024px) and (max-width: 1700px) {
  .card-container {
    grid-template-columns: repeat(4, 300px);
  }
}
</style>
