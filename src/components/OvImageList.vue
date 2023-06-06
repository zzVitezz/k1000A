<template>
    <div class="image--list">
      <button
        class="item"
        v-for="image in images"
        @click="obtenerSrcImagen(image.index)"
      >
        <div class="item__img">
          <img ref="imagen" :src="image.src" class="w-full"/>
        </div>
        <div class="item__label">
          <span> {{ image.caption }} </span>
          <span class="material-symbols-outlined"> favorite </span>
        </div>
      </button>
      <Teleport to="body">
        <div
          v-if="modal"
          class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-30 backdrop-blur"
        >
          <div
            ref="modalRef"
            class="fixed left-1/2 top-1/2 w-fit h-fit z-40 translate-y-[-50%] translate-x-[-50%] bg-white rounded-md"
          >
            <section class="p-5 flex justify-center">
              <div class="">
                <img :src="srcImagen" class="max-h-[80vh]"/>
              </div>
            </section>
          </div>
        </div>
      </Teleport>
    </div>
  </template>
  <script setup>
  import { onClickOutside } from "@vueuse/core";
  import {ref} from "vue";
  const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
  });
  
  const modal = ref(false);
  const modalRef = ref(null);
  const imagen = ref(null);
  const srcImagen = ref('');
  
  onClickOutside(modalRef, (event) => {
    modal.value = false;
  });
  
  const obtenerSrcImagen = (index) =>{
    if(imagen.value){
      modal.value = true
      srcImagen.value = imagen.value[index].$el.getAttribute('src').slice(8);
    }
  }
  </script>
  <style scoped>
  .image--list {
    @apply min-w-full gap-5 px-5 columns-2 lg:px-10 lg:columns-3;
  }
  .item {
    @apply relative w-full;
  }
  .item__img {
    @apply w-full;
  }
  .item__label {
    @apply hidden lg:absolute lg:bottom-0 lg:text-white lg:w-full lg:p-3 lg:flex lg:justify-between;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .item:hover .item__label {
    @apply bg-black;
  }
  </style>
  