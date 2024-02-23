const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    // counter(value) {
    //   if (value > 37) {
    //     const that = this;
    //     setTimeout(function(){
    //       that.counter = 0
    //     },5000)
    //   }
    // }
    // In short
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return `Not yet there`;
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return `Too Much!!!`;
      }
    },
  },
  methods: {
    btnAdd(num) {
      this.counter = this.counter + num;
      console.log(this.counter);

    },
  },
});

app.mount("#assignment");
