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
          rounded-md
        "
      >
        <p
          class="
            text-primary-dark-4
            font-semibold
            flex
            items-center
            justify-center
            h-full
          "
        >
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
import { useColumnStore } from "@/stores/column";
import { useTaskStore } from "@/stores/task";
import OneColumn from "@/components/Home/Column/OneColumn.vue";

const columnStore = useColumnStore();
const taskStore = useTaskStore();

const { allColumns } = columnStore;
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