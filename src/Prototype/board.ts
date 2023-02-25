export type Board = {
  id: number;
  name: string;
  columns: {
    id: number | string;
    name: string;
    color: string;
  }[];
  tasks: {
    id: number | string;
    title: string;
    description: string;
    status: string;
    subtasks: {
      id: number;
      title: string;
      isDone: boolean;
    }[];
  }[];
}[];

export type column = {
  id: number;
  name: string;
  color: string;
};

export type task = {
  id: number | string;
  title: string;
  description: string;
  status: string;
  subtasks: {
    id: number;
    title: string;
    isDone: boolean;
  }[];
};

export type auth = {
  username: string;
  password: string;
};
