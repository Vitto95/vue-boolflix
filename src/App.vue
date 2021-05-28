<template>
  <div id="app">
    <Header @getQueriesToSearch="getDataResearch" />
    <!-- <div>API url: {{ apiURL }}</div>
    <div>Type dato: {{ type }}</div>
    <div>url completo: {{ apiURL + type }}</div> -->
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

    <!--   <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=54"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="thid slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=53"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="fourth slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>
    </b-carousel> -->
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
      this.query = obj.text;
      this.type = obj.type;
      console.log("Arrivo dati:");
      console.log(this.query);
      console.log("Tipo dati: ");
      console.log(this.type);
      this.getData(this.query, this.type);
    },
    resetResults() {
      this.filteredResults.movie = [];
      this.filteredResults.tv = [];
    },
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
  width: 100vw;
  height: 100vh;
}
</style>
