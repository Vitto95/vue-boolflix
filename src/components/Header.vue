<template>
  <header>
    <h1>logo che andrà a sinistra</h1>
    <form>
      <input v-model="filmToSearch" type="text" placeholder="Cerca..." />
      <button @click.prevent="getFilmToSearch">Cerca Film</button>
      <button>Cerca Serie TV</button>
    </form>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      filmToSearch: "",
    };
  },
  methods: {
    /* funzione che manda emit all'app con la stringa per filtrare i risultati, e il tipo di ricerca da fare(film, serie tv, ecc..) */
    getFilmToSearch() {
      this.$emit("getFilmToSearch", this.filmToSearch);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: lightcoral;
}
</style>
