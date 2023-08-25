<template>
  <div class="text-field">
    <label v-if="label" class="text-field__label"
      >{{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div
      class="text-field__input-wrapper"
      :class="[{ 'text-field__input-wrapper--focused': isFocused }]"
    >
      <input
        :type="inputType"
        :placeholder="placeholder"
        :required="required"
        class="text-field__input"
        :value="inputValue"
        @input="updateInputValue($event)"
        v-on="{
          focus,
          blur,
        }"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, computed, ref } from "vue";
const emit = defineEmits(["focus", "blur", "update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<
      string | number | null | undefined | boolean
    >,
    default: undefined,
  },
  placeholder: { type: String, default: undefined },
  label: { type: String, default: undefined },
  type: {
    type: String,
    default: "text",
    validator: (value: string) => {
      return [
        "text",
        "date",
        "number",
        "tel",
        "search",
        "url",
        "password",
        "month",
        "time",
        "week",
        "email",
      ].includes(value);
    },
  },
  required: { type: Boolean, default: false },
});

const isFocused = ref(false); // Añade la clase dinámica "text-field__input-wrapper--focused"
const hasPasswordVisible = ref(false);
const inputValue = ref(props.modelValue); // Pasa v-model al componente padre

const inputType = computed(() =>
  hasPasswordVisible.value ? "text" : props.type
);

// Actualiza el valor de isFocused cuando se hace click en el input
const focus = (event: Event) => {
  emit("focus", event);
  isFocused.value = true;
};

const blur = (event: Event) => {
  emit("blur", event);
  isFocused.value = false;
};

// Permite actualizar el valor del input
const updateInputValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  inputValue.value = value;
  emit("update:modelValue", value);
};
</script>
<style scoped>
.text-field {
  min-width: 200px;
}
.text-field__label {
  @apply text-kblue inline-block mb-2;
  font-size: 14px;
}
.text-field__input-wrapper {
  @apply border rounded-lg flex items-center;
  padding: 0 12px;
}
.text-field__input-wrapper--focused {
  @apply border rounded-lg border-kred flex;
}
.text-field__input {
  @apply w-full h-full text-kblue font-normal px-2 py-4 focus:outline-none;
}
</style>
