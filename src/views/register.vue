<template>
  <main
    class="flex flex-col items-center justify-center py-8 w-full h-screen px-8 lg:px-32"
  >
    <div
      class="flex flex-col items-center rounded-lg p-0 w-[250px] md:w-[500px] lg:w-[500px] gap-16"
    >
      <div class="text-xl text-culqi-blue font-semibold">Registrate</div>
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
      <OvButton text="Iniciar sesión" @click="her()" class="w-full" />
    </div>
  </main>
</template>
<script setup lang="ts">
import OvButton from "../components/OvButton.vue";
import OvTextField from "../components/OvTextField.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const auth = getAuth();
const email = ref("");
const password = ref("");
const her = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
    });
};
</script>
