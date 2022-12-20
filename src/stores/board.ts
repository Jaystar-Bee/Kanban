import { defineStore } from "pinia";

export const useBoardStore = defineStore("Board", {
  state: () => {
    return {
      boards: [
        {
          id: 1,
          name: "Platform Launch",
        },
        {
          id: 2,
          name: "Marketing Plan",
        },
        {
          id: 4,
          name: "RoadMap",
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
