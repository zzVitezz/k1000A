<template>
  <button
    class="bg-amber-600 text-white rounded-full flex items-center p-2 z-10 fixed bottom-5 right-5 lg:bottom-10 lg:right-12 lg:transition lg:hover:scale-110 lg:hover:bg-red-500"
    @click="modal = true"
  >
    <span class="material-symbols-outlined" style="font-size: 30px">menu</span>
  </button>
  <Teleport to="body">
    <div
      v-if="modal"
      class="fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur"
    >
      <div
        ref="modalRef"
        class="fixed left-full lg:w-[25%] w-full h-full z-40 translate-x-[-100%] bg-white aea"
      >
        <section class="menu">
          <button @click="closeModal" class="flex justify-end">
            <span class="material-symbols-outlined">close</span>
          </button>
          <div class="flex h-full flex-col items-center justify-center gap-7">
            <router-link to="/">
              <span class="menu-item">Inicio</span>
            </router-link>
            <router-link to="/rosita">
              <span class="menu-item">Rosita</span>
            </router-link>
            <router-link to="/camila">
              <span class="menu-item">Camila</span>
            </router-link>
            <router-link to="">
              <span class="menu-item">Ramona</span>
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const modal = ref(false);
const modalRef = ref(null);

onClickOutside(modalRef, (event) => {
  modal.value = false;
});

const closeModal = () => {
  modal.value = false;
};
</script>
<style scoped>
.menu{
  @apply w-full h-full p-5 flex flex-col justify-evenly;
}

.aea{
  animation:slide-left 0.15s linear both
}@keyframes slide-left{0%{transform:translateX(0)}200%{transform:translateX(-100px)}}
.menu-item {
  @apply text-xl lg:hover:underline lg:decoration-amber-600 lg:decoration-2 lg:hover:underline-offset-4;
}

</style>
