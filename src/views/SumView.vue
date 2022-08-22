<script setup>
import SumNumbers from "../components/SumNumbers.vue";
import DisplayNumbers from "../components/DisplayNumbers.vue";
</script>

<template>
  <main class="center">
    <DisplayNumbers />
    <SumNumbers />
  </main>
</template>

<style scoped>
.center {
  align-content: center;
  display: grid;
  padding-top: 8rem;
}

@media screen and (max-width: 720px) {
  .center {
    padding: unset;
  }
}
</style>
