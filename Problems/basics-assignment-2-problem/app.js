const app = Vue.createApp({
  data() {
    return {
      display1: "",
      display2: "",
    };
  },
  methods: {
    showAlert() {
      return alert(`Hi ${this.display1}`);
    },
    inputDisplay(event) {
      this.display1 = event.target.value;
    },
    confirmInput(e) {
      this.display2 = e.target.value;
    },
  },
});

app.mount("#assignment");
