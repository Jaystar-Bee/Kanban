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
  max-height: 100vh;
  overflow: hidden;
}
</style>
