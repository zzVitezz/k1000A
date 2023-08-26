<template>
  <main class="flex w-full h-screen lg:bg-login bg-center bg-cover">
    <div class="hidden lg:w-3/5  lg:block"></div>
    <div
      class="flex flex-col items-center justify-evenly w-full bg-white p-8 rounded-lg lg:px-16 lg:w-2/5 "
    >
      <div class="text-xl text-culqi-blue font-semibold">Ingresa tu cuenta</div>
      <div class="w-full flex flex-col gap-8">
        <OvTextField
          required
          v-model="email"
          type="email"
          label="Correo electrónico"
          placeholder="Ingresa el correo electrónico"
        ></OvTextField>
        <OvTextField
          required
          v-model="password"
          type="password"
          label="Contraseña"
          placeholder="Ingresa la contraseña"
        ></OvTextField>
      </div>
      <OvButton text="Iniciar sesión" @click="logIn()" class="w-full" />
    </div>
  </main>
</template>
<script setup lang="ts">
import OvButton from "../components/OvButton.vue";
import OvTextField from "../components/OvTextField.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = getAuth();
const email = ref("");
const password = ref("");
const logIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push({ name: "home" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
    });
};
</script>
