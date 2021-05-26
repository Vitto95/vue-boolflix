<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      axios,
      apiURL: "https://api.themoviedb.org/3/search/movie",
      apiKey: "dc976da41141e1736442fc8a7c438e96",
      query: "ritorno al futuro",
    };
  },
  created() {
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
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
}
</style>
