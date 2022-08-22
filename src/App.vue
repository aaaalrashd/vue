<template>
  <div
    :style="{ 'text-align': 'center', padding: '2rem 0' }"
    id="nav"
    v-if="$route.name != 'HomeView'"
  >
    <router-link to="/">Back to Home</router-link>
  </div>
  <router-view />
</template>
