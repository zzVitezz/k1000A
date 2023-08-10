import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./index.css";
import App from "./App.vue";
import camila from "./views/camila.vue";
import rosita from "./views/rosita.vue";
import pruebas from "./views/pruebas.vue";
import home from "./views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
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
