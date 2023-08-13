<template>
  <main class="bg-kblue">
    <OvModalMenu />
    <OvImageList :images="camila"></OvImageList>
  </main>
</template>
<script setup lang="ts">

import OvModalMenu from "../components/OvModalMenu.vue";
import OvImageList from "../components/OvImageList.vue";

const camila = [
  { src: "images/k1.jpeg", caption: "Description", index: 0 },
  { src: "images/k2.jpeg", caption: "Description", index: 1 },
  { src: "images/k3.jpeg", caption: "Description", index: 2 },
  { src: "images/k4.jpeg", caption: "Description", index: 3 },
  { src: "images/k5.jpeg", caption: "Description", index: 4 },
  { src: "images/k6.jpeg", caption: "Description", index: 5 },
];
</script>
