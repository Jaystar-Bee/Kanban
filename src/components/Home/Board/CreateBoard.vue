<template>
  <TheModal>
    <template #center>
      <form
        @submit.prevent="submitBoard"
        class="py-6 max-h-[90vh] overflow-y-auto flow"
        ref="form"
      >
        <h1 class="font-semibold mb-8">
          {{ edit ? "Edit Board" : "Create New Board" }}
        </h1>
        <p v-if="allIsValid == false" class="text-primary-red mb-4">
          All input must be equal or greater than 2 characters
        </p>
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
import { inject, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useBoardStore } from "@/stores/board";

const { edit } = defineProps(["edit"]);
const route = useRoute();
const close = inject("close");
const boardStore = useBoardStore();

/**
 * Adding Column
 */
const boardColumns = boardStore.allColumns;
const form = ref(null);
const allIsValid = ref(null);
const title = reactive({
  value: "",
  isValid: null,
});

let columns = reactive([
  {
    id: 1,
    value: "",
    isValid: null,
    color: "#671e1e",
  },
]);
//Setting Edit Board data If edit is true

const setEditData = () => {
  if (edit) {
    const boardName = route.params.name;
    title.value = boardName;
    let newColumns = [];
    boardColumns.forEach((column) => {
      const newCol = {
        id: column.id,
        value: column.name,
        isValid: true,
        color: column.color,
      };
      newColumns.push(newCol);
    });

    columns = reactive(newColumns);
  }
};
setEditData();

const handleData = () => {
  checkValues();
  if (!allIsValid.value) {
    form.value.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  let allColumns = [];
  columns.forEach((column) => {
    const newColumn = {
      id: column.id,
      name: column.value,
      color: column.color,
    };
    allColumns.push(newColumn);
  });
  const newBoard = {
    id: new Date().toISOString(),
    name: title.value,
    columns: allColumns,
  };
  return newBoard;
};

const submitBoard = () => {
  if (edit) {
    //edit the board
    const newBoard = handleData();
    delete newBoard.id;
    console.log(newBoard);
    boardStore.editBoard({ data: newBoard, id: route.params.id });
    close();
  } else {
    //submit the board
    const newBoard = handleData();
    boardStore.createNewBoard(newBoard);
    title.value = "";

    close();
  }
};

/**
 * Adding New Column and Delete Column
 */

const addNewColumn = () => {
  const lastId = columns[columns.length - 1]?.id;
  const newColumn = {
    id: lastId && typeof lastId !== "string" ? lastId + 1 : 1,
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