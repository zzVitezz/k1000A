import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "./index.css";
import App from "./App.vue";
import camila from "./views/camila.vue";
import rosita from "./views/rosita.vue";
import pruebas from "./views/pruebas.vue";
import home from "./views/Home.vue";
import register from "./views/register.vue";

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
    {
      path: "/register",
      name: "register",
      component: register,
    },
  ],
});

const firebaseConfig = {
  apiKey: "AIzaSyATtYMzHI__ToxLdUCkl-eVxoHnG7hCAgM",
  authDomain: "k1000a-gallery.firebaseapp.com",
  projectId: "k1000a-gallery",
  storageBucket: "k1000a-gallery.appspot.com",
  messagingSenderId: "642060980020",
  appId: "1:642060980020:web:eeaf157be9379392cadf61",
  measurementId: "G-GFT0BQX627"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

createApp(App)
  .use(router)
  .provide("auth", auth) 
  .mount("#app");



