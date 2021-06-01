<template>
  <div id="app">
    <Header @getQueriesToSearch="getDataResearch" />
    <Main
      v-if="filteredResults.movie.length > 0"
      :filteredArrData="filteredResults.movie"
      :typeData="type"
    />
    <Main
      v-if="filteredResults.tv.length > 0"
      :filteredArrData="filteredResults.tv"
      :typeData="type"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      /* variabili per chiamata API */
      apiURL: "https://api.themoviedb.org/3/search/",
      apiKey: "dc976da41141e1736442fc8a7c438e96",
      query: "",
      type: "",
      /* variabile per emit search in Header.vue */
      filteredResults: {
        movie: [],
        tv: [],
      },
    };
  },
  methods: {
    getDataResearch(obj) {
      this.resetResults();
      this.query = "";
      this.type = "";
      this.query = obj.text; /* Valore ottenuto da v-model */
      this.type = obj.type;
      console.log("Arrivo dati:");
      console.log(this.query);
      console.log("Tipo dati: ");
      console.log(this.type);
      this.getData(this.query, this.type);
    },
    resetResults() {
      /* funzione per resettare gli array con i risultati della chiamata */
      this.filteredResults.movie = [];
      this.filteredResults.tv = [];
    },
    /* Funzione per chiamata API */
    /* queryP ---> parametro */
    getData(queryP, type) {
      console.log("type in arrivo: ", type);
      if (queryP !== "") {
        axios
          .get(this.apiURL + type, {
            params: {
              api_key: this.apiKey,
              query: this.query,
              language: "it-IT",
            },
          })
          .then((resp) => {
            console.log("Dati effettivi in chiamata API: ");
            console.log(resp.data.results);
            this.filteredResults[type] = resp.data.results;
            console.log("Dati filtrati in chiamata API:");
            console.log(this.filteredResults[type]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  min-width: 700px;
  background-color: #141414;
}
</style>
