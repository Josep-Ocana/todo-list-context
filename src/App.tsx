import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./context/useTodos";

function App() {
  const { todos, addTodo, onDelete, onToggle, updateTodo } = useTodos();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
