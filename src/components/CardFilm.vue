<template>
  <!-- dati per film -->
  <!-- <div v-if="typeDataCard === 'movie'"></div> -->
  <!-- <p>Tipologia dato: {{ typeDataCard }}</p> -->
  <!-- <img :src="getImageUrl(cardObject.poster_path)" alt="img" />
    <p>Titolo: {{ cardObject.title }}</p>
    <p>Titolo originale: {{ cardObject.original_title }}</p>
    <p>Lingua Originale: {{ cardObject.original_language }}</p> -->
  <!-- <p>Voto medio decimale: {{ cardObject.vote_average }}</p> -->
  <!-- <p>output stella piena</p> -->
  <!-- <i
      v-for="(number, index) in numberStars"
      :key="index"
      class="fas fa-star"
      :class="getRated(cardObject.vote_average) >= index + 1 ? 'yellow' : null"
    ></i>
    <p>******************************</p> -->

  <!-- FLIP CARD TEMPLATE -->
  <div class="flip-card" v-if="typeDataCard === 'movie'">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="getImageUrl(cardObject.poster_path)" alt="img" />
      </div>
      <div class="flip-card-back">
        <p>Titolo: {{ cardObject.title }}</p>
        <p>Titolo originale: {{ cardObject.original_title }}</p>
        <p>Lingua Originale: {{ cardObject.original_language }}</p>
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
export default {
  name: "CardFilm",
  props: {
    cardObject: Object,
    typeDataCard: String,
  },
  data() {
    return {
      baseUrl: "https://image.tmdb.org/t/p/",
      baseWidth: "w300",
      numberStars: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    getImageUrl(dinamicUrl) {
      let completeUrl = this.baseUrl + this.baseWidth + dinamicUrl;
      return completeUrl;
    },
    getRated(avg_vote) {
      let starVote = Math.ceil(avg_vote / 2);
      return starVote;
    },
  },
};
</script>

<style lang="scss" scoped>
.yellow {
  color: yellow;
}

/* FLIP CARD */
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
  img {
    width: 300px;
    height: 300px;
  }
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
