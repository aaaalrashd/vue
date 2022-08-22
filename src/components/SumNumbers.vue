<template>
  <!--
 implement the following tasks using Vue js :

  1- move each section to a separate Vue component.
  2- make sure the functionality is still present after splitting the sections into components.
  3- implement the Add random number button functionality.
  4- implement the Reset button functionality .

  note: you should Style/CSS the page to be more presentable.
  -->
  <div class="cneter">
    <h2>Section 2</h2>

    <a-row class="rowFlex">
      <a-col :xs="22" :sm="22" :md="12" :lg="8" :xl="6">
        <a-button type="primary" shape="circle" @click="store.increment()"
          >+1</a-button
        >
        <p>Add By one</p>
      </a-col>
      <a-col :xs="22" :sm="22" :md="12" :lg="8" :xl="6">
        <a-button type="primary" shape="circle" @click="store.incrementByTen()"
          >+10</a-button
        >
        <p>Add By ten</p>
      </a-col>
      <a-col :xs="22" :sm="22" :md="12" :lg="8" :xl="6">
        <a-button type="primary" @click="store.incrementByRandomNumber()"
          >+ 1-10</a-button
        >
        <p>Add By random from 1 to 10</p>
      </a-col>
      <a-col :xs="22" :sm="22" :md="12" :lg="8" :xl="6">
        <a-button type="primary" @click="store.reset()">Reset</a-button>
        <p>Reset to 0</p>
      </a-col>
      <br />
    </a-row>
  </div>
</template>

<script>
import { store } from "../store/store.js";

export default {
  name: "sumNumbers",
  data() {
    return {
      store,
      displayNumber: 0,
    };
  },
  methods: {
    reset() {
      this.displayNumber = 0;
    },
  },
};
</script>

<style scoped>
.cneter {
  text-align: center;
}

.rowFlex {
  padding: 0 20rem;
}

@media screen and (max-width: 1602px) {
  .rowFlex {
    padding: 0;
  }
}
</style>
