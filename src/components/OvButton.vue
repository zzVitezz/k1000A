<template>
    <router-link class="ov-button" :to="to">
      <slot></slot>
    </router-link>
  </template>
  <script setup lang="ts">
  const props = defineProps({
    to: {type: String, default: "/"}
  })
  </script>
  <style scoped>
  .ov-button {
    @apply px-2 py-1 bg-amber-600 rounded-md text-white text-sm;
  }
  @media (min-width: 1024px) {
    .ov-button {
      @apply px-4 py-3 rounded-xl text-base font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500;
    }
  }
  </style>
  