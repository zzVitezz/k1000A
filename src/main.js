import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./index.css";
import App from "./App.vue";
import Camila from "./views/camila.vue";
import Rosita from "./views/rosita.vue";
import pruebas from "./views/pruebas.vue";
import Home from "./views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* Sirve para poner la vista home y abajo las demás con el router-view
    {
      path: "/",
      name: "Home",
      component: Home,
    },*/
    {
      path: "/camila",
      name: "Camila",
      component: Camila,
    },
    {
      path: "/rosita",
      name: "Rosita",
      component: Rosita,
    },
    {
      path: "/pruebas",
      name: "pruebas",
      component: pruebas,
    },
  ],
});

createApp(App).use(router).mount("#app");
