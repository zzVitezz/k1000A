<template>
  <input
    ref="fileInput"
    type="file"
    style="display: none"
    accept="image/*"
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
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { ref } from "vue";

const props = defineProps({
  folder: { default: "" },
});

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
    const storage = getStorage();

    const fileRef = storageRef(storage, `${props.folder}/${file.name}`);

    try {
      await uploadBytes(fileRef, file);
      console.log("Archivo subido con éxito.");
    } catch (error) {
      console.error("Error al subir el archivo:", error);
    }
  }
};
</script>
