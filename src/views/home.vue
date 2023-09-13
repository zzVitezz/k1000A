<template>
    <div>
      <title>OurRepository</title>
      <main class="main">
        <section class="h-screen flex flex-col items-center justify-center w-full">
          <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video
              src="/video/sunflower.mp4"
              autoplay
              muted
              loop
              class="absolute min-h-full min-w-full object-cover"
            ></video>
          </div>
          <div class="absolute h-full w-full top-0 left-0 bg-black bg-opacity-40"></div>
          <div class="z-0 flex flex-col items-center text-kwhite">
            <div class="text-x flex lg:text-5xl">Feliz Cumpleaños</div>
            <span class="text-sm mt-5">Más de 1 año juntos</span>
          </div>
        </section>
        <section class="flex flex-col px-8 justify-evenly items-center text-kblack h-screen w-full lg:px-32">
          <div class="text-xl text-center font-semibold lg:text-3xl">
            ¡Bienvenida a nuestra galería personalizada!
          </div>
          <div class="text-sm text-center lg:text-xl">
            La idea de esto es poder almacenar todas las fotos que tengas o tengamos en una página, dandole un estilo
            personalizado. Por el momento es estático pero en un futuro quiero que tú puedas subir las fotos que quieras
            así como crear álbumes para tenerlo más ordenado como por ejemplo estos que inventé.
          </div>
          <div class="flex flex-col gap-5 justify-center items-center w-full lg:flex-row lg:gap-20">
            <OvButton text="Rosita" to="/folder/rosita" />
            <OvButton text="Camila" to="/folder/camila" />
            <OvButton text="Ramona" disabled/>
          </div>
        </section>
      </main>
    </div>
  </template>
  <script setup>
  import OvButton from "../components/OvButton.vue"
  </script>