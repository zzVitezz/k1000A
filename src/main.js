import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHistory } from "vue-router";
import camila from "./views/camila.vue";
import rosita from "./views/rosita.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/camila",
      name: "camila",
      component: camila,
    },
    {
      path: "/rosita",
      name: "rosita",
      component: rosita,
    },
  ],
});

createApp(App).use(router).mount("#app");
