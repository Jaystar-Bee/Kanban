<template>
  <aside
    class="
      w-[20%]
      border-r
      dark:border-primary-dark-3
      border-primary-lighter
      h-[100%]
      text-primary-dark-4
      pt-10
      dark:bg-primary-dark-1
      duration-500
    "
  >
    <h2 class="pl-8 mb-8 font-semibold">ALL BOARDS ({{ numberOfBoard }})</h2>
    <nav
      class="
        flex flex-col
        space-y-6
        mt-4
        h-[70%]
        overflow-y-scroll overflow-x-hidden
      "
    >
      <NavLinks
        v-for="board in boards"
        :board="board"
        :key="board.id"
      ></NavLinks>
      <div
        class="
          flex
          items-center
          text-primary
          space-x-3
          pl-8
          cursor-pointer
          font-bold
        "
      >
        <img src="@/assets/images/board__image-primary.png" alt="" />
        <p class="font-semibold">+ Create New Board</p>
      </div>
    </nav>
    <NavFooter></NavFooter>
  </aside>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import NavLinks from "./NavLinks.vue";
import NavFooter from "./NavFooter.vue";
import { useBoardStore } from "@/stores/board";
import { computed } from "vue";
const boardStore = useBoardStore();
const boards = boardStore.$state.boards;

const numberOfBoard = computed(() => {
  return boards.length;
});
</script>

<style scoped>
nav::-webkit-scrollbar {
  width: 3px;
}
nav::-webkit-scrollbar-thumb {
  background: #ccc;
  scroll-behavior: smooth;
}
nav::-webkit-scrollbar-track {
  background: transparent;
}
</style>