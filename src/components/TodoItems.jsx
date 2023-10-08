import { FaTrashAlt } from "react-icons/fa";

export const TodoItems = ({ todo, onComplete, onDeleteItem }) => {
  return (
    <div className="bg-white shadow-xl shadow-slate-700 p-8 m-5 text-xl font-bold rounded-xl flex justify-between">
      <input
        type="checkbox"
        checked={todo.completada}
        onChange={() => onComplete(todo.id)}
      />
      <h2 className={todo.completada ? "line-through" : "none"}>
        {todo.tarea}
      </h2>
      <FaTrashAlt onClick={() => onDeleteItem(todo.id)} />
    </div>
  );
};
