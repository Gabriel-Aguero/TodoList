import React from "react";
import { useState } from "react";

export const TodoAdd = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTodo(userInput);
      setUserInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-5 bg-slate-700 flex gap-5">
      <input
        type="text"
        placeholder="Agregar tarea"
        className="p-3 rounded-lg w-[70%]"
        value={userInput}
        onChange={handleChange}
      />
      <button className="w-[30%] bg-blue-600 rounded-xl text-lg font-bold text-white">
        Agregar Tarea
      </button>
    </form>
  );
};
