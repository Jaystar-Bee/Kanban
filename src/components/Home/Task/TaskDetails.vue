<template>
  <TheModal>
    <template #center>
      <div class="max-h-[80vh] overflow-y-auto">
        <div class="flex items-center space-x-4 justify-between mb-12">
          <h2 class="text-xl font-black">{{ task.title }}</h2>
          <div class="relative">
            <img
              src="@/assets/images/menu__dots.png"
              alt="menu"
              class="cursor-pointer"
              @click="toggleTaskOption"
            />
            <TheModal v-if="taskIsVisible" :light="true">
              <template #dropdown>
                <TaskOption />
              </template>
            </TheModal>
          </div>
        </div>
        <div class="mb-16">
          <p class="text-primary-dark-4 dark:text-primary-lighter">
            {{ task.description }}
          </p>
        </div>
        <div class="text-primary-dark-4 dark:text-primary-lighter">
          <h2 class="font-semibold mb-2">
            Subtasks ( {{ completedSubtasks() }} of {{ numberOfSubtasks() }} )
          </h2>
          <label
            v-for="subtask in task.subtasks"
            :key="subtask.id"
            :subtask="subtask"
            class="
              flex
              items-center
              space-x-6
              p-4
              dark:bg-primary-dark
              bg-primary-lightest
              dark:hover:bg-primary-dark-2
              hover:bg-primary-lighter
              cursor-pointer
              duration-300
              rounded-md
              mt-4
            "
          >
            <input type="checkbox" :checked="subtask.isDone" />
            <p :class="{ 'line-through opacity-60': subtask.isDone }">
              {{ subtask.title }}
            </p>
          </label>
        </div>
        <div class="text-primary-dark-4 dark:text-primary-lighter mt-12">
          <h2 class="font-semibold mb-6">Current Status</h2>
          <select
            name="column"
            id="column"
            class="
              w-full
              p-4
              outline-none
              rounded-md
              text-primary
              border-2 border-primary
            "
          >
            <option
              v-for="column in columns"
              :column="column"
              :key="column"
              :value="column"
            >
              {{ column }}
            </option>
          </select>
        </div>
        <div class="mt-10">
          <button class="bg-primary text-white rounded-full w-full p-4">
            Save Data
          </button>
        </div>
      </div>
    </template>
  </TheModal>
</template>

<script setup >
import TaskOption from "@/components/Home/Task/TaskOptions.vue";
import { useTaskStore } from "@/stores/task";
import { useToggle } from "@/composables/toggle";

const [taskIsVisible, toggleTaskOption, _, _2] = useToggle(false);

const taskStore = useTaskStore();
const props = defineProps(["columns"]);
const columns = props.columns;
const task = taskStore.getCurrentTask;
const numberOfSubtasks = () => {
  return task.subtasks.length;
};
const completedSubtasks = () => {
  const completedTasks = task.subtasks.filter((task) => task.isDone);
  return completedTasks.length;
};
</script>