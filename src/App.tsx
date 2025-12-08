import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types";

function App() {
  const initialState = () => {
    const almacenados = localStorage.getItem("todos");
    return almacenados ? JSON.parse(almacenados) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (tarea: string) => {
    const todo: Todo = {
      id: Date.now(),
      text: tarea,
      completed: false,
    };
    setTodos([...todos, todo]);
  };

  const onDelete = (id: Todo["id"]) => {
    setTodos(todos.filter((tarea) => tarea.id !== id));
  };

  const onToggle = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const updateTodo = (id: Todo["id"], newText: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className=" flex-grow w-full md:w-4/5 lg:w-3/5 mx-auto p-5 space-y-10">
          <Form addTodo={addTodo} />
          <Stats todos={todos} />
          <TodoList
            todos={todos}
            onToggle={onToggle}
            updateTodo={updateTodo}
            onDelete={onDelete}
          />
        </main>
        <Footer todos={todos} />
      </div>
    </>
  );
}

export default App;
