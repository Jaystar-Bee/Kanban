<template>
  <TheDropdown :light="light" />
  <teleport to="body">
    <div
      class="
        bg-white
        rounded-md
        drop-shadow-sm
        fixed
        top-[50%]
        left-[50%]
        -translate-x-1/2 -translate-y-1/2
        z-40
        p-6
      "
    >
      <p>The is the text</p>
      <slot />
    </div>
  </teleport>
</template>


<script setup>
const { light } = defineProps(["light"]);
console.log(light);
</script>

<style scoped>
.body {
  transform: translate();
}
</style>