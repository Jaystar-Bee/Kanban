<template>
  <TheModal>
    <template #center>
      <form @submit.prevent="submitBoard" class="py-6">
        <h1 class="font-semibold mb-8">
          {{ edit ? "Edit Board" : "Create New Board" }}
        </h1>
        <div>
          <label for="title" class="mb-2">Title</label>
          <TheInput
            :id="'title'"
            :placeholder="'title'"
            :type="'text'"
            v-model="title.value"
          />
        </div>
        <div class="mt-4">
          <label for="color" class="mb-2">Color</label>
          <input
            type="color"
            id="color"
            v-model="color"
            class="block w-1/2 rounded-md"
          />
        </div>
        <div class="mt-8">
          <BaseButton type="submit" class="w-full">{{
            edit ? "Edit" : "Submit"
          }}</BaseButton>
        </div>
      </form>
    </template>
  </TheModal>
</template>

<script setup>
/**
 * Imports
 */
import { reactive, ref } from "vue";
const color = ref("#671e1e");
const title = reactive({
  value: "",
  isValid: null,
});

const { edit } = defineProps(["edit"]);

/**
 * Submiting the board creation or editing
 */
const submitBoard = () => {
  if (edit) {
    //edit the board
  } else {
    //submit the board
    checkValues();
    if (title.isValid == false || title.isValid == null) {
      return;
    }
    const newBoard = {
      id: new Date().toISOString(),
      title: title.value,
      color: color.value,
    };
    console.log(newBoard);
    title.value = "";
  }
};

const checkValues = () => {
  title.value.length > 2 ? (title.isValid = true) : (title.isValid = false);
};
</script>