<template>
  <TheHeader></TheHeader>
  <router-view class="duration-500"></router-view>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import TheHeader from "@/components/common/TheHeader.vue";
</script>

<style >
body {
  height: 100vh;
  overflow: hidden;
}

#app {
  height: 100%;
}
</style>
