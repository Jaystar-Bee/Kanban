<template>
  <teleport to="body">
    <div
      v-if="!boardIsVisible"
      class="fixed bottom-[6vh] z-10"
      @click="changeBoardVisibility"
    >
      <div
        class="bg-primary rounded-r-full py-4 px-6 hover:bg-primary-light duration-300"
      >
        <img src="./../assets/images/open__eye.png" alt="eye" />
      </div>
    </div>
  </teleport>
  <main class="flex h-[calc(100%-72px)] dark:bg-primary-dark">
    <BoardView v-if="boardIsVisible" @close="changeBoardVisibility"></BoardView>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import BoardView from "@/components/Home/BoardView.vue";
import { useToggle } from "@/composables/toggle";
import { onMounted, provide } from "@vue/runtime-core";
import { toast } from "vue3-toastify";
import { useBoardStore } from "@/stores/board";
const [boardIsVisible, changeBoardVisibility] = useToggle(true);

const boardStore = useBoardStore();

// Get All Boards
const getBoards = async () => {
  try {
    await boardStore.getAllBoards();
  } catch (error: any) {
    toast.error(error);
  }
};
getBoards();

provide("changeBoardVisibility", changeBoardVisibility);
</script>