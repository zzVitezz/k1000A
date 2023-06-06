<template>
  <div>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <main class="main bg-lime-200">
      <div
        class="px-5 py-10 text-center text-xl font-bold lg:text-3xl lg:py-20"
      >
        Rosita 🐹
      </div>
      <button
        class="bg-amber-600 text-white rounded-full flex items-center p-2 z-10 fixed bottom-5 right-5 lg:bottom-10 lg:right-12 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-red-500 lg:duration-200"
        @click="modal = true"
      >
        <span class="material-symbols-outlined">menu</span>
      </button>
      <Teleport to="body">
        <div
          v-if="modal"
          class="fixed z-40 inset-0 overflow-y-auto bg-black bg-opacity-30 backdrop-blur"
        >
          <div
            ref="modalRef"
            class="fixed left-full lg:w-[25%] w-full h-full z-40 translate-x-[-100%] bg-white"
          >
            <section class="w-full h-full p-5 flex flex-col justify-evenly">
              <button @click="closeModal" class="flex justify-end">
                <span class="material-symbols-outlined">close</span>
              </button>
              <div
                class="flex h-full flex-col items-center justify-center gap-7"
              >
                <router-link to="/Home">
                  <span
                    class="text-xl lg:hover:underline lg:decoration-amber-600 lg:decoration-2 lg:hover:underline-offset-4"
                    >Inicio</span
                  >
                </router-link>
                <router-link to="/camila">
                  <span
                    class="text-xl lg:hover:underline lg:decoration-amber-600 lg:decoration-2 lg:hover:underline-offset-4"
                    >Camila</span
                  >
                </router-link>
                <router-link to="">
                  <span
                    class="text-xl lg:hover:underline lg:decoration-amber-600 lg:decoration-2 lg:hover:underline-offset-4"
                    >Ramona</span
                  >
                </router-link>
              </div>
            </section>
          </div>
        </div>
      </Teleport>
      <OvImageList :images="rosita"></OvImageList>
    </main>
  </div>
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
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

const modal = ref(false);
const modalRef = ref(null);

onClickOutside(modalRef, (event) => {
  modal.value = false;
});

const closeModal = () => {
  modal.value = false;
};
</script>
<style></style>
