import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useBoardStore = defineStore("Board", {
  state: () => {
    return {
      boards: [
        {
          id: 1,
          name: "Platform Launch",
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
        },
        {
          id: 2,
          name: "Marketing Plan",
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
        },
        {
          id: 4,
          name: "RoadMap",
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
        },
      ],
    };
  },
  getters: {
    allColumns(state) {
      const route = useRoute();
      const stateName = route.params.name;
      console.log(stateName);
      // console.log(state.stateName.columns);
      const currentBoard = state.boards.find((board) => {
        return board.name == stateName;
      });
      return currentBoard?.columns;
    },
  },
  actions: {},
});
