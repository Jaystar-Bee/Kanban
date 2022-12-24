<template>
  <textarea
    v-if="textarea"
    rows="6"
    :name="textarea__name"
    :id="textarea__name"
    :placeholder="placeholder"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="
      w-full
      px-4
      max-h-[6rem]
      py-2
      placeholder:text-primary-dark-4
      border
      outline-none
      rounded-md
      border-primary-dark-4
      dark:bg-primary-dark-1
    "
  >
  </textarea>
  <input
    v-else
    :type="type"
    :id="id"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    class="
      w-full
      px-4
      py-2
      placeholder:text-primary-dark-4
      border
      outline-none
      rounded-md
      border-primary-dark-4
      dark:bg-primary-dark-1
    "
  />
</template>

<script setup lang="ts">
const { type, modelValue, placeholder, textarea, textarea__name, id } =
  defineProps([
    "type",
    "modelValue",
    "placeholder",
    "textarea",
    "textarea__name",
    "id",
  ]);
defineEmits(["update:modelValue"]);
</script>
