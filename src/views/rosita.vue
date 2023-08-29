<template>
  <main class="bg-lime-200 px-5 pt-5">
    <OvImageList :images="rositaImages"></OvImageList>
    <OvUpload/>
  </main>
</template>
<script setup lang="ts">
import OvImageList from "../components/OvImageList.vue";
import OvUpload from "../components/OvUpload.vue";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { reactive } from "vue";

const storage = getStorage();
const rositaImages = reactive([]);
const folderRef = ref(storage, "rosita");

listAll(folderRef)
  .then((result) => {
    const promises = result.items.map((itemRef, index) => {
      return getDownloadURL(itemRef).then((url) => ({
        src: url,
        caption: "Description",
        index: index,
      }));
    });
    return Promise.all(promises);
  })
  .then((images) => {
    rositaImages.push(...images);
  })
  .catch((error) => {
    console.error("Error obteniendo las URLs de descarga:", error);
  });
</script>
