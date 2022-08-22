<script>
import { store } from "../store/store.js";

export default {
  name: "displayNumber",
  props: ["displayNumber"],
  data() {
    return {
      store,
      counter: this.displayNumber,
    };
  },
};
</script>

<template>
  <div class="center">
    <h2>Section 1</h2>
    <h1>
      Sum Value = <strong>{{ store.count }}</strong>
    </h1>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}
</style>
