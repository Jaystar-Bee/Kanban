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
    <div class="flex space-x-4">
      <OneColumn
        v-for="column in allColumns"
        :key="column.id"
        :column="column"
        class="min-w-[20rem] text-primary-dark-4 font-bold"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import { useColumnStore } from "@/stores/column";
import { useTaskStore } from "@/stores/task";
import OneColumn from "@/components/Home/Column/OneColumn.vue";

const columnStore = useColumnStore();
const taskStore = useTaskStore();

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