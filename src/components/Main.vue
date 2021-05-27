<template>
  <main>
    <CardFilm
      v-for="(objectCard, index) in filteredArrData"
      :key="index"
      :cardObject="objectCard"
    />
  </main>
</template>

<script>
import CardFilm from "./CardFilm";

export default {
  name: "Main",
  components: {
    CardFilm,
  },
  props: {
    filteredArrData: Array,
    typeData: String,
  },
};
</script>

<style lang="scss" scoped></style>
