<template>
  <div>
    <main class="bg-lime-200">
      <OvModalMenu />
      <OvImageList :images="rositaImages"></OvImageList>
    </main>
  </div>
</template>
<script setup lang="ts">
import OvModalMenu from "../components/OvModalMenu.vue";
import OvImageList from "../components/OvImageList.vue";
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
        caption: 'Description',
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
