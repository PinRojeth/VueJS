const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmNamed: "",
    };
  },
  methods: {
    add(num) {
      return (this.counter += num);
    },
    remove(num) {
      if (this.counter > 0) {
        return (this.counter -= num);
      }
    },
    setName(event) {
      return (this.name = event.target.value);
    },
    submitForm(e) {
      e.preventDefault();
      alert("Submited");
    },
    setConfirmNamed() {
      this.confirmNamed = this.name;
    },
  },
});

app.mount("#events");
