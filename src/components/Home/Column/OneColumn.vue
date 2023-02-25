<template>
  <div>
    <div class="flex items-center space-x-2 mb-10">
      <div
        class="w-4 h-4 rounded-full"
        :class="`bg-[${column.color.toString()}]`"
      ></div>
      <h1 class="text-primary-dark-4 font-semibold">
        {{ column.name.toUpperCase() }}
      </h1>
      <p class="font-semibold">({{ tasks.length }})</p>
    </div>
    <OneTask
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :column="column"
    />
    <!-- <div v-for="task in tasks" :key="task.id" :task="task">
      <div
        v-if="task.status === column.name"
        class="
          bg-white
          dark:bg-primary-dark-1
          duration-500
          mt-4
          p-4
          rounded-md
          text-black
          dark:text-white
          hover:text-primary
          cursor-pointer
        "
      >
        <h1 class="font-semibold duration-500">
          {{ task.title }}
        </h1>
        <p class="text-primary-dark-4">
          {{ completedSubtasks(task) }} of {{ numberOfSubtasks(task) }} of
          subtasks
        </p>
      </div>
    </div> -->
  </div>
</template>
<script setup>
/**
 * Imports
 */
// import { useTaskStore } from "@/stores/task";
import { computed } from "vue";
import OneTask from "@/components/Home/Task/OneTask.vue";
const { allTasks, column } = defineProps(["allTasks", "column"]);

const tasks = computed(() => {
  let columnTasks = allTasks.filter((task) => {
    return task.status.toLowerCase() === column.name.toLowerCase();
  });
  return columnTasks;
});

/**
 * SubTasks
 */
const numberOfSubtasks = (task) => {
  return task.subtasks.length;
};
const completedSubtasks = (task) => {
  const taskIsCompleted = task.subtasks.filter((task) => task.isDone);
  return taskIsCompleted.length;
};
</script>