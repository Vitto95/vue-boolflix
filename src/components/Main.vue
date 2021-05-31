<template>
  <main>
    <div class="cards-container " v-show="typeData === 'movie'">
      <CardFilm
        v-for="(objectCard, index) in filteredArrData"
        :key="index"
        :cardObject="objectCard"
        :typeDataCard="typeData"
      />
    </div>

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
/* main {
  display: flex;
  justify-content: center; */
/*   padding: 50px; */
/*   background-color: black;
} */
/* .card-container {
  display: grid;
  grid-template-columns: repeat(5, 300px);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
 */
/* media query */
/* 
@media all and (min-width: 1024px) and (max-width: 1700px) {
  .card-container {
    grid-template-columns: repeat(4, 300px);
  }
} */

main {
  background-color: #141414;
}

.cards-container {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 500px;
  /*  column-gap: 10px; */
  row-gap: 20px;
  background-color: #141414;
}

@media all and (max-width: 1300px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
