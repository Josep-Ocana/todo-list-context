import { createContext } from "react";
import type { Todo } from "../types";

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

import { useState } from "react";

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
