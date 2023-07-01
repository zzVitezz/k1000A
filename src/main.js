import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHistory } from "vue-router";
import camila from "./views/camila.vue";
import rosita from "./views/rosita.vue";
import pruebas from "./views/pruebas.vue";

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
    {
      path: "/pruebas",
      name: "pruebas",
      component: pruebas,
    },
  ],
});

createApp(App).use(router).mount("#app");
