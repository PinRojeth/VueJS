const app = Vue.createApp({
  data() {
    return {
      name: "Rozeth",
      age: 20,
      imageLink:
        "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2023/07/13220529/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities.jpeg",
    };
  },
  methods: {
    outputRandomNum() {
      return Math.random(1);
    },
  },
});

app.mount("#assignment");
