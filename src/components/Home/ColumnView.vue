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
      <!-- <div
        v-for="column in allColumns"
        :key="column.id"
        :column="column"
        class="min-w-[20rem] text-primary-dark-4 font-bold"
      >
        <div class="flex items-center space-x-2 mb-10">
          <div
            class="w-4 h-4 rounded-full"
            :class="`bg-[${column.color}]`"
          ></div>
          <h1 class="text-primary-dark-4 font-semibold">
            {{ column.name.toUpperCase() }}
          </h1>
          <p class="font-semibold">()</p>
        </div>
        <div v-for="task in taskStore.allTasks" :key="task.id" :task="task">
          <div
            v-if="task.status === column.name"
            class="
              bg-white
              dark:bg-primary-dark dark:text-white
              mt-4
              p-4
              rounded-md
            "
          >
            {{ task.title }}
          </div>
        </div>
      </div> -->
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