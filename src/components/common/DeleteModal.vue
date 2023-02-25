<template>
  <TheModal>
    <template #center>
      <div>
        <h2 class="text-primary-red font-bold text-2xl">{{ title }}</h2>
        <p class="mt-4">{{ content }}</p>
      </div>
      <div class="flex items-center space-x-6 my-10 justify-center">
        <button
          class="
            bg-primary-red
            hover:bg-primary-red-light
            text-white
            duration-150
            px-10
            sm:px-20
            py-4
            rounded-full
          "
          @click="$emit('delete', id)"
        >
          Delete
        </button>
        <button
          class="
            bg-primary-lightest
            hover:bg-primary-lighter
            duration-150
            px-10
            sm:px-20
            py-4
            rounded-full
            text-primary
          "
          @click="$emit('cancel')"
        >
          Cancel
        </button>
      </div>
    </template>
  </TheModal>
</template>

<script setup>
const { title, content, id } = defineProps(["title", "content", "id"]);
defineEmits(["delete", "cancel"]);
</script>