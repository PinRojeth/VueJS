const app = Vue.createApp({
  data() {
    return {
      enteredValueTask: "",
      tasks: [],
      taskListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValueTask);
      this.enteredValueTask = "";
    },
    toggleHideAndShow() {
      this.taskListVisible = !this.taskListVisible;
    },
  },
});

app.mount("#assignment");
