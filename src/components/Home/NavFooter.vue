<template>
  <div>
    <div
      class="
        bg-primary-lightest
        flex
        py-2
        rounded-md
        dark:bg-primary-dark
        duration-500
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
        :class="isLight === 'light' ? 'justify-start' : 'justify-end'"
        @click="changeTheme"
      >
        <div class="bg-white w-5 h-5 rounded-full"></div>
      </div>
      <img src="@/assets/images/dark__image.png" alt="dark-icon" />
    </div>
    <div
      class="
        flex
        items-center
        space-x-4
        pl-6
        mt-6
        cursor-pointer
        hover:bg-primary-lighter
        rounded-r-full
        mr-4
        duration-500
        py-3
      "
      @click="changeBoardVisibility"
    >
      <img src="@/assets/images/closed__eye.png" alt="open eye" />
      <p>Hide Sidebar</p>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import { inject, ref, watch } from "vue";

/**
 * Theme
 */
const htmlTag = document.querySelector("html");

const themeExist = localStorage.getItem("theme");
let isLight = ref(themeExist || "light");
!themeExist && localStorage.setItem("theme", isLight.value);
htmlTag?.classList.add(isLight.value);

const changeTheme = (): void => {
  localStorage.setItem("theme", isLight.value == "light" ? "dark" : "light");
  const newTheme = localStorage.getItem("theme");
  isLight.value = newTheme || "";
};
watch(
  () => isLight.value,
  (newLight) => {
    htmlTag?.removeAttribute("class");
    if (newLight === "light") {
      htmlTag?.classList.add("light");
    } else {
      htmlTag?.classList.add("dark");
    }
  }
);

/**
 * Board Visibility
 */
const changeBoardVisibility = inject("changeBoardVisibility");
</script>