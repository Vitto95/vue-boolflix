<template>
  <header>
    <h1>logo che andrà a sinistra</h1>
    <form>
      <input v-model="filmToSearch" type="text" placeholder="Cerca..." />
      <button @click.prevent="getFilmToSearch">Cerca</button>
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
