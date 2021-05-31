<template>
  <header>
    <div class="container-header">
      <div class="logo-wrapper ">
        <img src="../assets/netflix-logo.png" alt="netflix-logo" />
      </div>

      <form>
        <input v-model.trim="strToSearch" type="text" placeholder="Cerca..." />
        <div class="buttons">
          <button id="btn-films" @click.prevent="getQueriesforSearch('movie')">
            Cerca Film
          </button>
          <button id="btn-series" @click.prevent="getQueriesforSearch('tv')">
            Cerca Serie TV
          </button>
        </div>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      strToSearch: "",
    };
  },
  methods: {
    /* funzione che manda emit all'app con la stringa per filtrare i risultati, e il tipo di ricerca da fare(film, serie tv, ecc..) */
    getQueriesforSearch(typeToSearch) {
      this.$emit("getQueriesToSearch", {
        text: this.strToSearch,
        type: typeToSearch,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  height: 100px;
  background-color: #141414;
}

.container-header {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.logo-wrapper > img {
  height: 80px;
}

form {
  display: flex;
  align-items: center;
  input {
    width: 300px;
    height: 35px;
    border-radius: 5px;
    padding-left: 5px;
    margin-right: 15px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    height: 35px;
    border-radius: 5px;
    margin-right: 10px;
    padding: 5px 10px;
    border: none;
  }
}

#btn-films {
  background-color: #0d6efd;
}
#btn-series {
  background-color: #dc3545;
}
</style>
