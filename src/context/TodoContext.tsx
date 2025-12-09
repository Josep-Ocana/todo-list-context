import { createContext, useState } from "react";
import type { Todo } from "../types";

// 1. TYPE
type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  onDelete: (id: Todo["id"]) => void;
  onToggle: (id: Todo["id"]) => void;
  updateTodo: (id: number, newText: string) => void;
};

// 2. CONTEXT
export const TodoContext = createContext<TodoContextType | null>(null);

// 2. INITIALSTATE
const initialState = () => {
  const almacenados = localStorage.getItem("todos");
  return almacenados ? JSON.parse(almacenados) : [];
};

// 3. PROVIDER
export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(initialState);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const onDelete = (id: Todo["id"]) => {
    setTodos((prev) => prev.filter((tarea) => tarea.id !== id));
  };

  const onToggle = (id: Todo["id"]) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const updateTodo = (id: Todo["id"], newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, onDelete, onToggle, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
