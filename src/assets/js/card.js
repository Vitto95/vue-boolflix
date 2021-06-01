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
