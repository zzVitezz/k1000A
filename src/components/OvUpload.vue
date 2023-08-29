<template>
  <input
    ref="fileInput"
    type="file"
    style="display: none"
    @change="handleFileInputChange"
  />
  <OvButton
    class="z-10 fixed bottom-5 right-5 lg:bottom-10 lg:right-12"
    disableShadow
    icon="upload"
    text="Subir imagen"
    variant="outline"
    @click="openFileInput"
  />
</template>
<script setup lang="ts">
import OvButton from "./OvButton.vue";
import { ref } from "vue";

const fileInput = ref<HTMLInputElement | null>(null);

const openFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const handleFileInputChange = async (event) => {
  const target = event.target;
  const file = target.files[0];

  if (file) {
    // Aquí puedes realizar acciones con el archivo seleccionado si es necesario
  }
};
</script>
