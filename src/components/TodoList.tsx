import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: Todo["id"]) => void;
  updateTodo: (id: number, newText: string) => void;
  onDelete: (id: Todo["id"]) => void;
};

const TodoList = ({ todos, onToggle, updateTodo, onDelete }: TodoListProps) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="bg-white shadow-lg rounded-lg p-5 text-lg text-center">
          {" "}
          No tienes ninguna{" "}
          <span className="text-sky-600 font-black">tarea</span>{" "}
        </p>
      ) : (
        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              updateTodo={updateTodo}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default TodoList;
