<template>
  <teleport to="body">
    <div
      class="flex fixed h-full w-full z-20 bg-black bg-opacity-60 top-0"
      :class="{ 'bg-opacity-0': light }"
      @click="close"
    >
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import { inject } from "vue";

const close = inject("close");

defineEmits(["close"]);

const { light } = defineProps(["light"]);
</script>