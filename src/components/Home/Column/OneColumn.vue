<template>
  <div>
    <div class="flex items-center space-x-2 mb-10">
      <div class="w-4 h-4 rounded-full" :class="`bg-[${column.color}]`"></div>
      <h1 class="text-primary-dark-4 font-semibold">
        {{ column.name.toUpperCase() }}
      </h1>
      <p class="font-semibold">({{ tasks.length }})</p>
    </div>
    <div v-for="task in tasks" :key="task.id" :task="task">
      <div
        v-if="task.status === column.name"
        class="
          bg-white
          dark:bg-primary-dark-1 dark:text-white
          duration-500
          mt-4
          p-4
          rounded-md
        "
      >
        <h1 class="font-semibold text-black dark:text-white duration-500">
          {{ task.title }}
        </h1>
        <p class="text-primary-dark-4">1 of 3 of subtasks</p>
      </div>
    </div>
  </div>
</template>
<script setup>
/**
 * Imports
 */
import { useTaskStore } from "@/stores/task";
import { computed } from "vue";

const taskStore = useTaskStore();
const allTasks = taskStore.allTasks;
const { column } = defineProps(["column"]);
console.log(column);

const tasks = computed(() => {
  //   let columnTasks = [];
  let columnTasks = allTasks.filter((task) => {
    return task.status === column.name;
  });
  console.log(columnTasks);
  return columnTasks;
});
</script>