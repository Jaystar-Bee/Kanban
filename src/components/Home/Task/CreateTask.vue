<template>
  <TheModal>
    <template #center>
      <form
        @submit.prevent="submitTask"
        class="py-6 max-h-[90vh] overflow-y-auto flow"
        ref="form"
      >
        <h1 class="font-semibold mb-8">
          {{ edit ? "Edit Task" : "Add New Task" }}
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
            :placeholder="'e.g Arrange the Text'"
            :type="'text'"
            class="mt-2"
            :class="{ 'border-primary-red shake': title.isValid == false }"
            v-model.trim="title.value"
          />
        </div>
        <div class="mt-8">
          <label for="description" class="text-primary-dark-4 font-semibold"
            >Description</label
          >
          <TheInput
            :id="'description'"
            :textarea="true"
            :placeholder="'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'"
            :textarea__name="'description'"
            class="mt-2"
            :class="{
              'border-primary-red shake': description.isValid == false,
            }"
            v-model="description.value"
          />
        </div>
        <div class="mt-8">
          <label for="" class="text-primary-dark-4 font-semibold"
            >Subtasks</label
          >
          <div
            v-for="subTask in subTasks"
            :key="subTask.id"
            class="flex space-x-4 items-center mt-2"
          >
            <TheInput
              :id="'subTask.id'"
              :placeholder="'e.g Get text to use'"
              :type="'text'"
              class="mt-2"
              :class="{ 'border-primary-red shake': subTask.isValid == false }"
              v-model.trim="subTask.value"
            />
            <img
              src="@/assets/images/close.png"
              alt=""
              class="h-4 cursor-pointer"
              @click="deleteSubtask(subTask.id)"
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
              @click="addNewSubtask"
            >
              + Add New SubTask
            </button>
          </div>
        </div>
        <div class="mt-8">
          <label for="status" class="text-primary-dark-4 font-semibold"
            >Status</label
          >
          <select
            name="status"
            id="status"
            v-model="status.value"
            class="
              block
              w-full
              py-3
              px-4
              outline-none
              border border-primary-dark-4
              rounded-md
              mt-2
              dark:bg-primary-dark-1 dark:text-primary-lighter
            "
            :class="{ 'border-primary-red shake': status.isValid == false }"
          >
            <option
              v-for="(column, index) in columns"
              :column="column"
              :key="column.id"
              :value="column.name"
              :selected="index == 0"
            >
              {{ column.name }}
            </option>
          </select>
        </div>
        <div class="mt-10">
          <BaseButton class="w-full">{{
            edit ? "Save Changes" : "Create Task"
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
import { inject, ref, reactive, computed } from "vue";
// import { useColumnStore } from "@/stores/column";
import { useBoardStore } from "@/stores/board";
import { useTaskStore } from "@/stores/task";
const close = inject("close");

/**
 *  Checking Status to be selected
 */

/**
 * Handling The Form Data
 */
const boardStore = useBoardStore();
const taskStore = useTaskStore();
const columns = boardStore.allColumns;

const form = ref("form");
const allIsValid = ref(null);
const title = reactive({
  value: "",
  isValid: null,
});
const status = reactive({
  value: null,
  isValid: null,
});
const description = reactive({
  value: "",
  isValid: null,
});
let subTasks = reactive([
  {
    id: 1,
    value: "",
    isValid: null,
  },
]);

const checkValues = () => {
  if (title.value.length > 2) {
    title.isValid = true;
    allIsValid.value = true;
  } else {
    title.isValid = false;
    allIsValid.value = false;
  }
  if (description.value.length > 2) {
    description.isValid = true;
    allIsValid.value = true;
  } else {
    description.isValid = false;
    allIsValid.value = false;
  }
  if (status.value !== null) {
    status.isValid = true;
    allIsValid.value = true;
  } else {
    status.isValid = false;
    allIsValid.value = false;
  }

  subTasks.forEach((subTask) => {
    if (subTask.value.length >= 2) {
      subTask.isValid = true;
      allIsValid.value = true;
    } else {
      subTask.isValid = false;
      allIsValid.value = false;
    }
  });
};

const submitTask = () => {
  if (edit) {
  } else {
    checkValues();
    if (!allIsValid.value) {
      form.value.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    let allSubTask = [];
    subTasks.forEach((task) => {
      const newtask = {
        id: task.id,
        title: task.value,
        isDone: false,
      };
      allSubTask.push(newtask);
    });
    const newTask = {
      id: new Date().toISOString(),
      title: title.value,
      description: description.value,
      status: status.value,
      subtasks: allSubTask,
    };
    console.log(newTask);
    // boardStore.createNewBoard(newBoard);
    taskStore.createNewTask(newTask)
    title.value = "";
    description.value = "";
    subTasks = [];

    close();
  }
};
/**
 * Adding New subTask and Delete subTask
 */

const addNewSubtask = () => {
  const lastId = subTasks[subTasks.length - 1]?.id;
  const newSubtask = {
    id: lastId ? lastId + 1 : 1,
    value: "",
    isValid: null,
  };
  subTasks.push(newSubtask);
};

const deleteSubtask = (id) => {
  const taskID = subTasks.findIndex((task) => task.id === id);
  subTasks.splice(taskID, 1);
};

/**
 *  Getting Modal Type
 */
const edit = inject("edit");
</script>

<style scoped>
.flow::-webkit-scrollbar {
  width: 0.5rem;
}
/* .flow {
  scrollbar-width: none;
  -ms-overflow-style: none;
} */
.flow::-webkit-scrollbar-thumb {
  background: rgb(179, 179, 179);
  border-radius: 2px;
}
</style>