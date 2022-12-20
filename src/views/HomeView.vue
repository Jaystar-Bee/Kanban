<template>
  <main class="flex">
    <BoardView></BoardView>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import BoardView from "@/components/Home/BoardView.vue";
import ColumnView from "@/components/Home/ColumnView.vue";
</script>