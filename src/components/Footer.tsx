import { useTodoStats } from "../hooks/useTodoStats";
import type { Todo } from "../types";

type FooterProps = {
  todos: Todo[];
};

const Footer = ({ todos }: FooterProps) => {
  const { total, completed } = useTodoStats(todos);

  return (
    <footer className="flex flex-col sm:flex-row justify-between  bg-gray-500 text-white p-8 text-center text-sm mt-auto">
      {/* Sección de estadisticas */}
      <div className="sm:text-left pb-5 sm:p-0">
        <p>Tareas Totales: {total}</p>
        <p>Tareas Completadas: {completed}</p>
        <p>Tareas Pendientes: {completed}</p>
      </div>

      <div className="sm:text-right">
        <p>
          &copy; {new Date().getFullYear()} **Todo List App** . Todos los
          derechos reservados.
        </p>
        <p className="mt-1">
          Desarrollado por:
          <a
            href="mailto:j.ocanapuigdevall@gmail.com"
            className="text-blue-300 hover:text-blue-100 transition duration-300 ml-1"
          >
            Josep Ocaña Puigdevall
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
