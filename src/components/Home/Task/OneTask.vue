<template>
  <!-- v-if="task.status === column.name" -->
  <div
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
    @click="showTask(task.id)"
  >
    <h1 class="font-semibold duration-500">
      {{ task.title }}
    </h1>
    <p class="text-primary-dark-4">
      {{ completedSubtasks() }} of {{ numberOfSubtasks() }} of subtasks
    </p>
  </div>
</template>

<script setup>
import TaskDetails from "@/components/Home/Task/TaskDetails.vue";
import { useToggle } from "@/composables/toggle";
import { inject } from "@vue/runtime-core";

/**
 * Tasks
 */

const props = defineProps(["task", "column"]);
const task = props.task;
const column = props.column;

const showTask = inject("showTask");

/**
 * SubTasks
 */
const numberOfSubtasks = () => {
  return task.subtasks.length;
};
const completedSubtasks = () => {
  const taskIsCompleted = task.subtasks.filter((task) => task.isDone);
  return taskIsCompleted.length;
};
</script>