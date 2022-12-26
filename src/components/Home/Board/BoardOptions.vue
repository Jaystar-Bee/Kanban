<template>
  <div class="w-40">
    <p
      class="
        cursor-pointer
        hover:bg-primary-lightest
        p-2
        duration-300
        dark:hover:bg-primary-dark-2
        rounded-sm
      "
      @click="showEdit"
    >
      Edit
    </p>
    <p
      class="
        text-primary-red
        cursor-pointer
        hover:bg-primary-lightest
        p-2
        rounded-sm
        duration-300
        dark:hover:bg-primary-dark-2
      "
      @click="showDelete"
    >
      Delete
    </p>
  </div>
</template>


<script setup>
import { inject } from "@vue/runtime-core";

const showEdit = inject("showEdit");
const showDelete = inject("showDelete");
</script>