import "./styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "home", component: HomePage }]
});

createApp(App).use(createPinia()).use(router).mount("#app");
