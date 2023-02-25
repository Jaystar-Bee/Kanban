import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";
import request from "@/composables/axios";

const getCurrentBoard = (boards: any) => {
  const route = useRoute();
  const id = route.params.id;
  const currentBoard = boards.find((board: any) => {
    return board.id == id;
  });
  return currentBoard;
};

export const useBoardStore = defineStore("Board", {
  state: () => {
    return {
      boards: [],
      currentBoard: null,
    };
  },
  getters: {
    allColumns(state) {
      const currentBoard = getCurrentBoard(state.boards);
      return currentBoard?.columns;
    },
    gettingCurrentBoard(state) {
      return state.currentBoard;
    },
    gettingCurrentColumn(state) {
      return state.currentBoard?.columns;
    },
    allTasks(state) {
      // const currentBoard = getCurrentBoard(state.boards);
      return this.currentBoard?.tasks;
      // return currentBoard?.tasks;
    },
  },
  actions: {
    async getAllBoards() {
      try {
        const res = await request.get("boards");
        console.log(res.data);
        this.boards = res.data;
      } catch (error: any) {
        let err;
        if (error.response) {
          err = error.response.data.message;
        } else if (error.request) {
          err = error.request;
        } else {
          err = "Error " + error.message;
        }
        throw err;
      }
    },
    async createNewBoard(payload: any) {
      // this.boards.push(payload);
      try {
        const res = await request.post("boards", payload);
        console.log(res.data);
      } catch (error: any) {
        let err;
        if (error.response) {
          err = error.response.data.message;
        } else if (error.request) {
          err = error.request;
        } else {
          err = "Error " + error.message;
        }
        throw err;
      }
    },
    setCurrentBoard(payload: any) {
      const boardIndex = this.boards.findIndex((board) => {
        return board.id == payload;
      });
      this.currentBoard = this.boards[boardIndex];
    },
    async editBoard(payload: any) {
      const id = payload.id;
      const data = payload.data;

      const boardIndex = this.boards.findIndex((board) => {
        return board.id == id;
      });
      const updatedBoard = { ...this.boards[boardIndex] };
      this.boards.splice(boardIndex, 1, {
        ...updatedBoard,
        ...data,
      });
    },
    deleteBoard(payload: any) {
      const boardIndex = this.boards.findIndex((board) => {
        return board.id == payload;
      });
      this.boards.splice(boardIndex, 1);
    },
    async createNewTask(payload: any) {
      const currentBoard = getCurrentBoard(this.boards);
      currentBoard.tasks.push(payload);
    },
  },
});
