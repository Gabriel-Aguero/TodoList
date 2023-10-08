import { useState } from "react";
import data from "./data.json";
import { TodoList } from "./components/TodoList.jsx";
import { TodoAdd } from "./components/TodoAdd";

function App() {
  const [todos, setTodos] = useState(data);

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completada: !todo.completada }
          : { ...todo };
      })
    );
  };

  const onDeleteItem = (id) => {
    let newArray = todos.filter((item) => item.id !== id);
    setTodos(newArray);
  };

  const addTodo = (nuevaTarea) => {
    const nextId = Math.max(...todos.map(({ id }) => id)) + 1;
    let newItem = { id: nextId, tarea: nuevaTarea, completada: false };
    setTodos([...todos, newItem]);
    console.log(todos);
  };

  return (
    <div className="bg-slate-600 min-h-screen text-gray-800 flex flex-col justify-center py-20 px-5">
      <div className="w-[80%] max-w-2xl min-w-max bg-slate-300 flex flex-col m-auto p-10 px-5">
        <TodoAdd addTodo={addTodo} />
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
        <h4 className="text-center m-3 font-medium text-lg">
          Creado con mucho ❤ por Gabriel Agüero
        </h4>
        <span className="text-center">Programador Frontend</span>
      </div>
    </div>
  );
}

export default App;
