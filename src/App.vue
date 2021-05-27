<template>
  <div id="app">
    <Header @getFilmToSearch="getTitleFilm" />
    <Main :filteredArr="filteredArrFilms" />
    <div>{{ query }}</div>
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
      apiURL: "https://api.themoviedb.org/3/search/movie",
      apiKey: "dc976da41141e1736442fc8a7c438e96",
      query: "",
      /* variabile per emit search in Header.vue */
      filteredArrFilms: [],
    };
  },
  methods: {
    getTitleFilm(text) {
      this.query = text;
      console.log("Arrivo dati:");
      console.log(this.query);
      this.getData();
    },
    getData() {
      axios
        .get(this.apiURL, {
          params: {
            api_key: this.apiKey,
            query: this.query,
            language: "it-IT",
          },
        })
        .then((resp) => {
          console.log("risposta corretta:");
          console.log(resp.data);
          console.log("Dati effettivi: ");
          console.log(resp.data.results);
          this.filteredArrFilms = resp.data.results.filter((item) =>
            item.title.toLowerCase().includes(this.query.toLowerCase())
          );
          console.log("Array Filtrato: ");
          console.log(this.filteredArrFilms);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
