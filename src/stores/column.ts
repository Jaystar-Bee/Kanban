import { defineStore } from "pinia";

export const useColumnStore = defineStore("column", {
  state: () => {
    return {
      columns: [
        {
          id: 1,
          name: "Todo",
          color: "#635FC7",
        },
        {
          id: 2,
          name: "Doing",
          color: "#635FC7",
        },
        {
          id: 3,
          name: "Done",
          color: "#635FC7",
        }
      ],
    };
  },
    getters: {
        columns(state)=> {
            return state.columns
      }
  },
  actions: {},
});
