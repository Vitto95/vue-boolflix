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
  padding: 50px;
  background-color: black;
}
.card-container {
  /*   display: grid;
  grid-template-columns: repeat(5, 300px);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
