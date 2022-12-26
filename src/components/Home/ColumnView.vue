<template>
  <section
    class="
      bg-primary-lightest
      h-[100%]
      w-[80%]
      p-6
      flex-1
      dark:bg-primary-dark dark:text-white
      duration-500
    "
  >
    <div
      class="
        flow
        flex
        space-x-4
        w-[100%]
        h-[98%]
        overflow-y-hidden overflow-x-hidden
        duration-500
        hover:overflow-y-auto hover:overflow-x-auto
      "
    >
      <OneColumn
        v-for="column in allColumns"
        :key="column.id"
        :allTasks="allTasks"
        :column="column"
        class="min-w-[20rem] max-w-[24rem] text-primary-dark-4 font-bold"
      />
      <div
        class="
          min-w-[20rem]
          max-w-[24rem]
          bg-primary-lighter
          dark:bg-primary-dark-1
          duration-500
          text-primary-dark-4
          hover:text-primary
          rounded-md
          cursor-pointer
        "
      >
        <p class="font-semibold flex items-center justify-center h-full">
          + New Column
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import { useBoardStore } from "@/stores/board";
import { useTaskStore } from "@/stores/task";
import OneColumn from "@/components/Home/Column/OneColumn.vue";
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onActivated,
} from "@vue/runtime-core";

const boardStore = useBoardStore();
const taskStore = useTaskStore();
let allTasks;
let allColumns;

onBeforeMount(() => {
  allColumns = boardStore.allColumns;
  allTasks = taskStore.allTasks;
  console.log(allColumns);
});
onBeforeUpdate(() => {
  allColumns = boardStore.allColumns;
  allTasks = taskStore.allTasks;
});
</script>

<style scoped>
.flow::-webkit-scrollbar {
  height: 0.5rem;
  width: 0.5rem;
}
.flow {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.flow::-webkit-scrollbar-thumb {
  background: rgb(136, 136, 136);
  border-radius: 2px;
}
</style>