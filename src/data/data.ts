export type ToDo = {
  id: number;
  task: string;
  completed: boolean;
};

export const ToDoList: ToDo[] = [
  {
    id: 1,
    task: "Learn React",
    completed: false,
  },
  {
    id: 2,
    task: "Learn TypeScript",
    completed: false,
  },
  {
    id: 3,
    task: "Learn GraphQL",
    completed: false,
  },
];
