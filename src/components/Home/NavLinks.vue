<template>
  <router-link :to="`/${board.name}/${board.id}`" v-slot="{ isActive }">
    <div
      class="
        flex
        items-center
        space-x-2
        pl-8
        py-3
        rounded-r-full
        w-[90%]
        hover:bg-primary-light
        duration-500
        font-semibold
      "
      :class="{ 'bg-primary': isActive }"
    >
      <img
        v-if="isActive"
        src="@/assets/images/board__image.png"
        alt="board-icon"
      />
      <img
        v-else
        src="@/assets/images/board__image-grey.png"
        alt="board-icon"
      />
      <p class="font-semibold" :class="{ 'text-white': isActive }">
        {{ board.name }}
      </p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
const { board } = defineProps(["board"]);
</script>