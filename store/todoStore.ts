import { Todo } from "@/util/type";
import { create } from "zustand";

type TodoStore = {
  todos: Todo[];
  newTodo: string;
  setNewTodo: (newTodo: string) => void;
  setTodos: (todos: Todo[]) => void;
  addTodo: () => void;
  toggleTodo: (id: number) => void;
};

const addTodo = (todos: Todo[], text: string) => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

const toggleTodo = (todos: Todo[], id: number) =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  newTodo: "",
  setNewTodo: (newTodo: string) => set((state) => ({ ...state, newTodo })),
  setTodos: (todos: Todo[]) => set((state) => ({ ...state, todos })),
  addTodo: () =>
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodo),
      newTodo: "",
    })),
  toggleTodo: (id: number) =>
    set((state) => ({ ...state, todos: toggleTodo(state.todos, id) })),
}));

export default useTodoStore;
