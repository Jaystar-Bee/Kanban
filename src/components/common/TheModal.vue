<template>
  <TheDropdown :light="light" />
  <teleport to="body">
    <div
      v-if="defaultSlot"
      class="
        bg-white
        rounded-lg
        drop-shadow-sm
        fixed
        top-[50%]
        left-[50%]
        -translate-x-1/2 -translate-y-1/2
        z-40
        p-6
      "
    >
      <slot name="center" />
    </div>
  </teleport>
  <div
    v-if="dropdownSlot"
    class="bg-white rounded-lg drop-shadow-lg absolute top-10 right-0 z-50 p-4"
  >
    <slot name="dropdown" />
  </div>
</template>


<script setup>
/**
 * Imports
 */
import { useSlots } from "vue";

/**
 * Using slots
 */
const slots = useSlots();
const dropdownSlot = slots.dropdown;
const defaultSlot = slots.center;
/**
 * Backdrop intensity
 */

const { light } = defineProps(["light"]);
</script>

<style scoped>
.body {
  transform: translate();
}
</style>