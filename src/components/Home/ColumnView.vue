<template>
  <CreateBoard v-if="BoardIsVisible" :edit="true" />
  <TaskDetails v-if="TaskIsVisible" :taskId="taskId" :columns="columnNames" />
  <CreateTask v-if="editTaskIsVisible" :edit="true" />
  <section
    class="bg-primary-lightest h-[100%] w-[80%] p-6 flex-1 dark:bg-primary-dark dark:text-white duration-500"
  >
    <div
      class="flow flex space-x-4 w-[100%] h-[98%] overflow-y-hidden overflow-x-hidden duration-500 hover:overflow-y-auto hover:overflow-x-auto"
    >
      <OneColumn
        v-for="column in allColumns"
        :key="column.id"
        :allTasks="allTasks"
        :column="column"
        class="min-w-[20rem] max-w-[24rem] text-primary-dark-4 font-bold"
      />
      <div
        class="min-w-[20rem] max-w-[24rem] bg-primary-lighter dark:bg-primary-dark-1 duration-500 text-primary-dark-4 hover:text-primary rounded-md cursor-pointer"
        @click="showBoard"
      >
        <p class="font-semibold flex items-center justify-center h-full">
          + New Column
        </p>
      </div>
    </div>
  </section>
</template>

<script setup >
/**
 * Imports
 */
import { useBoardStore } from "@/stores/board";
import { useTaskStore } from "@/stores/task";
import CreateBoard from "@/components/Home/Board/CreateBoard.vue";
import TaskDetails from "@/components/Home/Task/TaskDetails.vue";
import CreateTask from "@/components/Home/Task/CreateTask.vue";
import OneColumn from "@/components/Home/Column/OneColumn.vue";
import {
  onBeforeMount,
  onBeforeUpdate,
  provide,
  computed,
  onMounted,
} from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useToggle } from "@/composables/toggle";

const route = useRoute();
const boardStore = useBoardStore();
const taskStore = useTaskStore();
let allTasks;
let allColumns;
let taskId;

const closeAllModal = () => {
  hideBoard();
  hideTask();
};

const showTaskWithId = (id) => {
  taskId = id;
  taskStore.setCurrentTask(id);
  showTask();
};
const showEditTask = () => {
  closeAllModal();
  showEdit();
};

const [BoardIsVisible, _, showBoard, hideBoard] = useToggle(false);
provide("close", closeAllModal);
const [TaskIsVisible, _2, showTask, hideTask] = useToggle(false);
provide("showTask", showTaskWithId);
const [editTaskIsVisible, _3, showEdit, hideEdit] = useToggle(false);
provide("showEdit", showEditTask);

function Init() {
  boardStore.setCurrentBoard(route.params.id);
  allColumns = boardStore.allColumns;
  allTasks = taskStore.allTasks;
}
Init();
onBeforeUpdate(() => {
  Init();
  // boardStore.setCurrentBoard(route.params.id);
  // allColumns = boardStore.allColumns;
  // allTasks = taskStore.allTasks;
});

const columnNames = computed(() => {
  const names = allColumns.map((column) => column.name);
  console.log(names);
  return names;
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