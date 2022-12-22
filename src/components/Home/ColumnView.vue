<template>
  <section
    class="
      bg-primary-lightest
      min-h-screen
      p-6
      flex-1
      dark:bg-primary-dark dark:text-white
      duration-500
    "
  >
    <div class="flex space-x-4 max-w-full overflow-x-scroll">
      <div
        v-for="column in allColumns"
        :key="column.id"
        :column="column"
        class="min-w-[20rem] text-primary-dark-4 font-bold"
      >
        <div class="flex items-center space-x-2">
          <div
            class="w-4 h-4 rounded-full"
            :class="`bg-[${column.color}]`"
          ></div>
          <h1 class="text-primary-dark-4 font-semibold">
            {{ column.name.toUpperCase() }}
          </h1>
          <p class="font-semibold">(3)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import { useColumnStore } from "@/stores/column";

const columnStore = useColumnStore();
const { allColumns } = columnStore;
</script>

<style scoped>
.overflow-x-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.overflow-x-scroll::-webkit-scrollbar {
  opacity: 0;
  display: none;
}
</style>