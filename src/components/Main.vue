<template>
  <main>
    <h2 class="text-center" v-show="typeData === 'movie'">
      Film trovati: {{ filteredArrData.length }}
    </h2>
    <div class="cards-container " v-show="typeData === 'movie'">
      <CardFilm
        v-for="(objectCard, index) in filteredArrData"
        :key="index"
        :cardObject="objectCard"
        :typeDataCard="typeData"
      />
    </div>
    <h2 class="text-center" v-show="typeData === 'tv'">
      Serie trovate: {{ filteredArrData.length }}
    </h2>

    <div class="cards-container" v-show="typeData === 'tv'">
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
  background-color: #141414;
}

main h2 {
  color: white;
}

.cards-container {
  width: 90%;
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-auto-rows: minmax(500px, 75vh);
  column-gap: 10px;
  row-gap: 20px;
  background-color: #141414;
}

@media all and (max-width: 1300px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media all and (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
