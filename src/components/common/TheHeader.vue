<template>
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
          <BaseButton>+ Add New Task</BaseButton>
          <img
            src="@/assets/images/menu__dots.png"
            alt="menu"
            class="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
/**
 * Imports
 */
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const name = computed(() => {
  return route.params.name;
});
</script>