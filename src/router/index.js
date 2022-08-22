import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import sumView from "@/views/SumView.vue";
import WeatherView from "@/views/WeatherView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/sum",
    name: "sumView",
    component: sumView,
  },
  {
    path: "/weather",
    name: "WeatherView",
    component: WeatherView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
