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
.shake {
  animation: shake 0.4s ease-in 2;
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(4px);
  }
  75% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
