<template>
  <!-- FLIP CARD TEMPLATE -->

  <div class="flip-card" v-if="typeDataCard === 'movie'">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="getImageUrl(cardObject.poster_path)" alt="img" />
      </div>
      <div class="flip-card-back">
        <p>Titolo: {{ cardObject.title }}</p>
        <p>Titolo originale: {{ cardObject.original_title }}</p>
        <p>
          Lingua Originale:
          <country-flag :country="cardObject.original_language" size="small" />
        </p>
        <i
          v-for="(number, index) in numberStars"
          :key="index"
          class="fas fa-star"
          :class="
            getRated(cardObject.vote_average) >= index + 1 ? 'yellow' : null
          "
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  name: "CardFilm",
  components: {
    CountryFlag,
  },
  props: {
    cardObject: Object,
    typeDataCard: String,
  },
  data() {
    return {
      baseUrl: "https://image.tmdb.org/t/p/",
      baseWidth: "w300",
      numberStars: [1, 2, 3, 4, 5],
      noImage:
        "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png",
    };
  },
  methods: {
    getImageUrl(dinamicUrl) {
      if (dinamicUrl != null) {
        let completeUrl = this.baseUrl + this.baseWidth + dinamicUrl;
        return completeUrl;
      } else {
        console.log("no immagine: ", this.noImage);
        let alternativeImage = this.noImage;
        console.log("url completo no immagine: ", alternativeImage);
        return alternativeImage;
      }
    },
    getRated(avg_vote) {
      let starVote = Math.ceil(avg_vote / 2);
      return starVote;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/card.scss";
</style>
