import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => {
    return {
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
            },
            {
              id: 2,
              title: "Add the color to button",
            },
            {
              id: 3,
              title: "Design the modal box",
            },
            {
              id: 4,
              title: "Get to push the cose when done",
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
            },
            {
              id: 2,
              title: "Add the color to button",
            },
            {
              id: 3,
              title: "Design the modal box",
            },
            {
              id: 4,
              title: "Get to push the cose when done",
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
            },
            {
              id: 2,
              title: "Add the color to button",
            },
            {
              id: 3,
              title: "Design the modal box",
            },
            {
              id: 4,
              title: "Get to push the cose when done",
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
            },
            {
              id: 2,
              title: "Add the color to button",
            },
            {
              id: 3,
              title: "Design the modal box",
            },
            {
              id: 4,
              title: "Get to push the cose when done",
            },
          ],
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
