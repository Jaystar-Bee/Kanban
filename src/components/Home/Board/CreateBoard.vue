<template>
  <TheModal>
    <template #center>
      <form
        @submit.prevent="submitBoard"
        class="py-6 max-h-[90vh] overflow-y-auto flow"
        ref="form"
      >
        <p v-if="!allIsValid">
          All input must be equal or greater than 2 characters
        </p>
        <h1 class="font-semibold mb-8">
          {{ edit ? "Edit Board" : "Create New Board" }}
        </h1>
        <div>
          <label for="title" class="text-primary-dark-4 font-semibold"
            >Title</label
          >
          <TheInput
            :id="'title'"
            :placeholder="'title'"
            :type="'text'"
            v-model.trim="title.value"
            class="mt-2"
            :class="{ 'border-primary-red shake': title.isValid == false }"
          />
        </div>
        <div class="mt-8">
          <label for="" class="text-primary-dark-4 font-semibold"
            >Board Columns</label
          >
          <div
            v-for="column in columns"
            :key="column.id"
            class="flex space-x-4 items-center mt-2"
          >
            <TheInput
              :id="'column.id'"
              :placeholder="'e.g Get text to use'"
              :type="'text'"
              class="mt-2"
              :class="{ 'border-primary-red shake': column.isValid == false }"
              v-model.trim="column.value"
            />
            <input type="color" v-model="column.color" class="w-6" />
            <img
              src="@/assets/images/close.png"
              alt=""
              class="h-4 cursor-pointer"
              @click="deleteColumn(column.id)"
            />
          </div>
          <div class="mt-4">
            <button
              type="button"
              class="
                w-full
                rounded-full
                bg-primary-lighter
                py-3
                text-primary
                font-semibold
              "
              @click="addNewColumn"
            >
              + Add New Column
            </button>
          </div>
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

const { edit } = defineProps(["edit"]);

/**
 * Adding Column
 */
const form = ref(null);
const allIsValid = ref(null);
const title = reactive({
  value: "",
  isValid: null,
});

const columns = reactive([
  {
    id: 1,
    value: "",
    isValid: null,
    color: "#671e1e",
  },
]);

const submitBoard = () => {
  if (edit) {
    //edit the board
  } else {
    //submit the board
    checkValues();
    if (!allIsValid.value) {
      form.value.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const newBoard = {
      id: new Date().toISOString(),
      title: title.value,
    };
    console.log(newBoard);
    title.value = "";
  }
};

/**
 * Adding New Column and Delete Column
 */

const addNewColumn = () => {
  const lastId = columns[columns.length - 1]?.id;
  const newColumn = {
    id: lastId ? lastId + 1 : 1,
    value: "",
    isValid: null,
    color: "#671e1e",
  };
  columns.push(newColumn);
};

const deleteColumn = (id) => {
  const columnId = columns.findIndex((column) => column.id === id);
  columns.splice(columnId, 1);
};

// Checking Values
const checkValues = () => {
  if (title.value.length > 2) {
    title.isValid = true;
    allIsValid.value = true;
  } else {
    title.isValid = false;
    allIsValid.value = false;
  }

  columns.forEach((column) => {
    if (column.value.length >= 2) {
      column.isValid = true;
      allIsValid.value = true;
    } else {
      column.isValid = false;
      allIsValid.value = false;
    }
  });
};
</script>