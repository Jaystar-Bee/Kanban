import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

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
          tasks: [
            {
              id: 1,
              title: "This is the first task",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "todo",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: true,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: false,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: false,
                },
                {
                  id: 4,
                  title: "Get to push the cose when done",
                  isDone: false,
                },
              ],
            },
            {
              id: 2,
              title: "This is the second task do in time",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "todo",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: false,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: true,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: true,
                },
                {
                  id: 4,
                  title: "Get to push the cose when Done",
                  isDone: true,
                },
              ],
            },
            {
              id: 3,
              title: "This is the third task you should do in time",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "doing",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: true,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: true,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: false,
                },
                {
                  id: 4,
                  title: "Get to push the cose when is Done",
                  isDone: false,
                },
              ],
            },
            {
              id: 4,
              title: "This is the fourth task you. ",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "done",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: false,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: false,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: true,
                },
                {
                  id: 4,
                  title: "Get to push the cose when done",
                  isDone: false,
                },
              ],
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
          tasks: [
            {
              id: 1,
              title: "This is the first task to be done",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "todo",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: true,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: false,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: false,
                },
                {
                  id: 4,
                  title: "Get to push the cose when done",
                  isDone: false,
                },
              ],
            },
            {
              id: 2,
              title: "This is the second task you should do in time",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "todo",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: false,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: true,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: true,
                },
                {
                  id: 4,
                  title: "Get to push the cose when Done",
                  isDone: true,
                },
              ],
            },
            {
              id: 3,
              title: "This is the third task you should do in time",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "doing",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: true,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: true,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: false,
                },
                {
                  id: 4,
                  title: "Get to push the cose when is Done",
                  isDone: false,
                },
              ],
            },
            {
              id: 4,
              title: "This is the fourth task you. ",
              description:
                "This is the description of the first task and twe just have to do according to what is written in this dexcription. This is written for more clarity",
              status: "done",
              subtasks: [
                {
                  id: 1,
                  title: "This is the first task to be done",
                  isDone: false,
                },
                {
                  id: 2,
                  title: "Add the color to button",
                  isDone: false,
                },
                {
                  id: 3,
                  title: "Design the modal box",
                  isDone: true,
                },
                {
                  id: 4,
                  title: "Get to push the cose when done",
                  isDone: false,
                },
              ],
            },
          ],
        },
        // {
        //   id: 4,
        //   name: "RoadMap",
        //   columns: [
        //     {
        //       id: 1,
        //       name: "todo",
        //       color: "#635FC7",
        //     },
        //     {
        //       id: 2,
        //       name: "doing",
        //       color: "#EA5555",
        //     },
        //     {
        //       id: 3,
        //       name: "done",
        //       color: "#828FA3",
        //     },
        //   ],
        // },
      ],
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
    async createNewBoard(payload: any) {
      this.boards.push(payload);
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
