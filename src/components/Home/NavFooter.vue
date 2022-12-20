<template>
  <div>
    <div
      class="
        bg-primary-lightest
        flex
        py-2
        rounded-md
        mx-6
        justify-center
        items-center
        space-x-4
      "
    >
      <img src="@/assets/images/light__image.png" alt="light-icon" />
      <div
        class="
          bg-primary
          w-14
          rounded-full
          p-1
          flex
          items-center
          cursor-pointer
          duration-1000
        "
        :class="isLight ? 'justify-end' : 'justify-start'"
        @click="changeTheme"
      >
        <div class="bg-white w-5 h-5 rounded-full"></div>
      </div>
      <img src="@/assets/images/dark__image.png" alt="dark-icon" />
    </div>
    <div class="flex items-center space-x-4 pl-6 mt-6">
      <img src="@/assets/images/closed__eye.png" alt="open eye" />
      <p>Hide Sidebar</p>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import { ref, watch } from "vue";

/**
 * Theme
 */
const isLight = ref(true);
const changeTheme = () => {
  isLight.value = !isLight.value;
};
watch(
  () => isLight.value,
  (newLight) => {
    const htmlTag = document.querySelector("html");
    htmlTag?.removeAttribute("class");
    if (newLight) {
      htmlTag?.classList.add("light");
    } else {
      htmlTag?.classList.add("dark");
    }
  }
);
</script>