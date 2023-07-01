<template>
    <div class=" h-screen flex flex-col p-10">
        <section>
            <div class="container">
                <div class="mb-3">OvButton Default</div>
                <OvButton/>
            </div>
            <div class="container">
                <div class="mb-3">Variant Outline</div>
                <OvButton variant="outline"/>
            </div>
            <div class="container">
                <div class="mb-3">Variant Text</div>
                <OvButton variant="text"/>
            </div>
            <div class="container">
                <div class="mb-3">Disabled</div>
                <OvButton disabled/>
            </div>
            <div class="container">
                <div class="mb-3">Outline disabled</div>
                <OvButton variant="outline" disabled/>
            </div>
            <div class="container">
                <div class="mb-3">Size sm</div>
                <OvButton size="sm"/>
            </div>
            <div class="container">
                <div class="mb-3">Size md</div>
                <OvButton size="md"/>
            </div>
            <div class="container">
                <div class="mb-3">Size lg</div>
                <OvButton size="lg"/>
            </div>
            
        </section>
    </div>
</template>
<script setup lang="ts">
import OvButton from "../components/OvButton.vue";

</script>
<style scoped>
section{
    @apply grid grid-cols-3 gap-5 ;
}
.container{
    @apply flex flex-col items-center 
}
</style>