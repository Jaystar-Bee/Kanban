import { defineStore } from "pinia";

export const useColumnStore = defineStore("column", {
  state: () => {
    return {
      columns: [
        {
          id: 1,
          name: "todo",
          color: "#635FC7",
        },
        {
          id: 2,
          name: "doing",
          color: "#EA5555",
        },
        {
          id: 3,
          name: "done",
          color: "#828FA3",
        },
      ],
    };
  },
  getters: {
    allColumns(state) {
      return state.columns;
    },
  },
  actions: {},
});
