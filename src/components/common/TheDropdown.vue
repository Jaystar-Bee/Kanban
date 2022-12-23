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

const closeLight = inject("closeLight");
const close = inject("close");

// let close;
// const checkIfCloseLight = () => {
//   if (inject("closeLight")) {
//     close = inject("closeLight");
//   } else {
//     close = inject("close");
//   }
//   return inject("close");
// };
// checkIfCloseLight();
const { light } = defineProps(["light"]);
</script>