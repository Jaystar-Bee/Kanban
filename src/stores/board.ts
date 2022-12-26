import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";

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
              name: "to",
              color: "#635FC7",
            },
            {
              id: 2,
              name: "doin",
              color: "#EA5555",
            },
            {
              id: 3,
              name: "don",
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
      const currentBoard = state.boards.find((board) => {
        return board.name == stateName;
      });
      return currentBoard?.columns;
    },
  },
  actions: {
    async createNewBoard(payload: any) {
      this.boards.push(payload);
    },
    async editBoard(payload: any) {
      const id = payload.id;
      const boardIndex = this.boards.findIndex((board) => {
        return board.id == id;
      });
      this.boards.splice(boardIndex, 1, payload.data);
    },
    async deleteBoard(payload: any) {
      const router = useRouter();
      const boardIndex = this.boards.findIndex((board) => {
        return board.id == payload;
      });
      this.boards.splice(boardIndex, 1);
      router.replace("/");
    },
  },
});
