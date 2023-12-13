import { createContext, useContext, useState, ReactNode } from "react";
import { API } from "../utils/consts";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextProps {
  children: ReactNode;
}

interface TodoContextValue {
  todos: Todo[];
  getTodos: () => Promise<void>;
  addTodo: (newTodo: Todo) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  getOneTodo: (id: number) => Promise<void>;
  editTodo: (id: number, newTodo: Todo) => Promise<void>;
  oneTodo: Todo | null;
}

export const todoContext = createContext<TodoContextValue | undefined>(
  undefined
);

export function useTodoContext(): TodoContextValue {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }
  return context;
}

function TodoContext({ children }: TodoContextProps): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [oneTodo, setOneTodo] = useState<Todo | null>(null);

  async function getTodos(): Promise<void> {
    try {
      const { data } = await axios.get<Todo[]>(API);
      setTodos(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function addTodo(newTodo: Todo): Promise<void> {
    try {
      await axios.post(API, newTodo);
      getTodos();
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteTodo(id: number): Promise<void> {
    try {
      await axios.delete(`${API}/${id}`);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneTodo(id: number): Promise<void> {
    try {
      const { data } = await axios.get<Todo>(`${API}/${id}`);
      setOneTodo(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function editTodo(id: number, newTodo: Todo): Promise<void> {
    try {
      await axios.patch(`${API}/${id}`, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }

  const value: TodoContextValue = {
    todos,
    getTodos,
    addTodo,
    deleteTodo,
    getOneTodo,
    editTodo,
    oneTodo,
  };

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}

export default TodoContext;
