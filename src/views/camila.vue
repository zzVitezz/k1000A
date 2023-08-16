<template>
  <main class="bg-kblue">
    <OvModalMenu />
    <OvImageList :images="camilaImages"></OvImageList>
  </main>
</template>
<script setup lang="ts">
import OvModalMenu from "../components/OvModalMenu.vue";
import OvImageList from "../components/OvImageList.vue";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { reactive } from "vue";

const storage = getStorage();
const camilaImages = reactive([]);
const folderRef = ref(storage, "camila");

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
    camilaImages.push(...images);
  })
  .catch((error) => {
    console.error("Error obteniendo las URLs de descarga:", error);
  });

</script>
