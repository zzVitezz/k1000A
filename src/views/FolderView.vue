<template>
  <OvNavBar />
  <main :class="getBackground()">
    <OvImageList :images="images"></OvImageList>
    <OvUpload :folder="folderName.toString()"/>
  </main>
</template>

<script setup lang="ts">
import OvNavBar from "../components/OvNavBar.vue";
import OvImageList from "../components/OvImageList.vue";
import OvUpload from "../components/OvUpload.vue";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const storage = getStorage();
const images = reactive([]);

const routeParams = router.currentRoute.value.params;
const folderName = routeParams.folderName;
const folderRef = ref(storage, folderName.toString());

const getBackground = () =>{
  if(folderName.toString() == 'rosita')
    return 'bg-kyellow'
  else
    return 'bg-kblue'
}

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
  .then((loadedImages) => {
    images.push(...loadedImages);
  })
  .catch((error) => {
    console.error("Error obteniendo las URLs de descarga:", error);
  });
</script>
