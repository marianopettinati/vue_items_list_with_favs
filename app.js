const app = Vue.createApp({
  data() {
    return {
      // url: "http://www.thenetninja.co.uk",
      showWorks: true,
      works: [
        {
          piece: "Mesa ratona",
          material: "Guayubira y gasa de algodón",
          img: "assets/IMG_4859.jpg",
          isFav: true,
        },
        {
          piece: "Perchero",
          material: "Paraíso",
          img: "assets/IMG_0680.jpg",
          isFav: false,
        },
        {
          piece: "Biblioteca",
          material: "Paraíso y melamina blanca",
          img: "assets/IMG_0835.jpg",
          isFav: true,
        },
      ],

      x: 0,
      y: 0,
    };
  },

  methods: {
    toggleShowWorks() {
      this.showWorks = !this.showWorks;
    },
    toggleFav(piece) {
      piece.isFav = !piece.isFav;
    },
    handleEvent(event, data) {
      console.log(event, event.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
  computed: {
    filteredPieces() {
      return this.works.filter((piece) => piece.isFav);
    },
  },
});

app.mount("#app");
