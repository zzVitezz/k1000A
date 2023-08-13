<template>
  <div>
    <main class="bg-lime-200">
      <OvModalMenu />
      <OvImageList :images="rosita"></OvImageList>
    </main>
  </div>
</template>
<script setup lang="ts">
import OvModalMenu from "../components/OvModalMenu.vue";
import OvImageList from "../components/OvImageList.vue";

const rosita = [
  { src: "images/rata1.jpeg", caption: "Rosita comiendo", index: 0 },
  { src: "images/rata2.jpeg", caption: "Rosita tiesa", index: 1 },
  { src: "images/rata3.jpeg", caption: "Rosita observadora", index: 2 },
  { src: "images/rata4.jpeg", caption: "Rosita? xd", index: 3 },
  { src: "images/rata5.jpeg", caption: "Rosita enojada", index: 4 },
  { src: "images/rata6.jpeg", caption: "Rositacueva", index: 5 },
  { src: "images/rata7.jpeg", caption: "Rosita o.O", index: 6 },
  { src: "images/rata8.jpeg", caption: "Rosita potona", index: 7 },
  { src: "images/rata9.jpeg", caption: "Rosita", index: 8 },
  { src: "images/rata10.jpeg", caption: "Rosita", index: 9 },
];
</script>
