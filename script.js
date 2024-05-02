import { CardItem } from "./components/CardItem.js";

const { createApp, ref } = Vue;
const vm = createApp({
  components: {
    "card-post": CardItem,
  },
  data() {
    return {
      postList: [],
    };
  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.postList = data;
      });
    console.log("App mounted");
  },
}).mount("#app");
