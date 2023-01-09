<template>
  <CreateBoard v-if="BoardIsVisible" :edit="true" />
  <DeleteModal
    v-if="DeleteIsVisible"
    :title="'Delete the Board?'"
    :content="content"
    :id="$route.params.id"
    @delete="deleteBoard"
    @cancel="closeAllModal"
  />
  <CreateTask v-if="TaskIsVisible" />
  <!-- All Header Deign Starts -->
  <header class="bg-white dark:bg-primary-dark-1 duration-500">
    <nav class="flex items-center dark:text-white">
      <div
        class="
          flex
          items-center
          space-x-10
          w-[20%]
          border-r border-primary-lighter
          dark:border-primary-dark-3
          duration-500
          py-4
          px-8
        "
      >
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          title="Logo"
          class="cursor-pointer"
        />
        <h2 class="text-3xl font-extrabold cursor-pointer">Kanban</h2>
      </div>
      <div class="flex items-center w-[80%] py-4 px-8 justify-between">
        <div>
          <h4 class="font-bold text-xl" v-if="name">{{ name }}</h4>
        </div>
        <div class="flex items-center space-x-20">
          <BaseButton
            @click="showTask"
            :disabled="$route.path == '/'"
            :class="{ 'cursor-not-allowed opacity-20': $route.path == '/' }"
            >+ Add New Task</BaseButton
          >
          <img
            src="@/assets/images/menu__dots.png"
            alt="menu"
            class="cursor-pointer"
            @click="toggleOptionState"
          />
          <!-- Board Options -->
          <TheModal light="true" v-if="optionState">
            <template #dropdown>
              <BoardOptions />
            </template>
          </TheModal>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
/**
 * Imports
 */
import BoardOptions from "@/components/Home/Board/BoardOptions.vue";
import CreateBoard from "@/components/Home/Board/CreateBoard.vue";
import CreateTask from "@/components/Home/Task/CreateTask.vue";
import { useBoardStore } from "@/stores/board";
import { computed, provide, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToggle } from "@/composables/toggle";
// import router from "@/router";

/**
 * Toggle Board Edit
 */
const [optionState, toggleOptionState, ShowOptionState, HideOptionState] =
  useToggle(false);
const router = useRouter();
const route = useRoute();
const boardStore = useBoardStore();
console.log(route.path);

/**
 * Using route for header heading
 */
const name = computed(() => {
  return route.params.name;
});

const content = ref(
  `Are you sure you want to delete the ‘${name.value}’ board? This action will remove all columns and tasks and cannot be reversed.`
);

/**
 * Board Form Visibility
 */
const showEditForm = () => {
  HideOptionState();
  showBoard();
};

const [BoardIsVisible, ChangeBoardVisibility, showBoard, hideBoard] =
  useToggle(false);
provide("showEdit", showEditForm);

/**
 * Task Visibility Section
 */

const [TaskIsVisible, ChangeTaskVisibility, showTask, hideTask] =
  useToggle(false);
// provide("close", hideTask);
const closeAllModal = () => {
  HideOptionState();
  hideBoard();
  hideTask();
  hideDelete();
};
provide("close", closeAllModal);

//Delete Visibility
const showDeleteForm = () => {
  HideOptionState();
  showDelete();
};
const [DeleteIsVisible, _, showDelete, hideDelete] = useToggle(false);
provide("showDelete", showDeleteForm);

// Deleting Board

const deleteBoard = async (id: any) => {
  try {
    await boardStore.deleteBoard(id);
    hideDelete();
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};
</script>